---
title: "URLSearchParams: URLSearchParams() Konstruktor"
short-title: URLSearchParams()
slug: Web/API/URLSearchParams/URLSearchParams
l10n:
  sourceCommit: bfe3107430ad0646713b57262e02625a2e155fd4
---

{{ApiRef("URL API")}} {{AvailableInWorkers}}

Der **`URLSearchParams()`** Konstruktor erstellt und gibt ein
neues [`URLSearchParams`](/de/docs/Web/API/URLSearchParams) Objekt zurück.

## Syntax

```js-nolint
new URLSearchParams()
new URLSearchParams(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Eine der folgenden Möglichkeiten:
    - Ein String, der aus dem Format `application/x-www-form-urlencoded` geparst wird. Ein führendes `'?'` Zeichen wird ignoriert. Dies ist die einzige Form, die {{Glossary("Percent-encoding", "percent-encoding")}} dekodiert und `+` zu U+0020 SPACE dekodiert.
    - Eine literale Folge von Namen-Wert-Paaren als String oder eines beliebigen Objekts — wie ein [`FormData`](/de/docs/Web/API/FormData) Objekt — mit einem [Iterator](/de/docs/Web/JavaScript/Guide/Iterators_and_generators#iterators), der eine Sequenz von String-Paaren erzeugt. Beachten Sie, dass [`File`](/de/docs/Web/API/File) Einträge als `[object File]` und nicht als ihr Dateiname serialisiert werden (wie bei einem `application/x-www-form-urlencoded` Formular).
    - Ein Verzeichnis von String-Schlüsseln und String-Werten. Beachten Sie, dass Schachtelung nicht unterstützt wird.

### Rückgabewert

Eine Instanz des [`URLSearchParams`](/de/docs/Web/API/URLSearchParams) Objekts.

## Beispiele

Das folgende Beispiel zeigt, wie man ein [`URLSearchParams`](/de/docs/Web/API/URLSearchParams) Objekt aus
verschiedenen Eingaben erstellt.

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

Dieses Beispiel zeigt, wie man eine neue URL mit einem Objekt von Suchparametern aus einer bestehenden URL, die Suchparameter hat, erstellt.

```js
const url = new URL("https://example.com/?a=hello&b=world");

console.log(url.href);
// https://example.com/?a=hello&b=world

console.log(url.origin);
// https://example.com

const add_params = {
  c: "a",
  d: new String(2),
  e: false.toString(),
};

const new_params = new URLSearchParams([
  ...Array.from(url.searchParams.entries()), // [["a","hello"],["b","world"]]
  ...Object.entries(add_params), // [["c","a"],["d","2"],["e","false"]]
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
