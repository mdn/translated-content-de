---
title: Template-Literals (Vorlagen-Strings)
slug: Web/JavaScript/Reference/Template_literals
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{jsSidebar("More")}}

**Template-Literals** sind Literale, die mit Backtick-Zeichen (`` ` ``) begrenzt werden und ermöglichen [mehrzeilige Strings](#mehrzeilige_strings), [String-Interpolation](#string-interpolation) mit eingebetteten Ausdrücken sowie spezielle Konstrukte, die [gekennzeichnete Vorlagen](#gekennzeichnete_vorlagen) genannt werden.

Template-Literals werden manchmal informell _Template-Strings_ genannt, da sie am häufigsten für die [String-Interpolation](#string-interpolation) verwendet werden (um Strings durch Ersetzen von Platzhaltern zu erstellen). Ein gekennzeichnetes Template-Literal muss jedoch nicht zu einem String führen; es kann mit einer benutzerdefinierten [Tag-Funktion](#gekennzeichnete_vorlagen) verwendet werden, um beliebige Operationen auf den verschiedenen Teilen des Template-Literals durchzuführen.

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
  - : Der String-Text, der Teil des Template-Literals wird. Fast alle Zeichen sind buchstäblich erlaubt, einschließlich [Zeilenumbrüche](/de/docs/Web/JavaScript/Reference/Lexical_grammar#line_terminators) und andere [Leerzeichensymbole](/de/docs/Web/JavaScript/Reference/Lexical_grammar#white_space). Ungültige Escape-Sequenzen verursachen jedoch einen Syntaxfehler, es sei denn, es wird eine [Tag-Funktion](#gekennzeichnete_vorlagen_und_escape-sequenzen) verwendet.
- `expression`
  - : Ein Ausdruck, der an der aktuellen Position eingefügt wird, dessen Wert in einen String konvertiert oder an `tagFunction` übergeben wird.
- `tagFunction`
  - : Wenn angegeben, wird sie mit dem Array der Template-Strings und der Ersetzungsausdrücke aufgerufen, und der Rückgabewert wird zum Wert des Template-Literals. Siehe [gekennzeichnete Vorlagen](#gekennzeichnete_vorlagen).

## Beschreibung

Template-Literals werden durch Backtick-Zeichen (`` ` ``) anstelle von doppelten oder einfachen Anführungszeichen eingefasst.

