---
title: "MouseEvent: getModifierState()-Methode"
short-title: getModifierState()
slug: Web/API/MouseEvent/getModifierState
l10n:
  sourceCommit: d783c87acb536c6c142792d263f813c88808551b
---

{{APIRef("Pointer Events")}}

Die **`MouseEvent.getModifierState()`**-Methode gibt den aktuellen Zustand der angegebenen Modifikatortaste zurück: `true`, wenn der Modifikator aktiv ist (d.h. die Modifikatortaste ist gedrückt oder gesperrt), andernfalls `false`.

Siehe [`KeyboardEvent.getModifierState()`](/de/docs/Web/API/KeyboardEvent/getModifierState) für Details.

## Syntax

```js-nolint
getModifierState(key)
```

### Parameter

- `key`
  - : Ein Modifikatortastwert.
    Der Wert muss einer der [`KeyboardEvent.key`](/de/docs/Web/API/KeyboardEvent/key)-Werte sein, die Modifikatortasten repräsentieren, oder `"Accel"` {{deprecated_inline}}.
    Dies ist groß- und kleinschreibungssensitiv.

### Rückgabewert

Ein boolescher Wert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`MouseEvent`](/de/docs/Web/API/MouseEvent), zu dem diese Methode gehört.
- [`KeyboardEvent.getModifierState`](/de/docs/Web/API/KeyboardEvent/getModifierState)
