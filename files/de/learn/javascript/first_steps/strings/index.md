---
title: Umgang mit Text — Strings in JavaScript
slug: Learn/JavaScript/First_steps/Strings
l10n:
  sourceCommit: 23e1a97d50050a3b3518a4b2f67ccf42e5fd75b7
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/First_steps/Math", "Learn/JavaScript/First_steps/Useful_string_methods", "Learn/JavaScript/First_steps")}}

Als nächstes wenden wir uns den Strings zu — so werden Textteile in der Programmierung genannt. In diesem Artikel betrachten wir alle gängigen Dinge, die Sie wirklich über Strings wissen sollten, wenn Sie JavaScript lernen, wie zum Beispiel das Erstellen von Strings, das Escapen von Anführungszeichen in Strings und das Verbinden von Strings.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein grundlegendes Verständnis von HTML und CSS, ein
        Verständnis, was JavaScript ist.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Vertrautheit mit den Grundlagen von Strings in JavaScript zu erlangen.</td>
    </tr>
  </tbody>
</table>

## Die Macht der Worte

Worte sind für Menschen sehr wichtig — sie sind ein großer Teil unserer Kommunikation. Da das Web ein größtenteils textbasiertes Medium ist, das es Menschen ermöglicht, zu kommunizieren und Informationen zu teilen, ist es nützlich für uns, die Kontrolle über die darauf erscheinenden Worte zu haben. {{Glossary("HTML", "HTML")}} bietet Struktur und Bedeutung für Text, {{Glossary("CSS", "CSS")}} ermöglicht es uns, ihn präzise zu gestalten, und JavaScript bietet viele Funktionen zur Manipulation von Strings. Dazu gehören das Erstellen von benutzerdefinierten Willkommensnachrichten und Eingabeaufforderungen, das Anzeigen der richtigen Textbezeichnungen bei Bedarf, das Sortieren von Begriffen in der gewünschten Reihenfolge und vieles mehr.

So ziemlich alle Programme, die wir Ihnen bisher im Kurs gezeigt haben, beinhalteten eine gewisse String-Manipulation.

## Strings deklarieren

Strings werden auf den ersten Blick ähnlich wie Zahlen behandelt, aber wenn Sie tiefer graben, werden Sie einige bemerkenswerte Unterschiede feststellen. Lassen Sie uns damit beginnen, einige grundlegende Zeilen in die [Entwicklertools des Browsers](/de/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools) einzugeben, um uns damit vertraut zu machen.

Beginnen Sie damit, die folgenden Zeilen einzugeben:

```js
const string = "The revolution will not be televised.";
console.log(string);
```

Genau wie wir es mit Zahlen gemacht haben, deklarieren wir eine Variable, initialisieren sie mit einem String-Wert und geben dann den Wert zurück. Der einzige Unterschied hier ist, dass Sie beim Schreiben eines Strings den Wert mit Anführungszeichen umgeben müssen.

Tun Sie dies nicht oder vergessen Sie eines der Anführungszeichen, erhalten Sie einen Fehler. Versuchen Sie, die folgenden Zeilen einzugeben:

```js example-bad
const badString1 = This is a test;
const badString2 = 'This is a test;
const badString3 = This is a test';
```

Diese Zeilen funktionieren nicht, weil jeder Text ohne Anführungszeichen als Variablenname, Eigenschaftsname, reserviertes Wort oder Ähnliches interpretiert wird. Wenn der Browser den nicht angegebenen Text nicht erkennt, wird ein Fehler ausgegeben (z.B. "missing; before statement"). Wenn der Browser erkennen kann, wo ein String beginnt, aber nicht wo er endet (aufgrund des fehlenden zweiten Anführungszeichens), berichtet er über einen "nicht terminierten String-Literal"-Fehler. Wenn Ihr Programm solche Fehler ausgibt, gehen Sie zurück und überprüfen Sie alle Ihre Strings, um sicherzustellen, dass Sie keine fehlenden Anführungszeichen haben.

Das Folgende funktioniert, wenn Sie die Variable `string` zuvor definiert haben — versuchen Sie es jetzt:

```js
const badString = string;
console.log(badString);
```

`badString` ist jetzt so gesetzt, dass es denselben Wert wie `string` hat.

### Einfache Anführungszeichen, doppelte Anführungszeichen und Backticks

