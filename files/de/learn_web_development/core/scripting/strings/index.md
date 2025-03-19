---
title: Umgang mit Text — Zeichenfolgen in JavaScript
short-title: Strings
slug: Learn_web_development/Core/Scripting/Strings
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Math", "Learn_web_development/Core/Scripting/Useful_string_methods", "Learn_web_development/Core/Scripting")}}

Als Nächstes werden wir unsere Aufmerksamkeit auf Zeichenfolgen richten — so werden Textteile in der Programmierung genannt. In diesem Artikel werden wir alle gängigen Dinge untersuchen, die Sie über Zeichenfolgen wissen sollten, wenn Sie JavaScript lernen, wie das Erstellen von Zeichenfolgen, das Maskieren von Anführungszeichen in Zeichenfolgen und das Zusammenfügen von Zeichenfolgen.

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
          <li>Erstellen von Zeichenfolgenliteralen.</li>
          <li>Die Anforderung, dass Anführungszeichen übereinstimmen müssen.</li>
          <li>Zeichenfolgenverkettung.</li>
          <li>Maskierung von Zeichen in Zeichenfolgen.</li>
          <li>Template-Literale, einschließlich der Verwendung von Variablen und mehrzeiligen Template-Literalen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Die Macht der Worte

Worte sind für Menschen sehr wichtig — sie sind ein großer Teil unserer Kommunikation. Da das Web ein hauptsächlich textbasiertes Medium ist, das es Menschen ermöglicht, Informationen zu kommunizieren und zu teilen, ist es nützlich, die Kontrolle über die darauf erscheinenden Worte zu haben. {{Glossary("HTML", "HTML")}} bietet Struktur und Bedeutung für Text, {{Glossary("CSS", "CSS")}} erlaubt es uns, ihn präzise zu stylen, und JavaScript bietet viele Funktionen zur Manipulation von Zeichenfolgen. Dazu gehört das Erstellen von benutzerdefinierten Begrüßungsnachrichten und Eingabeaufforderungen, das Anzeigen der richtigen Textbeschriftungen bei Bedarf, das Sortieren von Begriffen in die gewünschte Reihenfolge und vieles mehr.

So ziemlich alle Programme, die wir Ihnen bisher im Kurs gezeigt haben, haben eine gewisse Zeichenfolgenmanipulation beinhaltet.

## Deklarieren von Zeichenfolgen

Zeichenfolgen werden auf den ersten Blick ähnlich wie Zahlen behandelt, aber wenn Sie tiefer graben, werden Sie einige bemerkenswerte Unterschiede feststellen. Beginnen wir, indem wir einige grundlegende Zeilen in die [Entwicklerkonsole des Browsers](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) eingeben, um uns vertraut zu machen.

Geben Sie zunächst die folgenden Zeilen ein:

```js
const string = "The revolution will not be televised.";
console.log(string);
```

Genau wie bei Zahlen deklarieren wir eine Variable, initialisieren sie mit einem Zeichenfolgenwert und geben dann den Wert zurück. Der einzige Unterschied ist, dass Sie beim Schreiben einer Zeichenfolge den Wert in Anführungszeichen setzen müssen.

Wenn Sie dies nicht tun oder eines der Anführungszeichen fehlt, erhalten Sie einen Fehler. Versuchen Sie, die folgenden Zeilen einzugeben:

```js example-bad
const badString1 = This is a test;
const badString2 = 'This is a test;
const badString3 = This is a test';
```

Diese Zeilen funktionieren nicht, da jeder Text ohne Anführungszeichen als Variablenname, Eigenschaftsname, reserviertes Wort oder ähnliches interpretiert wird. Wenn der Browser den nicht gequoteten Text nicht erkennt, wird ein Fehler gemeldet (z. B. "fehlendes; vor Anweisung"). Wenn der Browser erkennen kann, wo eine Zeichenfolge beginnt, aber nicht, wo sie endet (aufgrund des fehlenden zweiten Anführungszeichens), wird ein Fehler "nicht abgeschlossene Zeichenfolgenliteral" gemeldet. Wenn Ihr Programm solche Fehler hervorruft, gehen Sie zurück und überprüfen Sie alle Ihre Zeichenfolgen, um sicherzustellen, dass keine Anführungszeichen fehlen.

