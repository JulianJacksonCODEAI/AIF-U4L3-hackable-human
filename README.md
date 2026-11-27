# Hackable Human

A cybersecurity activity for CodeAI AI Foundations (AI-Powered Threats and Defenses, Lesson 3: Phishing and Password Attacks). Students investigate one of four people: what they share online, which messages sent to them are phishing, and which password attack broke into their account.

Two modes from the same files:

- **Phishing** (default): posts and inbox. Replaces Levels 1 and 2.
- **Breach**: breach report and attack types. Replaces Level 5. Open with `?mode=breach`, or set `data-mode="breach"` on the `<html>` tag in `index.html`.

Runs as a static page with no build step (Code.org Web Lab 2).

The images are AI-generated pilot art in CodeAI's Clear Contrast style, made with Gemini. Each JPG carries its generation prompt in its metadata. A designer reviews them before launch.

In Breach mode, the Level Builder Instructions panel should tell students to pick the same person they investigated in Levels 1 and 2. The app itself carries no task instructions.

## Content changes from the Level Builder source

- Ava's Message A is legit and Message C is phishing. This matches the [KEY]'s own profile table and the other three people.
- Sofia's breach report no longer uses "browser language set to Spanish" as a clue. It now says the same device tried 37 other student accounts that morning.
- Ava's lost-wallet email uses a 555 phone number so it can't belong to a real person.
- Emoji removed from captions, and a few dashes and lists reworded as sentences. The wording is otherwise the same.
