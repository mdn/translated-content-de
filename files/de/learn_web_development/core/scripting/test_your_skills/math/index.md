---
title: "Testen Sie Ihre Fähigkeiten: Mathematik"
short-title: Math
slug: Learn_web_development/Core/Scripting/Test_your_skills/Math
l10n:
  sourceCommit: 2f16610802bfbdf6394ca919557a4369b1236e10
---

Ziel der Tests auf dieser Seite ist es, Ihnen zu helfen einzuschätzen, ob Sie den Artikel [Grundlegende Mathematik in JavaScript — Zahlen und Operatoren](/de/docs/Learn_web_development/Core/Scripting/Math) verstanden haben.

> [!NOTE]
> Um Hilfe zu erhalten, lesen Sie unseren [Leitfaden zur Nutzung von 'Testen Sie Ihre Fähigkeiten'](/de/docs/Learn_web_development#test_your_skills). Sie können uns auch über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## Math 1

Beginnen wir damit, Ihr Wissen über grundlegende mathematische Operatoren zu testen.
Sie werden vier numerische Werte erstellen, zwei zusammen addieren, einen von einem anderen subtrahieren und dann die Ergebnisse multiplizieren. Abschließend schreiben Sie einen Test, um zu beweisen, dass dieser Wert eine gerade Zahl ist.

Um die Aufgabe zu erfüllen:

1. Erstellen Sie vier Variablen, die Zahlen enthalten. Geben Sie den Variablen sinnvolle Namen.
2. Addieren Sie die ersten beiden Variablen und speichern Sie das Ergebnis in einer anderen Variable.
3. Subtrahieren Sie die vierte Variable von der dritten und speichern Sie das Ergebnis in einer anderen Variable.
4. Multiplizieren Sie die Ergebnisse aus den Schritten **2** und **3** und speichern Sie das Ergebnis in einer Variablen namens `finalResult`.
5. Überprüfen Sie, ob `finalResult` eine gerade Zahl ist, indem Sie einen der [arithmetischen Operatoren](/de/docs/Learn_web_development/Core/Scripting/Math#arithmetic_operators) verwenden. Speichern Sie das Ergebnis (`0` für gerade, `1` für ungerade) in einer Variablen namens `evenOddResult`.

Um diesen Test zu bestehen, sollte `finalResult` den Wert `48` haben und `evenOddResult` sollte den Wert `0` haben.

<!-- Code geteilt über Beispiele -->

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

<!-- Beispiel-spezifischer Code -->

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

Ihr fertiges JavaScript sollte ungefähr so aussehen:

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

## Math 2

In der zweiten Aufgabe werden Ihnen zwei Berechnungen zur Verfügung gestellt, deren Ergebnisse in den Variablen `result` und `result2` gespeichert sind. Sie müssen die Berechnungen multiplizieren und das Ergebnis auf zwei Dezimalstellen formatieren.

Um die Aufgabe zu erfüllen:

1. Multiplizieren Sie `result` und `result2` und weisen Sie das Ergebnis `result` wieder zu (verwenden Sie die Kurzschreibweise der Zuweisung).
2. Formatieren Sie `result`, sodass es zwei Dezimalstellen hat und speichern Sie es in einer Variablen namens `finalResult`.
3. Überprüfen Sie den Datentyp von `finalResult` mit `typeof`. Wenn es ein `string` ist, konvertieren Sie es in einen `number`-Typ und speichern Sie das Ergebnis in einer Variablen namens `finalNumber`.

Um diesen Test zu bestehen, sollte `finalNumber` ein Ergebnis von `4633.33` haben. Möglicherweise müssen Sie die Operatorpräzedenz berücksichtigen und einige Klammern zu den Ausdrücken hinzufügen oder ändern, um das korrekte Ergebnis zu erzielen.

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

Ihr fertiges JavaScript sollte ungefähr so aussehen:

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

## Math 3

In der letzten Aufgabe dieses Artikels möchten wir, dass Sie einige Tests schreiben.

Um die Aufgabe zu erfüllen:

1. Es gibt drei Gruppen, die jeweils aus einer Aussage und zwei Variablen bestehen. Schreiben Sie für jede einen Test, der die gemachte Aussage beweist oder widerlegt.
2. Speichern Sie die Ergebnisse dieser Tests in Variablen namens `weightComparison`, `heightComparison` und `pwdMatch`.

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

Ihr fertiges JavaScript sollte ungefähr so aussehen:

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
