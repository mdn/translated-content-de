---
title: "Fenster: deviceorientation Ereignis"
short-title: deviceorientation
slug: Web/API/Window/deviceorientation_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Device Orientation Events")}}{{securecontext_header}}

Das **`deviceorientation`** Ereignis wird ausgelöst, wenn neue Daten von einem Orientierungsensor über die aktuelle Ausrichtung des Geräts im Vergleich zum Erdkoordinatensystem verfügbar sind. Diese Daten werden von einem Magnetometer im Gerät gesammelt.

Siehe [Orientierungs- und Bewegungsdaten erklärt](/de/docs/Web/API/Device_orientation_events/Orientation_and_motion_data_erklärt) für Details.

Dieses Ereignis ist nicht abbruchbar und wird nicht weitergereicht.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("deviceorientation", (event) => { })

ondeviceorientation = (event) => { }
```

## Ereignistyp

Ein [`DeviceOrientationEvent`](/de/docs/Web/API/DeviceOrientationEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("DeviceOrientationEvent")}}

## Ereigniseigenschaften

- [`DeviceOrientationEvent.absolute`](/de/docs/Web/API/DeviceOrientationEvent/absolute) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob das Gerät absolute Orientierungsdaten liefert.
- [`DeviceOrientationEvent.alpha`](/de/docs/Web/API/DeviceOrientationEvent/alpha) {{ReadOnlyInline}}
  - : Eine Zahl, die die Bewegung des Geräts um die z-Achse herum darstellt, ausgedrückt in Grad mit Werten von 0 (einschließlich) bis 360 (ausschließlich).
- [`DeviceOrientationEvent.beta`](/de/docs/Web/API/DeviceOrientationEvent/beta) {{ReadOnlyInline}}
  - : Eine Zahl, die die Bewegung des Geräts um die x-Achse herum darstellt, ausgedrückt in Grad mit Werten von -180 (einschließlich) bis 180 (ausschließlich). Dies repräsentiert die Vorwärts-rückwärts-Bewegung des Geräts.
- [`DeviceOrientationEvent.gamma`](/de/docs/Web/API/DeviceOrientationEvent/gamma) {{ReadOnlyInline}}
  - : Eine Zahl, die die Bewegung des Geräts um die y-Achse herum darstellt, ausgedrückt in Grad mit Werten von -90 (einschließlich) bis 90 (ausschließlich). Dies repräsentiert die Links-rechts-Bewegung des Geräts.
- `DeviceOrientationEvent.webkitCompassHeading` {{Non-Standard_Inline}} {{ReadOnlyInline}}
  - : Eine Zahl, die den Unterschied zwischen der Bewegung des Geräts um die z-Achse des Weltsystems und der Nordrichtung darstellt, ausgedrückt in Grad mit Werten zwischen 0 und 360.
- `DeviceOrientationEvent.webkitCompassAccuracy` {{Non-Standard_Inline}} {{ReadOnlyInline}}
  - : Die Genauigkeit des Kompasses wird als positive oder negative Abweichung angegeben. Sie beträgt normalerweise 10.

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
- [Erkennung der Geräteausrichtung](/de/docs/Web/API/Device_orientation_events/Detecting_device_orientation)
- [Orientierungs- und Bewegungsdaten erklärt](/de/docs/Web/API/Device_orientation_events/Orientation_and_motion_data_explained)
