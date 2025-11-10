---
title: "MouseEvent: getModifierState() Methode"
short-title: getModifierState()
slug: Web/API/MouseEvent/getModifierState
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{APIRef("UI Events")}}

Die **`MouseEvent.getModifierState()`**-Methode gibt den aktuellen Zustand der angegebenen Modifikatortaste zurück: `true`, wenn der Modifikator aktiv ist (d.h. die Modifikatortaste wird gedrückt oder ist gesperrt), andernfalls `false`.

Siehe [`KeyboardEvent.getModifierState()`](/de/docs/Web/API/KeyboardEvent/getModifierState) für Details.

## Syntax

```js-nolint
getModifierState(key)
```

### Parameter

- `key`
  - : Ein Wert für eine Modifikatortaste.
    Der Wert muss einer der [`KeyboardEvent.key`](/de/docs/Web/API/KeyboardEvent/key) Werte sein, die Modifikatortasten darstellen, oder `"Accel"` {{deprecated_inline}}.
    Dies ist case-sensitiv.

### Rückgabewert

Ein boolescher Wert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`MouseEvent`](/de/docs/Web/API/MouseEvent), zu dem diese Methode gehört.
- [`KeyboardEvent.getModifierState`](/de/docs/Web/API/KeyboardEvent/getModifierState)
