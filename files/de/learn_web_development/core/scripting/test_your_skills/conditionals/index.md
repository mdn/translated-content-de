---
title: "Testen Sie Ihre Fähigkeiten: Bedingungen"
short-title: Conditionals
slug: Learn_web_development/Core/Scripting/Test_your_skills/Conditionals
l10n:
  sourceCommit: 6d76a8fd20a1345010796083ddcab76b86d543c7
---

Ziel dieses Fähigkeitstests ist es zu beurteilen, ob Sie unseren Artikel [Entscheidungen in Ihrem Code treffen — Bedingungen](/de/docs/Learn_web_development/Core/Scripting/Conditionals) verstanden haben.

> [!NOTE]
> Sie können Lösungen ausprobieren, indem Sie den Code herunterladen und in einem Online-Editor wie [CodePen](https://codepen.io/) oder [JSFiddle](https://jsfiddle.net/) einfügen.
> Wenn ein Fehler auftritt, wird er im Ergebnisfenster auf der Seite oder in der JavaScript-Konsole des Browsers protokolliert, um Ihnen zu helfen.
>
> Wenn Sie nicht weiterkommen, können Sie sich über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Bedingungen 1

In dieser Aufgabe erhalten Sie zwei Variablen:

- `season` — enthält einen String, der die aktuelle Jahreszeit angibt.
- `response` — beginnt nicht initialisiert, wird aber später verwendet, um eine Antwort zu speichern, die im Ausgabefenster ausgegeben wird.

Um die Aufgabe zu vervollständigen:

1. Klicken Sie auf **"Play"** im untenstehenden Code-Block, um das Beispiel im MDN Playground zu bearbeiten.
2. Erstellen Sie eine Bedingung, die überprüft, ob `season` den String "summer" enthält, und wenn ja, weist `response` einen String zu, der dem Benutzer eine angemessene Nachricht über die Saison gibt. Wenn nicht, sollte `response` einen generischen String zugewiesen werden, der dem Benutzer sagt, dass wir nicht wissen, welche Jahreszeit es ist.
3. Fügen Sie eine weitere Bedingung hinzu, die überprüft, ob `season` den String "winter" enthält, und erneut einen geeigneten String `response` zuweist.

> [!CALLOUT]
>
> Sie können auch [den Ausgangspunkt für diese Aufgabe herunterladen](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/conditionals/conditionals1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Reset_-Schaltfläche im MDN Playground löschen. Wenn Sie wirklich feststecken, können Sie die Lösung unterhalb der Live-Ausgabe anzeigen.

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

## Bedingungen 2

Für diese Aufgabe erhalten Sie drei Variablen:

- `machineActive`: Enthält einen Indikator, ob der Anrufbeantworter eingeschaltet ist oder nicht (`true`/`false`).
- `score`: Enthält Ihren Punktestand in einem imaginären Spiel. Dieser Punktestand wird in den Anrufbeantworter eingespeist, der eine Antwort gibt, die zeigt, wie gut Sie abgeschnitten haben.
- `response`: Beginnt nicht initialisiert, wird aber später verwendet, um eine Antwort zu speichern, die im Ausgabefenster angezeigt wird.

Um die Aufgabe zu vervollständigen:

1. Klicken Sie auf **"Play"** im untenstehenden Code-Block, um das Beispiel im MDN Playground zu bearbeiten.
2. Erstellen Sie eine `if...else`-Struktur, die überprüft, ob die Maschine eingeschaltet ist, und legt eine Nachricht in die Variable `response`, wenn sie es nicht ist, die dem Benutzer sagt, dass er die Maschine einschalten soll.
3. Innerhalb der ersten `if...else`-Struktur verschachteln Sie eine weitere `if...else`, die je nach Wert von `score` geeignete Nachrichten in die Variable `response` einfügt, falls die Maschine eingeschaltet ist. Die verschiedenen bedingten Prüfungen (und resultierenden Antworten) sind wie folgt:
   - Punktzahl kleiner als 0 oder größer als 100 — "Das ist nicht möglich, ein Fehler ist aufgetreten."
   - Punktzahl von 0 bis 19 — "Das war eine schreckliche Punktzahl — totaler Misserfolg!"
   - Punktzahl von 20 bis 39 — "Sie wissen einige Dinge, aber das ist eine ziemlich schlechte Punktzahl. Verbesserungsbedürftig."
   - Punktzahl von 40 bis 69 — "Sie haben eine annehmbare Arbeit geleistet, gar nicht schlecht!"
   - Punktzahl von 70 bis 89 — "Das ist eine großartige Punktzahl, Sie kennen sich wirklich aus."
   - Punktzahl von 90 bis 100 — "Was für eine erstaunliche Punktzahl! Haben Sie geschummelt? Ist das echt?"

Nachdem Sie Ihren Code eingegeben haben, versuchen Sie, `machineActive` auf `true` zu ändern und `score` auf einige verschiedene Werte, um zu sehen, ob er funktioniert.
Bitte beachten Sie, dass, im Rahmen dieser Übung, der String `Your score is __` auf dem Bildschirm bleibt, unabhängig vom Wert der Variable `machineActive`.

> [!CALLOUT]
>
> Sie können auch [den Ausgangspunkt für diese Aufgabe herunterladen](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/conditionals/conditionals2-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Reset_-Schaltfläche im MDN Playground löschen. Wenn Sie wirklich feststecken, können Sie die Lösung unterhalb der Live-Ausgabe anzeigen.

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

## Bedingungen 3

Für die letzte Aufgabe erhalten Sie vier Variablen:

- `machineActive`: Enthält einen Indikator, ob die Login-Maschine eingeschaltet ist oder nicht (`true`/`false`).
- `pwd`: Enthält das Login-Passwort des Benutzers.
- `machineResult`: Beginnt uninitialisiert, wird aber später verwendet, um eine Antwort zu speichern, die im Ausgabefenster angezeigt wird und dem Benutzer mitteilt, ob die Maschine eingeschaltet ist.
- `pwdResult`: Beginnt uninitialisiert, wird aber später verwendet, um eine Antwort zu speichern, die im Ausgabefenster angezeigt wird und dem Benutzer mitteilt, ob sein Login-Versuch erfolgreich war.

Um die Aufgabe zu vervollständigen:

1. Klicken Sie auf **"Play"** im untenstehenden Code-Block, um das Beispiel im MDN Playground zu bearbeiten.
2. Erstellen Sie eine `if...else`-Struktur, die überprüft, ob die Maschine eingeschaltet ist, und legt eine Nachricht in die Variable `machineResult`, die dem Benutzer sagt, ob sie ein- oder ausgeschaltet ist.
3. Wenn die Maschine eingeschaltet ist, möchten wir auch, dass eine zweite Bedingung ausgeführt wird, die überprüft, ob das `pwd` gleich `cheese` ist. Wenn ja, sollte `pwdResult` ein String zugewiesen werden, der dem Benutzer mitteilt, dass er sich erfolgreich eingeloggt hat. Wenn nicht, sollte `pwdResult` ein anderer String zugewiesen werden, der dem Benutzer mitteilt, dass sein Login-Versuch nicht erfolgreich war. Wir möchten, dass Sie dies in einer einzigen Zeile tun, indem Sie etwas anderes als eine `if...else`-Struktur verwenden.

> [!CALLOUT]
>
> Sie können auch [den Ausgangspunkt für diese Aufgabe herunterladen](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/conditionals/conditionals3-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Reset_-Schaltfläche im MDN Playground löschen. Wenn Sie wirklich feststecken, können Sie die Lösung unterhalb der Live-Ausgabe anzeigen.

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
