---
title: DeviceOrientationEvent
slug: Web/API/DeviceOrientationEvent
l10n:
  sourceCommit: 358fa889eb017b3495e93d8b5aa6990752deb939
---

{{apiref("Device Orientation Events")}}{{securecontext_header}}

Die **`DeviceOrientationEvent`**-Schnittstelle der {{domxref("Device Orientation Events", "", "", "nocode")}} bietet Webentwicklern Informationen zur physischen Ausrichtung des Geräts, auf dem die Webseite läuft.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("DeviceOrientationEvent.DeviceOrientationEvent","DeviceOrientationEvent.DeviceOrientationEvent()")}}
  - : Erzeugt ein neues `DeviceOrientationEvent`.

## Instanzeigenschaften

- {{domxref("DeviceOrientationEvent.absolute")}} {{ReadOnlyInline}}
  - : Ein boolean, der angibt, ob das Gerät Orientierungsdaten absolut bereitstellt.
- {{domxref("DeviceOrientationEvent.alpha")}} {{ReadOnlyInline}}
  - : Eine Zahl, die die Bewegung des Geräts um die z-Achse darstellt, ausgedrückt in Grad mit Werten von 0 (einschließlich) bis 360 (ausschließlich).
- {{domxref("DeviceOrientationEvent.beta")}} {{ReadOnlyInline}}
  - : Eine Zahl, die die Bewegung des Geräts um die x-Achse darstellt, ausgedrückt in Grad mit Werten von -180 (einschließlich) bis 180 (einschließlich). Dies repräsentiert eine Vorwärts- und Rückwärtsbewegung des Geräts.
- {{domxref("DeviceOrientationEvent.gamma")}} {{ReadOnlyInline}}
  - : Eine Zahl, die die Bewegung des Geräts um die y-Achse darstellt, ausgedrückt in Grad mit Werten von -90 (einschließlich) bis 90 (einschließlich). Dies repräsentiert eine Links-zu-Rechts-Bewegung des Geräts.
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

- {{domxref("Device orientation events/Detecting device orientation", "Erkennung der Geräteausrichtung", "", "nocode")}}
- {{domxref("Device orientation events/Orientation and motion data explained", "Orientierung und Bewegungsdaten erklärt", "", "nocode")}}
- {{domxref("DeviceMotionEvent")}}
- {{domxref("Window.devicemotion_event", "devicemotion")}} Ereignis
- {{domxref("Window.deviceorientation_event", "deviceorientation")}} Ereignis
- {{domxref("Window.deviceorientationabsolute_event", "deviceorientationabsolute")}} Ereignis
