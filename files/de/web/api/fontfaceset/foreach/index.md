---
title: "FontFaceSet: forEach() Methode"
short-title: forEach()
slug: Web/API/FontFaceSet/forEach
l10n:
  sourceCommit: 0a7be3733111a7a3db436f416334374f2a0f644f
---

{{APIRef("CSS Font Loading API")}}{{AvailableInWorkers}}

Die **`forEach()`**-Methode des [`FontFaceSet`](/de/docs/Web/API/FontFaceSet)-Interfaces führt eine bereitgestellte Funktion für jeden Wert im `FontFaceSet`-Objekt aus.

## Syntax

```js-nolint
forEach(callbackFn)
forEach(callbackFn, thisArg)
```

### Parameter

- `callbackFn`
  - : Funktion, die für jedes Element ausgeführt wird und drei Argumente nimmt:
    - `value`, `key`
      - : Das aktuelle Element, das im `FontFaceSet` verarbeitet wird. Da es keine Schlüssel in einem `FontFaceSet` gibt, wird der Wert für beide Argumente übergeben.
    - `set`
      - : Das `FontFaceSet`, auf dem `forEach()` aufgerufen wurde.
- `thisArg` {{optional_inline}}
  - : Wert, der als [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) beim Ausführen von `callbackFn` benutzt wird. Standardmäßig `undefined`.

### Rückgabewert

{{jsxref("undefined")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
