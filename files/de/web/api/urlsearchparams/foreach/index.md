---
title: "URLSearchParams: forEach() Methode"
short-title: forEach()
slug: Web/API/URLSearchParams/forEach
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("URL API")}} {{AvailableInWorkers}}

Die **`forEach()`** Methode der
[`URLSearchParams`](/de/docs/Web/API/URLSearchParams)-Schnittstelle ermöglicht die Iteration durch alle in diesem Objekt enthaltenen Werte mittels einer Rückruffunktion.

## Syntax

```js-nolint
forEach(callback)
forEach(callback, thisArg)
```

### Parameter

- `callback`

  - : Funktion, die auf jedes Element angewendet wird, der die folgenden Argumente übergeben werden:

    - `value`
      - : Der Wert des aktuellen Eintrags, der im `URLSearchParams`-Objekt verarbeitet wird.
    - `key`
      - : Der Schlüssel des aktuellen Eintrags, der im `URLSearchParams`-Objekt verarbeitet wird.
    - `searchParams`
      - : Das `URLSearchParams`-Objekt, auf dem `forEach()` aufgerufen wurde.

- `thisArg` {{optional_inline}}
  - : Wert, der als `this` beim Ausführen von `callback` verwendet wird.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
// Create a test URLSearchParams object
const searchParams = new URLSearchParams("key1=value1&key2=value2");

// Log the values
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

- Die [`URL`](/de/docs/Web/API/URL)-Schnittstelle.
