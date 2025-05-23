---
title: Template Literale (Template Strings)
slug: Web/JavaScript/Reference/Template_literals
l10n:
  sourceCommit: 364a4d02b10854ab7cef4ff4b0ec3616d4e1c8ab
---

{{jsSidebar("More")}}

**Template Literale** sind Literale, die mit Backtick-Zeichen (`` ` ``) begrenzt werden und [mehrzeilige Zeichenketten](#mehrzeilige_zeichenketten), [String-Interpolationen](#string-interpolation) mit eingebetteten Ausdrücken und spezielle Konstrukte namens [tagged templates](#tagged_templates) ermöglichen.

Template Literale werden manchmal informell _Template Strings_ genannt, da sie am häufigsten zur [String-Interpolation](#string-interpolation) verwendet werden (um Zeichenketten durch Ersetzen von Platzhaltern zu erstellen). Ein tagged Template Literal muss jedoch nicht in einer Zeichenkette resultieren; es kann mit einer benutzerdefinierten [Tag-Funktion](#tagged_templates) verwendet werden, um beliebige Operationen auf den verschiedenen Teilen des Template-Literals auszuführen.

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
  - : Der Zeichenketten-Text, der Teil des Template-Literals wird. Fast alle Zeichen sind buchstäblich erlaubt, einschließlich [Zeilenumbrüche](/de/docs/Web/JavaScript/Reference/Lexical_grammar#line_terminators) und andere [Leerzeichen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#white_space). Ungültige Escape-Sequenzen führen jedoch zu einem Syntaxfehler, es sei denn, es wird eine [Tag-Funktion](#tagged_templates_und_escape-sequenzen) verwendet.
- `expression`
  - : Ein Ausdruck, der an der aktuellen Position eingefügt wird, dessen Wert in eine Zeichenkette umgewandelt oder an `tagFunction` übergeben wird.
- `tagFunction`
  - : Falls angegeben, wird sie mit dem Template-Strings-Array und den Substitutionsausdrücken aufgerufen, und der Rückgabewert wird der Wert des Template-Literals. Siehe [tagged templates](#tagged_templates).

## Beschreibung

Template Literale werden durch Backtick-Zeichen (`` ` ``) anstelle von doppelten oder einfachen Anführungszeichen eingeschlossen.

