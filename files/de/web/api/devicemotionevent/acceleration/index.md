---
title: "DeviceMotionEvent: acceleration-Eigenschaft"
short-title: acceleration
slug: Web/API/DeviceMotionEvent/acceleration
l10n:
  sourceCommit: 98228d82a440832c1028a2e0f1c01dce2ff46ed3
---

{{APIRef("Device Orientation Events")}}{{securecontext_header}}

Die **`acceleration`** schreibgeschützte Eigenschaft des [`DeviceMotionEvent`](/de/docs/Web/API/DeviceMotionEvent)-Interfaces gibt die durch das Gerät gemessene Beschleunigung in [Metern pro Sekunde zum Quadrat (m/s²)](https://en.wikipedia.org/wiki/Meter_per_second_squared) zurück. Dieser Wert schließt die Auswirkungen der Gravitationskraft nicht ein, im Gegensatz zur [`DeviceMotionEvent.accelerationIncludingGravity`](/de/docs/Web/API/DeviceMotionEvent/accelerationIncludingGravity)-Eigenschaft.

> [!NOTE]
> Wenn die Hardware nicht in der Lage ist, die Schwerkraft aus den Beschleunigungsdaten zu entfernen, kann dieser Wert in der [`DeviceMotionEvent`](/de/docs/Web/API/DeviceMotionEvent)-Instanz fehlen. In diesem Fall müssen Sie stattdessen die [`DeviceMotionEvent.accelerationIncludingGravity`](/de/docs/Web/API/DeviceMotionEvent/accelerationIncludingGravity)-Eigenschaft verwenden.

## Wert

Die `acceleration`-Eigenschaft ist ein Objekt, das Informationen über die Beschleunigung entlang der drei Achsen im [Geräte-Koordinatensystem](/de/docs/Web/API/Device_orientation_events/Orientation_and_motion_data_explained#device_coordinate_frame) bereitstellt. Jede Achse wird durch eine eigene Eigenschaft dargestellt:

- `x`
  - : Repräsentiert die Beschleunigung entlang der x-Achse
- `y`
  - : Repräsentiert die Beschleunigung entlang der y-Achse
- `z`
  - : Repräsentiert die Beschleunigung entlang der z-Achse

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Erkennung der Geräteausrichtung](/de/docs/Web/API/Device_orientation_events/Detecting_device_orientation)
- [Erläuterung zu Orientierungs- und Bewegungsdaten](/de/docs/Web/API/Device_orientation_events/Orientation_and_motion_data_explained)
- [`devicemotion`](/de/docs/Web/API/Window/devicemotion_event)-Ereignis
