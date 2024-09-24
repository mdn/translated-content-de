---
title: Template-Literale (Vorlagen-Strings)
slug: Web/JavaScript/Reference/Template_literals
l10n:
  sourceCommit: bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

{{jsSidebar("More")}}

**Template-Literale** sind Literale, die mit Backtick-Zeichen (`` ` ``) begrenzt sind und es ermöglichen, [mehrzeilige Strings](#mehrzeilige_strings), [String-Interpolation](#string-interpolation) mit eingebetteten Ausdrücken und spezielle Konstruktionen namens [markierte Vorlagen](#markierte_vorlagen) zu verwenden.

Template-Literale werden manchmal informell als _Vorlagen-Strings_ bezeichnet, da sie am häufigsten für die [String-Interpolation](#string-interpolation) verwendet werden (um Strings durch Ersetzung von Platzhaltern zu erstellen). Ein markierter Template-Literal muss jedoch nicht unbedingt zu einem String führen; er kann mit einer benutzerdefinierten [Tag-Funktion](#markierte_vorlagen) verwendet werden, um beliebige Operationen an den verschiedenen Teilen des Template-Literals auszuführen.

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
  - : Der String-Text, der Teil des Template-Literals wird. Fast alle Zeichen sind buchstäblich erlaubt, einschließlich [Zeilenumbrüche](/de/docs/Web/JavaScript/Reference/Lexical_grammar#line_terminators) und anderer [Leerzeichen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#white_space). Ungültige Escape-Sequenzen führen jedoch zu einem Syntaxfehler, es sei denn, es wird eine [Tag-Funktion](#markierte_vorlagen_und_escape-sequenzen) verwendet.
- `expression`
  - : Ein Ausdruck, der an der aktuellen Position eingefügt wird, dessen Wert in einen String umgewandelt oder an `tagFunction` übergeben wird.
- `tagFunction`
  - : Falls angegeben, wird sie mit dem Array der Vorlagen-Strings und Ersetzungsausdrücken aufgerufen, und der Rückgabewert wird zum Wert des Template-Literals. Siehe [markierte Vorlagen](#markierte_vorlagen).

## Beschreibung

Template-Literale werden durch Backtick-Zeichen (`` ` ``) statt durch doppelte oder einfache Anführungszeichen eingeschlossen.

