---
title: "MediaKeyStatusMap: forEach() Methode"
short-title: forEach()
slug: Web/API/MediaKeyStatusMap/forEach
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Encrypted Media Extensions")}}

Die **`forEach()`** Methode des
[`MediaKeyStatusMap`](/de/docs/Web/API/MediaKeyStatusMap) Schnittstelle ruft den Rückruf einmal für jedes Schlüssel-Wert-Paar in der Statuskarte in Einfügereihenfolge auf. Wenn ein Argument vorhanden ist, wird es an den Rückruf übergeben.

## Syntax

```js-nolint
forEach(callbackFn)
forEach(callbackFn, thisArg)
```

### Parameter

- `callbackFn`
  - : Funktion, die für jedes Element ausgeführt wird und drei Argumente annimmt:
    - `currentValue`
      - : Das aktuelle Element, das im Array verarbeitet wird.
    - `index` {{optional_inline}}
      - : Der Index des aktuellen Elements, das im Array verarbeitet wird.
    - `array` {{optional_inline}}
      - : Das Array, auf das `forEach()` angewendet wird.

- `thisArg` {{optional_inline}}
  - : Wert, der als `this` verwendet wird, wenn `callback` ausgeführt wird.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
