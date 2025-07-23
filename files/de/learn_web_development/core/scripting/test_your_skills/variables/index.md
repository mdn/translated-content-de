---
title: "Testen Sie Ihre Fähigkeiten: Variablen"
short-title: Variables
slug: Learn_web_development/Core/Scripting/Test_your_skills/Variables
l10n:
  sourceCommit: 2f16610802bfbdf6394ca919557a4369b1236e10
---

Ziel dieses Fertigkeitstests ist es, Ihnen zu helfen einzuschätzen, ob Sie unseren Artikel [Informationen, die Sie benötigen, speichern — Variablen](/de/docs/Learn_web_development/Core/Scripting/Variables) verstanden haben.

> [!NOTE]
> Um Hilfe zu erhalten, lesen Sie unseren [Leitfaden zur Nutzung von Fertigkeitstests](/de/docs/Learn_web_development#test_your_skills). Sie können sich auch über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Interaktive Herausforderung

Zunächst bieten wir Ihnen eine unterhaltsame, interaktive Herausforderung zu Variablen an, die von unserem [Lernpartner](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds), [Scrimba](https://scrimba.com/home), erstellt wurde.

Sehen Sie sich den eingebetteten Scrim an und führen Sie die Aufgabe auf der Timeline (das kleine Geistersymbol) durch, indem Sie den Anweisungen folgen und den Code bearbeiten. Wenn Sie fertig sind, können Sie den Scrim weiter ansehen, um zu überprüfen, wie die Lösung des Lehrers mit Ihrer übereinstimmt.

<scrim-inline url="https://scrimba.com/learn-javascript-c0v/~011" scrimtitle="Variablen üben" survey="true"></scrim-inline>

## Aufgabe 1

Um diese Aufgabe abzuschließen, fügen Sie eine neue Zeile hinzu, um den in der vorhandenen Variablen `myName` gespeicherten Wert auf Ihren eigenen Namen zu korrigieren.

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

Ihr fertiges JavaScript sollte etwa so aussehen:

```js
// ...
// Don't edit the code above here!

myName = "Chris";

// Don't edit the code below here!
// ...
```

</details>

## Aufgabe 2

Die letzte Aufgabe für den Moment — in diesem Fall wird Ihnen ein vorhandener Code bereitgestellt, der zwei Fehler enthält. Das Ergebnispanel sollte den Namen `Chris` und eine Aussage darüber ausgeben, wie alt Chris in 20 Jahren sein wird. Wir möchten, dass Sie das Problem beheben und die Ausgabe korrigieren.

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

</details>
