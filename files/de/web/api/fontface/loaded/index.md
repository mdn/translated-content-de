---
title: "FontFace: loaded-Eigenschaft"
short-title: loaded
slug: Web/API/FontFace/loaded
l10n:
  sourceCommit: 3b7232826ab98368d06ebf8b021886e4a544de93
---

{{APIRef("CSS Font Loading API")}}{{AvailableInWorkers}}

Die **`loaded`** schreibgeschützte Eigenschaft der [`FontFace`](/de/docs/Web/API/FontFace)-Schnittstelle gibt ein {{jsxref('Promise')}} zurück, das mit dem aktuellen `FontFace`-Objekt aufgelöst wird, wenn die im Konstruktor des Objekts angegebene Schriftart geladen ist, oder mit einem `SyntaxError` abgelehnt wird.

## Wert

Ein {{jsxref('Promise')}}, das mit dem aktuellen `FontFace`-Objekt aufgelöst wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
