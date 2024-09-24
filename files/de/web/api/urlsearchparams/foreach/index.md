---
title: "URLSearchParams: forEach()-Methode"
short-title: forEach()
slug: Web/API/URLSearchParams/forEach
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("URL API")}} {{AvailableInWorkers}}

Die **`forEach()`**-Methode der {{domxref("URLSearchParams")}}-Schnittstelle ermöglicht die Iteration durch alle in diesem Objekt enthaltenen Werte mittels einer Callback-Funktion.

## Syntax

```js-nolint
forEach(callback)
forEach(callback, thisArg)
```

### Parameter

- `callback`

  - : Funktion, die auf jedes Element ausgeführt wird und die folgenden Argumente erhält:

    - `value`
      - : Der Wert des aktuellen Eintrags, der im `URLSearchParams`-Objekt verarbeitet wird.
    - `key`
      - : Der Schlüssel des aktuellen Eintrags, der im `URLSearchParams`-Objekt verarbeitet wird.
    - `searchParams`
      - : Das `URLSearchParams`-Objekt, auf das `forEach()` aufgerufen wurde.

- `thisArg` {{optional_inline}}
  - : Wert, der als `this` verwendet wird, wenn `callback` ausgeführt wird.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
// Erstellen Sie ein Test-URLSearchParams-Objekt
const searchParams = new URLSearchParams("key1=value1&key2=value2");

// Die Werte protokollieren
searchParams.forEach((value, key) => {
  console.log(value, key);
});
```

Das Ergebnis ist:

```plain
value1 key1
value2 key2
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die {{domxref("URL")}}-Schnittstelle.
