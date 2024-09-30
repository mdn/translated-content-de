---
title: Template literals (Template strings)
slug: Web/JavaScript/Reference/Template_literals
l10n:
  sourceCommit: bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

{{jsSidebar("More")}}

**Template-Literale** sind Literale, die mit Backtick-Zeichen (`` ` ``) abgegrenzt werden und [mehrzeilige Zeichenketten](#mehrzeilige_zeichenketten), [Zeichenketteninterpolation](#zeichenketteninterpolation) mit eingebetteten Ausdrücken sowie spezielle Konstrukte namens [getaggte Templates](#getaggte_templates) ermöglichen.

Template-Literale werden manchmal informell _Template-Strings_ genannt, da sie am häufigsten für [Zeichenketteninterpolation](#zeichenketteninterpolation) (zum Erstellen von Zeichenketten durch Ersetzen von Platzhaltern) verwendet werden. Ein getaggtes Template-Literal muss jedoch nicht in einer Zeichenkette resultieren; es kann mit einer benutzerdefinierten [Tag-Funktion](#getaggte_templates) verwendet werden, um beliebige Operationen an den verschiedenen Teilen des Template-Literals durchzuführen.

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
  - : Der Zeichenketten-Text, der Teil des Template-Literals wird. Fast alle Zeichen sind buchstäblich erlaubt, einschließlich [Zeilenumbrüche](/de/docs/Web/JavaScript/Reference/Lexical_grammar#line_terminators) und andere [Leerzeichen-Zeichen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#white_space). Ungültige Escape-Sequenzen verursachen jedoch einen Syntaxfehler, es sei denn, es wird eine [Tag-Funktion](#getaggte_templates_und_escape-sequenzen) verwendet.
- `expression`
  - : Ein Ausdruck, der an der aktuellen Position eingefügt wird, dessen Wert in eine Zeichenkette umgewandelt oder an `tagFunction` übergeben wird.
- `tagFunction`
  - : Wenn angegeben, wird sie mit dem Array der Template-Strings und Ersetzungsausdrücken aufgerufen und der Rückgabewert wird zum Wert des Template-Literals. Siehe [getaggte Templates](#getaggte_templates).

## Beschreibung

Template-Literale sind von Backtick-Zeichen (`` ` ``) anstelle von doppelten oder einfachen Anführungszeichen eingeschlossen.

