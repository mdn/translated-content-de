---
title: String.raw()
short-title: raw()
slug: Web/JavaScript/Reference/Global_Objects/String/raw
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`String.raw()`** statische Methode ist eine Tag-Funktion von [Template-Literalen](/de/docs/Web/JavaScript/Reference/Template_literals). Dies ist ähnlich dem `r` Präfix in Python oder dem `@` Präfix in C# für Zeichenfolgenliterale. Sie wird verwendet, um die ungefilterte Zeichenfolgenform von Template-Literalen zu erhalten — das heißt, Ersetzungen (z.B. `${foo}`) werden verarbeitet, aber Escape-Sequenzen (z.B. `\n`) nicht.

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
  - : Wohlgeformtes Template-Literal-Array-Objekt, wie `{ raw: ['foo', 'bar', 'baz'] }`. Sollte ein Objekt mit einer `raw`-Eigenschaft sein, dessen Wert ein array-ähnliches Objekt von Zeichenfolgen ist.
- `sub1`, …, `subN`
  - : Enthält Ersatzwerte.
- `templateString`
  - : Ein [Template-Literal](/de/docs/Web/JavaScript/Reference/Template_literals), optional mit Ersetzungen (`${...}`).

### Rückgabewert

Die ungefilterte Zeichenfolgenform eines gegebenen Template-Literals.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn das erste Argument keine `raw`-Eigenschaft hat oder die `raw`-Eigenschaft `undefined` oder `null` ist.

## Beschreibung

In den meisten Fällen wird `String.raw()` mit Template-Literalen verwendet. Die oben genannte erste Syntax wird nur selten verwendet, weil die JavaScript-Engine dies mit den richtigen Argumenten für Sie aufruft (genau wie bei anderen [Tag-Funktionen](/de/docs/Web/JavaScript/Reference/Template_literals#tagged_templates)).

`String.raw()` ist der einzige eingebaute Template-Literal-Tag. Es hat nahe Semantik zu einem nicht getaggten Literal, da es alle Argumente zusammenfügt und eine Zeichenfolge zurückgibt. Sie können es sogar mit normalem JavaScript-Code neu implementieren.

> [!WARNING]
> Sie sollten `String.raw` nicht direkt als "Identitäts"-Tag verwenden. Siehe [Erstellen eines Identitätstags](#erstellen_eines_identitätstags) für eine Implementierungsanleitung.

Wenn `String.raw()` mit einem Objekt aufgerufen wird, dessen `raw`-Eigenschaft keine `length`-Eigenschaft hat oder eine nicht positive `length`, wird ein leerer String `""` zurückgegeben. Wenn `substitutions.length < strings.raw.length - 1` (d.h. es gibt nicht genügend Ersetzungen, um die Platzhalter zu füllen — was in einem wohlgeformten getaggten Template-Literal nicht passieren kann), werden die restlichen Platzhalter mit leeren Zeichenfolgen gefüllt.

## Beispiele

### Verwenden von String.raw()

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

### Verwenden von String.raw mit RegExp

Das Kombinieren eines `String.raw` Template-Literals mit dem {{jsxref("RegExp/RegExp", "RegExp()")}} Konstruktor ermöglicht Ihnen die Erstellung regulärer Ausdrücke mit dynamischen Teilen (was mit RegEx-Literalen nicht möglich ist), ohne dass Sie reguläre Ausdruck Escape-Sequenzen doppelt maskieren müssen (`\\`) (was mit normalen Zeichenfolgenliteralen nicht möglich ist). Dies ist auch wertvoll in Zeichenfolgen, die viele Schrägstriche enthalten, wie Dateipfade oder URLs.

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

### Erstellen eines Identitätstags

Viele Werkzeuge behandeln Literale, die durch einen bestimmten Namen gekennzeichnet sind, besonders.

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

Man könnte naiv das `html`-Tag wie folgt implementieren:

```js
const html = String.raw;
```

Dies funktioniert tatsächlich im obigen Fall. Da `String.raw` jedoch die _rohen_ Zeichenfolgenliterale statt der "gekochten" zusammenfügt, würden Escape-Sequenzen nicht verarbeitet.

```js-nolint
const doc = html`<canvas>\n</canvas>`;
// "<canvas>\\n</canvas>"
```

Dies entspricht möglicherweise nicht dem gewünschten Ergebnis für ein "echtes Identitäts"-Tag, bei dem das Tag rein zur Markierung verwendet wird und den Wert des Literals nicht ändert. In diesem Fall können Sie ein benutzerdefiniertes Tag erstellen und das "gekochte" (d.h. Escape-Sequenzen sind verarbeitet) Literalar zu `String.raw` übergeben, so tun, als wären sie rohe Zeichenfolgen.

```js-nolint
const html = (strings, ...values) => String.raw({ raw: strings }, ...values);
// Some formatters will format this literal's content as HTML
const doc = html`<canvas>\n</canvas>`;
// "<canvas>\n</canvas>"; the "\n" becomes a line break
```

Beachten Sie, dass das erste Argument ein Objekt mit einer `raw`-Eigenschaft ist, dessen Wert ein array-ähnliches Objekt (mit einer `length`-Eigenschaft und ganzzahligen Indizes) darstellt, welches die getrennten Zeichenfolgen im Template Literal darstellt. Die restlichen Argumente sind die Ersetzungen. Da der `raw`-Wert ein array-ähnliches Objekt sein kann, kann er sogar eine Zeichenfolge sein! Beispielsweise wird `'test'` als `['t', 'e', 's', 't']` behandelt. Folgendes ist gleichbedeutend mit `` `t${0}e${1}s${2}t` ``:

```js
String.raw({ raw: "test" }, 0, 1, 2); // 't0e1s2t'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `String.raw` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [es-shims polyfill von `String.raw`](https://www.npmjs.com/package/string.raw)
- [Template-Literale](/de/docs/Web/JavaScript/Reference/Template_literals)
- {{jsxref("String")}}
- [Lexikalische Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar)
