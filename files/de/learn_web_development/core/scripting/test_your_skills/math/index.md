---
title: "Testen Sie Ihre Fähigkeiten: Mathematik"
short-title: Math
slug: Learn_web_development/Core/Scripting/Test_your_skills/Math
l10n:
  sourceCommit: 449a2acf7d57948a55e4c8381d52da4360743402
---

Ziel der Tests auf dieser Seite ist es, zu beurteilen, ob Sie den Artikel [Grundlegende Mathematik in JavaScript — Zahlen und Operatoren](/de/docs/Learn_web_development/Core/Scripting/Math) verstanden haben.

> [!NOTE]
> Sie können Lösungen in den interaktiven Editoren auf dieser Seite oder in einem Online-Editor wie [CodePen](https://codepen.io/) oder [JSFiddle](https://jsfiddle.net/) ausprobieren.
> Wenn ein Fehler in Ihrem Code vorliegt, wird dieser im Ergebnis-Panel auf dieser Seite oder in der JavaScript-Konsole protokolliert.
>
> Wenn Sie stecken bleiben, können Sie uns über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## Mathematik 1

Beginnen wir mit der Überprüfung Ihres Wissens über grundlegende mathematische Operatoren.
Sie werden vier numerische Werte erstellen, zwei zusammenaddieren, einen von einem anderen subtrahieren und dann die Ergebnisse multiplizieren.
Schließlich schreiben Sie einen Test, um zu beweisen, dass dieser Wert eine gerade Zahl ist.

Um die Aufgabe zu erledigen:

1. Klicken Sie auf **"Play"** im untenstehenden Codeblock, um das Beispiel im MDN Playground zu bearbeiten.
2. Erstellen Sie vier Variablen, die Zahlen enthalten. Benennen Sie die Variablen sinnvoll.
3. Addieren Sie die ersten beiden Variablen und speichern Sie das Ergebnis in einer weiteren Variablen.
4. Subtrahieren Sie die vierte Variable von der dritten und speichern Sie das Ergebnis in einer weiteren Variablen.
5. Multiplizieren Sie die Ergebnisse aus Schritt **2** und **3** und speichern Sie das Ergebnis in einer Variablen namens `finalResult`.
6. Überprüfen Sie, ob `finalResult` eine gerade Zahl ist, indem Sie einen der [arithmetischen Operatoren](/de/docs/Learn_web_development/Core/Scripting/Math#arithmetic_operators) verwenden. Speichern Sie das Ergebnis (`0` für gerade, `1` für ungerade) in einer Variablen namens `evenOddResult`.

Um diesen Test zu bestehen, sollte `finalResult` den Wert `48` und `evenOddResult` den Wert `0` haben.

> [!CALLOUT]
>
> Sie können auch [den Ausgangspunkt für diese Aufgabe herunterladen](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/tasks/math/math1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Reset_ Taste im MDN Playground löschen. Wenn Sie wirklich nicht weiterkommen, können Sie die Lösung unterhalb der Live-Ausgabe einsehen.

<!-- Code shared across examples -->

```html hidden live-sample___math-1 live-sample___math-2 live-sample___math-3
<section></section>
```

```css hidden live-sample___math-1 live-sample___math-2 live-sample___math-3
* {
  box-sizing: border-box;
}

p {
  color: purple;
  margin: 0.5em 0;
}
```

<!-- Example-specific code -->

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

{{ EmbedLiveSample("math-1", "100%", 80) }}

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

</details>

## Mathematik 2

In der zweiten Aufgabe werden Ihnen zwei Berechnungen zur Verfügung gestellt, deren Ergebnisse in den Variablen `result` und `result2` gespeichert sind. Sie müssen die Berechnungen multiplizieren und das Ergebnis auf zwei Dezimalstellen formatieren.

Um die Aufgabe zu erledigen:

1. Klicken Sie auf **"Play"** im untenstehenden Codeblock, um das Beispiel im MDN Playground zu bearbeiten.
2. Multiplizieren Sie `result` und `result2` und weisen Sie das Ergebnis zurück an `result` (verwenden Sie die abgekürzte Zuweisung).
3. Formatieren Sie `result`, sodass es zwei Dezimalstellen hat und speichern Sie es in einer Variablen namens `finalResult`.
4. Überprüfen Sie den Datentyp von `finalResult` mit `typeof`. Wenn es ein `string` ist, konvertieren Sie es in einen `number` Typ und speichern Sie das Ergebnis in einer Variablen namens `finalNumber`.

Um diesen Test zu bestehen, sollte `finalNumber` das Ergebnis `4633.33` haben. Möglicherweise müssen Sie die Operatorpräzedenz berücksichtigen und einige Klammern zu den Eingabeausdrücken hinzufügen oder ändern, um das korrekte Ergebnis zu erhalten.

> [!CALLOUT]
>
> Sie können auch [den Ausgangspunkt für diese Aufgabe herunterladen](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/tasks/math/math2-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Reset_ Taste im MDN Playground löschen. Wenn Sie wirklich nicht weiterkommen, können Sie die Lösung unterhalb der Live-Ausgabe einsehen.

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

{{ EmbedLiveSample("math-2", "100%", 80) }}

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

</details>

## Mathematik 3

In der letzten Aufgabe dieses Artikels möchten wir, dass Sie einige Tests schreiben.

Um die Aufgabe zu erledigen:

1. Klicken Sie auf **"Play"** im untenstehenden Codeblock, um das Beispiel im MDN Playground zu bearbeiten.
2. Es gibt drei Gruppen, die jeweils aus einer Aussage und zwei Variablen bestehen. Schreiben Sie für jede eine Prüfung, die die gemachte Aussage bestätigt oder widerlegt.
3. Speichern Sie die Ergebnisse dieser Tests in den Variablen `weightComparison`, `heightComparison` und `pwdMatch`.

> [!CALLOUT]
>
> Sie können auch [den Ausgangspunkt für diese Aufgabe herunterladen](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/tasks/math/math3-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Reset_ Taste im MDN Playground löschen. Wenn Sie wirklich nicht weiterkommen, können Sie die Lösung unterhalb der Live-Ausgabe einsehen.

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

{{ EmbedLiveSample("math-3", "100%", 80) }}

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

</details>
