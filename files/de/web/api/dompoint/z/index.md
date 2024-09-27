---
title: "DOMPoint: z-Eigenschaft"
short-title: z
slug: Web/API/DOMPoint/z
l10n:
  sourceCommit: ce85e3fb7865330e4ac2a6dad25db5cf5d27ea74
---

{{APIRef("DOM")}}

Die **`DOMPoint`**-Schnittstelle besitzt die **`z`**-Eigenschaft, die die Tiefenkoordinate eines Punkts im Raum angibt.

Sofern Transformationen die Orientierung nicht verändert haben, liegt ein `z` von 0 in der Ebene des Bildschirms, wobei positive Werte sich vom Bildschirm in Richtung des Benutzers erstrecken und negative Werte in die Ferne hinter den Bildschirm zurückweichen.

## Wert

Ein doppelpräziser Gleitkommawert, der den Wert der _z_-Koordinate für den Punkt angibt. Dieser Wert ist **unbeschränkt**, was bedeutet, dass er unendlich oder ungültig sein darf (das heißt, sein Wert kann {{jsxref("NaN")}} oder {{jsxref("Infinity", "±Infinity")}} sein).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die anderen Koordinateneigenschaften: [`x`](/de/docs/Web/API/DOMPoint/x), [`y`](/de/docs/Web/API/DOMPoint/y) und der Perspektivwert, [`w`](/de/docs/Web/API/DOMPoint/w).
