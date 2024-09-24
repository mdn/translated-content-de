---
title: Umgang mit Text — Zeichenfolgen in JavaScript
slug: Learn/JavaScript/First_steps/Strings
l10n:
  sourceCommit: 23e1a97d50050a3b3518a4b2f67ccf42e5fd75b7
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/First_steps/Math", "Learn/JavaScript/First_steps/Useful_string_methods", "Learn/JavaScript/First_steps")}}

Als nächstes widmen wir uns Zeichenfolgen — so werden Textabschnitte in der Programmierung genannt. In diesem Artikel werden wir uns alle gängigen Dinge ansehen, die Sie über Zeichenfolgen wissen sollten, wenn Sie JavaScript lernen, wie das Erstellen von Zeichenfolgen, das Escapen von Anführungszeichen in Zeichenfolgen und das Zusammenfügen von Zeichenfolgen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein grundlegendes Verständnis von HTML und CSS, ein
        Verständnis dafür, was JavaScript ist.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Ein vertrauter Umgang mit den Grundlagen von Zeichenfolgen in JavaScript.</td>
    </tr>
  </tbody>
</table>

## Die Macht der Worte

Worte sind für Menschen sehr wichtig — sie sind ein großer Teil unserer Kommunikation. Da das Web größtenteils ein textbasiertes Medium ist, das dazu dient, Menschen die Kommunikation und den Austausch von Informationen zu ermöglichen, ist es nützlich, die Kontrolle über die darauf erscheinenden Worte zu haben. {{glossary("HTML")}} bietet Struktur und Bedeutung für Text, {{glossary("CSS")}} ermöglicht es uns, diesen präzise zu gestalten, und JavaScript bietet viele Funktionen zur Manipulation von Zeichenfolgen. Dazu gehört das Erstellen von benutzerdefinierten Willkommensnachrichten und Aufforderungen, das Anzeigen der richtigen Textetiketten, wenn sie benötigt werden, das Sortieren von Begriffen in die gewünschte Reihenfolge und vieles mehr.

Praktisch alle Programme, die wir Ihnen bisher im Kurs gezeigt haben, haben irgendeine Art von Zeichenfolgenmanipulation beinhaltet.

## Deklarierung von Zeichenfolgen

Zeichenfolgen werden auf den ersten Blick ähnlich behandelt wie Zahlen, aber wenn Sie tiefer graben, werden Sie einige bemerkenswerte Unterschiede feststellen. Beginnen wir damit, dass wir einige grundlegende Zeilen in die [Entwicklerkonsole des Browsers](/de/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools) eingeben, um uns damit vertraut zu machen.

Geben Sie zunächst die folgenden Zeilen ein:

```js
const string = "The revolution will not be televised.";
console.log(string);
```

Genau wie wir es mit Zahlen gemacht haben, deklarieren wir eine Variable, initialisieren sie mit einem Zeichenfolgenwert und geben dann den Wert zurück. Der einzige Unterschied hier ist, dass Sie bei der Schreibweise einer Zeichenfolge den Wert in Anführungszeichen einschließen müssen.

Wenn Sie dies nicht tun oder eines der Anführungszeichen weglassen, erhalten Sie einen Fehler. Versuchen Sie, die folgenden Zeilen einzugeben:

```js example-bad
const badString1 = This is a test;
const badString2 = 'This is a test;
const badString3 = This is a test';
```

Diese Zeilen funktionieren nicht, weil jeder Text ohne Anführungszeichen um ihn herum als Variablenname, Eigenschaftsname, reserviertes Wort oder ähnlich interpretiert wird. Wenn der Browser den unzitierten Text nicht erkennt, wird ein Fehler ausgelöst (z.B. "missing; before statement"). Wenn der Browser erkennen kann, wo eine Zeichenfolge beginnt, aber nicht das Ende (wegen des fehlenden zweiten Anführungszeichens), meldet er einen Fehler des Typs "unterbrochenes Zeichenfolgenliteral". Wenn Ihr Programm solche Fehler hervorruft, gehen Sie zurück und überprüfen Sie alle Ihre Zeichenfolgen, um sicherzustellen, dass keine Anführungszeichen fehlen.

Das Folgende wird funktionieren, wenn Sie zuvor die Variable `string` definiert haben — versuchen Sie es jetzt:

```js
const badString = string;
console.log(badString);
```

`badString` erhält nun denselben Wert wie `string`.

### Einzelne Anführungszeichen, doppelte Anführungszeichen und Backticks

