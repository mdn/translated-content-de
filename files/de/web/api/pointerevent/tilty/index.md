---
title: "PointerEvent: tiltY-Eigenschaft"
short-title: tiltY
slug: Web/API/PointerEvent/tiltY
l10n:
  sourceCommit: c2636b43e43eb705d142aae874c5412b4b3e6b6e
---

{{ APIRef("Pointer Events") }}

Die **`tiltY`**-Eigenschaft der {{domxref("PointerEvent")}}-Schnittstelle ist eine schreibgeschützte Eigenschaft, die den Winkel (in Grad) zwischen der _X-Z-Ebene_ des Zeigers und dem Bildschirm darstellt.
Diese Eigenschaft ist typischerweise nur für einen Stift oder Stylus von Nutzen.

Abhängig von der spezifischen Hardware und Plattform werden Benutzeragenten wahrscheinlich nur einen Satz von Werten für die Transducer-Orientierung relativ zur Bildebene erhalten — entweder {{domxref("PointerEvent.tiltx", "tiltX")}} und `tiltY` oder {{domxref("PointerEvent.altitudeAngle", "altitudeAngle")}} und {{domxref("PointerEvent.azimuthAngle", "azimuthAngle")}}.

![Der tiltX-Winkel eines Zeigers im Vergleich zum tiltY-Winkel](tilt_x_y_angles.svg)

Für eine zusätzliche Veranschaulichung dieser Eigenschaft siehe [Abbildung 3 in der Spezifikation](https://w3c.github.io/pointerevents/#dom-pointerevent-tilty).

## Wert

Der Winkel in Grad zwischen der X-Z-Ebene des Zeigers (Stylus) und dem Bildschirm.
Der Wertebereich reicht von `-90` bis `90`, einschließlich, wobei ein positiver Wert eine Neigung in Richtung Benutzer darstellt.
Für Geräte, die diese Eigenschaft nicht unterstützen, ist der Wert `0`.

## Beispiele

Dieses Beispiel veranschaulicht das einfache Zugreifen auf die {{domxref("PointerEvent.tiltX","tiltX")}}- und `tiltY`-Eigenschaften.

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

- {{domxref("PointerEvent.tiltX")}}
- {{domxref("PointerEvent.altitudeAngle")}}
- {{domxref("PointerEvent.azimuthAngle")}}
