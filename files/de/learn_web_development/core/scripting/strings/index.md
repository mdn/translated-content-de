---
title: Umgang mit Text — Zeichenketten in JavaScript
slug: Learn_web_development/Core/Scripting/Strings
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Math", "Learn_web_development/Core/Scripting/Useful_string_methods", "Learn_web_development/Core/Scripting")}}

Als Nächstes wenden wir uns Zeichenketten zu – so nennt man Textstücke in der Programmierung. In diesem Artikel werden wir uns alle gängigen Aspekte ansehen, die Sie über Zeichenketten wissen sollten, wenn Sie JavaScript lernen, wie zum Beispiel Erstellen von Zeichenketten, das Escapen von Anführungszeichen in Zeichenketten und das Zusammenfügen von Zeichenketten.

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
          <li>Erstellen von Zeichenkettenliteralen.</li>
          <li>Die Notwendigkeit, dass Anführungszeichen übereinstimmen.</li>
          <li>Zeichenketten-Konkatenation.</li>
          <li>Escapen von Zeichen in Zeichenketten.</li>
          <li>Vorlagenliteral, einschließlich der Verwendung von Variablen und mehrzeiligen Vorlagenliteralen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Die Macht der Worte

Worte sind für Menschen sehr wichtig – sie sind ein wesentlicher Bestandteil unserer Kommunikation. Da das Web ein weitgehend textbasiertes Medium ist, das dazu entwickelt wurde, Menschen die Kommunikation und den Informationsaustausch zu ermöglichen, ist es nützlich, wenn wir Kontrolle über die Worte haben, die darauf erscheinen. {{Glossary("HTML", "HTML")}} bietet Struktur und Bedeutung für Text, {{Glossary("CSS", "CSS")}} erlaubt es uns, ihn präzise zu stylen, und JavaScript bietet viele Funktionen zur Manipulation von Zeichenketten. Dazu gehören das Erstellen benutzerdefinierter Begrüßungsnachrichten und Eingabeaufforderungen, das Anzeigen der richtigen Textbeschriftungen bei Bedarf, das Sortieren von Begriffen in der gewünschten Reihenfolge und vieles mehr.

Praktisch alle Programme, die wir Ihnen bisher im Kurs gezeigt haben, haben einige Manipulation von Zeichenketten beinhaltet.

## Deklarieren von Zeichenketten

Zeichenketten werden auf den ersten Blick ähnlich wie Zahlen behandelt, aber wenn Sie tiefer graben, werden Sie einige bemerkenswerte Unterschiede sehen. Lassen Sie uns beginnen, indem wir ein paar grundlegende Zeilen in die [Entwicklerkonsole des Browsers](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) eingeben, um uns zu orientieren.

Geben Sie zunächst die folgenden Zeilen ein:

```js
const string = "The revolution will not be televised.";
console.log(string);
```

Genauso wie wir es mit Zahlen gemacht haben, deklarieren wir eine Variable, initialisieren sie mit einem Zeichenkettenwert und geben dann den Wert zurück. Der einzige Unterschied hier ist, dass Sie beim Schreiben einer Zeichenkette den Wert mit Anführungszeichen umgeben müssen.

Wenn Sie dies nicht tun oder eines der Anführungszeichen vergessen, erhalten Sie einen Fehler. Versuchen Sie, die folgenden Zeilen einzugeben:

```js example-bad
const badString1 = This is a test;
const badString2 = 'This is a test;
const badString3 = This is a test';
```

Diese Zeilen funktionieren nicht, da jeder Text ohne Anführungszeichen um ihn herum als Variablenname, Eigenschaftsname, reserviertes Wort oder Ähnliches interpretiert wird. Wenn der Browser den nicht zitierten Text nicht erkennt, wird ein Fehler ausgelöst (z. B. "missing; before statement"). Wenn der Browser erkennen kann, wo eine Zeichenkette beginnt, aber nicht, wo sie endet (aufgrund des fehlenden zweiten Anführungszeichens), meldet er einen Fehler "nicht abgeschlossener Zeichenkettenliteral". Wenn Ihr Programm solche Fehler auslöst, gehen Sie zurück und überprüfen Sie alle Ihre Zeichenketten darauf, dass keine Anführungszeichen fehlen.

Das Folgende funktioniert, wenn Sie die Variable `string` zuvor definiert haben – versuchen Sie es jetzt:

```js
const badString = string;
console.log(badString);
```

