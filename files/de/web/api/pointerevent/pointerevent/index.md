---
title: "PointerEvent: PointerEvent() Konstruktor"
short-title: PointerEvent()
slug: Web/API/PointerEvent/PointerEvent
l10n:
  sourceCommit: c2636b43e43eb705d142aae874c5412b4b3e6b6e
---

{{APIRef("Pointer Events")}}

Der **`PointerEvent()`** Konstruktor erstellt eine neue synthetische und nicht vertrauenswürdige {{domxref("PointerEvent")}}-Objektinstanz.

## Syntax

```js-nolint
new PointerEvent(type)
new PointerEvent(type, options)
```

### Parameter

- `type`
  - : Ein String, der den Namen des Events darstellt (siehe [PointerEvent Eventtypen](/de/docs/Web/API/PointerEvent#pointer_event_types)).
- `options` {{optional_inline}}

  - : Ein Objekt, das, _zusätzlich zu den Eigenschaften, die in {{domxref("MouseEvent/MouseEvent", "MouseEvent()")}} definiert sind_, die folgenden Eigenschaften haben kann:

    - `pointerId`
      - : Eine Zahl, die standardmäßig auf `0` gesetzt ist und den Wert der Instanz von {{domxref("PointerEvent.pointerId")}} festlegt.
    - `width`
      - : Eine Zahl, die standardmäßig auf `1` gesetzt ist und den Wert der Instanz von {{domxref("PointerEvent.width")}} festlegt.
    - `height`
      - : Eine Zahl, die standardmäßig auf `1` gesetzt ist und den Wert der Instanz von {{domxref("PointerEvent.height")}} festlegt.
    - `pressure`
      - : Eine Zahl, die standardmäßig auf `0` gesetzt ist und den Wert der Instanz von {{domxref("PointerEvent.pressure")}} festlegt.
    - `tangentialPressure`
      - : Eine Zahl, die standardmäßig auf `0` gesetzt ist und den Wert der Instanz von {{domxref("PointerEvent.tangentialPressure")}} festlegt.
    - `altitudeAngle`
      - : Eine Zahl, die den Wert der Instanz von {{domxref("PointerEvent.altitudeAngle")}} festlegt.
    - `azimuthAngle`
      - : Eine Zahl, die den Wert der Instanz von {{domxref("PointerEvent.azimuthAngle")}} festlegt.
    - `tiltX`
      - : Eine Zahl, die den Wert der Instanz von {{domxref("PointerEvent.tiltX")}} festlegt.
    - `tiltY`
      - : Eine Zahl, die den Wert der Instanz von {{domxref("PointerEvent.tiltY")}} festlegt.
    - `twist`
      - : Eine Zahl, die standardmäßig auf `0` gesetzt ist und den Wert der Instanz von {{domxref("PointerEvent.twist")}} festlegt.
    - `pointerType`
      - : Ein String, der standardmäßig `""` ist und den Wert der Instanz von {{domxref("PointerEvent.pointerType")}} festlegt.
    - `isPrimary`
      - : Ein boolescher Wert, der standardmäßig `false` ist und den Wert der Instanz von {{domxref("PointerEvent.isPrimary")}} festlegt.

### Rückgabewert

Ein neues {{domxref("PointerEvent")}}-Objekt.

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
