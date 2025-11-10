---
title: "Window: deviceorientationabsolute Event"
short-title: deviceorientationabsolute
slug: Web/API/Window/deviceorientationabsolute_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Device Orientation Events")}}{{securecontext_header}}

Das **`deviceorientationabsolute`**-Ereignis wird ausgelöst, wenn sich die absolute Geräteausrichtung ändert.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergegeben.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder legen Sie eine Event-Handler-Eigenschaft fest.

```js-nolint
addEventListener("deviceorientationabsolute", (event) => { })

ondeviceorientationabsolute = (event) => { }
```

## Ereignistyp

Ein [`DeviceOrientationEvent`](/de/docs/Web/API/DeviceOrientationEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("DeviceOrientationEvent")}}

## Ereigniseigenschaften

- [`DeviceOrientationEvent.absolute`](/de/docs/Web/API/DeviceOrientationEvent/absolute) {{ReadOnlyInline}}
  - : Ein Boolean-Wert, der angibt, ob das Gerät Orientierungsdaten absolut bereitstellt.
- [`DeviceOrientationEvent.alpha`](/de/docs/Web/API/DeviceOrientationEvent/alpha) {{ReadOnlyInline}}
  - : Eine Zahl, die die Bewegung des Geräts um die z-Achse darstellt, ausgedrückt in Grad mit Werten im Bereich von 0 (einschließlich) bis 360 (ausschließlich).
- [`DeviceOrientationEvent.beta`](/de/docs/Web/API/DeviceOrientationEvent/beta) {{ReadOnlyInline}}
  - : Eine Zahl, die die Bewegung des Geräts um die x-Achse darstellt, ausgedrückt in Grad mit Werten im Bereich von -180 (einschließlich) bis 180 (ausschließlich). Dies stellt eine Vorwärts- und Rückwärtsbewegung des Geräts dar.
- [`DeviceOrientationEvent.gamma`](/de/docs/Web/API/DeviceOrientationEvent/gamma) {{ReadOnlyInline}}
  - : Eine Zahl, die die Bewegung des Geräts um die y-Achse darstellt, ausgedrückt in Grad mit Werten im Bereich von -90 (einschließlich) bis 90 (ausschließlich). Dies stellt eine Links-Rechts-Bewegung des Geräts dar.
- `DeviceOrientationEvent.webkitCompassHeading` {{Non-standard_Inline}} {{ReadOnlyInline}}
  - : Eine Zahl, die den Unterschied zwischen der Bewegung des Geräts um die z-Achse des Weltsystems und der Richtung nach Norden darstellt, ausgedrückt in Grad mit Werten im Bereich von 0 bis 360.
- `DeviceOrientationEvent.webkitCompassAccuracy` {{Non-standard_Inline}} {{ReadOnlyInline}}
  - : Die Genauigkeit des Kompasses wird als positive oder negative Abweichung angegeben. Sie beträgt normalerweise 10.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`devicemotion`](/de/docs/Web/API/Window/devicemotion_event) Ereignis
- [`deviceorientation`](/de/docs/Web/API/Window/deviceorientation_event) Ereignis
- [Erkennung der Geräteausrichtung](/de/docs/Web/API/Device_orientation_events/Detecting_device_orientation)
