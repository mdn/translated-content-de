---
title: "Testen Sie Ihre Kenntnisse: Bedingte Anweisungen"
short-title: "Test: Bedingte Anweisungen"
slug: Learn_web_development/Core/Scripting/Test_your_skills/Conditionals
l10n:
  sourceCommit: b36d59a0df933597c7d3b55e363f7a59e30d3ba3
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Conditionals", "Learn_web_development/Core/Scripting/Loops", "Learn_web_development/Core/Scripting")}}

Das Ziel dieses Fähigkeitstests ist es, Ihnen zu helfen, zu beurteilen, ob Sie unseren Artikel [Entscheidungen in Ihrem Code treffen — bedingte Anweisungen](/de/docs/Learn_web_development/Core/Scripting/Conditionals) verstanden haben.

> [!NOTE]
> Um Hilfe zu erhalten, lesen Sie unseren [Testen Sie Ihre Fähigkeiten](/de/docs/Learn_web_development#test_your_skills) Leitfaden. Sie können sich auch über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Bedingte Anweisungen 1

Bei dieser Aufgabe erhalten Sie zwei Variablen:

- `season` — enthält einen String, der angibt, welche Jahreszeit aktuell ist.
- `response` — ist zunächst nicht initialisiert, wird aber später verwendet, um eine Antwort zu speichern, die im Ausgabefeld angezeigt wird.

Um die Aufgabe zu vervollständigen:

1. Erstellen Sie eine Bedingung, die überprüft, ob `season` den String "summer" enthält. Wenn ja, weist sie `response` eine Zeichenkette zu, die dem Benutzer eine passende Nachricht über die Jahreszeit gibt. Wenn nicht, sollte sie `response` eine generische Zeichenkette zuweisen, die dem Benutzer mitteilt, dass wir nicht wissen, welche Jahreszeit es ist.
2. Fügen Sie eine weitere Bedingung hinzu, die überprüft, ob `season` den String "winter" enthält, und weist `response` erneut eine passende Zeichenkette zu.

<!-- Code shared across examples -->

```html hidden live-sample___conditionals-1 live-sample___conditionals-2 live-sample___conditionals-3 live-sample___conditionals-1-finish live-sample___conditionals-2-finish live-sample___conditionals-3-finish
<section></section>
```

```css hidden live-sample___conditionals-1 live-sample___conditionals-2 live-sample___conditionals-3 live-sample___conditionals-1-finish live-sample___conditionals-2-finish live-sample___conditionals-3-finish
* {
  box-sizing: border-box;
}

p {
  color: purple;
  margin: 0.5em 0;
}
```

<!-- Example-specific code -->

Der Ausgangspunkt der Aufgabe sieht folgendermaßen aus (es wird noch nichts angezeigt):

{{ EmbedLiveSample("conditionals-1", "100%", 60) }}

Hier ist der zugrunde liegende Code für diesen Ausgangspunkt:

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

Der anfängliche Zustand Ihrer aktualisierten Ausgabe sollte folgendermaßen aussehen:

{{ EmbedLiveSample("conditionals-1-finish", "100%", 60) }}

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

```js hidden live-sample___conditionals-1-finish
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

const section = document.querySelector("section");
const para1 = document.createElement("p");
para1.textContent = response;
section.appendChild(para1);
```

</details>

## Bedingte Anweisungen 2

Für diese Aufgabe erhalten Sie drei Variablen:

- `machineActive`: Enthält einen Indikator dafür, ob der Anrufbeantworter eingeschaltet ist oder nicht (`true`/`false`).
- `score`: Enthält Ihre Punktzahl in einem imaginären Spiel. Diese Punktzahl wird in den Anrufbeantworter eingegeben, der eine Antwort gibt, um anzuzeigen, wie gut Sie abgeschnitten haben.
- `response`: Beginnt nicht initialisiert, wird aber später verwendet, um eine Antwort zu speichern, die im Ausgabefeld angezeigt wird.

Um die Aufgabe zu vervollständigen:

1. Erstellen Sie eine `if...else`-Struktur, die überprüft, ob die Maschine eingeschaltet ist und gibt eine Nachricht in die Variable `response` ein, wenn sie nicht eingeschaltet ist, die dem Benutzer mitteilt, die Maschine einzuschalten.
2. Innerhalb der ersten `if...else`-Struktur verschachteln Sie eine weitere `if...else`, die je nach Wert von `score` entsprechende Nachrichten in die Variable `response` einfügt — wenn die Maschine eingeschaltet ist. Die verschiedenen Bedingungstests (und resultierenden Antworten) sind wie folgt:
   - Punktzahl von weniger als 0 oder mehr als 100 — "Das ist nicht möglich, ein Fehler ist aufgetreten."
   - Punktzahl von 0 bis 19 — "Das war eine schreckliche Punktzahl — totaler Fehlschlag!"
   - Punktzahl von 20 bis 39 — "Sie wissen einige Dinge, aber es ist eine ziemlich schlechte Punktzahl. Muss verbessert werden."
   - Punktzahl von 40 bis 69 — "Sie haben eine passable Leistung erbracht, nicht schlecht!"
   - Punktzahl von 70 bis 89 — "Das ist eine großartige Punktzahl, Sie kennen sich wirklich gut aus."
   - Punktzahl von 90 bis 100 — "Was für eine erstaunliche Punktzahl! Haben Sie geschummelt? Meinen Sie das ernst?"

Nachdem Sie Ihren Code eingegeben haben, versuchen Sie, `machineActive` auf `true` zu ändern und `score` auf einige verschiedene Werte, um zu sehen, ob es funktioniert.
Bitte beachten Sie, dass der String `Your score is __` unabhängig vom Wert der Variable `machineActive` auf dem Bildschirm bleibt.

Der Ausgangspunkt der Aufgabe sieht folgendermaßen aus:

{{ EmbedLiveSample("conditionals-2", "100%", 60) }}

Hier ist der zugrunde liegende Code für diesen Ausgangspunkt:

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

Der anfängliche Zustand Ihrer aktualisierten Ausgabe sollte folgendermaßen aussehen:

{{ EmbedLiveSample("conditionals-2-finish", "100%", 80) }}

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

```js hidden live-sample___conditionals-2-finish
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

const section = document.querySelector("section");
const para1 = document.createElement("p");
const para2 = document.createElement("p");
para1.textContent = `Your score is ${score}`;
para2.textContent = response;
section.appendChild(para1);
section.appendChild(para2);
```

</details>

## Bedingte Anweisungen 3

Für die letzte Aufgabe erhalten Sie vier Variablen:

- `machineActive`: Enthält einen Indikator dafür, ob der Login-Automat eingeschaltet ist oder nicht (`true`/`false`).
- `pwd`: Enthält das Login-Passwort des Benutzers.
- `machineResult`: Beginnt nicht initialisiert, wird aber später verwendet, um eine Antwort zu speichern, die im Ausgabefeld angezeigt wird, um den Benutzer darüber zu informieren, ob die Maschine eingeschaltet ist.
- `pwdResult`: Beginnt nicht initialisiert, wird aber später verwendet, um eine Antwort zu speichern, die im Ausgabefeld angezeigt wird, um den Benutzer darüber zu informieren, ob sein Login-Versuch erfolgreich war.

Um die Aufgabe zu vervollständigen:

1. Erstellen Sie eine `if...else`-Struktur, die überprüft, ob die Maschine eingeschaltet ist, und eine Nachricht in die Variable `machineResult` eingibt, die dem Benutzer mitteilt, ob sie ein- oder ausgeschaltet ist.
2. Wenn die Maschine eingeschaltet ist, möchten wir auch, dass eine zweite Bedingung ausgeführt wird, die überprüft, ob das `pwd` gleich `cheese` ist. Wenn ja, sollte sie `pwdResult` eine Zeichenkette zuweisen, die dem Benutzer mitteilt, dass der Login erfolgreich war. Wenn nicht, sollte sie `pwdResult` eine andere Zeichenkette zuweisen, die dem Benutzer mitteilt, dass der Login-Versuch nicht erfolgreich war. Wir möchten, dass Sie dies in einer einzigen Zeile tun, indem Sie etwas verwenden, das keine `if...else`-Struktur ist.

Der Ausgangspunkt der Aufgabe sieht folgendermaßen aus (es wird noch nichts angezeigt):

{{ EmbedLiveSample("conditionals-3", "100%", 60) }}

Hier ist der zugrunde liegende Code für diesen Ausgangspunkt:

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

Die aktualisierte Ausgabe sollte folgendermaßen aussehen:

{{ EmbedLiveSample("conditionals-3-finish", "100%", 80) }}

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

```js hidden live-sample___conditionals-3-finish
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

const section = document.querySelector("section");
const para1 = document.createElement("p");
const para2 = document.createElement("p");
para1.textContent = machineResult;
para2.textContent = pwdResult;
section.appendChild(para1);
section.appendChild(para2);
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Conditionals", "Learn_web_development/Core/Scripting/Loops", "Learn_web_development/Core/Scripting")}}
