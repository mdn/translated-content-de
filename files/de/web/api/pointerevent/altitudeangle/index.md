---
title: "PointerEvent: altitudeAngle-Eigenschaft"
short-title: altitudeAngle
slug: Web/API/PointerEvent/altitudeAngle
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{ APIRef("Pointer Events") }}

Die schreibgeschützte **`altitudeAngle`** Eigenschaft des {{domxref("PointerEvent")}}-Interfaces repräsentiert den Winkel zwischen einer Transduktorachse (einem Zeiger oder Stylus) und der X-Y-Ebene eines Gerätebildschirms. Der Höhenwinkel beschreibt, ob der Transduktor senkrecht zum Bildschirm, parallel oder in einem dazwischenliegenden Winkel ist.

Je nach spezifischer Hardware und Plattform werden Benutzeragenten wahrscheinlich nur einen Satz von Werten für die Ausrichtung des Transduktors relativ zur Bildschirmebene erhalten — entweder {{domxref("PointerEvent.tiltx", "tiltX")}} und {{domxref("PointerEvent.tilty", "tiltY")}} oder `altitudeAngle` und {{domxref("PointerEvent.azimuthAngle", "azimuthAngle")}}.

![Der Azimutwinkel eines Zeigers im Vergleich zum Höhenwinkel](./azimuth_altitude_angles.svg)

Für eine zusätzliche Illustration dieser Eigenschaft siehe [Abbildung 4 in der Spezifikation](https://w3c.github.io/pointerevents/#figure_altitudeAngle).

## Wert

Ein Winkel in Radianten zwischen `0` und `π/2`, wobei `0` parallel zur Geräteoberfläche (X-Y-Ebene) ist und `π/2` senkrecht zur Oberfläche. Der Standardwert ist `π/2` (senkrecht zur Oberfläche), was sich von dem der [`altitudeAngle` in Touch-Events](https://w3c.github.io/touch-events/#dom-touch-altitudeangle) unterscheidet, der standardmäßig `0` (parallel zur Oberfläche) ist. Für Hardware und Plattformen, die keinen Neigungs- oder Winkelbericht liefern, beträgt der Wert `π/2`.

## Beispiel

```js
someElement.addEventListener(
  "pointerdown",
  (event) => {
    process_angles(event.altitudeAngle, event.azimuthAngle);
  },
  false,
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{ domxref("PointerEvent.azimuthAngle") }}
- {{ domxref("PointerEvent.tiltX") }}
- {{ domxref("PointerEvent.tiltY") }}