In JavaScript können Sie wählen, ob Sie einzelne Anführungszeichen (`'`), doppelte Anführungszeichen (`"`) oder Backticks (`` ` ``) verwenden, um Ihre Zeichenfolgen einzuschließen. All dies wird funktionieren:

```js-nolint
const single = 'Single quotes';
const double = "Double quotes";
const backtick = `Backtick`;

console.log(single);
console.log(double);
console.log(backtick);
```

Sie müssen dasselbe Zeichen für den Beginn und das Ende einer Zeichenfolge verwenden, ansonsten erhalten Sie einen Fehler:

```js-nolint example-bad
const badQuotes = 'This is not allowed!";
```

Zeichenfolgen, die mit einfachen und doppelte Anführungszeichen deklariert werden, sind gleich, und welche Sie verwenden, hängt von Ihrer persönlichen Präferenz ab, obwohl es eine gute Praxis ist, einen Stil zu wählen und ihn in Ihrem Code konsequent zu verwenden.

Zeichenfolgen, die mit Backticks deklariert werden, sind eine spezielle Art von Zeichenfolge, die als [_Template Literal_](/de/docs/Web/JavaScript/Reference/Template_literals) bezeichnet wird. In den meisten Aspekten sind Template-Literals wie normale Zeichenfolgen, aber sie haben einige besondere Eigenschaften:

- Sie können [JavaScript einbetten](#einbetten_von_javascript)
- Sie können Template-Literals über [mehrere Zeilen](#mehrzeilige_zeichenfolgen) deklarieren

## Einbetten von JavaScript

Innerhalb eines Template-Literals können Sie JavaScript-Variablen oder Ausdrücke in `${ }` einfügen, und das Ergebnis wird in die Zeichenfolge aufgenommen:

```js
const name = "Chris";
const greeting = `Hello, ${name}`;
console.log(greeting); // "Hello, Chris"
```

Sie können dieselbe Technik verwenden, um zwei Variablen zu verbinden:

```js
const one = "Hello, ";
const two = "how are you?";
const joined = `${one}${two}`;
console.log(joined); // "Hello, how are you?"
```

Das Zusammenfügen von Zeichenfolgen auf diese Weise wird als _Konkatenation_ bezeichnet.

### Konkatenation im Kontext

Schauen wir uns die Verwendung der Konkatenation in der Praxis an:

```html
<button>Press me</button>
<div id="greeting"></div>
```

```js
const button = document.querySelector("button");

function greet() {
  const name = prompt("What is your name?");
  const greeting = document.querySelector("#greeting");
  greeting.textContent = `Hello ${name}, nice to see you!`;
}

button.addEventListener("click", greet);
```

{{ EmbedLiveSample('Concatenation_in_context', '100%', 50) }}

Hier benutzen wir die Funktion {{domxref("window.prompt()", "window.prompt()")}}, die den Benutzer über ein Popup-Dialogfeld auffordert, eine Frage zu beantworten, und dann den Text, den er eingibt, in einer gegebenen Variable speichert — in diesem Fall `name`. Wir zeigen dann eine Zeichenfolge an, die den Namen in eine generische Begrüßungsnachricht einfügt.

### Konkatenation mit "+"

Sie können `${}` nur mit Template-Literals verwenden, nicht mit normalen Zeichenfolgen. Sie können normale Zeichenfolgen mit dem `+`-Operator verknüpfen:

```js
const greeting = "Hello";
const name = "Chris";
console.log(greeting + ", " + name); // "Hello, Chris"
```

Template-Literals bieten jedoch in der Regel lesbareren Code:

```js
const greeting = "Hello";
const name = "Chris";
console.log(`${greeting}, ${name}`); // "Hello, Chris"
```

### Einbinden von Ausdrücken in Zeichenfolgen

Sie können JavaScript-Ausdrücke in Template-Literals einfügen, zusätzlich zu einfachen Variablen, und die Ergebnisse werden in das Ergebnis aufgenommen:

```js
const song = "Fight the Youth";
const score = 9;
const highestScore = 10;
const output = `I like the song ${song}. I gave it a score of ${
  (score / highestScore) * 100
}%.`;
console.log(output); // "I like the song Fight the Youth. I gave it a score of 90%."
```

## Mehrzeilige Zeichenfolgen

Template-Literals respektieren die Zeilenumbrüche im Quellcode, sodass Sie Zeichenfolgen schreiben können, die sich über mehrere Zeilen erstrecken, wie folgt:

```js
const newline = `One day you finally knew
what you had to do, and began,`;
console.log(newline);

/*
One day you finally knew
what you had to do, and began,
*/
```

Um die äquivalente Ausgabe mit einer normalen Zeichenfolge zu haben, müssten Sie Zeilenumbruchzeichen (`\n`) in die Zeichenfolge einfügen:

```js
const newline = "One day you finally knew\nwhat you had to do, and began,";
console.log(newline);

/*
One day you finally knew
what you had to do, and began,
*/
```

Sehen Sie sich unsere [Template literals](/de/docs/Web/JavaScript/Reference/Template_literals) Referenzseite für weitere Beispiele und Details zu fortgeschrittenen Features an.

## Einfügen von Anführungszeichen in Zeichenfolgen

Da wir Anführungszeichen verwenden, um den Beginn und das Ende von Zeichenfolgen anzuzeigen, wie können wir tatsächliche Anführungszeichen in Zeichenfolgen einfügen? Wir wissen, dass dies nicht funktionieren wird:

```js-nolint example-bad
const badQuotes = "She said "I think so!"";
```

Eine gängige Option ist die Verwendung eines der anderen Zeichen zum Deklarieren der Zeichenfolge:

```js-nolint
const goodQuotes1 = 'She said "I think so!"';
const goodQuotes2 = `She said "I'm not going in there!"`;
```

Eine weitere Option ist es, das problematische Anführungszeichen zu _escapen_. Zeichen escapen bedeutet, dass wir etwas mit ihnen machen, um sicherzustellen, dass sie als Text und nicht als Teil des Codes erkannt werden. In JavaScript machen wir das, indem wir direkt vor dem Zeichen einen Backslash setzen. Versuchen Sie dies:

```js-nolint
const bigmouth = 'I\'ve got no right to take my place…';
console.log(bigmouth);
```

Sie können dieselbe Technik verwenden, um andere Sonderzeichen einzufügen. Weitere Details finden Sie unter [Escape sequences](/de/docs/Web/JavaScript/Reference/Lexical_grammar#escape_sequences).

## Zahlen vs. Zeichenfolgen

Was passiert, wenn wir versuchen, eine Zeichenfolge und eine Zahl zu verknüpfen? Lassen Sie uns das in unserer Konsole ausprobieren:

```js
const name = "Front ";
const number = 242;
console.log(name + number); // "Front 242"
```

Sie könnten erwarten, dass dies einen Fehler zurückgibt, aber es funktioniert einwandfrei. Wie Zahlen als Zeichenfolgen dargestellt werden sollten, ist ziemlich gut definiert, somit wandelt der Browser die Zahl automatisch in eine Zeichenfolge um und verknüpft die beiden Zeichenfolgen.

Wenn Sie eine numerische Variable haben, die Sie in eine Zeichenfolge umwandeln möchten, oder eine Zeichenfolgenvariable, die Sie in eine Zahl umwandeln möchten, können Sie die folgenden beiden Konstrukte verwenden:

- Die Funktion {{jsxref("Number/Number", "Number()")}} wandelt alles, was ihr übergeben wird, in eine Zahl um, wenn es möglich ist. Probieren Sie Folgendes aus:

  ```js
  const myString = "123";
  const myNum = Number(myString);
  console.log(typeof myNum);
  // number
  ```

- Umgekehrt wandelt die Funktion {{jsxref("String/String", "String()")}} ihr Argument in eine Zeichenfolge um. Versuchen Sie dies:

  ```js
  const myNum2 = 123;
  const myString2 = String(myNum2);
  console.log(typeof myString2);
  // string
  ```

Diese Konstrukte können in einigen Situationen wirklich nützlich sein. Beispielsweise ist eine vom Benutzer in ein Textfeld eines Formulars eingegebene Zahl eine Zeichenfolge. Wenn Sie diese Zahl jedoch zu etwas hinzuzufügen möchten, müssen Sie sie in eine Zahl umwandeln, also könnten Sie sie durch `Number()` senden, um dies zu erreichen. Wir haben dies genau in unserem [Number Guessing Game](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/first-splash/number-guessing-game.html) getan, in der Funktion `checkGuess`.

## Fazit

Damit sind die Grundlagen von Zeichenfolgen in JavaScript abgedeckt. Im nächsten Artikel werden wir darauf aufbauen und uns einige der eingebauten Methoden ansehen, die für Zeichenfolgen in JavaScript verfügbar sind und wie wir sie nutzen können, um unsere Zeichenfolgen in die gewünschte Form zu bringen.

{{PreviousMenuNext("Learn/JavaScript/First_steps/Math", "Learn/JavaScript/First_steps/Useful_string_methods", "Learn/JavaScript/First_steps")}}
