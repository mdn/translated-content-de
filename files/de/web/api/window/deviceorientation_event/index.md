---
title: "Window: deviceorientation event"
short-title: deviceorientation
slug: Web/API/Window/deviceorientation_event
l10n:
  sourceCommit: 6ba4f3b350be482ba22726f31bbcf8ad3c92a9c6
---

{{APIRef("Device Orientation Events")}}{{securecontext_header}}

Das **`deviceorientation`**-Ereignis wird ausgelöst, wenn frische Daten von einem Orientierungssensor zur aktuellen Ausrichtung des Geräts im Vergleich zum Erdkoordinatenrahmen verfügbar sind. Diese Daten werden von einem Magnetometer im Gerät erfasst.

Details finden Sie unter [Erläuterung zu Orientierung und Bewegungsdaten](/de/docs/Web/API/Device_orientation_events/Orientation_and_motion_data_explained).

Dieses Ereignis ist nicht abbruchsicher und wird nicht propagiert.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("deviceorientation", (event) => { })

ondeviceorientation = (event) => { }
```

## Ereignistyp

Ein [`DeviceOrientationEvent`](/de/docs/Web/API/DeviceOrientationEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("DeviceOrientationEvent")}}

## Ereigniseigenschaften

- [`DeviceOrientationEvent.absolute`](/de/docs/Web/API/DeviceOrientationEvent/absolute) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der anzeigt, ob das Gerät die Orientierung absolut bereitstellt.
- [`DeviceOrientationEvent.alpha`](/de/docs/Web/API/DeviceOrientationEvent/alpha) {{ReadOnlyInline}}
  - : Eine Zahl, die die Bewegung des Geräts um die z-Achse repräsentiert, ausgedrückt in Grad mit Werten im Bereich von 0 (inklusive) bis 360 (exklusiv).
- [`DeviceOrientationEvent.beta`](/de/docs/Web/API/DeviceOrientationEvent/beta) {{ReadOnlyInline}}
  - : Eine Zahl, die die Bewegung des Geräts um die x-Achse repräsentiert, ausgedrückt in Grad mit Werten im Bereich von -180 (inklusive) bis 180 (exklusiv). Dies repräsentiert die Vorwärts- und Rückwärtsbewegung des Geräts.
- [`DeviceOrientationEvent.gamma`](/de/docs/Web/API/DeviceOrientationEvent/gamma) {{ReadOnlyInline}}
  - : Eine Zahl, die die Bewegung des Geräts um die y-Achse repräsentiert, ausgedrückt in Grad mit Werten im Bereich von -90 (inklusive) bis 90 (exklusiv). Dies repräsentiert die Links-Rechts-Bewegung des Geräts.
- `DeviceOrientationEvent.webkitCompassHeading` {{Non-Standard_Inline}} {{ReadOnlyInline}}
  - : Eine Zahl, die den Unterschied zwischen der Bewegung des Geräts um die z-Achse des Weltsystems und der Nordrichtung darstellt, ausgedrückt in Grad mit Werten im Bereich von 0 bis 360.
- `DeviceOrientationEvent.webkitCompassAccuracy` {{Non-Standard_Inline}} {{ReadOnlyInline}}
  - : Die Genauigkeit des Kompasses, angegeben als positive oder negative Abweichung. Sie beträgt normalerweise 10.

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

function handleOrientationEvent(frontToBack, leftToRight, rotateDegrees) {
  // do something amazing
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`devicemotion`](/de/docs/Web/API/Window/devicemotion_event)
- [Erkennung der Geräteausrichtung](/de/docs/Web/API/Device_orientation_events/Detecting_device_orientation)
- [Erläuterung zu Orientierung und Bewegungsdaten](/de/docs/Web/API/Device_orientation_events/Orientation_and_motion_data_explained)