Neben normalen Strings können Template-Literals auch andere Teile enthalten, die _Platzhalter_ genannt werden. Diese sind eingebettete Ausdrücke, die durch ein Dollarzeichen und geschweifte Klammern begrenzt sind: `${expression}`. Die Strings und Platzhalter werden an eine Funktion übergeben – entweder an eine Standardfunktion oder an eine Funktion, die Sie bereitstellen. Die Standardfunktion (wenn Sie keine eigene bereitstellen) führt lediglich eine [String-Interpolation](#string-interpolation) durch, um die Platzhalter zu ersetzen und die Teile in einen einzigen String zu verketten.

Um eine eigene Funktion bereitzustellen, stellen Sie den Template-Literal mit einem Funktionsnamen voran; das Ergebnis wird als [**gekennzeichnete Vorlage**](#gekennzeichnete_vorlagen) bezeichnet. In diesem Fall wird das Template-Literal an Ihre Tag-Funktion übergeben, in der Sie beliebige Operationen auf den verschiedenen Teilen des Template-Literals durchführen können.

Um einen Backtick in einem Template-Literal zu maskieren, setzen Sie einen Backslash (`\`) vor den Backtick.

```js
`\`` === "`"; // true
```

Dollarzeichen können ebenfalls maskiert werden, um die Interpolation zu verhindern.

```js
`\${1}` === "${1}"; // true
```

### Mehrzeilige Strings

Alle im Quelltext eingefügten Zeilenumbruchzeichen sind Teil des Template-Literals.

Mithilfe normaler Strings müssten Sie die folgende Syntax verwenden, um mehrzeilige Strings zu erhalten:

```js
console.log("string text line 1\n" + "string text line 2");
// "string text line 1
// string text line 2"
```

Mit Template-Literals können Sie dasselbe so tun:

```js
console.log(`string text line 1
string text line 2`);
// "string text line 1
// string text line 2"
```

Wie bei [normalen String-Literalen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#escape_sequences) können Sie einen einzeiligen String über mehrere Zeilen für die Quelltextlesbarkeit schreiben, indem Sie den Zeilenumbruch mit einem Backslash (`\`) maskieren:

```js
console.log(`string text line 1 \
string text line 2`);
// "string text line 1 string text line 2"
```

### String-Interpolation

Ohne Template-Literals, wenn Sie Ausgabe aus Ausdrücken mit Strings kombinieren möchten, könnten Sie [diese verketten](/de/docs/Learn_web_development/Core/Scripting/Strings#concatenation_using), indem Sie den [Additionsoperator](/de/docs/Web/JavaScript/Reference/Operators/Addition) `+` verwenden:

```js
const a = 5;
const b = 10;
console.log("Fifteen is " + (a + b) + " and\nnot " + (2 * a + b) + ".");
// "Fifteen is 15 and
// not 20."
```

Das kann schwer lesbar sein – besonders wenn Sie mehrere Ausdrücke haben.

Mit Template-Literals können Sie den Verknüpfungsoperator vermeiden – und die Lesbarkeit Ihres Codes verbessern – indem Sie Platzhalter der Form `${expression}` verwenden, um Ersetzungen für eingebettete Ausdrücke durchzuführen:

```js
const a = 5;
const b = 10;
console.log(`Fifteen is ${a + b} and
not ${2 * a + b}.`);
// "Fifteen is 15 and
// not 20."
```

Beachten Sie, dass es einen geringen Unterschied zwischen den beiden Syntaxen gibt. Template-Literals [zwingen ihre Ausdrücke direkt in Strings](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), während Addition ihre Operanden zuerst in Primitive umwandelt. Weitere Informationen finden Sie auf der Referenzseite für den [`+` Operator](/de/docs/Web/JavaScript/Reference/Operators/Addition).

### Verschachtelte Templates

In bestimmten Fällen ist das Verschachteln eines Templates die einfachste (und vielleicht lesbarere) Möglichkeit, konfigurierbare Strings zu haben. Innerhalb eines mit Backticks begrenzten Templates ist es einfach, innere Backticks zuzulassen, indem Sie sie innerhalb eines `${expression}` Platzhalters im Template verwenden.

Zum Beispiel, ohne Template-Literals, wenn Sie einen bestimmten Wert basierend auf einer bestimmten Bedingung zurückgeben möchten, könnten Sie so etwas tun:

```js example-bad
let classes = "header";
classes += isLargeScreen()
  ? ""
  : item.isCollapsed
    ? " icon-expander"
    : " icon-collapser";
```

Mit einem Template Literale, aber ohne Verschachtelung, könnten Sie dies tun:

```js example-bad
const classes = `header ${
  isLargeScreen() ? "" : item.isCollapsed ? "icon-expander" : "icon-collapser"
}`;
```

Mit Verschachtelung von Template-Literals können Sie dies tun:

```js example-good
const classes = `header ${
  isLargeScreen() ? "" : `icon-${item.isCollapsed ? "expander" : "collapser"}`
}`;
```

### Gekennzeichnete Vorlagen

Eine fortgeschrittenere Form von Template-Literals sind _gekennzeichnete_ Vorlagen.

Tags erlauben das Parsen von Template-Literals mit einer Funktion. Das erste Argument einer Tag-Funktion enthält ein Array von String-Werten. Die restlichen Argumente beziehen sich auf die Ausdrücke.

Die Tag-Funktion kann dann beliebige Operationen mit diesen Argumenten durchführen und die manipulierte Zeichenfolge zurückgeben. (Alternativ kann sie etwas völlig anderes zurückgeben, wie in einem der folgenden Beispiele beschrieben.)

Der Name der verwendeten Funktion für das Tag kann beliebig sein.

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

Das Tag muss kein einfacher Bezeichner sein. Sie können jeden Ausdruck mit einer [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) größer als 16 verwenden, einschließlich [Eigenschaftszugriff](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors), Funktionsaufruf, [neuer Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/new) oder sogar ein weiteres gekennzeichnetes Template-Literal.

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

Obwohl technisch vom Syntax her zulässig, sind _ungekennzeichnete_ Template Literale Strings und werfen einen {{jsxref("TypeError")}}, wenn sie verknüpft werden.

```js
console.log(`Hello``World`); // TypeError: "Hello" is not a function
```

Die einzige Ausnahme ist das optionale Ketten, das einen Syntaxfehler auslöst.

```js-nolint example-bad
console.log?.`Hello`; // SyntaxError: Invalid tagged template on optional chain
console?.log`Hello`; // SyntaxError: Invalid tagged template on optional chain
```

Beachten Sie, dass diese beiden Ausdrücke immer noch analysierbar sind. Dies bedeutet, dass sie nicht der [automatischen Semikolon-Einfügung](/de/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion) unterliegen, die nur Semikolons einfügt, um Code zu reparieren, der ansonsten nicht analysierbar ist.

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

Das erste Argument, das von der Tag-Funktion empfangen wird, ist ein Array von Strings. Für jedes Template-Literal ist seine Länge gleich der Anzahl der Ersetzungen (Vorkommen von `${…}`) plus eins und daher immer nicht leer.

Für jeden bestimmten gekennzeichneten Template-Literal Ausdruck wird die Tag-Funktion immer mit demselben Literal-Array aufgerufen, egal wie oft das Literal ausgewertet wird.

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

Dies ermöglicht es dem Tag, das Ergebnis basierend auf der Identität seines ersten Arguments zwischenzuspeichern. Um die Stabilität des Array-Werts weiter zu gewährleisten, sind das erste Argument und seine [`rohe` Eigenschaft](#rohe_strings) beide [eingefroren](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen), sodass Sie sie in keiner Weise verändern können.

### Rohe Strings

Die spezielle `raw` Eigenschaft, die im ersten Argument der Tag-Funktion verfügbar ist, erlaubt es Ihnen, auf die rohen Strings so zuzugreifen, wie sie eingegeben wurden, ohne die [Escape-Sequenzen](/de/docs/Web/JavaScript/Guide/Grammar_and_types#using_special_characters_in_strings) zu verarbeiten.

```js
function tag(strings) {
  console.log(strings.raw[0]);
}

tag`string text line 1 \n string text line 2`;
// Logs "string text line 1 \n string text line 2",
// including the two characters '\' and 'n'
```

Zusätzlich existiert die Methode {{jsxref("String.raw()")}}, um rohe Strings zu erstellen, genau wie die Standard-Template-Funktion und String-Verkettung es tun würden.

```js
const str = String.raw`Hi\n${2 + 3}!`;
// "Hi\\n5!"

str.length;
// 6

Array.from(str).join(",");
// "H,i,\\,n,5,!"
```

`String.raw` fungiert als "Identitäts"-Tag, wenn das Literal keine Escape-Sequenzen enthält. Für den Fall, dass Sie ein tatsächliches Identitätstag möchten, das immer so funktioniert, als wäre das Literal untagged, können Sie eine benutzerdefinierte Funktion erstellen, die das "verkochte" (d. h. Escape-Sequenzen sind verarbeitet) Literal-Array an `String.raw` übergibt und vorgibt, es seien rohe Strings.

```js
const identity = (strings, ...values) =>
  String.raw({ raw: strings }, ...values);
console.log(identity`Hi\n${2 + 3}!`);
// Hi
// 5!
```

Dies ist nützlich für viele Werkzeuge, die Literalen, die mit einem bestimmten Namen markiert sind, eine besondere Behandlung zukommen lassen.

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

### Gekennzeichnete Vorlagen und Escape-Sequenzen

In normalen Template-Literals sind [die Escape-Sequenzen in String-Literalen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#escape_sequences) alle erlaubt. Jede andere nicht wohlgeformte Escape-Sequenz ist ein Syntaxfehler. Dies umfasst:

- `\` gefolgt von einer Dezimalziffer, die nicht `0` ist, oder `\0` gefolgt von einer Dezimalziffer; zum Beispiel `\9` und `\07` (was eine [veraltete Syntax](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#escape_sequences) ist)
- `\x` gefolgt von weniger als zwei Hex-Ziffern (einschließlich keiner); zum Beispiel `\xz`
- `\u` nicht gefolgt von `{` und gefolgt von weniger als vier Hex-Ziffern (einschließlich keiner); zum Beispiel `\uz`
- `\u{}` begrenzt einen ungültigen Unicode-Codepunkt – es enthält eine nicht-Hex-Ziffer oder sein Wert ist größer als `10FFFF`; zum Beispiel `\u{110000}` und `\u{z}`

> **Hinweis:** `\` gefolgt von anderen Zeichen ist kein Syntaxfehler, auch wenn sie möglicherweise nutzlos sind, da nichts maskiert wird.

Dies ist jedoch problematisch für gekennzeichnete Vorlagen, die zusätzlich zu dem "gekochten" Literal auch Zugang zu den rohen Literalen haben (Escape-Sequenzen werden unverändert beibehalten).

Gekennzeichnete Vorlagen ermöglichen das Einbetten beliebigen String-Inhalts, wobei Escape-Sequenzen einer anderen Syntax folgen können. Betrachten Sie ein Beispiel, bei dem wir [LaTeX](https://en.wikipedia.org/wiki/LaTeX)-Quelltext in JavaScript über `String.raw` einbetten. Wir möchten immer noch in der Lage sein, LaTeX-Makros zu verwenden, die mit `u` oder `x` beginnen, ohne die JavaScript-Syntaxbeschränkungen einhalten zu müssen. Daher wird die Syntaxbeschränkung für wohlgeformte Escape-Sequenzen von gekennzeichneten Vorlagen entfernt. Im Beispiel unten wird [MathJax](https://www.mathjax.org/) verwendet, um LaTeX in einem Element darzustellen:

```js
const node = document.getElementById("formula");
MathJax.typesetClear([node]);
// Throws in older ECMAScript versions (ES2016 and earlier)
// SyntaxError: malformed Unicode character escape sequence
node.textContent = String.raw`$\underline{u}$`;
MathJax.typesetPromise([node]);
```

Illegale Escape-Sequenzen müssen jedoch dennoch in der "gekochten" Darstellung dargestellt werden. Sie werden als {{jsxref("undefined")}}-Element im "gekochten" Array angezeigt:

```js
function log(str) {
  console.log("Cooked:", str[0]);
  console.log("Raw:", str.raw[0]);
}

log`\unicode`;
// Cooked: undefined
// Raw: \unicode
```

Beachten Sie, dass die Beschränkung der Escape-Sequenz nur von _gekennzeichneten_ Vorlagen, nicht aber von _ungekennzeichneten_ Template-Literalen entfernt wird:

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
- [ES6 in der Tiefe: Template-Strings](https://hacks.mozilla.org/2015/05/es6-in-depth-template-strings-2/) auf hacks.mozilla.org (2015)
