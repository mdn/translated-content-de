---
title: "PointerEvent: tiltX-Eigenschaft"
short-title: tiltX
slug: Web/API/PointerEvent/tiltX
l10n:
  sourceCommit: 00f46adb5616d826821d63b11eac285faf1cf4a5
---

{{ APIRef("Pointer Events") }}

Die schreibgeschützte Eigenschaft **`tiltX`** des [`PointerEvent`](/de/docs/Web/API/PointerEvent)-Interfaces ist der Winkel (in Grad) zwischen der _Y-Z-Ebene_ des Zeigers und dem Bildschirm. Diese Eigenschaft ist typischerweise nur für einen Stift- oder Stylus-Zeigertyp nützlich.

Je nach spezifischer Hardware und Plattform werden die Benutzeragenten wahrscheinlich nur einen Satz von Werten für die Ausrichtung des Überträgers relativ zur Bildebene erhalten — entweder `tiltX` und [`tiltY`](/de/docs/Web/API/PointerEvent/tiltY) oder [`altitudeAngle`](/de/docs/Web/API/PointerEvent/altitudeAngle) und [`azimuthAngle`](/de/docs/Web/API/PointerEvent/azimuthAngle).

![Der tiltX-Winkel eines Zeigers im Vergleich zum tiltY-Winkel](tilt_x_y_angles.svg)

Für eine zusätzliche Veranschaulichung dieser Eigenschaft siehe [Abbildung 2 in der Spezifikation](https://w3c.github.io/pointerevents/#dom-pointerevent-tiltx).

## Wert

Der Winkel in Grad zwischen der Y-Z-Ebene des Zeigers (Stylus) und dem Bildschirm. Der Wertebereich reicht von `-90` bis `90`, einschließlich, wobei ein positiver Wert eine Neigung nach rechts darstellt.
Für Geräte, die diese Eigenschaft nicht unterstützen, beträgt der Wert `0`.

## Beispiele

Dieses Beispiel veranschaulicht den einfachen Zugriff auf die Eigenschaften `tiltX` und [`tiltY`](/de/docs/Web/API/PointerEvent/tiltY).

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
