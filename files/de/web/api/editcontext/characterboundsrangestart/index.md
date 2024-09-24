---
title: "EditContext: Eigenschaft characterBoundsRangeStart"
short-title: characterBoundsRangeStart
slug: Web/API/EditContext/characterBoundsRangeStart
l10n:
  sourceCommit: c9fe79713a9323e8f1492c3c5b802fc8776a5f6a
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

Die **`characterBoundsRangeStart`** schreibgeschützte Eigenschaft des {{domxref("EditContext")}}-Interfaces zeigt den Index des Zeichens innerhalb des bearbeitbaren Textinhalts an, das dem ersten Element im {{domxref("EditContext.characterBounds()", "characterBounds")}}-Array entspricht.

Zum Beispiel, wenn das `EditContent` die Zeichen `abc` enthält und `characterBoundRangeStart` `1` ist, enthält das erste Element im `characterBounds`-Array die Grenzen des Zeichens `b`.

## Wert

Eine {{jsxref("Number")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
