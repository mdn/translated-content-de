---
title: Template-Literale (Template-Zeichenketten)
slug: Web/JavaScript/Reference/Template_literals
l10n:
  sourceCommit: 30d6cea0c01129b063f9dac2b269581e44bdb6f6
---

**Template-Literale** sind Literale, die mit Backtick-Zeichen (`` ` ``) begrenzt sind und [mehrzeilige Zeichenketten](#mehrzeilige_zeichenketten), [Zeichenketteninterpolation](#zeichenketteninterpolation) mit eingebetteten Ausdrücken und spezielle Konstrukte namens [getaggte Templates](#getaggte_templates) ermöglichen.

Template-Literale werden manchmal informell als _Template-Zeichenketten_ bezeichnet, da sie am häufigsten für [Zeichenketteninterpolation](#zeichenketteninterpolation) verwendet werden (um Zeichenketten durch Substitution von Platzhaltern zu erstellen). Ein getaggtes Template-Literal muss jedoch nicht zu einer Zeichenkette führen; es kann mit einer benutzerdefinierten [Tag-Funktion](#getaggte_templates) verwendet werden, um beliebige Operationen an den verschiedenen Teilen des Template-Literals durchzuführen.

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
  - : Der Zeichenketten-Text, der Teil des Template-Literals wird. Fast alle Zeichen sind wörtlich erlaubt, einschließlich [Zeilenumbrüche](/de/docs/Web/JavaScript/Reference/Lexical_grammar#line_terminators) und andere [Leerzeichen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#white_space). Ungültige Escape-Sequenzen führen jedoch zu einem Syntaxfehler, es sei denn, es wird eine [Tag-Funktion](#getaggte_templates_und_escape-sequenzen) verwendet.
- `expression`
  - : Ein Ausdruck, der an der aktuellen Position eingefügt wird, dessen Wert in eine Zeichenkette umgewandelt oder an `tagFunction` übergeben wird.
- `tagFunction`
  - : Wenn angegeben, wird sie mit dem Array der Template-Zeichenketten und der Substitution-Ausdrücke aufgerufen, und der Rückgabewert wird zum Wert des Template-Literals. Siehe [getaggte Templates](#getaggte_templates).

## Beschreibung

Template-Literale sind in Backtick-Zeichen (`` ` ``) statt in doppelten oder einzelnen Anführungszeichen eingeschlossen.