Zusätzlich zu normalen Zeichenketten können Template Literale auch andere Teile enthalten, die _Platzhalter_ genannt werden. Diese sind eingebettete Ausdrücke, die durch ein Dollarzeichen und geschweifte Klammern begrenzt sind: `${expression}`. Die Zeichenketten und Platzhalter werden an eine Funktion übergeben - entweder eine Standardfunktion oder eine von Ihnen bereitgestellte Funktion. Die Standardfunktion (wenn Sie keine eigene bereitstellen) führt nur eine [String-Interpolation](#string-interpolation) durch, um die Platzhalter zu ersetzen und die Teile dann in einer einzelnen Zeichenkette zu verketten.

Um eine eigene Funktion bereitzustellen, stellen Sie dem Template-Literal einen Funktionsnamen voran; das Ergebnis wird als [**tagged Template**](#tagged_templates) bezeichnet. In diesem Fall wird das Template-Literal an Ihre Tag-Funktion übergeben, wo Sie dann beliebige Operationen auf den verschiedenen Teilen des Template-Literals ausführen können.

Um einen Backtick in einem Template-Literal zu escapen, setzen Sie einen Backslash (`\`) vor den Backtick.

```js
`\`` === "`"; // true
```

Dollarzeichen können ebenfalls escaped werden, um die Interpolation zu verhindern.

```js
`\${1}` === "${1}"; // true
```

### Mehrzeilige Zeichenketten

Alle in der Quelle eingefügten Newline-Zeichen sind Teil des Template-Literals.

Mit normalen Zeichenketten müssten Sie die folgende Syntax verwenden, um mehrzeilige Zeichenketten zu erhalten:

```js
console.log("string text line 1\nstring text line 2");
// "string text line 1
// string text line 2"
```

Mit Template-Literalen können Sie dasselbe damit tun:

```js
console.log(`string text line 1
string text line 2`);
// "string text line 1
// string text line 2"
```

Wie bei [normalen Zeichenketten-Literalen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#escape_sequences) können Sie eine einzeilige Zeichenkette über mehrere Zeilen schreiben, um die Lesbarkeit des Quellcodes zu verbessern, indem Sie den Zeilenumbruch mit einem Backslash (`\`) escapen:

```js
console.log(`string text line 1 \
string text line 2`);
// "string text line 1 string text line 2"
```

### String-Interpolation

Ohne Template-Literale, wenn Sie Ausgaben aus Ausdrücken mit Zeichenketten kombinieren möchten, würden Sie sie [verkettet](/de/docs/Learn_web_development/Core/Scripting/Strings#concatenation_using) mit dem [Additionsoperator](/de/docs/Web/JavaScript/Reference/Operators/Addition) `+`:

```js
const a = 5;
const b = 10;
console.log("Fifteen is " + (a + b) + " and\nnot " + (2 * a + b) + ".");
// "Fifteen is 15 and
// not 20."
```

Das kann schwer lesbar sein – besonders wenn Sie mehrere Ausdrücke haben.

Mit Template-Literalen können Sie den Verkettungsoperator vermeiden – und die Lesbarkeit Ihres Codes verbessern – indem Sie Platzhalter in der Form von `${expression}` verwenden, um Ersetzungen für eingebettete Ausdrücke vorzunehmen:

```js
const a = 5;
const b = 10;
console.log(`Fifteen is ${a + b} and
not ${2 * a + b}.`);
// "Fifteen is 15 and
// not 20."
```

Beachten Sie, dass es einen leichten Unterschied zwischen den beiden Syntaxen gibt. Template-Literale [zwingen ihre Ausdrücke direkt zur Zeichenkette](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), während die Addition ihre Operanden zuerst zu Primitiven zwingt. Weitere Informationen finden Sie auf der Referenzseite für den [`+` Operator](/de/docs/Web/JavaScript/Reference/Operators/Addition).

### Verschachtelte Templates

In bestimmten Fällen ist die Verschachtelung eines Templates der einfachste (und vielleicht lesbarere) Weg, um konfigurierbare Zeichenketten zu haben. Innerhalb eines mit Backticks begrenzten Templates ist es einfach, innere Backticks zuzulassen, indem Sie sie innerhalb eines `${expression}`-Platzhalters im Template verwenden.

Ohne Template-Literale könnten Sie, wenn Sie einen bestimmten Wert basierend auf einer bestimmten Bedingung zurückgeben möchten, etwas wie das Folgende tun:

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

Mit der Verschachtelung von Template-Literalen können Sie dies tun:

```js example-good
const classes = `header ${
  isLargeScreen() ? "" : `icon-${item.isCollapsed ? "expander" : "collapser"}`
}`;
```

### Tagged Templates

Eine fortgeschrittenere Form von Template-Literalen sind _tagged templates_.

Tags ermöglichen es Ihnen, Template-Literale mit einer Funktion zu parsen. Das erste Argument einer Tag-Funktion enthält ein Array von String-Werten. Die verbleibenden Argumente beziehen sich auf die Ausdrücke.

Die Tag-Funktion kann dann beliebige Operationen auf diesen Argumenten durchführen und die manipulierte Zeichenkette zurückgeben. (Alternativ kann sie auch etwas völlig anderes zurückgeben, wie in einem der folgenden Beispiele beschrieben.)

Der Name der für das Tag verwendeten Funktion kann beliebig sein.

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

Das Tag muss kein einfacher Bezeichner sein. Sie können jeden Ausdruck mit einem [Präzedenz](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) größer als 16 verwenden, was [Eigenschaftszugriffe](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors), Funktionsaufrufe, [new expression](/de/docs/Web/JavaScript/Reference/Operators/new) oder sogar ein weiteres tagged Template Literal umfasst.

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

Obwohl technisch durch die Syntax erlaubt, generieren _untagged_ Template Literale Zeichenketten und lösen einen {{jsxref("TypeError")}} bei Verkettung aus.

```js
console.log(`Hello``World`); // TypeError: "Hello" is not a function
```

Die einzige Ausnahme ist optionales Chaining, das einen Syntaxfehler auslösen wird.

```js-nolint example-bad
console.log?.`Hello`; // SyntaxError: Invalid tagged template on optional chain
console?.log`Hello`; // SyntaxError: Invalid tagged template on optional chain
```

Beachten Sie, dass diese beiden Ausdrücke weiterhin analysierbar sind. Das bedeutet, dass sie nicht der [automatischen Semikolon-Einfügung](/de/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion) unterliegen würden, die nur Semikolons einfügt, um Code zu korrigieren, der ansonsten nicht analysierbar ist.

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

Das erste Argument, das von der Tag-Funktion empfangen wird, ist ein Array von Zeichenfolgen. Für jedes Template-Literal ist seine Länge gleich der Anzahl der Substitutionen (Vorkommen von `${…}`) plus eins und daher immer nicht leer.

Für jeden speziellen tagged Template Literal Ausdruck wird die Tag-Funktion immer mit demselben Literal-Array aufgerufen, egal wie oft das Literal ausgewertet wird.

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

Dies ermöglicht es dem Tag, das Ergebnis basierend auf der Identität seines ersten Arguments zwischenzuspeichern. Um die Stabilität des Array-Wertes weiter zu gewährleisten, sind das erste Argument und seine [`raw` Eigenschaft](#rohe_zeichenfolgen) beide [gefroren](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen), sodass Sie sie in keiner Weise ändern können.

### Rohe Zeichenfolgen

Die spezielle `raw`-Eigenschaft, die beim ersten Argument der Tag-Funktion verfügbar ist, ermöglicht es Ihnen, auf die rohen Zeichenfolgen zuzugreifen, wie sie eingegeben wurden, ohne die [Escape-Sequenzen](/de/docs/Web/JavaScript/Guide/Grammar_and_types#using_special_characters_in_strings) zu verarbeiten.

```js
function tag(strings) {
  console.log(strings.raw[0]);
}

tag`string text line 1 \n string text line 2`;
// Logs "string text line 1 \n string text line 2",
// including the two characters '\' and 'n'
```

Zusätzlich existiert die Methode {{jsxref("String.raw()")}}, um rohe Zeichenfolgen zu erstellen, genau wie die Standard-Template-Funktion und Zeichenfolgenverkettung es tun würden.

```js
const str = String.raw`Hi\n${2 + 3}!`;
// "Hi\\n5!"

str.length;
// 6

Array.from(str).join(",");
// "H,i,\\,n,5,!"
```

`String.raw` fungiert wie ein "Identitäts"-Tag, wenn das Literal keine Escape-Sequenzen enthält. Falls Sie ein tatsächliches Identitäts-Tag wünschen, das immer funktioniert, als ob das Literal ungetaggt wäre, können Sie eine benutzerdefinierte Funktion erstellen, die das "gekochte" (d.h. Escape-Sequenzen sind verarbeitet) Literal-Array an `String.raw` weitergibt und vorgibt, dass sie rohe Zeichenfolgen sind.

```js
const identity = (strings, ...values) =>
  String.raw({ raw: strings }, ...values);
console.log(identity`Hi\n${2 + 3}!`);
// Hi
// 5!
```

Dies ist nützlich für viele Tools, die Literale mit einem bestimmten Namen speziell behandeln.

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

In normalen Template-Literalen sind [die Escape-Sequenzen in Zeichenfolgen-Literalen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#escape_sequences) alle erlaubt. Jede andere nicht wohlgeformte Escape-Sequenz ist ein Syntaxfehler. Dies umfasst:

- `\` gefolgt von einer Dezimalziffer außer `0` oder `\0` gefolgt von einer Dezimalziffer; beispielsweise `\9` und `\07` (was eine [veraltete Syntax](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#escape_sequences) ist)
- `\x` gefolgt von weniger als zwei Hexadezimalziffern (einschließlich keiner); beispielsweise `\xz`
- `\u` nicht gefolgt von `{` und gefolgt von weniger als vier Hexadezimalziffern (einschließlich keiner); beispielsweise `\uz`
- `\u{}` umschließt einen ungültigen Unicode-Codepunkt — es enthält ein nicht-hexadezimales Zeichen, oder sein Wert ist größer als `10FFFF`; beispielsweise `\u{110000}` und `\u{z}`

> **Hinweis:** `\` gefolgt von anderen Zeichen, obwohl sie nutzlos sein könnten, da nichts escaped ist, sind keine Syntaxfehler.

Dies ist jedoch problematisch für tagged Templates, die neben dem "gekochten" Literal auch Zugang zu den rohen Literalen haben (Escape-Sequenzen bleiben unverändert).

Tagged Templates ermöglichen das Einbetten von beliebigen Zeichenketteninhalten, bei denen Escape-Sequenzen einer anderen Syntax folgen können. Betrachten Sie ein Beispiel, in dem wir [LaTeX](https://en.wikipedia.org/wiki/LaTeX) Quelltext über `String.raw` in JavaScript einbetten. Wir möchten immer noch LaTeX-Makros verwenden können, die mit `u` oder `x` beginnen, ohne die Einschränkungen der JavaScript-Syntax zu beachten. Daher wird die Syntax-Einschränkung für wohlgeformte Escape-Sequenzen von tagged Templates entfernt. Das folgende Beispiel nutzt [MathJax](https://www.mathjax.org/), um LaTeX in einem Element zu rendern:

```js
const node = document.getElementById("formula");
MathJax.typesetClear([node]);
// Throws in older ECMAScript versions (ES2016 and earlier)
// SyntaxError: malformed Unicode character escape sequence
node.textContent = String.raw`$\underline{u}$`;
MathJax.typesetPromise([node]);
```

Illegale Escape-Sequenzen müssen jedoch dennoch in der "gekochten" Darstellung dargestellt werden. Sie werden als {{jsxref("undefined")}} Element im "gekochten" Array angezeigt:

```js
function log(str) {
  console.log("Cooked:", str[0]);
  console.log("Raw:", str.raw[0]);
}

log`\unicode`;
// Cooked: undefined
// Raw: \unicode
```

Beachten Sie, dass die Einschränkung der Escape-Sequenz nur von _tagged_ Templates, aber nicht von _untagged_ Template-Literalen entfernt wird:

```js-nolint example-bad
const bad = `bad escape sequence: \unicode`;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Zahlen und Zeichenketten](/de/docs/Web/JavaScript/Guide/Numbers_and_strings) Leitfaden
- {{jsxref("String")}}
- {{jsxref("String.raw()")}}
- [Lexikalische Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar)
- [ES6 in Depth: Template strings](https://hacks.mozilla.org/2015/05/es6-in-depth-template-strings-2/) auf hacks.mozilla.org (2015)
