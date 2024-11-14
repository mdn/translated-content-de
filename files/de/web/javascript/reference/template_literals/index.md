---
title: Template Literals (Template Strings)
slug: Web/JavaScript/Reference/Template_literals
l10n:
  sourceCommit: 5bdcf72ed6ffc7d4fa878060a548869ed6ae149b
---

{{jsSidebar("More")}}

**Template Literals** sind Literale, die durch Backticks (`` ` ``) abgegrenzt werden. Sie ermöglichen [mehrzeilige Zeichenfolgen](#mehrzeilige_zeichenfolgen), [Zeichenfolgeninterpolation](#zeichenfolgeninterpolation) mit eingebetteten Ausdrücken und spezielle Konstrukte namens [getaggte Templates](#getaggte_templates).

Template Literals werden manchmal informell _Template Strings_ genannt, da sie am häufigsten für die [Zeichenfolgeninterpolation](#zeichenfolgeninterpolation) verwendet werden (um Zeichenfolgen durch Ersetzen von Platzhaltern zu erstellen). Ein getaggtes Template Literal muss jedoch nicht in einer Zeichenfolge resultieren; es kann mit einer benutzerdefinierten [Tag-Funktion](#getaggte_templates) verwendet werden, um beliebige Operationen auf den verschiedenen Teilen des Template Literals auszuführen.

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
  - : Der Zeichenfolgen-Text, der Teil des Template Literals wird. Fast alle Zeichen sind wörtlich erlaubt, einschließlich [Zeilenumbrüche](/de/docs/Web/JavaScript/Reference/Lexical_grammar#line_terminators) und anderer [Leerzeichen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#white_space). Ungültige Escape-Sequenzen verursachen jedoch einen Syntaxfehler, es sei denn, es wird eine [Tag-Funktion](#getaggte_templates_und_escape-sequenzen) verwendet.
- `expression`
  - : Ein in die aktuelle Position einzufügender Ausdruck, dessen Wert in eine Zeichenfolge konvertiert oder an `tagFunction` übergeben wird.
- `tagFunction`
  - : Falls angegeben, wird sie mit dem Template-Strings-Array und den Substitutionsexpressionen aufgerufen, und der Rückgabewert wird zum Wert des Template Literals. Siehe [getaggte Templates](#getaggte_templates).

## Beschreibung

Template Literals werden von Backticks (`` ` ``) anstelle von doppelten oder einfachen Anführungszeichen eingeschlossen.

