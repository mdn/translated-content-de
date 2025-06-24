---
title: "PointerEvent: PointerEvent() Konstruktor"
short-title: PointerEvent()
slug: Web/API/PointerEvent/PointerEvent
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Pointer Events")}}

Der **`PointerEvent()`** Konstruktor erstellt eine neue synthetische und unzuverlässige [`PointerEvent`](/de/docs/Web/API/PointerEvent)-Objektinstanz.

## Syntax

```js-nolint
new PointerEvent(type)
new PointerEvent(type, options)
```

### Parameter

- `type`
  - : Ein String, der den Namen des Ereignisses repräsentiert (siehe [PointerEvent-Ereignistypen](/de/docs/Web/API/PointerEvent#pointer_event_types)).
- `options` {{optional_inline}}
  - : Ein Objekt, das _zusätzlich zu den in [`MouseEvent()`](/de/docs/Web/API/MouseEvent/MouseEvent) definierten Eigenschaften_ die folgenden Eigenschaften haben kann:
    - `pointerId`
      - : Eine Zahl, die standardmäßig `0` ist und den Wert der Instanz [`PointerEvent.pointerId`](/de/docs/Web/API/PointerEvent/pointerId) festlegt.
    - `width`
      - : Eine Zahl, die standardmäßig `1` ist und den Wert der Instanz [`PointerEvent.width`](/de/docs/Web/API/PointerEvent/width) festlegt.
    - `height`
      - : Eine Zahl, die standardmäßig `1` ist und den Wert der Instanz [`PointerEvent.height`](/de/docs/Web/API/PointerEvent/height) festlegt.
    - `pressure`
      - : Eine Zahl, die standardmäßig `0` ist und den Wert der Instanz [`PointerEvent.pressure`](/de/docs/Web/API/PointerEvent/pressure) festlegt.
    - `tangentialPressure`
      - : Eine Zahl, die standardmäßig `0` ist und den Wert der Instanz [`PointerEvent.tangentialPressure`](/de/docs/Web/API/PointerEvent/tangentialPressure) festlegt.
    - `altitudeAngle`
      - : Eine Zahl, die den Wert der Instanz [`PointerEvent.altitudeAngle`](/de/docs/Web/API/PointerEvent/altitudeAngle) festlegt.
    - `azimuthAngle`
      - : Eine Zahl, die den Wert der Instanz [`PointerEvent.azimuthAngle`](/de/docs/Web/API/PointerEvent/azimuthAngle) festlegt.
    - `tiltX`
      - : Eine Zahl, die den Wert der Instanz [`PointerEvent.tiltX`](/de/docs/Web/API/PointerEvent/tiltX) festlegt.
    - `tiltY`
      - : Eine Zahl, die den Wert der Instanz [`PointerEvent.tiltY`](/de/docs/Web/API/PointerEvent/tiltY) festlegt.
    - `twist`
      - : Eine Zahl, die standardmäßig `0` ist und den Wert der Instanz [`PointerEvent.twist`](/de/docs/Web/API/PointerEvent/twist) festlegt.
    - `pointerType`
      - : Ein String, der standardmäßig `""` ist und den Wert der Instanz [`PointerEvent.pointerType`](/de/docs/Web/API/PointerEvent/pointerType) festlegt.
    - `isPrimary`
      - : Ein boolescher Wert, der standardmäßig `false` ist und den Wert der Instanz [`PointerEvent.isPrimary`](/de/docs/Web/API/PointerEvent/isPrimary) festlegt.

### Rückgabewert

Ein neues [`PointerEvent`](/de/docs/Web/API/PointerEvent)-Objekt.

## Beispiele

```js
const moveEvent = new PointerEvent("pointermove");

const downEvent = new PointerEvent("pointerdown", {
  pointerId: 1,
  bubbles: true,
  cancelable: true,
  pointerType: "touch",
  width: 100,
  height: 100,
  isPrimary: true,
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