Neben normalen Zeichenketten können Template-Literale auch andere Teile enthalten, sogenannte _Platzhalter_, welche eingebettete Ausdrücke sind, die durch ein Dollarzeichen und geschweifte Klammern begrenzt werden: `${expression}`. Die Zeichenketten und Platzhalter werden an eine Funktion übergeben - entweder eine Standardfunktion oder eine von Ihnen bereitgestellte Funktion. Die Standardfunktion (wenn Sie keine eigene bereitstellen) führt einfach eine [Zeichenketteninterpolation](#zeichenketteninterpolation) durch, um die Platzhalter zu substituieren und dann die Teile in eine einzelne Zeichenkette zu konkatinieren.

Um eine eigene Funktion bereitzustellen, setzen Sie den Namen der Funktion vor das Template-Literal; das Ergebnis wird als [**getaggtes Template**](#getaggte_templates) bezeichnet. In diesem Fall wird das Template-Literal an Ihre Tag-Funktion übergeben, wo Sie dann beliebige Operationen an den verschiedenen Teilen des Template-Literals durchführen können.

Um einen Backtick in einem Template-Literal zu escapen, setzen Sie einen Backslash (`\`) vor den Backtick.

```js
`\`` === "`"; // true
```

Dollarzeichen können ebenfalls escaped werden, um die Interpolation zu verhindern.

```js
`\${1}` === "${1}"; // true
```

### Mehrzeilige Zeichenketten

Alle eingefügten Zeilenumbrüche im Quelltext sind Teil des Template-Literals.

Bei normalen Zeichenketten müssten Sie die folgende Syntax verwenden, um mehrzeilige Zeichenketten zu erhalten:

```js
console.log("string text line 1\nstring text line 2");
// "string text line 1
// string text line 2"
```

Mit Template-Literalen können Sie dasselbe mit diesem erreichen:

```js
console.log(`string text line 1
string text line 2`);
// "string text line 1
// string text line 2"
```

Wie bei [normalen Zeichenkettenliteralen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#escape_sequences) können Sie eine einzeilige Zeichenkette über mehrere Zeilen zur Lesbarkeit des Quellcodes schreiben, indem Sie den Zeilenumbruch mit einem Backslash (`\`) escapen:

```js
console.log(`string text line 1 \
string text line 2`);
// "string text line 1 string text line 2"
```

### Zeichenketteninterpolation

Ohne Template-Literale, wenn Sie Ausgaben von Ausdrücken mit Zeichenketten kombinieren möchten, müssten Sie sie [konkatinieren](/de/docs/Learn_web_development/Core/Scripting/Strings#concatenation_using) mittels des [Additionsoperators](/de/docs/Web/JavaScript/Reference/Operators/Addition) `+`:

```js
const a = 5;
const b = 10;
console.log("Fifteen is " + (a + b) + " and\nnot " + (2 * a + b) + ".");
// "Fifteen is 15 and
// not 20."
```

Das kann schwer zu lesen sein - insbesondere, wenn mehrere Ausdrücke vorliegen.

Mit Template-Literalen können Sie den Konkatinationsoperator vermeiden - und die Lesbarkeit Ihres Codes verbessern - indem Sie Platzhalter in der Form `${expression}` verwenden, um Ersetzungen für eingebettete Ausdrücke vorzunehmen:

```js
const a = 5;
const b = 10;
console.log(`Fifteen is ${a + b} and
not ${2 * a + b}.`);
// "Fifteen is 15 and
// not 20."
```

Beachten Sie, dass zwischen den beiden Syntaxen ein kleiner Unterschied besteht. Template-Literale [zwingen ihre Ausdrücke direkt zu Zeichenketten](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), während Addition ihre Operanden zuerst in Primitive zwingt. Für weitere Informationen lesen Sie die Referenzseite für den [`+` Operator](/de/docs/Web/JavaScript/Reference/Operators/Addition).

### Verschachtelung von Templates

In bestimmten Fällen ist die Verschachtelung eines Templates der einfachste (und vielleicht lesbarere) Weg, um konfigurierbare Zeichenketten zu erstellen. Innerhalb eines durch Backticks begrenzten Templates ist es einfach, innere Backticks zu ermöglichen, indem sie innerhalb eines `${expression}` Platzhalters im Template verwendet werden.

Zum Beispiel, ohne Template-Literale, wenn Sie einen bestimmten Wert basierend auf einer bestimmten Bedingung zurückgeben möchten, könnten Sie so etwas tun:

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

Mit Verschachtelung von Template-Literalen können Sie dies tun:

```js example-good
const classes = `header ${
  isLargeScreen() ? "" : `icon-${item.isCollapsed ? "expander" : "collapser"}`
}`;
```

### Getaggte Templates

Eine fortgeschrittenere Form von Template-Literalen sind _getaggte_ Templates.

Tags ermöglichen es Ihnen, Template-Literale mit einer Funktion zu parsen. Das erste Argument einer Tag-Funktion enthält ein Array mit Zeichenkettenwerten. Die verbleibenden Argumente beziehen sich auf die Ausdrücke.

Die Tag-Funktion kann dann beliebige Operationen an diesen Argumenten ausführen und die manipulierte Zeichenkette zurückgeben. (Alternativ kann sie auch etwas völlig anderes zurückgeben, wie in einem der folgenden Beispiele beschrieben.)

Der Name der Funktion, die für das Tag verwendet wird, kann beliebig gewählt werden.

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

Das Tag muss kein einfacher Bezeichner sein. Sie können jeden Ausdruck mit [höherer Präzedenz](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) als 16 verwenden, was [Eigenschaftszugriff](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors), Funktionsaufruf, [neuer Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/new) oder sogar ein anderes getaggtes Template-Literal einschließt.

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

Obwohl technisch durch die Syntax erlaubt, führen _nicht-getaggte_ Template-Literale zu Zeichenketten und lösen einen {{jsxref("TypeError")}} aus, wenn sie verkettet werden.

```js
console.log(`Hello``World`); // TypeError: "Hello" is not a function
```

Die einzige Ausnahme bildet die optionale Verkettung, die einen Syntaxfehler erzeugt.

```js-nolint example-bad
console.log?.`Hello`; // SyntaxError: Invalid tagged template on optional chain
console?.log`Hello`; // SyntaxError: Invalid tagged template on optional chain
```

Beachten Sie, dass diese beiden Ausdrücke immer noch analysierbar sind. Dies bedeutet, dass sie nicht der [automatischen Einfügung von Semikolons](/de/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion) unterliegen, die nur Semikolons einfügt, um Code zu reparieren, der ansonsten nicht analysierbar ist.

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

Das erste Argument, das die Tag-Funktion erhält, ist ein Array von Zeichenketten. Bei jedem Template-Literal entspricht seine Länge der Anzahl der Substitutionen (Vorkommen von `${…}`) plus eins und ist daher immer nicht leer.

Für einen bestimmten getaggten Template-Literal-Ausdruck wird die Tag-Funktion immer mit demselben Literal-Array aufgerufen, unabhängig davon, wie oft das Literal ausgewertet wird.

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

Dies ermöglicht es dem Tag, das Ergebnis basierend auf der Identität seines ersten Arguments im Cache zu speichern. Um die Stabilität des Array-Werts weiter zu gewährleisten, sind das erste Argument und seine [`raw` Eigenschaft](#rohzeichenfolgen) beide [eingefroren](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen), sodass Sie sie in keiner Weise verändern können.

### Rohzeichenfolgen

Die spezielle `raw` Eigenschaft, die für das erste Argument der Tag-Funktion verfügbar ist, ermöglicht den Zugriff auf die Rohzeichenfolgen, wie sie eingegeben wurden, ohne die Verarbeitung von [Escape-Sequenzen](/de/docs/Web/JavaScript/Guide/Grammar_and_types#using_special_characters_in_strings).

```js
function tag(strings) {
  console.log(strings.raw[0]);
}

tag`string text line 1 \n string text line 2`;
// Logs "string text line 1 \n string text line 2",
// including the two characters '\' and 'n'
```

> [!NOTE]
> Die Template-Literal-Syntax wird immer noch auf die gleiche Weise verarbeitet, was bedeutet, dass nicht-escaped Backticks und `${` eine spezielle syntaktische Bedeutung haben, das Escaping dieser Zeichen jedoch zusätzliche Backslashes in der Rohzeichenfolge erzeugt. Weitere Informationen finden Sie unter [Rohzeichenfolgen, die Template-Literal-Syntax enthalten](/de/docs/Web/JavaScript/Reference/Global_Objects/String/raw#raw_strings_containing_template_literal_syntax).

Zusätzlich existiert die Methode {{jsxref("String.raw()")}}, um Rohzeichenfolgen ebenso zu erstellen, wie die Standard-Template-Funktion und die Zeichenkettenkonkatination es tun würden.

```js
const str = String.raw`Hi\n${2 + 3}!`;
// "Hi\\n5!"

str.length;
// 6

Array.from(str).join(",");
// "H,i,\\,n,5,!"
```

`String.raw` funktioniert wie ein „Identitäts“-Tag, wenn das Literal keine Escape-Sequenzen enthält. Falls Sie ein tatsächliches Identitäts-Tag möchten, das immer funktioniert, als ob das Literal nicht getaggt wäre, können Sie eine benutzerdefinierte Funktion erstellen, die das „gekochte“ (d.h. Escape-Sequenzen werden verarbeitet) Literal-Array an `String.raw` übergibt, als wären es Rohzeichenfolgen.

```js
const identity = (strings, ...values) =>
  String.raw({ raw: strings }, ...values);
console.log(identity`Hi\n${2 + 3}!`);
// Hi
// 5!
```

Dies ist nützlich für viele Tools, die Literalen, die durch einen bestimmten Namen getaggt sind, eine besondere Behandlung zukommen lassen.

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

In normalen Template-Literalen sind [die Escape-Sequenzen in Zeichenkettenliteralen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#escape_sequences) alle erlaubt. Jede andere nicht gut geformte Escape-Sequenz ist ein Syntaxfehler. Dazu gehören:

- `\` gefolgt von einer beliebigen Dezimalziffer außer `0`, oder `\0` gefolgt von einer Dezimalziffer; zum Beispiel `\9` und `\07` (was eine [veraltete Syntax](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#escape_sequences) ist)
- `\x` gefolgt von weniger als zwei Hexadezimalziffern (einschließlich keiner); zum Beispiel `\xz`
- `\u` nicht gefolgt von `{` und gefolgt von weniger als vier Hexadezimalziffern (einschließlich keiner); zum Beispiel `\uz`
- `\u{}` einschließend einen ungültigen Unicode-Codepunkt – es enthält eine nicht-hexadezimale Ziffer oder sein Wert ist größer als `10FFFF`; zum Beispiel `\u{110000}` und `\u{z}`

> [!NOTE]
> `\` gefolgt von anderen Zeichen, auch wenn sie nutzlos sind, da nichts escaped wird, sind keine Syntaxfehler.

Jedoch ist dies problematisch für getaggte Templates, welche zusätzlich zu dem „gekochten“ Literal auch Zugang zu den Roh-Literalen (Escape-Sequenzen werden unverändert beibehalten) haben.

Getaggte Templates ermöglichen das Einbetten von beliebigem Zeichenketteninhalt, wobei Escape-Sequenzen einer anderen Syntax folgen können. Betrachten Sie ein Beispiel, bei dem wir [LaTeX](https://en.wikipedia.org/wiki/LaTeX)-Quelltext in JavaScript über `String.raw` einbetten. Wir möchten trotzdem LaTeX-Makros, die mit `u` oder `x` beginnen, ohne den Einschränkungen der JavaScript-Syntax nutzen können. Daher wird die Syntaxbeschränkung für gut geformte Escape-Sequenzen von getaggten Templates entfernt. Das folgende Beispiel verwendet [MathJax](https://www.mathjax.org/), um LaTeX in einem Element zu rendern:

```js
const node = document.getElementById("formula");
MathJax.typesetClear([node]);
// Throws in older ECMAScript versions (ES2016 and earlier)
// SyntaxError: malformed Unicode character escape sequence
node.textContent = String.raw`$\underline{u}$`;
MathJax.typesetPromise([node]);
```

Jedoch müssen illegale Escape-Sequenzen immer noch in der „gekochten“ Darstellung vorhanden sein. Diese werden als {{jsxref("undefined")}}-Element im „gekochten“ Array dargestellt:

```js
function log(str) {
  console.log("Cooked:", str[0]);
  console.log("Raw:", str.raw[0]);
}

log`\unicode`;
// Cooked: undefined
// Raw: \unicode
```

Beachten Sie, dass die Escape-Sequenz-Einschränkung nur bei _getaggten_ Templates, nicht jedoch bei _nicht-getaggten_ Template-Literalen aufgehoben ist:

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
