---
title: "DeviceMotionEvent: DeviceMotionEvent()-Konstruktor"
short-title: DeviceMotionEvent()
slug: Web/API/DeviceMotionEvent/DeviceMotionEvent
l10n:
  sourceCommit: 358fa889eb017b3495e93d8b5aa6990752deb939
---

{{APIRef("Device Orientation Events")}}{{securecontext_header}}

Der **`DeviceMotionEvent()`**-Konstruktor erstellt ein neues [`DeviceMotionEvent`](/de/docs/Web/API/DeviceMotionEvent)-Objekt.

## Syntax

```js-nolint
new DeviceMotionEvent(type)
new DeviceMotionEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Er ist case-sensitiv, und Browser setzen ihn immer auf `devicemotion`.
- `options` {{Optional_Inline}}
  - : Ein Objekt, das _zusätzlich zu den Eigenschaften, die in [`Event()`](/de/docs/Web/API/Event/Event) definiert sind_, die folgenden Eigenschaften haben kann:
    - `acceleration` {{Optional_Inline}}
      - : Ein [`DeviceMotionEventAcceleration`](/de/docs/Web/API/DeviceMotionEventAcceleration)-Objekt, das die Beschleunigung des Geräts auf den drei Achsen X, Y und Z angibt. Die Beschleunigung wird in [m/s²](https://en.wikipedia.org/wiki/Meter_per_second_squared) ausgedrückt. Wenn nicht angegeben, werden alle Eigenschaften im Objekt auf `null` gesetzt.
    - `accelerationIncludingGravity` {{Optional_Inline}}
      - : Ein [`DeviceMotionEventAcceleration`](/de/docs/Web/API/DeviceMotionEventAcceleration)-Objekt, das die Beschleunigung des Geräts auf den drei Achsen X, Y und Z unter Berücksichtigung der Schwerkraft angibt. Die Beschleunigung wird in [m/s²](https://en.wikipedia.org/wiki/Meter_per_second_squared) ausgedrückt. Wenn nicht angegeben, werden alle Eigenschaften im Objekt auf `null` gesetzt.
    - `rotationRate` {{Optional_Inline}}
      - : Ein [`DeviceMotionEventRotationRate`](/de/docs/Web/API/DeviceMotionEventRotationRate)-Objekt, das die Änderungsrate der Orientierung des Geräts auf den drei Orientierungsachsen Alpha, Beta und Gamma angibt. Die Rotationsrate wird in Grad pro Sekunde ausgedrückt. Wenn nicht angegeben, werden alle Eigenschaften im Objekt auf `null` gesetzt.
    - `interval` {{Optional_Inline}}
      - : Eine Zahl, die das Intervall der Zeit in Millisekunden repräsentiert, in dem Daten vom Gerät abgerufen werden. Der Standardwert ist `0`.

### Rückgabewert

Ein neues [`DeviceMotionEvent`](/de/docs/Web/API/DeviceMotionEvent)-Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
