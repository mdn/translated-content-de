---
title: "CustomStateSet: forEach()-Methode"
short-title: forEach()
slug: Web/API/CustomStateSet/forEach
l10n:
  sourceCommit: f33c6e8a7204272b90d8f005f3d8c743333d7dbf
---

{{APIRef("Web Components")}}

Die **`forEach()`**-Methode des {{domxref("CustomStateSet")}}-Interfaces führt eine bereitgestellte Funktion für jedes Element im `CustomStateSet`-Objekt aus.

## Syntax

```js-nolint
forEach(callbackFn)
forEach(callbackFn, thisArg)
```

### Parameter

- `callbackFn`
  - : Funktion, die für jedes Element ausgeführt wird und drei Argumente nimmt:
    - `value`, `key`
      - : Das aktuell in Bearbeitung befindliche Element im `CustomStateSet`. Da es in einem `CustomStateSet` keine Schlüssel gibt, wird der Wert für beide Argumente übergeben.
    - `set`
      - : Das `CustomStateSet`, auf das `forEach()` angewendet wurde.
- `thisArg`
  - : Wert, der als `this` beim Ausführen von `callbackFn` verwendet wird.

### Rückgabewert

Undefiniert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
