---
title: Template Literale (Vorlagen-Strings)
slug: Web/JavaScript/Reference/Template_literals
l10n:
  sourceCommit: c16a0ee78e5142b3bfcdaf57d595add3ce825f13
---

{{jsSidebar("More")}}

**Template Literale** sind Literale, die mit Backtick-Zeichen (`` ` ``) begrenzt sind und [mehrzeilige Strings](#mehrzeilige_strings), [String-Interpolation](#string-interpolation) mit eingebetteten Ausdrücken und spezielle Konstrukte namens [getaggte Vorlagen](#getaggte_vorlagen) ermöglichen.

Template Literale werden manchmal informell als _Template Strings_ bezeichnet, weil sie am häufigsten für die [String-Interpolation](#string-interpolation) verwendet werden (um Strings durch Ersetzen von Platzhaltern zu erzeugen). Ein getaggtes Template Literal muss jedoch nicht unbedingt einen String ergeben; es kann mit einer benutzerdefinierten [Tag-Funktion](#getaggte_vorlagen) verwendet werden, um beliebige Operationen auf den verschiedenen Teilen des Template Literals durchzuführen.

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
  - : Der String-Text, der Teil des Template Literals wird. Fast alle Zeichen sind buchstäblich erlaubt, einschließlich [Zeilenumbrüchen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#line_terminators) und anderen [Leerzeichenzeichen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#white_space). Allerdings verursachen ungültige Escape-Sequenzen einen Syntaxfehler, es sei denn, eine [Tag-Funktion](#getaggte_vorlagen_und_escape-sequenzen) wird verwendet.
- `expression`
  - : Ein Ausdruck, der in der aktuellen Position eingefügt wird, dessen Wert in einen String umgewandelt oder an `tagFunction` übergeben wird.
- `tagFunction`
  - : Falls angegeben, wird sie mit dem Array der Template-Strings und Ersetzungsausdrücke aufgerufen, und der Rückgabewert wird zum Wert des Template Literals. Siehe [getaggte Vorlagen](#getaggte_vorlagen).

## Beschreibung

Template Literale sind von Backtick-Zeichen (`` ` ``) umschlossen anstelle von doppelten oder einfachen Anführungszeichen.

