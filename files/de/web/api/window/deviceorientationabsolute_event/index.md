---
title: "Window: deviceorientationabsolute-Ereignis"
short-title: deviceorientationabsolute
slug: Web/API/Window/deviceorientationabsolute_event
l10n:
  sourceCommit: d4f95d5a32920324e2502a556d8bdd9d7f446718
---

{{APIRef("Device Orientation Events")}}{{securecontext_header}}

Das **`deviceorientationabsolute`**-Ereignis wird ausgelöst, wenn sich die absolute Geräteausrichtung ändert.

Dieses Ereignis kann nicht abgebrochen werden und steigt nicht im DOM-Baum auf.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("deviceorientationabsolute", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
ondeviceorientationabsolute = (event) => { }
```

## Ereignistyp

Ein [`DeviceOrientationEvent`](/de/docs/Web/API/DeviceOrientationEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("DeviceOrientationEvent")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`devicemotion`](/de/docs/Web/API/Window/devicemotion_event)-Ereignis
- [`deviceorientation`](/de/docs/Web/API/Window/deviceorientation_event)-Ereignis
- [Geräteausrichtung erkennen](/de/docs/Web/API/Device_orientation_events/Detecting_device_orientation)
