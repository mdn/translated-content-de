---
title: String.raw()
slug: Web/JavaScript/Reference/Global_Objects/String/raw
l10n:
  sourceCommit: 5f196157779961a38236b925d916992ba4cdb730
---

{{JSRef}}

Die statische Methode **`String.raw()`** ist eine Tag-Funktion von [Template-Literalen](/de/docs/Web/JavaScript/Reference/Template_literals). Sie ist ähnlich wie der `r`-Präfix in Python oder der `@`-Präfix in C# für String-Literale. Sie wird verwendet, um die rohe String-Form von Template-Literalen zu erhalten – das heißt, Substitutionen (z. B. `${foo}`) werden verarbeitet, aber Escape-Sequenzen (z. B. `\n`) werden nicht verarbeitet.

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
  - : Wohlgeformtes Template-Literal-Array-Objekt, wie `{ raw: ['foo', 'bar', 'baz'] }`. Es sollte sich um ein Objekt mit einer `raw`-Eigenschaft handeln, deren Wert ein array-ähnliches Objekt von Strings ist.
- `sub1`, …, `subN`
  - : Enthält Substitutionswerte.
- `templateString`
  - : Ein [Template-Literal](/de/docs/Web/JavaScript/Reference/Template_literals), optional mit Substitutionen (`${...}`).

### Rückgabewert

Die rohe String-Form eines gegebenen Template-Literals.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn das erste Argument keine `raw`-Eigenschaft hat oder die `raw`-Eigenschaft `undefined` oder `null` ist.

## Beschreibung

In den meisten Fällen wird `String.raw()` mit Template-Literalen verwendet. Die oben erwähnte erste Syntax wird nur selten genutzt, da die JavaScript-Engine dies mit den richtigen Argumenten für Sie aufruft (genauso wie bei anderen [Tag-Funktionen](/de/docs/Web/JavaScript/Reference/Template_literals#tagged_templates)).

`String.raw()` ist der einzige eingebaute Template-Literal-Tag. Es hat eine enge Semantik zu einem nicht getaggten Literal, da es alle Argumente verkettet und einen String zurückgibt. Sie können es sogar mit normalem JavaScript-Code neu implementieren.

> [!WARNING]
> Sie sollten `String.raw` nicht direkt als Tag zur "Identität" verwenden. Siehe [Erstellen eines Identitätstages](#erstellen_eines_identitätstages) für die Implementierung.

Wenn `String.raw()` mit einem Objekt aufgerufen wird, dessen `raw`-Eigenschaft keine `length`-Eigenschaft oder eine nicht positive `length` besitzt, wird ein leerer String `""` zurückgegeben. Wenn `substitutions.length < strings.raw.length - 1` (d. h., es gibt nicht genügend Substitutionen, um die Platzhalter zu füllen – was in einem gut geformten getaggten Template-Literal nicht passieren kann), werden die restlichen Platzhalter mit leeren Strings gefüllt.

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

Die Kombination eines `String.raw`-Template-Literals mit dem {{jsxref("RegExp/RegExp", "RegExp()")}}-Konstruktor ermöglicht es, reguläre Ausdrücke mit dynamischen Teilen zu erstellen (was mit Regex-Literalen nicht möglich ist), ohne reguläre Ausdrucks-Escape-Sequenzen doppelt zu maskieren (`\\`) (was mit normalen String-Literalen nicht möglich ist). Dies ist auch bei Strings mit vielen Schrägstrichen, wie Dateipfaden oder URLs, wertvoll.

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

### Erstellen eines Identitätstages

Viele Tools behandeln Literale, die mit einem bestimmten Namen getaggt wurden, auf besondere Weise.

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

Man könnte naiv den `html`-Tag folgendermaßen implementieren:

```js
const html = String.raw;
```

Dies funktioniert tatsächlich für den obigen Fall. Da `String.raw` jedoch die _rohen_ String-Literale statt der "gekochten" zusammenfügt, würden Escape-Sequenzen nicht verarbeitet.

```js-nolint
const doc = html`<canvas>\n</canvas>`;
// "<canvas>\\n</canvas>"
```

Dies ist möglicherweise nicht das, was Sie für einen "echten Identitäts"-Tag möchten, bei dem der Tag rein zur Markierung dient und den Wert des Literals nicht verändert. In diesem Fall können Sie einen benutzerdefinierten Tag erstellen und das "gekochte" (d. h. Escape-Sequenzen werden verarbeitet) Literal-Array an `String.raw` übergeben, wobei Sie vortäuschen, dass sie rohe Strings sind.

```js-nolint
const html = (strings, ...values) => String.raw({ raw: strings }, ...values);
// Some formatters will format this literal's content as HTML
const doc = html`<canvas>\n</canvas>`;
// "<canvas>\n</canvas>"; the "\n" becomes a line break
```

Beachten Sie, dass das erste Argument ein Objekt mit einer `raw`-Eigenschaft ist, dessen Wert ein array-ähnliches Objekt (mit einer `length`-Eigenschaft und ganzzahligen Indizes) darstellt, das die getrennten Strings im Template-Literal repräsentiert. Die restlichen Argumente sind die Substitutionen. Da der `raw`-Wert jedes array-ähnliche Objekt sein kann, kann es sogar ein String sein! Zum Beispiel wird `'test'` als `['t', 'e', 's', 't']` behandelt. Folgendes ist äquivalent zu `` `t${0}e${1}s${2}t` ``:

```js
String.raw({ raw: "test" }, 0, 1, 2); // 't0e1s2t'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `String.raw` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [Template-Literale](/de/docs/Web/JavaScript/Reference/Template_literals)
- {{jsxref("String")}}
- [Lexikalische Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar)
