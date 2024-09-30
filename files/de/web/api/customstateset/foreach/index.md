---
title: "CustomStateSet: forEach() Methode"
short-title: forEach()
slug: Web/API/CustomStateSet/forEach
l10n:
  sourceCommit: f33c6e8a7204272b90d8f005f3d8c743333d7dbf
---

{{APIRef("Web Components")}}

Die **`forEach()`** Methode der [`CustomStateSet`](/de/docs/Web/API/CustomStateSet)-Schnittstelle führt eine bereitgestellte Funktion für jeden Wert im `CustomStateSet`-Objekt aus.

## Syntax

```js-nolint
forEach(callbackFn)
forEach(callbackFn, thisArg)
```

### Parameter

- `callbackFn`
  - : Funktion, die für jedes Element ausgeführt wird und drei Argumente annimmt:
    - `value`, `key`
      - : Das aktuelle Element, das im `CustomStateSet` verarbeitet wird. Da es in einem `CustomStateSet` keine Schlüssel gibt, wird der Wert für beide Argumente übergeben.
    - `set`
      - : Das `CustomStateSet`, für das `forEach()` aufgerufen wurde.
- `thisArg`
  - : Wert, der als `this` verwendet wird, wenn `callbackFn` ausgeführt wird.

### Rückgabewert

Undefiniert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
