---
title: DeviceOrientationEvent
slug: Web/API/DeviceOrientationEvent
l10n:
  sourceCommit: f74ea09f0510e670be74f76dc86d6e17e063d063
---

{{apiref("Device Orientation Events")}}{{securecontext_header}}

Die **`DeviceOrientationEvent`**-Schnittstelle der [Device Orientation Events](/de/docs/Web/API/Device_orientation_events) stellt Webentwicklern Informationen über die räumliche Ausrichtung des Geräts bereit, auf dem die Webseite ausgeführt wird.

{{InheritanceDiagram}}

## Konstruktor

- [`DeviceOrientationEvent.DeviceOrientationEvent()`](/de/docs/Web/API/DeviceOrientationEvent/DeviceOrientationEvent)
  - : Erstellt ein neues `DeviceOrientationEvent`.

## Instanzeigenschaften

- [`DeviceOrientationEvent.absolute`](/de/docs/Web/API/DeviceOrientationEvent/absolute) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob das Gerät absolute Ausrichtungsdaten bereitstellt.
- [`DeviceOrientationEvent.alpha`](/de/docs/Web/API/DeviceOrientationEvent/alpha) {{ReadOnlyInline}}
  - : Eine Zahl, die die Drehung des Geräts um die z-Achse in Grad angibt. Der Wertebereich reicht von 0 (einschließlich) bis 360 (ausschließlich).
- [`DeviceOrientationEvent.beta`](/de/docs/Web/API/DeviceOrientationEvent/beta) {{ReadOnlyInline}}
  - : Eine Zahl, die die Drehung des Geräts um die x-Achse in Grad angibt. Der Wertebereich reicht von -180 (einschließlich) bis 180 (ausschließlich). Dies beschreibt eine Vorwärts- und Rückwärtsbewegung des Geräts.
- [`DeviceOrientationEvent.gamma`](/de/docs/Web/API/DeviceOrientationEvent/gamma) {{ReadOnlyInline}}
  - : Eine Zahl, die die Drehung des Geräts um die y-Achse in Grad angibt. Der Wertebereich reicht von -90 (einschließlich) bis 90 (ausschließlich). Dies beschreibt eine Bewegung des Geräts nach links und rechts.
- `DeviceOrientationEvent.webkitCompassHeading` {{Non-Standard_Inline}} {{ReadOnlyInline}}
  - : Eine Zahl, die den Winkel zwischen der Ausrichtung des Geräts um die z-Achse des Weltkoordinatensystems und der Nordrichtung in Grad angibt. Der Wertebereich reicht von 0 bis 360.
- `DeviceOrientationEvent.webkitCompassAccuracy` {{Non-Standard_Inline}} {{ReadOnlyInline}}
  - : Die Genauigkeit des Kompasses gibt die mögliche positive oder negative Abweichung an. Sie beträgt üblicherweise 10.

## Statische Methoden

- [`DeviceOrientationEvent.requestPermission()`](/de/docs/Web/API/DeviceOrientationEvent/requestPermission_static)
  - : Fordert die Berechtigung des Benutzers zum Zugriff auf Ausrichtungsdaten des Geräts an. Gibt ein {{jsxref("Promise")}} zurück, das mit der Zeichenfolge `"granted"` oder `"denied"` erfüllt wird.

## Beispiel

```js
window.addEventListener("deviceorientation", (event) => {
  console.log(`${event.alpha} : ${event.beta} : ${event.gamma}`);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Geräteausrichtung erkennen](/de/docs/Web/API/Device_orientation_events/Detecting_device_orientation)
- [Ausrichtungs- und Bewegungsdaten erklärt](/de/docs/Web/API/Device_orientation_events/Orientation_and_motion_data_explained)
- [`DeviceMotionEvent`](/de/docs/Web/API/DeviceMotionEvent)
- Ereignis [`devicemotion`](/de/docs/Web/API/Window/devicemotion_event)
- Ereignis [`deviceorientation`](/de/docs/Web/API/Window/deviceorientation_event)
- Ereignis [`deviceorientationabsolute`](/de/docs/Web/API/Window/deviceorientationabsolute_event)
