---
title: "FontFaceSet: forEach() Methode"
short-title: forEach()
slug: Web/API/FontFaceSet/forEach
l10n:
  sourceCommit: 3b7232826ab98368d06ebf8b021886e4a544de93
---

{{APIRef("CSS Font Loading API")}}{{AvailableInWorkers}}

Die **`forEach()`** Methode des [`FontFaceSet`](/de/docs/Web/API/FontFaceSet) Interface führt eine bereitgestellte Funktion für jeden Wert im `FontFaceSet` Objekt aus.

## Syntax

```js-nolint
forEach(callbackFn)
forEach(callbackFn, thisArg)
```

### Parameter

- `callbackFn`
  - : Funktion, die für jedes Element ausgeführt wird und drei Argumente übernimmt:
    - `value`, `key`
      - : Das aktuelle Element, das im `FontFaceSet` verarbeitet wird. Da es keine Schlüssel in einem `FontFaceSet` gibt, wird der Wert für beide Argumente übergeben.
    - `set`
      - : Das `FontFaceSet`, auf dem `forEach()` aufgerufen wurde.
- `thisArg`
  - : Wert, der als [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) verwendet wird, wenn `callbackFn` ausgeführt wird.

### Rückgabewert

Undefined.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
