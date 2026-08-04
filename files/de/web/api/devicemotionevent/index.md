---
title: DeviceMotionEvent
slug: Web/API/DeviceMotionEvent
l10n:
  sourceCommit: e57e3fdd4ab6fb372ddc3d78e5b428f318202426
---

{{APIRef("Device Orientation Events")}}{{securecontext_header}}

Das **`DeviceMotionEvent`**-Interface der [Device Orientation Events](/de/docs/Web/API/Device_orientation_events) bietet Webentwicklern Informationen über die Geschwindigkeit von Änderungen in der Position und Orientierung des Geräts.

> [!WARNING]
> Zurzeit behandeln Firefox und Chrome die Koordinaten nicht auf die gleiche Weise. Achten Sie darauf, wenn Sie sie verwenden.

{{InheritanceDiagram}}

## Konstruktor

- [`DeviceMotionEvent()`](/de/docs/Web/API/DeviceMotionEvent/DeviceMotionEvent)
  - : Erstellt ein neues `DeviceMotionEvent`.

## Statische Methoden

- [`DeviceMotionEvent.requestPermission()`](/de/docs/Web/API/DeviceMotionEvent/requestPermission_static)
  - : Fordert die Erlaubnis des Benutzers an, auf Bewegungsdaten des Geräts von den Beschleunigungs- und Gyroskopsensoren zuzugreifen. Gibt ein {{jsxref("Promise")}} zurück, das mit einem String von `"granted"` oder `"denied"` aufgelöst wird.

## Instanz-Eigenschaften

- [`DeviceMotionEvent.acceleration`](/de/docs/Web/API/DeviceMotionEvent/acceleration) {{ReadOnlyInline}}
  - : Ein Objekt, das die Beschleunigung des Geräts auf den drei Achsen X, Y und Z angibt. Die Beschleunigung wird in [m/s²](https://en.wikipedia.org/wiki/Meter_per_second_squared) ausgedrückt.
- [`DeviceMotionEvent.accelerationIncludingGravity`](/de/docs/Web/API/DeviceMotionEvent/accelerationIncludingGravity) {{ReadOnlyInline}}
  - : Ein Objekt, das die Beschleunigung des Geräts auf den drei Achsen X, Y und Z inklusive der Wirkung der Schwerkraft angibt. Die Beschleunigung wird in [m/s²](https://en.wikipedia.org/wiki/Meter_per_second_squared) ausgedrückt.
- [`DeviceMotionEvent.rotationRate`](/de/docs/Web/API/DeviceMotionEvent/rotationRate) {{ReadOnlyInline}}
  - : Ein Objekt, das die Rate der Veränderung der Orientierung des Geräts auf den drei Orientierungsachsen alpha, beta und gamma angibt. Die Rotationsrate wird in Grad pro Sekunde ausgedrückt.
- [`DeviceMotionEvent.interval`](/de/docs/Web/API/DeviceMotionEvent/interval) {{ReadOnlyInline}}
  - : Eine Zahl, die das Intervall der Zeit in Millisekunden angibt, in dem Daten vom Gerät abgerufen werden.

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

- [Erkennen der Geräteorientierung](/de/docs/Web/API/Device_orientation_events/Detecting_device_orientation)
- [Erklärung von Orientierungs- und Bewegungsdaten](/de/docs/Web/API/Device_orientation_events/Orientation_and_motion_data_explained)
- [`DeviceOrientationEvent`](/de/docs/Web/API/DeviceOrientationEvent)
- [`deviceorientation`](/de/docs/Web/API/Window/deviceorientation_event) Ereignis
- [`deviceorientationabsolute`](/de/docs/Web/API/Window/deviceorientationabsolute_event) Ereignis
- [`devicemotion`](/de/docs/Web/API/Window/devicemotion_event) Ereignis
- [`Accelerometer`](/de/docs/Web/API/Accelerometer)
- [`LinearAccelerationSensor`](/de/docs/Web/API/LinearAccelerationSensor)
