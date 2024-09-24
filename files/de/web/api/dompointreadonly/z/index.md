---
title: "DOMPointReadOnly: z-Eigenschaft"
short-title: z
slug: Web/API/DOMPointReadOnly/z
l10n:
  sourceCommit: ce85e3fb7865330e4ac2a6dad25db5cf5d27ea74
---

{{APIRef("DOM")}}

Die **`DOMPointReadOnly`**-Schnittstelle
verfügt über die **`z`**-Eigenschaft, die die Tiefenkoordinate, z, für einen
schreibgeschützten Punkt im Raum enthält.

Wenn Ihr Skript den Wert dieser Eigenschaft ändern können muss,
sollten Sie stattdessen das {{domxref("DOMPoint")}}-Objekt verwenden.

Im Allgemeinen bedeuten positive Werte von `z` in Richtung des Benutzers (aus dem
Bildschirm heraus) und negative Werte von `z` vom Benutzer weg (in den
Bildschirm hinein), vorausgesetzt, es wurden keine Transformationen vorgenommen, die eine Umkehrung bewirkt haben.

## Wert

Ein doppelt-genauer Gleitkommawert, der den Wert der z-Koordinate für den
Punkt angibt. Dieser Wert ist **uneingeschränkt**, was bedeutet, dass er
unendlich oder ungültig sein darf (d.h. sein Wert kann {{jsxref("NaN")}} oder {{jsxref("Infinity", "±Infinity")}} sein).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die anderen Koordinateneigenschaften: {{domxref("DOMPointReadOnly.x", "x")}},
  {{domxref("DOMPointReadOnly.y", "y")}}, und der Perspektivwert,
  {{domxref("DOMPointReadOnly.w", "w")}}.
