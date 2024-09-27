---
title: String.raw()
slug: Web/JavaScript/Reference/Global_Objects/String/raw
l10n:
  sourceCommit: 88467d31d2ad7bdfade8b38ec69f6702fee080d1
---

{{JSRef}}

Die **`String.raw()`**-statische Methode ist eine Tag-Funktion von [Template-Literalen](/de/docs/Web/JavaScript/Reference/Template_literals). Dies ähnelt dem `r`-Präfix in Python oder dem `@`-Präfix in C# für Stringliterale. Sie wird verwendet, um die rohe Stringform von Template-Literalen zu erhalten — d.h. Substitutionen (z.B. `${foo}`) werden verarbeitet, aber Escape-Sequenzen (z.B. `\n`) nicht.

{{EmbedInteractiveExample("pages/js/string-raw.html")}}

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
  - : Wohlgeformtes Template-Literal-Array-Objekt, wie `{ raw: ['foo', 'bar', 'baz'] }`. Sollte ein Objekt mit einer `raw` Eigenschaft sein, dessen Wert ein array-ähnliches Objekt von Strings ist.
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

In den meisten Fällen wird `String.raw()` mit Template-Literalen verwendet. Die oben erwähnte erste Syntax wird nur selten verwendet, da die JavaScript-Engine dies mit den richtigen Argumenten für Sie aufrufen wird (wie bei anderen [Tag-Funktionen](/de/docs/Web/JavaScript/Reference/Template_literals#tagged_templates)).

`String.raw()` ist der einzige eingebaute Template-Literal-Tag. Es hat ähnliche Semantiken wie ein ungetaggtes Literal, da es alle Argumente zu einem String verkettet und zurückgibt. Sie können es sogar mit normalem JavaScript-Code neu implementieren.

> [!WARNING]
> Sie sollten `String.raw` nicht direkt als "Identitäts"-Tag verwenden. Siehe [Erstellung eines Identitätstags](#erstellung_eines_identitätstags) für die Implementierung.

Wenn `String.raw()` mit einem Objekt aufgerufen wird, dessen `raw`-Eigenschaft keine `length`-Eigenschaft oder eine nicht-positive `length` hat, gibt es einen leeren String `""` zurück. Wenn `substitutions.length < strings.raw.length - 1` (d.h. es gibt nicht genügend Substitutionen, um die Platzhalter zu füllen — was in einem wohlgeformten getaggten Template-Literal nicht passieren kann), werden die restlichen Platzhalter mit leeren Strings gefüllt.

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

Die Kombination eines `String.raw`-Template-Literals mit dem {{jsxref("RegExp/RegExp", "RegExp()")}}-Konstruktor erlaubt es Ihnen,
reguläre Ausdrücke mit dynamischen Teilen zu erstellen (was mit Regex-Literalen nicht möglich ist), ohne dass reguläre Ausdrucks-Escape-Sequenzen doppelt umgangen werden müssen (`\\`) (was mit normalen String-Literalen nicht möglich ist). Dies ist auch wertvoll in Strings, die viele Schrägstriche enthalten, wie Dateipfade oder URLs.

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

### Erstellung eines Identitätstags

Viele Werkzeuge behandeln Literale, die mit einem bestimmten Namen getaggt sind, besonders.

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

Man könnte naiverweise den `html`-Tag so implementieren:

```js
const html = String.raw;
```

Dies funktioniert tatsächlich für den oben genannten Fall. Da `String.raw` jedoch die _rohen_ String-Literale anstelle der "gekochten" zusammenfügt, werden Escape-Sequenzen nicht verarbeitet.

```js-nolint
const doc = html`<canvas>\n</canvas>`;
// "<canvas>\\n</canvas>"
```

Dies ist möglicherweise nicht das, was Sie für einen "wahren Identitäts"-Tag möchten, bei dem der Tag rein zur Markierung dient und den Wert des Literals nicht ändert. In diesem Fall können Sie einen benutzerdefinierten Tag erstellen und das "gekochte" (d.h. Escape-Sequenzen sind verarbeitet) Literal-Array an `String.raw` übergeben, wobei sie so tun, als seien sie rohe Strings.

```js-nolint
const html = (strings, ...values) => String.raw({ raw: strings }, ...values);
// Some formatters will format this literal's content as HTML
const doc = html`<canvas>\n</canvas>`;
// "<canvas>\n</canvas>"; the "\n" becomes a line break
```

Beachten Sie, dass das erste Argument ein Objekt mit einer `raw`-Eigenschaft ist, dessen Wert ein array-ähnliches Objekt ist (mit einer `length`-Eigenschaft und ganzzahligen Indizes), das die getrennten Strings im Template-Literal darstellt. Die restlichen Argumente sind die Substitutionen. Da der `raw`-Wert jedes array-ähnliche Objekt sein kann, kann es sogar ein String sein! Zum Beispiel wird `'test'` als `['t', 'e', 's', 't']` behandelt. Folgendes entspricht `` `t${0}e${1}s${2}t` ``:

```js
String.raw({ raw: "test" }, 0, 1, 2); // 't0e1s2t'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `String.raw` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [Template-Literale](/de/docs/Web/JavaScript/Reference/Template_literals)
- {{jsxref("String")}}
- [Lexikalische Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar)