Zusätzlich zu normalen Zeichenfolgen können Template Literals auch andere Teile namens _Platzhalter_ enthalten, die eingebettete Ausdrücke sind, die durch ein Dollarzeichen und geschweifte Klammern abgegrenzt sind: `${expression}`. Die Zeichenfolgen und Platzhalter werden an eine Funktion übergeben – entweder eine Standardfunktion oder eine von Ihnen bereitgestellte. Die Standardfunktion (wenn Sie keine eigene angeben) führt einfach eine [Zeichenfolgeninterpolation](#zeichenfolgeninterpolation) durch, um die Platzhalter zu ersetzen, und verkettet dann die Teile zu einer einzigen Zeichenfolge.

Um eine eigene Funktion bereitzustellen, stellen Sie dem Template Literal einen Funktionsnamen voran; das Ergebnis wird als [**getaggtes Template**](#getaggte_templates) bezeichnet. In diesem Fall wird das Template Literal an Ihre Tag-Funktion übergeben, in der Sie dann beliebige Operationen auf den verschiedenen Teilen des Template Literals ausführen können.

Um einen Backtick in einem Template Literal zu escapen, setzen Sie einen Backslash (`\`) vor den Backtick.

```js
`\`` === "`"; // true
```

Dollarzeichen können ebenfalls escaped werden, um die Interpolation zu verhindern.

```js
`\${1}` === "${1}"; // true
```

### Mehrzeilige Zeichenfolgen

Alle im Quelltext eingefügten neuen Zeilenzeichen sind Teil des Template Literals.

Bei Verwendung normaler Zeichenfolgen müssten Sie die folgende Syntax verwenden, um mehrzeilige Zeichenfolgen zu erhalten:

```js
console.log("string text line 1\n" + "string text line 2");
// "string text line 1
// string text line 2"
```

Mit Template Literals können Sie dasselbe mit Folgendem erreichen:

```js
console.log(`string text line 1
string text line 2`);
// "string text line 1
// string text line 2"
```

Wie bei [normalen Zeichenfolgen-Literalen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#escape_sequences) können Sie eine einzeilige Zeichenfolge über mehrere Zeilen zur besseren Lesbarkeit des Quellcodes schreiben, indem Sie den Zeilenumbruch mit einem Backslash (`\`) escapen:

```js
console.log(`string text line 1 \
string text line 2`);
// "string text line 1 string text line 2"
```

### Zeichenfolgeninterpolation

Ohne Template Literals, wenn Sie Ausgaben von Ausdrücken mit Zeichenfolgen kombinieren möchten, würden Sie sie [konkatenieren](/de/docs/Learn/JavaScript/First_steps/Strings#concatenation_using) mit dem [Additionsoperator](/de/docs/Web/JavaScript/Reference/Operators/Addition) `+`:

```js
const a = 5;
const b = 10;
console.log("Fifteen is " + (a + b) + " and\nnot " + (2 * a + b) + ".");
// "Fifteen is 15 and
// not 20."
```

Das kann schwer lesbar sein – besonders wenn Sie mehrere Ausdrücke haben.

Mit Template Literals können Sie den Konkatenationsoperator vermeiden – und die Lesbarkeit Ihres Codes verbessern – indem Sie Platzhalter in der Form `${expression}` verwenden, um Ersetzungen für eingebettete Ausdrücke vorzunehmen:

```js
const a = 5;
const b = 10;
console.log(`Fifteen is ${a + b} and
not ${2 * a + b}.`);
// "Fifteen is 15 and
// not 20."
```

Beachten Sie, dass es einen leichten Unterschied zwischen den beiden Syntaxen gibt. Template Literals [zwingen ihre Ausdrücke direkt in Zeichenfolgen](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), während die Addition ihre Operanden zuerst zu Primitiven zwingt. Für weitere Informationen siehe die Referenzseite für den [`+` Operator](/de/docs/Web/JavaScript/Reference/Operators/Addition).

### Verschachtelung von Templates

In bestimmten Fällen ist das Verschachteln eines Templates der einfachste (und möglicherweise lesbarere) Weg, um konfigurierbare Zeichenfolgen zu haben. Innerhalb eines durch Backticks abgegrenzten Templates ist es einfach, innere Backticks zuzulassen, indem Sie sie innerhalb eines `${expression}` Platzhalters im Template verwenden.

Ohne Template Literals könnten Sie zum Beispiel, wenn Sie einen bestimmten Wert basierend auf einer bestimmten Bedingung zurückgeben wollten, etwas wie das folgende tun:

```js example-bad
let classes = "header";
classes += isLargeScreen()
  ? ""
  : item.isCollapsed
    ? " icon-expander"
    : " icon-collapser";
```

Mit einem Template Literal aber ohne Verschachtelung könnten Sie dies tun:

```js example-bad
const classes = `header ${
  isLargeScreen() ? "" : item.isCollapsed ? "icon-expander" : "icon-collapser"
}`;
```

Mit Verschachtelung von Template Literals können Sie dies tun:

```js example-good
const classes = `header ${
  isLargeScreen() ? "" : `icon-${item.isCollapsed ? "expander" : "collapser"}`
}`;
```

### Getaggte Templates

Eine fortgeschrittenere Form von Template Literals sind _getaggte_ Templates.

Tags erlauben Ihnen, Template Literals mit einer Funktion zu analysieren. Das erste Argument einer Tag-Funktion enthält ein Array von Zeichenfolgenwerten. Die restlichen Argumente beziehen sich auf die Ausdrücke.

Die Tag-Funktion kann dann beliebige Operationen auf diesen Argumenten ausführen und die manipulierte Zeichenfolge zurückgeben. (Alternativ kann sie etwas völlig anderes zurückgeben, wie in einem der folgenden Beispiele beschrieben.)

Der Name der Funktion, die für das Tag verwendet wird, kann beliebig sein.

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

Das Tag muss kein einfacher Bezeichner sein. Sie können jeden Ausdruck mit einem [Vorrang](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) von mehr als 16 verwenden, einschließlich [Eigenschaftszugriff](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors), Funktionsaufruf, [Neuer Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/new), oder sogar ein weiteres getaggtes Template Literal.

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

Obwohl technisch durch die Syntax erlaubt, sind _ungetaggte_ Template Literals Zeichenfolgen und werden einen {{jsxref("TypeError")}} werfen, wenn sie verkettet sind.

```js
console.log(`Hello``World`); // TypeError: "Hello" is not a function
```

Die einzige Ausnahme ist das optionale Verkettung, das einen Syntaxfehler werfen wird.

```js-nolint example-bad
console.log?.`Hello`; // SyntaxError: Invalid tagged template on optional chain
console?.log`Hello`; // SyntaxError: Invalid tagged template on optional chain
```

Beachten Sie, dass diese beiden Ausdrücke immer noch analysierbar sind. Das bedeutet, dass sie nicht der [automatischen Semikolon-Einfügung](/de/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion) unterliegen, die nur Semikolons einfügt, um nicht-parsierbaren Code zu korrigieren.

```js-nolint example-bad
// Still a syntax error
const a = console?.log
`Hello`
```

Tag-Funktionen müssen nicht einmal eine Zeichenfolge zurückgeben!

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

Das erste Argument, das von der Tag-Funktion empfangen wird, ist ein Array von Zeichenfolgen. Für jedes Template Literal entspricht seine Länge der Anzahl der Substitutionen (Vorkommen von `${…}`) plus eins und ist daher immer nicht leer.

Für jeden bestimmten getaggten Template Literal-Ausdruck wird die Tag-Funktion immer mit demselben Literale-Array aufgerufen, egal wie oft das Literal ausgewertet wird.

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

Dies erlaubt dem Tag, das Ergebnis basierend auf der Identität seines ersten Arguments zwischenzuspeichern. Um die Stabilität des Array-Werts weiter zu gewährleisten, sind sowohl das erste Argument als auch seine [`raw` Eigenschaft](#rohe_zeichenfolgen) [eingefroren](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen), sodass Sie sie in keiner Weise ändern können.

### Rohe Zeichenfolgen

Die spezielle `raw` Eigenschaft, die im ersten Argument der Tag-Funktion verfügbar ist, ermöglicht Ihnen den Zugriff auf die rohen Zeichenfolgen, wie sie eingegeben wurden, ohne Verarbeitung von [Escape-Sequenzen](/de/docs/Web/JavaScript/Guide/Grammar_and_types#using_special_characters_in_strings).

```js
function tag(strings) {
  console.log(strings.raw[0]);
}

tag`string text line 1 \n string text line 2`;
// Logs "string text line 1 \n string text line 2",
// including the two characters '\' and 'n'
```

Zusätzlich existiert die Methode {{jsxref("String.raw()")}}, um rohe Zeichenfolgen genauso zu erstellen, wie es die Standardtemplate-Funktion und Zeichenfolgenkonkatenation tun würden.

```js
const str = String.raw`Hi\n${2 + 3}!`;
// "Hi\\n5!"

str.length;
// 6

Array.from(str).join(",");
// "H,i,\\,n,5,!"
```

`String.raw` funktioniert wie ein "Identitäts"-Tag, wenn das Literal keine Escape-Sequenzen enthält. Falls Sie ein tatsächliches Identitäts-Tag möchten, das immer so funktioniert, als wäre das Literal ungetaggt, können Sie eine benutzerdefinierte Funktion erstellen, die das "verarbeitete" (d.h. Escape-Sequenzen werden verarbeitet) Literal-Array an `String.raw` übergibt, wobei vorgegeben wird, es seien rohe Zeichenfolgen.

```js
const identity = (strings, ...values) =>
  String.raw({ raw: strings }, ...values);
console.log(identity`Hi\n${2 + 3}!`);
// Hi
// 5!
```

Dies ist nützlich für viele Tools, die Literalen mit einem bestimmten Namen eine besondere Behandlung geben.

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

In normalen Template Literals sind [die Escape-Sequenzen in Zeichenfolgen-Literalen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#escape_sequences) alle erlaubt. Jede andere schlecht geformte Escape-Sequenz ist ein Syntaxfehler. Dies schließt ein:

- `\` gefolgt von einer Dezimalziffer außer `0`, oder `\0` gefolgt von einer Dezimalziffer; zum Beispiel `\9` und `\07` (was eine [veraltete Syntax](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#escape_sequences) ist)
- `\x` gefolgt von weniger als zwei Hexadezimalziffern (einschließlich keiner); zum Beispiel `\xz`
- `\u` nicht gefolgt von `{` und gefolgt von weniger als vier Hexadezimalziffern (einschließlich keiner); zum Beispiel `\uz`
- `\u{}` umschließend ein ungültiger Unicode-Codepunkt — es enthält eine nicht-hexadezimale Ziffer, oder sein Wert ist größer als `10FFFF`; zum Beispiel `\u{110000}` und `\u{z}`

> **Hinweis:** `\` gefolgt von anderen Zeichen, obwohl sie nutzlos sein können, da nichts escaped wird, sind keine Syntaxfehler.

Dies ist jedoch problematisch für getaggte Templates, die neben dem "verarbeiteten" Literal auch Zugriff auf die rohen Literale haben (Escape-Sequenzen werden wie eingegeben beibehalten).

Getaggte Templates ermöglichen das Einbetten von beliebigem Zeichenfolgeninhalt, wobei Escape-Sequenzen einem anderen Syntax unterliegen können. Betrachten Sie ein Beispiel, bei dem wir [LaTeX](https://en.wikipedia.org/wiki/LaTeX)-Quelltext in JavaScript über `String.raw` einbetten. Wir möchten weiterhin in der Lage sein, LaTeX-Makros zu verwenden, die mit `u` oder `x` beginnen, ohne den Syntaxbeschränkungen von JavaScript zu folgen. Daher wird die Syntaxbeschränkung für wohlgeformte Escape-Sequenzen aus getaggten Templates entfernt. Das folgende Beispiel verwendet [MathJax](https://www.mathjax.org/), um LaTeX in einem Element darzustellen:

```js
const node = document.getElementById("formula");
MathJax.typesetClear([node]);
// Throws in older ECMAScript versions (ES2016 and earlier)
// SyntaxError: malformed Unicode character escape sequence
node.textContent = String.raw`$\underline{u}$`;
MathJax.typesetPromise([node]);
```

Illegale Escape-Sequenzen müssen jedoch weiterhin in der "verarbeiteten" Darstellung dargestellt werden. Sie werden als {{jsxref("undefined")}} Element im "verarbeiteten" Array angezeigt:

```js
function log(str) {
  console.log("Cooked:", str[0]);
  console.log("Raw:", str.raw[0]);
}

log`\unicode`;
// Cooked: undefined
// Raw: \unicode
```

Beachten Sie, dass die Einschränkung der Escape-Sequenz nur aus _getaggten_ Templates entfernt wird, nicht aber aus _ungetaggten_ Template Literalen:

```js-nolint example-bad
const bad = `bad escape sequence: \unicode`;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Textformatierungsleitfaden](/de/docs/Web/JavaScript/Guide/Text_formatting)
- {{jsxref("String")}}
- {{jsxref("String.raw()")}}
- [Lexikalische Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar)
- [ES6 in Depth: Template Strings](https://hacks.mozilla.org/2015/05/es6-in-depth-template-strings-2/) auf hacks.mozilla.org (2015)
