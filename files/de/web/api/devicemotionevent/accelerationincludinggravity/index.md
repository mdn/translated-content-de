---
title: "DeviceMotionEvent: accelerationIncludingGravity-Eigenschaft"
short-title: accelerationIncludingGravity
slug: Web/API/DeviceMotionEvent/accelerationIncludingGravity
l10n:
  sourceCommit: 358fa889eb017b3495e93d8b5aa6990752deb939
---

{{APIRef("Device Orientation Events")}}{{securecontext_header}}

Die schreibgeschützte Eigenschaft **`accelerationIncludingGravity`** der Schnittstelle [`DeviceMotionEvent`](/de/docs/Web/API/DeviceMotionEvent) gibt den Betrag der von dem Gerät registrierten Beschleunigung in [Meter pro Quadratsekunde (m/s²)](https://en.wikipedia.org/wiki/Meter_per_second_squared) zurück. Im Gegensatz zu [`DeviceMotionEvent.acceleration`](/de/docs/Web/API/DeviceMotionEvent/acceleration), die den Einfluss der Schwerkraft kompensiert, ist ihr Wert die Summe der vom Benutzer verursachten Beschleunigung des Geräts und einer Beschleunigung, die der von der Schwerkraft verursachten gleich und entgegengesetzt ist. Mit anderen Worten, sie misst die [g-Kraft](https://en.wikipedia.org/wiki/G-Force). In der Praxis stellt dieser Wert die Rohdaten dar, die von einem [Beschleunigungsmesser](https://en.wikipedia.org/wiki/Accelerometer) gemessen werden.

Dieser Wert ist normalerweise nicht so nützlich wie [`DeviceMotionEvent.acceleration`](/de/docs/Web/API/DeviceMotionEvent/acceleration), könnte aber der einzige verfügbare Wert auf Geräten sein, die nicht in der Lage sind, die Schwerkraft aus den Beschleunigungsdaten zu entfernen, wie z.B. auf Geräten ohne Gyroskop.

> **Note:** Der Name `accelerationIncludingGravity` kann irreführend sein. Diese Eigenschaft repräsentiert die Beschleunigung einschließlich _der Auswirkungen_ der Schwerkraft. Zum Beispiel: Wenn ein Gerät flach auf einer horizontalen Oberfläche liegt und der Bildschirm nach oben zeigt, wäre die Schwerkraft -9,8 entlang der Z-Achse, während `acceleration.z` 0 wäre und `accelerationIncludingGravity.z` 9,8. Ebenso: Wenn ein Gerät im freien Fall mit horizontalem und nach oben zeigendem Bildschirm ist, wäre die Schwerkraft -9,8 entlang der Z-Achse, während `acceleration.z` -9,8 und `accelerationIncludingGravity.z` 0 wäre.

## Wert

Die `accelerationIncludingGravity`-Eigenschaft ist ein Objekt, das Informationen über die Beschleunigung in drei Achsen liefert. Jede Achse wird durch ihre eigene Eigenschaft dargestellt:

- `x`
  - : Repräsentiert die Beschleunigung entlang der x-Achse, die von Westen nach Osten verläuft
- `y`
  - : Repräsentiert die Beschleunigung entlang der y-Achse, die von Süden nach Norden verläuft
- `z`
  - : Repräsentiert die Beschleunigung entlang der z-Achse, die von unten nach oben verläuft

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Erkennung der Geräteausrichtung](/de/docs/Web/API/Device_orientation_events/Detecting_device_orientation)
- [Erläuterung zu Orientierungs- und Bewegungsdaten](/de/docs/Web/API/Device_orientation_events/Orientation_and_motion_data_explained)
- [`devicemotion`](/de/docs/Web/API/Window/devicemotion_event) Ereignis
