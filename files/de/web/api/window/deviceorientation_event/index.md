---
title: "Fenster: deviceorientation Ereignis"
short-title: deviceorientation
slug: Web/API/Window/deviceorientation_event
l10n:
  sourceCommit: 6d4f585b94068dc0dfd733047fb2229dca38b1eb
---

{{APIRef("Device Orientation Events")}}{{securecontext_header}}

Das **`deviceorientation`** Ereignis wird ausgelöst, wenn frische Daten von einem Orientierungssensor über die aktuelle Ausrichtung des Geräts im Vergleich zum Erdkoordinatenrahmen verfügbar sind. Diese Daten werden von einem Magnetometer im Gerät gesammelt.

Siehe [Erklärung zu Orientierungs- und Bewegungsdaten](/de/docs/Web/API/Device_orientation_events/Orientation_and_motion_data_explained) für Details.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht gebubbelt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("deviceorientation", (event) => {});

ondeviceorientation = (event) => {};
```

## Ereignistyp

Ein {{domxref("DeviceOrientationEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("DeviceOrientationEvent")}}

## Ereigniseigenschaften

- {{domxref("DeviceOrientationEvent.absolute")}} {{ReadOnlyInline}}
  - : Ein boolescher Wert, der anzeigt, ob das Gerät die Orientierungsdaten absolut bereitstellt.
- {{domxref("DeviceOrientationEvent.alpha")}} {{ReadOnlyInline}}
  - : Eine Zahl, die die Bewegung des Geräts um die z-Achse darstellt, ausgedrückt in Grad mit Werten von 0 (einschließlich) bis 360 (ausschließlich).
- {{domxref("DeviceOrientationEvent.beta")}} {{ReadOnlyInline}}
  - : Eine Zahl, die die Bewegung des Geräts um die x-Achse darstellt, ausgedrückt in Grad mit Werten von -180 (einschließlich) bis 180 (ausschließlich). Dies repräsentiert die Bewegung von vorne nach hinten des Geräts.
- {{domxref("DeviceOrientationEvent.gamma")}} {{ReadOnlyInline}}
  - : Eine Zahl, die die Bewegung des Geräts um die y-Achse darstellt, ausgedrückt in Grad mit Werten von -90 (einschließlich) bis 90 (ausschließlich). Dies repräsentiert die Bewegung von links nach rechts des Geräts.
- `DeviceOrientationEvent.webkitCompassHeading` {{Non-Standard_Inline}} {{ReadOnlyInline}}
  - : Eine Zahl, die den Unterschied zwischen der Bewegung des Geräts um die z-Achse des Weltsystems und der Richtung nach Norden darstellt, ausgedrückt in Grad mit Werten von 0 bis 360.
- `DeviceOrientationEvent.webkitCompassAccuracy` {{Non-Standard_Inline}} {{ReadOnlyInline}}
  - : Die Genauigkeit des Kompasses als positive oder negative Abweichung. Sie beträgt normalerweise 10.

## Beispiele

```js
if (window.DeviceOrientationEvent) {
  window.addEventListener(
    "deviceorientation",
    (event) => {
      const rotateDegrees = event.alpha; // alpha: Drehung um die z-Achse
      const leftToRight = event.gamma; // gamma: von links nach rechts
      const frontToBack = event.beta; // beta: Vor-und-Zurück-Bewegung

      handleOrientationEvent(frontToBack, leftToRight, rotateDegrees);
    },
    true,
  );
}

const handleOrientationEvent = (frontToBack, leftToRight, rotateDegrees) => {
  // etwas Erstaunliches tun
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`devicemotion`](/de/docs/Web/API/Window/devicemotion_event)
- [Geräteausrichtung erkennen](/de/docs/Web/API/Device_orientation_events/Detecting_device_orientation)
- [Erklärung zu Orientierungs- und Bewegungsdaten](/de/docs/Web/API/Device_orientation_events/Orientation_and_motion_data_explained)
