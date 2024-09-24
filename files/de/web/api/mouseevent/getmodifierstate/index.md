---
title: "MouseEvent: getModifierState() Methode"
short-title: getModifierState()
slug: Web/API/MouseEvent/getModifierState
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{APIRef("UI Events")}}

Die **`MouseEvent.getModifierState()`** Methode gibt den aktuellen Zustand der angegebenen Modifikatortaste zurück: `true`, wenn der Modifikator aktiv ist (d.h. die Modifikatortaste gedrückt oder gesperrt ist), andernfalls `false`.

Sehen Sie {{domxref("KeyboardEvent.getModifierState","KeyboardEvent.getModifierState()")}} für Details.

## Syntax

```js-nolint
getModifierState(key)
```

### Parameter

- `key`
  - : Ein Wert einer Modifikatortaste.
    Der Wert muss einer der {{domxref("KeyboardEvent.key")}} Werte sein, die Modifikatortasten repräsentieren, oder `"Accel"` {{deprecated_inline}}.
    Dies ist case-sensitiv.

### Rückgabewert

Ein boolescher Wert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{domxref("MouseEvent")}}, zu dem diese Methode gehört.
- {{domxref("KeyboardEvent.getModifierState")}}