Neben normalen Strings können Template-Literale auch andere Teile namens _Platzhalter_ enthalten, die eingebettete Ausdrücke sind und durch ein Dollarzeichen und geschweifte Klammern begrenzt werden: `${expression}`. Die Strings und Platzhalter werden an eine Funktion übergeben — entweder an eine Standardfunktion oder an eine von Ihnen bereitgestellte Funktion. Die Standardfunktion (wenn Sie keine eigene bereitstellen) führt nur die [String-Interpolation](#string-interpolation) durch, um die Platzhalter zu ersetzen und die Teile dann zu einem einzigen String zu verketten.

Um eine eigene Funktion bereitzustellen, setzen Sie den Namen der Funktion vor das Template-Literal; das Ergebnis wird als [**markierte Vorlage**](#markierte_vorlagen) bezeichnet. In diesem Fall wird das Template-Literal an Ihre Tag-Funktion übergeben, in der Sie beliebige Operationen an den verschiedenen Teilen des Template-Literals durchführen können.

Um einen Backtick in einem Template-Literal zu escapen, setzen Sie einen Backslash (`\`) vor den Backtick.

```js
`\`` === "`"; // true
```

Dollarzeichen können ebenfalls escaped werden, um die Interpolation zu verhindern.

```js
`\${1}` === "${1}"; // true
```

### Mehrzeilige Strings

Alle in der Quelle eingefügten Zeilenumbrüche sind Teil des Template-Literals.

Bei normalen Strings müssten Sie die folgende Syntax verwenden, um mehrzeilige Strings zu erhalten:

```js
console.log("string text line 1\n" + "string text line 2");
// "string text line 1
// string text line 2"
```

Mit Template-Literalen können Sie dasselbe folgendermaßen erreichen:

```js
console.log(`string text line 1
string text line 2`);
// "string text line 1
// string text line 2"
```

Wie bei [normalen String-Literalen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#escape_sequences), können Sie eine einzeilige Zeichenfolge über mehrere Zeilen für die Lesbarkeit des Quellcodes schreiben, indem Sie den Zeilenumbruch mit einem Backslash (`\`) escapen:

```js
console.log(`string text line 1 \
string text line 2`);
// "string text line 1 string text line 2"
```

### String-Interpolation

Ohne Template-Literale würden Sie, wenn Sie Ausgaben von Ausdrücken mit Strings kombinieren möchten, [sie mit dem](/de/docs/Learn/JavaScript/First_steps/Strings#concatenation_using) [Additionsoperator](/de/docs/Web/JavaScript/Reference/Operators/Addition) `+` [konkatenieren]:

```js
const a = 5;
const b = 10;
console.log("Fifteen is " + (a + b) + " and\nnot " + (2 * a + b) + ".");
// "Fifteen is 15 and
// not 20."
```

Das kann schwer lesbar sein – besonders wenn Sie mehrere Ausdrücke haben.

Mit Template-Literalen können Sie den Konkatenationsoperator vermeiden — und die Lesbarkeit Ihres Codes verbessern — indem Sie Platzhalter in der Form `${expression}` verwenden, um Ersetzungen für eingebettete Ausdrücke durchzuführen:

```js
const a = 5;
const b = 10;
console.log(`Fifteen is ${a + b} and
not ${2 * a + b}.`);
// "Fifteen is 15 and
// not 20."
```

Beachten Sie, dass es einen kleinen Unterschied zwischen den beiden Syntaxen gibt. Template-Literale [zwingen ihre Ausdrücke direkt in Strings](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), während die Addition ihre Operanden zuerst in primitive Werte zwingt. Weitere Informationen finden Sie auf der Referenzseite für den [`+` Operator](/de/docs/Web/JavaScript/Reference/Operators/Addition).

### Verschachtelte Templates

In bestimmten Fällen ist es einfacher (und vielleicht lesbarer), ein verschachteltes Template zu verwenden, um konfigurierbare Strings zu haben. Innerhalb eines mit Backticks begrenzten Templates ist es einfach, innere Backticks zuzulassen, indem Sie sie in einem `${expression}`-Platzhalter innerhalb des Templates verwenden.

Beispielsweise, ohne Template-Literale, würden Sie, wenn Sie einen bestimmten Wert basierend auf einer bestimmten Bedingung zurückgeben möchten, möglicherweise so etwas wie das Folgende tun:

```js example-bad
let classes = "header";
classes += isLargeScreen()
  ? ""
  : item.isCollapsed
    ? " icon-expander"
    : " icon-collapser";
```

Mit einem Template-Literal aber ohne Verschachtelung könnten Sie dies tun:

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

### Markierte Vorlagen

Eine fortgeschrittenere Form von Template-Literalen sind _markierte_ Vorlagen.

Markierungen ermöglichen es, Template-Literale mit einer Funktion zu analysieren. Das erste Argument einer Tag-Funktion enthält ein Array von String-Werten. Die verbleibenden Argumente beziehen sich auf die Ausdrücke.

Die Tag-Funktion kann dann beliebige Operationen an diesen Argumenten ausführen und den manipulierten String zurückgeben. (Alternativ kann sie etwas völlig anderes zurückgeben, wie in einem der folgenden Beispiele beschrieben.)

Der Name der für die Markierung verwendeten Funktion kann beliebig sein.

```js
const person = "Mike";
const age = 28;

function myTag(strings, personExp, ageExp) {
  const str0 = strings[0]; // "That "
  const str1 = strings[1]; // " is a "
  const str2 = strings[2]; // "."

  const ageStr = ageExp < 100 ? "youngster" : "centenarian";

  // Wir können sogar einen String zurückgeben, der mit einem Template-Literal erstellt wurde
  return `${str0}${personExp}${str1}${ageStr}${str2}`;
}

const output = myTag`That ${person} is a ${age}.`;

console.log(output);
// That Mike is a youngster.
```

Die Markierung muss kein einfaches Identifikator sein. Sie können jeden Ausdruck mit [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) größer als 16 verwenden, was [Eigenschaftszugriff](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors), Funktionsaufruf, [Neuer Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/new) oder sogar ein weiteres markiertes Template-Literal umfasst.

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

Obwohl es von der Syntax her erlaubt ist, sind _unmarkierte_ Template-Literale Strings und werfen einen {{jsxref("TypeError")}}, wenn sie verkettet werden.

```js
console.log(`Hello``World`); // TypeError: "Hello" is not a function
```

Die einzige Ausnahme ist die optionale Verkettung, die einen Syntaxfehler auslöst.

```js-nolint example-bad
console.log?.`Hello`; // SyntaxError: Invalid tagged template on optional chain
console?.log`Hello`; // SyntaxError: Invalid tagged template on optional chain
```

Beachten Sie, dass diese beiden Ausdrücke immer noch analysierbar sind. Das bedeutet, dass sie nicht der [automatischen Semikolon-Einfügung](/de/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion) unterliegen, die nur Semikolons einfügt, um Code zu korrigieren, der sonst nicht analysierbar wäre.

```js-nolint example-bad
// Immer noch ein Syntaxfehler
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

Das erste Argument, das von der Tag-Funktion empfangen wird, ist ein Array von Strings. Bei jedem Template-Literal ist seine Länge gleich der Anzahl der Ersetzungen (Vorkommen von `${…}`) plus eins und ist daher immer nicht leer.

Bei jedem bestimmten markierten Template-Literal-Ausdruck wird die Tag-Funktion immer mit dem exakt gleichen Literal-Array aufgerufen, unabhängig davon, wie oft das Literal ausgewertet wird.

```js
const callHistory = [];

function tag(strings, ...values) {
  callHistory.push(strings);
  // Ein neu erstelltes Objekt zurückgeben
  return {};
}

function evaluateLiteral() {
  return tag`Hello, ${"world"}!`;
}

console.log(evaluateLiteral() === evaluateLiteral()); // false; jedes Mal, wenn `tag` aufgerufen wird, wird ein neues Objekt zurückgegeben
console.log(callHistory[0] === callHistory[1]); // true; alle Bewertungen des gleichen markierten Literals würden dasselbe Strings-Array übergeben
```

Dies ermöglicht der Markierung, das Ergebnis basierend auf der Identität ihres ersten Arguments zwischenspeichern zu können. Um die Stabilität des Array-Wertes weiter sicherzustellen, sind das erste Argument und seine [`raw` Eigenschaft](#rohe_strings) beide [eingefroren](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen), sodass Sie sie in keiner Weise verändern können.

### Rohe Strings

Die spezielle `raw`-Eigenschaft, die im ersten Argument der Tag-Funktion verfügbar ist, ermöglicht den Zugriff auf die rohen Strings, wie sie eingegeben wurden, ohne Verarbeitung von [Escape-Sequenzen](/de/docs/Web/JavaScript/Guide/Grammar_and_types#using_special_characters_in_strings).

```js
function tag(strings) {
  console.log(strings.raw[0]);
}

tag`string text line 1 \n string text line 2`;
// Loggt "string text line 1 \n string text line 2",
// einschließlich der beiden Zeichen '\' und 'n'
```

Zusätzlich existiert die {{jsxref("String.raw()")}} Methode, um rohe Strings zu erstellen, genau wie die Standardvorlagenfunktion und die String-Konkatenation sie erstellen würden.

```js
const str = String.raw`Hi\n${2 + 3}!`;
// "Hi\\n5!"

str.length;
// 6

Array.from(str).join(",");
// "H,i,\\,n,5,!"
```

`String.raw` funktioniert wie ein "Identitäts"-Tag, wenn das Literal keine Escape-Sequenzen enthält. Falls Sie ein tatsächliches Identitäts-Tag möchten, das immer funktioniert, als ob das Literal nicht markiert wäre, können Sie eine benutzerdefinierte Funktion erstellen, die das gekochte (d. h. Escape-Sequenzen werden verarbeitet) Literal-Array an `String.raw` übergibt und so tut, als seien es rohe Strings.

```js
const identity = (strings, ...values) =>
  String.raw({ raw: strings }, ...values);
console.log(identity`Hi\n${2 + 3}!`);
// Hi
// 5!
```

Dies ist nützlich für viele Tools, die Literalen, die mit einem bestimmten Namen markiert sind, besondere Behandlungen zukommen lassen.

```js
const html = (strings, ...values) => String.raw({ raw: strings }, ...values);
// Einige Formatierer werden den Inhalt dieses Literals als HTML formatieren
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

### Markierte Vorlagen und Escape-Sequenzen

In normalen Template-Literalen sind [die Escape-Sequenzen in String-Literalen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#escape_sequences) alle erlaubt. Jede andere nicht wohlgeformte Escape-Sequenz führt zu einem Syntaxfehler. Dies schließt ein:

- `\` gefolgt von einer beliebigen Dezimalziffer außer `0`, oder `\0` gefolgt von einer Dezimalziffer; zum Beispiel `\9` und `\07` (was eine [veraltete Syntax](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#escape_sequences) ist)
- `\x` gefolgt von weniger als zwei hexadezimalen Ziffern (einschließlich keiner); zum Beispiel `\xz`
- `\u` nicht gefolgt von `{` und gefolgt von weniger als vier hexadezimalen Ziffern (einschließlich keiner); zum Beispiel `\uz`
- `\u{}` umschließt einen ungültigen Unicode-Codepunkt — es enthält eine nicht hexadezimale Ziffer, oder sein Wert ist größer als `10FFFF`; zum Beispiel `\u{110000}` und `\u{z}`

> **NOTE:** `\` gefolgt von anderen Zeichen, auch wenn sie nutzlos sein können, da nichts escaped wird, sind keine Syntaxfehler.

Dies ist jedoch für markierte Vorlagen problematisch, die zusätzlich zu dem "gekochten" Literal auch Zugriff auf die rohen Literale haben (Escape-Sequenzen werden unverändert beibehalten).

Markierte Vorlagen ermöglichen das Einbetten beliebiger String-Inhalte, wobei Escape-Sequenzen einem anderen Syntax weisen können. Betrachten Sie ein einfaches Beispiel, bei dem wir [LaTeX](https://en.wikipedia.org/wiki/LaTeX)-Quelltext in JavaScript über `String.raw` einbetten. Wir möchten weiterhin LaTeX-Makros verwenden, die mit `u` oder `x` beginnen, ohne die JavaScript-Syntaxeinschränkungen zu beachten. Daher wird die Syntaxeinschränkung von wohlgeformten Escape-Sequenzen von markierten Vorlagen entfernt. Das Beispiel unten verwendet [MathJax](https://www.mathjax.org/), um LaTeX in einem Element darzustellen:

```js
const node = document.getElementById("formula");
MathJax.typesetClear([node]);
// Wird in älteren ECMAScript-Versionen (ES2016 und früher) ausgelöst
// SyntaxError: malformed Unicode character escape sequence
node.textContent = String.raw`$\underline{u}$`;
MathJax.typesetPromise([node]);
```

Doch illegale Escape-Sequenzen müssen weiterhin in der "gekochten" Darstellung repräsentiert werden. Sie erscheinen als {{jsxref("undefined")}} Element im "gekochten" Array:

```js
function log(str) {
  console.log("Cooked:", str[0]);
  console.log("Raw:", str.raw[0]);
}

log`\unicode`;
// Cooked: undefined
// Raw: \unicode
```

Beachten Sie, dass die Einschränkung der Escape-Sequenz nur für _markierte_ Vorlagen entfällt, jedoch nicht für _unmarkierte_ Template-Literale:

```js-nolint example-bad
const bad = `bad escape sequence: \unicode`;
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Textformatierung](/de/docs/Web/JavaScript/Guide/Text_formatting) Anleitung
- {{jsxref("String")}}
- {{jsxref("String.raw()")}}
- [Lexikalische Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar)
- [ES6 in der Tiefe: Vorlagen-Strings](https://hacks.mozilla.org/2015/05/es6-in-depth-template-strings-2/) auf hacks.mozilla.org (2015)
