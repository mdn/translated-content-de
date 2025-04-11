---
title: Umgang mit Text — Strings in JavaScript
short-title: Strings
slug: Learn_web_development/Core/Scripting/Strings
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Math", "Learn_web_development/Core/Scripting/Useful_string_methods", "Learn_web_development/Core/Scripting")}}

Als nächstes widmen wir uns den Strings — so werden Textstücke in der Programmierung genannt. In diesem Artikel werden wir uns alle gängigen Dinge ansehen, die Sie wirklich wissen sollten, wenn Sie JavaScript lernen, z.B. das Erstellen von Strings, das Maskieren von Anführungszeichen in Strings und das Zusammenfügen von Strings.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Erstellen von String-Literalen.</li>
          <li>Die Anforderung, dass Anführungszeichen übereinstimmen müssen.</li>
          <li>String-Verkettung.</li>
          <li>Maskieren von Zeichen in Strings.</li>
          <li>Template-Literale, einschließlich der Verwendung von Variablen und mehrzeiligen Template-Literalen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Die Macht der Worte

Worte sind für Menschen sehr wichtig – sie sind ein großer Teil der Art, wie wir kommunizieren. Da das Web ein überwiegend textbasiertes Medium ist, das entwickelt wurde, um Menschen die Kommunikation und den Austausch von Informationen zu ermöglichen, ist es nützlich für uns, die Kontrolle über die auf ihm erscheinenden Worte zu haben. {{Glossary("HTML", "HTML")}} bietet Struktur und Bedeutung für Text, {{Glossary("CSS", "CSS")}} ermöglicht es uns, ihn präzise zu gestalten, und JavaScript bietet viele Funktionen zur Manipulation von Strings. Diese umfassen das Erstellen von benutzerdefinierten Willkommensnachrichten und Eingabeaufforderungen, das Anzeigen der richtigen Textetiketten bei Bedarf, das Sortieren von Begriffen in die gewünschte Reihenfolge und vieles mehr.

So ziemlich alle Programme, die wir Ihnen bisher im Kurs gezeigt haben, beinhalten einige String-Manipulationen.

## Deklarieren von Strings

Strings werden zunächst ähnlich wie Zahlen behandelt, aber bei näherer Betrachtung werden Sie einige bemerkenswerte Unterschiede feststellen. Lassen Sie uns beginnen, indem wir einige grundlegende Zeilen in die [Browser-Entwickler-Konsole](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) eingeben, um uns vertraut zu machen.

Beginnen Sie, indem Sie die folgenden Zeilen eingeben:

```js
const string = "The revolution will not be televised.";
console.log(string);
```

Genau wie wir es mit Zahlen gemacht haben, deklarieren wir eine Variable, initialisieren sie mit einem String-Wert und geben dann den Wert zurück. Der einzige Unterschied hier ist, dass Sie bei der Eingabe eines Strings den Wert mit Anführungszeichen umgeben müssen.

Wenn Sie dies nicht tun oder eines der Anführungszeichen fehlen, erhalten Sie einen Fehler. Versuchen Sie, die folgenden Zeilen einzugeben:

```js example-bad
const badString1 = This is a test;
const badString2 = 'This is a test;
const badString3 = This is a test';
```

Diese Zeilen funktionieren nicht, da jeder Text ohne Anführungszeichen um ihn herum als Variablenname, Eigenschaftsname, reserviertes Wort oder ähnliches interpretiert wird. Wenn der Browser den unquotierten Text nicht erkennt, wird ein Fehler generiert (z.B. "missing; before statement"). Wenn der Browser erkennt, wo ein String beginnt, aber nicht, wo er endet (wegen des fehlenden zweiten Anführungszeichens), wird ein Fehler "unterbrochenes String-Literal" gemeldet. Wenn Ihr Programm solche Fehler meldet, gehen Sie zurück und überprüfen Sie alle Ihre Strings, um sicherzustellen, dass keine Anführungszeichen fehlen.

Das Folgende wird funktionieren, wenn Sie die Variable `string` vorher definiert haben — versuchen Sie es jetzt:

```js
const badString = string;
console.log(badString);
```

`badString` ist jetzt auf den gleichen Wert wie `string` gesetzt.

### Einzelne Anführungszeichen, doppelte Anführungszeichen und Backticks

