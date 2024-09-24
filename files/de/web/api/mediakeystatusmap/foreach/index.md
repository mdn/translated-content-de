---
title: "MediaKeyStatusMap: forEach()-Methode"
short-title: forEach()
slug: Web/API/MediaKeyStatusMap/forEach
l10n:
  sourceCommit: ba9a6bebd0e7bf1dd6b5c4eed156d8f1748ade0f
---

{{APIRef("Encrypted Media Extensions")}}

Die **`forEach()`**-Methode der
{{domxref("MediaKeyStatusMap")}}-Schnittstelle ruft callback einmal für jedes Schlüssel-Wert-Paar
in der Statuskarte in Einfügereihenfolge auf. Wenn ein Argument vorhanden ist, wird es an den
Callback übergeben.

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
      - : Auf welches Array `forEach()` angewendet wird.

- `thisArg` {{optional_inline}}
  - : Wert, der als `this` verwendet wird, wenn `callback` ausgeführt wird.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}
