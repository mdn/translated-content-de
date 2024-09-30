---
title: "DeviceOrientationEvent: absolute-Eigenschaft"
short-title: absolute
slug: Web/API/DeviceOrientationEvent/absolute
l10n:
  sourceCommit: 358fa889eb017b3495e93d8b5aa6990752deb939
---

{{APIRef("Device Orientation Events")}}{{securecontext_header}}

Die schreibgeschützte **`absolute`**-Eigenschaft des [`DeviceOrientationEvent`](/de/docs/Web/API/DeviceOrientationEvent)-Interfaces gibt an, ob das Gerät Orientierungsdaten absolut (d.h. in Bezug auf das Erdkoordinatensystem) oder unter Verwendung eines willkürlichen, vom Gerät bestimmten Rahmens bereitstellt.
Details finden Sie unter [Orientierungs- und Bewegungsdaten erklärt](/de/docs/Web/API/Device_orientation_events/Orientation_and_motion_data_explained).

## Wert

- `true`, wenn die Orientierungsdaten in `instanceOfDeviceOrientationEvent` als Unterschied zwischen dem Erdkoordinatensystem und dem Gerätekoordinatensystem bereitgestellt werden.
- `false`, wenn die Orientierungsdaten in Bezug auf ein willkürliches, vom Gerät bestimmtes Koordinatensystem bereitgestellt werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Erkennung der Geräteorientierung](/de/docs/Web/API/Device_orientation_events/Detecting_device_orientation)
- [Orientierungs- und Bewegungsdaten erklärt](/de/docs/Web/API/Device_orientation_events/Orientation_and_motion_data_explained)
- [`deviceorientation`](/de/docs/Web/API/Window/deviceorientation_event) Ereignis
- [`deviceorientationabsolute`](/de/docs/Web/API/Window/deviceorientationabsolute_event) Ereignis