`badString` ist nun so eingestellt, dass sie den gleichen Wert wie `string` hat.

### Einfache Anführungszeichen, doppelte Anführungszeichen und Backticks

In JavaScript können Sie einfache Anführungszeichen (`'`), doppelte Anführungszeichen (`"`) oder Backticks (`` ` ``) verwenden, um Ihre Zeichenketten einzuschließen. Alle folgenden Möglichkeiten funktionieren:

```js-nolint
const single = 'Single quotes';
const double = "Double quotes";
const backtick = `Backtick`;

console.log(single);
console.log(double);
console.log(backtick);
```

Sie müssen dasselbe Zeichen für den Anfang und das Ende einer Zeichenkette verwenden, sonst erhalten Sie einen Fehler:

```js-nolint example-bad
const badQuotes = 'This is not allowed!";
```

Zeichenketten, die mit einfachen Anführungszeichen deklariert werden, und Zeichenketten, die mit doppelten Anführungszeichen deklariert werden, sind gleich, und welche Sie verwenden, hängt von der persönlichen Vorliebe ab – es ist jedoch eine gute Praxis, eine Stilrichtung zu wählen und sie in Ihrem Code einheitlich zu verwenden.

Mit Backticks deklarierte Zeichenketten sind eine spezielle Art von Zeichenkette, die [_Template-Literal_](/de/docs/Web/JavaScript/Reference/Template_literals) heißt. In den meisten Fällen sind Template-Literale wie normale Zeichenketten, aber sie haben einige besondere Eigenschaften:

- Sie können [JavaScript einbetten](#einbetten_von_javascript) in ihnen
- Sie können Template-Literale über [mehrere Zeilen](#mehrzeilige_zeichenketten) deklarieren

## Einbetten von JavaScript

In einem Template-Literal können Sie JavaScript-Variablen oder -Ausdrücke innerhalb von `${ }` einfügen, und das Ergebnis wird in die Zeichenkette integriert:

```js
const name = "Chris";
const greeting = `Hello, ${name}`;
console.log(greeting); // "Hello, Chris"
```

Sie können die gleiche Technik verwenden, um zwei Variablen zusammenzuführen:

```js
const one = "Hello, ";
const two = "how are you?";
const joined = `${one}${two}`;
console.log(joined); // "Hello, how are you?"
```

Das Zusammenfügen von Zeichenketten auf diese Weise nennt man _Konkatenation_.

### Konkatenation im Kontext

Lassen Sie uns die Konkatenation in Aktion sehen:

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

Hier verwenden wir die Funktion [`window.prompt()`](/de/docs/Web/API/Window/prompt), die den Benutzer auffordert, eine Frage über ein Popup-Dialogfeld zu beantworten, und den Text, den er eingibt, in einer angegebenen Variablen speichert – in diesem Fall `name`. Dann zeigen wir eine Zeichenkette an, die den Namen in eine allgemeine Begrüßungsnachricht einfügt.

### Konkatenation mit "+"

Sie können `${}` nur mit Template-Literalen verwenden, nicht mit normalen Zeichenketten. Sie können normale Zeichenketten mithilfe des `+` Operators verketten:

```js
const greeting = "Hello";
const name = "Chris";
console.log(greeting + ", " + name); // "Hello, Chris"
```

Template-Literale bieten jedoch normalerweise besser lesbaren Code:

```js
const greeting = "Hello";
const name = "Chris";
console.log(`${greeting}, ${name}`); // "Hello, Chris"
```

### Einschließen von Ausdrücken in Zeichenketten

Sie können JavaScript-Ausdrücke in Template-Literalen einfügen, sowie nur Variablen, und die Ergebnisse werden in das Ergebnis aufgenommen:

```js
const song = "Fight the Youth";
const score = 9;
const highestScore = 10;
const output = `I like the song ${song}. I gave it a score of ${
  (score / highestScore) * 100
}%.`;
console.log(output); // "I like the song Fight the Youth. I gave it a score of 90%."
```

## Mehrzeilige Zeichenketten

Template-Literale respektieren die Zeilenumbrüche im Quellcode, sodass Sie Zeichenketten so schreiben können, dass sie mehrere Zeilen umfassen:

```js
const newline = `One day you finally knew
what you had to do, and began,`;
console.log(newline);

/*
One day you finally knew
what you had to do, and began,
*/
```

Um die äquivalente Ausgabe mit einer normalen Zeichenkette zu erzielen, müssten Sie Zeilenumbruchszeichen (`\n`) in die Zeichenkette einfügen:

```js
const newline = "One day you finally knew\nwhat you had to do, and began,";
console.log(newline);

/*
One day you finally knew
what you had to do, and began,
*/
```

Siehe unsere [Template Liternals](/de/docs/Web/JavaScript/Reference/Template_literals) Referenzseite für weitere Beispiele und Details zu fortgeschrittenen Funktionen.

## Einschließen von Anführungszeichen in Zeichenketten

Da wir Anführungszeichen verwenden, um den Anfang und das Ende von Zeichenketten anzugeben, wie können wir tatsächliche Anführungszeichen in Zeichenketten einschließen? Wir wissen, dass dies nicht funktionieren wird:

```js-nolint example-bad
const badQuotes = "She said "I think so!"";
```

Eine gängige Option besteht darin, eines der anderen Zeichen zu verwenden, um die Zeichenkette zu deklarieren:

```js-nolint
const goodQuotes1 = 'She said "I think so!"';
const goodQuotes2 = `She said "I'm not going in there!"`;
```

Eine weitere Option besteht darin, das Anführungszeichen zu _escapen_. Das Escapen von Zeichen bedeutet, dass wir etwas mit ihnen tun, um sicherzustellen, dass sie als Text und nicht als Teil des Codes erkannt werden. In JavaScript tun wir dies, indem wir direkt vor dem Zeichen einen Backslash setzen. Versuchen Sie dies:

```js-nolint
const bigmouth = 'I\'ve got no right to take my place…';
console.log(bigmouth);
```

Sie können die gleiche Technik verwenden, um andere Sonderzeichen einzufügen. Sehen Sie [Escape-Sequenzen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#escape_sequences) für weitere Details.

## Zahlen vs. Zeichenketten

Was passiert, wenn wir versuchen, eine Zeichenkette und eine Zahl zu verknüpfen? Lassen Sie es uns in unserer Konsole ausprobieren:

```js
const name = "Front ";
const number = 242;
console.log(name + number); // "Front 242"
```

Vielleicht erwarten Sie, dass dies einen Fehler zurückgibt, aber es funktioniert einwandfrei. Wie Zahlen als Zeichenketten angezeigt werden sollen, ist ziemlich gut definiert, daher konvertiert der Browser die Zahl automatisch in eine Zeichenkette und verknüpft die beiden Zeichenketten.

Wenn Sie eine numerische Variable haben, die Sie in eine Zeichenkette konvertieren möchten, oder eine Zeichenkettenvariable, die Sie in eine Zahl konvertieren möchten, können Sie die folgenden beiden Konstrukte verwenden:

- Die {{jsxref("Number/Number", "Number()")}} Funktion konvertiert alles, was ihr übergeben wird, in eine Zahl, wenn es möglich ist. Probieren Sie Folgendes:

  ```js
  const myString = "123";
  const myNum = Number(myString);
  console.log(typeof myNum);
  // number
  ```

- Im Gegensatz dazu konvertiert die {{jsxref("String/String", "String()")}} Funktion ihr Argument in eine Zeichenkette. Versuchen Sie dies:

  ```js
  const myNum2 = 123;
  const myString2 = String(myNum2);
  console.log(typeof myString2);
  // string
  ```

Diese Konstrukte können in einigen Situationen sehr nützlich sein. Wenn ein Benutzer zum Beispiel eine Zahl in ein Textfeld eines Formulars eingibt, ist es eine Zeichenkette. Wenn Sie diese Zahl jedoch zu etwas addieren möchten, müssen Sie sie in eine Zahl umwandeln, sodass Sie sie durch `Number()` leiten könnten, um dies zu bewerkstelligen. Wir haben genau dies in unserem [Zahlenschätzspiel](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/first-splash/number-guessing-game.html) in der Funktion `checkGuess` getan.

## Zusammenfassung

Damit haben wir die Grundlagen von Zeichenketten in JavaScript abgedeckt. Im nächsten Artikel werden wir darauf aufbauen und uns einige der eingebauten Methoden ansehen, die für Zeichenketten in JavaScript verfügbar sind, und wie wir sie verwenden können, um unsere Zeichenketten genau in die gewünschte Form zu bringen.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Math", "Learn_web_development/Core/Scripting/Useful_string_methods", "Learn_web_development/Core/Scripting")}}
