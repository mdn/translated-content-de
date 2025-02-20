---
title: Umgang mit Text — Zeichenketten in JavaScript
slug: Learn_web_development/Core/Scripting/Strings
l10n:
  sourceCommit: b7310d059a28842d0a43ebabf814e8f2469c3419
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Math", "Learn_web_development/Core/Scripting/Useful_string_methods", "Learn_web_development/Core/Scripting")}}

Als nächstes richten wir unsere Aufmerksamkeit auf Zeichenketten — so werden Textstücke in der Programmierung genannt. In diesem Artikel betrachten wir alle gängigen Konzepte, die Sie beim Erlernen von JavaScript über Zeichenketten wissen sollten, wie das Erstellen von Zeichenketten, das Escapen von Anführungszeichen in Zeichenketten und das Verbinden von Zeichenketten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und die <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Erstellen von Zeichenfolgenliteralen.</li>
          <li>Die Notwendigkeit, passende Anführungszeichen zu verwenden.</li>
          <li>Zeichenkettenverkettung.</li>
          <li>Escapen von Zeichen in Zeichenketten.</li>
          <li>Vorlagenliterale, einschließlich der Verwendung von Variablen und mehrzeiligen Vorlagenliteralen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Die Macht der Worte

Worte sind für Menschen sehr wichtig — sie sind ein großer Teil unserer Kommunikation. Da das Web ein überwiegend textbasiertes Medium ist, das entwickelt wurde, um es Menschen zu ermöglichen, Informationen zu kommunizieren und zu teilen, ist es nützlich für uns, die Kontrolle über die darauf erscheinenden Worte zu haben. {{Glossary("HTML", "HTML")}} bietet Struktur und Bedeutung für Text, {{Glossary("CSS", "CSS")}} ermöglicht es uns, diesen präzise zu gestalten, und JavaScript bietet viele Funktionen zur Manipulation von Zeichenketten. Dazu gehören das Erstellen benutzerdefinierter Willkommensnachrichten und Aufforderungen, das Anzeigen der richtigen Textbeschriftungen bei Bedarf, das Sortieren von Begriffen in die gewünschte Reihenfolge und vieles mehr.

Fast alle Programme, die wir Ihnen bisher im Kurs gezeigt haben, beinhalten eine gewisse Manipulation von Zeichenketten.

## Deklarieren von Zeichenketten

Zeichenketten werden zunächst ähnlich wie Zahlen behandelt, doch wenn Sie tiefer graben, werden Sie einige bemerkenswerte Unterschiede feststellen. Lassen Sie uns damit beginnen, einige grundlegende Zeilen in die [Entwicklungskonsole des Browsers](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) einzugeben, um uns damit vertraut zu machen.

Beginnen Sie mit der Eingabe der folgenden Zeilen:

```js
const string = "The revolution will not be televised.";
console.log(string);
```

Genau wie bei Zahlen deklarieren wir eine Variable, initialisieren sie mit einem Zeichenkettenwert und geben dann den Wert zurück. Der einzige Unterschied hier ist, dass Sie beim Schreiben einer Zeichenkette den Wert mit Anführungszeichen umgeben müssen.

Wenn Sie dies nicht tun oder eines der Anführungszeichen vergessen, erhalten Sie einen Fehler. Versuchen Sie, die folgenden Zeilen einzugeben:

```js example-bad
const badString1 = This is a test;
const badString2 = 'This is a test;
const badString3 = This is a test';
```

Diese Zeilen funktionieren nicht, da jeder Text ohne Anführungszeichen um ihn herum als Variablenname, Eigenschaftsname, reserviertes Wort oder ähnliches interpretiert wird. Erkennt der Browser den unzitierten Text nicht, wird ein Fehler angezeigt (z.B. "fehlendes; vor Anweisung"). Wenn der Browser erkennt, wo eine Zeichenkette beginnt, aber nicht wo sie endet (aufgrund des fehlenden zweiten Anführungszeichens), wird ein Fehler "nicht abgeschlossener Zeichenfolgenliteral" gemeldet. Wenn Ihr Programm solche Fehler auslöst, überprüfen Sie alle Ihre Zeichenketten, um sicherzustellen, dass keine Anführungszeichen fehlen.

