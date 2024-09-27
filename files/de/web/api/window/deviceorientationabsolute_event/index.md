---
title: "Window: deviceorientationabsolute Event"
short-title: deviceorientationabsolute
slug: Web/API/Window/deviceorientationabsolute_event
l10n:
  sourceCommit: 6d4f585b94068dc0dfd733047fb2229dca38b1eb
---

{{APIRef("Device Orientation Events")}}{{securecontext_header}}

Das **`deviceorientationabsolute`** Ereignis wird ausgelöst, wenn sich die absolute Geräteorientierung ändert.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht propagiert.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("deviceorientationabsolute", (event) => {});

ondeviceorientationabsolute = (event) => {};
```

## Ereignistyp

Ein [`DeviceOrientationEvent`](/de/docs/Web/API/DeviceOrientationEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("DeviceOrientationEvent")}}

## Ereigniseigenschaften

- [`DeviceOrientationEvent.absolute`](/de/docs/Web/API/DeviceOrientationEvent/absolute) {{ReadOnlyInline}}
  - : Ein Boolean, der anzeigt, ob das Gerät Orientierungsdaten absolut bereitstellt.
- [`DeviceOrientationEvent.alpha`](/de/docs/Web/API/DeviceOrientationEvent/alpha) {{ReadOnlyInline}}
  - : Eine Zahl, die die Bewegung des Geräts um die z-Achse darstellt, ausgedrückt in Grad mit Werten von 0 (einschließlich) bis 360 (ausschließlich).
- [`DeviceOrientationEvent.beta`](/de/docs/Web/API/DeviceOrientationEvent/beta) {{ReadOnlyInline}}
  - : Eine Zahl, die die Bewegung des Geräts um die x-Achse darstellt, ausgedrückt in Grad mit Werten von -180 (einschließlich) bis 180 (einschließlich). Dies stellt eine Vorwärts- und Rückwärtsbewegung des Geräts dar.
- [`DeviceOrientationEvent.gamma`](/de/docs/Web/API/DeviceOrientationEvent/gamma) {{ReadOnlyInline}}
  - : Eine Zahl, die die Bewegung des Geräts um die y-Achse darstellt, ausgedrückt in Grad mit Werten von -90 (einschließlich) bis 90 (einschließlich). Dies stellt eine Links- und Rechtsbewegung des Geräts dar.
- `DeviceOrientationEvent.webkitCompassHeading` {{Non-standard_Inline}} {{ReadOnlyInline}}
  - : Eine Zahl, die den Unterschied zwischen der Bewegung des Geräts um die z-Achse des Weltkoordinatensystems und der Richtung nach Norden darstellt, ausgedrückt in Grad mit Werten von 0 bis 360.
- `DeviceOrientationEvent.webkitCompassAccuracy` {{Non-standard_Inline}} {{ReadOnlyInline}}
  - : Die Genauigkeit des Kompasses angegeben als positive oder negative Abweichung. Sie beträgt normalerweise 10.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`devicemotion`](/de/docs/Web/API/Window/devicemotion_event) Ereignis
- [`deviceorientation`](/de/docs/Web/API/Window/deviceorientation_event) Ereignis
- [Erkennung der Geräteausrichtung](/de/docs/Web/API/Device_orientation_events/Detecting_device_orientation)
