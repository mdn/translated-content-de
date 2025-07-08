---
title: Template Literale (Template-Strings)
slug: Web/JavaScript/Reference/Template_literals
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

**Template Literale** sind Literale, die von Backtick-Zeichen (`` ` ``) begrenzt werden und [mehrzeilige Strings](#mehrzeilige_strings), [String-Interpolation](#string-interpolation) mit eingebetteten Ausdrücken und spezielle Konstrukte namens [markierte Templates](#markierte_templates) ermöglichen.

Template Literale werden manchmal informell _Template-Strings_ genannt, weil sie am häufigsten für [String-Interpolation](#string-interpolation) verwendet werden (um Strings durch Ersetzung von Platzhaltern zu erstellen). Ein markiertes Template Literal muss jedoch kein String sein; es kann mit einer benutzerdefinierten [Markierungsfunktion](#markierte_templates) verwendet werden, um beliebige Operationen auf den verschiedenen Teilen des Template-Literals durchzuführen.

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
  - : Der String-Text, der Teil des Template-Literals wird. Fast alle Zeichen sind buchstäblich erlaubt, einschließlich [Zeilenumbrüche](/de/docs/Web/JavaScript/Reference/Lexical_grammar#line_terminators) und andere [Leerzeichen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#white_space). Ungültige Escape-Sequenzen führen jedoch zu einem Syntaxfehler, es sei denn, es wird eine [Markierungsfunktion](#markierte_templates_und_escape_sequenzen) verwendet.
- `expression`
  - : Ein Ausdruck, der an der aktuellen Position eingefügt wird, dessen Wert in einen String konvertiert oder an `tagFunction` übergeben wird.
- `tagFunction`
  - : Wenn angegeben, wird sie mit dem Template-String-Array und den Ersetzungsausdrücken aufgerufen und der Rückgabewert wird der Wert des Template-Literals. Siehe [markierte Templates](#markierte_templates).

## Beschreibung

Template Literale werden von Backtick-Zeichen (`` ` ``) anstelle von doppelten oder einfachen Anführungszeichen eingeschlossen.

