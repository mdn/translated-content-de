---
title: DeviceMotionEvent
slug: Web/API/DeviceMotionEvent
l10n:
  sourceCommit: f74ea09f0510e670be74f76dc86d6e17e063d063
---

{{APIRef("Device Orientation Events")}}{{securecontext_header}}

Die **`DeviceMotionEvent`**-Schnittstelle der [Device Orientation Events](/de/docs/Web/API/Device_orientation_events) stellt Webentwicklern Informationen darüber bereit, wie schnell sich die Position und Ausrichtung eines Geräts ändern.

> [!WARNING]
> Derzeit behandeln Firefox und Chrome die Koordinaten unterschiedlich. Berücksichtigen Sie dies bei der Verwendung.

{{InheritanceDiagram}}

## Konstruktor

- [`DeviceMotionEvent()`](/de/docs/Web/API/DeviceMotionEvent/DeviceMotionEvent)
  - : Erstellt ein neues `DeviceMotionEvent`.

## Instanzeigenschaften

- [`DeviceMotionEvent.acceleration`](/de/docs/Web/API/DeviceMotionEvent/acceleration) {{ReadOnlyInline}}
  - : Ein Objekt, das die Beschleunigung des Geräts entlang der drei Achsen X, Y und Z angibt. Die Beschleunigung wird in [m/s²](https://en.wikipedia.org/wiki/Meter_per_second_squared) angegeben.
- [`DeviceMotionEvent.accelerationIncludingGravity`](/de/docs/Web/API/DeviceMotionEvent/accelerationIncludingGravity) {{ReadOnlyInline}}
  - : Ein Objekt, das die Beschleunigung des Geräts entlang der drei Achsen X, Y und Z unter Berücksichtigung der Schwerkraft angibt. Die Beschleunigung wird in [m/s²](https://en.wikipedia.org/wiki/Meter_per_second_squared) angegeben.
- [`DeviceMotionEvent.rotationRate`](/de/docs/Web/API/DeviceMotionEvent/rotationRate) {{ReadOnlyInline}}
  - : Ein Objekt, das die Änderungsrate der Geräteausrichtung um die drei Ausrichtungsachsen Alpha, Beta und Gamma angibt. Die Rotationsrate wird in Grad pro Sekunde angegeben.
- [`DeviceMotionEvent.interval`](/de/docs/Web/API/DeviceMotionEvent/interval) {{ReadOnlyInline}}
  - : Eine Zahl, die das Zeitintervall in Millisekunden angibt, in dem Daten vom Gerät abgerufen werden.

## Statische Methoden

- [`DeviceMotionEvent.requestPermission()`](/de/docs/Web/API/DeviceMotionEvent/requestPermission_static)
  - : Fordert die Berechtigung des Benutzers für den Zugriff auf Bewegungsdaten des Geräts vom Beschleunigungssensor und Gyroskop an. Gibt ein {{jsxref("Promise")}} zurück, das mit der Zeichenfolge `"granted"` oder `"denied"` erfüllt wird.

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

- [Geräteausrichtung erkennen](/de/docs/Web/API/Device_orientation_events/Detecting_device_orientation)
- [Ausrichtungs- und Bewegungsdaten erklärt](/de/docs/Web/API/Device_orientation_events/Orientation_and_motion_data_explained)
- [`DeviceOrientationEvent`](/de/docs/Web/API/DeviceOrientationEvent)
- [`deviceorientation`](/de/docs/Web/API/Window/deviceorientation_event)-Ereignis
- [`deviceorientationabsolute`](/de/docs/Web/API/Window/deviceorientationabsolute_event)-Ereignis
- [`devicemotion`](/de/docs/Web/API/Window/devicemotion_event)-Ereignis
- [`Accelerometer`](/de/docs/Web/API/Accelerometer)
- [`LinearAccelerationSensor`](/de/docs/Web/API/LinearAccelerationSensor)
