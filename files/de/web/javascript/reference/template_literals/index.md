---
title: Template literals (Template strings)
slug: Web/JavaScript/Reference/Template_literals
l10n:
  sourceCommit: bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

{{jsSidebar("More")}}

**Template Literals** sind Literale, die mit Backtick-Zeichen (`` ` ``) begrenzt sind, wodurch [mehrzeilige Strings](#mehrzeilige_strings), [String-Interpolation](#string-interpolation) mit eingebetteten Ausdrücken und spezielle Konstrukte namens [Tagged Templates](#tagged_templates) möglich sind.

Template Literals werden manchmal informell als _Template Strings_ bezeichnet, da sie am häufigsten für [String-Interpolation](#string-interpolation) verwendet werden (um Strings durch Ersetzung von Platzhaltern zu erzeugen). Ein Tagged Template Literal muss jedoch nicht in einem String resultieren; es kann mit einer benutzerdefinierten [Tag-Funktion](#tagged_templates) verwendet werden, um beliebige Operationen an den verschiedenen Teilen des Template Literals auszuführen.

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
  - : Der String-Text, der Teil des Template Literals wird. Fast alle Zeichen sind buchstäblich erlaubt, einschließlich [Zeilenumbrüche](/de/docs/Web/JavaScript/Reference/Lexical_grammar#line_terminators) und andere [Leerzeichen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#white_space). Ungültige Escape-Sequenzen führen jedoch zu einem Syntaxfehler, es sei denn, es wird eine [Tag-Funktion](#tagged_templates_und_escape-sequenzen) verwendet.
- `expression`
  - : Ein Ausdruck, der an der aktuellen Position eingefügt wird, dessen Wert in einen String umgewandelt oder an `tagFunction` übergeben wird.
- `tagFunction`
  - : Wenn angegeben, wird sie mit dem Array der Template Strings und Ersetzungsausdrücke aufgerufen, und der Rückgabewert wird der Wert des Template Literals. Siehe [Tagged Templates](#tagged_templates).

## Beschreibung

Template Literals werden von Backtick-Zeichen (`` ` ``) umschlossen, anstatt von doppelten oder einfachen Anführungszeichen.

