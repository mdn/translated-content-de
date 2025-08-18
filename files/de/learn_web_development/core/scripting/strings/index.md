---
title: Handhabung von Text — Zeichenketten in JavaScript
short-title: Strings
slug: Learn_web_development/Core/Scripting/Strings
l10n:
  sourceCommit: 9d3d642daf9df9ece138fa39972edc5f7d6dcd6b
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Test_your_skills/Math", "Learn_web_development/Core/Scripting/Useful_string_methods", "Learn_web_development/Core/Scripting")}}

Als nächstes widmen wir uns Zeichenketten — so werden Textteile in der Programmierung genannt. In diesem Artikel betrachten wir alle gängigen Dinge, die Sie über Zeichenketten wissen sollten, wenn Sie JavaScript lernen, wie das Erstellen von Zeichenketten, das Escapen von Anführungszeichen in Zeichenketten und das Verbinden von Zeichenketten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Erstellen von Zeichenketten-Literalen.</li>
          <li>Die Notwendigkeit von übereinstimmenden Anführungszeichen.</li>
          <li>Zeichenketten-Konkatenation.</li>
          <li>Escapen von Zeichen in Zeichenketten.</li>
          <li>Vorlagen-Literale, einschließlich der Verwendung von Variablen und mehrzeilige Vorlagen-Literale.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Die Macht der Worte

Worte sind für Menschen sehr wichtig — sie sind ein großer Teil unserer Kommunikation. Da das Web ein größtenteils textbasiertes Medium ist, das es Menschen ermöglicht, Informationen zu kommunizieren und zu teilen, ist es nützlich für uns, die Kontrolle über die darauf erscheinenden Worte zu haben. {{Glossary("HTML", "HTML")}} bietet Struktur und Bedeutung für Text, {{Glossary("CSS", "CSS")}} ermöglicht es uns, ihn präzise zu gestalten, und JavaScript bietet viele Funktionen zur Manipulation von Zeichenketten. Dazu gehört das Erstellen benutzerdefinierter Willkommensnachrichten und Eingabeaufforderungen, das Anzeigen der richtigen Textbeschriftungen bei Bedarf, das Sortieren von Begriffen in der gewünschten Reihenfolge und vieles mehr.

Praktisch alle Programme, die wir Ihnen bisher im Kurs gezeigt haben, beinhalteten einige Zeichenkettenmanipulationen.

## Deklarieren von Zeichenketten

Zeichenketten werden zunächst ähnlich wie Zahlen behandelt, aber wenn Sie tiefer graben, werden Sie einige bemerkenswerte Unterschiede feststellen. Beginnen wir damit, einige grundlegende Zeilen in die [Browser-Entwicklungskonsole](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) einzugeben, um uns damit vertraut zu machen.

Geben Sie zum Starten die folgenden Zeilen ein:

```js
const string = "The revolution will not be televised.";
console.log(string);
```

Genauso wie bei Zahlen deklarieren wir eine Variable, initialisieren sie mit einem Zeichenkettenwert und geben dann den Wert zurück. Der einzige Unterschied hier ist, dass Sie beim Schreiben einer Zeichenkette den Wert mit Anführungszeichen umgeben müssen.

Wenn Sie dies nicht tun oder eines der Anführungszeichen vergessen, erhalten Sie einen Fehler. Versuchen Sie, die folgenden Zeilen einzugeben:

```js example-bad
const badString1 = This is a test;
const badString2 = 'This is a test;
const badString3 = This is a test';
```

Diese Zeilen funktionieren nicht, da jeder Text ohne ihn umgebende Anführungszeichen als Variablenname, Eigenschaftsname, reserviertes Wort oder Ähnliches interpretiert wird. Wenn der Browser den nicht umschlossenen Text nicht erkennt, wird ein Fehler ausgelöst (z. B. "fehlendes; vor Anweisung"). Wenn der Browser erkennt, wo eine Zeichenkette beginnt, aber nicht wo sie endet (aufgrund des fehlenden zweiten Anführungszeichens), wird ein Fehler "nicht terminierte Zeichenfolge" gemeldet. Wenn Ihr Programm solche Fehler auslöst, gehen Sie zurück und überprüfen Sie alle Ihre Zeichenketten, um sicherzustellen, dass keine Anführungszeichen fehlen.

