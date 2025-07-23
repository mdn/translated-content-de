---
title: "Testen Sie Ihre Fähigkeiten: Bedingte Anweisungen"
short-title: Conditionals
slug: Learn_web_development/Core/Scripting/Test_your_skills/Conditionals
l10n:
  sourceCommit: 2f16610802bfbdf6394ca919557a4369b1236e10
---

Das Ziel dieses Fähigkeitstests ist es, Ihnen zu helfen zu beurteilen, ob Sie unseren [Entscheidungen in Ihrem Code treffen — bedingte Anweisungen](/de/docs/Learn_web_development/Core/Scripting/Conditionals) Artikel verstanden haben.

> [!NOTE]
> Um Hilfe zu erhalten, lesen Sie unseren [Testen Sie Ihre Fähigkeiten](/de/docs/Learn_web_development#test_your_skills) Nutzungsleitfaden. Sie können uns auch über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## Bedingte Anweisungen 1

In dieser Aufgabe werden Ihnen zwei Variablen zur Verfügung gestellt:

- `season` — enthält einen String, der aussagt, welche Jahreszeit aktuell ist.
- `response` — beginnt nicht initialisiert, wird aber später verwendet, um eine Antwort zu speichern, die im Ausgabebereich angezeigt wird.

Um die Aufgabe zu erfüllen:

1. Erstellen Sie eine Bedingung, die überprüft, ob `season` den String "summer" enthält. Wenn ja, weist sie `response` einen String zu, der dem Benutzer eine passende Nachricht über die Jahreszeit gibt. Falls nicht, sollte `response` einen allgemeinen String zugewiesen bekommen, der dem Benutzer mitteilt, dass wir nicht wissen, welche Jahreszeit es ist.
2. Fügen Sie eine weitere Bedingung hinzu, die überprüft, ob `season` den String "winter" enthält, und weist wiederum einen passenden String dem `response` zu.

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

Ihr fertiges JavaScript sollte in etwa so aussehen:

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

## Bedingte Anweisungen 2

Für diese Aufgabe werden Ihnen drei Variablen gegeben:

- `machineActive`: Enthält einen Indikator dafür, ob der Anrufbeantworter ein- oder ausgeschaltet ist (`true`/`false`).
- `score`: Enthält Ihren Punktestand in einem imaginären Spiel. Dieser Punktestand wird in den Anrufbeantworter eingespeist, der eine Antwort gibt, um anzuzeigen, wie gut Sie abgeschnitten haben.
- `response`: Beginnt nicht initialisiert, wird aber später verwendet, um eine Antwort zu speichern, die im Ausgabebereich angezeigt wird.

Um die Aufgabe zu erfüllen:

1. Erstellen Sie eine `if...else` Struktur, die überprüft, ob die Maschine eingeschaltet ist und eine Nachricht in die `response` Variable setzt, wenn sie es nicht ist, und den Benutzer darauf hinweist, die Maschine einzuschalten.
2. Innerhalb des ersten `if...else` verschachteln Sie ein weiteres `if...else`, das je nach Wert des `score` passende Nachrichten in die `response` Variable setzt — wenn die Maschine eingeschaltet ist. Die verschiedenen Tests (und entsprechenden Antworten) sind wie folgt:
   - Punktestand von weniger als 0 oder mehr als 100 — "Dies ist nicht möglich, ein Fehler ist aufgetreten."
   - Punktestand von 0 bis 19 — "Das war ein schrecklicher Punktestand — totaler Verlust!"
   - Punktestand von 20 bis 39 — "Sie wissen einige Dinge, aber es ist ein ziemlich schlechter Punktestand. Verbesserung nötig."
   - Punktestand von 40 bis 69 — "Sie haben einen passablen Job gemacht, nicht schlecht!"
   - Punktestand von 70 bis 89 — "Das ist ein großartiger Punktestand, Sie kennen sich wirklich aus."
   - Punktestand von 90 bis 100 — "Was für ein erstaunlicher Punktestand! Haben Sie betrogen? Ist das echt?"

Nachdem Sie Ihren Code eingegeben haben, versuchen Sie `machineActive` auf `true` zu ändern und `score` auf einige verschiedene Werte zu setzen, um zu sehen, ob es funktioniert.
Bitte beachten Sie, dass für den Umfang dieser Übung der String `Your score is __` unabhängig vom Wert der `machineActive` Variable auf dem Bildschirm bleibt.

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

Ihr fertiges JavaScript sollte in etwa so aussehen:

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

## Bedingte Anweisungen 3

Für die letzte Aufgabe werden Ihnen vier Variablen gegeben:

- `machineActive`: Enthält einen Indikator dafür, ob die Login-Maschine ein- oder ausgeschaltet ist (`true`/`false`).
- `pwd`: Enthält das Login-Passwort des Benutzers.
- `machineResult`: Beginnt nicht initialisiert, wird aber später verwendet, um eine Antwort zu speichern, die im Ausgabebereich angezeigt wird und den Benutzer darüber informiert, ob die Maschine eingeschaltet ist.
- `pwdResult`: Beginnt nicht initialisiert, wird aber später verwendet, um eine Antwort zu speichern, die im Ausgabebereich angezeigt wird und den Benutzer darüber informiert, ob sein Login-Versuch erfolgreich war.

Um die Aufgabe zu erfüllen:

1. Erstellen Sie eine `if...else` Struktur, die überprüft, ob die Maschine eingeschaltet ist und eine Nachricht in die `machineResult` Variable setzt, die den Benutzer darüber informiert, ob sie ein- oder ausgeschaltet ist.
2. Wenn die Maschine eingeschaltet ist, möchten wir auch eine zweite Bedingung ausführen, die überprüft, ob das `pwd` gleich `cheese` ist. Wenn ja, sollte sie einen String an `pwdResult` zuweisen, der dem Benutzer mitteilt, dass der Login erfolgreich war. Wenn nicht, sollte sie einen anderen String an `pwdResult` zuweisen, der dem Benutzer mitteilt, dass der Login nicht erfolgreich war. Wir möchten, dass Sie dies in einer einzigen Zeile tun, und zwar ohne eine `if...else` Struktur zu verwenden.

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

Ihr fertiges JavaScript sollte in etwa so aussehen:

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
