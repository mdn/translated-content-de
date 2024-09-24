---
title: "Fenster: deviceorientationabsolute Ereignis"
short-title: deviceorientationabsolute
slug: Web/API/Window/deviceorientationabsolute_event
l10n:
  sourceCommit: 6d4f585b94068dc0dfd733047fb2229dca38b1eb
---

{{APIRef("Device Orientation Events")}}{{securecontext_header}}

Das **`deviceorientationabsolute`** Ereignis wird ausgelöst, wenn sich die absolute Geräteausrichtung ändert.

Dieses Ereignis ist nicht abfangbar und wird nicht weitergegeben.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("deviceorientationabsolute", (event) => {});

ondeviceorientationabsolute = (event) => {};
```

## Ereignistyp

Ein {{domxref("DeviceOrientationEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("DeviceOrientationEvent")}}

## Ereigniseigenschaften

- {{domxref("DeviceOrientationEvent.absolute")}} {{ReadOnlyInline}}
  - : Ein Boolean-Wert, der anzeigt, ob das Gerät Orientierungsdaten absolut bereitstellt.
- {{domxref("DeviceOrientationEvent.alpha")}} {{ReadOnlyInline}}
  - : Eine Zahl, die die Bewegung des Geräts um die z-Achse darstellt, ausgedrückt in Grad mit Werten von 0 (einschließlich) bis 360 (ausschließlich).
- {{domxref("DeviceOrientationEvent.beta")}} {{ReadOnlyInline}}
  - : Eine Zahl, die die Bewegung des Geräts um die x-Achse darstellt, ausgedrückt in Grad mit Werten von -180 (einschließlich) bis 180 (ausschließlich). Dies repräsentiert eine Vorwärts- und Rückwärtsbewegung des Geräts.
- {{domxref("DeviceOrientationEvent.gamma")}} {{ReadOnlyInline}}
  - : Eine Zahl, die die Bewegung des Geräts um die y-Achse darstellt, ausgedrückt in Grad mit Werten von -90 (einschließlich) bis 90 (ausschließlich). Dies repräsentiert eine Links- und Rechtsbewegung des Geräts.
- `DeviceOrientationEvent.webkitCompassHeading` {{Non-standard_Inline}} {{ReadOnlyInline}}
  - : Eine Zahl, die den Unterschied zwischen der Bewegung des Geräts um die z-Achse des Weltsystems und der Richtung nach Norden darstellt, ausgedrückt in Grad mit Werten von 0 bis 360.
- `DeviceOrientationEvent.webkitCompassAccuracy` {{Non-standard_Inline}} {{ReadOnlyInline}}
  - : Die Genauigkeit des Kompasses, angegeben als positive oder negative Abweichung. Sie beträgt normalerweise 10.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{DOMxRef("window.devicemotion_event", "devicemotion")}} Ereignis
- {{DOMxRef("window.deviceorientation_event", "deviceorientation")}} Ereignis
- [Erkennung der Geräteausrichtung](/de/docs/Web/API/Device_orientation_events/Detecting_device_orientation)