Folgendes funktioniert, wenn Sie vorher die Variable `string` definiert haben — probieren Sie es jetzt:

```js
const badString = string;
console.log(badString);
```

`badString` ist jetzt so gesetzt, dass sie den gleichen Wert wie `string` hat.

### Einfache Anführungszeichen, doppelte Anführungszeichen und Backticks

In JavaScript können Sie einfache Anführungszeichen (`'`), doppelte Anführungszeichen (`"`) oder Backticks (`` ` ``) wählen, um Ihre Zeichenketten einzuschließen. Alle folgenden Beispiele funktionieren:

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

Zeichenketten, die mit einfachen Anführungszeichen deklariert werden, und Zeichenketten, die mit doppelten Anführungszeichen deklariert werden, sind gleich, und welche Sie verwenden, hängt von der persönlichen Präferenz ab — es ist jedoch gute Praxis, einen Stil zu wählen und diesen konsistent in Ihrem Code zu verwenden.

Mit Backticks deklarierte Zeichenketten sind eine besondere Art von Zeichenkette, genannt [_Template Literals_](/de/docs/Web/JavaScript/Reference/Template_literals). Template Literals sind in den meisten Aspekten normale Zeichenketten, haben aber einige besondere Eigenschaften:

- Sie können [JavaScript einbetten](#javascript_einbetten)
- Sie können Template Literals über [mehrere Zeilen](#mehrzeilige_zeichenketten) deklarieren

## JavaScript einbetten

In einem Template Literal können Sie JavaScript-Variablen oder -Ausdrücke in `${ }` einschließen, und das Ergebnis wird in die Zeichenkette aufgenommen:

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

Das Zusammenfügen von Zeichenketten auf diese Weise nennt man _Konkatenation_.

### Konkatenation im Kontext

Werfen wir einen Blick darauf, wie Konkatenation in der Praxis verwendet wird:

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

Hier verwenden wir die Funktion [`window.prompt()`](/de/docs/Web/API/Window/prompt), die den Benutzer auffordert, eine Frage über ein Popup-Dialogfeld zu beantworten und dann den von ihm eingegebenen Text in einer gegebenen Variable zu speichern — in diesem Fall `name`. Anschließend zeigen wir eine Zeichenkette an, die den Namen in eine generische Begrüßungsnachricht einfügt.

### Konkatenation mit "+"

Sie können `${}` nur mit Template Literals verwenden, nicht mit normalen Zeichenketten. Sie können normale Zeichenketten mit dem `+` Operator verknüpfen:

```js
const greeting = "Hello";
const name = "Chris";
console.log(greeting + ", " + name); // "Hello, Chris"
```

Allerdings bieten Template Literals in der Regel besser lesbaren Code:

```js
const greeting = "Hello";
const name = "Chris";
console.log(`${greeting}, ${name}`); // "Hello, Chris"
```

### Einschließen von Ausdrücken in Zeichenketten

Sie können JavaScript-Ausdrücke in Template Literals einfügen, ebenso wie nur Variablen, und die Ergebnisse werden im Ergebnis enthalten sein:

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

Template Literals respektieren die Zeilenumbrüche im Quellcode, sodass Sie Zeichenketten über mehrere Zeilen wie folgt schreiben können:

```js
const newline = `One day you finally knew
what you had to do, and began,`;
console.log(newline);

/*
One day you finally knew
what you had to do, and began,
*/
```

Um die äquivalente Ausgabe mit einer normalen Zeichenkette zu erhalten, müssten Sie Zeilenumbruchzeichen (`\n`) in die Zeichenkette einfügen:

```js
const newline = "One day you finally knew\nwhat you had to do, and began,";
console.log(newline);

/*
One day you finally knew
what you had to do, and began,
*/
```

Weitere Beispiele und Details zu den erweiterten Funktionen finden Sie auf unserer [Template Literals](/de/docs/Web/JavaScript/Reference/Template_literals) Referenzseite.

## Einschließen von Anführungszeichen in Zeichenketten

Da wir Anführungszeichen verwenden, um den Anfang und das Ende von Zeichenketten anzuzeigen, wie können wir tatsächliche Anführungszeichen in Zeichenketten einfügen? Wir wissen, dass dies nicht funktioniert:

```js-nolint example-bad
const badQuotes = "She said "I think so!"";
```

Eine gängige Option besteht darin, eine der anderen Zeichen zu verwenden, um die Zeichenkette zu deklarieren:

```js-nolint
const goodQuotes1 = 'She said "I think so!"';
const goodQuotes2 = `She said "I'm not going in there!"`;
```

Eine andere Option besteht darin, das problematische Anführungszeichen zu _escapen_. Das Escapen von Zeichen bedeutet, dass wir etwas mit ihnen machen, damit sie als Text und nicht als Code erkannt werden. In JavaScript machen wir das, indem wir direkt vor dem Zeichen einen Backslash setzen. Versuchen Sie dies:

```js-nolint
const bigmouth = 'I\'ve got no right to take my place…';
console.log(bigmouth);
```

Sie können dieselbe Technik verwenden, um andere Sonderzeichen einzufügen. Weitere Informationen finden Sie unter [Escape-Sequenzen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#escape_sequences).

## Zahlen vs. Zeichenketten

Was passiert, wenn wir versuchen, eine Zeichenkette und eine Zahl zu konkatenieren? Versuchen wir es in unserer Konsole:

```js
const name = "Front ";
const number = 242;
console.log(name + number); // "Front 242"
```

Sie könnten erwarten, dass dies einen Fehler zurückgibt, aber es funktioniert einwandfrei. Wie Zahlen als Zeichenketten angezeigt werden sollen, ist ziemlich gut definiert, sodass der Browser die Zahl automatisch in eine Zeichenkette umwandelt und die beiden Zeichenketten konkateniert.

Wenn Sie eine numerische Variable haben, die Sie in eine Zeichenkette umwandeln möchten, oder eine Zeichenkettenvariable, die Sie in eine Zahl umwandeln möchten, können Sie die folgenden zwei Konstrukte verwenden:

- Die Funktion {{jsxref("Number/Number", "Number()")}} konvertiert alles, was ihr übergeben wird, in eine Zahl, wenn möglich. Versuchen Sie Folgendes:

  ```js
  const myString = "123";
  const myNum = Number(myString);
  console.log(typeof myNum);
  // number
  ```

- Umgekehrt konvertiert die Funktion {{jsxref("String/String", "String()")}} ihr Argument in eine Zeichenkette. Versuchen Sie dies:

  ```js
  const myNum2 = 123;
  const myString2 = String(myNum2);
  console.log(typeof myString2);
  // string
  ```

Diese Konstrukte können in manchen Situationen wirklich nützlich sein. Wenn ein Benutzer beispielsweise eine Zahl in ein Textfeld eines Formulars eingibt, ist dies eine Zeichenkette. Wenn Sie diese Zahl jedoch zu etwas addieren möchten, müssen Sie sie in eine Zahl umwandeln, also könnten Sie sie durch `Number()` leiten, um dies zu handhaben. Genau das haben wir in unserem [Zahlenratespiel](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/first-splash/number-guessing-game.html) gemacht, in der Funktion `checkGuess`.

## Zusammenfassung

Das sind die Grundlagen von Zeichenketten in JavaScript. Im nächsten Artikel werden wir darauf aufbauen und einige der eingebauten Methoden betrachten, die für Zeichenketten in JavaScript verfügbar sind, und wie wir sie verwenden können, um unsere Zeichenketten in genau die gewünschte Form zu bringen.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Test_your_skills/Math", "Learn_web_development/Core/Scripting/Useful_string_methods", "Learn_web_development/Core/Scripting")}}
