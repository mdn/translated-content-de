---
title: "Testen Sie Ihre Fähigkeiten: Bedingungen"
short-title: "Test: Bedingungen"
slug: Learn_web_development/Core/Scripting/Test_your_skills/Conditionals
l10n:
  sourceCommit: 9d3d642daf9df9ece138fa39972edc5f7d6dcd6b
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Conditionals", "Learn_web_development/Core/Scripting/Loops", "Learn_web_development/Core/Scripting")}}

Ziel dieses Fähigkeitstests ist es, Ihnen zu helfen, zu beurteilen, ob Sie unseren Artikel [Entscheidungen in Ihrem Code treffen — Bedingungen](/de/docs/Learn_web_development/Core/Scripting/Conditionals) verstanden haben.

> [!NOTE]
> Um Hilfe zu erhalten, lesen Sie unseren [Anleitung zum Testen Ihrer Fähigkeiten](/de/docs/Learn_web_development#test_your_skills). Sie können auch über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) mit uns in Kontakt treten.

## Bedingungen 1

In dieser Aufgabe erhalten Sie zwei Variablen:

- `season` — enthält eine Zeichenkette, die angibt, welche Jahreszeit aktuell ist.
- `response` — wird zunächst nicht initialisiert, aber später verwendet, um eine Antwort zu speichern, die im Ausgabepanel angezeigt wird.

Um die Aufgabe abzuschließen:

1. Erstellen Sie eine Bedingung, die überprüft, ob `season` die Zeichenkette "summer" enthält, und wenn ja, weist sie `response` eine Zeichenkette zu, die dem Benutzer eine passende Nachricht über die Jahreszeit gibt. Falls nicht, sollte `response` eine allgemeine Zeichenkette zugewiesen werden, die dem Benutzer mitteilt, dass wir nicht wissen, welche Jahreszeit es ist.
2. Fügen Sie eine weitere Bedingung hinzu, die überprüft, ob `season` die Zeichenkette "winter" enthält und erneut eine passende Zeichenkette zu `response` zuweist.

<!-- Code shared across examples -->

```html hidden live-sample___conditionals-1 live-sample___conditionals-2 live-sample___conditionals-3
<section></section>
```

```css hidden live-sample___conditionals-1 live-sample___conditionals-2 live-sample___conditionals-3
* {
  box-sizing: border-box;
}

p {
  color: purple;
  margin: 0.5em 0;
}
```

<!-- Example-specific code -->

```js live-sample___conditionals-1
let season = "summer";
let response;

// Add your code here

// Don't edit the code below here!

const section = document.querySelector("section");
const para1 = document.createElement("p");
para1.textContent = response;
section.appendChild(para1);
```

{{ EmbedLiveSample("conditionals-1", "100%", 60) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges JavaScript sollte ungefähr so aussehen:

```js
let season = "summer";
let response;

if (season === "summer") {
  response = "It's probably nice and warm where you are; enjoy the sun!";
} else if (season === "winter") {
  response = "I hope you are not too cold. Put some warm clothes on!";
} else {
  response =
    "I don't know what the season is where you are. Hope you are well.";
}

// Don't edit the code below here!
// ...
```

</details>

## Bedingungen 2

Für diese Aufgabe werden Ihnen drei Variablen gegeben:

- `machineActive`: Enthält einen Indikator dafür, ob der Anrufbeantworter eingeschaltet ist oder nicht (`true`/`false`).
- `score`: Enthält Ihre Punktzahl in einem imaginären Spiel. Diese Punktzahl wird in den Anrufbeantworter eingegeben, der eine Antwort gibt, um zu zeigen, wie gut Sie abgeschnitten haben.
- `response`: Wird zunächst nicht initialisiert, aber später verwendet, um eine Antwort zu speichern, die im Ausgabepanel angezeigt wird.

Um die Aufgabe abzuschließen:

1. Erstellen Sie eine `if...else`-Struktur, die überprüft, ob die Maschine eingeschaltet ist, und eine Nachricht in die Variable `response` einfügt, wenn sie nicht eingeschaltet ist, die dem Benutzer mitteilt, die Maschine einzuschalten.
2. Innerhalb des ersten `if...else` schachteln Sie ein weiteres `if...else`, das je nach Wert der `score` passende Nachrichten in die Variable `response` einfügt — falls die Maschine eingeschaltet ist. Die verschiedenen Bedingungstests (und die resultierenden Antworten) sind wie folgt:
   - Punktzahl kleiner als 0 oder größer als 100 — "Das ist nicht möglich, ein Fehler ist aufgetreten."
   - Punktzahl von 0 bis 19 — "Das war eine schreckliche Punktzahl — totaler Fehlschlag!"
   - Punktzahl von 20 bis 39 — "Sie wissen einiges, aber die Punktzahl ist ziemlich schlecht. Verbesserungsbedarf."
   - Punktzahl von 40 bis 69 — "Sie haben eine akzeptable Leistung erbracht, nicht schlecht!"
   - Punktzahl von 70 bis 89 — "Das ist eine großartige Punktzahl, Sie wissen wirklich Bescheid."
   - Punktzahl von 90 bis 100 — "Was für eine erstaunliche Punktzahl! Haben Sie betrogen? Ist das echt?"

Nachdem Sie Ihren Code eingegeben haben, versuchen Sie, `machineActive` auf `true` zu ändern und `score` auf einige verschiedene Werte zu setzen, um zu sehen, ob es funktioniert.
Bitte beachten Sie, dass für den Umfang dieser Übung der String `Your score is __` auf dem Bildschirm bleibt, unabhängig vom Wert der Variablen `machineActive`.

```js live-sample___conditionals-2
let response;
let score = 75;
let machineActive = false;

// Add your code here

// Don't edit the code below here!

const section = document.querySelector("section");
const para1 = document.createElement("p");
const para2 = document.createElement("p");
para1.textContent = `Your score is ${score}`;
para2.textContent = response;
section.appendChild(para1);
section.appendChild(para2);
```

{{ EmbedLiveSample("conditionals-2", "100%", 60) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges JavaScript sollte ungefähr so aussehen:

```js
let response;
let score = 75;
let machineActive = false;

if (machineActive) {
  if (score < 0 || score > 100) {
    response = "This is not possible, an error has occurred.";
  } else if (score >= 0 && score < 20) {
    response = "That was a terrible score — total fail!";
  } else if (score >= 20 && score < 40) {
    response =
      "You know some things, but it's a pretty bad score. Needs improvement.";
  } else if (score >= 40 && score < 70) {
    response = "You did a passable job, not bad!";
  } else if (score >= 70 && score < 90) {
    response = "That's a great score, you really know your stuff.";
  } else if (score >= 90 && score <= 100) {
    response = "What an amazing score! Did you cheat? Are you for real?";
  }
} else {
  response = "The machine is turned off. Turn it on to process your score.";
}

// Don't edit the code below here!
// ...
```

</details>

## Bedingungen 3

Für die letzte Aufgabe erhalten Sie vier Variablen:

- `machineActive`: Enthält einen Indikator dafür, ob die Anmeldemaschine eingeschaltet ist oder nicht (`true`/`false`).
- `pwd`: Enthält das Login-Passwort des Benutzers.
- `machineResult`: Wird zunächst nicht initialisiert, aber später verwendet, um eine Antwort zu speichern, die im Ausgabepanel angezeigt wird, um dem Benutzer mitzuteilen, ob die Maschine eingeschaltet ist.
- `pwdResult`: Wird zunächst nicht initialisiert, aber später verwendet, um eine Antwort zu speichern, die im Ausgabepanel angezeigt wird, um dem Benutzer mitzuteilen, ob sein Anmeldeversuch erfolgreich war.

Um die Aufgabe abzuschließen:

1. Erstellen Sie eine `if...else`-Struktur, die überprüft, ob die Maschine eingeschaltet ist, und eine Nachricht in die Variable `machineResult` einfügt, die dem Benutzer mitteilt, ob sie ein- oder ausgeschaltet ist.
2. Wenn die Maschine eingeschaltet ist, möchten wir, dass auch eine zweite Bedingung ausgeführt wird, die überprüft, ob `pwd` gleich `cheese` ist. Wenn ja, sollte `pwdResult` eine Zeichenkette zugewiesen werden, die dem Benutzer mitteilt, dass er sich erfolgreich angemeldet hat. Falls nicht, sollte `pwdResult` eine andere Zeichenkette zugewiesen werden, die dem Benutzer mitteilt, dass sein Anmeldeversuch nicht erfolgreich war. Wir möchten, dass Sie dies in einer einzigen Zeile tun, unter Verwendung von etwas, das keine `if...else`-Struktur ist.

```js live-sample___conditionals-3
let machineActive = true;
let pwd = "cheese";

let machineResult;
let pwdResult;

// Add your code here

// Don't edit the code below here!

const section = document.querySelector("section");
const para1 = document.createElement("p");
const para2 = document.createElement("p");
para1.textContent = machineResult;
para2.textContent = pwdResult;
section.appendChild(para1);
section.appendChild(para2);
```

{{ EmbedLiveSample("conditionals-3", "100%", 60) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges JavaScript sollte ungefähr so aussehen:

```js
let machineActive = true;
let pwd = "cheese";

let machineResult;
let pwdResult;

if (machineActive) {
  machineResult = "Machine is active. Trying login.";
  pwdResult =
    pwd === "cheese"
      ? "Login successful."
      : "Password incorrect; login failed.";
} else {
  machineResult = "Machine is inactive. Activate and try logging in again.";
}

// Don't edit the code below here!
// ...
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Conditionals", "Learn_web_development/Core/Scripting/Loops", "Learn_web_development/Core/Scripting")}}