Das Folgende funktioniert, wenn Sie vorher die Variable `string` definiert haben — versuchen Sie es jetzt:

```js
const badString = string;
console.log(badString);
```

`badString` ist jetzt auf denselben Wert wie `string` gesetzt.

### Einfache, doppelte und Backticks

In JavaScript können Sie einfache Anführungszeichen (`'`), doppelte Anführungszeichen (`"`) oder Backticks (`` ` ``) verwenden, um Ihre Zeichenfolgen einzuschließen. Alle folgenden Beispiele funktionieren:

```js-nolint
const single = 'Single quotes';
const double = "Double quotes";
const backtick = `Backtick`;

console.log(single);
console.log(double);
console.log(backtick);
```

Sie müssen dasselbe Zeichen für den Anfang und das Ende einer Zeichenfolge verwenden, sonst erhalten Sie einen Fehler:

```js-nolint example-bad
const badQuotes = 'This is not allowed!";
```

Zeichenfolgen, die in einfachen Anführungszeichen deklariert sind, und Zeichenfolgen, die in doppelten Anführungszeichen deklariert sind, sind gleich, und welche Sie verwenden, liegt bei Ihnen — obwohl es eine gute Praxis ist, einen Stil auszuwählen und diesen konsistent in Ihrem Code zu verwenden.

Zeichenfolgen, die mit Backticks deklariert sind, sind eine spezielle Art von Zeichenfolge, die [_Template-Literale_](/de/docs/Web/JavaScript/Reference/Template_literals) genannt werden. In den meisten Aspekten sind Template-Literale wie normale Zeichenfolgen, aber sie haben einige spezielle Eigenschaften:

- Sie können [JavaScript einbetten](#javascript_einbetten) in ihnen
- Sie können Template-Literale über [mehrere Zeilen](#mehrzeilige_zeichenfolgen) deklarieren

## JavaScript einbetten

Innerhalb eines Template-Literals können JavaScript-Variablen oder -Ausdrücke mit `${ }` umschlossen werden, und das Ergebnis wird in die Zeichenfolge aufgenommen:

```js
const name = "Chris";
const greeting = `Hello, ${name}`;
console.log(greeting); // "Hello, Chris"
```

Sie können die gleiche Technik verwenden, um zwei Variablen zusammenzufügen:

```js
const one = "Hello, ";
const two = "how are you?";
const joined = `${one}${two}`;
console.log(joined); // "Hello, how are you?"
```

Das Zusammenfügen von Zeichenfolgen wie diesem wird _Verkettung_ genannt.

### Verkettung im Kontext

Lassen Sie uns die Verkettung in Aktion betrachten:

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

Hier verwenden wir die Funktion [`window.prompt()`](/de/docs/Web/API/Window/prompt), die den Benutzer auffordert, eine Frage über ein Popup-Dialogfeld zu beantworten, und dann den Text, den er eingibt, in einer angegebenen Variablen speichert — in diesem Fall `name`. Wir zeigen dann eine Zeichenfolge an, die den Namen in eine allgemeine Begrüßungsnachricht einfügt.

### Verkettung mit "+"

Sie können `${}` nur mit Template-Literalen verwenden, nicht mit normalen Zeichenfolgen. Sie können normale Zeichenfolgen mit dem Operator `+` verketten:

```js
const greeting = "Hello";
const name = "Chris";
console.log(greeting + ", " + name); // "Hello, Chris"
```

Template-Literale ermöglichen jedoch in der Regel besser lesbaren Code:

```js
const greeting = "Hello";
const name = "Chris";
console.log(`${greeting}, ${name}`); // "Hello, Chris"
```

### Einschließen von Ausdrücken in Zeichenfolgen

Sie können JavaScript-Ausdrücke in Template-Literalen einfügen, ebenso wie nur Variablen, und die Ergebnisse werden in das Ergebnis aufgenommen:

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

Template-Literale respektieren die Zeilenumbrüche im Quellcode, sodass Sie Zeichenfolgen schreiben können, die sich über mehrere Zeilen erstrecken, wie diese:

```js
const newline = `One day you finally knew
what you had to do, and began,`;
console.log(newline);

/*
One day you finally knew
what you had to do, and began,
*/
```

Um die entsprechende Ausgabe mit einer normalen Zeichenfolge zu erhalten, müssten Sie Zeilenumbruchszeichen (`\n`) in die Zeichenfolge einfügen:

```js
const newline = "One day you finally knew\nwhat you had to do, and began,";
console.log(newline);

/*
One day you finally knew
what you had to do, and began,
*/
```

Sehen Sie sich unsere Referenzseite [Template-Literale](/de/docs/Web/JavaScript/Reference/Template_literals) für weitere Beispiele und Details zu erweiterten Funktionen an.

## Einschließen von Anführungszeichen in Zeichenfolgen

Da wir Anführungszeichen verwenden, um den Anfang und das Ende von Zeichenfolgen anzugeben, wie können wir tatsächliche Anführungszeichen in Zeichenfolgen einfügen? Wir wissen, dass dies nicht funktioniert:

```js-nolint example-bad
const badQuotes = "She said "I think so!"";
```

Eine gängige Option ist, eines der anderen Zeichen zu verwenden, um die Zeichenfolge zu deklarieren:

```js-nolint
const goodQuotes1 = 'She said "I think so!"';
const goodQuotes2 = `She said "I'm not going in there!"`;
```

Eine andere Möglichkeit besteht darin, das problematische Anführungszeichen zu _maskieren_. Maskierung von Zeichen bedeutet, dass wir etwas mit ihnen machen, um sicherzustellen, dass sie als Text erkannt werden und nicht als Teil des Codes. In JavaScript machen wir dies, indem wir einen Backslash direkt vor dem Zeichen setzen. Versuchen Sie dies:

```js-nolint
const bigmouth = 'I\'ve got no right to take my place…';
console.log(bigmouth);
```

Sie können die gleiche Technik verwenden, um andere Sonderzeichen einzufügen. Siehe [Escape-Sequenzen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#escape_sequences) für weitere Details.

## Zahlen vs. Zeichenfolgen

Was passiert, wenn wir versuchen, eine Zeichenfolge und eine Zahl zu verketten? Lassen Sie es uns in unserer Konsole ausprobieren:

```js
const name = "Front ";
const number = 242;
console.log(name + number); // "Front 242"
```

Sie könnten erwarten, dass dies einen Fehler zurückgibt, aber es funktioniert einwandfrei. Wie Zahlen als Zeichenfolgen angezeigt werden sollten, ist ziemlich gut definiert, sodass der Browser die Zahl automatisch in eine Zeichenfolge konvertiert und die beiden Zeichenfolgen verknüpft.

Wenn Sie eine numerische Variable haben, die Sie in eine Zeichenfolge umwandeln möchten, oder eine Zeichenfolgenvariable, die Sie in eine Zahl umwandeln möchten, können Sie die folgenden zwei Konstruktionen verwenden:

- Die Funktion {{jsxref("Number/Number", "Number()")}} konvertiert alles, was ihr übergeben wird, in eine Zahl, wenn möglich. Versuchen Sie Folgendes:

  ```js
  const myString = "123";
  const myNum = Number(myString);
  console.log(typeof myNum);
  // number
  ```

- Umgekehrt konvertiert die Funktion {{jsxref("String/String", "String()")}} ihr Argument in eine Zeichenfolge. Versuchen Sie dies:

  ```js
  const myNum2 = 123;
  const myString2 = String(myNum2);
  console.log(typeof myString2);
  // string
  ```

Diese Konstruktionen können in einigen Situationen wirklich nützlich sein. Wenn ein Benutzer beispielsweise eine Zahl in ein Textfeld eines Formulars eingibt, ist es eine Zeichenfolge. Wenn Sie diese Zahl jedoch zu etwas addieren möchten, müssen Sie sie in eine Zahl umwandeln. Sie könnten sie also durch `Number()` leiten, um dies zu handhaben. Genau dies haben wir in unserem [Zahlenratespiel](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/first-splash/number-guessing-game.html) in der Funktion `checkGuess` gemacht.

## Zusammenfassung

Das sind die Grundlagen von Zeichenfolgen in JavaScript. Im nächsten Artikel werden wir darauf aufbauen und einige der eingebauten Methoden untersuchen, die für Zeichenfolgen in JavaScript verfügbar sind und wie wir sie verwenden können, um unsere Zeichenfolgen in die gewünschte Form zu bringen.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Math", "Learn_web_development/Core/Scripting/Useful_string_methods", "Learn_web_development/Core/Scripting")}}
