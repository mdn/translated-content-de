---
title: "Testen Sie Ihre Fähigkeiten: Variablen"
short-title: Variables
slug: Learn_web_development/Core/Scripting/Test_your_skills/Variables
l10n:
  sourceCommit: 53ed5fbd3a7d323ef0629f68c41be8a1ed15c885
---

Ziel dieses Fähigkeitstests ist zu überprüfen, ob Sie unseren Artikel [Das Speichern der benötigten Informationen — Variablen](/de/docs/Learn_web_development/Core/Scripting/Variables) verstanden haben.

> [!NOTE]
> Bei den Aufgaben 1 und 2 können Sie die Lösungen in den interaktiven Editoren auf dieser Seite oder in einem Online-Editor wie [CodePen](https://codepen.io/) oder [JSFiddle](https://jsfiddle.net/) ausprobieren.
> Wenn ein Fehler in Ihrem Code vorliegt, wird er im Ergebnisfenster auf dieser Seite oder in der JavaScript-Konsole protokolliert.
>
> Wenn Sie nicht weiterkommen, können Sie sich über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Interaktive Herausforderung

Zunächst bieten wir Ihnen eine unterhaltsame, interaktive Variablen-Herausforderung, erstellt von unserem [Lernpartner](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds), [Scrimba](https://scrimba.com/home).

Schauen Sie sich die eingebettete Lernsequenz an und führen Sie die Aufgabe auf der Timeline (das kleine Geistersymbol) aus, indem Sie den Anweisungen folgen und den Code bearbeiten. Wenn Sie fertig sind, können Sie die Lernsequenz fortsetzen, um zu überprüfen, wie die Lösung des Lehrers mit Ihrer übereinstimmt.

<scrim-inline url="https://scrimba.com/learn-javascript-c0v/~011" scrimtitle="Variablenübung" survey="true"></scrim-inline>

## Aufgabe 1

Um diese Aufgabe abzuschließen:

1. Klicken Sie auf **"Play"** im Codeblock unten, um das Beispiel im MDN Playground zu bearbeiten.
2. Fügen Sie eine neue Zeile hinzu, um den im vorhandenen `myName`-Variable gespeicherten Wert auf Ihren eigenen Namen zu korrigieren.

> [!CALLOUT]
>
> Sie können auch den [Ausgangspunkt für diese Aufgabe herunterladen](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/tasks/variables/variables2-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Zurücksetzen_-Schaltfläche im MDN Playground löschen. Wenn Sie wirklich feststecken, können Sie die Lösung unterhalb der Live-Ausgabe ansehen.

<!-- Code shared across examples -->

```html hidden live-sample___variables-1 live-sample___variables-2
<section></section>
```

```css hidden live-sample___variables-1 live-sample___variables-2
* {
  box-sizing: border-box;
}

p {
  color: purple;
  margin: 0.5em 0;
}
```

<!-- Example-specific code -->

```js live-sample___variables-1
let myName = "Paul";

// Don't edit the code above here!

// Add your code here

// Don't edit the code below here!

const section = document.querySelector("section");
const para = document.createElement("p");
para.textContent = myName;
section.appendChild(para);
```

{{ EmbedLiveSample("variables-1", "100%", 60) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges JavaScript sollte ungefähr so aussehen:

```js
// ...
// Don't edit the code above here!

myName = "Chris";

// Don't edit the code below here!
// ...
```

</details>

## Aufgabe 2

Die letzte Aufgabe für jetzt — in diesem Fall wird Ihnen ein vorhandener Code zur Verfügung gestellt, der zwei Fehler enthält. Das Ergebnisfenster sollte den Namen `Chris` ausgeben und eine Aussage darüber, wie alt Chris in 20 Jahren sein wird.

Um diese Aufgabe abzuschließen:

1. Klicken Sie auf **"Play"** im Codeblock unten, um das Beispiel im MDN Playground zu bearbeiten.
2. Beheben Sie das Problem und korrigieren Sie die Ausgabe.

> [!CALLOUT]
>
> Sie können auch den [Ausgangspunkt für diese Aufgabe herunterladen](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/tasks/variables/variables3-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Zurücksetzen_-Schaltfläche im MDN Playground löschen. Wenn Sie wirklich feststecken, können Sie die Lösung unterhalb der Live-Ausgabe ansehen.

```js live-sample___variables-2
// Fix the following code

const myName = "Default";
myName = "Chris";

let myAge = "42";

// Don't edit the code below here!

const section = document.querySelector("section");
const para1 = document.createElement("p");
const para2 = document.createElement("p");
para1.textContent = myName;
para2.textContent = `In 20 years, I will be ${myAge + 20}`;
section.appendChild(para1);
section.appendChild(para2);
```

{{ EmbedLiveSample("variables-2", "100%", 60) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges JavaScript sollte ungefähr so aussehen:

```js
// Turn the const into a let, so the value can be changed
let myName = "Default";
myName = "Chris";

// myAge needs to have a number datatype
let myAge = 42;

// Don't edit the code below here!
// ...
```

</details>
