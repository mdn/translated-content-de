---
title: "PointerEvent: tiltY-Eigenschaft"
short-title: tiltY
slug: Web/API/PointerEvent/tiltY
l10n:
  sourceCommit: c2636b43e43eb705d142aae874c5412b4b3e6b6e
---

{{ APIRef("Pointer Events") }}

Die schreibgeschützte Eigenschaft **`tiltY`** des [`PointerEvent`](/de/docs/Web/API/PointerEvent)-Interfaces ist der Winkel (in Grad) zwischen der _X-Z-Ebene_ des Zeigers und dem Bildschirm.
Diese Eigenschaft ist typischerweise nur für einen Stift-/Stylus-Zeigertyp nützlich.

Je nach spezifischer Hardware und Plattform werden Benutzeragenten wahrscheinlich nur einen Satz von Werten für die Ausrichtung des Überträgers relativ zur Bildebene empfangen — entweder [`tiltX`](/de/docs/Web/API/PointerEvent/tiltx) und `tiltY` oder [`altitudeAngle`](/de/docs/Web/API/PointerEvent/altitudeAngle) und [`azimuthAngle`](/de/docs/Web/API/PointerEvent/azimuthAngle).

![Der tiltX-Winkel eines Zeigers im Vergleich zum tiltY-Winkel](tilt_x_y_angles.svg)

Für eine zusätzliche Illustration dieser Eigenschaft siehe [Abbildung 3 in der Spezifikation](https://w3c.github.io/pointerevents/#dom-pointerevent-tilty).

## Wert

Der Winkel in Grad zwischen der X-Z-Ebene des Zeigers (Stylus) und dem Bildschirm.
Der Wertebereich liegt zwischen `-90` und `90`, einschließlich, wobei ein positiver Wert eine Neigung zum Benutzer hin darstellt.
Für Geräte, die diese Eigenschaft nicht unterstützen, beträgt der Wert `0`.

## Beispiele

Dieses Beispiel veranschaulicht das einfache Zugreifen auf die [`tiltX`](/de/docs/Web/API/PointerEvent/tiltX) und `tiltY`-Eigenschaften.

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

- [`PointerEvent.tiltX`](/de/docs/Web/API/PointerEvent/tiltX)
- [`PointerEvent.altitudeAngle`](/de/docs/Web/API/PointerEvent/altitudeAngle)
- [`PointerEvent.azimuthAngle`](/de/docs/Web/API/PointerEvent/azimuthAngle)
