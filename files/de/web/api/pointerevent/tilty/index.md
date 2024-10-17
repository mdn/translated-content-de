---
title: "PointerEvent: tiltY-Eigenschaft"
short-title: tiltY
slug: Web/API/PointerEvent/tiltY
l10n:
  sourceCommit: 00f46adb5616d826821d63b11eac285faf1cf4a5
---

{{ APIRef("Pointer Events") }}

Die schreibgeschützte **`tiltY`**-Eigenschaft der [`PointerEvent`](/de/docs/Web/API/PointerEvent)-Schnittstelle ist der Winkel (in Grad) zwischen der _X-Z-Ebene_ des Zeigers und dem Bildschirm.
Diese Eigenschaft ist typischerweise nur für einen Stift-/Stylus-Zeigertyp von Nutzen.

Je nach spezifischer Hardware und Plattform erhalten Benutzeragenten wahrscheinlich nur einen Satz von Werten für die Ausrichtung des Wandlerkopfes relativ zur Bildschirmebene — entweder [`tiltX`](/de/docs/Web/API/PointerEvent/tiltX) und `tiltY` oder [`altitudeAngle`](/de/docs/Web/API/PointerEvent/altitudeAngle) und [`azimuthAngle`](/de/docs/Web/API/PointerEvent/azimuthAngle).

![Der tiltX-Winkel eines Zeigers im Vergleich zum tiltY-Winkel](tilt_x_y_angles.svg)

Für eine zusätzliche Veranschaulichung dieser Eigenschaft siehe [Abbildung 3 in der Spezifikation](https://w3c.github.io/pointerevents/#dom-pointerevent-tilty).

## Wert

Der Winkel in Grad zwischen der X-Z-Ebene des Zeigers (Stylus) und dem Bildschirm.
Der Wertebereich liegt zwischen `-90` und `90` einschließlich, wobei ein positiver Wert eine Neigung zum Benutzer darstellt.
Für Geräte, die diese Eigenschaft nicht unterstützen, beträgt der Wert `0`.

## Beispiele

Dieses Beispiel zeigt den einfachen Zugriff auf die [`tiltX`](/de/docs/Web/API/PointerEvent/tiltX) und `tiltY`-Eigenschaften.

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
