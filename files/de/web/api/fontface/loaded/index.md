---
title: "FontFace: loaded-Eigenschaft"
short-title: loaded
slug: Web/API/FontFace/loaded
l10n:
  sourceCommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{APIRef("CSS Font Loading API")}}

Die schreibgeschützte **`loaded`**-Eigenschaft der {{domxref("FontFace")}}-Schnittstelle gibt ein {{jsxref('Promise')}} zurück, das mit dem aktuellen `FontFace`-Objekt aufgelöst wird, wenn die im Konstruktor des Objekts angegebene Schriftart geladen ist, oder mit einem `SyntaxError` abgelehnt wird.

## Wert

Ein {{jsxref('Promise')}}, das mit dem aktuellen `FontFace`-Objekt aufgelöst wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
