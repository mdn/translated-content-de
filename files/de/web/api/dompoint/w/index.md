---
title: "DOMPoint: w-Eigenschaft"
short-title: w
slug: Web/API/DOMPoint/w
l10n:
  sourceCommit: ce85e3fb7865330e4ac2a6dad25db5cf5d27ea74
---

{{APIRef("DOM")}}

Die **`DOMPoint`**-Schnittstelle besitzt die
**`w`**-Eigenschaft, die den Perspektivwert _w_ eines Punktes im Raum hält.

## Wert

Ein Gleitkommawert mit doppelter Genauigkeit, der den Perspektivwert _w_ des
Punktes angibt. Dieser Wert ist **unbeschränkt**, was bedeutet, dass er
unendlich oder ungültig sein darf (das heißt, sein Wert kann {{jsxref("NaN")}} oder {{jsxref("Infinity", "±Infinity")}} sein).
Der Standardwert ist 1,0.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die anderen Koordinateneigenschaften: {{domxref("DOMPoint.x", "x")}},
  {{domxref("DOMPoint.y", "y")}}, und {{domxref("DOMPoint.z", "z")}}.
