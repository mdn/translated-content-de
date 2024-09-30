---
title: DeviceOrientationEvent
slug: Web/API/DeviceOrientationEvent
l10n:
  sourceCommit: 358fa889eb017b3495e93d8b5aa6990752deb939
---

{{apiref("Device Orientation Events")}}{{securecontext_header}}

Die **`DeviceOrientationEvent`**-Schnittstelle der [Device Orientation Events](/de/docs/Web/API/Device_Orientation_Events) stellt Webentwicklern Informationen über die physische Ausrichtung des Geräts, auf dem die Webseite ausgeführt wird, zur Verfügung.

{{InheritanceDiagram}}

## Konstruktor

- [`DeviceOrientationEvent.DeviceOrientationEvent()`](/de/docs/Web/API/DeviceOrientationEvent/DeviceOrientationEvent)
  - : Erstellt ein neues `DeviceOrientationEvent`.

## Instanzeigenschaften

- [`DeviceOrientationEvent.absolute`](/de/docs/Web/API/DeviceOrientationEvent/absolute) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob das Gerät absolute Orientierungsdaten liefert oder nicht.
- [`DeviceOrientationEvent.alpha`](/de/docs/Web/API/DeviceOrientationEvent/alpha) {{ReadOnlyInline}}
  - : Eine Zahl, die die Bewegung des Geräts um die z-Achse darstellt, in Grad ausgedrückt mit Werten von 0 (einschließlich) bis 360 (ausschließlich).
- [`DeviceOrientationEvent.beta`](/de/docs/Web/API/DeviceOrientationEvent/beta) {{ReadOnlyInline}}
  - : Eine Zahl, die die Bewegung des Geräts um die x-Achse darstellt, in Grad ausgedrückt mit Werten von -180 (einschließlich) bis 180 (ausschließlich). Dies stellt eine Vor- und Zurückbewegung des Geräts dar.
- [`DeviceOrientationEvent.gamma`](/de/docs/Web/API/DeviceOrientationEvent/gamma) {{ReadOnlyInline}}
  - : Eine Zahl, die die Bewegung des Geräts um die y-Achse darstellt, in Grad ausgedrückt mit Werten von -90 (einschließlich) bis 90 (ausschließlich). Dies stellt eine Links- und Rechtsbewegung des Geräts dar.
- `DeviceOrientationEvent.webkitCompassHeading` {{Non-Standard_Inline}} {{ReadOnlyInline}}
  - : Eine Zahl, die den Unterschied zwischen der Bewegung des Geräts um die z-Achse des Weltsystems und der Richtung nach Norden darstellt, ausgedrückt in Grad mit Werten von 0 bis 360.
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

- [Erkennen der Geräteausrichtung](/de/docs/Web/API/Device_orientation_events/Detecting_device_orientation)
- [Orientierungs- und Bewegungsdaten erklärt](/de/docs/Web/API/Device_orientation_events/Orientation_and_motion_data_explained)
- [`DeviceMotionEvent`](/de/docs/Web/API/DeviceMotionEvent)
- [`devicemotion`](/de/docs/Web/API/Window/devicemotion_event) Ereignis
- [`deviceorientation`](/de/docs/Web/API/Window/deviceorientation_event) Ereignis
- [`deviceorientationabsolute`](/de/docs/Web/API/Window/deviceorientationabsolute_event) Ereignis