Neben normalen Strings können Template Literals auch andere Teile namens _Platzhalter_ enthalten, die eingebettete Ausdrücke sind, begrenzt durch ein Dollarzeichen und geschweifte Klammern: `${expression}`. Die Strings und Platzhalter werden an eine Funktion übergeben – entweder eine Standardfunktion oder eine von Ihnen bereitgestellte. Die Standardfunktion (wenn Sie keine eigene bereitstellen) führt einfach [String-Interpolation](#string-interpolation) durch, um die Platzhalter zu ersetzen und die Teile dann in einen einzigen String zu verketten.

Um eine eigene Funktion bereitzustellen, setzen Sie den Funktionsnamen vor das Template Literal; das Ergebnis wird ein [**Tagged Template**](#tagged_templates) genannt. In diesem Fall wird das Template Literal an Ihre Tag-Funktion übergeben, wo Sie dann beliebige Operationen an den verschiedenen Teilen des Template Literals ausführen können.

Um einen Backtick in einem Template Literal zu maskieren, setzen Sie einen Backslash (`\`) vor den Backtick.

```js
`\`` === "`"; // true
```

Auch Dollarzeichen können maskiert werden, um die Interpolation zu verhindern.

```js
`\${1}` === "${1}"; // true
```

### Mehrzeilige Strings

Jede im Quelltext eingefügte neue Zeile ist Teil des Template Literals.

Mit normalen Strings müssten Sie die folgende Syntax verwenden, um mehrzeilige Strings zu erhalten:

```js
console.log("string text line 1\n" + "string text line 2");
// "string text line 1
// string text line 2"
```

Mit Template Literals können Sie dasselbe hiermit tun:

```js
console.log(`string text line 1
string text line 2`);
// "string text line 1
// string text line 2"
```

Wie [normale String-Literale](/de/docs/Web/JavaScript/Reference/Lexical_grammar#escape_sequences) können Sie einen einzeiligen String über mehrere Zeilen für die Lesbarkeit des Quellcodes schreiben, indem Sie den Zeilenumbruch mit einem Backslash (`\`) maskieren:

```js
console.log(`string text line 1 \
string text line 2`);
// "string text line 1 string text line 2"
```

### String-Interpolation

Ohne Template Literals, wenn Sie Ausgaben aus Ausdrücken mit Strings kombinieren möchten, würden Sie sie [verketteten](/de/docs/Learn/JavaScript/First_steps/Strings#concatenation_using) mit dem [Additionsoperator](/de/docs/Web/JavaScript/Reference/Operators/Addition) `+`:

```js
const a = 5;
const b = 10;
console.log("Fifteen is " + (a + b) + " and\nnot " + (2 * a + b) + ".");
// "Fifteen is 15 and
// not 20."
```

Das kann schwer zu lesen sein – besonders, wenn Sie mehrere Ausdrücke haben.

Mit Template Literals können Sie den Verkettungsoperator vermeiden – und die Lesbarkeit Ihres Codes verbessern – indem Sie Platzhalter in der Form `${expression}` verwenden, um Ersetzungen für eingebettete Ausdrücke vorzunehmen:

```js
const a = 5;
const b = 10;
console.log(`Fifteen is ${a + b} and
not ${2 * a + b}.`);
// "Fifteen is 15 and
// not 20."
```

Beachten Sie, dass es einen kleinen Unterschied zwischen den beiden Syntaxen gibt. Template Literals [zwingen ihre Ausdrücke direkt zu Strings](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), während Addition ihre Operanden zuerst zu Primitiven zwingt. Weitere Informationen finden Sie auf der Referenzseite für den [`+`-Operator](/de/docs/Web/JavaScript/Reference/Operators/Addition).

### Verschachtelung von Templates

In bestimmten Fällen ist es am einfachsten (und vielleicht lesbarer), ein Template zu verschachteln, um konfigurierbare Strings zu haben. Innerhalb eines mit Backticks begrenzten Templates ist es einfach, innere Backticks zuzulassen, indem man sie innerhalb eines `${expression}`-Platzhalters im Template verwendet.

Zum Beispiel, ohne Template Literals, wenn Sie einen bestimmten Wert basierend auf einer bestimmten Bedingung zurückgeben möchten, könnten Sie etwas wie das Folgende tun:

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

Mit der Verschachtelung von Template Literals können Sie dies tun:

```js example-good
const classes = `header ${
  isLargeScreen() ? "" : `icon-${item.isCollapsed ? "expander" : "collapser"}`
}`;
```

### Tagged Templates

Eine fortgeschrittenere Form von Template Literals sind _Tagged_ Templates.

Tags ermöglichen es Ihnen, Template Literals mit einer Funktion zu parsen. Das erste Argument einer Tag-Funktion enthält ein Array von String-Werten. Die verbleibenden Argumente beziehen sich auf die Ausdrücke.

Die Tag-Funktion kann dann beliebige Operationen mit diesen Argumenten ausführen und den manipulierten String zurückgeben. (Alternativ kann sie etwas vollständig anderes zurückgeben, wie in einem der folgenden Beispiele beschrieben.)

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

Das Tag muss kein einfacher Bezeichner sein. Sie können jeden Ausdruck verwenden, dessen [Präzedenz](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) größer als 16 ist, einschließlich [Eigenschaftszugriff](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors), Funktionsaufruf, [new-Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/new) oder sogar ein anderes Tagged Template Literal.

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

Während technisch durch die Syntax erlaubt, sind _ungetaggte_ Template Literals Strings und werden einen {{jsxref("TypeError")}} werfen, wenn sie verkettet werden.

```js
console.log(`Hello``World`); // TypeError: "Hello" is not a function
```

Die einzige Ausnahme ist das optionale Chaining, das einen Syntaxfehler verursacht.

```js-nolint example-bad
console.log?.`Hello`; // SyntaxError: Invalid tagged template on optional chain
console?.log`Hello`; // SyntaxError: Invalid tagged template on optional chain
```

Beachten Sie, dass diese beiden Ausdrücke immer noch parsierbar sind. Das bedeutet, dass sie nicht der [automatischen Semikolon-Einfügung](/de/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion) unterliegen würden, die nur Semikolons einfügt, um unbearbeitbaren Code zu reparieren.

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

Das erste Argument, das die Tag-Funktion erhält, ist ein Array von Strings. Für jedes Template Literal ist seine Länge gleich der Anzahl der Ersetzungen (Vorkommen von `${…}`) plus eins und daher immer nicht leer.

Für jeden bestimmten Ausdruck eines Tagged Template Literals wird die Tag-Funktion immer mit dem exakt gleichen Literal-Array aufgerufen, egal wie oft das Literal evaluiert wird.

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

Dies ermöglicht es dem Tag, das Ergebnis basierend auf der Identität seines ersten Arguments zwischenzuspeichern. Um darüber hinaus die Stabilität des Array-Werts zu gewährleisten, sind das erste Argument und seine [`raw` Eigenschaft](#rohe_strings) beide [eingefroren](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen), sodass Sie sie auf keine Weise verändern können.

### Rohe Strings

Die spezielle `raw` Eigenschaft, die beim ersten Argument der Tag-Funktion verfügbar ist, ermöglicht es Ihnen, die rohen Strings so zuzugreifen, wie sie eingegeben wurden, ohne die [Escape-Sequenzen](/de/docs/Web/JavaScript/Guide/Grammar_and_types#using_special_characters_in_strings) zu verarbeiten.

```js
function tag(strings) {
  console.log(strings.raw[0]);
}

tag`string text line 1 \n string text line 2`;
// Logs "string text line 1 \n string text line 2",
// including the two characters '\' and 'n'
```

Darüber hinaus existiert die Methode {{jsxref("String.raw()")}}, um rohe Strings zu erstellen, genau wie die Standard-Template-Funktion und die String-Verkettung es tun würden.

```js
const str = String.raw`Hi\n${2 + 3}!`;
// "Hi\\n5!"

str.length;
// 6

Array.from(str).join(",");
// "H,i,\\,n,5,!"
```

`String.raw` funktioniert wie ein "Identity"-Tag, wenn das Literal keine Escape-Sequenzen enthält. Falls Sie ein tatsächliches Identity-Tag wünschen, das immer so funktioniert, als wäre das Literal ungetaggt, können Sie eine benutzerdefinierte Funktion erstellen, die das "gekochte" (d.h. die Escape-Sequenzen sind verarbeitet) Literal-Array an `String.raw` übergibt und vorgibt, dass sie rohe Strings sind.

```js
const identity = (strings, ...values) =>
  String.raw({ raw: strings }, ...values);
console.log(identity`Hi\n${2 + 3}!`);
// Hi
// 5!
```

Dies ist nützlich für viele Werkzeuge, die Literale mit einem bestimmten Namen speziell behandeln.

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

In normalen Template Literals sind [die Escape-Sequenzen in String-Literalen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#escape_sequences) alle erlaubt. Jede andere nicht wohlgeformte Escape-Sequenz ist ein Syntaxfehler. Dazu gehören:

- `\` gefolgt von einer Dezimalziffer außer `0`, oder `\0` gefolgt von einer Dezimalziffer; zum Beispiel `\9` und `\07` (was eine [veraltete Syntax](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#escape_sequences) ist)
- `\x` gefolgt von weniger als zwei hexadezimalen Ziffern (einschließlich keiner); zum Beispiel `\xz`
- `\u` nicht gefolgt von `{` und gefolgt von weniger als vier hexadezimalen Ziffern (einschließlich keiner); zum Beispiel `\uz`
- `\u{}` umschließt einen ungültigen Unicode-Codepunkt — es enthält eine nicht-hexadezimale Ziffer oder sein Wert ist größer als `10FFFF`; zum Beispiel `\u{110000}` und `\u{z}`

> **Note:** `\` gefolgt von anderen Zeichen, auch wenn sie möglicherweise nutzlos sind, da nichts maskiert wird, sind keine Syntaxfehler.

Allerdings ist dies problematisch für Tagged Templates, die neben dem "gekochten" Literal auch Zugriff auf die rohen Literale haben (Escape-Sequenzen werden unverändert beibehalten).

Tagged Templates ermöglichen das Einbetten von beliebigem String-Inhalt, bei dem Escape-Sequenzen einer anderen Syntax folgen können. Betrachten Sie ein einfaches Beispiel, bei dem wir [LaTeX](https://de.wikipedia.org/wiki/LaTeX)-Quelltext über `String.raw` in JavaScript einbetten. Wir möchten nach wie vor LaTeX-Makros verwenden können, die mit `u` oder `x` beginnen, ohne den JavaScript-Syntaxbeschränkungen zu unterliegen. Daher wird die Syntaxbeschränkung für wohlgeformte Escape-Sequenzen aus Tagged Templates entfernt. Das folgende Beispiel verwendet [MathJax](https://www.mathjax.org/), um LaTeX in einem Element darzustellen:

````js
const node = document.getElementById("formula");
MathJax.typesetClear([node]);
// Throws in older ECMAScript versions (ES2016 and earlier)
// SyntaxError: malformed Unicode character escape sequence
node.textContent = String.raw`$\underline{u}{{jsSidebar("More")}}

**Template Literals** sind Literale, die mit Backtick-Zeichen (`` ` ``) begrenzt sind, wodurch [mehrzeilige Strings](#mehrzeilige_strings), [String-Interpolation](#string-interpolation) mit eingebetteten Ausdrücken und spezielle Konstrukte namens [Tagged Templates](#tagged_templates) möglich sind.

Template Literals werden manchmal informell als _Template Strings_ bezeichnet, da sie am häufigsten für [String-Interpolation](#string-interpolation) verwendet werden (um Strings durch Ersetzung von Platzhaltern zu erzeugen). Ein Tagged Template Literal muss jedoch nicht in einem String resultieren; es kann mit einer benutzerdefinierten [Tag-Funktion](#tagged_templates) verwendet werden, um beliebige Operationen an den verschiedenen Teilen des Template Literals auszuführen.

## Syntax

```js-nolint
`string text`

`string text line 1
 string text line 2`

`string text ${expression} string text`

tagFunction`string text ${expression} string text`
````

### Parameter

- `string text`
  - : Der String-Text, der Teil des Template Literals wird. Fast alle Zeichen sind buchstäblich erlaubt, einschließlich [Zeilenumbrüche](/de/docs/Web/JavaScript/Reference/Lexical_grammar#line_terminators) und andere [Leerzeichen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#white_space). Ungültige Escape-Sequenzen führen jedoch zu einem Syntaxfehler, es sei denn, es wird eine [Tag-Funktion](#tagged_templates_und_escape-sequenzen) verwendet.
- `expression`
  - : Ein Ausdruck, der an der aktuellen Position eingefügt wird, dessen Wert in einen String umgewandelt oder an `tagFunction` übergeben wird.
- `tagFunction`
  - : Wenn angegeben, wird sie mit dem Array der Template Strings und Ersetzungsausdrücke aufgerufen, und der Rückgabewert wird der Wert des Template Literals. Siehe [Tagged Templates](#tagged_templates).

## Beschreibung

Template Literals werden von Backtick-Zeichen (`` ` ``) umschlossen, anstatt von doppelten oder einfachen Anführungszeichen.

Neben normalen Strings können Template Literals auch andere Teile namens _Platzhalter_ enthalten, die eingebettete Ausdrücke sind, begrenzt durch ein Dollarzeichen und geschweifte Klammern: `${expression}`. Die Strings und Platzhalter werden an eine Funktion übergeben – entweder eine Standardfunktion oder eine von Ihnen bereitgestellte. Die Standardfunktion (wenn Sie keine eigene bereitstellen) führt einfach [String-Interpolation](#string-interpolation) durch, um die Platzhalter zu ersetzen und die Teile dann in einen einzigen String zu verketten.

Um eine eigene Funktion bereitzustellen, setzen Sie den Funktionsnamen vor das Template Literal; das Ergebnis wird ein [**Tagged Template**](#tagged_templates) genannt. In diesem Fall wird das Template Literal an Ihre Tag-Funktion übergeben, wo Sie dann beliebige Operationen an den verschiedenen Teilen des Template Literals ausführen können.

Um einen Backtick in einem Template Literal zu maskieren, setzen Sie einen Backslash (`\`) vor den Backtick.

```js
`\`` === "`"; // true
```

Auch Dollarzeichen können maskiert werden, um die Interpolation zu verhindern.

```js
`\${1}` === "${1}"; // true
```

### Mehrzeilige Strings

Jede im Quelltext eingefügte neue Zeile ist Teil des Template Literals.

Mit normalen Strings müssten Sie die folgende Syntax verwenden, um mehrzeilige Strings zu erhalten:

```js
console.log("string text line 1\n" + "string text line 2");
// "string text line 1
// string text line 2"
```

Mit Template Literals können Sie dasselbe hiermit tun:

```js
console.log(`string text line 1
string text line 2`);
// "string text line 1
// string text line 2"
```

Wie [normale String-Literale](/de/docs/Web/JavaScript/Reference/Lexical_grammar#escape_sequences) können Sie einen einzeiligen String über mehrere Zeilen für die Lesbarkeit des Quellcodes schreiben, indem Sie den Zeilenumbruch mit einem Backslash (`\`) maskieren:

```js
console.log(`string text line 1 \
string text line 2`);
// "string text line 1 string text line 2"
```

### String-Interpolation

Ohne Template Literals, wenn Sie Ausgaben aus Ausdrücken mit Strings kombinieren möchten, würden Sie sie [verketteten](/de/docs/Learn/JavaScript/First_steps/Strings#concatenation_using) mit dem [Additionsoperator](/de/docs/Web/JavaScript/Reference/Operators/Addition) `+`:

```js
const a = 5;
const b = 10;
console.log("Fifteen is " + (a + b) + " and\nnot " + (2 * a + b) + ".");
// "Fifteen is 15 and
// not 20."
```

Das kann schwer zu lesen sein – besonders, wenn Sie mehrere Ausdrücke haben.

Mit Template Literals können Sie den Verkettungsoperator vermeiden – und die Lesbarkeit Ihres Codes verbessern – indem Sie Platzhalter in der Form `${expression}` verwenden, um Ersetzungen für eingebettete Ausdrücke vorzunehmen:

```js
const a = 5;
const b = 10;
console.log(`Fifteen is ${a + b} and
not ${2 * a + b}.`);
// "Fifteen is 15 and
// not 20."
```

Beachten Sie, dass es einen kleinen Unterschied zwischen den beiden Syntaxen gibt. Template Literals [zwingen ihre Ausdrücke direkt zu Strings](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), während Addition ihre Operanden zuerst zu Primitiven zwingt. Weitere Informationen finden Sie auf der Referenzseite für den [`+`-Operator](/de/docs/Web/JavaScript/Reference/Operators/Addition).

### Verschachtelung von Templates

In bestimmten Fällen ist es am einfachsten (und vielleicht lesbarer), ein Template zu verschachteln, um konfigurierbare Strings zu haben. Innerhalb eines mit Backticks begrenzten Templates ist es einfach, innere Backticks zuzulassen, indem man sie innerhalb eines `${expression}`-Platzhalters im Template verwendet.

Zum Beispiel, ohne Template Literals, wenn Sie einen bestimmten Wert basierend auf einer bestimmten Bedingung zurückgeben möchten, könnten Sie etwas wie das Folgende tun:

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

Mit der Verschachtelung von Template Literals können Sie dies tun:

```js example-good
const classes = `header ${
  isLargeScreen() ? "" : `icon-${item.isCollapsed ? "expander" : "collapser"}`
}`;
```

### Tagged Templates

Eine fortgeschrittenere Form von Template Literals sind _Tagged_ Templates.

Tags ermöglichen es Ihnen, Template Literals mit einer Funktion zu parsen. Das erste Argument einer Tag-Funktion enthält ein Array von String-Werten. Die verbleibenden Argumente beziehen sich auf die Ausdrücke.

Die Tag-Funktion kann dann beliebige Operationen mit diesen Argumenten ausführen und den manipulierten String zurückgeben. (Alternativ kann sie etwas vollständig anderes zurückgeben, wie in einem der folgenden Beispiele beschrieben.)

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

Das Tag muss kein einfacher Bezeichner sein. Sie können jeden Ausdruck verwenden, dessen [Präzedenz](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) größer als 16 ist, einschließlich [Eigenschaftszugriff](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors), Funktionsaufruf, [new-Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/new) oder sogar ein anderes Tagged Template Literal.

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

Während technisch durch die Syntax erlaubt, sind _ungetaggte_ Template Literals Strings und werden einen {{jsxref("TypeError")}} werfen, wenn sie verkettet werden.

```js
console.log(`Hello``World`); // TypeError: "Hello" is not a function
```

Die einzige Ausnahme ist das optionale Chaining, das einen Syntaxfehler verursacht.

```js-nolint example-bad
console.log?.`Hello`; // SyntaxError: Invalid tagged template on optional chain
console?.log`Hello`; // SyntaxError: Invalid tagged template on optional chain
```

Beachten Sie, dass diese beiden Ausdrücke immer noch parsierbar sind. Das bedeutet, dass sie nicht der [automatischen Semikolon-Einfügung](/de/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion) unterliegen würden, die nur Semikolons einfügt, um unbearbeitbaren Code zu reparieren.

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

Das erste Argument, das die Tag-Funktion erhält, ist ein Array von Strings. Für jedes Template Literal ist seine Länge gleich der Anzahl der Ersetzungen (Vorkommen von `${…}`) plus eins und daher immer nicht leer.

Für jeden bestimmten Ausdruck eines Tagged Template Literals wird die Tag-Funktion immer mit dem exakt gleichen Literal-Array aufgerufen, egal wie oft das Literal evaluiert wird.

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

Dies ermöglicht es dem Tag, das Ergebnis basierend auf der Identität seines ersten Arguments zwischenzuspeichern. Um darüber hinaus die Stabilität des Array-Werts zu gewährleisten, sind das erste Argument und seine [`raw` Eigenschaft](#rohe_strings) beide [eingefroren](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen), sodass Sie sie auf keine Weise verändern können.

### Rohe Strings

Die spezielle `raw` Eigenschaft, die beim ersten Argument der Tag-Funktion verfügbar ist, ermöglicht es Ihnen, die rohen Strings so zuzugreifen, wie sie eingegeben wurden, ohne die [Escape-Sequenzen](/de/docs/Web/JavaScript/Guide/Grammar_and_types#using_special_characters_in_strings) zu verarbeiten.

```js
function tag(strings) {
  console.log(strings.raw[0]);
}

tag`string text line 1 \n string text line 2`;
// Logs "string text line 1 \n string text line 2",
// including the two characters '\' and 'n'
```

Darüber hinaus existiert die Methode {{jsxref("String.raw()")}}, um rohe Strings zu erstellen, genau wie die Standard-Template-Funktion und die String-Verkettung es tun würden.

```js
const str = String.raw`Hi\n${2 + 3}!`;
// "Hi\\n5!"

str.length;
// 6

Array.from(str).join(",");
// "H,i,\\,n,5,!"
```

`String.raw` funktioniert wie ein "Identity"-Tag, wenn das Literal keine Escape-Sequenzen enthält. Falls Sie ein tatsächliches Identity-Tag wünschen, das immer so funktioniert, als wäre das Literal ungetaggt, können Sie eine benutzerdefinierte Funktion erstellen, die das "gekochte" (d.h. die Escape-Sequenzen sind verarbeitet) Literal-Array an `String.raw` übergibt und vorgibt, dass sie rohe Strings sind.

```js
const identity = (strings, ...values) =>
  String.raw({ raw: strings }, ...values);
console.log(identity`Hi\n${2 + 3}!`);
// Hi
// 5!
```

Dies ist nützlich für viele Werkzeuge, die Literale mit einem bestimmten Namen speziell behandeln.

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

In normalen Template Literals sind [die Escape-Sequenzen in String-Literalen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#escape_sequences) alle erlaubt. Jede andere nicht wohlgeformte Escape-Sequenz ist ein Syntaxfehler. Dazu gehören:

- `\` gefolgt von einer Dezimalziffer außer `0`, oder `\0` gefolgt von einer Dezimalziffer; zum Beispiel `\9` und `\07` (was eine [veraltete Syntax](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#escape_sequences) ist)
- `\x` gefolgt von weniger als zwei hexadezimalen Ziffern (einschließlich keiner); zum Beispiel `\xz`
- `\u` nicht gefolgt von `{` und gefolgt von weniger als vier hexadezimalen Ziffern (einschließlich keiner); zum Beispiel `\uz`
- `\u{}` umschließt einen ungültigen Unicode-Codepunkt — es enthält eine nicht-hexadezimale Ziffer oder sein Wert ist größer als `10FFFF`; zum Beispiel `\u{110000}` und `\u{z}`

> **Note:** `\` gefolgt von anderen Zeichen, auch wenn sie möglicherweise nutzlos sind, da nichts maskiert wird, sind keine Syntaxfehler.

Allerdings ist dies problematisch für Tagged Templates, die neben dem "gekochten" Literal auch Zugriff auf die rohen Literale haben (Escape-Sequenzen werden unverändert beibehalten).

Tagged Templates ermöglichen das Einbetten von beliebigem String-Inhalt, bei dem Escape-Sequenzen einer anderen Syntax folgen können. Betrachten Sie ein einfaches Beispiel, bei dem wir [LaTeX](https://de.wikipedia.org/wiki/LaTeX)-Quelltext über `String.raw` in JavaScript einbetten. Wir möchten nach wie vor LaTeX-Makros verwenden können, die mit `u` oder `x` beginnen, ohne den JavaScript-Syntaxbeschränkungen zu unterliegen. Daher wird die Syntaxbeschränkung für wohlgeformte Escape-Sequenzen aus Tagged Templates entfernt. Das folgende Beispiel verwendet [MathJax](https://www.mathjax.org/), um LaTeX in einem Element darzustellen:

;
MathJax.typesetPromise([node]);

````

Illegale Escape-Sequenzen müssen jedoch weiterhin im "gekochten" Ausdruck dargestellt werden. Sie erscheinen als {{jsxref("undefined")}}-Element im "gekochten" Array:

```js
function log(str) {
  console.log("Cooked:", str[0]);
  console.log("Raw:", str.raw[0]);
}

log`\unicode`;
// Cooked: undefined
// Raw: \unicode
````

Beachten Sie, dass die Escape-Sequenz-Beschränkung nur von _getaggten_ Templates entfernt wird, nicht jedoch von _ungetaggten_ Template Literals:

```js-nolint example-bad
const bad = `bad escape sequence: \unicode`;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Textformatierungs](/de/docs/Web/JavaScript/Guide/Text_formatting)-Leitfaden
- {{jsxref("String")}}
- {{jsxref("String.raw()")}}
- [Lexikalische Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar)
- [ES6 in Depth: Template strings](https://hacks.mozilla.org/2015/05/es6-in-depth-template-strings-2/) auf hacks.mozilla.org (2015)
