---
title: DeviceOrientationEvent
slug: Web/API/DeviceOrientationEvent
l10n:
  sourceCommit: bcfc05aac40b47aecad69d44c54e33bf5f9b4e41
---

{{apiref("Device Orientation Events")}}{{securecontext_header}}

Die **`DeviceOrientationEvent`**-Schnittstelle der [Device Orientation Events](/de/docs/Web/API/Device_orientation_events) liefert Webentwicklern Informationen über die physische Ausrichtung des Geräts, auf dem die Webseite läuft.

{{InheritanceDiagram}}

## Konstruktor

- [`DeviceOrientationEvent.DeviceOrientationEvent()`](/de/docs/Web/API/DeviceOrientationEvent/DeviceOrientationEvent)
  - : Erstellt ein neues `DeviceOrientationEvent`.

## Statische Methoden

- [`DeviceOrientationEvent.requestPermission()`](/de/docs/Web/API/DeviceOrientationEvent/requestPermission_static) {{experimental_inline}}
  - : Fordert die Erlaubnis des Benutzers an, auf die Ausrichtungsdaten des Geräts zuzugreifen. Gibt ein {{jsxref("Promise")}} zurück, das mit einem String von `"granted"` oder `"denied"` aufgelöst wird.

## Instanzeigenschaften

- [`DeviceOrientationEvent.absolute`](/de/docs/Web/API/DeviceOrientationEvent/absolute) {{ReadOnlyInline}}
  - : Ein Boolescher Wert, der angibt, ob das Gerät die Ausrichtungsdaten absolut bereitstellt.
- [`DeviceOrientationEvent.alpha`](/de/docs/Web/API/DeviceOrientationEvent/alpha) {{ReadOnlyInline}}
  - : Eine Zahl, die die Bewegung des Geräts um die z-Achse darstellt, ausgedrückt in Grad mit Werten von 0 (einschließlich) bis 360 (ausschließlich).
- [`DeviceOrientationEvent.beta`](/de/docs/Web/API/DeviceOrientationEvent/beta) {{ReadOnlyInline}}
  - : Eine Zahl, die die Bewegung des Geräts um die x-Achse darstellt, ausgedrückt in Grad mit Werten von -180 (einschließlich) bis 180 (ausschließlich). Dies stellt eine Vorwärts-Rückwärtsbewegung des Geräts dar.
- [`DeviceOrientationEvent.gamma`](/de/docs/Web/API/DeviceOrientationEvent/gamma) {{ReadOnlyInline}}
  - : Eine Zahl, die die Bewegung des Geräts um die y-Achse darstellt, ausgedrückt in Grad mit Werten von -90 (einschließlich) bis 90 (ausschließlich). Dies stellt eine Links-Rechts-Bewegung des Geräts dar.
- `DeviceOrientationEvent.webkitCompassHeading` {{Non-Standard_Inline}} {{ReadOnlyInline}}
  - : Eine Zahl, die den Unterschied zwischen der Bewegung des Geräts um die z-Achse des Weltsystems und der Richtung des Nordens darstellt, ausgedrückt in Grad mit Werten von 0 bis 360.
- `DeviceOrientationEvent.webkitCompassAccuracy` {{Non-Standard_Inline}} {{ReadOnlyInline}}
  - : Die Genauigkeit des Kompasses bedeutet, dass die Abweichung positiv oder negativ ist. Sie beträgt normalerweise 10.

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

- [Erkennung der Geräteausrichtung](/de/docs/Web/API/Device_orientation_events/Detecting_device_orientation)
- [Erläuterung von Ausrichtungs- und Bewegungsdaten](/de/docs/Web/API/Device_orientation_events/Orientation_and_motion_data_explained)
- [`DeviceMotionEvent`](/de/docs/Web/API/DeviceMotionEvent)
- [`devicemotion`](/de/docs/Web/API/Window/devicemotion_event) Ereignis
- [`deviceorientation`](/de/docs/Web/API/Window/deviceorientation_event) Ereignis
- [`deviceorientationabsolute`](/de/docs/Web/API/Window/deviceorientationabsolute_event) Ereignis
