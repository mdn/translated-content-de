---
title: "PointerEvent: tiltX-Eigenschaft"
short-title: tiltX
slug: Web/API/PointerEvent/tiltX
l10n:
  sourceCommit: c2636b43e43eb705d142aae874c5412b4b3e6b6e
---

{{ APIRef("Pointer Events") }}

Die schreibgeschützte **`tiltX`**-Eigenschaft der [`PointerEvent`](/de/docs/Web/API/PointerEvent)-Schnittstelle ist der Winkel (in Grad) zwischen der _Y-Z-Ebene_ des Zeigegeräts und dem Bildschirm. Diese Eigenschaft ist typischerweise nur für einen Stift-/Stylus-Zeigertyp nützlich.

Abhängig von der spezifischen Hardware und Plattform erhalten Benutzeragenten wahrscheinlich nur ein Set von Werten für die Ausrichtung des Transducers relativ zur Bildebene – entweder `tiltX` und [`tiltY`](/de/docs/Web/API/PointerEvent/tilty) oder [`altitudeAngle`](/de/docs/Web/API/PointerEvent/altitudeAngle) und [`azimuthAngle`](/de/docs/Web/API/PointerEvent/azimuthAngle).

![Der tiltX-Winkel eines Zeigers im Vergleich zum tiltY-Winkel](tilt_x_y_angles.svg)

Für eine zusätzliche Darstellung dieser Eigenschaft siehe [Abbildung 2 in der Spezifikation](https://w3c.github.io/pointerevents/#dom-pointerevent-tiltx).

## Wert

Der Winkel in Grad zwischen der Y-Z-Ebene des Zeigegeräts (Stylus) und dem Bildschirm. Der Wertebereich liegt zwischen `-90` und `90` Grad, inklusive, wobei ein positiver Wert eine Neigung nach rechts anzeigt. Für Geräte, die diese Eigenschaft nicht unterstützen, ist der Wert `0`.

## Beispiele

Dieses Beispiel zeigt das einfache Zugreifen auf die `tiltX`- und [`tiltY`](/de/docs/Web/API/PointerEvent/tiltY)-Eigenschaften.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`PointerEvent.tiltY`](/de/docs/Web/API/PointerEvent/tiltY)
- [`PointerEvent.altitudeAngle`](/de/docs/Web/API/PointerEvent/altitudeAngle)
- [`PointerEvent.azimuthAngle`](/de/docs/Web/API/PointerEvent/azimuthAngle)
