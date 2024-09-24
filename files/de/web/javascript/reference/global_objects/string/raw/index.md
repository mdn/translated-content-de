---
title: String.raw()
slug: Web/JavaScript/Reference/Global_Objects/String/raw
l10n:
  sourceCommit: 88467d31d2ad7bdfade8b38ec69f6702fee080d1
---

{{JSRef}}

Die statische Methode **`String.raw()`** ist eine Tag-Funktion von [Template-Literalen](/de/docs/Web/JavaScript/Reference/Template_literals). Dies ist ähnlich dem `r` Präfix in Python oder dem `@` Präfix in C# für String-Literale. Sie wird verwendet, um die rohe String-Form von Template-Literalen zu erhalten – das heißt, Ersetzungen (z. B. `${foo}`) werden verarbeitet, aber Escape-Sequenzen (z. B. `\n`) nicht.

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
  - : Gut gebildetes Template-Literal-Array-Objekt, wie `{ raw: ['foo', 'bar', 'baz'] }`. Sollte ein Objekt mit einer `raw` Eigenschaft sein, deren Wert ein array-ähnliches Objekt von Strings ist.
- `sub1`, …, `subN`
  - : Enthält Ersetzungswerte.
- `templateString`
  - : Ein [Template-Literal](/de/docs/Web/JavaScript/Reference/Template_literals), optional mit Ersetzungen (`${...}`).

### Rückgabewert

Die rohe String-Form eines gegebenen Template-Literals.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn das erste Argument keine `raw` Eigenschaft hat oder die `raw` Eigenschaft `undefined` oder `null` ist.

## Beschreibung

