'use strict';

/* ---------- Content ---------- */

const TACTICS = {
  urgency: 'Urgency',
  fear: 'Fear',
  fearOfLoss: 'Fear of loss',
  authority: 'Authority',
  excitement: 'Excitement',
  exclusivity: 'Exclusivity',
  reward: 'Reward',
  flattery: 'Flattery',
  opportunity: 'Opportunity'
};

const CHANNELS = {
  text: { label: 'Text message', icon: 'icon-text' },
  email: { label: 'Email', icon: 'icon-mail' },
  dm: { label: 'Direct message', icon: 'icon-chat' }
};

const ATTACKS = [
  {
    id: 'stuffing',
    name: 'Credential stuffing',
    inSentence: 'credential stuffing',
    definition: 'Attackers use real usernames and passwords from past breaches to break into other accounts.',
    image: 'attack-stuffing.jpg',
    alt: 'A key taken from a broken-open box unlocks a different door.'
  },
  {
    id: 'guessing',
    name: 'Password guessing',
    inSentence: 'password guessing',
    definition: 'Attackers try different passwords on one account, hoping to guess the right one.',
    image: 'attack-guessing.jpg',
    alt: 'Three wrong keys lie beside one padlock; the fourth key opens it.'
  },
  {
    id: 'spraying',
    name: 'Password spraying',
    inSentence: 'password spraying',
    definition: 'An attacker tries one common password on many different accounts to avoid detection.',
    image: 'attack-spraying.jpg',
    alt: 'One key tried along a row of padlocks; one of them opens.'
  },
  {
    id: 'brute',
    name: 'Brute force',
    inSentence: 'brute force',
    definition: 'An attacker rapidly tries a huge number of passwords on one account, using automated tools.',
    image: 'attack-brute-force.jpg',
    alt: 'A machine pushes a long line of keys toward one padlock.'
  }
];