Zusätzlich zu normalen Zeichenketten können Template-Literale auch andere Teile enthalten, sogenannte _Platzhalter_, die eingebettete Ausdrücke sind, die durch ein Dollarzeichen und geschweifte Klammern abgegrenzt sind: `${expression}`. Die Zeichenketten und Platzhalter werden an eine Funktion übergeben – entweder eine Standardfunktion oder eine von Ihnen bereitgestellte Funktion. Die Standardfunktion (wenn Sie keine eigene bereitstellen) führt nur [Zeichenketteninterpolation](#zeichenketteninterpolation) durch, um die Platzhalter zu ersetzen und dann die Teile in eine einzige Zeichenkette zu verketten.

Um eine eigene Funktion bereitzustellen, setzen Sie den Namen der Funktion vor das Template-Literal; das Ergebnis wird als [**getaggtes Template**](#getaggte_templates) bezeichnet. In diesem Fall wird das Template-Literal an Ihre Tag-Funktion übergeben, in der Sie beliebige Operationen an den verschiedenen Teilen des Template-Literals durchführen können.

Um ein Backtick innerhalb eines Template-Literals zu maskieren, setzen Sie einen Backslash (`\`) vor das Backtick.

```js
`\`` === "`"; // true
```

Dollarzeichen können ebenfalls maskiert werden, um die Interpolation zu verhindern.

```js
`\${1}` === "${1}"; // true
```

### Mehrzeilige Zeichenketten

Alle im Quelltext eingefügten Zeilenumbruch-Zeichen sind Teil des Template-Literals.

Bei normalen Zeichenketten müssten Sie die folgende Syntax verwenden, um mehrzeilige Zeichenketten zu erhalten:

```js
console.log("string text line 1\n" + "string text line 2");
// "string text line 1
// string text line 2"
```

Mit Template-Literalen können Sie dasselbe wie folgt tun:

```js
console.log(`string text line 1
string text line 2`);
// "string text line 1
// string text line 2"
```

Wie bei [normalen Zeichenkettenliteralen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#escape_sequences) können Sie eine einzeilige Zeichenkette über mehrere Zeilen schreiben, um die Lesbarkeit des Quellcodes zu verbessern, indem Sie den Zeilenumbruch mit einem Backslash (`\`) maskieren:

```js
console.log(`string text line 1 \
string text line 2`);
// "string text line 1 string text line 2"
```

### Zeichenketteninterpolation

Ohne Template-Literale, wenn Sie Ausgaben aus Ausdrücken mit Zeichenketten kombinieren wollen, würden Sie sie mit dem [Plus-Operator](/de/docs/Web/JavaScript/Reference/Operators/Addition) `+` [verketteln](/de/docs/Learn/JavaScript/First_steps/Strings#concatenation_using):

```js
const a = 5;
const b = 10;
console.log("Fifteen is " + (a + b) + " and\nnot " + (2 * a + b) + ".");
// "Fifteen is 15 and
// not 20."
```

Das kann schwer lesbar sein – besonders wenn Sie mehrere Ausdrücke haben.

Mit Template-Literalen können Sie den Verkettungsoperator vermeiden – und die Lesbarkeit Ihres Codes verbessern – indem Sie Platzhalter in der Form `${expression}` verwenden, um Ersetzungen für eingebettete Ausdrücke durchzuführen:

```js
const a = 5;
const b = 10;
console.log(`Fifteen is ${a + b} and
not ${2 * a + b}.`);
// "Fifteen is 15 and
// not 20."
```

Beachten Sie, dass es einen kleinen Unterschied zwischen den beiden Syntaxen gibt. Template-Literale [zwingen ihre Ausdrücke direkt zu Zeichenketten](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), während die Addition zuerst ihre Operanden zu Primitiven zwingt. Für weitere Informationen siehe die Referenzseite für den [`+`-Operator](/de/docs/Web/JavaScript/Reference/Operators/Addition).

### Verschachteln von Templates

In bestimmten Fällen ist das Verschachteln eines Templates der einfachste (und vielleicht lesbarere) Weg, um konfigurierbare Zeichenketten zu erhalten. Innerhalb eines mit Backticks begrenzten Templates ist es einfach, innere Backticks zuzulassen, indem Sie sie innerhalb eines `${expression}`-Platzhalters im Template verwenden.

Zum Beispiel, ohne Template-Literale, wenn Sie basierend auf einer bestimmten Bedingung einen bestimmten Wert zurückgeben wollten, könnten Sie so etwas tun:

```js example-bad
let classes = "header";
classes += isLargeScreen()
  ? ""
  : item.isCollapsed
    ? " icon-expander"
    : " icon-collapser";
```

Mit einem Template-Literal, aber ohne Verschachtelung, könnten Sie dies tun:

```js example-bad
const classes = `header ${
  isLargeScreen() ? "" : item.isCollapsed ? "icon-expander" : "icon-collapser"
}`;
```

Mit Verschachtelung von Template-Literalen könnten Sie dies tun:

```js example-good
const classes = `header ${
  isLargeScreen() ? "" : `icon-${item.isCollapsed ? "expander" : "collapser"}`
}`;
```

### Getaggte Templates

Eine fortgeschrittenere Form von Template-Literalen sind _getaggte_ Templates.

Tags erlauben es Ihnen, Template-Literale mit einer Funktion zu parsen. Das erste Argument einer Tag-Funktion enthält ein Array von Zeichenkettenwerten. Die verbleibenden Argumente beziehen sich auf die Ausdrücke.

Die Tag-Funktion kann dann beliebige Operationen an diesen Argumenten durchführen und die manipulierte Zeichenkette zurückgeben. (Alternativ kann sie etwas völlig anderes zurückgeben, wie in einem der folgenden Beispiele beschrieben.)

Der Name der für den Tag verwendeten Funktion kann beliebig sein.

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

Der Tag muss kein einfacher Bezeichner sein. Sie können jeden Ausdruck mit einer [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) größer als 16 verwenden, was [Eigenschaftszugriff](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors), Funktionsaufruf, [new-Expression](/de/docs/Web/JavaScript/Reference/Operators/new) oder sogar ein weiteres getaggtes Template-Literal einschließt.

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

Obwohl technisch durch die Syntax erlaubt, sind _ungetaggte_ Template-Literale Zeichenketten und werfen einen {{jsxref("TypeError")}}, wenn sie verkettet werden.

```js
console.log(`Hello``World`); // TypeError: "Hello" is not a function
```

Die einzige Ausnahme stellt die optionale Verkettung dar, die einen Syntaxfehler erzeugt.

```js-nolint example-bad
console.log?.`Hello`; // SyntaxError: Invalid tagged template on optional chain
console?.log`Hello`; // SyntaxError: Invalid tagged template on optional chain
```

Beachten Sie, dass diese beiden Ausdrücke weiterhin analysierbar sind. Das bedeutet, dass sie nicht [automatischer Semikolon-Einfügung](/de/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion) unterliegen, die nur Semikolons einfügt, um nichtparsfähigen Code zu reparieren.

```js-nolint example-bad
// Still a syntax error
const a = console?.log
`Hello`
```

Tag-Funktionen müssen nicht einmal eine Zeichenkette zurückgeben!

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

Das erste Argument, das die Tag-Funktion erhält, ist ein Array von Zeichenketten. Für ein beliebiges Template-Literal ist dessen Länge gleich der Anzahl der Ersetzungen (Vorkommen von `${…}`) plus eins und daher immer nicht leer.

Für eine spezielle getaggte Template-Literal-Ausdruck wird die Tag-Funktion immer mit demselben Literal-Array aufgerufen, egal wie oft das Literal ausgewertet wird.

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

Dies ermöglicht es dem Tag, das Ergebnis basierend auf der Identität seines ersten Arguments zwischenzuspeichern. Um die Stabilität des Array-Werts weiter zu gewährleisten, sind das erste Argument und seine [`raw`-Eigenschaft](#rohzeichenketten) beide [eingefroren](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen), sodass Sie sie in keiner Weise ändern können.

### Rohzeichenketten

Die spezielle `raw`-Eigenschaft, die im ersten Argument der Tag-Funktion verfügbar ist, ermöglicht es Ihnen, auf die Rohzeichenketten zuzugreifen, wie sie eingegeben wurden, ohne [Escape-Sequenzen](/de/docs/Web/JavaScript/Guide/Grammar_and_types#using_special_characters_in_strings) zu verarbeiten.

```js
function tag(strings) {
  console.log(strings.raw[0]);
}

tag`string text line 1 \n string text line 2`;
// Logs "string text line 1 \n string text line 2",
// including the two characters '\' and 'n'
```

Zusätzlich existiert die Methode {{jsxref("String.raw()")}}, um Rohzeichenketten zu erstellen, genau wie die standardmäßige Template-Funktion und Zeichenkettenverkettung dies tun würde.

```js
const str = String.raw`Hi\n${2 + 3}!`;
// "Hi\\n5!"

str.length;
// 6

Array.from(str).join(",");
// "H,i,\\,n,5,!"
```

`String.raw` funktioniert wie ein "Identitäts"-Tag, wenn das Literal keine Escape-Sequenzen enthält. Falls Sie ein tatsächliches Identitäts-Tag wollen, das immer so funktioniert, als ob das Literal ungetaggt ist, können Sie eine benutzerdefinierte Funktion erstellen, die das "gekochte" (d. h. Escape-Sequenzen werden verarbeitet) Literal-Array an `String.raw` übergibt und so tut, als ob sie Rohzeichenketten wären.

```js
const identity = (strings, ...values) =>
  String.raw({ raw: strings }, ...values);
console.log(identity`Hi\n${2 + 3}!`);
// Hi
// 5!
```

Dies ist nützlich für viele Tools, die Literalzeichenketten, die mit einem bestimmten Namen getaggt sind, eine besondere Behandlung zukommen lassen.

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

### Getaggte Templates und Escape-Sequenzen

In normalen Template-Literalen sind [die Fluchtsequenzen in Zeichenkettenliteralen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#escape_sequences) alle erlaubt. Jede andere nicht gut geformte Escape-Sequenz ist ein Syntaxfehler. Dazu gehören:

- `\` gefolgt von einer beliebigen Dezimalziffer außer `0` oder `\0` gefolgt von einer Dezimalziffer; zum Beispiel `\9` und `\07` (was eine [veraltete Syntax](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#escape_sequences) ist)
- `\x` gefolgt von weniger als zwei Hexadezimalziffern (einschließlich keiner); zum Beispiel `\xz`
- `\u` nicht gefolgt von `{` und gefolgt von weniger als vier Hexadezimalziffern (einschließlich keiner); zum Beispiel `\uz`
- `\u{}` umschließt einen ungültigen Unicode-Codepunkt — es enthält eine nicht hexadezimale Ziffer oder sein Wert ist größer als `10FFFF`; zum Beispiel `\u{110000}` und `\u{z}`

> **Note:** `\` gefolgt von anderen Zeichen, auch wenn sie nutzlos sein könnten, da nichts maskiert wird, sind keine Syntaxfehler.

Dies ist jedoch problematisch für getaggte Templates, die zusätzlich zu dem "gekochten" Literal auch Zugriff auf die rohen Literale haben (Escape-Sequenzen bleiben unverändert gespeichert).

Getaggte Templates ermöglichen das Einbetten beliebiger Zeichenketteninhalte, bei denen Escape-Sequenzen einer anderen Syntax unterliegen können. Betrachten Sie ein einfaches Beispiel, bei dem wir [LaTeX](https://en.wikipedia.org/wiki/LaTeX)-Quelltext über `String.raw` in JavaScript einbetten. Wir möchten weiterhin in der Lage sein, LaTeX-Makros zu verwenden, die mit `u` oder `x` beginnen, ohne den JavaScript-Syntaxeinschränkungen zu unterliegen. Daher wird die Syntaxeinschränkung gut geformter Escape-Sequenzen aus getaggten Templates entfernt. Das folgende Beispiel verwendet [MathJax](https://www.mathjax.org/) zur Darstellung von LaTeX in einem Element:

```js
const node = document.getElementById("formula");
MathJax.typesetClear([node]);
// Throws in older ECMAScript versions (ES2016 and earlier)
// SyntaxError: malformed Unicode character escape sequence
node.textContent = String.raw`$\underline{u}$`;
MathJax.typesetPromise([node]);
```

Illegale Escape-Sequenzen müssen jedoch weiterhin in der "gekochten" Darstellung dargestellt werden. Sie erscheinen als {{jsxref("undefined")}}-Element im "gekochten" Array:

```js
function log(str) {
  console.log("Cooked:", str[0]);
  console.log("Raw:", str.raw[0]);
}

log`\unicode`;
// Cooked: undefined
// Raw: \unicode
```

Beachten Sie, dass die Escape-Sequenz-Einschränkung nur bei _getaggten_ Templates aufgehoben wird, jedoch nicht bei _ungetaggten_ Template-Literalen:

```js-nolint example-bad
const bad = `bad escape sequence: \unicode`;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Textformatierung](/de/docs/Web/JavaScript/Guide/Text_formatting) Leitfaden
- {{jsxref("String")}}
- {{jsxref("String.raw()")}}
- [Lexikalische Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar)
- [ES6 in Depth: Template strings](https://hacks.mozilla.org/2015/05/es6-in-depth-template-strings-2/) auf hacks.mozilla.org (2015)