In den meisten Fällen wird `String.raw()` mit Template-Literalen verwendet. Die oben erwähnte erste Syntax wird nur selten benutzt, weil die JavaScript-Engine dies mit den richtigen Argumenten für Sie aufrufen wird (genau wie bei anderen [Tag-Funktionen](/de/docs/Web/JavaScript/Reference/Template_literals#tagged_templates)).

`String.raw()` ist der einzige eingebaute Template-Literal-Tag. Es hat ähnlich Semantik wie ein ungetaggtes Literal, da es alle Argumente zusammenfügt und einen String zurückgibt. Man kann es sogar mit normalem JavaScript-Code neu implementieren.

> [!WARNING]
> Sie sollten `String.raw` nicht direkt als "Identitätstag" verwenden. Sehen Sie [Erstellen eines Identitätstags](#erstellen_eines_identitätstags) für die Implementierung.

Wenn `String.raw()` mit einem Objekt aufgerufen wird, dessen `raw` Eigenschaft keine `length` Eigenschaft hat oder eine nicht-positive `length`, gibt es einen leeren String `""` zurück. Wenn `substitutions.length < strings.raw.length - 1` (d.h. es gibt nicht genug Ersetzungen, um die Platzhalter zu füllen – was in einem gut geformten getaggten Template-Literal nicht passieren kann), werden die restlichen Platzhalter mit leeren Strings gefüllt.

## Beispiele

### Verwendung von String.raw()

```js
String.raw`Hi\n${2 + 3}!`;
// 'Hi\\n5!', das Zeichen nach 'Hi'
// ist kein neue Zeilenzeichen,
// '\' und 'n' sind zwei Zeichen.

String.raw`Hi\u000A!`;
// 'Hi\\u000A!', hier ebenfalls, diesmal erhalten wir die
// \, u, 0, 0, 0, A, 6 Zeichen.
// Alle Arten von Escape-Zeichen werden unwirksam sein
// und Backslashes werden im Ausgabestring vorhanden sein.
// Sie können dies bestätigen, indem Sie die .length Eigenschaft
// des Strings überprüfen.

const name = "Bob";
String.raw`Hi\n${name}!`;
// 'Hi\\nBob!', Ersetzungen werden verarbeitet.

String.raw`Hi \${name}!`;
// 'Hi \\${name}!', das Dollarzeichen ist maskiert; es gibt keine Interpolation.
```

### Verwendung von String.raw mit RegExp

Die Kombination eines `String.raw` Template-Literals mit dem {{jsxref("RegExp/RegExp", "RegExp()")}} Konstruktor ermöglicht es Ihnen, reguläre Ausdrücke mit dynamischen Teilen zu erstellen (was mit regulären Ausdrucks-Literalen nicht möglich ist) ohne reguläre Ausdrucks-Escape-Sequenzen doppelt zu maskieren (`\\`) (was mit normalen String-Literalen nicht möglich ist). Dies ist auch wertvoll in Strings, die viele Schrägstriche enthalten, wie Dateipfade oder URLs.

```js
// Ein String.raw-Template ermöglicht einen recht gut lesbaren regulären Ausdruck zum Abgleichen einer URL:
const reRawTemplate = new RegExp(
  String.raw`https://developer\.mozilla\.org/de/docs/Web/JavaScript/Reference/`,
);

// Das gleiche mit einem RegExp-Literal sieht so aus, mit \/ für
// jeden Schrägstrich:
const reRegexpLiteral =
  /https:\/\/developer\.mozilla\.org\/en-US\/docs\/Web\/JavaScript\/Reference\//;

// Und das gleiche geschrieben mit dem RegExp-Konstruktor und einem
// traditionellen String-Literal, mit \\. für jeden Punkt:
const reStringLiteral = new RegExp(
  "https://developer\\.mozilla\\.org/de/docs/Web/JavaScript/Reference/",
);

// String.raw ermöglicht auch dynamische Teile
function makeURLRegExp(path) {
  return new RegExp(String.raw`https://developer\.mozilla\.org/${path}`);
}

const reDynamic = makeURLRegExp("en-US/docs/Web/JavaScript/Reference/");
const reWildcard = makeURLRegExp(".*");
```

### Erstellen eines Identitätstags

Viele Werkzeuge behandeln Literale, die mit einem bestimmten Namen getaggt sind, speziell.

```js
// Einige Formatierer formatieren den Inhalt dieses Literals als HTML
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

Man könnte das `html` Tag naiv implementieren als:

```js
const html = String.raw;
```

Dies funktioniert tatsächlich für den obigen Fall. Da jedoch `String.raw` die _rohen_ String-Literale anstatt der "gekochten" zusammenfügen würde, würden Escape-Sequenzen nicht verarbeitet.

```js-nolint
const doc = html`<canvas>\n</canvas>`;
// "<canvas>\\n</canvas>"
```

Dies ist möglicherweise nicht das, was Sie für einen "wahren Identitätstag" wollen, wo das Tag ausschließlich für Markup gedacht ist und den Wert des Literals nicht ändert. In diesem Fall können Sie ein benutzerdefiniertes Tag erstellen und das "gekochte" (d.h. Escape-Sequenzen werden verarbeitet) Literal-Array an `String.raw` übergeben, als ob sie rohe Strings wären.

```js-nolint
const html = (strings, ...values) => String.raw({ raw: strings }, ...values);
// Einige Formatierer formatieren den Inhalt dieses Literals als HTML
const doc = html`<canvas>\n</canvas>`;
// "<canvas>\n</canvas>"; das "\n" wird zu einem Zeilenumbruch
```

Beachten Sie, dass das erste Argument ein Objekt mit einer `raw` Eigenschaft ist, deren Wert ein array-ähnliches Objekt (mit einer `length` Eigenschaft und ganzzahligen Indizes) ist, das die getrennten Strings im Template-Literal darstellt. Die restlichen Argumente sind die Ersetzungen. Da der `raw` Wert jedes array-ähnliche Objekt sein kann, kann es sogar ein String sein! Zum Beispiel wird `'test'` als `['t', 'e', 's', 't']` behandelt. Das Folgende ist gleichbedeutend mit `` `t${0}e${1}s${2}t` ``:

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
