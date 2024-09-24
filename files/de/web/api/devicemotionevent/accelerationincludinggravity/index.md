---
title: "DeviceMotionEvent: Eigenschaft accelerationIncludingGravity"
short-title: accelerationIncludingGravity
slug: Web/API/DeviceMotionEvent/accelerationIncludingGravity
l10n:
  sourceCommit: 358fa889eb017b3495e93d8b5aa6990752deb939
---

{{APIRef("Device Orientation Events")}}{{securecontext_header}}

Die schreibgeschützte Eigenschaft **`accelerationIncludingGravity`** des {{domxref("DeviceMotionEvent")}}-Interfaces gibt die durch das Gerät aufgezeichnete Beschleunigung in [Metern pro Sekunde zum Quadrat (m/s²)](https://en.wikipedia.org/wiki/Meter_per_second_squared) zurück. Im Gegensatz zu {{DOMxRef("DeviceMotionEvent.acceleration")}}, die die Einflüsse der Schwerkraft ausgleicht, ist ihr Wert die Summe der durch den Benutzer induzierten Beschleunigung des Geräts und einer der durch die Schwerkraft verursachten gleichen und entgegengesetzten Beschleunigung. Mit anderen Worten, sie misst die [g-Kraft](https://en.wikipedia.org/wiki/G-Force). In der Praxis stellt dieser Wert die Rohdaten dar, die von einem [Beschleunigungsmesser](https://en.wikipedia.org/wiki/Accelerometer) gemessen werden.

Dieser Wert ist in der Regel nicht so nützlich wie {{DOMxRef("DeviceMotionEvent.acceleration")}}, kann jedoch der einzige verfügbare Wert auf Geräten sein, die nicht in der Lage sind, die Schwerkraft aus den Beschleunigungsdaten zu entfernen, etwa auf Geräten, die keinen Kreiselkompass haben.

> **Note:** Der Name `accelerationIncludingGravity` kann irreführend sein. Diese Eigenschaft stellt die Beschleunigung einschließlich der _Auswirkungen_ der Schwerkraft dar. Wenn ein Gerät beispielsweise flach auf einer horizontalen Fläche mit dem Bildschirm nach oben liegt, wäre die Schwerkraft -9,8 entlang der Z-Achse, während `acceleration.z` 0 und `accelerationIncludingGravity.z` 9,8 wäre. Ähnlich wäre, wenn ein Gerät im freien Fall mit dem Bildschirm horizontal und nach oben zeigend wäre, die Schwerkraft -9,8 entlang der Z-Achse, während `acceleration.z` -9,8 und `accelerationIncludingGravity.z` 0 wäre.

## Wert

Die Eigenschaft `accelerationIncludingGravity` ist ein Objekt, das Informationen über die Beschleunigung auf drei Achsen liefert. Jede Achse wird durch ihre eigene Eigenschaft dargestellt:

- `x`
  - : Stellt die Beschleunigung entlang der x-Achse dar, welche die West-Ost-Achse ist
- `y`
  - : Stellt die Beschleunigung entlang der y-Achse dar, welche die Süd-Nord-Achse ist
- `z`
  - : Stellt die Beschleunigung entlang der z-Achse dar, welche die Abwärts-Aufwärts-Achse ist

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Device orientation events/Detecting device orientation", "Erkennen der Geräteausrichtung", "", "nocode")}}
- {{domxref("Device orientation events/Orientation and motion data explained", "Erläuterung der Orientierungs- und Bewegungsdaten", "", "nocode")}}
- {{DOMxRef("Window/devicemotion_event", "devicemotion")}} Ereignis
