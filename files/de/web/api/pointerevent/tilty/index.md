---
title: "PointerEvent: tiltY Eigenschaft"
short-title: tiltY
slug: Web/API/PointerEvent/tiltY
l10n:
  sourceCommit: f336c5b6795a562c64fe859aa9ee2becf223ad8a
---

{{ APIRef("Pointer Events") }}

Die **`tiltY`** Eigenschaft der [`PointerEvent`](/de/docs/Web/API/PointerEvent)-Schnittstelle ist eine schreibgeschützte Eigenschaft, die den Winkel (in Grad) zwischen der _X-Z-Ebene_ des Zeigers und dem Bildschirm beschreibt. Diese Eigenschaft ist typischerweise nur für einen Stift/Eingabestift (pen/stylus) Zeigertyp nützlich.

Je nach spezifischer Hardware und Plattform werden Benutzeragenten wahrscheinlich nur einen Satz von Werten für die Ausrichtung des Transducers in Bezug auf die Bildebene empfangen – entweder [`tiltX`](/de/docs/Web/API/PointerEvent/tiltX) und `tiltY` oder [`altitudeAngle`](/de/docs/Web/API/PointerEvent/altitudeAngle) und [`azimuthAngle`](/de/docs/Web/API/PointerEvent/azimuthAngle).

![Der tiltX-Winkel eines Zeigers im Vergleich zum tiltY-Winkel](tilt_x_y_angles.svg)

Für eine zusätzliche Illustration dieser Eigenschaft siehe [Abbildung 3 in der Spezifikation](https://w3c.github.io/pointerevents/#dom-pointerevent-tilty).

## Wert

Der Winkel in Grad zwischen der X-Z-Ebene des Zeigers (Stylus) und dem Bildschirm. Der Wertebereich reicht von `-90` bis `90`, inklusive, wobei ein positiver Wert eine Neigung in Richtung des Benutzers darstellt. Für Geräte, die diese Eigenschaft nicht unterstützen, ist der Wert `0`.

## Beispiele

Dieses Beispiel zeigt das einfache Zugreifen auf die `tiltX`- und `tiltY`-Eigenschaften.

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

- [`PointerEvent.tiltX`](/de/docs/Web/API/PointerEvent/tiltX)
- [`PointerEvent.altitudeAngle`](/de/docs/Web/API/PointerEvent/altitudeAngle)
- [`PointerEvent.azimuthAngle`](/de/docs/Web/API/PointerEvent/azimuthAngle)
