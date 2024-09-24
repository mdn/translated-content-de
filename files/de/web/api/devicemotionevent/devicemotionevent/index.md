---
title: "DeviceMotionEvent: DeviceMotionEvent() Konstruktor"
short-title: DeviceMotionEvent()
slug: Web/API/DeviceMotionEvent/DeviceMotionEvent
l10n:
  sourceCommit: 358fa889eb017b3495e93d8b5aa6990752deb939
---

{{APIRef("Device Orientation Events")}}{{securecontext_header}}

Der **`DeviceMotionEvent()`** Konstruktor erstellt ein neues {{DOMxRef("DeviceMotionEvent")}}-Objekt.

## Syntax

```js-nolint
new DeviceMotionEvent(type)
new DeviceMotionEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Er ist groß- und kleinschreibungssensitiv, und Browser setzen ihn immer auf `devicemotion`.
- `options` {{Optional_Inline}}
  - : Ein Objekt, das _zusätzlich zu den in {{domxref("Event/Event", "Event()")}} definierten Eigenschaften_ folgende Eigenschaften haben kann:
    - `acceleration` {{Optional_Inline}}
      - : Ein {{domxref("DeviceMotionEventAcceleration")}}-Objekt, das die Beschleunigung des Geräts auf den drei Achsen X, Y und Z angibt. Die Beschleunigung wird in [m/s²](https://en.wikipedia.org/wiki/Meter_per_second_squared) ausgedrückt. Wird sie nicht angegeben, sind alle Eigenschaften im Objekt `null`.
    - `accelerationIncludingGravity` {{Optional_Inline}}
      - : Ein {{domxref("DeviceMotionEventAcceleration")}}-Objekt, das die Beschleunigung des Geräts auf den drei Achsen X, Y und Z mit der Wirkung der Schwerkraft angibt. Die Beschleunigung wird in [m/s²](https://en.wikipedia.org/wiki/Meter_per_second_squared) ausgedrückt. Wird sie nicht angegeben, sind alle Eigenschaften im Objekt `null`.
    - `rotationRate` {{Optional_Inline}}
      - : Ein {{domxref("DeviceMotionEventRotationRate")}}-Objekt, das die Änderungsrate der Orientierung des Geräts auf den drei Orientierungsachsen Alpha, Beta und Gamma angibt. Die Rotationsrate wird in Grad pro Sekunde ausgedrückt. Wird sie nicht angegeben, sind alle Eigenschaften im Objekt `null`.
    - `interval` {{Optional_Inline}}
      - : Eine Zahl, die das Intervall der Zeit in Millisekunden darstellt, in dem Daten vom Gerät abgerufen werden. Der Standardwert ist `0`.

### Rückgabewert

Ein neues {{domxref("DeviceMotionEvent")}}-Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
