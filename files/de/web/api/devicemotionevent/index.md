---
title: DeviceMotionEvent
slug: Web/API/DeviceMotionEvent
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{APIRef("Device Orientation Events")}}{{securecontext_header}}

Die **`DeviceMotionEvent`**-Schnittstelle der [Device Orientation Events](/de/docs/Web/API/Device_Orientation_Events) bietet Webentwicklern Informationen über die Geschwindigkeit von Änderungen der Position und Ausrichtung des Geräts.

> [!WARNING]
> Derzeit behandeln Firefox und Chrome die Koordinaten nicht auf dieselbe Weise. Achten Sie darauf, wenn Sie sie verwenden.

{{InheritanceDiagram}}

## Konstruktor

- [`DeviceMotionEvent()`](/de/docs/Web/API/DeviceMotionEvent/DeviceMotionEvent)
  - : Erstellt ein neues `DeviceMotionEvent`.

## Instanz-Eigenschaften

- [`DeviceMotionEvent.acceleration`](/de/docs/Web/API/DeviceMotionEvent/acceleration) {{ReadOnlyInline}}
  - : Ein Objekt, das die Beschleunigung des Geräts auf den drei Achsen X, Y und Z angibt. Die Beschleunigung wird in [m/s²](https://en.wikipedia.org/wiki/Meter_per_second_squared) ausgedrückt.
- [`DeviceMotionEvent.accelerationIncludingGravity`](/de/docs/Web/API/DeviceMotionEvent/accelerationIncludingGravity) {{ReadOnlyInline}}
  - : Ein Objekt, das die Beschleunigung des Geräts auf den drei Achsen X, Y und Z mit dem Einfluss der Schwerkraft angibt. Die Beschleunigung wird in [m/s²](https://en.wikipedia.org/wiki/Meter_per_second_squared) ausgedrückt.
- [`DeviceMotionEvent.rotationRate`](/de/docs/Web/API/DeviceMotionEvent/rotationRate) {{ReadOnlyInline}}
  - : Ein Objekt, das die Änderungsrate der Ausrichtung des Geräts auf den drei Orientierungsachsen alpha, beta und gamma angibt. Die Rotationsrate wird in Grad pro Sekunde ausgedrückt.
- [`DeviceMotionEvent.interval`](/de/docs/Web/API/DeviceMotionEvent/interval) {{ReadOnlyInline}}
  - : Eine Zahl, die das Zeitintervall in Millisekunden darstellt, in dem Daten vom Gerät abgerufen werden.

## Beispiel

```js
window.addEventListener("devicemotion", (event) => {
  console.log(`${event.acceleration.x} m/s2`);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Erkennung der Geräteausrichtung](/de/docs/Web/API/Device_orientation_events/Detecting_device_orientation)
- [Erklärung von Orientierungs- und Bewegungsdaten](/de/docs/Web/API/Device_orientation_events/Orientation_and_motion_data_explained)
- [`DeviceOrientationEvent`](/de/docs/Web/API/DeviceOrientationEvent)
- [`deviceorientation`](/de/docs/Web/API/Window/deviceorientation_event) Ereignis
- [`deviceorientationabsolute`](/de/docs/Web/API/Window/deviceorientationabsolute_event) Ereignis
- [`devicemotion`](/de/docs/Web/API/Window/devicemotion_event) Ereignis
- [`Accelerometer`](/de/docs/Web/API/Accelerometer)
- [`LinearAccelerationSensor`](/de/docs/Web/API/LinearAccelerationSensor)
