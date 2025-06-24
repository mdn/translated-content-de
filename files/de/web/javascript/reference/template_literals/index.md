---
title: Template Literale (Template Strings)
slug: Web/JavaScript/Reference/Template_literals
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{jsSidebar("More")}}

**Template Literale** sind Literale, die mit Backtick-Zeichen (`` ` ``) begrenzt sind und [mehrzeilige Strings](#mehrzeilige_strings), [String-Interpolation](#string-interpolation) mit eingebetteten Ausdrücken und spezielle Konstrukte namens [getaggte Templates](#getaggte_templates) ermöglichen.

Template Literale werden manchmal informell als _Template Strings_ bezeichnet, da sie am häufigsten für die [String-Interpolation](#string-interpolation) verwendet werden (zur Erstellung von Strings durch Ersetzen von Platzhaltern). Ein getaggtes Template Literal muss jedoch nicht in einem String resultieren; es kann mit einer benutzerdefinierten [Tag-Funktion](#getaggte_templates) verwendet werden, um beliebige Operationen auf den verschiedenen Teilen des Template Literals auszuführen.

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
  - : Der Text, der Bestandteil des Template Literals wird. Fast alle Zeichen sind wörtlich erlaubt, einschließlich [Zeilenumbrüche](/de/docs/Web/JavaScript/Reference/Lexical_grammar#line_terminators) und anderer [Leerzeichen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#white_space). Ungültige Escape-Sequenzen verursachen allerdings einen Syntaxfehler, es sei denn, es wird eine [Tag-Funktion](#getaggte_templates_und_escape-sequenzen) verwendet.
- `expression`
  - : Ein Ausdruck, der an der aktuellen Position eingefügt wird, dessen Wert in einen String konvertiert oder an `tagFunction` übergeben wird.
- `tagFunction`
  - : Wenn angegeben, wird es mit dem Array der Template-Strings und der Ersatzausdrücke aufgerufen, und der Rückgabewert wird zum Wert des Template Literals. Siehe [getaggte Templates](#getaggte_templates).

## Beschreibung

Template Literale sind von Backtick-Zeichen (`` ` ``) umschlossen anstelle von doppelten oder einfachen Anführungszeichen.

