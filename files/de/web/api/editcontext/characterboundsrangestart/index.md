---
title: "EditContext: characterBoundsRangeStart-Eigenschaft"
short-title: characterBoundsRangeStart
slug: Web/API/EditContext/characterBoundsRangeStart
l10n:
  sourceCommit: c9fe79713a9323e8f1492c3c5b802fc8776a5f6a
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`characterBoundsRangeStart`** des [`EditContext`](/de/docs/Web/API/EditContext)-Interfaces gibt den Index des Zeichens im editierbaren Textinhalt an, das dem ersten Element im [`characterBounds`](/de/docs/Web/API/EditContext/characterBounds)-Array entspricht.

Zum Beispiel, wenn der `EditContent` die Zeichen `abc` enthält und `characterBoundRangeStart` `1` ist, enthält das erste Element im `characterBounds`-Array die Begrenzungen für das Zeichen `b`.

## Wert

Eine {{jsxref("Number")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