Das folgende funktioniert, wenn Sie zuvor die Variable `string` definiert haben — versuchen Sie es jetzt:

```js
const badString = string;
console.log(badString);
```

`badString` ist jetzt auf denselben Wert gesetzt wie `string`.

### Einzelne Anführungszeichen, doppelte Anführungszeichen und Backticks

In JavaScript können Sie wählen, ob Sie einzelne Anführungszeichen (`'`), doppelte Anführungszeichen (`"`) oder Backticks (`` ` ``) verwenden, um Ihre Zeichenketten zu umgeben. Alle folgenden Schreibweisen funktionieren:

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

Zeichenketten, die mit einfachen Anführungszeichen deklariert wurden, und solche, die mit doppelten Anführungszeichen deklariert wurden, sind gleich, und welche Sie verwenden, hängt von Ihrer persönlichen Präferenz ab — obwohl es eine gute Praxis ist, einen Stil zu wählen und ihn konsequent in Ihrem Code zu verwenden.

Zeichenketten, die mit Backticks deklariert wurden, sind eine spezielle Art von Zeichenkette, die [_Template Literal_](/de/docs/Web/JavaScript/Reference/Template_literals) genannt wird. In den meisten Fällen sind Template Literals wie normale Zeichenketten, aber sie haben einige spezielle Eigenschaften:

- Sie können [JavaScript einbetten](#javascript_einbetten) in ihnen
- Sie können Template Literals über [mehrere Zeilen](#mehrzeilige_zeichenketten) deklarieren

## JavaScript einbetten

Innerhalb eines Template Literals können Sie JavaScript-Variablen oder -Ausdrücke in `${ }` einwickeln, und das Ergebnis wird in die Zeichenkette eingefügt:

```js
const name = "Chris";
const greeting = `Hello, ${name}`;
console.log(greeting); // "Hello, Chris"
```

Sie können dieselbe Technik verwenden, um zwei Variablen zusammenzufügen:

```js
const one = "Hello, ";
const two = "how are you?";
const joined = `${one}${two}`;
console.log(joined); // "Hello, how are you?"
```

Das Zusammenfügen von Zeichenketten auf diese Weise wird _Verkettung_ genannt.

### Verkettung im Kontext

Schauen wir uns die Verkettung in Aktion an:

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

Hier verwenden wir die Funktion [`window.prompt()`](/de/docs/Web/API/Window/prompt), die den Benutzer auffordert, eine Frage über ein Popup-Dialogfenster zu beantworten, und dann den von ihm eingegebenen Text in einer bestimmten Variablen speichert — in diesem Fall `name`. Anschließend zeigen wir eine Zeichenkette an, die den Namen in eine generische Begrüßungsnachricht einfügt.

### Verkettung mit "+"

Sie können `${}` nur mit Template Literals, nicht mit normalen Zeichenketten, verwenden. Sie können normale Zeichenketten mit dem `+` Operator verketten:

```js
const greeting = "Hello";
const name = "Chris";
console.log(greeting + ", " + name); // "Hello, Chris"
```

Allerdings bietet das Verwenden von Template Literals in der Regel lesbareren Code:

```js
const greeting = "Hello";
const name = "Chris";
console.log(`${greeting}, ${name}`); // "Hello, Chris"
```

### Einbeziehen von Ausdrücken in Zeichenketten

Sie können JavaScript-Ausdrücke in Template Literals einfügen, sowie nur Variablen, und die Ergebnisse werden im Ergebnis enthalten sein:

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

Template Literals respektieren die Zeilenumbrüche im Quellcode, sodass Sie Zeichenketten schreiben können, die mehrere Zeilen umfassen:

```js
const newline = `One day you finally knew
what you had to do, and began,`;
console.log(newline);

/*
One day you finally knew
what you had to do, and began,
*/
```

Um das Äquivalent mit einer normalen Zeichenkette zu erhalten, müssten Sie Zeilenumbruchzeichen (`\n`) in die Zeichenkette einfügen:

```js
const newline = "One day you finally knew\nwhat you had to do, and began,";
console.log(newline);

/*
One day you finally knew
what you had to do, and began,
*/
```

Sehen Sie unsere [Template Literals](/de/docs/Web/JavaScript/Reference/Template_literals) Referenzseite für mehr Beispiele und Details zu fortgeschrittenen Funktionen.

## Einschließen von Anführungszeichen in Zeichenketten

Da wir Anführungszeichen verwenden, um den Anfang und das Ende von Zeichenketten anzugeben, wie können wir tatsächliche Anführungszeichen in Zeichenketten einfügen? Wir wissen, dass dies nicht funktionieren wird:

```js-nolint example-bad
const badQuotes = "She said "I think so!"";
```

Eine häufige Option ist, eines der anderen Zeichen zu verwenden, um die Zeichenkette zu deklarieren:

```js-nolint
const goodQuotes1 = 'She said "I think so!"';
const goodQuotes2 = `She said "I'm not going in there!"`;
```

Eine andere Option ist es, das problematische Anführungszeichen zu _escapen_. Zeichen escapen bedeutet, dass wir etwas tun, um sicherzustellen, dass sie als Text und nicht als Teil des Codes erkannt werden. In JavaScript tun wir dies, indem wir einen Backslash direkt vor das Zeichen setzen. Versuchen Sie das:

```js-nolint
const bigmouth = 'I\'ve got no right to take my place…';
console.log(bigmouth);
```

Sie können dieselbe Technik verwenden, um andere Sonderzeichen einzufügen. Siehe [Escape Sequenzen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#escape_sequences) für mehr Details.

## Zahlen vs. Zeichenketten

Was passiert, wenn wir versuchen, eine Zeichenkette und eine Zahl zu verketten? Versuchen wir es in unserer Konsole:

```js
const name = "Front ";
const number = 242;
console.log(name + number); // "Front 242"
```

Sie könnten erwarten, dass dies einen Fehler zurückgibt, aber es funktioniert einwandfrei. Wie Zahlen als Zeichenketten angezeigt werden sollen, ist relativ gut definiert, sodass der Browser die Zahl automatisch in eine Zeichenkette umwandelt und die beiden Zeichenketten verknüpft.

Wenn Sie eine numerische Variable haben, die Sie in eine Zeichenkette umwandeln möchten, oder eine Zeichenkettenvariable, die Sie in eine Zahl umwandeln möchten, können Sie die folgenden beiden Konstrukte verwenden:

- Die {{jsxref("Number/Number", "Number()")}} Funktion konvertiert alles, was ihr übergeben wird, in eine Zahl, wenn es möglich ist. Versuchen Sie das folgende:

  ```js
  const myString = "123";
  const myNum = Number(myString);
  console.log(typeof myNum);
  // number
  ```

- Umgekehrt konvertiert die {{jsxref("String/String", "String()")}} Funktion ihr Argument in eine Zeichenkette. Probieren Sie dies:

  ```js
  const myNum2 = 123;
  const myString2 = String(myNum2);
  console.log(typeof myString2);
  // string
  ```

Diese Konstrukte können in einigen Situationen wirklich nützlich sein. Wenn ein Benutzer beispielsweise eine Zahl in ein Texteingabefeld eines Formulars eingibt, ist es eine Zeichenkette. Wenn Sie diese Zahl jedoch zu etwas addieren möchten, benötigen Sie sie als Zahl, also könnten Sie sie durch `Number()` leiten, um dies zu handhaben. Genau das haben wir in unserem [Zahlen-Ratespiel](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/first-splash/number-guessing-game.html) in der Funktion `checkGuess` gemacht.

## Zusammenfassung

Damit sind die Grundlagen von Zeichenketten in JavaScript abgedeckt. Im nächsten Artikel werden wir darauf aufbauen und uns einige der eingebauten Methoden ansehen, die für Zeichenketten in JavaScript verfügbar sind, und wie wir sie verwenden können, um unsere Zeichenketten in genau die Form zu bringen, die wir möchten.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Math", "Learn_web_development/Core/Scripting/Useful_string_methods", "Learn_web_development/Core/Scripting")}}