Neben normalen Strings können Template Literale auch andere Teile enthalten, die als _Platzhalter_ bezeichnet werden und eingebettete Ausdrücke sind, die durch ein Dollarzeichen und geschweifte Klammern begrenzt sind: `${expression}`. Die Strings und Platzhalter werden an eine Funktion übergeben — entweder eine Standardfunktion oder eine von Ihnen bereitgestellte Funktion. Die Standardfunktion (wenn Sie keine eigene bereitstellen) führt lediglich die [String-Interpolation](#string-interpolation) durch, um die Platzhalter zu ersetzen und die Teile dann in einen einzelnen String zu verbinden.

Um eine eigene Funktion bereitzustellen, platzieren Sie den Funktionsnamen vor dem Template Literal; das Ergebnis wird als [**getaggtes Template**](#getaggte_templates) bezeichnet. In diesem Fall wird das Template Literal an Ihre Tag-Funktion übergeben, in der Sie beliebige Operationen auf die verschiedenen Teile des Template Literals durchführen können.

Um einen Backtick in einem Template Literal zu escapen, setzen Sie einen Backslash (`\`) vor den Backtick.

```js
`\`` === "`"; // true
```

Dollarzeichen können ebenfalls escaped werden, um die Interpolation zu verhindern.

```js
`\${1}` === "${1}"; // true
```

### Mehrzeilige Strings

Alle im Quellcode eingefügten Zeilenumbrüche sind Teil des Template Literals.

Bei normalen Strings müssten Sie die folgende Syntax verwenden, um mehrzeilige Strings zu erhalten:

```js
console.log("string text line 1\nstring text line 2");
// "string text line 1
// string text line 2"
```

Mit Template Literalen können Sie dasselbe hiermit tun:

```js
console.log(`string text line 1
string text line 2`);
// "string text line 1
// string text line 2"
```

Wie bei [normalen String-Literalen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#escape_sequences) können Sie einen einzeiligen String über mehrere Zeilen für die Lesbarkeit des Quellcodes fortsetzen, indem Sie den Zeilenumbruch mit einem Backslash (`\`) escapen:

```js
console.log(`string text line 1 \
string text line 2`);
// "string text line 1 string text line 2"
```

### String-Interpolation

Ohne Template Literale, wenn Sie Ausgaben aus Ausdrücken mit Strings kombinieren möchten, würden Sie sie mithilfe des [Additionsoperators](/de/docs/Web/JavaScript/Reference/Operators/Addition) `+` [konkatenieren](/de/docs/Learn_web_development/Core/Scripting/Strings#concatenation_using):

```js
const a = 5;
const b = 10;
console.log("Fifteen is " + (a + b) + " and\nnot " + (2 * a + b) + ".");
// "Fifteen is 15 and
// not 20."
```

Das kann schwer zu lesen sein – insbesondere, wenn Sie mehrere Ausdrücke haben.

Mit Template Literalen können Sie den Konkatenationsoperator vermeiden — und die Lesbarkeit Ihres Codes verbessern — indem Sie Platzhalter in der Form `${expression}` verwenden, um Ersetzungen für eingebettete Ausdrücke durchzuführen:

```js
const a = 5;
const b = 10;
console.log(`Fifteen is ${a + b} and
not ${2 * a + b}.`);
// "Fifteen is 15 and
// not 20."
```

Beachten Sie, dass es einen kleinen Unterschied zwischen den beiden Syntaxen gibt. Template Literale [zwingen ihre Ausdrücke direkt in Strings](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), während Addition ihre Operanden zuerst in Primitive zwingt. Für weitere Informationen siehe die Referenzseite des [`+` Operators](/de/docs/Web/JavaScript/Reference/Operators/Addition).

### Geschachtelte Templates

In bestimmten Fällen ist das Schachteln eines Templates der einfachste (und möglicherweise lesbarste) Weg, um konfigurierbare Strings zu haben. Innerhalb eines durch Backticks begrenzten Templates ist es einfach, innere Backticks zu erlauben, indem man sie innerhalb eines `${expression}`-Platzhalters im Template verwendet.

Zum Beispiel, ohne Template Literale, wenn Sie einen bestimmten Wert basierend auf einer bestimmten Bedingung zurückgeben möchten, könnten Sie etwas Ähnliches tun:

```js example-bad
let classes = "header";
classes += isLargeScreen()
  ? ""
  : item.isCollapsed
    ? " icon-expander"
    : " icon-collapser";
```

Mit einem Template Literal, aber ohne Schachtelung, könnten Sie dies tun:

```js example-bad
const classes = `header ${
  isLargeScreen() ? "" : item.isCollapsed ? "icon-expander" : "icon-collapser"
}`;
```

Mit Schachtelung von Template Literalen können Sie dies tun:

```js example-good
const classes = `header ${
  isLargeScreen() ? "" : `icon-${item.isCollapsed ? "expander" : "collapser"}`
}`;
```

### Getaggte Templates

Eine fortgeschrittenere Form von Template Literalen sind _getaggte_ Templates.

Tags ermöglichen es Ihnen, Template Literale mit einer Funktion zu parsen. Das erste Argument einer Tag-Funktion enthält ein Array von String-Werten. Die restlichen Argumente beziehen sich auf die Ausdrücke.

Die Tag-Funktion kann dann beliebige Operationen auf diesen Argumenten ausführen und den manipulierten String zurückgeben. (Alternativ kann sie etwas völlig anderes zurückgeben, wie in einem der folgenden Beispiele beschrieben.)

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

Das Tag muss kein einfaches Identifikator sein. Sie können jeden Ausdruck mit einer [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) größer als 16 verwenden, einschließlich [Eigenschaftszugriff](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors), Funktionsaufruf, [new-Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/new) oder sogar ein weiteres getaggtes Template Literal.

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

Obwohl syntaktisch erlaubt, lösen _ungetaggte_ Template Literale {{jsxref("TypeError")}} aus, wenn sie verkettet werden.

```js
console.log(`Hello``World`); // TypeError: "Hello" is not a function
```

Die einzige Ausnahme ist das optionale Chaining, das einen Syntaxfehler auslöst.

```js-nolint example-bad
console.log?.`Hello`; // SyntaxError: Invalid tagged template on optional chain
console?.log`Hello`; // SyntaxError: Invalid tagged template on optional chain
```

Beachten Sie, dass diese beiden Ausdrücke dennoch analysierbar sind. Das bedeutet, dass sie nicht der [automatischen Semikolon-Einfügung](/de/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion) unterliegen, die nur Semikola einfügt, um nicht analysierbaren Code zu korrigieren.

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

Das erste Argument, das von der Tag-Funktion empfangen wird, ist ein Array von Strings. Für jedes Template Literal entspricht seine Länge der Anzahl der Ersetzungen (Vorkommen von `${…}`) plus eins und ist daher immer nicht leer.

Für jeden bestimmten getaggten Template Literal-Ausdruck wird die Tag-Funktion immer mit demselben Literal-Array aufgerufen, unabhängig davon, wie oft das Literal ausgewertet wird.

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

Dies ermöglicht es dem Tag, das Ergebnis basierend auf der Identität seines ersten Arguments zu cachen. Um die Stabilität des Array-Werts weiter zu gewährleisten, sind sowohl das erste Argument als auch seine [`raw`-Eigenschaft](#rohe_strings) [gefroren](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen), sodass sie auf keine Weise verändert werden können.

### Rohe Strings

Die spezielle `raw`-Eigenschaft, die beim ersten Argument an die Tag-Funktion verfügbar ist, ermöglicht den Zugriff auf die rohen Strings, wie sie eingegeben wurden, ohne Verarbeitung von [Escape-Sequenzen](/de/docs/Web/JavaScript/Guide/Grammar_and_types#using_special_characters_in_strings).

```js
function tag(strings) {
  console.log(strings.raw[0]);
}

tag`string text line 1 \n string text line 2`;
// Logs "string text line 1 \n string text line 2",
// including the two characters '\' and 'n'
```

Darüber hinaus existiert die {{jsxref("String.raw()")}}-Methode, um rohe Strings zu erstellen, wie es die Standard-Template-Funktion und String-Konkatenation tun würden.

```js
const str = String.raw`Hi\n${2 + 3}!`;
// "Hi\\n5!"

str.length;
// 6

Array.from(str).join(",");
// "H,i,\\,n,5,!"
```

`String.raw` funktioniert wie ein "Identitäts"-Tag, wenn das Literal keine Escape-Sequenzen enthält. Falls Sie ein tatsächliches Identitäts-Tag möchten, das immer so funktioniert, als ob das Literal ungetaggt ist, können Sie eine benutzerdefinierte Funktion erstellen, die das "gegarte" (d.h. die Escape-Sequenzen sind verarbeitet) Literal-Array an `String.raw` übergibt und vorgibt, sie seien rohe Strings.

```js
const identity = (strings, ...values) =>
  String.raw({ raw: strings }, ...values);
console.log(identity`Hi\n${2 + 3}!`);
// Hi
// 5!
```

Dies ist nützlich für viele Tools, die Literalen mit einem bestimmten Namen besondere Behandlung zukommen lassen.

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

In normalen Template Literalen sind [die Escape-Sequenzen in String Literalen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#escape_sequences) alle erlaubt. Jede andere nicht korrekte Escape-Sequenz ist ein Syntaxfehler. Dies beinhaltet:

- `\` gefolgt von einer beliebigen Dezimalziffer außer `0`, oder `\0` gefolgt von einer Dezimalziffer; zum Beispiel `\9` und `\07` (was eine [veraltete Syntax](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#escape_sequences) ist)
- `\x` gefolgt von weniger als zwei Hex-Ziffern (einschließlich keiner); zum Beispiel `\xz`
- `\u` nicht gefolgt von `{` und gefolgt von weniger als vier Hex-Ziffern (einschließlich keiner); zum Beispiel `\uz`
- `\u{}` mit einem ungültigen Unicode-Codepunkt — es enthält eine nicht-hexadezimale Ziffer, oder ihr Wert ist größer als `10FFFF`; zum Beispiel `\u{110000}` und `\u{z}`

> [!NOTE] > `\` gefolgt von anderen Zeichen, auch wenn sie nutzlos sind, da nichts escaped wird, sind keine Syntaxfehler.

Dies ist jedoch problematisch für getaggte Templates, die zusätzlich zu dem "gegarten" Literal auch Zugriff auf die rohen Literale haben (Escape-Sequenzen bleiben unverändert).

Getaggte Templates ermöglichen das Einbetten beliebigen String-Inhalts, bei dem Escape-Sequenzen möglicherweise einer anderen Syntax folgen. Betrachten Sie ein Beispiel, bei dem wir [LaTeX](https://en.wikipedia.org/wiki/LaTeX)-Quelltext in JavaScript über `String.raw` einbetten. Wir möchten immer noch in der Lage sein, LaTeX-Makros zu verwenden, die mit `u` oder `x` beginnen, ohne den Einschränkungen der JavaScript-Syntax zu folgen. Daher wird die Syntaxbeschränkung für gut geformte Escape-Sequenzen aus getaggten Templates entfernt. Das folgende Beispiel verwendet [MathJax](https://www.mathjax.org/), um LaTeX in einem Element zu rendern:

```js
const node = document.getElementById("formula");
MathJax.typesetClear([node]);
// Throws in older ECMAScript versions (ES2016 and earlier)
// SyntaxError: malformed Unicode character escape sequence
node.textContent = String.raw`$\underline{u}$`;
MathJax.typesetPromise([node]);
```

Illegale Escape-Sequenzen müssen jedoch immer noch in der "gegarten" Darstellung dargestellt werden. Sie erscheinen als {{jsxref("undefined")}}-Element im "gegarten" Array:

```js
function log(str) {
  console.log("Cooked:", str[0]);
  console.log("Raw:", str.raw[0]);
}

log`\unicode`;
// Cooked: undefined
// Raw: \unicode
```

Beachten Sie, dass die Escape-Sequenz-Beschränkung nur von _getaggten_ Templates, aber nicht von _ungetaggten_ Template Literalen entfernt wird:

```js-nolint example-bad
const bad = `bad escape sequence: \unicode`;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Numbers and strings](/de/docs/Web/JavaScript/Guide/Numbers_and_strings) Leitfaden
- {{jsxref("String")}}
- {{jsxref("String.raw()")}}
- [Lexikalische Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar)
- [ES6 in Depth: Template strings](https://hacks.mozilla.org/2015/05/es6-in-depth-template-strings-2/) auf hacks.mozilla.org (2015)
