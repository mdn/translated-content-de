---
title: "DeviceMotionEvent: DeviceMotionEvent() Konstruktor"
short-title: DeviceMotionEvent()
slug: Web/API/DeviceMotionEvent/DeviceMotionEvent
l10n:
  sourceCommit: 358fa889eb017b3495e93d8b5aa6990752deb939
---

{{APIRef("Device Orientation Events")}}{{securecontext_header}}

Der **`DeviceMotionEvent()`** Konstruktor erzeugt ein neues [`DeviceMotionEvent`](/de/docs/Web/API/DeviceMotionEvent) Objekt.

## Syntax

```js-nolint
new DeviceMotionEvent(type)
new DeviceMotionEvent(type, options)
```

### Parameter

- `type`
  - : Ein Zeichenfolgenwert mit dem Namen des Ereignisses.
    Es ist case-sensitiv und Browser setzen es immer auf `devicemotion`.
- `options` {{Optional_Inline}}
  - : Ein Objekt, das _zusätzlich zu den in [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_ folgende Eigenschaften haben kann:
    - `acceleration` {{Optional_Inline}}
      - : Ein [`DeviceMotionEventAcceleration`](/de/docs/Web/API/DeviceMotionEventAcceleration) Objekt, das die Beschleunigung des Geräts auf den drei Achsen X, Y und Z angibt. Die Beschleunigung wird in [m/s²](https://en.wikipedia.org/wiki/Meter_per_second_squared) ausgedrückt. Wenn nicht angegeben, werden alle Eigenschaften im Objekt `null` sein.
    - `accelerationIncludingGravity` {{Optional_Inline}}
      - : Ein [`DeviceMotionEventAcceleration`](/de/docs/Web/API/DeviceMotionEventAcceleration) Objekt, das die Beschleunigung des Geräts auf den drei Achsen X, Y und Z mit dem Einfluss der Schwerkraft angibt. Die Beschleunigung wird in [m/s²](https://en.wikipedia.org/wiki/Meter_per_second_squared) ausgedrückt. Wenn nicht angegeben, werden alle Eigenschaften im Objekt `null` sein.
    - `rotationRate` {{Optional_Inline}}
      - : Ein [`DeviceMotionEventRotationRate`](/de/docs/Web/API/DeviceMotionEventRotationRate) Objekt, das die Änderungsrate der Ausrichtung des Geräts auf den drei Orientierungsachsen Alpha, Beta und Gamma angibt. Die Rotationsrate wird in Grad pro Sekunde ausgedrückt. Wenn nicht angegeben, werden alle Eigenschaften im Objekt `null` sein.
    - `interval` {{Optional_Inline}}
      - : Eine Zahl, die das Zeitintervall in Millisekunden angibt, in dem Daten vom Gerät abgerufen werden. Standardmäßig `0`.

### Rückgabewert

Ein neues [`DeviceMotionEvent`](/de/docs/Web/API/DeviceMotionEvent) Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