const PERSONAS = [
  {
    id: 'ava',
    name: 'Ava Rivera',
    first: 'Ava',
    city: 'Portland, Oregon',
    portrait: 'persona-ava.jpg',
    portraitAlt: 'Ava, smiling and holding her gray cat.',
    posts: [
      {
        id: 'a1',
        image: 'post-ava-1.jpg',
        alt: 'A new payment card on a table, with a gray cat sniffing it.',
        handle: '@MochiAndMe_17',
        caption: 'POV: You just got your first debit card #adulting #catsoftiktok',
        giveaways: ['MochiAndMe', 'first debit card'],
        shares: [
          { type: 'Pet', detail: 'A cat named Mochi' },
          { type: 'Milestone', detail: 'Just got her first debit card' }
        ]
      },
      {
        id: 'a2',
        image: 'post-ava-2.jpg',
        alt: 'A birthday cake with lit candles and two balloons.',
        handle: '@AvaRiv_',
        caption: 'Scorpio time is NOW... holla if you can sting and be sweet! #Oct28isthebest #ScorpioLady #birthdaygirl',
        giveaways: ['#Oct28isthebest', '#birthdaygirl'],
        shares: [{ type: 'Birthday', detail: 'October 28' }]
      },
      {
        id: 'a3',
        image: 'post-ava-3.jpg',
        alt: 'A pile of colorful beaded friendship bracelets beside a bead box.',
        handle: '@AvaVibesTS',
        caption: 'Making bracelets for December!! Taylor! We love you!',
        giveaways: ['bracelets for December', 'Taylor'],
        shares: [{ type: 'Interests', detail: 'Taylor Swift and friendship bracelets' }]
      },
      {
        id: 'a4',
        image: 'post-ava-4.jpg',
        alt: 'Three tacos lined up on a plate.',
        handle: '@AvaRiv_',
        caption: 'Taco Thursday should be a national holiday',
        giveaways: ['Taco Thursday'],
        shares: [{ type: 'Food', detail: 'Loves tacos' }]
      }
    ],
    messages: [
      {
        id: 'ava-a',
        channel: 'text',
        from: 'Jess (chem class)',
        body: [
          'Hey Ava, quick thing: it’s Jess from chem class. I’m helping run the Homecoming raffle and need to double-check the list.',
          'You bought a ticket at lunch last week, right? Can you send me the email you used so I can confirm your entry?'
        ],
        verdict: 'legit',
        marks: [
          { text: 'Jess from chem class', note: 'A classmate Ava knows, named by class.' },
          { text: 'Homecoming raffle', note: 'A real school event Ava took part in.' },
          { text: 'the email you used', note: 'Asks only for an email she already gave. No password, link or deadline.' }
        ],
        tip: 'Not sure? Ask Jess in chem class before you reply.'
      },
      {
        id: 'ava-b',
        channel: 'email',
        from: 'Portland Food Truck Fest',
        subject: 'Portland Food Truck Fest: Lost Item Report',
        body: [
          'Hi Ava,',
          'This is the Portland Food Truck Fest volunteer desk. Someone turned in a wallet matching your description (photo ID inside says “Ava Rivera”).',
          'To return it, we need to confirm your mailing address and phone number.',
          'Please complete the form here: pdxfoodfest.com-verify.info',
          'You can also call the desk at (503) 555-0142 if you have questions. We’ll hold the item for 48 hours before sending it to lost property.',
          'Thanks,\nThe Volunteer Team'
        ],
        verdict: 'phishing',
        marks: [
          { text: 'pdxfoodfest.com-verify.info', note: 'Fake web address. It starts like a festival site, but the real address is com-verify.info.' },
          { text: 'confirm your mailing address and phone number', note: 'Asks for personal information.' },
          { text: 'hold the item for 48 hours', note: 'A deadline to rush her.' },
          { text: 'photo ID inside says “Ava Rivera”', note: 'Uses her real name so the story feels true.' }
        ],
        tactics: ['urgency', 'fearOfLoss'],
        postId: 'a4'
      },
      {
        id: 'ava-c',
        channel: 'dm',
        from: 'Message request',
        body: [
          'Hey Ava! We’re finalizing the last wave of Taylor Swift pre-show volunteers in Portland.',
          'You’d help greet guests and hand out wristbands. As thanks, you’d get free merch and early entry.',
          'If you’re interested, send your name and birthday, your cell number and your T-shirt size.',
          'Just need it tonight to lock in your spot. We’ll text you the details tomorrow!'
        ],
        verdict: 'phishing',
        marks: [
          { text: 'Taylor Swift pre-show volunteers', note: 'Built around something Ava posted about.' },
          { text: 'free merch and early entry', note: 'A reward that sounds too good to be true.' },
          { text: 'your name and birthday, your cell number', note: 'Asks for personal information in a message from a stranger.' },
          { text: 'Just need it tonight', note: 'A deadline to rush her.' }
        ],
        tactics: ['excitement', 'urgency'],
        postId: 'a3'
      }
    ],
    breach: {
      service: 'Systagram',
      location: 'Austin (residential IP)',
      time: '2:07 a.m.',
      rows: [
        { text: 'Typical access time is between 3:00 and 8:00 p.m. from a school-issued Chromebook.', ai: true },
        { text: 'This account is usually accessed from a school device during after-school hours.' },
        { text: 'The device used was a personal laptop not previously linked to the account.' },
        { text: 'Five failed login attempts were recorded over a 7-minute period before a successful login.', clue: true },
        { text: 'The password used was: MochiOct28', clue: true },
        { text: 'No evidence of password reuse across other services.', clue: true },
        { text: 'Password matches a common personal pattern: a name plus a birth date or favorite term.', ai: true, clue: true },
        { text: 'The IP address used for this login is linked to another student account at the same school.', ai: true }
      ],
      answer: 'guessing',
      why: 'A few tries, and a password built from Ava’s posts: her cat Mochi and her October 28 birthday. It wasn’t reused anywhere, so someone guessed it from what she shared.',
      wrong: {
        stuffing: 'Credential stuffing reuses a password stolen in another breach. This report found no reuse.',
        spraying: 'Spraying tries one password on many accounts. Only Ava’s account shows failed tries.',
        brute: 'Brute force means hundreds of automated tries. This was five tries in seven minutes.'
      }
    }
  },
  {
    id: 'marcus',
    name: 'Marcus Lee',
    first: 'Marcus',
    city: 'Denver, Colorado',
    portrait: 'persona-marcus.jpg',
    portraitAlt: 'Marcus, with a basketball tucked under one arm.',
    posts: [
      {
        id: 'm1',
        image: 'post-marcus-1.jpg',
        alt: 'New high-top sneakers standing on their open shoebox.',
        handle: '@MarcInMotion',
        caption: 'These kicks aren’t just shoes… they’re art #SneakerDrop #AirJordan #FreshKicks #Sneakerhead',
        giveaways: ['#SneakerDrop', '#AirJordan', '#FreshKicks'],
        shares: [{ type: 'Interests', detail: 'Sneakers and sneaker drops' }]
      },
      {
        id: 'm2',
        image: 'post-marcus-2.jpg',
        alt: 'A car steering wheel with a plain ID card clipped beside it.',
        handle: '@SneakAttack_Marc',
        caption: 'Look out, world: permit level unlocked. Next stop: license boss battle #FirstDrive #LearnersPermit #LevelUp #TeenDriver',
        giveaways: ['permit level unlocked', '#LearnersPermit'],
        shares: [{ type: 'Driving', detail: 'Just got a learner’s permit' }]
      },
      {
        id: 'm3',
        image: 'post-marcus-3.jpg',
        alt: 'A basketball on an outdoor court line next to high-top sneakers.',
        handle: '@GameOnMarc',
        caption: 'New kicks, same hustle. Court’s calling #BallIsLife #CourtReady #DripCheck #SneakerCulture',
        giveaways: ['Court’s calling', '#BallIsLife'],
        shares: [{ type: 'Sports', detail: 'Plays basketball' }]
      },
      {
        id: 'm4',
        image: 'post-marcus-4.jpg',
        alt: 'A burger and a milkshake on a diner tray.',
        handle: '@MarcInMotion',
        caption: 'Post-practice fuel. Burger Bliss never misses #DenverEats #SneakerLife #BurgerGoal',
        giveaways: ['Burger Bliss', '#DenverEats'],
        shares: [{ type: 'Location', detail: 'Lives in Denver; eats at Burger Bliss' }]
      }
    ],
    messages: [
      {
        id: 'marcus-a',
        channel: 'text',
        from: 'Coach D',
        body: [
          'Hey Marcus, Coach D here. The sports store’s got a deal for team players on new sneakers.',
          'You’ll need your school ID and cell for the discount code.',
          'Want me to add you to the list?'
        ],
        verdict: 'legit',
        marks: [
          { text: 'Coach D here', note: 'His coach, by name.' },
          { text: 'team players', note: 'Ties to the real team Marcus plays on.' },
          { text: 'Want me to add you to the list?', note: 'Asks first. No link and no deadline.' }
        ],
        tip: 'A school ID and cell number is a lot to share. Check with Coach D at practice first.'
      },
      {
        id: 'marcus-b',
        channel: 'email',
        from: 'Colorado DMV Processing Center',
        subject: 'Colorado DMV Action Required: Learner’s Permit Suspension Notice',
        body: [
          'Dear Marcus Lee,',
          'Our system shows that your learner’s permit file is incomplete. If we don’t receive verification within 72 hours, your permit will be automatically suspended.',
          'To avoid interruption, please log in to your DMV profile and confirm your info:',
          'dmv.colorado.gov-verify.info',
          'Sincerely,\nColorado DMV Processing Center'
        ],
        verdict: 'phishing',
        marks: [
          { text: 'dmv.colorado.gov-verify.info', note: 'Fake web address. It looks official, but the real address is gov-verify.info.' },
          { text: 'your permit will be automatically suspended', note: 'A threat meant to scare him.' },
          { text: 'within 72 hours', note: 'A deadline to rush him.' },
          { text: 'log in to your DMV profile', note: 'Tries to get his login.' }
        ],
        tactics: ['fear', 'authority', 'urgency'],
        postId: 'm2'
      },
      {
        id: 'marcus-c',
        channel: 'dm',
        from: '@JordanDenverSneaks',
        body: [
          'Hey Marcus! We’re giving away early access passes to the Air Jordan Retro Drop in Denver this Saturday!',
          'To confirm you’re 16+, we just need your full name, birthdate, and cell.',
          'Spots are limited and going fast. Reply by tonight to lock it in!'
        ],
        verdict: 'phishing',
        marks: [
          { text: 'giving away early access passes', note: 'A prize that sounds too good to be true.' },
          { text: 'your full name, birthdate, and cell', note: 'Asks for personal information in a message from a stranger.' },
          { text: 'Spots are limited and going fast', note: 'Makes him feel he could miss out.' },
          { text: 'Reply by tonight', note: 'A deadline to rush him.' }
        ],
        tactics: ['excitement', 'exclusivity', 'urgency'],
        postId: 'm1'
      }
    ],
    breach: {
      service: 'CourtCast Sports Streaming',
      location: 'Dallas, Texas',
      time: '11:42 p.m.',
      rows: [
        { text: 'Time and device usage match late-night phone logins on earlier dates.', ai: true },
        { text: 'Account activity followed a sneaker promotion post by the service.' },
        { text: 'The login worked on the first attempt, from an Android phone using mobile data.', clue: true },
        { text: 'The password used was: FreshKicks23', clue: true },
        { text: 'Password found in a 2023 breach dataset from a sneaker resale site.', ai: true, clue: true },
        { text: 'No password changes had been made since that breach.', clue: true },
        { text: 'The attacker viewed saved payment settings but made no purchases.' },
        { text: 'The account had not added a profile photo or payment method since signup.', ai: true }
      ],
      answer: 'stuffing',
      why: 'The attacker logged in on the first try with a password that leaked in a 2023 breach of a sneaker site. Marcus reused it here and never changed it.',
      wrong: {
        guessing: 'There were no failed tries. The attacker already had the password.',
        spraying: 'Nothing shows other accounts being tried.',
        brute: 'One try, not hundreds.'
      }
    }
  },
  {
    id: 'sofia',
    name: 'Sofia Hernandez',
    first: 'Sofia',
    city: 'Miami, Florida',
    portrait: 'persona-sofia.jpg',
    portraitAlt: 'Sofia, laughing and holding up a mango smoothie.',
    posts: [
      {
        id: 's1',
        image: 'post-sofia-1.jpg',
        alt: 'A phone on a tripod pointed at a living-room rug, with a speaker beside it.',
        handle: '@SofiMoves_15',
        caption: 'Day 47 of waiting for the concert… at least the living room tour is free #BTSARMY #DanceChallenge #BTSConcert #FandomLife',
        giveaways: ['#BTSARMY', '#BTSConcert'],
        shares: [{ type: 'Interests', detail: 'BTS and dance covers' }]
      },
      {
        id: 's2',
        image: 'post-sofia-2.jpg',
        alt: 'A juice bar counter with three smoothie cups and mangoes.',
        handle: '@SofiHndz',
        caption: 'Family business, fresh every day! Stop by for some sunshine in a cup! #MiamiEats #SupportLocal #JuiceBarLove #MangoMadness',
        giveaways: ['Family business', '#JuiceBarLove'],
        shares: [{ type: 'Family', detail: 'Her family runs a juice bar' }]
      },
      {
        id: 's3',
        image: 'post-sofia-3.jpg',
        alt: 'A beach umbrella and chair on the sand, with a smoothie cup.',
        handle: '@SofiBeachBeats',
        caption: 'Miami weather = main character energy #BeachDay #MiamiLife #SmoothieVibes #SunAndSand',
        giveaways: ['Miami weather', '#MiamiLife'],
        shares: [{ type: 'Location', detail: 'Lives in Miami' }]
      },
      {
        id: 's4',
        image: 'post-sofia-4.jpg',
        alt: 'A calendar with most days crossed out and a concert ticket pinned beside it.',
        handle: '@SofiBeachBeats',
        caption: 'Not that I’m counting or anything… #BTSCountdown #FandomFeels',
        giveaways: ['#BTSCountdown'],
        shares: [{ type: 'Plans', detail: 'Counting down to a BTS concert' }]
      }
    ],
    messages: [
      {
        id: 'sofia-a',
        channel: 'text',
        from: 'Jada (dance club)',
        body: [
          'Hey Sofia, it’s Jada from dance club!',
          'We’re putting together a BTS medley for the showcase and need everyone’s shirt sizes.',
          'Can you send yours so we can order matching tops?'
        ],
        verdict: 'legit',
        marks: [
          { text: 'Jada from dance club', note: 'A club member Sofia knows, by name.' },
          { text: 'BTS medley for the showcase', note: 'A real club event she is part of.' },
          { text: 'shirt sizes', note: 'Low-risk information. No link, login or deadline.' }
        ],
        tip: 'A shirt size is low risk. Still, never send more than the club needs.'
      },
      {
        id: 'sofia-b',
        channel: 'email',
        from: 'The Fan Box Team',
        subject: 'BTS Fan Box Shipping Confirmation',
        body: [
          'Hi Sofia,',
          'You’re receiving this email because you signed up for BTS fan rewards through one of our partners.',
          'Your VIP Fan Box includes exclusive merch and early livestream access.',
          'To confirm shipping, please verify your name, birthdate, and mailing address:',
          'fanportal.bts-box.com',
          'If we don’t hear from you in 24 hours, your spot may be reassigned.',
          'Thanks,\nThe Fan Box Team'
        ],
        verdict: 'phishing',
        marks: [
          { text: 'through one of our partners', note: 'Vague. Sofia never signed up for this.' },
          { text: 'exclusive merch and early livestream access', note: 'A prize that sounds too good to be true.' },
          { text: 'verify your name, birthdate, and mailing address', note: 'Asks for personal information.' },
          { text: 'fanportal.bts-box.com', note: 'Not an official site she has used before.' },
          { text: 'in 24 hours', note: 'A deadline to rush her.' }
        ],
        tactics: ['excitement', 'reward', 'urgency'],
        postId: 's4'
      },
      {
        id: 'sofia-c',
        channel: 'dm',
        from: '@miamijuiceguide',
        body: [
          'Hey Sofia! We saw your post about your family’s juice bar!',
          'We’re featuring small Miami businesses on our food blog this month.',
          'If you’re the owner or a family member, reply with your contact number, email, and home address so we can arrange an interview and feature you!'
        ],
        verdict: 'phishing',
        marks: [
          { text: 'We saw your post about your family’s juice bar', note: 'Built straight from her post.' },
          { text: 'feature you', note: 'Flattery to lower her guard.' },
          { text: 'your contact number, email, and home address', note: 'Far more than a blog needs. A real business interview goes through the shop.' }
        ],
        tactics: ['flattery', 'opportunity'],
        postId: 's2'
      }
    ],
    breach: {
      service: 'School Email Portal',
      location: 'IP hidden by a VPN (region unknown)',
      time: '6:58 a.m.',
      rows: [
        { text: 'Normal login activity for this account begins after 8:15 a.m.', ai: true },
        { text: 'Multiple student accounts were targeted in a short time frame.', clue: true },
        { text: 'Several short sessions were started across different usernames.', clue: true },
        { text: 'Sofia’s account was accessed using the password: BTS123', clue: true },
        { text: 'There was no earlier login history from the device used.' },
        { text: 'The password matched a set of interest-themed passwords tried across many accounts.', ai: true, clue: true },
        { text: 'The attacker viewed calendar events but did not send or delete any messages.' },
        { text: 'The same device tried logins on 37 other student accounts that morning.', ai: true, clue: true }
      ],
      answer: 'spraying',
      why: 'The attacker tried common, interest-themed passwords like BTS123 on many student accounts at once. Sofia’s simple password was one that worked.',
      wrong: {
        guessing: 'The attacker wasn’t focused on Sofia. The same passwords were tried on many accounts.',
        stuffing: 'Nothing says BTS123 leaked in an earlier breach.',
        brute: 'Brute force throws many passwords at one account. This attack tried a few passwords on many accounts.'
      }
    }
  },
  {
    id: 'ethan',
    name: 'Ethan Carter',
    first: 'Ethan',
    city: 'Seattle, Washington',
    portrait: 'persona-ethan.jpg',
    portraitAlt: 'Ethan, holding a camera with its strap around his neck.',
    posts: [
      {
        id: 'e1',
        image: 'post-ethan-1.jpg',
        alt: 'A new camera with its lens, next to its open box.',
        handle: '@LensAndLaces',
        caption: 'Meet my new partner in crime. Time to see the world through fresh glass #CanonR50 #NewGearDay #PhotographerLife #CameraUnboxing',
        giveaways: ['#CanonR50', '#NewGearDay'],
        shares: [{ type: 'New gear', detail: 'A new Canon R50 camera' }]
      },
      {
        id: 'e2',
        image: 'post-ethan-2.jpg',
        alt: 'Mountains and pine trees along a hiking trail.',
        handle: '@EthanC_PNW',
        caption: 'The light hits different up here in the PNW #PNWPhotography #HikingViews #CanonShooter #LandscapeLovers',
        giveaways: ['in the PNW', '#HikingViews'],
        shares: [{ type: 'Location', detail: 'Lives in the Pacific Northwest and hikes' }]
      },
      {
        id: 'e3',
        image: 'post-ethan-3.jpg',
        alt: 'A small stage with a guitar, a microphone stand and an amplifier.',
        handle: '@EthanShootsLive',
        caption: 'Seattle’s indie scene >>> Keep your playlists weird #IndieMusic #SeattleBands #LiveMusicLove #FestivalVibes',
        giveaways: ['Seattle’s indie scene', '#SeattleBands'],
        shares: [{ type: 'Interests', detail: 'Seattle indie bands' }]
      },
      {
        id: 'e4',
        image: 'post-ethan-4.jpg',
        alt: 'An opened acceptance letter and a plain purple pennant.',
        handle: '@EthanC_PNW',
        caption: 'Next chapter starts in the fall #UWBound #CollegeLife #FutureHusky',
        giveaways: ['#UWBound', '#FutureHusky'],
        shares: [{ type: 'School', detail: 'Starting at the University of Washington in the fall' }]
      }
    ],
    messages: [
      {
        id: 'ethan-a',
        channel: 'text',
        from: 'Jess (UW photo club)',
        body: [
          'Hey Ethan, I’m Jess, a student ambassador with UW’s freshman photo club.',
          'We’re putting together a welcome feature for incoming students.',
          'Mind sending your favorite photo and email so we can include you?'
        ],
        verdict: 'legit',
        marks: [
          { text: 'a student ambassador with UW’s freshman photo club', note: 'Gives a name, a role and a real club.' },
          { text: 'a welcome feature for incoming students', note: 'Fits Ethan’s real news.' },
          { text: 'your favorite photo and email', note: 'Low-stakes. No password, link or deadline.' }
        ],
        tip: 'You can check the club’s official page before you send anything.'
      },
      {
        id: 'ethan-b',
        channel: 'email',
        from: 'Canon Product Protection Services',
        subject: 'Canon R50: Warranty Registration Incomplete',
        body: [
          'Hi Ethan,',
          'Thank you for purchasing the Canon R50. Our records indicate your warranty registration is still incomplete.',
          'Register now to ensure full coverage, including protection against accidental damage and theft.',
          'Complete your registration here:',
          'register.canon-support.com'
        ],
        verdict: 'phishing',
        marks: [
          { text: 'your warranty registration is still incomplete', note: 'A made-up problem to get him to act.' },
          { text: 'protection against accidental damage and theft', note: 'Plays on his fear of losing coverage.' },
          { text: 'Register now', note: 'Pushes him to act right away.' },
          { text: 'register.canon-support.com', note: 'An unverified web address in a surprise email. Go to the company’s site yourself instead.' }
        ],
        tactics: ['fear', 'urgency'],
        postId: 'e1'
      },
      {
        id: 'ethan-c',
        channel: 'dm',
        from: '@TheVioletLanternsUW',
        body: [
          'Hey Ethan! I’m with a local indie band playing at UW’s welcome week.',
          'We’re offering free tickets to new students.',
          'Just need your full name, birthday, and mailing address to get you on the list.',
          'Spots are filling fast. Hit us back soon!'
        ],
        verdict: 'phishing',
        marks: [
          { text: 'free tickets to new students', note: 'A prize that sounds too good to be true.' },
          { text: 'your full name, birthday, and mailing address', note: 'Asks for personal information in a message from a stranger.' },
          { text: 'Spots are filling fast', note: 'Makes him feel he could miss out.' }
        ],
        tactics: ['reward', 'urgency'],
        postId: 'e3'
      }
    ],
    breach: {
      service: 'CloudVault Photo Backup',
      location: 'Many IP addresses (rotating, scripted)',
      time: '6:20 to 6:43 p.m.',
      rows: [
        { text: 'Unusual activity flagged: fast, repeated login attempts from rotating IP addresses.', ai: true, clue: true },
        { text: 'Over 200 password attempts were recorded before access.', clue: true },
        { text: 'The password used was: CanonR50' },
        { text: 'Attempts were clustered around photography words and phrases found on the user’s profile.' },
        { text: 'The attempted passwords followed a keyword sequence based on the user’s posts.', ai: true, clue: true },
        { text: 'The attack appeared to use a script that imitated human typing speed.', clue: true },
        { text: 'No files were changed or deleted during the session.' },
        { text: 'The account had not backed up any new photos in the past 30 days.', ai: true }
      ],
      answer: 'brute',
      why: 'Over 200 tries in about 23 minutes from rotating addresses, run by a script. The script used words from Ethan’s posts, but the method was automated trial and error.',
      wrong: {
        guessing: 'Guessing is a few tries by a person. Over 200 scripted tries is automated.',
        stuffing: 'Nothing shows CanonR50 leaked in an earlier breach.',
        spraying: 'Every attempt hit Ethan’s one account.'
      }
    }
  }
];

