---
title: String.raw()
slug: Web/JavaScript/Reference/Global_Objects/String/raw
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die statische Methode **`String.raw()`** ist eine Tag-Funktion von [Template-Strings](/de/docs/Web/JavaScript/Reference/Template_literals). Sie ist ähnlich dem Präfix `r` in Python oder dem Präfix `@` in C# für String-Literale. Sie wird verwendet, um die rohe String-Form von Template-Strings zu erhalten — das heißt, Substitutionen (z. B. `${foo}`) werden verarbeitet, aber Escape-Sequenzen (z. B. `\n`) nicht.

{{InteractiveExample("JavaScript Demo: String.raw()")}}

```js interactive-example
// Create a variable that uses a Windows
// path without escaping the backslashes:
const filePath = String.raw`C:\Development\profile\aboutme.html`;

console.log(`The file was uploaded from: ${filePath}`);
// Expected output: "The file was uploaded from: C:\Development\profile\aboutme.html"
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
  - : Gut geformtes Template-Literal-Array-Objekt, wie `{ raw: ['foo', 'bar', 'baz'] }`. Es sollte ein Objekt mit einer `raw`-Eigenschaft sein, deren Wert ein array-ähnliches Objekt von Strings ist.
- `sub1`, …, `subN`
  - : Enthält Substitutionswerte.
- `templateString`
  - : Ein [Template-String](/de/docs/Web/JavaScript/Reference/Template_literals), optional mit Substitutionen (`${...}`).

### Rückgabewert

Die rohe String-Form eines gegebenen Template-Literals.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn das erste Argument keine `raw`-Eigenschaft besitzt oder die `raw`-Eigenschaft `undefined` oder `null` ist.

## Beschreibung

In den meisten Fällen wird `String.raw()` mit Template-Strings verwendet. Die oben erwähnte erste Syntax wird nur selten genutzt, da die JavaScript-Engine dies mit den richtigen Argumenten für Sie aufruft (genauso wie bei anderen [Tag-Funktionen](/de/docs/Web/JavaScript/Reference/Template_literals#tagged_templates)).

`String.raw()` ist der einzige eingebettete Template-Literal-Tag. Es hat ähnliche Semantik wie ein ungetaggter Literal, da es alle Argumente verkettet und einen String zurückgibt. Sie können es sogar mit normalem JavaScript-Code neu implementieren.

> [!WARNING]
> Sie sollten `String.raw` nicht direkt als "Identitäts"-Tag verwenden. Sehen Sie sich [Erstellung eines Identitäts-Tags](#erstellung_eines_identitäts-tags) an, um zu erfahren, wie Sie dies implementieren können.

Wenn `String.raw()` mit einem Objekt aufgerufen wird, dessen `raw`-Eigenschaft keine `length`-Eigenschaft oder eine nicht-positive `length` hat, gibt es einen leeren String `""` zurück. Wenn `substitutions.length < strings.raw.length - 1` (d. h., es gibt nicht genügend Substitutionen, um die Platzhalter zu füllen — was bei einem gut geformten getaggten Template-Literal nicht vorkommen kann), werden die restlichen Platzhalter mit leeren Strings gefüllt.

## Beispiele

### Verwendung von String.raw()

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

String.raw`Hi \${name}!`;
// 'Hi \\${name}!', the dollar sign is escaped; there's no interpolation.
```

### Verwendung von String.raw mit RegExp

Die Kombination eines `String.raw`-Template-Strings mit dem {{jsxref("RegExp/RegExp", "RegExp()")}}-Konstruktor ermöglicht es Ihnen, reguläre Ausdrücke mit dynamischen Teilen zu erstellen (was mit regulären Ausdrücksliteralen nicht möglich ist), ohne reguläre Ausdrucks-Escape-Sequenzen (`\\`) doppelt zu escapen (was mit normalen String-Literalen nicht möglich ist). Dies ist auch nützlich bei Strings, die viele Schrägstriche enthalten, wie Dateipfade oder URLs.

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

### Erstellung eines Identitäts-Tags

Viele Werkzeuge behandeln Literale, die durch einen bestimmten Namen getaggt sind, speziell.

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

Man könnte naiver Weise den `html`-Tag folgendermaßen implementieren:

```js
const html = String.raw;
```

Das funktioniert tatsächlich für den oben genannten Fall. Da `String.raw` jedoch die _rohen_ String-Literale anstelle der "gekochten" Literale verkettet, werden Escape-Sequenzen nicht verarbeitet.

```js-nolint
const doc = html`<canvas>\n</canvas>`;
// "<canvas>\\n</canvas>"
```

Dies ist möglicherweise nicht das, was Sie für einen "wahren Identitäts"-Tag wollen, bei dem das Tag rein für das Markup gedacht ist und den Wert des Literals nicht verändert. In diesem Fall können Sie einen benutzerdefinierten Tag erstellen und das "gekochte" (d. h. Escape-Sequenzen werden verarbeitet) Literal-Array an `String.raw` übergeben, indem Sie vortäuschen, dass es rohe Strings sind.

```js-nolint
const html = (strings, ...values) => String.raw({ raw: strings }, ...values);
// Some formatters will format this literal's content as HTML
const doc = html`<canvas>\n</canvas>`;
// "<canvas>\n</canvas>"; the "\n" becomes a line break
```

Beachten Sie, dass das erste Argument ein Objekt mit einer `raw`-Eigenschaft ist, deren Wert ein array-ähnliches Objekt darstellt (mit einer `length`-Eigenschaft und ganzzahligen Indizes), das die getrennten Strings im Template-String repräsentiert. Die restlichen Argumente sind die Substitutionen. Da der `raw`-Wert jedes array-ähnliche Objekt sein kann, kann er sogar ein String sein! Zum Beispiel wird `'test'` wie `['t', 'e', 's', 't']` behandelt. Folgendes entspricht `` `t${0}e${1}s${2}t` ``:

```js
String.raw({ raw: "test" }, 0, 1, 2); // 't0e1s2t'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `String.raw` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [Template-Strings](/de/docs/Web/JavaScript/Reference/Template_literals)
- {{jsxref("String")}}
- [Lexikalische Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar)
