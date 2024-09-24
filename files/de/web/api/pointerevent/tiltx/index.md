---
title: "PointerEvent: tiltX-Eigenschaft"
short-title: tiltX
slug: Web/API/PointerEvent/tiltX
l10n:
  sourceCommit: c2636b43e43eb705d142aae874c5412b4b3e6b6e
---

{{ APIRef("Pointer Events") }}

Die **`tiltX`**-Eigenschaft der Schnittstelle {{domxref("PointerEvent")}} ist der Winkel (in Grad) zwischen der _Y-Z-Ebene_ des Zeigers und dem Bildschirm. Diese Eigenschaft ist typischerweise nur für einen Stift/Zeiger-Typ nützlich.

Abhängig von der spezifischen Hardware und Plattform werden Benutzeragenten wahrscheinlich nur einen Satz von Werten für die Ausrichtung des Transducers relativ zur Bildschirmebene erhalten – entweder `tiltX` und {{domxref("PointerEvent.tilty", "tiltY")}} oder {{domxref("PointerEvent.altitudeAngle", "altitudeAngle")}} und {{domxref("PointerEvent.azimuthAngle", "azimuthAngle")}}.

![Der Winkel tiltX eines Zeigers im Vergleich zum Winkel tiltY](tilt_x_y_angles.svg)

Für eine zusätzliche Veranschaulichung dieser Eigenschaft siehe [Abbildung 2 in der Spezifikation](https://w3c.github.io/pointerevents/#dom-pointerevent-tiltx).

## Wert

Der Winkel in Grad zwischen der Y-Z-Ebene des Zeigers (Stift) und dem Bildschirm. Der Wertebereich reicht von `-90` bis `90`, einschließlich, wobei ein positiver Wert eine Neigung nach rechts darstellt. Für Geräte, die diese Eigenschaft nicht unterstützen, beträgt der Wert `0`.

## Beispiele

Dieses Beispiel zeigt den einfachen Zugriff auf die Eigenschaften `tiltX` und {{domxref("PointerEvent.tiltY","tiltY")}}.

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

- {{domxref("PointerEvent.tiltY")}}
- {{domxref("PointerEvent.altitudeAngle")}}
- {{domxref("PointerEvent.azimuthAngle")}}
