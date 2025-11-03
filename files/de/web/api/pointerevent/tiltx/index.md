---
title: "PointerEvent: tiltX-Eigenschaft"
short-title: tiltX
slug: Web/API/PointerEvent/tiltX
l10n:
  sourceCommit: f336c5b6795a562c64fe859aa9ee2becf223ad8a
---

{{ APIRef("Pointer Events") }}

Die **`tiltX`**-Eigenschaft, eine schreibgeschützte Eigenschaft des [`PointerEvent`](/de/docs/Web/API/PointerEvent)-Interfaces, ist der Winkel (in Grad) zwischen der _Y-Z-Ebene_ des Zeigers und dem Bildschirm.
Diese Eigenschaft ist typischerweise nur für einen Stift-/Stylus-Zeigertyp nützlich.

Abhängig von der spezifischen Hardware und Plattform werden Benutzeragenten wahrscheinlich nur einen Satz von Werten für die Orientierung des Wandlers relativ zur Bildebene erhalten - entweder `tiltX` und [`tiltY`](/de/docs/Web/API/PointerEvent/tiltY) oder [`altitudeAngle`](/de/docs/Web/API/PointerEvent/altitudeAngle) und [`azimuthAngle`](/de/docs/Web/API/PointerEvent/azimuthAngle).

![Der tiltX-Winkel eines Zeigers im Vergleich zum tiltY-Winkel](tilt_x_y_angles.svg)

Für eine zusätzliche Illustration dieser Eigenschaft siehe [Figur 2 in der Spezifikation](https://w3c.github.io/pointerevents/#dom-pointerevent-tiltx).

## Wert

Der Winkel in Grad zwischen der Y-Z-Ebene des Zeigers (Stylus) und dem Bildschirm. Der Wertebereich ist `-90` bis `90`, inklusive, wobei ein positiver Wert eine Neigung nach rechts ist.
Für Geräte, die diese Eigenschaft nicht unterstützen, ist der Wert `0`.

## Beispiele

Dieses Beispiel zeigt das einfache Abrufen der `tiltX`- und [`tiltY`](/de/docs/Web/API/PointerEvent/tiltY)-Eigenschaften.

```js
someElement.addEventListener("pointerdown", (event) => {
  processTilt(event.tiltX, event.tiltY);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`PointerEvent.tiltY`](/de/docs/Web/API/PointerEvent/tiltY)
- [`PointerEvent.altitudeAngle`](/de/docs/Web/API/PointerEvent/altitudeAngle)
- [`PointerEvent.azimuthAngle`](/de/docs/Web/API/PointerEvent/azimuthAngle)
