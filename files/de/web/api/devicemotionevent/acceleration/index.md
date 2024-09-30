---
title: "DeviceMotionEvent: acceleration-Eigenschaft"
short-title: acceleration
slug: Web/API/DeviceMotionEvent/acceleration
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{APIRef("Device Orientation Events")}}{{securecontext_header}}

Die schreibgeschützte Eigenschaft **`acceleration`** des [`DeviceMotionEvent`](/de/docs/Web/API/DeviceMotionEvent)-Interfaces gibt die vom Gerät erfasste Beschleunigung in [Metern pro Sekunde zum Quadrat (m/s²)](https://en.wikipedia.org/wiki/Meter_per_second_squared) zurück. Der Beschleunigungswert schließt nicht den Einfluss der Gravitationskraft ein, im Gegensatz zu [`DeviceMotionEvent.accelerationIncludingGravity`](/de/docs/Web/API/DeviceMotionEvent/accelerationIncludingGravity).

> [!NOTE]
> Wenn die Hardware nicht weiß, wie die Gravitation aus den Beschleunigungsdaten zu entfernen ist, könnte dieser Wert im [`DeviceMotionEvent`](/de/docs/Web/API/DeviceMotionEvent) nicht vorhanden sein. In diesem Fall müssen Sie stattdessen [`DeviceMotionEvent.accelerationIncludingGravity`](/de/docs/Web/API/DeviceMotionEvent/accelerationIncludingGravity) verwenden.

## Wert

Die `acceleration`-Eigenschaft ist ein Objekt, das Informationen über die Beschleunigung auf drei Achsen liefert. Jede Achse wird durch ihre eigene Eigenschaft dargestellt:

- `x`
  - : Repräsentiert die Beschleunigung auf der x-Achse, die von Westen nach Osten verläuft
- `y`
  - : Repräsentiert die Beschleunigung auf der y-Achse, die von Süden nach Norden verläuft
- `z`
  - : Repräsentiert die Beschleunigung auf der z-Achse, die von unten nach oben verläuft

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Erkennen der Geräteausrichtung](/de/docs/Web/API/Device_orientation_events/Detecting_device_orientation)
- [Erläuterung von Orientierungs- und Bewegungsdaten](/de/docs/Web/API/Device_orientation_events/Orientation_and_motion_data_explained)
- [`devicemotion`](/de/docs/Web/API/Window/devicemotion_event) Ereignis
