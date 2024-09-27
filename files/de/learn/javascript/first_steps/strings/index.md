---
title: Umgang mit Text — Strings in JavaScript
slug: Learn/JavaScript/First_steps/Strings
l10n:
  sourceCommit: 23e1a97d50050a3b3518a4b2f67ccf42e5fd75b7
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/First_steps/Math", "Learn/JavaScript/First_steps/Useful_string_methods", "Learn/JavaScript/First_steps")}}

Als nächstes richten wir unsere Aufmerksamkeit auf Strings — so werden Textstücke in der Programmierung genannt. In diesem Artikel werden wir uns alle gängigen Dinge ansehen, die Sie über Strings wissen sollten, wenn Sie JavaScript lernen, wie z.B. das Erstellen von Strings, das Escapen von Anführungszeichen in Strings und das Verbinden von Strings miteinander.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein grundlegendes Verständnis von HTML und CSS sowie ein
        Verständnis davon, was JavaScript ist.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Vertrautheit mit den Grundlagen von Strings in JavaScript zu erlangen.</td>
    </tr>
  </tbody>
</table>

## Die Macht der Worte

Worte sind für Menschen sehr wichtig — sie sind ein großer Teil unserer Kommunikation. Da das Web ein überwiegend textbasiertes Medium ist, das darauf ausgelegt ist, Menschen die Kommunikation und den Informationsaustausch zu ermöglichen, ist es nützlich, die Kontrolle über die Wörter zu haben, die darauf erscheinen. [HTML](/de/docs/Glossary/HTML) bietet Struktur und Bedeutung für Text, [CSS](/de/docs/Glossary/CSS) ermöglicht uns, ihn präzise zu stylen, und JavaScript bietet viele Funktionen zur Manipulation von Strings. Diese beinhalten das Erstellen von benutzerdefinierten Willkommensnachrichten und Eingabeaufforderungen, das Anzeigen der richtigen Textbeschriftungen bei Bedarf, das Sortieren von Begriffen in der gewünschten Reihenfolge und vieles mehr.

Fast alle Programme, die wir Ihnen bisher im Kurs gezeigt haben, haben eine gewisse String-Manipulation beinhaltet.

## Deklarieren von Strings

Strings werden zunächst ähnlich wie Zahlen behandelt, aber wenn Sie tiefer graben, werden Sie einige bemerkenswerte Unterschiede sehen. Lassen Sie uns damit beginnen, einige grundlegende Zeilen in die [Entwicklertools des Browsers](/de/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools) einzugeben, um uns vertraut zu machen.

Zunächst geben Sie die folgenden Zeilen ein:

```js
const string = "The revolution will not be televised.";
console.log(string);
```

Genau wie bei den Zahlen deklarieren wir eine Variable, initialisieren sie mit einem String-Wert und geben dann den Wert zurück. Der einzige Unterschied hier ist, dass Sie beim Schreiben eines Strings den Wert in Anführungszeichen einschließen müssen.

Wenn Sie das nicht tun oder ein Anführungszeichen vergessen, erhalten Sie einen Fehler. Versuchen Sie, die folgenden Zeilen einzugeben:

```js example-bad
const badString1 = This is a test;
const badString2 = 'This is a test;
const badString3 = This is a test';
```

Diese Zeilen funktionieren nicht, weil jeder Text ohne Anführungszeichen als Variablenname, Eigenschaftsname, reserviertes Wort oder Ähnliches interpretiert wird. Wenn der Browser den nicht zitierten Text nicht erkennt, wird ein Fehler ausgelöst (z. B. „missing; before statement“). Wenn der Browser erkennen kann, wo ein String beginnt, aber nicht das Ende (wegen des fehlenden zweiten Anführungszeichens), wird ein „unterminated string literal“-Fehler gemeldet. Wenn Ihr Programm solche Fehler auslöst, gehen Sie zurück und überprüfen Sie alle Ihre Strings, um sicherzustellen, dass keine Anführungszeichen fehlen.

