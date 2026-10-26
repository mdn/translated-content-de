---
title: String.raw()
short-title: raw()
slug: Web/JavaScript/Reference/Global_Objects/String/raw
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die statische Methode **`String.raw()`** ist eine Tag-Funktion für [Template-Literale](/de/docs/Web/JavaScript/Reference/Template_literals). Sie ähnelt dem Präfix `r` in Python oder dem Präfix `@` für String-Literale in C#. Mit ihr erhalten Sie die Rohform eines Template-Literals: Ersetzungen (z. B. `${foo}`) werden verarbeitet, Escape-Sequenzen (z. B. `\n`) dagegen nicht.

{{InteractiveExample("JavaScript Demo: String.raw()")}}

```js interactive-example
// Create a variable that uses a Windows
// path without escaping the backslashes:
const filePath = String.raw`C:\Development\profile\about.html`;

console.log(`The file was uploaded from: ${filePath}`);
// Expected output: "The file was uploaded from: C:\Development\profile\about.html"
```

## Syntax

```js-nolint
String.raw(strings)
String.raw(strings, sub1)
String.raw(strings, sub1, sub2)
String.raw(strings, sub1, sub2, /* …, */ subN)

String.raw`templateString`
```

### Parameter

- `strings`
  - : Ein wohlgeformtes Array-Objekt für Template-Literale, etwa `{ raw: ['foo', 'bar', 'baz'] }`. Es sollte ein Objekt mit einer `raw`-Eigenschaft sein, deren Wert ein arrayähnliches Objekt aus Strings ist.
- `sub1`, …, `subN`
  - : Enthalten die Werte für Ersetzungen.
- `templateString`
  - : Ein [Template-Literal](/de/docs/Web/JavaScript/Reference/Template_literals), optional mit Ersetzungen (`${...}`).

### Rückgabewert

Die Rohform eines übergebenen Template-Literals als String.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn das erste Argument keine `raw`-Eigenschaft hat oder diese Eigenschaft `undefined` oder `null` ist.

## Beschreibung

