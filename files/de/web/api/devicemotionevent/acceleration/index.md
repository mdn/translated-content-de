---
title: "DeviceMotionEvent: acceleration-Eigenschaft"
short-title: acceleration
slug: Web/API/DeviceMotionEvent/acceleration
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{APIRef("Device Orientation Events")}}{{securecontext_header}}

Die schreibgeschützte **`acceleration`**-Eigenschaft des [`DeviceMotionEvent`](/de/docs/Web/API/DeviceMotionEvent)-Interfaces gibt die vom Gerät aufgezeichnete Beschleunigung in [Meter pro Sekunde-Quadrat (m/s²)](https://en.wikipedia.org/wiki/Meter_per_second_squared) zurück. Der Beschleunigungswert enthält nicht die Wirkung der Schwerkraft, im Gegensatz zu [`DeviceMotionEvent.accelerationIncludingGravity`](/de/docs/Web/API/DeviceMotionEvent/accelerationIncludingGravity).

> [!NOTE]
> Wenn die Hardware nicht weiß, wie man die Schwerkraft aus den Beschleunigungsdaten entfernen kann, könnte dieser Wert in dem [`DeviceMotionEvent`](/de/docs/Web/API/DeviceMotionEvent) nicht vorhanden sein. In diesem Fall sollten Sie stattdessen [`DeviceMotionEvent.accelerationIncludingGravity`](/de/docs/Web/API/DeviceMotionEvent/accelerationIncludingGravity) verwenden.

## Wert

Die `acceleration`-Eigenschaft ist ein Objekt, das Informationen über die Beschleunigung auf drei Achsen liefert. Jede Achse wird durch ihre eigene Eigenschaft dargestellt:

- `x`
  - : Repräsentiert die Beschleunigung auf der x-Achse, welche die West-Ost-Achse ist
- `y`
  - : Repräsentiert die Beschleunigung auf der y-Achse, welche die Süd-Nord-Achse ist
- `z`
  - : Repräsentiert die Beschleunigung auf der z-Achse, welche die Abwärts-Aufwärts-Achse ist

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Erkennen der Geräteausrichtung](/de/docs/Web/API/Device_orientation_events/Detecting_device_orientation)
- [Ausrichtungs- und Bewegungsdaten erklärt](/de/docs/Web/API/Device_orientation_events/Orientation_and_motion_data_explained)
- [`devicemotion`](/de/docs/Web/API/Window/devicemotion_event) Ereignis
