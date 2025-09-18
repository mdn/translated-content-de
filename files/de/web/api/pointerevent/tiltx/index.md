---
title: "PointerEvent: tiltX-Eigenschaft"
short-title: tiltX
slug: Web/API/PointerEvent/tiltX
l10n:
  sourceCommit: 2ccbd062264d0a2a34f185a3386cb272f42c50f5
---

{{ APIRef("Pointer Events") }}

Die nur lesbare Eigenschaft **`tiltX`** des [`PointerEvent`](/de/docs/Web/API/PointerEvent)-Interfaces ist der Winkel (in Grad) zwischen der _Y-Z-Ebene_ des Zeigegeräts und dem Bildschirm. Diese Eigenschaft ist in der Regel nur für einen Stift-/Stylus-Zeigertyp von Nutzen.

Abhängig von der speziellen Hardware und Plattform werden Benutzeragenten wahrscheinlich nur einen Satz von Werten für die Orientierung des Wandlers relativ zur Bildschirmebene erhalten – entweder `tiltX` und [`tiltY`](/de/docs/Web/API/PointerEvent/tiltY) oder [`altitudeAngle`](/de/docs/Web/API/PointerEvent/altitudeAngle) und [`azimuthAngle`](/de/docs/Web/API/PointerEvent/azimuthAngle).

![Der tiltX-Winkel eines Zeigers im Vergleich zum tiltY-Winkel](tilt_x_y_angles.svg)

Für eine zusätzliche Veranschaulichung dieser Eigenschaft sehen Sie [Abbildung 2 in der Spezifikation](https://w3c.github.io/pointerevents/#dom-pointerevent-tiltx).

## Wert

Der Winkel in Grad zwischen der Y-Z-Ebene des Zeigegeräts (Stylus) und dem Bildschirm. Der Wertebereich reicht von `-90` bis `90`, inklusive, wobei ein positiver Wert eine Neigung nach rechts darstellt. Bei Geräten, die diese Eigenschaft nicht unterstützen, beträgt der Wert `0`.

## Beispiele

Dieses Beispiel illustriert den einfachen Zugriff auf die `tiltX`- und [`tiltY`](/de/docs/Web/API/PointerEvent/tiltY)-Eigenschaften.

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

- [`PointerEvent.tiltY`](/de/docs/Web/API/PointerEvent/tiltY)
- [`PointerEvent.altitudeAngle`](/de/docs/Web/API/PointerEvent/altitudeAngle)
- [`PointerEvent.azimuthAngle`](/de/docs/Web/API/PointerEvent/azimuthAngle)