Zusätzlich zu normalen Strings können Template Literale auch andere Teile namens _Platzhalter_ enthalten, die eingebettete Ausdrücke sind, die durch ein Dollarzeichen und geschweifte Klammern begrenzt sind: `${expression}`. Die Strings und Platzhalter werden an eine Funktion übergeben – entweder eine Standardfunktion oder eine von Ihnen bereitgestellte Funktion. Die Standardfunktion (wenn Sie keine eigene bereitstellen) führt einfach [String-Interpolation](#string-interpolation) durch, um die Platzhalter zu ersetzen und die Teile dann zu einem einzelnen String zu verketten.

Um eine eigene Funktion bereitzustellen, stellen Sie den Namen der Funktion vor das Template Literal; das Ergebnis wird als [**getaggtes Template**](#getaggte_vorlagen) bezeichnet. In diesem Fall wird das Template Literal an Ihre Tag-Funktion übergeben, wo Sie dann beliebige Operationen auf den verschiedenen Teilen des Template Literals durchführen können.

Um einen Backtick in einem Template Literal zu maskieren, fügen Sie einen Backslash (`\`) vor dem Backtick ein.

```js
`\`` === "`"; // true
```

Dollarzeichen können ebenfalls maskiert werden, um die Interpolation zu verhindern.

```js
`\${1}` === "${1}"; // true
```

### Mehrzeilige Strings

Alle in der Quelle eingefügten neuen Zeilenzeichen sind Teil des Template Literals.

Mit normalen Strings müssten Sie die folgende Syntax verwenden, um mehrzeilige Strings zu erhalten:

```js
console.log("string text line 1\n" + "string text line 2");
// "string text line 1
// string text line 2"
```

Mit Template Literalen können Sie dasselbe wie folgt tun:

```js
console.log(`string text line 1
string text line 2`);
// "string text line 1
// string text line 2"
```

Wie bei [normalen String-Literalen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#escape_sequences) können Sie einen einzeiligen String über mehrere Zeilen schreiben, um die Lesbarkeit des Quellcodes zu verbessern, indem Sie die Zeile mit einem Backslash (`\`) maskieren:

```js
console.log(`string text line 1 \
string text line 2`);
// "string text line 1 string text line 2"
```

### String-Interpolation

Ohne Template Literale, wenn Sie Ausgaben von Ausdrücken mit Strings kombinieren möchten, würden Sie diese mithilfe des [Additionsoperators](/de/docs/Web/JavaScript/Reference/Operators/Addition) `+` [konkatenieren](/de/docs/Learn_web_development/Core/Scripting/Strings#concatenation_using):

```js
const a = 5;
const b = 10;
console.log("Fifteen is " + (a + b) + " and\nnot " + (2 * a + b) + ".");
// "Fifteen is 15 and
// not 20."
```

Das kann schwer lesbar sein – besonders wenn Sie mehrere Ausdrücke haben.

Mit Template Literalen können Sie den Konkatenationsoperator vermeiden – und die Lesbarkeit Ihres Codes verbessern – indem Sie Platzhalter in der Form `${expression}` verwenden, um Ersetzungen für eingebettete Ausdrücke vorzunehmen:

```js
const a = 5;
const b = 10;
console.log(`Fifteen is ${a + b} and
not ${2 * a + b}.`);
// "Fifteen is 15 and
// not 20."
```

Beachten Sie, dass es einen kleinen Unterschied zwischen den beiden Syntaxen gibt. Template Literale [zwingen ihre Ausdrücke direkt in Strings](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), während die Addition ihre Operanden zuerst in primitive Daten umwandelt. Weitere Informationen finden Sie auf der Referenzseite für den [`+` Operator](/de/docs/Web/JavaScript/Reference/Operators/Addition).

### Verschachtelung von Vorlagen

In bestimmten Fällen ist die Verschachtelung einer Vorlage der einfachste (und vielleicht lesbarere) Weg, um konfigurierbare Strings zu haben. Innerhalb einer von Backticks begrenzten Vorlage ist es einfach, innere Backticks zuzulassen, indem Sie sie innerhalb eines `${expression}`-Platzhalters in der Vorlage verwenden.

Zum Beispiel könnten Sie ohne Template Literale, wenn Sie einen bestimmten Wert basierend auf einer bestimmten Bedingung zurückgeben möchten, etwas Folgendes tun:

```js example-bad
let classes = "header";
classes += isLargeScreen()
  ? ""
  : item.isCollapsed
    ? " icon-expander"
    : " icon-collapser";
```

Mit einem Template Literal, aber ohne Verschachtelung, könnten Sie dies tun:

```js example-bad
const classes = `header ${
  isLargeScreen() ? "" : item.isCollapsed ? "icon-expander" : "icon-collapser"
}`;
```

Mit der Verschachtelung von Template Literalen können Sie dies tun:

```js example-good
const classes = `header ${
  isLargeScreen() ? "" : `icon-${item.isCollapsed ? "expander" : "collapser"}`
}`;
```

### Getaggte Vorlagen

Ein fortgeschritteneres Form von Template Literalen sind _getaggte_ Vorlagen.

Tags ermöglichen es Ihnen, Template Literale mit einer Funktion zu analysieren. Das erste Argument einer Tag-Funktion enthält ein Array von String-Werten. Die verbleibenden Argumente beziehen sich auf die Ausdrücke.

Die Tag-Funktion kann dann beliebige Operationen auf diesen Argumenten durchführen und den manipulierten String zurückgeben. (Alternativ kann sie etwas völlig anderes zurückgeben, wie in einem der folgenden Beispiele beschrieben.)

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

Das Tag muss kein einfacher Bezeichner sein. Sie können jeden Ausdruck mit einer [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) größer als 16 verwenden, was [Eigenschaftszugriff](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors), Funktionsaufruf, [new expression](/de/docs/Web/JavaScript/Reference/Operators/new) oder sogar ein weiteres getaggtes Template Literal einschließt.

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

Während syntaktisch erlaubt, sind _nicht-getaggte_ Template Literale Strings und werfen einen {{jsxref("TypeError")}}, wenn sie verkettet werden.

```js
console.log(`Hello``World`); // TypeError: "Hello" is not a function
```

Die einzige Ausnahme ist die optionale Verkettung, die einen Syntaxfehler auslöst.

```js-nolint example-bad
console.log?.`Hello`; // SyntaxError: Invalid tagged template on optional chain
console?.log`Hello`; // SyntaxError: Invalid tagged template on optional chain
```

Beachten Sie, dass diese beiden Ausdrücke dennoch analysierbar sind. Das bedeutet, dass sie nicht der [automatischen Semikolon-Einfügung](/de/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion) unterliegen, die nur Semikolons einfügt, um Code zu reparieren, der ansonsten nicht analysierbar ist.

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

Das erste Argument, das von der Tag-Funktion empfangen wird, ist ein Array von Strings. Für jedes Template Literal ist seine Länge gleich der Anzahl der Ersetzungen (Vorkommen von `${…}`) plus eins und ist daher immer nicht leer.

Für jeden bestimmten getaggten Template Literal-Ausdruck wird die Tag-Funktion immer mit genau demselben Literal-Array aufgerufen, egal wie oft das Literal ausgewertet wird.

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

Dies ermöglicht es dem Tag, das Ergebnis basierend auf der Identität seines ersten Arguments zu cachen. Um die Stabilität des Array-Werts weiter zu gewährleisten, sind sowohl das erste Argument als auch seine [`raw` Eigenschaft](#rohe_strings) [eingefroren](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen), sodass Sie sie in keiner Weise verändern können.

### Rohe Strings

Die spezielle `raw` Eigenschaft, die auf dem ersten Argument der Tag-Funktion verfügbar ist, ermöglicht den Zugriff auf die rohen Strings, wie sie eingegeben wurden, ohne Verarbeitung von [Escape-Sequenzen](/de/docs/Web/JavaScript/Guide/Grammar_and_types#using_special_characters_in_strings).

```js
function tag(strings) {
  console.log(strings.raw[0]);
}

tag`string text line 1 \n string text line 2`;
// Logs "string text line 1 \n string text line 2",
// including the two characters '\' and 'n'
```

Zusätzlich gibt es die {{jsxref("String.raw()")}} Methode, um rohe Strings genauso zu erstellen, wie es die Standard-Template-Funktion und String-Konkatenation tun würden.

```js
const str = String.raw`Hi\n${2 + 3}!`;
// "Hi\\n5!"

str.length;
// 6

Array.from(str).join(",");
// "H,i,\\,n,5,!"
```

`String.raw` funktioniert wie ein "Identitäts"-Tag, wenn das Literal keine Escape-Sequenzen enthält. Falls Sie ein tatsächliches Identitäts-Tag möchten, das immer so funktioniert, als ob das Literal nicht getaggt wäre, können Sie eine benutzerdefinierte Funktion erstellen, die das "gekochte" (d. h. Escape-Sequenzen werden verarbeitet) Literal-Array an `String.raw` übergibt, als ob sie rohe Strings wären.

```js
const identity = (strings, ...values) =>
  String.raw({ raw: strings }, ...values);
console.log(identity`Hi\n${2 + 3}!`);
// Hi
// 5!
```

Dies ist nützlich für viele Tools, die Literale mit einem bestimmten Namen besonders behandeln.

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

### Getaggte Vorlagen und Escape-Sequenzen

In normalen Template Literalen sind [die Escape-Sequenzen in String-Literalen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#escape_sequences) alle erlaubt. Jede andere nicht gut geformte Escape-Sequenz ist ein Syntaxfehler. Dies schließt ein:

- `\` gefolgt von einer beliebigen Dezimalziffer außer `0` oder `\0` gefolgt von einer Dezimalziffer; zum Beispiel `\9` und `\07` (was eine [veraltete Syntax](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#escape_sequences) ist)
- `\x` gefolgt von weniger als zwei hexadezimalen Ziffern (einschließlich keiner); zum Beispiel `\xz`
- `\u` nicht gefolgt von `{` und gefolgt von weniger als vier hexadezimalen Ziffern (einschließlich keiner); zum Beispiel `\uz`
- `\u{}` einschließend einen ungültigen Unicode-Codepunkt — es enthält eine nicht-hexadezimale Ziffer oder sein Wert ist größer als `10FFFF`; zum Beispiel `\u{110000}` und `\u{z}`

> **Note:** `\` gefolgt von anderen Zeichen, obwohl sie nutzlos sein können, da nichts maskiert wird, sind keine Syntaxfehler.

Dies ist jedoch problematisch bei getaggten Vorlagen, die zusätzlich zu den "gekochten" Literalen auch Zugriff auf die rohen Literale haben (Escape-Sequenzen werden unverändert beibehalten).

Getaggte Vorlagen ermöglichen das Einbetten beliebigen String-Inhalts, wobei Escape-Sequenzen einem anderen Syntax folgen können. Betrachten Sie ein Beispiel, bei dem wir [LaTeX](https://en.wikipedia.org/wiki/LaTeX)-Quelltext in JavaScript über `String.raw` einbetten. Wir möchten weiterhin LaTeX-Makros verwenden können, die mit `u` oder `x` beginnen, ohne den Einschränkungen der JavaScript-Syntax zu unterliegen. Daher wird die syntaktische Einschränkung für gut geformte Escape-Sequenzen aus den getaggten Vorlagen entfernt. Das folgende Beispiel verwendet [MathJax](https://www.mathjax.org/), um LaTeX in einem Element zu rendern:

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

Beachten Sie, dass die Escape-Sequenz-Beschränkung nur aus _getaggten_ Vorlagen entfernt wird, nicht jedoch aus _nicht-getaggten_ Template Literalen:

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
- [ES6 im Detail: Template Strings](https://hacks.mozilla.org/2015/05/es6-in-depth-template-strings-2/) auf hacks.mozilla.org (2015)
