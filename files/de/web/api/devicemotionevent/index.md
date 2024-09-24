---
title: DeviceMotionEvent
slug: Web/API/DeviceMotionEvent
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{APIRef("Device Orientation Events")}}{{securecontext_header}}

Die **`DeviceMotionEvent`** Schnittstelle der {{domxref("Device Orientation Events", "", "", "nocode")}} bietet Webentwicklern Informationen über die Geschwindigkeit von Änderungen der Position und Orientierung des Geräts.

> [!WARNING]
> Derzeit behandeln Firefox und Chrome die Koordinaten nicht auf die gleiche Weise. Bitte beachten Sie dies bei der Verwendung.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("DeviceMotionEvent.DeviceMotionEvent", "DeviceMotionEvent()")}}
  - : Erstellt ein neues `DeviceMotionEvent`.

## Instanz-Eigenschaften

- {{DOMxRef("DeviceMotionEvent.acceleration")}} {{ReadOnlyInline}}
  - : Ein Objekt, das die Beschleunigung des Geräts auf den drei Achsen X, Y und Z angibt. Die Beschleunigung wird in [m/s²](https://en.wikipedia.org/wiki/Meter_per_second_squared) ausgedrückt.
- {{DOMxRef("DeviceMotionEvent.accelerationIncludingGravity")}} {{ReadOnlyInline}}
  - : Ein Objekt, das die Beschleunigung des Geräts auf den drei Achsen X, Y und Z unter Berücksichtigung der Schwerkraft angibt. Die Beschleunigung wird in [m/s²](https://en.wikipedia.org/wiki/Meter_per_second_squared) ausgedrückt.
- {{DOMxRef("DeviceMotionEvent.rotationRate")}} {{ReadOnlyInline}}
  - : Ein Objekt, das die Änderungsrate der Orientierung des Geräts auf den drei Orientierungsachsen Alpha, Beta und Gamma angibt. Die Rotationsrate wird in Grad pro Sekunde ausgedrückt.
- {{DOMxRef("DeviceMotionEvent.interval")}} {{ReadOnlyInline}}
  - : Eine Zahl, die das Zeitintervall in Millisekunden darstellt, in dem Daten vom Gerät abgerufen werden.

## Beispiel

```js
window.addEventListener("devicemotion", (event) => {
  console.log(`${event.acceleration.x} m/s2`);
});
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{domxref("Device orientation events/Detecting device orientation", "Erkennung der Geräteausrichtung", "", "nocode")}}
- {{domxref("Device orientation events/Orientation and motion data explained", "Erklärung der Orientierungs- und Bewegungsdaten", "", "nocode")}}
- {{DOMxRef("DeviceOrientationEvent")}}
- {{DOMxRef("Window.deviceorientation_event", "deviceorientation")}} Ereignis
- {{DOMxRef("Window.deviceorientationabsolute_event", "deviceorientationabsolute")}} Ereignis
- {{DOMxRef("Window/devicemotion_event", "devicemotion")}} Ereignis
- {{DOMxRef("Accelerometer")}}
- {{DOMxRef("LinearAccelerationSensor")}}
