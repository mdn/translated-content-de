---
title: "Testen Sie Ihr Können: Mathe"
short-title: "Test: Mathe"
slug: Learn_web_development/Core/Scripting/Test_your_skills/Math
l10n:
  sourceCommit: b36d59a0df933597c7d3b55e363f7a59e30d3ba3
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Math", "Learn_web_development/Core/Scripting/Strings", "Learn_web_development/Core/Scripting")}}

Ziel der Tests auf dieser Seite ist es, Ihnen zu helfen, zu beurteilen, ob Sie den Artikel [Grundlegende Mathematik in JavaScript – Zahlen und Operatoren](/de/docs/Learn_web_development/Core/Scripting/Math) verstanden haben.

> [!NOTE]
> Um Hilfe zu erhalten, lesen Sie unseren [Anleitung zur Nutzung von Testen Sie Ihr Können](/de/docs/Learn_web_development#test_your_skills). Sie können uns auch über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## Mathe 1

Lassen Sie uns beginnen, indem wir Ihr Wissen über grundlegende mathematische Operatoren testen.
Sie werden vier numerische Werte erstellen, zwei zusammen addieren, einen von einem anderen subtrahieren, dann die Ergebnisse multiplizieren.
Abschließend schreiben Sie einen Test, um zu beweisen, dass dieser Wert eine gerade Zahl ist.

Um die Aufgabe abzuschließen:

1. Erstellen Sie vier Variablen, die Zahlen enthalten. Geben Sie den Variablen sinnvolle Namen.
2. Addieren Sie die ersten beiden Variablen zusammen und speichern Sie das Ergebnis in einer anderen Variablen.
3. Subtrahieren Sie die vierte Variable von der dritten und speichern Sie das Ergebnis in einer anderen Variablen.
4. Multiplizieren Sie die Ergebnisse aus den Schritten **2** und **3** und speichern Sie das Ergebnis in einer Variablen namens `finalResult`.
5. Überprüfen Sie, ob `finalResult` eine gerade Zahl ist, indem Sie einen der [arithmetischen Operatoren](/de/docs/Learn_web_development/Core/Scripting/Math#arithmetic_operators) verwenden. Speichern Sie das Ergebnis (`0` für gerade, `1` für ungerade) in einer Variablen namens `evenOddResult`.

Um diesen Test zu bestehen, sollte `finalResult` einen Wert von `48` haben und `evenOddResult` sollte einen Wert von `0` haben.

<!-- Code shared across examples -->

```html hidden live-sample___math-1 live-sample___math-2 live-sample___math-3 live-sample___math-1-finish live-sample___math-2-finish live-sample___math-3-finish
<section></section>
```

```css hidden live-sample___math-1 live-sample___math-2 live-sample___math-3 live-sample___math-1-finish live-sample___math-2-finish live-sample___math-3-finish
* {
  box-sizing: border-box;
}

p {
  color: purple;
  margin: 0.5em 0;
}
```

<!-- Example-specific code -->

Der Ausgangspunkt der Aufgabe sieht so aus:

{{ EmbedLiveSample("math-1", "100%", 80) }}

Hier ist der zugrundeliegende Code für diesen Ausgangspunkt:

```js live-sample___math-1
let finalResult;
let evenOddResult;

// Don't edit the code above here!

// Add your code here

// Don't edit the code below here!

const section = document.querySelector("section");
const para1 = document.createElement("p");
const finalResultCheck =
  finalResult === 48 ? `Yes, well done!` : `No, it is ${finalResult}`;
para1.textContent = `Is the finalResult 48? ${finalResultCheck}`;
const para2 = document.createElement("p");
const evenOddResultCheck =
  evenOddResult === 0
    ? "The final result is even!"
    : "The final result is odd. Hrm.";
para2.textContent = evenOddResultCheck;
section.appendChild(para1);
section.appendChild(para2);
```

Die aktualisierte Ausgabe sollte so aussehen:

{{ EmbedLiveSample("math-1-finish", "100%", 80) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges JavaScript sollte in etwa so aussehen:

```js
// ...
// Don't edit the code above here!

const number1 = 4;
const number2 = 8;
const number3 = 12;
const number4 = 8;

const additionResult = number1 + number2;
const subtractionResult = number3 - number4;

finalResult = additionResult * subtractionResult;

evenOddResult = finalResult % 2;

// Don't edit the code below here!
// ...
```

```js hidden live-sample___math-1-finish
let finalResult;
let evenOddResult;

const number1 = 4;
const number2 = 8;
const number3 = 12;
const number4 = 8;

const additionResult = number1 + number2;
const subtractionResult = number3 - number4;

finalResult = additionResult * subtractionResult;

evenOddResult = finalResult % 2;

const section = document.querySelector("section");
const para1 = document.createElement("p");
const finalResultCheck =
  finalResult === 48 ? `Yes, well done!` : `No, it is ${finalResult}`;
para1.textContent = `Is the finalResult 48? ${finalResultCheck}`;
const para2 = document.createElement("p");
const evenOddResultCheck =
  evenOddResult === 0
    ? "The final result is even!"
    : "The final result is odd. Hrm.";
para2.textContent = evenOddResultCheck;
section.appendChild(para1);
section.appendChild(para2);
```

</details>

## Mathe 2

In der zweiten Aufgabe werden Ihnen zwei Berechnungen zur Verfügung gestellt, deren Ergebnisse in den Variablen `result` und `result2` gespeichert sind.
Sie müssen die Berechnungen nehmen, sie multiplizieren und das Ergebnis auf zwei Dezimalstellen formatieren.

Um die Aufgabe abzuschließen:

1. Multiplizieren Sie `result` und `result2` und weisen Sie das Ergebnis `result` erneut zu (verwenden Sie eine verkürzte Zuweisung).
2. Formatieren Sie `result`, sodass es zwei Dezimalstellen hat, und speichern Sie es in einer Variablen namens `finalResult`.
3. Überprüfen Sie den Datentyp von `finalResult` mit `typeof`. Wenn er ein `string` ist, konvertieren Sie ihn in einen `number`-Typ und speichern Sie das Ergebnis in einer Variablen namens `finalNumber`.

Um diesen Test zu bestehen, sollte `finalNumber` einen Wert von `4633.33` haben. Es könnte notwendig sein, die Operatoren-Priorität zu berücksichtigen und einige Klammern zu den Eingabe-Ausdrücken hinzuzufügen oder zu ändern, um das korrekte Ergebnis zu erhalten.

Der Ausgangspunkt der Aufgabe sieht so aus (noch nichts wird angezeigt):

{{ EmbedLiveSample("math-2", "100%", 80) }}

Hier ist der zugrundeliegende Code für diesen Ausgangspunkt:

```js live-sample___math-2
// Final result should be 4633.33

let result = 7 + 13 / 9 + 7;
let result2 = (100 / 2) * 6;

// Add your code here

// Don't edit the code below here!

const section = document.querySelector("section");
const para1 = document.createElement("p");
para1.textContent = `Your finalResult is ${finalResult}`;
const para2 = document.createElement("p");
const finalNumberCheck =
  isNaN(finalNumber) === false
    ? "finalNumber is a number type. Well done!"
    : `Oops! finalNumber is not a number.`;
para2.textContent = finalNumberCheck;
section.appendChild(para1);
section.appendChild(para2);
```

Die aktualisierte Ausgabe sollte so aussehen:

{{ EmbedLiveSample("math-2-finish", "100%", 80) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges JavaScript sollte in etwa so aussehen:

```js-nolint
// Final result should be 4633.33

let result = (7 + 13 / 9) + 7;
let result2 = 100 / 2 * 6;

result *= result2;

const finalResult = result.toFixed(2);

const finalNumber = Number(finalResult);

// Don't edit the code below here!
// ...
```

```js hidden live-sample___math-2-finish
let result = 7 + 13 / 9 + 7;
let result2 = (100 / 2) * 6;

result *= result2;
const finalResult = result.toFixed(2);
const finalNumber = Number(finalResult);

const section = document.querySelector("section");
const para1 = document.createElement("p");
para1.textContent = `Your finalResult is ${finalResult}`;
const para2 = document.createElement("p");
const finalNumberCheck =
  isNaN(finalNumber) === false
    ? "finalNumber is a number type. Well done!"
    : `Oops! finalNumber is not a number.`;
para2.textContent = finalNumberCheck;
section.appendChild(para1);
section.appendChild(para2);
```

</details>

## Mathe 3

In der letzten Aufgabe dieses Artikels möchten wir, dass Sie einige Tests schreiben.

Um die Aufgabe abzuschließen:

1. Es gibt drei Gruppen, die jeweils aus einer Aussage und zwei Variablen bestehen. Schreiben Sie für jede einen Test, der die gemachte Aussage beweist oder widerlegt.
2. Speichern Sie die Ergebnisse dieser Tests in Variablen namens `weightComparison`, `heightComparison` und `pwdMatch`.

Der Ausgangspunkt der Aufgabe sieht so aus (noch nichts wird angezeigt):

{{ EmbedLiveSample("math-3", "100%", 80) }}

Hier ist der zugrundeliegende Code für diesen Ausgangspunkt:

```js live-sample___math-3
// Statement 1: The elephant weighs less than the mouse
const eleWeight = 1000;
const mouseWeight = 2;
// Statement 2: The Ostrich is taller than the duck
const ostrichHeight = 2;
const duckHeight = 0.3;
// Statement 3: The two passwords match
const pwd1 = "stromboli";
const pwd2 = "stROmBoLi";

// Don't edit the code above here!

// Add your code here

// Don't edit the code below here!

const section = document.querySelector("section");
const para1 = document.createElement("p");
const para2 = document.createElement("p");
const para3 = document.createElement("p");
const weightTest = weightComparison
  ? "True — elephants do weigh less than mice!?"
  : "False — of course an elephant is heavier than a mouse!";
const heightTest = heightComparison
  ? "True — an ostrich is indeed taller than a duck!"
  : "False — apparently a duck is taller than an ostrich!?";
const pwdTest = pwdMatch
  ? "True — the passwords match."
  : "False — the passwords do not match; please check them";
para1.textContent = weightTest;
section.appendChild(para1);
para2.textContent = heightTest;
section.appendChild(para2);
para3.textContent = pwdTest;
section.appendChild(para3);
```

Die aktualisierte Ausgabe sollte so aussehen:

{{ EmbedLiveSample("math-3-finish", "100%", 100) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges JavaScript sollte in etwa so aussehen:

```js-nolint
// ...
// Don't edit the code above here!

const weightComparison = eleWeight < mouseWeight;
const heightComparison = ostrichHeight > duckHeight;
const pwdMatch = pwd1 === pwd2;

// Don't edit the code below here!
// ...
```

```js hidden live-sample___math-3-finish
// Statement 1: The elephant weighs less than the mouse
const eleWeight = 1000;
const mouseWeight = 2;
// Statement 2: The Ostrich is taller than the duck
const ostrichHeight = 2;
const duckHeight = 0.3;
// Statement 3: The two passwords match
const pwd1 = "stromboli";
const pwd2 = "stROmBoLi";

const weightComparison = eleWeight < mouseWeight;
const heightComparison = ostrichHeight > duckHeight;
const pwdMatch = pwd1 === pwd2;

const section = document.querySelector("section");
const para1 = document.createElement("p");
const para2 = document.createElement("p");
const para3 = document.createElement("p");
const weightTest = weightComparison
  ? "True — elephants do weigh less than mice!?"
  : "False — of course an elephant is heavier than a mouse!";
const heightTest = heightComparison
  ? "True — an ostrich is indeed taller than a duck!"
  : "False — apparently a duck is taller than an ostrich!?";
const pwdTest = pwdMatch
  ? "True — the passwords match."
  : "False — the passwords do not match; please check them";
para1.textContent = weightTest;
section.appendChild(para1);
para2.textContent = heightTest;
section.appendChild(para2);
para3.textContent = pwdTest;
section.appendChild(para3);
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Math", "Learn_web_development/Core/Scripting/Strings", "Learn_web_development/Core/Scripting")}}