In JavaScript können Sie einfache Anführungszeichen (`'`), doppelte Anführungszeichen (`"`) oder Backticks (`` ` ``) verwenden, um Ihre Strings zu umschließen. Alle folgenden Beispiele funktionieren:

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

Strings, die mit einfachen Anführungszeichen deklariert werden, und Strings, die mit doppelten Anführungszeichen deklariert werden, sind identisch, und welche Sie verwenden, hängt von Ihrem persönlichen Stil ab — obwohl es gute Praxis ist, einen Stil auszuwählen und ihn konsistent in Ihrem Code zu verwenden.

Strings, die mit Backticks deklariert werden, sind eine spezielle Art von Strings, die als [_Template-Literals_](/de/docs/Web/JavaScript/Reference/Template_literals) bezeichnet werden. Template-Literals sind in den meisten Aspekten wie normale Strings, aber sie haben einige spezielle Eigenschaften:

- Sie können [JavaScript einbetten](#javascript_einbetten) in ihnen
- Sie können Template-Literals über [mehrere Zeilen](#mehrzeilige_strings) deklarieren

## JavaScript einbetten

Innerhalb eines Template-Literals können Sie JavaScript-Variablen oder -Ausdrücke in `${ }` einschließen, und das Ergebnis wird in den String eingefügt:

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

Das Verbinden von Strings auf diese Weise nennt man _Konkatenation_.

### Konkatenation im Kontext

Lassen Sie uns die Konkatenation in Aktion betrachten:

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

Hier verwenden wir die Funktion [`window.prompt()`](/de/docs/Web/API/Window/prompt), die den Benutzer auffordert, eine Frage über ein Popup-Dialogfeld zu beantworten und dann den eingegebenen Text in einer angegebenen Variablen zu speichern — in diesem Fall `name`. Wir zeigen dann einen String an, der den Namen in eine generische Begrüßungsnachricht einfügt.

### Konkatenation mit "+"

Sie können `${}` nur mit Template-Literals verwenden, nicht mit normalen Strings. Sie können normale Strings mit dem Operator `+` zusammenfügen:

```js
const greeting = "Hello";
const name = "Chris";
console.log(greeting + ", " + name); // "Hello, Chris"
```

Template-Literals bieten jedoch in der Regel besser lesbaren Code:

```js
const greeting = "Hello";
const name = "Chris";
console.log(`${greeting}, ${name}`); // "Hello, Chris"
```

### Ausdrücke in Strings einfügen

Sie können JavaScript-Ausdrücke in Template-Literals einfügen, sowie nur Variablen, und das Ergebnis wird in das Ergebnis eingefügt:

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

Template-Literals respektieren die Zeilenumbrüche im Quellcode, sodass Sie Strings schreiben können, die sich über mehrere Zeilen erstrecken, wie hier:

```js
const newline = `One day you finally knew
what you had to do, and began,`;
console.log(newline);

/*
One day you finally knew
what you had to do, and began,
*/
```

Um die äquivalente Ausgabe mit einem normalen String zu erhalten, müssten Sie Zeilenumbruchszeichen (`\n`) in den String einfügen:

```js
const newline = "One day you finally knew\nwhat you had to do, and began,";
console.log(newline);

/*
One day you finally knew
what you had to do, and began,
*/
```

Siehe unsere [Template-Literals](/de/docs/Web/JavaScript/Reference/Template_literals)-Referenzseite für weitere Beispiele und Details zu fortgeschrittenen Funktionen.

## Anführungszeichen in Strings einfügen

Da wir Anführungszeichen verwenden, um den Anfang und das Ende von Strings anzuzeigen, wie können wir tatsächliche Anführungszeichen in Strings einfügen? Wir wissen, dass dies nicht funktioniert:

```js-nolint example-bad
const badQuotes = "She said "I think so!"";
```

Eine häufige Option ist es, eines der anderen Zeichen zu verwenden, um den String zu deklarieren:

```js-nolint
const goodQuotes1 = 'She said "I think so!"';
const goodQuotes2 = `She said "I'm not going in there!"`;
```

Eine andere Möglichkeit ist es, das problematische Anführungszeichen zu _escapen_. Escaping von Zeichen bedeutet, dass wir etwas mit ihnen machen, um sicherzustellen, dass sie als Text und nicht als Teil des Codes erkannt werden. In JavaScript machen wir das, indem wir unmittelbar vor dem Zeichen einen Backslash setzen. Versuchen Sie dies:

```js-nolint
const bigmouth = 'I\'ve got no right to take my place…';
console.log(bigmouth);
```

Sie können dieselbe Technik verwenden, um andere Sonderzeichen einzufügen. Siehe [Escape-Sequenzen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#escape_sequences) für weitere Details.

## Zahlen vs. Strings

Was passiert, wenn wir versuchen, einen String und eine Zahl zu verbinden? Versuchen wir es in unserer Konsole:

```js
const name = "Front ";
const number = 242;
console.log(name + number); // "Front 242"
```

Sie könnten erwarten, dass dies einen Fehler zurückgibt, aber es funktioniert einwandfrei. Wie Zahlen als Strings dargestellt werden sollten, ist ziemlich gut definiert, also konvertiert der Browser die Zahl automatisch in einen String und verbindet die beiden Strings.

Wenn Sie eine numerische Variable haben, die Sie in einen String umwandeln möchten, oder eine String-Variable, die Sie in eine Zahl umwandeln möchten, können Sie die folgenden beiden Konstrukte verwenden:

- Die Funktion {{jsxref("Number/Number", "Number()")}} konvertiert alles, was ihr übergeben wird, in eine Zahl, wenn es möglich ist. Versuchen Sie Folgendes:

  ```js
  const myString = "123";
  const myNum = Number(myString);
  console.log(typeof myNum);
  // number
  ```

- Umgekehrt konvertiert die Funktion {{jsxref("String/String", "String()")}} ihr Argument in einen String. Versuchen Sie dies:

  ```js
  const myNum2 = 123;
  const myString2 = String(myNum2);
  console.log(typeof myString2);
  // string
  ```

Diese Konstrukte können in einigen Situationen wirklich nützlich sein. Wenn ein Benutzer beispielsweise eine Zahl in ein Textfeld eines Formulars eingibt, handelt es sich dabei um einen String. Wenn Sie diese Zahl jedoch zu etwas addieren möchten, benötigen Sie sie als Zahl, sodass Sie sie durch `Number()` führen könnten, um dies zu handhaben. Genau das haben wir in unserem [Number Guessing Game](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/first-splash/number-guessing-game.html) in der Funktion `checkGuess` gemacht.

## Fazit

Damit sind die Grundlagen von Strings in JavaScript abgedeckt. Im nächsten Artikel werden wir darauf aufbauen und einige der eingebauten Methoden untersuchen, die Strings in JavaScript zur Verfügung stehen, und wie wir sie verwenden können, um unsere Strings in genau die gewünschte Form zu bringen.

{{PreviousMenuNext("Learn/JavaScript/First_steps/Math", "Learn/JavaScript/First_steps/Useful_string_methods", "Learn/JavaScript/First_steps")}}
