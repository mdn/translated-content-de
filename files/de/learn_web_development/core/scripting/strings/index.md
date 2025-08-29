---
title: Umgang mit Text — Zeichenfolgen in JavaScript
short-title: Strings
slug: Learn_web_development/Core/Scripting/Strings
l10n:
  sourceCommit: fdfe2889acd02623047231e39c9dee5df1bd646e
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Test_your_skills/Math", "Learn_web_development/Core/Scripting/Useful_string_methods", "Learn_web_development/Core/Scripting")}}

Als nächstes wenden wir uns Zeichenfolgen zu — das ist die Bezeichnung für Textteile in der Programmierung. In diesem Artikel werden wir uns mit allen gängigen Aspekten befassen, die Sie über Zeichenfolgen wissen sollten, wenn Sie JavaScript lernen, wie z.B. das Erstellen von Zeichenfolgen, das Escapieren von Anführungszeichen in Zeichenfolgen und das Zusammenfügen von Zeichenfolgen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS-Grundlagen</a>.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Erstellen von Zeichenfolgenliteralen.</li>
          <li>Die Notwendigkeit für passende Anführungszeichen.</li>
          <li>Zeichenfolgenkonkatenation.</li>
          <li>Escapen von Zeichen in Zeichenfolgen.</li>
          <li>Template-Strings, einschließlich der Verwendung von Variablen und mehrzeiligen Template-Strings.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Die Macht der Worte

Worte sind für Menschen sehr wichtig — sie sind ein großer Teil unserer Kommunikation. Da das Web ein überwiegend textbasiertes Medium ist, das entwickelt wurde, um Menschen die Kommunikation und den Austausch von Informationen zu ermöglichen, ist es nützlich, Kontrolle über die auf ihm erscheinenden Worte zu haben. {{Glossary("HTML", "HTML")}} gibt Texten Struktur und Bedeutung, {{Glossary("CSS", "CSS")}} erlaubt uns, ihn präzise zu gestalten, und JavaScript bietet zahlreiche Funktionen zur Manipulation von Zeichenfolgen. Dazu gehören das Erstellen benutzerdefinierter Willkommensnachrichten und Aufforderungen, das Anzeigen der richtigen Textbeschriftungen bei Bedarf, das Sortieren von Begriffen in die gewünschte Reihenfolge und vieles mehr.

Praktisch alle Programme, die wir Ihnen bisher im Kurs gezeigt haben, beinhalten einige Art der Zeichenfolgenmanipulation.

## Deklarieren von Zeichenfolgen

Zeichenfolgen werden auf den ersten Blick ähnlich behandelt wie Zahlen, aber wenn Sie tiefer graben, sehen Sie einige bemerkenswerte Unterschiede. Beginnen wir damit, einige grundlegende Zeilen in die [Entwicklertools des Browsers](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) einzugeben, um uns damit vertraut zu machen.

Geben Sie zunächst die folgenden Zeilen ein:

```js
const string = "The revolution will not be televised.";
console.log(string);
```

Genau wie bei den Zahlen deklarieren wir eine Variable, initialisieren sie mit einem Zeichenfolgenwert und geben den Wert dann zurück. Der einzige Unterschied besteht darin, dass Sie beim Schreiben einer Zeichenfolge den Wert in Anführungszeichen setzen müssen.

Wenn Sie dies nicht tun oder eines der Anführungszeichen fehlt, wird ein Fehler angezeigt. Versuchen Sie, die folgenden Zeilen einzugeben:

```js example-bad
const badString1 = This is a test;
const badString2 = 'This is a test;
const badString3 = This is a test';
```

Diese Zeilen funktionieren nicht, da jeder Text ohne Anführungszeichen als Variablenname, Property-Name, reserviertes Wort oder Ähnliches interpretiert wird. Wenn der Browser den nicht in Anführungszeichen gesetzten Text nicht erkennt, wird ein Fehler ausgegeben (z.B. „fehlendes; vor Anweisung“). Wenn der Browser erkennen kann, wo eine Zeichenfolge beginnt, aber nicht, wo sie endet (aufgrund des fehlenden zweiten Anführungszeichens), kann er einen Fehler „nicht abgeschlossene Zeichenfolgenliterale“ melden oder erwartet in der Konsole, dass Sie die Zeichenfolge dort beenden. Wenn Ihr Programm solche Fehler ausgibt, überprüfen Sie alle Ihre Zeichenfolgen, um sicherzustellen, dass keine Anführungszeichen fehlen.

