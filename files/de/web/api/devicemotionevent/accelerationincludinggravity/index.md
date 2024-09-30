---
title: "DeviceMotionEvent: Eigenschaft accelerationIncludingGravity"
short-title: accelerationIncludingGravity
slug: Web/API/DeviceMotionEvent/accelerationIncludingGravity
l10n:
  sourceCommit: 358fa889eb017b3495e93d8b5aa6990752deb939
---

{{APIRef("Device Orientation Events")}}{{securecontext_header}}

Die **`accelerationIncludingGravity`** schreibgeschützte Eigenschaft der [`DeviceMotionEvent`](/de/docs/Web/API/DeviceMotionEvent)-Schnittstelle gibt die Menge an Beschleunigung zurück, die vom Gerät in [Metern pro Quadratsekunde (m/s²)](https://en.wikipedia.org/wiki/Meter_per_second_squared) aufgezeichnet wurde. Im Gegensatz zu [`DeviceMotionEvent.acceleration`](/de/docs/Web/API/DeviceMotionEvent/acceleration), die den Einfluss der Schwerkraft kompensiert, ist ihr Wert die Summe der vom Nutzer verursachten Beschleunigung und einer Beschleunigung, die gleich und entgegengesetzt zu der durch die Schwerkraft verursachten Beschleunigung ist. Mit anderen Worten, sie misst die [g-Kraft](https://en.wikipedia.org/wiki/G-Force). In der Praxis stellt dieser Wert die Rohdaten dar, die von einem [Beschleunigungsmesser](https://en.wikipedia.org/wiki/Accelerometer) gemessen werden.

Dieser Wert ist in der Regel nicht so nützlich wie [`DeviceMotionEvent.acceleration`](/de/docs/Web/API/DeviceMotionEvent/acceleration), kann aber auf Geräten, die nicht in der Lage sind, die Schwerkraft aus den Beschleunigungsdaten zu entfernen, wie zum Beispiel auf Geräten, die keinen Kreiselmesser haben, der einzige verfügbare Wert sein.

> **Note:** Der Name `accelerationIncludingGravity` kann irreführend sein. Diese Eigenschaft stellt die Beschleunigung einschließlich _der Auswirkungen der_ Schwerkraft dar. Wenn ein Gerät beispielsweise flach auf einer horizontalen Oberfläche liegt und der Bildschirm nach oben zeigt, wäre die Schwerkraft -9,8 entlang der Z-Achse, während `acceleration.z` 0 wäre und `accelerationIncludingGravity.z` 9,8 wäre. Ähnlich, wenn ein Gerät im freien Fall mit horizontalem Bildschirm nach oben ist, wäre die Schwerkraft -9,8 entlang der Z-Achse, während `acceleration.z` -9,8 und `accelerationIncludingGravity.z` 0 wäre.

## Wert

Die `accelerationIncludingGravity`-Eigenschaft ist ein Objekt, das Informationen über die Beschleunigung auf drei Achsen liefert. Jede Achse wird durch ihre eigene Eigenschaft dargestellt:

- `x`
  - : Stellt die Beschleunigung auf der x-Achse dar, die die West-Ost-Achse ist
- `y`
  - : Stellt die Beschleunigung auf der y-Achse dar, die die Süd-Nord-Achse ist
- `z`
  - : Stellt die Beschleunigung auf der z-Achse dar, die die Abwärts-Aufwärts-Achse ist

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Geräteausrichtung erkennen](/de/docs/Web/API/Device_orientation_events/Detecting_device_orientation)
- [Erläuterung von Orientierungs- und Bewegungsdaten](/de/docs/Web/API/Device_orientation_events/Orientation_and_motion_data_explained)
- [`devicemotion`](/de/docs/Web/API/Window/devicemotion_event)-Event
