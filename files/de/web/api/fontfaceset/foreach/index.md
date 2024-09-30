---
title: "FontFaceSet: forEach()-Methode"
short-title: forEach()
slug: Web/API/FontFaceSet/forEach
l10n:
  sourceCommit: 391e96a066cb4802470b295e72144825b4164871
---

{{APIRef("CSS Font Loading API")}}

Die **`forEach()`**-Methode des [`FontFaceSet`](/de/docs/Web/API/FontFaceSet)-Interfaces führt eine bereitgestellte Funktion für jeden Wert im `FontFaceSet`-Objekt aus.

## Syntax

```js-nolint
forEach(callbackFn)
forEach(callbackFn, thisArg)
```

### Parameter

- `callbackFn`
  - : Funktion, die für jedes Element ausgeführt wird, mit drei Argumenten:
    - `value`, `key`
      - : Das aktuelle Element, das im `FontFaceSet` verarbeitet wird. Da es in einem `FontFaceSet` keine Schlüssel gibt, wird der Wert für beide Argumente übergeben.
    - `set`
      - : Das `FontFaceSet`, auf dem `forEach()` aufgerufen wurde.
- `thisArg`
  - : Wert, der als [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) verwendet wird, wenn `callbackFn` ausgeführt wird.

### Rückgabewert

Undefiniert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