Das Folgende wird funktionieren, wenn Sie zuvor die Variable `string` definiert haben – versuchen Sie es jetzt:

```js
const badString = string;
console.log(badString);
```

`badString` ist jetzt auf denselben Wert wie `string` gesetzt.

### Einfache Anführungszeichen, doppelte Anführungszeichen und Backticks

In JavaScript können Sie einfache Anführungszeichen (`'`), doppelte Anführungszeichen (`"`) oder Backticks (`` ` ``) verwenden, um Ihre Strings zu umschließen. Alles Folgende wird funktionieren:

```js-nolint
const single = 'Single quotes';
const double = "Double quotes";
const backtick = `Backtick`;

console.log(single);
console.log(double);
console.log(backtick);
```

Sie müssen dasselbe Zeichen für den Anfang und das Ende eines Strings verwenden, andernfalls erhalten Sie einen Fehler:

```js-nolint example-bad
const badQuotes = 'This is not allowed!";
```

Strings, die mit einfachen Anführungszeichen deklariert werden, und Strings, die mit doppelten Anführungszeichen deklariert werden, sind gleich und welche Sie verwenden, hängt von Ihrer persönlichen Vorliebe ab — obwohl es eine gute Praxis ist, einen Stil zu wählen und ihn konsistent in Ihrem Code zu verwenden.

Strings, die mit Backticks deklariert werden, sind eine spezielle Art von String, die als [_Template-Literale_](/de/docs/Web/JavaScript/Reference/Template_literals) bezeichnet werden. In den meisten Aspekten sind Template-Literale wie normale Strings, aber sie haben einige besondere Eigenschaften:

- Sie können [JavaScript einbetten](#einbetten_von_javascript) in ihnen
- Sie können Template-Literale über [mehrere Zeilen](#mehrzeilige_strings) deklarieren

## Einbetten von JavaScript

Innerhalb eines Template-Literals können Sie JavaScript-Variablen oder -Ausdrücke in `${ }` einfügen, und das Ergebnis wird in den String aufgenommen:

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

Das Zusammenfügen von Strings auf diese Weise wird _Konkatenation_ genannt.

### Konkatenation im Kontext

Schauen wir uns die Verwendung der Konkatenation in Aktion an:

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

Hier verwenden wir die [`window.prompt()`](/de/docs/Web/API/Window/prompt)-Funktion, die den Benutzer auffordert, eine Frage über ein Popup-Dialogfeld zu beantworten und dann den eingegebenen Text in einer bestimmten Variablen speichert — in diesem Fall `name`. Anschließend zeigen wir einen String an, der den Namen in eine generische Begrüßungsnachricht einfügt.

### Konkatenation mit "+"

Sie können `${}` nur mit Template-Literalen verwenden, nicht mit normalen Strings. Sie können normale Strings mit dem `+`-Operator konkatenieren:

```js
const greeting = "Hello";
const name = "Chris";
console.log(greeting + ", " + name); // "Hello, Chris"
```

Template-Literale führen jedoch normalerweise zu besser lesbarem Code:

```js
const greeting = "Hello";
const name = "Chris";
console.log(`${greeting}, ${name}`); // "Hello, Chris"
```

### Einschließen von Ausdrücken in Strings

Sie können JavaScript-Ausdrücke in Template-Literale einfügen, sowie nur Variablen, und die Ergebnisse werden im Ergebnis enthalten:

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

Template-Literale respektieren die Zeilenumbrüche im Quellcode, sodass Sie Strings schreiben können, die sich über mehrere Zeilen erstrecken:

```js
const newline = `One day you finally knew
what you had to do, and began,`;
console.log(newline);

/*
One day you finally knew
what you had to do, and began,
*/
```

Um die äquivalente Ausgabe mit einem normalen String zu haben, müssten Sie Zeilenumbruchzeichen (`\n`) in den String aufnehmen:

```js
const newline = "One day you finally knew\nwhat you had to do, and began,";
console.log(newline);

/*
One day you finally knew
what you had to do, and began,
*/
```

Sehen Sie sich unsere Referenzseite zu [Template-Literalen](/de/docs/Web/JavaScript/Reference/Template_literals) für weitere Beispiele und Details zu erweiterten Funktionen an.

## Einschließen von Anführungszeichen in Strings

Da wir Anführungszeichen verwenden, um den Anfang und das Ende von Strings anzugeben, wie können wir tatsächliche Anführungszeichen in Strings aufnehmen? Wir wissen, dass dies nicht funktionieren wird:

```js-nolint example-bad
const badQuotes = "She said "I think so!"";
```

Eine häufige Möglichkeit ist die Verwendung eines der anderen Zeichen, um den String zu deklarieren:

```js-nolint
const goodQuotes1 = 'She said "I think so!"';
const goodQuotes2 = `She said "I'm not going in there!"`;
```

Eine andere Möglichkeit besteht darin, das problematische Anführungszeichen zu _escapen_. Zeichen escapen bedeutet, dass wir etwas mit ihnen machen, um sicherzustellen, dass sie als Text und nicht als Teil des Codes erkannt werden. In JavaScript machen wir dies, indem wir direkt vor dem Zeichen einen Backslash setzen. Versuchen Sie dies:

```js-nolint
const bigmouth = 'I\'ve got no right to take my place…';
console.log(bigmouth);
```

Sie können dieselbe Technik verwenden, um andere Sonderzeichen einzufügen. Siehe [Escape-Sequenzen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#escape_sequences) für weitere Details.

## Zahlen vs. Strings

Was passiert, wenn wir versuchen, einen String und eine Zahl zu konkatenieren? Lassen Sie uns dies in unserer Konsole ausprobieren:

```js
const name = "Front ";
const number = 242;
console.log(name + number); // "Front 242"
```

Sie könnten erwarten, dass dies einen Fehler zurückgibt, aber es funktioniert einwandfrei. Wie Zahlen als Strings angezeigt werden sollten, ist ziemlich gut definiert, daher konvertiert der Browser die Zahl automatisch in einen String und konkateniert die beiden Strings.

Wenn Sie eine numerische Variable haben, die Sie in einen String konvertieren möchten, oder eine String-Variable, die Sie in eine Zahl konvertieren möchten, können Sie die folgenden beiden Konstrukte verwenden:

- Die {{jsxref("Number/Number", "Number()")}}-Funktion konvertiert alles, was an sie übergeben wird, in eine Zahl, wenn sie kann. Versuchen Sie Folgendes:

  ```js
  const myString = "123";
  const myNum = Number(myString);
  console.log(typeof myNum);
  // number
  ```

- Umgekehrt konvertiert die {{jsxref("String/String", "String()")}}-Funktion ihr Argument in einen String. Versuchen Sie dies:

  ```js
  const myNum2 = 123;
  const myString2 = String(myNum2);
  console.log(typeof myString2);
  // string
  ```

Diese Konstrukte können in einigen Situationen wirklich nützlich sein. Wenn ein Benutzer beispielsweise eine Zahl in ein Textfeld eines Formulars eingibt, ist es ein String. Wenn Sie diese Zahl jedoch zu etwas addieren möchten, müssen Sie sie in eine Zahl umwandeln, also könnten Sie sie durch `Number()` laufen lassen, um dies zu handhaben. Genau das haben wir in unserem [Number Guessing Game](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/first-splash/number-guessing-game.html) in der `checkGuess`-Funktion gemacht.

## Schlussfolgerung

Damit sind die Grundlagen der Strings in JavaScript abgedeckt. Im nächsten Artikel werden wir darauf aufbauen und einige der eingebauten Methoden betrachten, die für Strings in JavaScript verfügbar sind, und wie wir sie verwenden können, um unsere Strings in genau die Form zu bringen, die wir möchten.

{{PreviousMenuNext("Learn/JavaScript/First_steps/Math", "Learn/JavaScript/First_steps/Useful_string_methods", "Learn/JavaScript/First_steps")}}