Das Folgende funktioniert, wenn Sie zuvor die Variable `string` definiert haben — versuchen Sie es jetzt:

```js
const badString = string;
console.log(badString);
```

`badString` ist nun auf denselben Wert wie `string` gesetzt.

### Einzelne Anführungszeichen, doppelte Anführungszeichen und Backticks

In JavaScript können Sie wählen, ob Sie einzelne Anführungszeichen (`'`), doppelte Anführungszeichen (`"`) oder Backticks (`` ` ``) verwenden, um Ihre Zeichenfolgen zu umschließen. Alle der folgenden werden funktionieren:

```js-nolint
const single = 'Single quotes';
const double = "Double quotes";
const backtick = `Backtick`;

console.log(single);
console.log(double);
console.log(backtick);
```

Sie müssen dasselbe Zeichen für den Beginn und das Ende einer Zeichenfolge verwenden, sonst erhalten Sie einen Fehler:

```js-nolint example-bad
const badQuotes = 'This is not allowed!";
```

Zeichenfolgen, die mit einfachen Anführungszeichen und Zeichenfolgen, die mit doppelten Anführungszeichen deklariert sind, sind gleich, und welche Sie verwenden, hängt von persönlichen Vorlieben ab — es ist jedoch eine gute Praxis, sich für einen Stil zu entscheiden und ihn konsequent im Code zu verwenden.

Zeichenfolgen, die mit Backticks deklariert werden, sind eine spezielle Art von Zeichenfolgen, die [_Template-Literals_](/de/docs/Web/JavaScript/Reference/Template_literals) genannt werden. Template-Literals verhalten sich größtenteils wie normale Zeichenfolgen, haben aber einige besondere Eigenschaften:

- Sie können [JavaScript einbetten](#javascript_einbetten).
- Sie können Template-Strings über [mehrere Zeilen](#mehrzeilige_zeichenfolgen) deklarieren.

## JavaScript einbetten

In einem Template-Literal können Sie JavaScript-Variablen oder -Ausdrücke innerhalb von `${ }` einfügen, und das Ergebnis wird in die Zeichenfolge aufgenommen:

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

Das Zusammenfügen von Zeichenfolgen wie dieses wird als _Konkatenation_ bezeichnet.

### Konkatenation im Kontext

Schauen wir uns die Konkatenation in der Praxis an:

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

Hier verwenden wir die Funktion [`window.prompt()`](/de/docs/Web/API/Window/prompt), die den Benutzer dazu auffordert, eine Frage über ein Popup-Dialogfeld zu beantworten und dann den eingegebenen Text in einer gegebenen Variablen speichert — in diesem Fall `name`. Wir zeigen dann eine Zeichenfolge an, die den Namen in eine allgemeine Begrüßungsnachricht einfügt.

### Konkatenation mit "+"

Sie können `${}` nur mit Template-Literals verwenden, nicht mit normalen Zeichenfolgen. Sie können normale Zeichenfolgen mit dem `+` Operator zusammenfügen:

```js
const greeting2 = "Hello";
const name2 = "Bob";
console.log(greeting2 + ", " + name2); // "Hello, Bob"
```

Allerdings ergibt die Verwendung von Template-Literals normalerweise besser lesbaren Code:

```js
const greeting3 = "Howdy";
const name3 = "Ramesh";
console.log(`${greeting3}, ${name3}`); // "Howdy, Ramesh"
```

### Einschließen von Ausdrücken in Zeichenfolgen

Sie können JavaScript-Ausdrücke in Template-Literals einfügen, ebenso wie nur Variablen, und die Ergebnisse werden in das Ergebnis aufgenommen:

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

Template-Literals respektieren die Zeilenumbrüche im Quellcode, sodass Sie Zeichenfolgen schreiben können, die sich über mehrere Zeilen erstrecken:

```js
const newline = `One day you finally knew
what you had to do, and began,`;
console.log(newline);

/*
One day you finally knew
what you had to do, and began,
*/
```

Um die äquivalente Ausgabe mit einer normalen Zeichenfolge zu erreichen, müssten Sie Zeilenumbruchzeichen (`\n`) in die Zeichenfolge einfügen:

```js
const newline2 = "One day you finally knew\nwhat you had to do, and began,";
console.log(newline2);

/*
One day you finally knew
what you had to do, and began,
*/
```

Sehen Sie sich unsere [Template-Literals](/de/docs/Web/JavaScript/Reference/Template_literals) Referenzseite für weitere Beispiele und Details zu erweiterten Funktionen an.

## Einschließen von Anführungszeichen in Zeichenfolgen

Da wir Anführungszeichen verwenden, um den Anfang und das Ende von Zeichenfolgen anzugeben, wie können wir tatsächliche Anführungszeichen in Zeichenfolgen einbinden? Wir wissen, dass dies nicht funktionieren wird:

```js-nolint example-bad
const badQuotes = "She said "I think so!"";
```

Eine häufige Option ist es, einen der anderen Zeichen zum Deklarieren der Zeichenfolge zu verwenden:

```js-nolint
const goodQuotes1 = 'She said "I think so!"';
const goodQuotes2 = `She said "I'm not going in there!"`;
```

Eine andere Möglichkeit ist es, das problematische Anführungszeichen zu _escapen_. Zeichen escapen bedeutet, dass wir etwas mit ihnen machen, um sicherzustellen, dass sie als Text und nicht als Teil des Codes erkannt werden. In JavaScript tun wir dies, indem wir direkt vor das Zeichen einen Backslash setzen. Versuchen Sie das:

```js-nolint
const bigmouth = 'I\'ve got no right to take my place…';
console.log(bigmouth);
```

Sie können dieselbe Technik verwenden, um andere Sonderzeichen einzufügen. Siehe [Escape-Sequenzen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#escape_sequences) für weitere Details.

## Zahlen vs. Zeichenfolgen

Was passiert, wenn wir versuchen, eine Zeichenfolge und eine Zahl zu verknüpfen? Probieren wir es in unserer Konsole:

```js
const coolBandName = "Front ";
const number = 242;
console.log(coolBandName + number); // "Front 242"
```

Sie könnten erwarten, dass dies einen Fehler zurückgibt, aber es funktioniert einwandfrei. Wie Zahlen als Zeichenfolgen angezeigt werden sollen, ist ziemlich gut definiert, sodass der Browser die Zahl automatisch in eine Zeichenfolge konvertiert und die beiden Zeichenfolgen verknüpft.

Wenn Sie eine numerische Variable haben, die Sie in eine Zeichenfolge konvertieren möchten, oder eine Zeichenfolgenvariable, die Sie in eine Zahl konvertieren möchten, können Sie die folgenden beiden Konstrukte verwenden:

- Die {{jsxref("Number/Number", "Number()")}} Funktion konvertiert alles, was an sie übergeben wird, in eine Zahl, wenn es möglich ist. Versuchen Sie Folgendes:

  ```js
  const myString = "123";
  const myNum = Number(myString);
  console.log(typeof myNum);
  // number
  ```

- Umgekehrt konvertiert die {{jsxref("String/String", "String()")}} Funktion ihr Argument in eine Zeichenfolge. Probieren Sie dies aus:

  ```js
  const myNum2 = 123;
  const myString2 = String(myNum2);
  console.log(typeof myString2);
  // string
  ```

Diese Konstrukte können in bestimmten Situationen wirklich nützlich sein. Zum Beispiel, wenn ein Benutzer eine Zahl in ein Textfeld eines Formulars eingibt, ist dies eine Zeichenfolge. Wenn Sie jedoch diese Zahl zu etwas addieren möchten, benötigen Sie sie als Zahl, sodass Sie sie durch `Number()` passieren könnten, um dies zu handhaben. Wir haben genau dies in unserem [Zahlenschätzspiel](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/first-splash/number-guessing-game.html), in der Funktion `checkGuess` getan.

## Zusammenfassung

Das waren die sehr grundlegenden Informationen zu Zeichenfolgen in JavaScript. Im nächsten Artikel werden wir darauf aufbauen und uns einige der eingebauten Methoden ansehen, die für Zeichenfolgen in JavaScript verfügbar sind, und wie wir sie nutzen können, um unsere Zeichenfolgen in genau die gewünschte Form zu bringen.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Test_your_skills/Math", "Learn_web_development/Core/Scripting/Useful_string_methods", "Learn_web_development/Core/Scripting")}}
