---
title: "PointerEvent: tiltY-Eigenschaft"
short-title: tiltY
slug: Web/API/PointerEvent/tiltY
l10n:
  sourceCommit: 2ccbd062264d0a2a34f185a3386cb272f42c50f5
---

{{ APIRef("Pointer Events") }}

Die **`tiltY`**-Eigenschaft der [`PointerEvent`](/de/docs/Web/API/PointerEvent)-Schnittstelle ist die Winkelausrichtung (in Grad) zwischen der _X-Z-Ebene_ des Zeigers und dem Bildschirm. Diese Eigenschaft ist typischerweise nur für einen Stift- oder Stylus-Zeigertyp von Bedeutung.

Abhängig von der spezifischen Hardware und Plattform werden Benutzeragenten wahrscheinlich nur einen Satz von Werten für die Transduktor-Ausrichtung relativ zur Bildschirmebene erhalten – entweder [`tiltX`](/de/docs/Web/API/PointerEvent/tiltX) und `tiltY` oder [`altitudeAngle`](/de/docs/Web/API/PointerEvent/altitudeAngle) und [`azimuthAngle`](/de/docs/Web/API/PointerEvent/azimuthAngle).

![Der tiltX-Winkel eines Zeigers im Vergleich zum tiltY-Winkel](tilt_x_y_angles.svg)

Für eine zusätzliche Veranschaulichung dieser Eigenschaft siehe [Abbildung 3 in der Spezifikation](https://w3c.github.io/pointerevents/#dom-pointerevent-tilty).

## Wert

Der Winkel in Grad zwischen der X-Z-Ebene des Zeigers (Stylus) und dem Bildschirm. Der Wertebereich reicht von `-90` bis `90`, einschließlich, wobei ein positiver Wert eine Neigung hin zum Benutzer bedeutet. Für Geräte, die diese Eigenschaft nicht unterstützen, beträgt der Wert `0`.

## Beispiele

Dieses Beispiel veranschaulicht das einfache Zugreifen auf die [`tiltX`](/de/docs/Web/API/PointerEvent/tiltX)- und `tiltY`-Eigenschaften.

```js
someElement.addEventListener("pointerdown", (event) => {
  process_tilt(event.tiltX, event.tiltY);
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
