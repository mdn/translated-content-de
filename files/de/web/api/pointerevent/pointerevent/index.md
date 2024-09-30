---
title: "PointerEvent: PointerEvent() Konstruktor"
short-title: PointerEvent()
slug: Web/API/PointerEvent/PointerEvent
l10n:
  sourceCommit: c2636b43e43eb705d142aae874c5412b4b3e6b6e
---

{{APIRef("Pointer Events")}}

Der **`PointerEvent()`**-Konstruktor erstellt eine neue synthetische und nicht vertrauenswürdige [`PointerEvent`](/de/docs/Web/API/PointerEvent)-Objektinstanz.

## Syntax

```js-nolint
new PointerEvent(type)
new PointerEvent(type, options)
```

### Parameter

- `type`
  - : Ein Zeichenfolgenwert, der den Namen des Ereignisses darstellt (siehe [PointerEvent-Ereignistypen](/de/docs/Web/API/PointerEvent#pointer_event_types)).
- `options` {{optional_inline}}

  - : Ein Objekt, das neben den in [`MouseEvent()`](/de/docs/Web/API/MouseEvent/MouseEvent) definierten Eigenschaften die folgenden Eigenschaften aufweisen kann:

    - `pointerId`
      - : Eine Zahl, standardmäßig `0`, die den Wert der Instanz von [`PointerEvent.pointerId`](/de/docs/Web/API/PointerEvent/pointerId) festlegt.
    - `width`
      - : Eine Zahl, standardmäßig `1`, die den Wert der Instanz von [`PointerEvent.width`](/de/docs/Web/API/PointerEvent/width) festlegt.
    - `height`
      - : Eine Zahl, standardmäßig `1`, die den Wert der Instanz von [`PointerEvent.height`](/de/docs/Web/API/PointerEvent/height) festlegt.
    - `pressure`
      - : Eine Zahl, standardmäßig `0`, die den Wert der Instanz von [`PointerEvent.pressure`](/de/docs/Web/API/PointerEvent/pressure) festlegt.
    - `tangentialPressure`
      - : Eine Zahl, standardmäßig `0`, die den Wert der Instanz von [`PointerEvent.tangentialPressure`](/de/docs/Web/API/PointerEvent/tangentialPressure) festlegt.
    - `altitudeAngle`
      - : Eine Zahl, die den Wert der Instanz von [`PointerEvent.altitudeAngle`](/de/docs/Web/API/PointerEvent/altitudeAngle) festlegt.
    - `azimuthAngle`
      - : Eine Zahl, die den Wert der Instanz von [`PointerEvent.azimuthAngle`](/de/docs/Web/API/PointerEvent/azimuthAngle) festlegt.
    - `tiltX`
      - : Eine Zahl, die den Wert der Instanz von [`PointerEvent.tiltX`](/de/docs/Web/API/PointerEvent/tiltX) festlegt.
    - `tiltY`
      - : Eine Zahl, die den Wert der Instanz von [`PointerEvent.tiltY`](/de/docs/Web/API/PointerEvent/tiltY) festlegt.
    - `twist`
      - : Eine Zahl, standardmäßig `0`, die den Wert der Instanz von [`PointerEvent.twist`](/de/docs/Web/API/PointerEvent/twist) festlegt.
    - `pointerType`
      - : Eine Zeichenfolge, standardmäßig `""`, die den Wert der Instanz von [`PointerEvent.pointerType`](/de/docs/Web/API/PointerEvent/pointerType) festlegt.
    - `isPrimary`
      - : Ein boolescher Wert, standardmäßig `false`, der den Wert der Instanz von [`PointerEvent.isPrimary`](/de/docs/Web/API/PointerEvent/isPrimary) festlegt.

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
