---
title: Template-Literale (Template-Strings)
slug: Web/JavaScript/Reference/Template_literals
l10n:
  sourceCommit: 389605121ed8ea78cc1878f31bbca6759cc7417d
---

**Template-Literale** sind Literale, die durch Backticks (`` ` ``) begrenzt werden. Sie ermöglichen [mehrzeilige Strings](#mehrzeilige_strings), [String-Interpolation](#string-interpolation) mit eingebetteten Ausdrücken und spezielle Konstrukte, die als [Tagged Templates](#tagged_templates) bezeichnet werden.

Template-Literale werden manchmal informell _Template-Strings_ genannt, da sie meist für die [String-Interpolation](#string-interpolation) verwendet werden, also um Strings durch das Ersetzen von Platzhaltern zu erzeugen. Ein Tagged Template Literal muss jedoch nicht unbedingt einen String ergeben: Es kann mit einer benutzerdefinierten [Tag-Funktion](#tagged_templates) verwendet werden, um beliebige Operationen mit den verschiedenen Teilen des Template-Literals auszuführen.

## Syntax

```js-nolint
`string text`

`string text line 1
 string text line 2`

`string text ${expression} string text`

tagFunction`string text ${expression} string text`
```

### Parameter

- `string text`
  - : Der String-Text, der Teil des Template-Literals wird. Fast alle Zeichen sind direkt erlaubt, einschließlich [Zeilenumbrüchen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#line_terminators) und anderen [Whitespace-Zeichen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#white_space). Ungültige Escape-Sequenzen verursachen jedoch einen Syntaxfehler, sofern keine [Tag-Funktion](#tagged_templates_und_escape-sequenzen) verwendet wird.
- `expression`
  - : Ein Ausdruck, der an der aktuellen Position eingefügt wird. Sein Wert wird in einen String umgewandelt oder an `tagFunction` übergeben.
- `tagFunction`
  - : Falls angegeben, wird diese Funktion mit einem Array der Template-Strings und den Ersetzungsausdrücken aufgerufen. Ihr Rückgabewert wird zum Wert des Template-Literals. Siehe [Tagged Templates](#tagged_templates).

## Beschreibung

Template-Literale werden statt durch doppelte oder einfache Anführungszeichen durch Backticks (`` ` ``) eingeschlossen.