/* ---------- State ---------- */

const PLACEHOLDER = 'placeholder.svg';
const NARROW_QUERY = window.matchMedia('(max-width: 859px)');
const REDUCED_MOTION = window.matchMedia('(prefers-reduced-motion: reduce)');

const state = {
  mode: readMode(),
  personaId: null,
  view: 'posts',
  progress: {}
};

const el = {
  main: document.getElementById('main'),
  title: document.getElementById('screen-title'),
  status: document.getElementById('status-line'),
  back: document.getElementById('back-button'),
  meter: document.getElementById('meter'),
  meterLabel: document.getElementById('meter-label'),
  meterFill: document.getElementById('meter-fill'),
  meterValue: document.getElementById('meter-value'),
  announcer: document.getElementById('announcer')
};

function readMode() {
  let fromUrl = null;
  try {
    fromUrl = new URLSearchParams(window.location.search).get('mode');
  } catch (error) {
    fromUrl = null;
  }
  const fromPage = document.documentElement.dataset.mode;
  return fromUrl === 'breach' || (fromUrl !== 'phishing' && fromPage === 'breach') ? 'breach' : 'phishing';
}

function getPersona() {
  return PERSONAS.find(function (p) { return p.id === state.personaId; });
}

function getProgress(personaId) {
  if (!state.progress[personaId]) {
    state.progress[personaId] = {
      inspected: {},
      calls: {},
      openMessage: null,
      attackTries: [],
      solved: false
    };
  }
  return state.progress[personaId];
}

