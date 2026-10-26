---
title: "Window: deviceorientation-Ereignis"
short-title: deviceorientation
slug: Web/API/Window/deviceorientation_event
l10n:
  sourceCommit: d4f95d5a32920324e2502a556d8bdd9d7f446718
---

{{APIRef("Device Orientation Events")}}{{securecontext_header}}

Das **`deviceorientation`**-Ereignis wird ausgelöst, wenn neue Daten eines Orientierungssensors zur aktuellen Ausrichtung des Geräts relativ zum Erdkoordinatensystem verfügbar sind. Diese Daten werden von einem Magnetometer im Gerät erfasst.

Weitere Informationen finden Sie unter [Erläuterung von Ausrichtungs- und Bewegungsdaten](/de/docs/Web/API/Device_orientation_events/Orientation_and_motion_data_explained).

Dieses Ereignis kann nicht abgebrochen werden und breitet sich nicht nach oben aus.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("deviceorientation", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) des Interfaces zuweisen:

```js-nolint
ondeviceorientation = (event) => { }
```

## Ereignistyp

Ein [`DeviceOrientationEvent`](/de/docs/Web/API/DeviceOrientationEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("DeviceOrientationEvent")}}

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
- [Geräteausrichtung erkennen](/de/docs/Web/API/Device_orientation_events/Detecting_device_orientation)
- [Erläuterung von Ausrichtungs- und Bewegungsdaten](/de/docs/Web/API/Device_orientation_events/Orientation_and_motion_data_explained)