Neben gewöhnlichem String-Text können Template-Literale auch _Platzhalter_ enthalten. Dabei handelt es sich um eingebettete Ausdrücke, die durch ein Dollarzeichen und geschweifte Klammern begrenzt werden: `${expression}`. Die Strings und Platzhalter werden an eine Funktion übergeben – entweder an eine Standardfunktion oder an eine von Ihnen bereitgestellte Funktion. Die Standardfunktion (wenn Sie keine eigene bereitstellen) führt lediglich eine [String-Interpolation](#string-interpolation) durch: Sie ersetzt die Platzhalter und verbindet die Teile anschließend zu einem einzigen String.

Um eine eigene Funktion bereitzustellen, stellen Sie dem Template-Literal einen Funktionsnamen voran. Das Ergebnis wird als [**Tagged Template**](#tagged_templates) bezeichnet. In diesem Fall wird das Template-Literal an Ihre Tag-Funktion übergeben. Dort können Sie beliebige Operationen mit seinen verschiedenen Teilen ausführen.

Um einen Backtick in einem Template-Literal zu maskieren, stellen Sie ihm einen Backslash (`\`) voran.

```js
`\`` === "`"; // true
```

Auch Dollarzeichen können maskiert werden, um eine Interpolation zu verhindern.

```js
`\${1}` === "${1}"; // true
```

### Mehrzeilige Strings

Alle im Quelltext eingefügten Zeilenumbrüche sind Teil des Template-Literals.

Bei gewöhnlichen Strings müssten Sie die folgende Syntax verwenden, um mehrzeilige Strings zu erhalten:

```js
console.log("string text line 1\nstring text line 2");
// "string text line 1
// string text line 2"
```

Mit Template-Literalen können Sie dasselbe so erreichen:

```js
console.log(`string text line 1
string text line 2`);
// "string text line 1
// string text line 2"
```

Wie bei [gewöhnlichen String-Literalen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#escape_sequences) können Sie einen einzeiligen String zur besseren Lesbarkeit des Quellcodes über mehrere Zeilen schreiben, indem Sie den Zeilenumbruch mit einem Backslash (`\`) maskieren:

```js
console.log(`string text line 1 \
string text line 2`);
// "string text line 1 string text line 2"
```

### String-Interpolation

Wenn Sie ohne Template-Literale die Ergebnisse von Ausdrücken mit Strings kombinieren möchten, müssen Sie diese mit dem [Additionsoperator](/de/docs/Web/JavaScript/Reference/Operators/Addition) `+` [verketten](/de/docs/Learn_web_development/Core/Scripting/Strings#concatenation_using):

```js
const a = 5;
const b = 10;
console.log("Fifteen is " + (a + b) + " and\nnot " + (2 * a + b) + ".");
// "Fifteen is 15 and
// not 20."
```

Das kann schwer lesbar sein – insbesondere, wenn mehrere Ausdrücke beteiligt sind.

Mit Template-Literalen können Sie den Verkettungsoperator vermeiden und die Lesbarkeit Ihres Codes verbessern. Verwenden Sie dazu Platzhalter der Form `${expression}`, um eingebettete Ausdrücke durch ihre Werte zu ersetzen:

```js
const a = 5;
const b = 10;
console.log(`Fifteen is ${a + b} and
not ${2 * a + b}.`);
// "Fifteen is 15 and
// not 20."
```

Beachten Sie einen kleinen Unterschied zwischen den beiden Syntaxformen: Template-Literale [wandeln ihre Ausdrücke direkt in Strings um](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), während der Additionsoperator seine Operanden zuerst in primitive Werte umwandelt. Weitere Informationen finden Sie auf der Referenzseite zum [`+`-Operator](/de/docs/Web/JavaScript/Reference/Operators/Addition).

### Verschachteln von Templates

In bestimmten Fällen ist das Verschachteln von Templates die einfachste (und vielleicht besser lesbare) Möglichkeit, konfigurierbare Strings zu erstellen. Innerhalb eines durch Backticks begrenzten Templates können Sie problemlos weitere Backticks verwenden, indem Sie diese in einem `${expression}`-Platzhalter innerhalb des Templates platzieren.

Wenn Sie beispielsweise ohne Template-Literale abhängig von einer bestimmten Bedingung einen bestimmten Wert zurückgeben möchten, könnten Sie Folgendes tun:

```js example-bad
let classes = "header";
classes += isLargeScreen()
  ? ""
  : item.isCollapsed
    ? " icon-expander"
    : " icon-collapser";
```

Mit einem Template-Literal, aber ohne Verschachtelung, könnten Sie so vorgehen:

```js example-bad
const classes = `header ${
  isLargeScreen() ? "" : item.isCollapsed ? "icon-expander" : "icon-collapser"
}`;
```

Mit verschachtelten Template-Literalen können Sie so vorgehen:

```js example-good
const classes = `header ${
  isLargeScreen() ? "" : `icon-${item.isCollapsed ? "expander" : "collapser"}`
}`;
```

### Tagged Templates

_Tagged Templates_ sind eine fortgeschrittenere Form von Template-Literalen.

Mit Tags können Sie Template-Literale mithilfe einer Funktion verarbeiten. Das erste Argument einer Tag-Funktion enthält ein Array von String-Werten. Die übrigen Argumente beziehen sich auf die Ausdrücke.

Die Tag-Funktion kann anschließend beliebige Operationen mit diesen Argumenten ausführen und den verarbeiteten String zurückgeben. (Alternativ kann sie etwas völlig anderes zurückgeben, wie eines der folgenden Beispiele zeigt.)

Den Namen der als Tag verwendeten Funktion können Sie frei wählen.

```js
const person = "Mike";
const age = 28;

function myTag(strings, personExp, ageExp) {
  const str0 = strings[0]; // "That "
  const str1 = strings[1]; // " is a "
  const str2 = strings[2]; // "."

  const ageStr = ageExp < 100 ? "youngster" : "centenarian";

  // We can even return a string built using a template literal
  return `${str0}${personExp}${str1}${ageStr}${str2}`;
}

const output = myTag`That ${person} is a ${age}.`;

console.log(output);
// That Mike is a youngster.
```

Das Tag muss kein einfacher Bezeichner sein. Sie können jeden Ausdruck verwenden, dessen [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) größer als 16 ist. Dazu gehören [Eigenschaftszugriffe](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors), Funktionsaufrufe, [new-Ausdrücke](/de/docs/Web/JavaScript/Reference/Operators/new) und sogar weitere Tagged Template Literals.

```js
console.log`Hello`; // [ 'Hello' ]
console.log.bind(1, 2)`Hello`; // 2 [ 'Hello' ]
new Function("console.log(arguments)")`Hello`; // [Arguments] { '0': [ 'Hello' ] }

function recursive(strings, ...values) {
  console.log(strings, values);
  return recursive;
}
recursive`Hello``World`;
// [ 'Hello' ] []
// [ 'World' ] []
```

Obwohl die Syntax es technisch erlaubt, sind _nicht getaggte_ Template-Literale Strings und lösen bei einer Verkettung auf diese Weise einen {{jsxref("TypeError")}} aus.

```js
console.log(`Hello``World`); // TypeError: "Hello" is not a function
```

Die einzige Ausnahme ist Optional Chaining, das einen Syntaxfehler auslöst.

```js-nolint example-bad
console.log?.`Hello`; // SyntaxError: Invalid tagged template on optional chain
console?.log`Hello`; // SyntaxError: Invalid tagged template on optional chain
```

Beachten Sie, dass diese beiden Ausdrücke weiterhin geparst werden können. Daher greift bei ihnen nicht die [automatische Semikolon-Einfügung](/de/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion), die Semikolons nur einfügt, um andernfalls nicht parsebaren Code zu korrigieren.

```js-nolint example-bad
// Still a syntax error
const a = console?.log
`Hello`
```

Tag-Funktionen müssen nicht einmal einen String zurückgeben!

```js
function template(strings, ...keys) {
  return (...values) => {
    const dict = values[values.length - 1] || {};
    const result = [strings[0]];
    keys.forEach((key, i) => {
      const value = Number.isInteger(key) ? values[key] : dict[key];
      result.push(value, strings[i + 1]);
    });
    return result.join("");
  };
}

const t1Closure = template`${0}${1}${0}!`;
// const t1Closure = template(["","","","!"],0,1,0);
t1Closure("Y", "A"); // "YAY!"

const t2Closure = template`${0} ${"foo"}!`;
// const t2Closure = template([""," ","!"],0,"foo");
t2Closure("Hello", { foo: "World" }); // "Hello World!"

const t3Closure = template`I'm ${"name"}. I'm almost ${"age"} years old.`;
// const t3Closure = template(["I'm ", ". I'm almost ", " years old."], "name", "age");
t3Closure("foo", { name: "MDN", age: 30 }); // "I'm MDN. I'm almost 30 years old."
t3Closure({ name: "MDN", age: 30 }); // "I'm MDN. I'm almost 30 years old."
```

Das erste Argument, das die Tag-Funktion erhält, ist ein Array von Strings. Bei jedem Template-Literal entspricht seine Länge der Anzahl der Ersetzungen (Vorkommen von `${…}`) plus eins. Es ist daher niemals leer.

Für einen bestimmten Tagged-Template-Literal-Ausdruck wird die Tag-Funktion immer mit demselben Literal-Array aufgerufen, unabhängig davon, wie oft das Literal ausgewertet wird.

```js
const callHistory = [];

function tag(strings, ...values) {
  callHistory.push(strings);
  // Return a freshly made object
  return {};
}

function evaluateLiteral() {
  return tag`Hello, ${"world"}!`;
}

console.log(evaluateLiteral() === evaluateLiteral()); // false; each time `tag` is called, it returns a new object
console.log(callHistory[0] === callHistory[1]); // true; all evaluations of the same tagged literal would pass in the same strings array
```

Dadurch kann das Tag das Ergebnis anhand der Identität seines ersten Arguments zwischenspeichern. Um zusätzlich sicherzustellen, dass der Array-Wert unverändert bleibt, sind sowohl das erste Argument als auch dessen [`raw`-Eigenschaft](#raw_strings) [eingefroren](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen). Sie können sie daher nicht verändern.

### Raw Strings

Über die spezielle `raw`-Eigenschaft des ersten Arguments der Tag-Funktion können Sie auf die Strings in ihrer ursprünglich eingegebenen Form zugreifen, ohne dass [Escape-Sequenzen](/de/docs/Web/JavaScript/Guide/Grammar_and_types#using_special_characters_in_strings) verarbeitet werden.

```js
function tag(strings) {
  console.log(strings.raw[0]);
}

tag`string text line 1 \n string text line 2`;
// Logs "string text line 1 \n string text line 2",
// including the two characters '\' and 'n'
```

> [!NOTE]
> Die Syntax des Template-Literals wird weiterhin auf dieselbe Weise verarbeitet. Das bedeutet, dass nicht maskierte Backticks und `${` eine besondere syntaktische Bedeutung haben. Wenn Sie diese Zeichen maskieren, entstehen jedoch zusätzliche Backslashes im Raw String. Weitere Informationen finden Sie unter [Raw Strings mit Template-Literal-Syntax](/de/docs/Web/JavaScript/Reference/Global_Objects/String/raw#raw_strings_containing_template_literal_syntax).

Außerdem gibt es die Methode {{jsxref("String.raw()")}}, mit der sich Raw Strings erzeugen lassen – ähnlich wie die Standard-Template-Funktion und die String-Verkettung Strings erzeugen.

```js
const str = String.raw`Hi\n${2 + 3}!`;
// "Hi\\n5!"

str.length;
// 6

Array.from(str).join(",");
// "H,i,\\,n,5,!"
```

`String.raw` verhält sich wie ein „Identitäts-Tag“, wenn das Literal keine Escape-Sequenzen enthält. Wenn Sie ein echtes Identitäts-Tag benötigen, das sich immer so verhält, als wäre das Literal nicht getaggt, können Sie eine eigene Funktion erstellen. Diese übergibt das verarbeitete („cooked“) Literal-Array – in dem Escape-Sequenzen bereits verarbeitet wurden – an `String.raw` und behandelt dessen Einträge dabei wie Raw Strings.

```js
const identity = (strings, ...values) =>
  String.raw({ raw: strings }, ...values);
console.log(identity`Hi\n${2 + 3}!`);
// Hi
// 5!
```

Das ist für viele Werkzeuge nützlich, die Literale mit einem bestimmten Tag-Namen speziell behandeln.

```js
const html = (strings, ...values) => String.raw({ raw: strings }, ...values);
// Some formatters will format this literal's content as HTML
const doc = html`<!doctype html>
  <html lang="en-US">
    <head>
      <title>Hello</title>
    </head>
    <body>
      <h1>Hello world!</h1>
    </body>
  </html>`;
```

### Tagged Templates und Escape-Sequenzen

In gewöhnlichen Template-Literalen sind [alle Escape-Sequenzen von String-Literalen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#escape_sequences) erlaubt. Jede andere ungültige Escape-Sequenz führt zu einem Syntaxfehler. Dazu gehören:

- `\` gefolgt von einer anderen Dezimalziffer als `0` oder `\0` gefolgt von einer Dezimalziffer, beispielsweise `\9` und `\07` (Letzteres ist eine [veraltete Syntax](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#escape_sequences))
- `\x` gefolgt von weniger als zwei Hexadezimalziffern (auch von keiner), beispielsweise `\xz`
- `\u`, auf das kein `{` folgt und auf das weniger als vier Hexadezimalziffern (auch keine) folgen, beispielsweise `\uz`
- `\u{}` mit einem ungültigen Unicode-Codepunkt – weil es eine Nicht-Hexadezimalziffer enthält oder sein Wert größer als `10FFFF` ist; beispielsweise `\u{110000}` und `\u{z}`

> [!NOTE]
> `\` gefolgt von anderen Zeichen stellt keinen Syntaxfehler dar, auch wenn dies möglicherweise nutzlos ist, weil dabei nichts maskiert wird.

Für Tagged Templates ist diese Einschränkung jedoch problematisch: Sie haben neben der verarbeiteten („cooked“) Form auch Zugriff auf die Raw Strings, in denen Escape-Sequenzen unverändert erhalten bleiben.

Tagged Templates ermöglichen das Einbetten beliebiger String-Inhalte, deren Escape-Sequenzen einer anderen Syntax folgen können. Stellen Sie sich beispielsweise vor, Sie betten [LaTeX](https://en.wikipedia.org/wiki/LaTeX)-Quelltext mithilfe von `String.raw` in JavaScript ein. Dabei möchten Sie weiterhin LaTeX-Makros verwenden können, die mit `u` oder `x` beginnen, ohne den Syntaxbeschränkungen von JavaScript unterliegen zu müssen. Daher gilt die Beschränkung auf gültige Escape-Sequenzen nicht für Tagged Templates. Das folgende Beispiel verwendet [MathJax](https://www.mathjax.org/), um LaTeX in einem Element darzustellen:

```js
const node = document.getElementById("formula");
MathJax.typesetClear([node]);
// Throws in older ECMAScript versions (ES2016 and earlier)
// SyntaxError: malformed Unicode character escape sequence
node.textContent = String.raw`$\underline{u}$`;
MathJax.typesetPromise([node]);
```

Ungültige Escape-Sequenzen müssen in der verarbeiteten („cooked“) Form dennoch repräsentiert werden. Im verarbeiteten Array erscheinen sie als {{jsxref("undefined")}}-Elemente:

```js
function log(str) {
  console.log("Cooked:", str[0]);
  console.log("Raw:", str.raw[0]);
}

log`\unicode`;
// Cooked: undefined
// Raw: \unicode
```

Beachten Sie, dass die Beschränkung für Escape-Sequenzen nur bei _getaggten_ Templates entfällt, nicht aber bei _nicht getaggten_ Template-Literalen:

```js-nolint example-bad
const bad = `bad escape sequence: \unicode`;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Leitfaden zu [Zahlen und Strings](/de/docs/Web/JavaScript/Guide/Numbers_and_strings)
- {{jsxref("String")}}
- {{jsxref("String.raw()")}}
- [Lexikalische Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar)
- [ES6 im Detail: Template-Strings](https://hacks.mozilla.org/2015/05/es6-in-depth-template-strings-2/) auf hacks.mozilla.org (2015)
