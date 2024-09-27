---
title: "DeviceOrientationEvent: absolute-Eigenschaft"
short-title: absolute
slug: Web/API/DeviceOrientationEvent/absolute
l10n:
  sourceCommit: 358fa889eb017b3495e93d8b5aa6990752deb939
---

{{APIRef("Device Orientation Events")}}{{securecontext_header}}

Die **`absolute`**-Eigenschaft der [`DeviceOrientationEvent`](/de/docs/Web/API/DeviceOrientationEvent)-Schnittstelle gibt an, ob das Gerät Orientierungsdaten absolut bereitstellt (d. h. in Bezug auf das Koordinatenrahmen der Erde) oder unter Verwendung eines beliebigen, vom Gerät bestimmten Rahmens. Weitere Informationen finden Sie unter [Orientation and motion data explained](/de/docs/Web/API/Device_orientation_events/Orientation_and_motion_data_explained).

## Wert

- `true`, wenn die Orientierungsdaten in `instanceOfDeviceOrientationEvent` als Unterschied zwischen dem Koordinatenrahmen der Erde und dem Koordinatenrahmen des Geräts bereitgestellt werden.
- `false`, wenn die Orientierungsdaten in Bezug auf einen beliebigen, vom Gerät bestimmten Koordinatenrahmen bereitgestellt werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Detecting device orientation](/de/docs/Web/API/Device_orientation_events/Detecting_device_orientation)
- [Orientation and motion data explained](/de/docs/Web/API/Device_orientation_events/Orientation_and_motion_data_explained)
- [`deviceorientation`](/de/docs/Web/API/Window/deviceorientation_event) Ereignis
- [`deviceorientationabsolute`](/de/docs/Web/API/Window/deviceorientationabsolute_event) Ereignis
