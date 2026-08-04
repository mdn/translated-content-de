---
title: DeviceOrientationEvent
slug: Web/API/DeviceOrientationEvent
l10n:
  sourceCommit: e57e3fdd4ab6fb372ddc3d78e5b428f318202426
---

{{apiref("Device Orientation Events")}}{{securecontext_header}}

Das **`DeviceOrientationEvent`**-Interface der [Device Orientation Events](/de/docs/Web/API/Device_orientation_events) bietet Webentwicklern Informationen von der physischen Ausrichtung des Geräts, auf dem die Webseite läuft.

{{InheritanceDiagram}}

## Konstruktor

- [`DeviceOrientationEvent.DeviceOrientationEvent()`](/de/docs/Web/API/DeviceOrientationEvent/DeviceOrientationEvent)
  - : Erstellt ein neues `DeviceOrientationEvent`.

## Statische Methoden

- [`DeviceOrientationEvent.requestPermission()`](/de/docs/Web/API/DeviceOrientationEvent/requestPermission_static)
  - : Fordert die Erlaubnis des Nutzers an, auf die Ausrichtungsdaten des Geräts zuzugreifen. Gibt ein {{jsxref("Promise")}} zurück, das mit einem String von `"granted"` oder `"denied"` aufgelöst wird.

## Instanz-Eigenschaften

- [`DeviceOrientationEvent.absolute`](/de/docs/Web/API/DeviceOrientationEvent/absolute) {{ReadOnlyInline}}
  - : Ein Boolean, der angibt, ob das Gerät die Ausrichtungsdaten absolut bereitstellt oder nicht.
- [`DeviceOrientationEvent.alpha`](/de/docs/Web/API/DeviceOrientationEvent/alpha) {{ReadOnlyInline}}
  - : Eine Zahl, die die Bewegung des Geräts um die z-Achse repräsentiert, ausgedrückt in Grad mit Werten von 0 (einschließlich) bis 360 (ausschließlich).
- [`DeviceOrientationEvent.beta`](/de/docs/Web/API/DeviceOrientationEvent/beta) {{ReadOnlyInline}}
  - : Eine Zahl, die die Bewegung des Geräts um die x-Achse repräsentiert, ausgedrückt in Grad mit Werten von -180 (einschließlich) bis 180 (ausschließlich). Dies repräsentiert eine Vorwärts- oder Rückwärtsbewegung des Geräts.
- [`DeviceOrientationEvent.gamma`](/de/docs/Web/API/DeviceOrientationEvent/gamma) {{ReadOnlyInline}}
  - : Eine Zahl, die die Bewegung des Geräts um die y-Achse repräsentiert, ausgedrückt in Grad mit Werten von -90 (einschließlich) bis 90 (ausschließlich). Dies repräsentiert eine Links- oder Rechtsbewegung des Geräts.
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

- [Erkennen der Geräteausrichtung](/de/docs/Web/API/Device_orientation_events/Detecting_device_orientation)
- [Orientierungs- und Bewegungsdaten erklärt](/de/docs/Web/API/Device_orientation_events/Orientation_and_motion_data_explained)
- [`DeviceMotionEvent`](/de/docs/Web/API/DeviceMotionEvent)
- [`devicemotion`](/de/docs/Web/API/Window/devicemotion_event) Ereignis
- [`deviceorientation`](/de/docs/Web/API/Window/deviceorientation_event) Ereignis
- [`deviceorientationabsolute`](/de/docs/Web/API/Window/deviceorientationabsolute_event) Ereignis
