---
title: "DeviceOrientationEvent: Absolute-Eigenschaft"
short-title: absolute
slug: Web/API/DeviceOrientationEvent/absolute
l10n:
  sourceCommit: 358fa889eb017b3495e93d8b5aa6990752deb939
---

{{APIRef("Device Orientation Events")}}{{securecontext_header}}

Die **`absolute`** schreibgeschützte Eigenschaft des {{domxref("DeviceOrientationEvent")}}-Interfaces gibt an, ob das Gerät Orientierungsdaten absolut bereitstellt (also in Bezug auf das Koordinatensystem der Erde) oder ein willkürlich vom Gerät bestimmtes Koordinatensystem verwendet.
Weitere Details finden Sie unter [Erläuterung von Orientierungs- und Bewegungsdaten](/de/docs/Web/API/Device_orientation_events/Orientation_and_motion_data_explained).

## Wert

- `true`, wenn die Orientierungsdaten in `instanceOfDeviceOrientationEvent` als Differenz zwischen dem Erdkoordinatensystem und dem Gerätekoordinatensystem bereitgestellt werden.
- `false`, wenn die Orientierungsdaten in Bezug auf ein vom Gerät bestimmtes willkürliches Koordinatensystem bereitgestellt werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Device orientation events/Detecting device orientation", "Erkennung der Geräteausrichtung", "", "nocode")}}
- {{domxref("Device orientation events/Orientation and motion data explained", "Erläuterung von Orientierungs- und Bewegungsdaten", "", "nocode")}}
- {{domxref("Window.deviceorientation_event", "deviceorientation")}}-Ereignis
- {{domxref("Window.deviceorientationabsolute_event", "deviceorientationabsolute")}}-Ereignis