In den meisten Fällen wird `String.raw()` mit Template-Literalen verwendet. Die oben zuerst genannte Syntax wird nur selten verwendet, da die JavaScript-Engine die Funktion mit den passenden Argumenten aufruft – genau wie bei anderen [Tag-Funktionen](/de/docs/Web/JavaScript/Reference/Template_literals#tagged_templates).

`String.raw()` ist die einzige integrierte Tag-Funktion für Template-Literale. Ihr Verhalten ähnelt dem eines Template-Literals ohne Tag, da sie alle Argumente verkettet und einen String zurückgibt. Sie können sie sogar mit gewöhnlichem JavaScript-Code selbst implementieren.

> [!WARNING]
> Sie sollten `String.raw` nicht direkt als „Identity-Tag“ verwenden. Wie Sie ein solches Tag implementieren, erfahren Sie unter [Ein Identity-Tag erstellen](#ein_identity-tag_erstellen).

Wenn `String.raw()` mit einem Objekt aufgerufen wird, dessen `raw`-Eigenschaft keine `length`-Eigenschaft oder eine nicht positive `length` hat, gibt die Methode einen leeren String `""` zurück. Wenn `substitutions.length < strings.raw.length - 1` gilt – also nicht genügend Ersetzungen für alle Platzhalter vorhanden sind, was bei einem wohlgeformten Template-Literal mit Tag nicht vorkommen kann –, werden die übrigen Platzhalter mit leeren Strings gefüllt.

## Beispiele

### String.raw() verwenden

```js
String.raw`Hi\n${2 + 3}!`;
// 'Hi\\n5!', the character after 'Hi'
// is not a newline character,
// '\' and 'n' are two characters.

String.raw`Hi\u000A!`;
// 'Hi\\u000A!', same here, this time we will get the
// \, u, 0, 0, 0, A, 6 characters.
// All kinds of escape characters will be ineffective
// and backslashes will be present in the output string.
// You can confirm this by checking the .length property
// of the string.

const name = "Bob";
String.raw`Hi\n${name}!`;
// 'Hi\\nBob!', substitutions are processed.
```

### Rohstrings mit Template-Literal-Syntax

`String.raw` ist eine Funktion und kann daher grundlegende Regeln der Template-Literal-Syntax nicht umgehen, etwa Backticks als Begrenzungszeichen und `${` für Ersetzungen. Wenn Sie diese Zeichen in den Ausgabestring aufnehmen möchten, müssen Sie sie mit Backslashes maskieren. Da `String.raw` jedoch Rohstrings ausgibt, bleiben die Backslashes in der Ausgabe erhalten.

```js
String.raw`Hi \${name}!`;
// 'Hi \\${name}!', the dollar sign is escaped; there's no interpolation.
// However, the backslash is still present in the output string.

String.raw`This is a backtick: \``;
// 'This is a backtick: \\`', the backslash is still present.

String.raw`A trailing backslash: \\`;
// 'A trailing backslash: \\\\', both backslashes are present.
// If you use a single backslash at the end, it escapes the ending backtick,
// causing subsequent code to be included in the string.
```

Sie können dies umgehen, indem Sie die Zeichen mithilfe einer Ersetzung einfügen.

```js
String.raw`Hi ${"$"}{name}!`;
// 'Hi ${name}!', the substitution inserts a single dollar sign.
String.raw`This is a backtick: ${"`"}`;
// 'This is a backtick: `', the substitution inserts a single backtick.
String.raw`A trailing backslash: ${"\\"}`;
// 'A trailing backslash: \\', the substitution inserts a single backslash.
```

Dieser Ansatz funktioniert bei `String.raw`, weil die Funktion lediglich die Rohstrings und die Ersetzungen verkettet. Im Allgemeinen gibt es leider keine Möglichkeit, dass eine Tag-Funktion für Template-Literale einen `raw`-String erhält, der nicht maskierte Template-Literal-Syntax enthält.

```js
function tag(strings) {
  console.log(strings.raw[0]); // This will never contain unescaped `${` or backticks
}
```

### String.raw mit RegExp verwenden

Wenn Sie ein `String.raw`-Template-Literal mit dem {{jsxref("RegExp/RegExp", "RegExp()")}}-Konstruktor kombinieren, können Sie reguläre Ausdrücke mit dynamischen Bestandteilen erstellen – was mit RegExp-Literalen nicht möglich ist –, ohne Escape-Sequenzen regulärer Ausdrücke doppelt maskieren (`\\`) zu müssen – was bei gewöhnlichen String-Literalen erforderlich wäre. Das ist auch bei Strings mit vielen Schrägstrichen nützlich, etwa Dateipfaden oder URLs.

```js
// A String.raw template allows a fairly readable regular expression matching a URL:
const reRawTemplate = new RegExp(
  String.raw`https://developer\.mozilla\.org/en-US/docs/Web/JavaScript/Reference/`,
);

// The same thing with a regexp literal looks like this, with \/ for
// each forward slash:
const reRegexpLiteral =
  /https:\/\/developer\.mozilla\.org\/en-US\/docs\/Web\/JavaScript\/Reference\//;

// And the same thing written with the RegExp constructor and a
// traditional string literal, with \\. for each period:
const reStringLiteral = new RegExp(
  "https://developer\\.mozilla\\.org/en-US/docs/Web/JavaScript/Reference/",
);

// String.raw also allows dynamic parts to be included
function makeURLRegExp(path) {
  return new RegExp(String.raw`https://developer\.mozilla\.org/${path}`);
}

const reDynamic = makeURLRegExp("en-US/docs/Web/JavaScript/Reference/");
const reWildcard = makeURLRegExp(".*");
```

### Ein Identity-Tag erstellen

Viele Werkzeuge behandeln Literale mit einem bestimmten Tag-Namen auf besondere Weise.

```js
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

Naheliegend wäre es, das Tag `html` so zu implementieren:

```js
const html = String.raw;
```

Für das obige Beispiel funktioniert das tatsächlich. Da `String.raw` jedoch die _rohen_ String-Literale statt der verarbeiteten („cooked“) verkettet, werden Escape-Sequenzen nicht verarbeitet.

```js-nolint
const doc = html`<canvas>\n</canvas>`;
// "<canvas>\\n</canvas>"
```

Für ein „echtes Identity-Tag“, das lediglich der Kennzeichnung dient und den Wert des Literals nicht verändert, ist das möglicherweise nicht erwünscht. In diesem Fall können Sie ein eigenes Tag erstellen und das verarbeitete („cooked“) Array des Literals – in dem Escape-Sequenzen bereits verarbeitet wurden – an `String.raw` übergeben, als wären die Strings darin Rohstrings.

```js-nolint
const html = (strings, ...values) => String.raw({ raw: strings }, ...values);
// Some formatters will format this literal's content as HTML
const doc = html`<canvas>\n</canvas>`;
// "<canvas>\n</canvas>"; the "\n" becomes a line break
```

Beachten Sie, dass das erste Argument ein Objekt mit einer `raw`-Eigenschaft ist. Deren Wert ist ein arrayähnliches Objekt (mit einer `length`-Eigenschaft und ganzzahligen Indizes), das die einzelnen Strings des Template-Literals enthält. Die übrigen Argumente sind die Ersetzungen. Da der Wert von `raw` ein beliebiges arrayähnliches Objekt sein kann, kann er sogar ein String sein! Beispielsweise wird `'test'` wie `['t', 'e', 's', 't']` behandelt. Das Folgende entspricht `` `t${0}e${1}s${2}t` ``:

```js
String.raw({ raw: "test" }, 0, 1, 2); // 't0e1s2t'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `String.raw` in `core-js`](https://core-js.io/docs/features/ecmascript/string-regexp)
- [es-shims-Polyfill für `String.raw`](https://www.npmjs.com/package/string.raw)
- [Template-Literale](/de/docs/Web/JavaScript/Reference/Template_literals)
- {{jsxref("String")}}
- [Lexikalische Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar)