/* ---------- Helpers ---------- */

function make(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function icon(id, extraClass) {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('class', extraClass ? 'icon ' + extraClass : 'icon');
  svg.setAttribute('aria-hidden', 'true');
  svg.setAttribute('focusable', 'false');
  const use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
  use.setAttribute('href', '#' + id);
  svg.appendChild(use);
  return svg;
}

function image(src, alt, className) {
  const img = make('img', className);
  img.alt = alt;
  img.decoding = 'async';
  img.addEventListener('error', function onError() {
    img.removeEventListener('error', onError);
    img.src = PLACEHOLDER;
    img.classList.add('is-placeholder');
  });
  img.src = src;
  return img;
}

const NUMBER_FORMAT = new Intl.NumberFormat(document.documentElement.lang || 'en');

function formatNumber(value) {
  return NUMBER_FORMAT.format(value);
}

function announce(message) {
  el.announcer.textContent = '';
  window.setTimeout(function () { el.announcer.textContent = message; }, 50);
}

/* Splits text into plain runs and <mark> runs. Each mark is { text, className, label }. */
function highlight(container, text, marks) {
  const found = [];
  marks.forEach(function (mark) {
    const start = text.indexOf(mark.text);
    if (start !== -1) found.push({ start: start, end: start + mark.text.length, mark: mark });
  });
  found.sort(function (a, b) { return a.start - b.start; });
  let cursor = 0;
  found.forEach(function (hit) {
    if (hit.start < cursor) return;
    if (hit.start > cursor) container.appendChild(document.createTextNode(text.slice(cursor, hit.start)));
    const markNode = make('mark', hit.mark.className, text.slice(hit.start, hit.end));
    if (hit.mark.label) {
      markNode.appendChild(make('span', 'mark-number', hit.mark.label));
    }
    container.appendChild(markNode);
    cursor = hit.end;
  });
  if (cursor < text.length) container.appendChild(document.createTextNode(text.slice(cursor)));
}

function setTitle(text) {
  el.title.textContent = text;
  document.title = text === 'Hackable Human' ? text : `${text} – Hackable Human`;
}

function focusTitle() {
  el.title.focus({ preventScroll: true });
}

/* ---------- Header ---------- */

function renderHeader() {
  const persona = getPersona();
  el.back.hidden = !persona;
  if (!persona) {
    el.meter.hidden = true;
    el.status.textContent = '';
    return;
  }
  const progress = getProgress(persona.id);
  el.meter.hidden = false;
  if (state.mode === 'phishing') {
    const checked = Object.keys(progress.calls).length;
    const total = persona.messages.length;
    el.meterLabel.textContent = 'Messages checked';
    el.meterValue.textContent = `${formatNumber(checked)} of ${formatNumber(total)}`;
    el.meterFill.style.transform = `scaleX(${checked / total})`;
    el.meter.classList.toggle('is-complete', checked === total);
    el.status.textContent = checked === total
      ? `All of ${persona.first}’s messages are checked.`
      : `Investigating ${persona.name}.`;
  } else {
    el.meterLabel.textContent = 'Case';
    el.meterValue.textContent = progress.solved ? 'Solved' : 'Open';
    el.meterFill.style.transform = progress.solved ? 'scaleX(1)' : 'scaleX(0)';
    el.meter.classList.toggle('is-complete', progress.solved);
    el.status.textContent = `Investigating ${persona.name}.`;
  }
}

/* ---------- Persona picker ---------- */

function renderPicker() {
  state.personaId = null;
  setTitle(state.mode === 'breach' ? 'Choose a breach report' : 'Choose a person');
  renderHeader();
  el.main.replaceChildren();

  const list = make('ul', 'persona-grid');
  list.setAttribute('aria-label', 'People');
  PERSONAS.forEach(function (persona) {
    const item = make('li');
    const button = make('button', 'persona-card');
    button.type = 'button';
    button.appendChild(image(persona.portrait, persona.portraitAlt, 'persona-photo'));
    const text = make('span', 'persona-text');
    text.appendChild(make('span', 'persona-name', persona.name));
    text.appendChild(make('span', 'persona-city', persona.city));
    const progress = state.progress[persona.id];
    let detail;
    if (state.mode === 'breach') {
      detail = progress && progress.solved ? 'Case solved' : `Breach: ${persona.breach.service}`;
    } else {
      const checked = progress ? Object.keys(progress.calls).length : 0;
      detail = checked
        ? `${formatNumber(checked)} of ${formatNumber(persona.messages.length)} messages checked`
        : `${formatNumber(persona.posts.length)} posts, ${formatNumber(persona.messages.length)} messages`;
    }
    text.appendChild(make('span', 'persona-meta', detail));
    button.appendChild(text);
    button.addEventListener('click', function () { openPersona(persona.id); });
    item.appendChild(button);
    list.appendChild(item);
  });
  el.main.appendChild(list);
}

function openPersona(id) {
  state.personaId = id;
  state.view = 'posts';
  if (state.mode === 'breach') renderBreach(); else renderDesk();
  focusTitle();
  const persona = getPersona();
  announce(state.mode === 'breach'
    ? `Opened the breach report for ${persona.name}.`
    : `Opened ${persona.name}’s posts and inbox.`);
}

/* ---------- Narrow-screen view switch ---------- */

function renderViewTabs(desk, tabs) {
  const nav = make('div', 'view-tabs');
  nav.setAttribute('role', 'group');
  nav.setAttribute('aria-label', 'Show');
  tabs.forEach(function (tab) {
    const button = make('button', 'view-tab', tab.label);
    button.type = 'button';
    button.setAttribute('aria-pressed', String(state.view === tab.id));
    button.addEventListener('click', function () {
      setView(desk, tab.id);
    });
    button.dataset.view = tab.id;
    nav.appendChild(button);
  });
  return nav;
}

function setView(desk, view) {
  state.view = view;
  desk.dataset.view = view;
  desk.querySelectorAll('.view-tab').forEach(function (tab) {
    tab.setAttribute('aria-pressed', String(tab.dataset.view === view));
  });
}

/* ---------- Phishing desk ---------- */

function renderDesk() {
  const persona = getPersona();
  setTitle(`${persona.first}’s posts and inbox`);
  renderHeader();
  el.main.replaceChildren();

  const desk = make('div', 'desk');
  desk.dataset.view = state.view;
  desk.appendChild(renderViewTabs(desk, [
    { id: 'posts', label: 'Posts' },
    { id: 'inbox', label: 'Inbox' }
  ]));
  desk.appendChild(renderPostsPanel(persona));
  desk.appendChild(renderInboxPanel(persona));
  el.main.appendChild(desk);
}

function renderPostsPanel(persona) {
  const progress = getProgress(persona.id);
  const panel = make('section', 'panel panel-posts');
  panel.dataset.panel = 'posts';
  panel.setAttribute('aria-labelledby', 'posts-heading');

  const head = make('div', 'panel-head');
  head.appendChild(image(persona.portrait, '', 'panel-avatar'));
  const headText = make('div', 'panel-head-text');
  headText.appendChild(make('h2', 'panel-title', `${persona.first}’s posts`));
  headText.querySelector('h2').id = 'posts-heading';
  const count = make('p', 'panel-count');
  count.id = 'posts-count';
  headText.appendChild(count);
  head.appendChild(headText);
  panel.appendChild(head);

  const grid = make('ul', 'post-grid');
  persona.posts.forEach(function (post) {
    grid.appendChild(renderPost(persona, post, progress));
  });
  panel.appendChild(grid);
  updatePostCount(persona, panel);
  return panel;
}

function updatePostCount(persona, scope) {
  const progress = getProgress(persona.id);
  const inspected = Object.keys(progress.inspected).length;
  const count = (scope || document).querySelector('#posts-count');
  if (count) count.textContent = `What they share: ${formatNumber(inspected)} of ${formatNumber(persona.posts.length)} posts checked`;
}

function renderPost(persona, post, progress) {
  const item = make('li', 'post');
  item.id = `post-${post.id}`;
  const isOpen = Boolean(progress.inspected[post.id]);
  item.classList.toggle('is-inspected', isOpen);

  item.appendChild(image(post.image, post.alt, 'post-photo'));
  const body = make('div', 'post-body');
  body.appendChild(make('p', 'post-handle', post.handle));
  const caption = make('p', 'post-caption');
  if (isOpen) {
    highlight(caption, post.caption, post.giveaways.map(function (text) {
      return { text: text, className: 'mark-giveaway' };
    }));
  } else {
    caption.textContent = post.caption;
  }
  body.appendChild(caption);

  const toggle = make('button', 'post-toggle');
  toggle.type = 'button';
  toggle.setAttribute('aria-expanded', String(isOpen));
  toggle.appendChild(icon(isOpen ? 'icon-check' : 'icon-search'));
  toggle.appendChild(make('span', null, isOpen ? 'Checked' : 'Inspect post'));
  toggle.setAttribute('aria-label', isOpen
    ? `Checked: post by ${post.handle}`
    : `What does this post by ${post.handle} share?`);
  toggle.addEventListener('click', function () {
    if (progress.inspected[post.id]) return;
    inspectPost(persona, post);
    const next = document.querySelector(`#post-${post.id} .post-toggle`);
    if (next) next.focus();
  });
  body.appendChild(toggle);

  if (isOpen) {
    const shares = make('ul', 'share-list');
    post.shares.forEach(function (share) {
      const chip = make('li', 'share-chip');
      chip.appendChild(make('span', 'share-type', share.type));
      chip.appendChild(make('span', 'share-detail', share.detail));
      shares.appendChild(chip);
    });
    body.appendChild(shares);
  }
  item.appendChild(body);
  return item;
}

function inspectPost(persona, post) {
  const progress = getProgress(persona.id);
  progress.inspected[post.id] = true;
  const old = document.getElementById(`post-${post.id}`);
  if (old) {
    const fresh = renderPost(persona, post, progress);
    old.replaceWith(fresh);
    fresh.classList.add('is-revealing');
  }
  updatePostCount(persona);
  const details = post.shares.map(function (s) { return `${s.type}: ${s.detail}`; }).join('. ');
  announce(`This post shares ${details}.`);
}

function renderInboxPanel(persona) {
  const progress = getProgress(persona.id);
  const panel = make('section', 'panel panel-inbox');
  panel.dataset.panel = 'inbox';
  panel.setAttribute('aria-labelledby', 'inbox-heading');

  const head = make('div', 'panel-head');
  const heading = make('h2', 'panel-title', `${persona.first}’s inbox`);
  heading.id = 'inbox-heading';
  head.appendChild(heading);
  panel.appendChild(head);

  const list = make('ul', 'inbox-list');
  persona.messages.forEach(function (message, index) {
    list.appendChild(renderInboxRow(persona, message, index, progress));
  });
  panel.appendChild(list);

  const reader = make('div', 'reader');
  reader.id = 'reader';
  panel.appendChild(reader);
  renderReader(persona, reader);
  return panel;
}

function messageLetter(index) {
  return ['A', 'B', 'C'][index];
}

function renderInboxRow(persona, message, index, progress) {
  const item = make('li');
  const button = make('button', 'inbox-row');
  button.type = 'button';
  button.dataset.message = message.id;
  const isOpen = progress.openMessage === message.id;
  button.setAttribute('aria-current', isOpen ? 'true' : 'false');
  button.appendChild(icon(CHANNELS[message.channel].icon, 'inbox-icon'));

  const text = make('span', 'inbox-text');
  text.appendChild(make('span', 'inbox-from', message.from));
  button.appendChild(text);

  const call = progress.calls[message.id];
  const tag = make('span', 'inbox-tag');
  if (call) {
    tag.textContent = message.verdict === 'phishing' ? 'Phishing' : 'Legit';
    tag.classList.add(message.verdict === 'phishing' ? 'tag-bad' : 'tag-good');
  } else {
    tag.appendChild(make('span', 'visually-hidden', `Message ${messageLetter(index)}`));
    tag.appendChild(make('span', null, messageLetter(index))).setAttribute('aria-hidden', 'true');
    tag.classList.add('tag-letter');
  }
  button.appendChild(tag);
  button.addEventListener('click', function () {
    progress.openMessage = message.id;
    refreshInbox(persona);
    const reader = document.getElementById('reader');
    if (reader) reader.focus({ preventScroll: true });
  });
  item.appendChild(button);
  return item;
}

function refreshInbox(persona) {
  const panel = document.querySelector('.panel-inbox');
  if (!panel) return;
  const progress = getProgress(persona.id);
  const list = panel.querySelector('.inbox-list');
  list.replaceChildren();
  persona.messages.forEach(function (message, index) {
    list.appendChild(renderInboxRow(persona, message, index, progress));
  });
  renderReader(persona, panel.querySelector('.reader'));
  renderHeader();
}

function renderReader(persona, reader) {
  const progress = getProgress(persona.id);
  reader.replaceChildren();
  reader.setAttribute('tabindex', '-1');
  const message = persona.messages.find(function (m) { return m.id === progress.openMessage; });

  if (!message) {
    reader.classList.add('is-empty');
    reader.appendChild(icon('icon-mail', 'reader-empty-icon'));
    reader.appendChild(make('p', 'reader-empty', 'Open a message to read it.'));
    return;
  }
  reader.classList.remove('is-empty');
  reader.setAttribute('aria-label', `Message from ${message.from}`);

  const call = progress.calls[message.id];
  const index = persona.messages.indexOf(message);
  const channel = CHANNELS[message.channel];

  const sheet = make('article', `message message-${message.channel}`);
  const meta = make('div', 'message-meta');
  meta.appendChild(icon(channel.icon));
  meta.appendChild(make('span', 'message-channel', `${channel.label}, Message ${messageLetter(index)}`));
  sheet.appendChild(meta);
  sheet.appendChild(make('p', 'message-from', message.from));
  if (message.subject) sheet.appendChild(make('p', 'message-subject', message.subject));

  const marks = call ? message.marks.map(function (mark, i) {
    return {
      text: mark.text,
      className: message.verdict === 'phishing' ? 'mark-flag' : 'mark-good',
      label: String(i + 1)
    };
  }) : [];
  const body = make('div', 'message-body');
  message.body.forEach(function (paragraph) {
    const p = make('p');
    paragraph.split('\n').forEach(function (line, lineIndex) {
      if (lineIndex) p.appendChild(make('br'));
      highlight(p, line, marks);
    });
    body.appendChild(p);
  });
  sheet.appendChild(body);
  reader.appendChild(sheet);
  reader.classList.toggle('has-feedback', Boolean(call));

  if (!call) {
    reader.appendChild(renderCallButtons(persona, message));
  } else {
    reader.appendChild(renderMessageFeedback(persona, message, call));
  }
}

function renderCallButtons(persona, message) {
  const group = make('div', 'call');
  group.setAttribute('role', 'group');
  group.setAttribute('aria-label', 'Your call');
  const trust = make('button', 'call-button call-trust');
  trust.type = 'button';
  trust.appendChild(icon('icon-shield'));
  trust.appendChild(make('span', null, 'Trust it'));
  const report = make('button', 'call-button call-report');
  report.type = 'button';
  report.appendChild(icon('icon-flag'));
  report.appendChild(make('span', null, 'Report phishing'));
  trust.addEventListener('click', function () { makeCall(persona, message, 'legit'); });
  report.addEventListener('click', function () { makeCall(persona, message, 'phishing'); });
  group.appendChild(trust);
  group.appendChild(report);
  return group;
}

function makeCall(persona, message, call) {
  const progress = getProgress(persona.id);
  progress.calls[message.id] = call;
  refreshInbox(persona);
  const reader = document.getElementById('reader');
  const feedback = reader && reader.querySelector('.feedback');
  if (reader) {
    reader.classList.add('is-revealed');
    if (feedback) {
      feedback.focus({ preventScroll: true });
      const offset = feedback.getBoundingClientRect().top - reader.getBoundingClientRect().top;
      reader.scrollTop += Math.max(0, offset - 12);
    }
  }
  const right = call === message.verdict;
  const answer = message.verdict === 'phishing' ? 'phishing' : 'legit';
  announce(right
    ? `Right. This message is ${answer}. ${formatNumber(message.marks.length)} clues are highlighted.`
    : `Not quite. This message is ${answer}. ${formatNumber(message.marks.length)} clues are highlighted.`);
}

function renderMessageFeedback(persona, message, call) {
  const right = call === message.verdict;
  const isPhishing = message.verdict === 'phishing';
  const box = make('section', `feedback ${isPhishing ? 'feedback-bad' : 'feedback-good'}`);
  box.setAttribute('tabindex', '-1');
  box.setAttribute('aria-labelledby', 'feedback-heading');

  const head = make('div', 'feedback-head');
  head.appendChild(icon(isPhishing ? 'icon-alert' : 'icon-check', 'feedback-icon'));
  const heading = make('h3', 'feedback-title');
  heading.id = 'feedback-heading';
  if (isPhishing) {
    heading.textContent = right ? 'Right. This is phishing.' : 'Not quite. This one is phishing.';
  } else {
    heading.textContent = right ? 'Right. This one is legit.' : 'Not quite. This one is legit.';
  }
  head.appendChild(heading);
  box.appendChild(head);

  box.appendChild(make('p', 'feedback-label', isPhishing ? 'Red flags' : 'Why it’s reasonable'));
  const list = make('ol', 'clue-list');
  message.marks.forEach(function (mark, i) {
    const item = make('li');
    item.appendChild(make('span', 'clue-number', String(i + 1)));
    item.appendChild(make('span', 'clue-note', mark.note));
    list.appendChild(item);
  });
  box.appendChild(list);

  if (isPhishing) {
    const tactics = make('div', 'tactics');
    tactics.appendChild(make('span', 'feedback-label', 'Tricks used'));
    const chips = make('ul', 'tactic-list');
    message.tactics.forEach(function (key) {
      chips.appendChild(make('li', 'tactic-chip', TACTICS[key]));
    });
    tactics.appendChild(chips);
    box.appendChild(tactics);

    const post = persona.posts.find(function (p) { return p.id === message.postId; });
    if (post) box.appendChild(renderUsedPost(persona, post));
  } else if (message.tip) {
    box.appendChild(make('p', 'feedback-tip', message.tip));
  }
  return box;
}

/* The post the attacker used, shown inside the feedback so the evidence never needs another panel. */
function renderUsedPost(persona, post) {
  const figure = make('figure', 'used-post');
  figure.appendChild(image(post.image, post.alt, 'used-post-photo'));
  const body = make('figcaption', 'used-post-body');
  body.appendChild(make('span', 'used-post-label', `Built from ${persona.first}’s post`));
  body.appendChild(make('span', 'used-post-handle', post.handle));
  const caption = make('span', 'used-post-caption');
  highlight(caption, post.caption, post.giveaways.map(function (text) {
    return { text: text, className: 'mark-giveaway' };
  }));
  body.appendChild(caption);
  const link = make('button', 'used-post-link');
  link.type = 'button';
  link.appendChild(make('span', null, 'Show in posts'));
  link.setAttribute('aria-label', `Show the post by ${post.handle} in ${persona.first}’s posts`);
  link.addEventListener('click', function () { showLinkedPost(persona, post); });
  body.appendChild(link);
  figure.appendChild(body);
  return figure;
}

function showLinkedPost(persona, post) {
  const progress = getProgress(persona.id);
  if (!progress.inspected[post.id]) inspectPost(persona, post);
  const desk = document.querySelector('.desk');
  if (desk && NARROW_QUERY.matches) setView(desk, 'posts');
  const node = document.getElementById(`post-${post.id}`);
  if (!node) return;
  node.classList.remove('is-linked');
  void node.offsetWidth;
  node.classList.add('is-linked');
  node.scrollIntoView({ block: 'nearest', behavior: REDUCED_MOTION.matches ? 'auto' : 'smooth' });
  const toggle = node.querySelector('.post-toggle');
  if (toggle) toggle.focus({ preventScroll: true });
  announce(`This message was built from ${persona.first}’s post by ${post.handle}: ${post.caption}`);
}

/* ---------- Breach mode ---------- */

function renderBreach() {
  const persona = getPersona();
  setTitle(`${persona.first}’s breach report`);
  renderHeader();
  el.main.replaceChildren();

  const desk = make('div', 'desk desk-breach');
  desk.appendChild(renderReportPanel(persona));
  desk.appendChild(renderAttackPanel(persona));
  el.main.appendChild(desk);
}

function renderReportPanel(persona) {
  const progress = getProgress(persona.id);
  const breach = persona.breach;
  const panel = make('section', 'panel panel-report');
  panel.dataset.panel = 'report';
  panel.setAttribute('aria-labelledby', 'report-heading');

  const head = make('div', 'panel-head');
  head.appendChild(image(persona.portrait, '', 'panel-avatar'));
  const headText = make('div', 'panel-head-text');
  const heading = make('h2', 'panel-title', 'Breach report');
  heading.id = 'report-heading';
  headText.appendChild(heading);
  headText.appendChild(make('p', 'panel-count', persona.name));
  head.appendChild(headText);
  panel.appendChild(head);

  const facts = make('dl', 'report-facts');
  [
    ['Service breached', breach.service],
    ['Login location', breach.location],
    ['Time of access', breach.time]
  ].forEach(function (pair) {
    const row = make('div', 'report-fact');
    row.appendChild(make('dt', null, pair[0]));
    row.appendChild(make('dd', null, pair[1]));
    facts.appendChild(row);
  });
  panel.appendChild(facts);

  const rows = make('ul', 'report-rows');
  breach.rows.forEach(function (row) {
    const item = make('li', 'report-row');
    if (row.ai) {
      item.classList.add('is-ai');
      const badge = make('span', 'ai-badge');
      badge.appendChild(icon('icon-spark'));
      badge.appendChild(make('span', null, 'AI analysis'));
      item.appendChild(badge);
    }
    item.appendChild(make('span', 'report-text', row.text));
    if (progress.solved && row.clue) {
      item.classList.add('is-clue');
      item.appendChild(make('span', 'clue-badge', 'Key clue'));
    }
    rows.appendChild(item);
  });
  panel.appendChild(rows);
  return panel;
}

function renderAttackPanel(persona) {
  const progress = getProgress(persona.id);
  const panel = make('section', 'panel panel-attacks');
  panel.dataset.panel = 'attacks';
  panel.setAttribute('aria-labelledby', 'attacks-heading');

  const head = make('div', 'panel-head');
  const heading = make('h2', 'panel-title', 'Which attack was it?');
  heading.id = 'attacks-heading';
  head.appendChild(heading);
  panel.appendChild(head);

  const grid = make('ul', 'attack-grid');
  ATTACKS.forEach(function (attack) {
    const item = make('li');
    const button = make('button', 'attack-card');
    button.type = 'button';
    button.dataset.attack = attack.id;
    const tried = progress.attackTries.indexOf(attack.id) !== -1;
    const isAnswer = attack.id === persona.breach.answer;
    if (tried) button.classList.add(isAnswer ? 'is-right' : 'is-wrong');
    button.disabled = progress.solved || tried;
    if (button.disabled && !(progress.solved && isAnswer)) button.setAttribute('aria-disabled', 'true');
    button.appendChild(image(attack.image, attack.alt, 'attack-photo'));
    const text = make('span', 'attack-text');
    text.appendChild(make('span', 'attack-name', attack.name));
    text.appendChild(make('span', 'attack-definition', attack.definition));
    button.appendChild(text);
    if (tried) {
      const mark = make('span', 'attack-result');
      mark.appendChild(icon(isAnswer ? 'icon-check' : 'icon-x'));
      mark.appendChild(make('span', 'visually-hidden', isAnswer ? 'Correct' : 'Not this one'));
      button.appendChild(mark);
    }
    button.addEventListener('click', function () { chooseAttack(persona, attack.id); });
    item.appendChild(button);
    grid.appendChild(item);
  });
  panel.appendChild(grid);

  const last = progress.attackTries[progress.attackTries.length - 1];
  if (last) panel.insertBefore(renderAttackFeedback(persona, last), grid);
  return panel;
}

function chooseAttack(persona, attackId) {
  const progress = getProgress(persona.id);
  if (progress.solved || progress.attackTries.indexOf(attackId) !== -1) return;
  progress.attackTries.push(attackId);
  const right = attackId === persona.breach.answer;
  if (right) progress.solved = true;
  renderBreach();
  const feedback = document.querySelector('.feedback');
  if (feedback) feedback.focus({ preventScroll: true });
  if (right) {
    const desk = document.querySelector('.desk');
    if (desk) desk.classList.add('is-revealed');
  }
  const attack = ATTACKS.find(function (a) { return a.id === attackId; });
  announce(right
    ? `Right. It was ${attack.inSentence}. ${persona.breach.why} The key clues are now marked in the report.`
    : `Not ${attack.inSentence}. ${persona.breach.wrong[attackId]} Try another attack type.`);
}

function renderAttackFeedback(persona, attackId) {
  const right = attackId === persona.breach.answer;
  const attack = ATTACKS.find(function (a) { return a.id === attackId; });
  const box = make('section', 'feedback feedback-bad');
  box.setAttribute('tabindex', '-1');
  box.setAttribute('aria-labelledby', 'feedback-heading');
  const head = make('div', 'feedback-head');
  head.appendChild(icon(right ? 'icon-check' : 'icon-x', 'feedback-icon'));
  const heading = make('h3', 'feedback-title', right
    ? `Right. It was ${attack.inSentence}.`
    : `Not ${attack.inSentence}.`);
  heading.id = 'feedback-heading';
  head.appendChild(heading);
  box.appendChild(head);
  box.appendChild(make('p', 'feedback-text', right ? persona.breach.why : persona.breach.wrong[attackId]));
  if (right) {
    box.appendChild(make('p', 'feedback-tip', 'The key clues are now marked in the report.'));
  } else {
    box.appendChild(make('p', 'feedback-tip', 'Look at the report again and try another attack type.'));
  }
  return box;
}

/* ---------- Start ---------- */

function start() {
  document.documentElement.dataset.mode = state.mode;
  el.back.addEventListener('click', function () {
    renderPicker();
    focusTitle();
    announce('Back to the list of people.');
  });
  renderPicker();
}

try {
  start();
} catch (error) {
  el.main.replaceChildren(make('p', 'load-error', 'Something went wrong loading this activity. Try reloading the page.'));
}
