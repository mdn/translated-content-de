---
title: "URLSearchParams: Methode forEach()"
short-title: forEach()
slug: Web/API/URLSearchParams/forEach
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("URL API")}} {{AvailableInWorkers}}

Die **`forEach()`**-Methode der [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)-Schnittstelle ermöglicht die Iteration über alle Werte, die in diesem Objekt enthalten sind, über eine Callback-Funktion.

## Syntax

```js-nolint
forEach(callback)
forEach(callback, thisArg)
```

### Parameter

- `callback`

  - : Funktion, die für jedes Element ausgeführt wird. Sie erhält die folgenden Argumente:
    - `value`
      - : Der Wert des aktuellen Eintrags, der im `URLSearchParams`-Objekt verarbeitet wird.
    - `key`
      - : Der Schlüssel des aktuellen Eintrags, der im `URLSearchParams`-Objekt verarbeitet wird.
    - `searchParams`
      - : Das `URLSearchParams`-Objekt, auf dem `forEach()` aufgerufen wurde.

- `thisArg` {{optional_inline}}
  - : Wert, der als `this` beim Ausführen von `callback` verwendet wird.

### Rückgabewert

None ({{jsxref("undefined")}}).

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
