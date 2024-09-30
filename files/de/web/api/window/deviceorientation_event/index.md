---
title: "Window: deviceorientation Ereignis"
short-title: deviceorientation
slug: Web/API/Window/deviceorientation_event
l10n:
  sourceCommit: 6d4f585b94068dc0dfd733047fb2229dca38b1eb
---

{{APIRef("Device Orientation Events")}}{{securecontext_header}}

Das **`deviceorientation`** Ereignis wird ausgelöst, wenn neue Daten von einem Orientierungssensor über die aktuelle Orientierung des Geräts im Vergleich zum Erdkoordinatensystem verfügbar sind. Diese Daten werden von einem Magnetometer im Gerät erfasst.

Siehe [Orientierungs- und Bewegungsdaten erklärt](/de/docs/Web/API/Device_orientation_events/Orientation_and_motion_data_explained) für Details.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergegeben.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("deviceorientation", (event) => {});

ondeviceorientation = (event) => {};
```

## Ereignistyp

Ein [`DeviceOrientationEvent`](/de/docs/Web/API/DeviceOrientationEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("DeviceOrientationEvent")}}

## Ereigniseigenschaften

- [`DeviceOrientationEvent.absolute`](/de/docs/Web/API/DeviceOrientationEvent/absolute) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob das Gerät Orientierungsdaten absolut liefert.
- [`DeviceOrientationEvent.alpha`](/de/docs/Web/API/DeviceOrientationEvent/alpha) {{ReadOnlyInline}}
  - : Eine Zahl, die die Bewegung des Geräts um die z-Achse darstellt, ausgedrückt in Grad mit Werten von 0 (einschließlich) bis 360 (ausschließlich).
- [`DeviceOrientationEvent.beta`](/de/docs/Web/API/DeviceOrientationEvent/beta) {{ReadOnlyInline}}
  - : Eine Zahl, die die Bewegung des Geräts um die x-Achse darstellt, ausgedrückt in Grad mit Werten von -180 (einschließlich) bis 180 (ausschließlich). Dies repräsentiert die Vorwärts-Rückwärts-Bewegung des Geräts.
- [`DeviceOrientationEvent.gamma`](/de/docs/Web/API/DeviceOrientationEvent/gamma) {{ReadOnlyInline}}
  - : Eine Zahl, die die Bewegung des Geräts um die y-Achse darstellt, ausgedrückt in Grad mit Werten von -90 (einschließlich) bis 90 (ausschließlich). Dies repräsentiert die Links-Rechts-Bewegung des Geräts.
- `DeviceOrientationEvent.webkitCompassHeading` {{Non-Standard_Inline}} {{ReadOnlyInline}}
  - : Eine Zahl, die den Unterschied zwischen der Bewegung des Geräts um die z-Achse des Weltsystems und der Nordrichtung darstellt, ausgedrückt in Grad mit Werten von 0 bis 360.
- `DeviceOrientationEvent.webkitCompassAccuracy` {{Non-Standard_Inline}} {{ReadOnlyInline}}
  - : Die Genauigkeit des Kompasses, angegeben als positive oder negative Abweichung. In der Regel ist es 10.

## Beispiele

```js
if (window.DeviceOrientationEvent) {
  window.addEventListener(
    "deviceorientation",
    (event) => {
      const rotateDegrees = event.alpha; // alpha: rotation around z-axis
      const leftToRight = event.gamma; // gamma: left to right
      const frontToBack = event.beta; // beta: front back motion

      handleOrientationEvent(frontToBack, leftToRight, rotateDegrees);
    },
    true,
  );
}

const handleOrientationEvent = (frontToBack, leftToRight, rotateDegrees) => {
  // do something amazing
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`devicemotion`](/de/docs/Web/API/Window/devicemotion_event)
- [Erkennung der Geräteorientierung](/de/docs/Web/API/Device_orientation_events/Detecting_device_orientation)
- [Orientierungs- und Bewegungsdaten erklärt](/de/docs/Web/API/Device_orientation_events/Orientation_and_motion_data_explained)