In JavaScript können Sie einzelne Anführungszeichen (`'`), doppelte Anführungszeichen (`"`) oder Backticks (`` ` ``) verwenden, um Ihre Strings einzuschließen. Alle folgenden Beispiele funktionieren:

```js-nolint
const single = 'Single quotes';
const double = "Double quotes";
const backtick = `Backtick`;

console.log(single);
console.log(double);
console.log(backtick);
```

Sie müssen dasselbe Zeichen für den Anfang und das Ende eines Strings verwenden, sonst erhalten Sie einen Fehler:

```js-nolint example-bad
const badQuotes = 'This is not allowed!";
```

Strings, die mit einzelnen Anführungszeichen deklariert werden, und Strings, die mit doppelten Anführungszeichen deklariert werden, sind gleich, und welche Sie verwenden, hängt von der persönlichen Vorliebe ab — es ist jedoch eine gute Praxis, einen Stil zu wählen und ihn in Ihrem Code konsistent zu verwenden.

Strings, die mit Backticks deklariert werden, sind eine spezielle Art von Strings, die als [_Template Literals_](/de/docs/Web/JavaScript/Reference/Template_literals) bezeichnet werden. In den meisten Fällen sind Template Literals wie normale Strings, aber sie haben einige spezielle Eigenschaften:

- Sie können [JavaScript einbetten](#einbetten_von_javascript) in ihnen
- Sie können Template Literals über [mehrere Zeilen](#mehrzeilige_strings) deklarieren

## Einbetten von JavaScript

Innerhalb eines Template-Literals können Sie JavaScript-Variablen oder -Ausdrücke in `${ }` einschließen, und das Ergebnis wird in den String aufgenommen:

```js
const name = "Chris";
const greeting = `Hello, ${name}`;
console.log(greeting); // "Hello, Chris"
```

Sie können dieselbe Technik verwenden, um zwei Variablen zusammenzuführen:

```js
const one = "Hello, ";
const two = "how are you?";
const joined = `${one}${two}`;
console.log(joined); // "Hello, how are you?"
```

Das Zusammenfügen von Strings auf diese Weise wird _Verkettung_ genannt.

### Verkettung im Kontext

Sehen wir uns die Verkettung in Aktion an:

```html live-sample___string-concat
<button>Press me</button>
<div id="greeting"></div>
```

```js live-sample___string-concat
const button = document.querySelector("button");

function greet() {
  const name = prompt("What is your name?");
  const greeting = document.querySelector("#greeting");
  greeting.textContent = `Hello ${name}, nice to see you!`;
}

button.addEventListener("click", greet);
```

{{EmbedLiveSample('string-concat', , '50', , , , , 'allow-modals')}}

Hier verwenden wir die Funktion [`window.prompt()`](/de/docs/Web/API/Window/prompt), die den Benutzer auffordert, eine Frage über ein Popup-Dialogfeld zu beantworten und dann den eingegebenen Text in einer gegebenen Variablen speichert — in diesem Fall `name`. Anschließend wird ein String angezeigt, der den Namen in eine generische Begrüßungsnachricht einfügt.

### Verkettung mit "+"

Sie können `${}` nur mit Template Literals verwenden, nicht mit normalen Strings. Sie können normale Strings mit dem Operator `+` verketten:

```js
const greeting = "Hello";
const name = "Chris";
console.log(greeting + ", " + name); // "Hello, Chris"
```

Template Literals liefern in der Regel jedoch leichter lesbaren Code:

```js
const greeting = "Hello";
const name = "Chris";
console.log(`${greeting}, ${name}`); // "Hello, Chris"
```

### Einfügen von Ausdrücken in Strings

Sie können in Template Literals nicht nur Variablen, sondern auch JavaScript-Ausdrücke hinzufügen, und die Ergebnisse werden in das Ergebnis aufgenommen:

```js
const song = "Fight the Youth";
const score = 9;
const highestScore = 10;
const output = `I like the song ${song}. I gave it a score of ${
  (score / highestScore) * 100
}%.`;
console.log(output); // "I like the song Fight the Youth. I gave it a score of 90%."
```

## Mehrzeilige Strings

Template Literals respektieren die Zeilenumbrüche im Quellcode, so dass Sie Strings schreiben können, die sich über mehrere Zeilen erstrecken:

```js
const newline = `One day you finally knew
what you had to do, and began,`;
console.log(newline);

/*
One day you finally knew
what you had to do, and began,
*/
```

Um die äquivalente Ausgabe mit einem normalen String zu haben, müssten Sie Zeilenumbruch-Zeichen (`\n`) in den String einfügen:

```js
const newline = "One day you finally knew\nwhat you had to do, and began,";
console.log(newline);

/*
One day you finally knew
what you had to do, and began,
*/
```

Weitere Beispiele und Details zu erweiterten Funktionen finden Sie auf unserer Referenzseite zu [Template Literals](/de/docs/Web/JavaScript/Reference/Template_literals).

## Einfügen von Anführungszeichen in Strings

Da wir Anführungszeichen verwenden, um den Beginn und das Ende von Strings anzuzeigen, wie können wir tatsächliche Anführungszeichen in Strings einfügen? Wir wissen, dass dies nicht funktionieren wird:

```js-nolint example-bad
const badQuotes = "She said "I think so!"";
```

Eine gängige Option ist, einen der anderen Charaktere zu verwenden, um den String zu deklarieren:

```js-nolint
const goodQuotes1 = 'She said "I think so!"';
const goodQuotes2 = `She said "I'm not going in there!"`;
```

Eine andere Option ist, das Problemzeichen zu _maskieren_. Maskieren von Zeichen bedeutet, dass wir etwas tun, damit sie als Text erkannt und nicht als Teil des Codes erkannt werden. In JavaScript machen wir dies, indem wir direkt vor dem Zeichen einen Backslash setzen. Versuchen Sie dies:

```js-nolint
const bigmouth = 'I\'ve got no right to take my place…';
console.log(bigmouth);
```

Sie können dieselbe Technik verwenden, um andere Sonderzeichen zu inserieren. Weitere Details finden Sie unter [Escape-Sequenzen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#escape_sequences).

## Zahlen vs. Strings

Was passiert, wenn wir versuchen, einen String und eine Zahl zu verketten? Versuchen wir es in unserer Konsole:

```js
const name = "Front ";
const number = 242;
console.log(name + number); // "Front 242"
```

Sie könnten erwarten, dass dies einen Fehler zurückgibt, aber es funktioniert einwandfrei. Wie Zahlen als Strings angezeigt werden sollten, ist ziemlich gut definiert, sodass der Browser die Zahl automatisch in einen String konvertiert und die beiden Strings verknüpft.

Wenn Sie eine numerische Variable haben, die Sie in einen String konvertieren möchten, oder eine String-Variable, die Sie in eine Zahl konvertieren möchten, können Sie die folgenden beiden Konstrukte verwenden:

- Die Funktion {{jsxref("Number/Number", "Number()")}} wandelt alles, was an sie übergeben wird, in eine Zahl um, wenn es möglich ist. Probieren Sie Folgendes aus:

  ```js
  const myString = "123";
  const myNum = Number(myString);
  console.log(typeof myNum);
  // number
  ```

- Umgekehrt konvertiert die Funktion {{jsxref("String/String", "String()")}} ihr Argument in einen String. Probieren Sie dies:

  ```js
  const myNum2 = 123;
  const myString2 = String(myNum2);
  console.log(typeof myString2);
  // string
  ```

Diese Konstrukte können in einigen Situationen wirklich nützlich sein. Wenn ein Benutzer beispielsweise eine Zahl in ein Textfeld eines Formulars eingibt, ist es ein String. Wenn Sie diese Zahl jedoch zu etwas hinzufügen möchten, müssen Sie sie in eine Zahl umwandeln, sodass Sie sie durch `Number()` verarbeiten könnten, um dies zu handhaben. Genau dies haben wir in unserem [Number Guessing Game](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/first-splash/number-guessing-game.html), in der Funktion `checkGuess` gemacht.

## Zusammenfassung

Damit haben wir die Grundlagen von Strings in JavaScript behandelt. Im nächsten Artikel werden wir darauf aufbauen und uns einige der eingebauten Methoden ansehen, die für Strings in JavaScript verfügbar sind, und wie wir sie nutzen können, um unsere Strings in genau die gewünschte Form zu bringen.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Math", "Learn_web_development/Core/Scripting/Useful_string_methods", "Learn_web_development/Core/Scripting")}}
