---
title: "URLSearchParams: URLSearchParams()-Konstruktor"
short-title: URLSearchParams()
slug: Web/API/URLSearchParams/URLSearchParams
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{ApiRef("URL API")}} {{AvailableInWorkers}}

Der **`URLSearchParams()`**-Konstruktor erstellt und gibt ein neues {{domxref("URLSearchParams")}}-Objekt zurück.

## Syntax

```js-nolint
new URLSearchParams()
new URLSearchParams(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Eine der folgenden Möglichkeiten:
    - Ein String, der aus dem `application/x-www-form-urlencoded`-Format geparst wird. Ein führendes `'?'`-Zeichen wird ignoriert.
    - Eine literale Sequenz von Namens-Wert-Paaren als Strings oder ein beliebiges Objekt — wie zum Beispiel ein {{domxref("FormData")}}-Objekt — mit einem [Iterator](/de/docs/Web/JavaScript/Guide/Iterators_and_generators#iterators), das eine Sequenz von String-Paaren produziert. Beachten Sie, dass {{domxref("File")}}-Einträge als `[object File]` serialisiert werden, anstatt als ihren Dateinamen (wie sie in einem `application/x-www-form-urlencoded`-Formular erscheinen würden).
    - Ein Record von String-Schlüsseln und String-Werten. Beachten Sie, dass Verschachtelung nicht unterstützt wird.

### Rückgabewert

Eine Instanz eines {{domxref("URLSearchParams")}}-Objekts.

## Beispiele

Das folgende Beispiel zeigt, wie ein {{domxref("URLSearchParams")}}-Objekt aus verschiedenen Eingaben erstellt wird.

```js
// Abrufen von Parametern über url.search, die an den Konstruktor übergeben werden
const url = new URL("https://example.com?foo=1&bar=2");
const params1 = new URLSearchParams(url.search);

// Erhalten des URLSearchParams-Objekts direkt aus einem URL-Objekt
const params1a = url.searchParams;

// Übergabe eines String-Literals
const params2 = new URLSearchParams("foo=1&bar=2");
const params2a = new URLSearchParams("?foo=1&bar=2");

// Übergabe einer Sequenz von Paaren
const params3 = new URLSearchParams([
  ["foo", "1"],
  ["bar", "2"],
]);

// Übergabe eines Records
const params4 = new URLSearchParams({ foo: "1", bar: "2" });
```

Dieses Beispiel zeigt, wie eine neue URL mit einem Objekt von Suchparametern aus einer vorhandenen URL erstellt wird, die Suchparameter enthält.

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

// Hier ist es als Funktion, die (URL, Record<string, string>) akzeptiert
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
