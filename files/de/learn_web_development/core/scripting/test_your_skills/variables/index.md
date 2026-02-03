---
title: "Testen Sie Ihre Fähigkeiten: Variablen"
short-title: "Test: Variablen"
slug: Learn_web_development/Core/Scripting/Test_your_skills/Variables
l10n:
  sourceCommit: b36d59a0df933597c7d3b55e363f7a59e30d3ba3
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Variables", "Learn_web_development/Core/Scripting/Math", "Learn_web_development/Core/Scripting")}}

Das Ziel dieses Fähigkeitstests ist es, Ihnen zu helfen, einzuschätzen, ob Sie unseren Artikel [Informationen speichern, die Sie benötigen — Variablen](/de/docs/Learn_web_development/Core/Scripting/Variables) verstanden haben.

> [!NOTE]
> Um Hilfe zu erhalten, lesen Sie unseren [Testen Sie Ihre Fähigkeiten](/de/docs/Learn_web_development#test_your_skills) Nutzungsleitfaden. Sie können auch über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) mit uns in Kontakt treten.

## Interaktive Herausforderung

Zunächst bieten wir Ihnen eine unterhaltsame, interaktive Variablen-Herausforderung, die von unserem [Lernpartner](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds), [Scrimba](https://scrimba.com/home), erstellt wurde.

Schauen Sie sich das eingebettete "Scrim" an und erledigen Sie die Aufgabe auf der Zeitleiste (das kleine Geistersymbol), indem Sie den Anweisungen folgen und den Code bearbeiten. Wenn Sie fertig sind, können Sie das "Scrim" weiter anschauen, um zu sehen, wie die Lösung des Lehrers mit Ihrer übereinstimmt.

<mdn-scrim-inline url="https://scrimba.com/learn-javascript-c0v/~011" scrimtitle="Übung mit Variablen" survey="true"></mdn-scrim-inline>

## Variablen 1

Um diese Aufgabe abzuschließen, fügen Sie eine neue Zeile hinzu, um den im vorhandenen `myName`-Variable gespeicherten Wert zu Ihrem eigenen Namen zu korrigieren.

<!-- Code shared across examples -->

```html hidden live-sample___variables-1 live-sample___variables-2 live-sample___variables-1-finish live-sample___variables-2-finish
<section></section>
```

```css hidden live-sample___variables-1 live-sample___variables-2 live-sample___variables-1-finish live-sample___variables-2-finish
* {
  box-sizing: border-box;
}

p {
  color: purple;
  margin: 0.5em 0;
}
```

<!-- Example-specific code -->

Der Ausgangspunkt der Aufgabe sieht wie folgt aus:

{{ EmbedLiveSample("variables-1", "100%", 60) }}

Hier ist der zugrundeliegende Code für diesen Ausgangspunkt:

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

Die aktualisierte Ausgabe sollte wie folgt aussehen:

{{ EmbedLiveSample("variables-1-finish", "100%", 60) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges JavaScript sollte etwa so aussehen:

```js
// ...
// Don't edit the code above here!

myName = "Chris";

// Don't edit the code below here!
// ...
```

```js hidden live-sample___variables-1-finish
let myName = "Paul";

myName = "Chris";

const section = document.querySelector("section");
const para = document.createElement("p");
para.textContent = myName;
section.appendChild(para);
```

</details>

## Variablen 2

Die letzte Aufgabe vorerst — in diesem Fall wird Ihnen ein vorhandener Code bereitgestellt, der zwei Fehler enthält. Das Ergebnisfenster sollte den Namen `Chris` ausgeben und eine Aussage darüber machen, wie alt Chris in 20 Jahren sein wird. Wir möchten, dass Sie das Problem beheben und die Ausgabe korrigieren.

Der Ausgangspunkt der Aufgabe sieht wie folgt aus (es wird noch nichts angezeigt):

{{ EmbedLiveSample("variables-2", "100%", 60) }}

Hier ist der zugrundeliegende Code für diesen Ausgangspunkt:

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

Die aktualisierte Ausgabe sollte wie folgt aussehen:

{{ EmbedLiveSample("variables-2-finish", "100%", 80) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges JavaScript sollte etwa so aussehen:

```js
// Turn the const into a let, so the value can be changed
let myName = "Default";
myName = "Chris";

// myAge needs to have a number datatype
let myAge = 42;

// Don't edit the code below here!
// ...
```

```js hidden live-sample___variables-2-finish
let myName = "Default";
myName = "Chris";
let myAge = 42;

const section = document.querySelector("section");
const para1 = document.createElement("p");
const para2 = document.createElement("p");
para1.textContent = myName;
para2.textContent = `In 20 years, I will be ${myAge + 20}`;
section.appendChild(para1);
section.appendChild(para2);
```

</details>

## Siehe auch

Sehen Sie sich [Übungszeit - Teil 3: let und const](https://scrimba.com/learn-javascript-c0v/~059?via=mdn) <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> von Scrimba an: Eine interaktive Herausforderung mit mehreren Tests zu `let` und `const`.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Variables", "Learn_web_development/Core/Scripting/Math", "Learn_web_development/Core/Scripting")}}
