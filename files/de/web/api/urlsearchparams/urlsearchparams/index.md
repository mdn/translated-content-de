---
title: "URLSearchParams: URLSearchParams() Konstruktor"
short-title: URLSearchParams()
slug: Web/API/URLSearchParams/URLSearchParams
l10n:
  sourceCommit: f336c5b6795a562c64fe859aa9ee2becf223ad8a
---

{{ApiRef("URL API")}} {{AvailableInWorkers}}

Der **`URLSearchParams()`** Konstruktor erstellt und gibt ein neues [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)-Objekt zurück.

## Syntax

```js-nolint
new URLSearchParams()
new URLSearchParams(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Eine der folgenden Möglichkeiten:
    - Ein String, der aus dem `application/x-www-form-urlencoded`-Format geparst wird. Ein führendes `'?'`-Zeichen wird ignoriert. Dies ist die einzige Form, die das {{Glossary("Percent-encoding", "Prozent-Codierung")}} dekodiert und `+` in U+0020 SPACE dekodiert.
    - Eine buchstäbliche Sequenz von Name-Wert-String-Paaren oder ein beliebiges Objekt – wie ein [`FormData`](/de/docs/Web/API/FormData)-Objekt – mit einem [Iterator](/de/docs/Web/JavaScript/Guide/Iterators_and_generators#iterators), der eine Sequenz von String-Paaren erzeugt. Beachten Sie, dass [`File`](/de/docs/Web/API/File)-Einträge als `[object File]` und nicht als ihr Dateiname serialisiert werden (wie in einem `application/x-www-form-urlencoded` Formular).
    - Ein Record mit String-Schlüsseln und String-Werten. Beachten Sie, dass Verschachtelung nicht unterstützt wird.

### Rückgabewert

Eine [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)-Objektinstanz.

## Beispiele

Das folgende Beispiel zeigt, wie ein [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)-Objekt aus verschiedenen Eingaben erstellt wird.

```js
// Retrieve params via url.search, passed into constructor
const url = new URL("https://example.com?foo=1&bar=2");
const params1 = new URLSearchParams(url.search);

// Get the URLSearchParams object directly from a URL object
const params1a = url.searchParams;

// Pass in a string literal
const params2 = new URLSearchParams("foo=1&bar=2");
const params2a = new URLSearchParams("?foo=1&bar=2");

// Pass in a sequence of pairs
const params3 = new URLSearchParams([
  ["foo", "1"],
  ["bar", "2"],
]);

// Pass in a record
const params4 = new URLSearchParams({ foo: "1", bar: "2" });
```

Dieses Beispiel zeigt, wie eine neue URL mit einem Objekt von Suchparametern aus einer vorhandenen URL, die Suchparameter enthält, erstellt wird.

```js
const url = new URL("https://example.com/?a=hello&b=world");

console.log(url.href);
// https://example.com/?a=hello&b=world

console.log(url.origin);
// https://example.com

const addParams = {
  c: "a",
  d: 2,
  e: false,
};

const newParams = new URLSearchParams([
  ...Array.from(url.searchParams.entries()), // [["a","hello"],["b","world"]]
  ...Object.entries(addParams), // [["c","a"],["d",2],["e",false]]
]).toString();
console.log(newParams);
// a=hello&b=world&c=a&d=2&e=false

const newURL = new URL(`${url.origin}${url.pathname}?${newParams}`);

console.log(newURL.href);
// https://example.com/?a=hello&b=world&c=a&d=2&e=false

// Here it is as a function that accepts (URL, Record<string, string>)
const addSearchParams = (url, params = {}) =>
  new URL(
    `${url.origin}${url.pathname}?${new URLSearchParams([
      ...Array.from(url.searchParams.entries()),
      ...Object.entries(params),
    ])}`,
  );
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
