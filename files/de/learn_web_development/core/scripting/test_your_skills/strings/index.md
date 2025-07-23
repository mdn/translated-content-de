---
title: "Testen Sie Ihre Fähigkeiten: Strings"
short-title: Strings
slug: Learn_web_development/Core/Scripting/Test_your_skills/Strings
l10n:
  sourceCommit: 2f16610802bfbdf6394ca919557a4369b1236e10
---

Das Ziel dieses Fähigkeitstests ist es, Ihnen zu helfen, zu beurteilen, ob Sie unsere Artikel [Text bearbeiten — Strings in JavaScript](/de/docs/Learn_web_development/Core/Scripting/Strings) und [Nützliche String-Methoden](/de/docs/Learn_web_development/Core/Scripting/Useful_string_methods) verstanden haben.

> [!NOTE]
> Um Hilfe zu erhalten, lesen Sie unseren [Testen Sie Ihre Fähigkeiten](/de/docs/Learn_web_development#test_your_skills) Leitfaden. Sie können sich auch über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Strings 1

In unserer ersten Aufgabe zu Strings beginnen wir klein. Sie haben bereits die Hälfte eines berühmten Zitats in einer Variablen namens `quoteStart`, und wir möchten, dass Sie es vervollständigen.

Um die Aufgabe abzuschließen:

1. Schlagen Sie die andere Hälfte des Zitats nach und fügen Sie sie dem Beispiel in einer Variablen namens `quoteEnd` hinzu.
2. Verketten Sie die beiden Strings, um einen einzigen String zu erstellen, der das vollständige Zitat enthält. Speichern Sie das Ergebnis in einer Variablen namens `finalQuote`.
3. Sie werden feststellen, dass Sie an dieser Stelle einen Fehler bekommen. Können Sie das Problem mit `quoteStart` beheben, damit das vollständige Zitat korrekt angezeigt wird?

<!-- Gemeinsam genutzter Code über Beispiele hinweg -->

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

<!-- Beispiel-spezifischer Code -->

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

Ihr fertiges JavaScript sollte in etwa so aussehen:

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

In dieser Aufgabe werden Ihnen zwei Variablen, `quote` und `substring`, zur Verfügung gestellt, die zwei Strings enthalten.

Um die Aufgabe abzuschließen:

1. Ermitteln Sie die Länge des Zitats und speichern Sie sie in einer Variablen namens `quoteLength`.
2. Finden Sie die Indexposition, an der `substring` im `quote` erscheint, und speichern Sie diesen Wert in einer Variablen namens `index`.
3. Verwenden Sie eine Kombination der Ihnen zur Verfügung stehenden Variablen und verfügbare String-Eigenschaften/Methoden, um das ursprüngliche Zitat auf „I do not like green eggs and ham.“ zu kürzen, und speichern Sie es in einer Variablen namens `revisedQuote`.

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

Ihr fertiges JavaScript sollte in etwa so aussehen:

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

In der nächsten String-Aufgabe erhalten Sie das gleiche Zitat, das Sie in der vorherigen Aufgabe hatten, aber es ist ein wenig fehlerhaft! Wir möchten, dass Sie es reparieren und aktualisieren.

Um die Aufgabe abzuschließen:

1. Ändern Sie die Groß-/Kleinschreibung in die richtige Satzstruktur (alles klein, außer der erste Buchstabe groß). Speichern Sie das neue Zitat in einer Variablen namens `fixedQuote`.
2. Ersetzen Sie in `fixedQuote` „green eggs and ham“ durch ein anderes Lebensmittel, das Sie wirklich nicht mögen.
3. Es gibt noch eine kleine Korrektur zu machen — fügen Sie am Ende des Zitats einen Punkt hinzu und speichern Sie die endgültige Version in einer Variablen namens `finalQuote`.

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

Ihr fertiges JavaScript sollte in etwa so aussehen:

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

In der letzten String-Aufgabe haben wir Ihnen den Namen eines Theorems, zwei numerische Werte und einen unvollständigen String gegeben (die Teile, die hinzugefügt werden müssen, sind mit Sternchen (`*`) markiert). Wir möchten, dass Sie den Wert des Strings ändern.

Um die Aufgabe abzuschließen:

1. Ändern Sie den String von einem regulären Stringliteral in ein Template-Stringliteral.
2. Ersetzen Sie die vier Sternchen durch vier eingebettete Ausdrücke eines Template-Stringliterals. Diese sollten sein:
   1. Der Name des Theorems.
   2. Die beiden Zahlenwerte, die wir haben.
   3. Die Länge der Hypotenuse eines rechtwinkligen Dreiecks, vorausgesetzt, die beiden anderen Seitenlängen sind die gleichen wie die beiden Werte, die wir haben. Sie müssen nachschlagen, wie man dies aus dem, was Sie haben, berechnet. Führen Sie die Berechnung in der Platzhalterstelle durch.

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

Ihr fertiges JavaScript sollte in etwa so aussehen:

```js
// ...
// Don't edit the code above here!

const myString = `Using ${theorem}, we can work out that if the two shortest sides of a right-angled triangle have lengths of ${a} and ${b},
  the length of the hypotenuse is ${Math.sqrt(a ** 2 + b ** 2)}.`;

// Don't edit the code below here!
// ...
```

</details>
