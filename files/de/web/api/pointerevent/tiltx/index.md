---
title: "PointerEvent: tiltX-Eigenschaft"
short-title: tiltX
slug: Web/API/PointerEvent/tiltX
l10n:
  sourceCommit: c2636b43e43eb705d142aae874c5412b4b3e6b6e
---

{{ APIRef("Pointer Events") }}

Die **`tiltX`**-Eigenschaft der [`PointerEvent`](/de/docs/Web/API/PointerEvent) Schnittstelle ist der Winkel (in Grad) zwischen der _Y-Z-Ebene_ des Zeigers und dem Bildschirm.
Diese Eigenschaft ist typischerweise nur für einen Stift/Stylus-Zeigertyp nützlich.

Abhängig von der spezifischen Hardware und Plattform werden Benutzeragenten wahrscheinlich nur einen Satz von Werten für die Ausrichtung des Transducers relativ zur Bildschirmebene erhalten - entweder `tiltX` und [`tiltY`](/de/docs/Web/API/PointerEvent/tilty) oder [`altitudeAngle`](/de/docs/Web/API/PointerEvent/altitudeAngle) und [`azimuthAngle`](/de/docs/Web/API/PointerEvent/azimuthAngle).

![Der tiltX-Winkel eines Zeigers im Vergleich zum tiltY-Winkel](tilt_x_y_angles.svg)

Für eine zusätzliche Illustration dieser Eigenschaft siehe [Abbildung 2 in der Spezifikation](https://w3c.github.io/pointerevents/#dom-pointerevent-tiltx).

## Wert

Der Winkel in Grad zwischen der Y-Z-Ebene des Zeigers (Stylus) und dem Bildschirm. Der Wertebereich ist von `-90` bis `90`, einschließlich, wobei ein positiver Wert eine Neigung nach rechts ist.
Für Geräte, die diese Eigenschaft nicht unterstützen, ist der Wert `0`.

## Beispiele

Dieses Beispiel zeigt den einfachen Zugriff auf die `tiltX`- und [`tiltY`](/de/docs/Web/API/PointerEvent/tiltY)-Eigenschaften.

```js
someElement.addEventListener(
  "pointerdown",
  (event) => {
    process_tilt(event.tiltX, event.tiltY);
  },
  false,
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`PointerEvent.tiltY`](/de/docs/Web/API/PointerEvent/tiltY)
- [`PointerEvent.altitudeAngle`](/de/docs/Web/API/PointerEvent/altitudeAngle)
- [`PointerEvent.azimuthAngle`](/de/docs/Web/API/PointerEvent/azimuthAngle)