Neben normalen Strings können Template Literale auch andere Teile enthalten, die _Platzhalter_ genannt werden und eingebettete Ausdrücke sind, die durch ein Dollarzeichen und geschweifte Klammern begrenzt sind: `${expression}`. Die Strings und Platzhalter werden an eine Funktion übergeben – entweder eine Standardfunktion oder eine von Ihnen bereitgestellte Funktion. Die Standardfunktion (wenn Sie keine eigene bereitstellen) führt einfach eine [String-Interpolation](#string-interpolation) durch, um die Platzhalter zu ersetzen und die Teile zu einem einzigen String zu verketten.

Um eine eigene Funktion bereitzustellen, stellen Sie dem Template-Literal einen Funktionsnamen voran; das Ergebnis wird als [**markiertes Template**](#markierte_templates) bezeichnet. In diesem Fall wird das Template-Literal an Ihre Markierungsfunktion übergeben, wo Sie dann beliebige Operationen auf den verschiedenen Teilen des Template-Literals durchführen können.

Um einen Backtick in einem Template Literal zu maskieren, setzen Sie einen Backslash (`\`) vor den Backtick.

```js
`\`` === "`"; // true
```

Dollarzeichen können ebenfalls maskiert werden, um die Interpolation zu verhindern.

```js
`\${1}` === "${1}"; // true
```

### Mehrzeilige Strings

Alle in die Quelle eingefügten Zeilenumbrüche sind Teil des Template-Literals.

Bei normalen Strings müssten Sie die folgende Syntax verwenden, um mehrzeilige Strings zu erhalten:

```js
console.log("string text line 1\nstring text line 2");
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

Wie bei [normalen String-Literalen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#escape_sequences) können Sie einen einzeiligen String über mehrere Zeilen hinweg für die Lesbarkeit des Quellcodes schreiben, indem Sie den Zeilenumbruch mit einem Backslash (`\`) maskieren:

```js
console.log(`string text line 1 \
string text line 2`);
// "string text line 1 string text line 2"
```

### String-Interpolation

Ohne Template-Literale, wenn Sie Ausgaben von Ausdrücken mit Strings kombinieren möchten, würden Sie sie durch [Konkatenation](/de/docs/Learn_web_development/Core/Scripting/Strings#concatenation_using) unter Verwendung des [Additionsoperators](/de/docs/Web/JavaScript/Reference/Operators/Addition) `+` verbinden:

```js
const a = 5;
const b = 10;
console.log("Fifteen is " + (a + b) + " and\nnot " + (2 * a + b) + ".");
// "Fifteen is 15 and
// not 20."
```

Das kann schwer lesbar sein, insbesondere wenn Sie mehrere Ausdrücke haben.

Mit Template-Literalen können Sie den Konkatenationsoperator vermeiden — und die Lesbarkeit Ihres Codes verbessern — indem Sie Platzhalter in der Form `${expression}` verwenden, um Ersetzungen für eingebettete Ausdrücke durchzuführen:

```js
const a = 5;
const b = 10;
console.log(`Fifteen is ${a + b} and
not ${2 * a + b}.`);
// "Fifteen is 15 and
// not 20."
```

Beachten Sie, dass es einen kleinen Unterschied zwischen den beiden Syntaxen gibt. Template-Literale [zwingen ihre Ausdrücke direkt zu Strings](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), während Addition ihre Operanden zuerst zu Primitiven zwingt. Für weitere Informationen siehe die Referenzseite für den [`+` Operator](/de/docs/Web/JavaScript/Reference/Operators/Addition).

### Verschachtelung von Templates

In bestimmten Fällen ist die Verschachtelung eines Templates der einfachste (und möglicherweise lesbarere) Weg, um konfigurierbare Strings zu haben. Innerhalb eines von Backticks begrenzten Templates ist es einfach, innere Backticks zuzulassen, indem man sie innerhalb eines `${expression}` Platzhalters verwendet.

Beispielsweise könnten Sie ohne Template-Literale, wenn Sie einen bestimmten Wert basierend auf einer bestimmten Bedingung zurückgeben wollen, so vorgehen:

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

### Markierte Templates

Eine fortschrittlichere Form von Template-Literalen sind _markierte_ Templates.

Markierungen ermöglichen es Ihnen, Template-Literale mit einer Funktion zu parsen. Das erste Argument einer Markierungsfunktion enthält ein Array von String-Werten. Die verbleibenden Argumente beziehen sich auf die Ausdrücke.

Die Markierungsfunktion kann dann beliebige Operationen auf diesen Argumenten durchführen und den manipulierten String zurückgeben. (Alternativ kann sie auch etwas völlig anderes zurückgeben, wie in einem der folgenden Beispiele beschrieben.)

Der Name der Funktion, die für die Markierung verwendet wird, kann beliebig sein.

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

Die Markierung muss kein einfacher Bezeichner sein. Sie können jeden Ausdruck mit [Präzedenz](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) größer als 16 verwenden, was [Property-Accessoren](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors), Funktionsaufrufe, [new-Ausdrücke](/de/docs/Web/JavaScript/Reference/Operators/new) oder sogar ein anderes markiertes Template Literal einschließt.

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

Obwohl technisch durch die Syntax erlaubt, erzeugen _unmarkierte_ Template Literale Strings und werfen einen {{jsxref("TypeError")}}, wenn sie verkettet werden.

```js
console.log(`Hello``World`); // TypeError: "Hello" is not a function
```

Die einzige Ausnahme ist Optional Chaining, das einen Syntaxfehler auslöst.

```js-nolint example-bad
console.log?.`Hello`; // SyntaxError: Invalid tagged template on optional chain
console?.log`Hello`; // SyntaxError: Invalid tagged template on optional chain
```

Beachten Sie, dass diese beiden Ausdrücke immer noch parsierbar sind. Das bedeutet, dass sie nicht der [automatischen Semikolon-Einfügung](/de/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion) unterliegen, die nur Semikolons einfügt, um Code zu korrigieren, der sonst nicht parsierbar wäre.

```js-nolint example-bad
// Still a syntax error
const a = console?.log
`Hello`
```

Markierungsfunktionen müssen nicht einmal einen String zurückgeben!

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

Das erste Argument, das die Markierungsfunktion erhält, ist ein Array von Strings. Für jedes Template Literal ist seine Länge gleich der Anzahl der Ersetzungen (Vorkommen von `${…}`) plus eins und daher immer ungleich null.

Für jeden bestimmten Ausdruck eines markierten Template-Literals wird die Markierungsfunktion immer mit demselben Literalen-Array aufgerufen, egal wie oft das Literal ausgewertet wird.

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

Dies ermöglicht es der Markierung, das Ergebnis basierend auf der Identität ihres ersten Arguments zwischenzuspeichern. Um die Stabilität des Array-Wertes weiter zu gewährleisten, sind das erste Argument und seine [`raw` Eigenschaft](#roh-strings) beide [eingefroren](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen), sodass Sie sie in keiner Weise ändern können.

### Roh-Strings

Die spezielle `raw` Eigenschaft, verfügbar im ersten Argument der Markierungsfunktion, ermöglicht den Zugriff auf die rohen Strings, wie sie eingegeben wurden, ohne [Escape-Sequenzen](/de/docs/Web/JavaScript/Guide/Grammar_and_types#using_special_characters_in_strings) zu verarbeiten.

```js
function tag(strings) {
  console.log(strings.raw[0]);
}

tag`string text line 1 \n string text line 2`;
// Logs "string text line 1 \n string text line 2",
// including the two characters '\' and 'n'
```

Außerdem existiert die Methode {{jsxref("String.raw()")}}, um rohe Strings zu erstellen, genau wie die Standard-Template-Funktion und die String-Konkatenation es tun würden.

```js
const str = String.raw`Hi\n${2 + 3}!`;
// "Hi\\n5!"

str.length;
// 6

Array.from(str).join(",");
// "H,i,\\,n,5,!"
```

`String.raw` funktioniert wie eine "Identitäts"-Markierung, wenn das Literal keine Escape-Sequenzen enthält. Falls Sie eine tatsächliche Identitätsmarkierung möchten, die immer wie ein unmarkiertes Literal funktioniert, können Sie eine benutzerdefinierte Funktion erstellen, die das "gekochte" (d.h. Escape-Sequenzen sind verarbeitet) literale Array an `String.raw` übergibt, als wären sie rohe Strings.

```js
const identity = (strings, ...values) =>
  String.raw({ raw: strings }, ...values);
console.log(identity`Hi\n${2 + 3}!`);
// Hi
// 5!
```

Dies ist nützlich für viele Tools, die Literale, die mit einem bestimmten Namen markiert sind, speziell behandeln.

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

### Markierte Templates und Escape-Sequenzen

In normalen Template-Literalen sind [die Escape-Sequenzen in String-Literalen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#escape_sequences) alle erlaubt. Jede andere nicht wohlgeformte Escape-Sequenz ist ein Syntaxfehler. Dazu gehören:

- `\` gefolgt von einer beliebigen Dezimalziffer außer `0`, oder `\0` gefolgt von einer Dezimalziffer; zum Beispiel `\9` und `\07` (was eine [veraltete Syntax](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#escape_sequences) ist)
- `\x` gefolgt von weniger als zwei Hexadezimalziffern (einschließlich keiner); zum Beispiel `\xz`
- `\u`, das nicht von `{` gefolgt wird und von weniger als vier Hexadezimalziffern gefolgt wird (einschließlich keiner); zum Beispiel `\uz`
- `\u{}` einschließend einen ungültigen Unicode-Codepunkt — es enthält eine nicht-hexadezimale Ziffer, oder sein Wert ist größer als `10FFFF`; zum Beispiel `\u{110000}` und `\u{z}`

> [!NOTE]
> `\` gefolgt von anderen Zeichen, obwohl sie möglicherweise nutzlos sind, da nichts maskiert wird, sind keine Syntaxfehler.

Dies ist jedoch problematisch für markierte Templates, die zusätzlich zum "gekochten" Literal auch Zugang zu den rohen Literalen (Escape-Sequenzen bleiben unverändert) haben.

Markierte Templates ermöglichen das Einbetten von beliebigen Zeichenketteninhalten, bei denen Escape-Sequenzen einer anderen Syntax folgen können. Betrachten Sie ein Beispiel, bei dem wir [LaTeX](https://en.wikipedia.org/wiki/LaTeX)-Quelltext in JavaScript über `String.raw` einbetten. Wir möchten weiterhin in der Lage sein, LaTeX-Makros zu verwenden, die mit `u` oder `x` beginnen, ohne den Syntaxbeschränkungen von JavaScript zu folgen. Daher wird die Syntaxbeschränkung für wohlgeformte Escape-Sequenzen von markierten Templates entfernt. Das folgende Beispiel verwendet [MathJax](https://www.mathjax.org/), um LaTeX in einem Element zu rendern:

```js
const node = document.getElementById("formula");
MathJax.typesetClear([node]);
// Throws in older ECMAScript versions (ES2016 and earlier)
// SyntaxError: malformed Unicode character escape sequence
node.textContent = String.raw`$\underline{u}$`;
MathJax.typesetPromise([node]);
```

Illegale Escape-Sequenzen müssen jedoch weiterhin in der "gekochten" Darstellung dargestellt werden. Sie erscheinen als {{jsxref("undefined")}} Element im "gekochten" Array:

```js
function log(str) {
  console.log("Cooked:", str[0]);
  console.log("Raw:", str.raw[0]);
}

log`\unicode`;
// Cooked: undefined
// Raw: \unicode
```

Beachten Sie, dass die Escape-Sequenz-Beschränkung nur bei _markierten_ Templates aufgehoben wird, nicht bei _unmarkierten_ Template-Literalen:

```js-nolint example-bad
const bad = `bad escape sequence: \unicode`;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Zahlen und Strings](/de/docs/Web/JavaScript/Guide/Numbers_and_strings) Leitfaden
- {{jsxref("String")}}
- {{jsxref("String.raw()")}}
- [Lexikalische Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar)
- [ES6 in Depth: Template-Strings](https://hacks.mozilla.org/2015/05/es6-in-depth-template-strings-2/) auf hacks.mozilla.org (2015)
