---
title: String.raw()
short-title: raw()
slug: Web/JavaScript/Reference/Global_Objects/String/raw
l10n:
  sourceCommit: 30d6cea0c01129b063f9dac2b269581e44bdb6f6
---

Die **`String.raw()`** statische Methode ist eine Tag-Funktion von [Template-Literalen](/de/docs/Web/JavaScript/Reference/Template_literals). Dies ähnelt dem `r` Präfix in Python oder dem `@` Präfix in C# für String-Literale. Sie wird verwendet, um die rohe String-Darstellung von Template-Literalen zu erhalten – das heißt, Ersetzungen (z.B. `${foo}`) werden verarbeitet, aber Escape-Sequenzen (z.B. `\n`) nicht.

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
  - : Gut geformtes Template-Literal-Array-Objekt, wie `{ raw: ['foo', 'bar', 'baz'] }`. Sollte ein Objekt mit einer `raw` Eigenschaft sein, dessen Wert ein array-ähnliches Objekt von Strings ist.
- `sub1`, …, `subN`
  - : Beinhaltet Ersetzungswerte.
- `templateString`
  - : Ein [Template-Literal](/de/docs/Web/JavaScript/Reference/Template_literals), optional mit Ersetzungen (`${...}`).

### Rückgabewert

Die rohe String-Darstellung eines gegebenen Template-Literals.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn das erste Argument keine `raw` Eigenschaft hat oder die `raw` Eigenschaft `undefined` oder `null` ist.

## Beschreibung

In den meisten Fällen wird `String.raw()` mit Template-Literalen verwendet. Die oben erwähnte erste Syntax wird nur selten genutzt, da die JavaScript-Engine dies für Sie mit den richtigen Argumenten aufruft (genau wie bei anderen [Tag-Funktionen](/de/docs/Web/JavaScript/Reference/Template_literals#tagged_templates)).

`String.raw()` ist der einzige eingebaute Template-Literal-Tag. Es hat enge semantische Ähnlichkeit mit einem nicht getaggten Literal, da es alle Argumente zusammenfügt und einen String zurückgibt. Sie können es sogar mit normalem JavaScript-Code neu implementieren.

> [!WARNING]
> Sie sollten `String.raw` nicht direkt als "Identitäts"-Tag verwenden. Siehe [Aufbau eines Identitäts-Tags](#aufbau_eines_identitäts-tags), um zu lernen, wie Sie dies umsetzen.

Wenn `String.raw()` mit einem Objekt aufgerufen wird, dessen `raw` Eigenschaft keine `length` Eigenschaft oder eine nicht positive `length` hat, wird ein leerer String `""` zurückgegeben. Wenn `substitutions.length < strings.raw.length - 1` (d.h. es gibt nicht genug Ersetzungen, um die Platzhalter zu füllen — was in einem gut geformten getaggten Template-Literal nicht passieren kann), werden die restlichen Platzhalter mit leeren Strings gefüllt.

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
```

### Rohe Strings, die Template-Literal-Syntax enthalten

`String.raw` ist eine Funktion, daher kann es die grundlegende Template-Literal-Syntax wie Backticks als Trennzeichen und `${` für Ersetzungen nicht umgehen. Wenn Sie diese Zeichen in den Ausgabestring einfügen möchten, müssen Sie sie mit Backslashes maskieren. Da `String.raw` jedoch rohe Strings ausgibt, werden die Backslashes in der Ausgabe beibehalten.

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

Um dieses Problem zu umgehen, können Sie eine Ersetzung verwenden, um diese Zeichen einzufügen.

```js
String.raw`Hi ${"$"}{name}!`;
// 'Hi ${name}!', the substitution inserts a single dollar sign.
String.raw`This is a backtick: ${"`"}`;
// 'This is a backtick: `', the substitution inserts a single backtick.
String.raw`A trailing backslash: ${"\\"}`;
// 'A trailing backslash: \\', the substitution inserts a single backslash.
```

Dieser Ansatz funktioniert für `String.raw`, weil es einfach die rohen Strings und die Ersetzungen zusammenfügt. Im Allgemeinen gibt es leider keine Möglichkeit für einen Template-Literal-Tag, einen `rohen` String zu erhalten, der nicht maskierte Template-Literal-Syntax enthält.

```js
function tag(strings) {
  console.log(strings.raw[0]); // This will never contain unescaped `${` or backticks
}
```

### Verwendung von String.raw mit RegExp

Kombinieren eines `String.raw` Template-Literals mit dem {{jsxref("RegExp/RegExp", "RegExp()")}} Konstruktor ermöglicht es Ihnen, reguläre Ausdrücke mit dynamischen Teilen zu erstellen (was mit Regex-Literalen nicht möglich ist), ohne reguläre Ausdrucks-Escape-Sequenzen doppelt zu maskieren (`\\`) (was mit normalen String-Literalen nicht möglich ist). Dies ist auch wertvoll in Strings, die viele Schrägstriche enthalten, wie Dateipfade oder URLs.

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

### Aufbau eines Identitäts-Tags

Viele Werkzeuge behandeln Literale, die mit einem bestimmten Namen getaggt sind, auf besondere Weise.

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

Man könnte naiv das `html` Tag so implementieren:

```js
const html = String.raw;
```

Dies funktioniert in der Tat für den oben genannten Fall. Da `String.raw` jedoch die _rohen_ String-Literale zusammenfügen würde, anstatt die "gekochten", würden Escape-Sequenzen nicht verarbeitet.

```js-nolint
const doc = html`<canvas>\n</canvas>`;
// "<canvas>\\n</canvas>"
```

Dies ist möglicherweise nicht das, was Sie bei einem "echten Identitäts"-Tag möchten, bei dem das Tag nur für Markup ist und den Wert des Literals nicht ändert. In diesem Fall können Sie ein benutzerdefiniertes Tag erstellen und das "gekochte" (d.h. Escape-Sequenzen werden verarbeitet) Literal-Array an `String.raw` übergeben, wobei Sie vorgeben, dass sie rohe Strings sind.

```js-nolint
const html = (strings, ...values) => String.raw({ raw: strings }, ...values);
// Some formatters will format this literal's content as HTML
const doc = html`<canvas>\n</canvas>`;
// "<canvas>\n</canvas>"; the "\n" becomes a line break
```

Beachten Sie, dass das erste Argument ein Objekt mit einer `raw` Eigenschaft ist, deren Wert ein array-ähnliches Objekt (mit einer `length` Eigenschaft und ganzzahligen Indizes) ist, das die getrennten Strings im Template-Literal darstellt. Die restlichen Argumente sind die Ersetzungen. Da der `raw` Wert jedes array-ähnliche Objekt sein kann, kann es sogar ein String sein! Zum Beispiel wird `'test'` als `['t', 'e', 's', 't']` behandelt. Das folgende ist äquivalent zu `` `t${0}e${1}s${2}t` ``:

```js
String.raw({ raw: "test" }, 0, 1, 2); // 't0e1s2t'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `String.raw` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [es-shims Polyfill von `String.raw`](https://www.npmjs.com/package/string.raw)
- [Template-Literale](/de/docs/Web/JavaScript/Reference/Template_literals)
- {{jsxref("String")}}
- [Lexikale Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar)
