---
title: "URLSearchParams: URLSearchParams() Konstruktor"
short-title: URLSearchParams()
slug: Web/API/URLSearchParams/URLSearchParams
l10n:
  sourceCommit: 2c0f972d873ea2db5163dbcb12987847124751ad
---

{{ApiRef("URL API")}} {{AvailableInWorkers}}

Der **`URLSearchParams()`**-Konstruktor erstellt und gibt ein neues [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)-Objekt zurück.

## Syntax

```js-nolint
new URLSearchParams()
new URLSearchParams(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Eine der folgenden Optionen:
    - Ein String, der aus dem Format `application/x-www-form-urlencoded` geparst wird. Ein führendes `'?'`-Zeichen wird ignoriert. Dies ist die einzige Form, die das {{Glossary("Percent-encoding", "Prozent-Codierung")}} dekodiert und `+` in U+0020 SPACE umwandelt.
    - Eine wörtliche Sequenz von Name-Wert-Paaren als String oder ein beliebiges Objekt — wie ein [`FormData`](/de/docs/Web/API/FormData)-Objekt — mit einem [Iterator](/de/docs/Web/JavaScript/Guide/Iterators_and_generators#iterators), der eine Sequenz von String-Paaren erzeugt. Beachten Sie, dass [`File`](/de/docs/Web/API/File)-Einträge als `[object File]` serialisiert werden, anstatt als ihr Dateiname (wie in einem `application/x-www-form-urlencoded`-Formular).
    - Ein Datensatz von String-Schlüsseln und String-Werten. Beachten Sie, dass Verschachtelung nicht unterstützt wird.

### Rückgabewert

Eine Instanz des [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)-Objekts.

## Beispiele

Das folgende Beispiel zeigt, wie man ein [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)-Objekt aus verschiedenen Eingaben erstellt.

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

Dieses Beispiel zeigt, wie man eine neue URL mit einem Objekt von Suchparametern aus einer bestehenden URL erstellt, die Suchparameter enthält.

```js
const url = new URL("https://example.com/?a=hello&b=world");

console.log(url.href);
// https://example.com/?a=hello&b=world

console.log(url.origin);
// https://example.com

const add_params = {
  c: "a",
  d: 2,
  e: false,
};

const new_params = new URLSearchParams([
  ...Array.from(url.searchParams.entries()), // [["a","hello"],["b","world"]]
  ...Object.entries(add_params), // [["c","a"],["d",2],["e",false]]
]).toString();
console.log(new_params);
// a=hello&b=world&c=a&d=2&e=false

const new_url = new URL(`${url.origin}${url.pathname}?${new_params}`);

console.log(new_url.href);
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
