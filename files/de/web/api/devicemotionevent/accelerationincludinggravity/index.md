---
title: "DeviceMotionEvent: accelerationIncludingGravity-Eigenschaft"
short-title: accelerationIncludingGravity
slug: Web/API/DeviceMotionEvent/accelerationIncludingGravity
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{APIRef("Device Orientation Events")}}{{securecontext_header}}

Die schreibgeschützte **`accelerationIncludingGravity`**-Eigenschaft der [`DeviceMotionEvent`](/de/docs/Web/API/DeviceMotionEvent)-Schnittstelle gibt die Menge an Beschleunigung zurück, die vom Gerät gemessen wird, in [Metern pro Quadratssekunde (m/s²)](https://en.wikipedia.org/wiki/Meter_per_second_squared). Im Gegensatz zu [`DeviceMotionEvent.acceleration`](/de/docs/Web/API/DeviceMotionEvent/acceleration), das den Einfluss der Schwerkraft kompensiert, ist ihr Wert die Summe der vom Benutzer induzierten Beschleunigung des Geräts und einer gleichgroßen, entgegengesetzten Beschleunigung, die durch die Schwerkraft verursacht wird. Mit anderen Worten, sie misst den [G-Force](https://en.wikipedia.org/wiki/G-Force). In der Praxis stellt dieser Wert die Rohdaten dar, die von einem [Beschleunigungsmesser](https://en.wikipedia.org/wiki/Accelerometer) gemessen werden.

Dieser Wert ist normalerweise nicht so nützlich wie [`DeviceMotionEvent.acceleration`](/de/docs/Web/API/DeviceMotionEvent/acceleration), kann jedoch der einzige verfügbare Wert auf Geräten sein, die nicht in der Lage sind, die Schwerkraft aus den Beschleunigungsdaten zu entfernen, wie zum Beispiel auf Geräten ohne Gyroskop.

> [!NOTE]
> Der Name `accelerationIncludingGravity` kann irreführend sein. Diese Eigenschaft repräsentiert die Beschleunigung einschließlich der _Einflüsse_ der Schwerkraft. Beispielsweise, wenn ein Gerät flach auf einer horizontalen Oberfläche mit dem Bildschirm nach oben liegt, wäre die Schwerkraft -9,8 entlang der Z-Achse, während `acceleration.z` 0 wäre und `accelerationIncludingGravity.z` 9,8 wäre. Ebenso, wenn ein Gerät im freien Fall mit dem horizontalen Bildschirm nach oben gerichtet ist, wäre die Schwerkraft -9,8 entlang der Z-Achse, während `acceleration.z` -9,8 wäre und `accelerationIncludingGravity.z` 0 wäre.

## Wert

Die `accelerationIncludingGravity`-Eigenschaft ist ein Objekt, das Informationen über die Beschleunigung auf drei Achsen bereitstellt. Jede Achse wird durch ihre eigene Eigenschaft dargestellt:

- `x`
  - : Repräsentiert die Beschleunigung auf der x-Achse, die die West-Ost-Achse ist
- `y`
  - : Repräsentiert die Beschleunigung auf der y-Achse, die die Süd-Nord-Achse ist
- `z`
  - : Repräsentiert die Beschleunigung auf der z-Achse, die die Abwärts-Aufwärts-Achse ist

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Erkennung der Geräteausrichtung](/de/docs/Web/API/Device_orientation_events/Detecting_device_orientation)
- [Erläuterung von Orientierungs- und Bewegungsdaten](/de/docs/Web/API/Device_orientation_events/Orientation_and_motion_data_explained)
- [`devicemotion`](/de/docs/Web/API/Window/devicemotion_event)-Ereignis
