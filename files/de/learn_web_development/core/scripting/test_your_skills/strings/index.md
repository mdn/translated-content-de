---
title: "Testen Sie Ihre Fähigkeiten: Strings"
short-title: "Test: Strings"
slug: Learn_web_development/Core/Scripting/Test_your_skills/Strings
l10n:
  sourceCommit: 9d3d642daf9df9ece138fa39972edc5f7d6dcd6b
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Useful_string_methods", "Learn_web_development/Core/Scripting/Arrays", "Learn_web_development/Core/Scripting")}}

Ziel dieses Fähigkeitstests ist es, Ihnen zu helfen zu beurteilen, ob Sie unsere Artikel [Umgang mit Text — Strings in JavaScript](/de/docs/Learn_web_development/Core/Scripting/Strings) und [Nützliche String-Methoden](/de/docs/Learn_web_development/Core/Scripting/Useful_string_methods) verstanden haben.

> [!NOTE]
> Um Hilfe zu erhalten, lesen Sie unseren [Testen Sie Ihre Fähigkeiten](/de/docs/Learn_web_development#test_your_skills) Leitfaden. Sie können uns auch über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## Strings 1

In unserer ersten String-Aufgabe fangen wir klein an. Sie haben bereits die Hälfte eines berühmten Zitats in einer Variablen namens `quoteStart` und wir möchten, dass Sie es vervollständigen.

Um die Aufgabe abzuschließen:

1. Suchen Sie die andere Hälfte des Zitats und fügen Sie es in eine Variable namens `quoteEnd` ein.
2. Verketteten Sie die beiden Strings, um einen einzigen String mit dem vollständigen Zitat zu erstellen. Speichern Sie das Ergebnis in einer Variablen namens `finalQuote`.
3. Sie werden feststellen, dass Sie zu diesem Zeitpunkt einen Fehler erhalten. Können Sie das Problem mit `quoteStart` beheben, damit das vollständige Zitat korrekt angezeigt wird?

<!-- Code shared across examples -->

```html hidden live-sample___strings-1 live-sample___strings-2 live-sample___strings-3 live-sample___strings-4
<section></section>
```

```css hidden live-sample___strings-1 live-sample___strings-2 live-sample___strings-3 live-sample___strings-4
* {
  box-sizing: border-box;
}

p {
  color: purple;
  margin: 0.5em 0;
}
```

<!-- Example-specific code -->

```js-nolint live-sample___strings-1
const quoteStart = 'Don't judge each day by the harvest you reap ';

// Add your code here

// Don't edit the code below here!

const section = document.querySelector("section");
const para1 = document.createElement("p");
para1.textContent = finalQuote;
section.appendChild(para1);
```

{{ EmbedLiveSample("strings-1", "100%", 60) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiggestelltes JavaScript sollte etwa so aussehen:

```js-nolint
// You need to escape the quote
const quoteStart = 'Don\'t judge each day by the harvest you reap ';

const quoteEnd = "but by the seeds that you plant.";

const finalQuote = `${quoteStart}${quoteEnd}`;

// Don't edit the code below here!
// ...
```

</details>

## Strings 2

In dieser Aufgabe stehen Ihnen zwei Variablen, `quote` und `substring`, zur Verfügung, die zwei Strings enthalten.

Um die Aufgabe abzuschließen:

1. Ermitteln Sie die Länge des Zitats und speichern Sie sie in einer Variablen namens `quoteLength`.
2. Finden Sie die Indexposition, an der `substring` im `quote` erscheint, und speichern Sie diesen Wert in einer Variablen namens `index`.
3. Verwenden Sie eine Kombination aus den vorhandenen Variablen und verfügbaren Eigenschaften/Methoden von Strings, um das ursprüngliche Zitat auf "I do not like green eggs and ham." zu kürzen und speichern Sie es in einer Variablen namens `revisedQuote`.

```js live-sample___strings-2
const quote = "I do not like green eggs and ham. I do not like them, Sam-I-Am.";
const substring = "green eggs and ham";

// Don't edit the code above here!

// Add your code here

// Don't edit the code below here!

const section = document.querySelector("section");
section.innerHTML = " ";
const para1 = document.createElement("p");
para1.textContent = `The quote is ${quoteLength} characters long.`;
const para2 = document.createElement("p");
para2.textContent = revisedQuote;
section.appendChild(para1);
section.appendChild(para2);
```

{{ EmbedLiveSample("strings-2", "100%", 60) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiggestelltes JavaScript sollte etwa so aussehen:

```js
// ...
// Don't edit the code above here!

const quoteLength = quote.length;
const index = quote.indexOf(substring);
const revisedQuote = quote.slice(0, index + substring.length + 1);

// Don't edit the code below here!
// ...
```

</details>

## Strings 3

In der nächsten String-Aufgabe wird Ihnen dasselbe Zitat gegeben, das Sie in der vorherigen Aufgabe erhalten haben, aber es ist etwas zerbrochen! Wir möchten, dass Sie es reparieren und aktualisieren.

Um die Aufgabe abzuschließen:

1. Ändern Sie das Gehäuse, um korrekten Satzanfang (alles klein, außer dem ersten Großbuchstaben) zu erreichen. Speichern Sie das neue Zitat in einer Variablen namens `fixedQuote`.
2. Ersetzen Sie in `fixedQuote` "green eggs and ham" durch ein anderes Lebensmittel, das Sie überhaupt nicht mögen.
3. Es gibt noch eine kleine Korrektur zu machen — fügen Sie einen Punkt am Ende des Zitats hinzu und speichern Sie die endgültige Version in einer Variablen namens `finalQuote`.

```js live-sample___strings-3
const quote = "I dO nOT lIke gREen eGgS anD HAM";

// Don't edit the code above here!

// Add your code here

// Don't edit the code below here!

const section = document.querySelector("section");
const para1 = document.createElement("p");
para1.textContent = finalQuote;
section.appendChild(para1);
```

{{ EmbedLiveSample("strings-3", "100%", 60) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiggestelltes JavaScript sollte etwa so aussehen:

```js
// ...
// Don't edit the code above here!

let fixedQuote = quote.toLowerCase();
const firstLetter = fixedQuote.slice(0, 1);
fixedQuote = fixedQuote.replace(firstLetter, firstLetter.toUpperCase());
fixedQuote = fixedQuote.replace("green eggs and ham", "pickled onions");
const finalQuote = `${fixedQuote}.`;

// Don't edit the code below here!
// ...
```

</details>

## Strings 4

In der letzten String-Aufgabe haben wir Ihnen den Namen eines Theorems, zwei numerische Werte und einen unvollständigen String gegeben (die hinzuzufügenden Teile sind mit Sternchen (`*`) markiert). Wir möchten, dass Sie den Wert des Strings ändern.

Um die Aufgabe abzuschließen:

1. Ändern Sie den String von einem regulären String-Literal in ein Template Literal.
2. Ersetzen Sie die vier Sternchen durch vier in Template Literal eingebettete Ausdrücke. Diese sollten sein:
   1. Der Name des Theorems.
   2. Die beiden Zahlenwerte, die wir haben.
   3. Die Länge der Hypotenuse eines rechtwinkligen Dreiecks, wobei angenommen wird, dass die beiden anderen Seitenlängen mit den beiden Werten übereinstimmen, die wir haben. Sie müssen nachschlagen, wie man dies berechnet. Führen Sie die Berechnung innerhalb des Platzhalters durch.

```js live-sample___strings-4
const theorem = "Pythagorean theorem";

const a = 5;
const b = 8;

// Don't edit the code above here!

// Edit the string literal
const myString =
  "Using *, we can work out that if the two shortest sides of a right-angled triangle have lengths of * and *, the length of the hypotenuse is *.";

// Don't edit the code below here!

const section = document.querySelector("section");
const para1 = document.createElement("p");
para1.textContent = myString;
section.appendChild(para1);
```

{{ EmbedLiveSample("strings-4", "100%", 60) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiggestelltes JavaScript sollte etwa so aussehen:

```js
// ...
// Don't edit the code above here!

const myString = `Using ${theorem}, we can work out that if the two shortest sides of a right-angled triangle have lengths of ${a} and ${b},
  the length of the hypotenuse is ${Math.sqrt(a ** 2 + b ** 2)}.`;

// Don't edit the code below here!
// ...
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Useful_string_methods", "Learn_web_development/Core/Scripting/Arrays", "Learn_web_development/Core/Scripting")}}
