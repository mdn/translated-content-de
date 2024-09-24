---
title: "DOMPoint: z-Eigenschaft"
short-title: z
slug: Web/API/DOMPoint/z
l10n:
  sourceCommit: ce85e3fb7865330e4ac2a6dad25db5cf5d27ea74
---

{{APIRef("DOM")}}

Die **`DOMPoint`**-Schnittstelle hat die
**`z`**-Eigenschaft, die die Tiefenkoordinate eines Punktes im Raum angibt.

Sofern Transformationen die Orientierung nicht verändert haben, stellt ein `z` von 0 die Ebene des Bildschirms dar, wobei positive Werte sich vom Bildschirm ausgehend in Richtung des Benutzers erstrecken und negative Werte in den Hintergrund hinter dem Bildschirm zurückgehen.

## Wert

Ein Gleitkommawert mit doppelter Genauigkeit, der den Wert der _z_-Koordinate für den Punkt angibt. Dieser Wert ist **uneingeschränkt**, was bedeutet, dass er unendlich oder ungültig sein darf (das heißt, sein Wert kann {{jsxref("NaN")}} oder {{jsxref("Infinity", "±Infinity")}} sein).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die anderen Koordinateneigenschaften: {{domxref("DOMPoint.x", "x")}},
  {{domxref("DOMPoint.y", "y")}}, und der Perspektivwert, {{domxref("DOMPoint.w", "w")}}.
