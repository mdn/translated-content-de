---
title: "URLSearchParams: keys() Methode"
short-title: keys()
slug: Web/API/URLSearchParams/keys
l10n:
  sourceCommit: bd15d43260b7e72b1066c04d9d9f3b79129c619c
---

{{APIRef("URL API")}} {{AvailableInWorkers}}

Die **`keys()`** Methode des [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)
Interfaces gibt einen {{jsxref("Iteration_protocols",'iterator')}} zurück, der die Iteration
durch alle in diesem Objekt enthaltenen Schlüssel ermöglicht. Die Schlüssel sind Strings.

## Syntax

```js-nolint
keys()
```

### Parameter

Keine.

### Rückgabewert

Gibt einen {{jsxref("Iteration_protocols","iterator")}} zurück.

## Beispiele

```js
// Create a test URLSearchParams object
const searchParams = new URLSearchParams("key1=value1&key2=value2");

// Display the keys
for (const key of searchParams.keys()) {
  console.log(key);
}
```

Das Ergebnis ist:

```plain
key1
key2
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`URL`](/de/docs/Web/API/URL) Interface.
