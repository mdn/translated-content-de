---
title: "EditContext: characterBoundsRangeStart-Eigenschaft"
short-title: characterBoundsRangeStart
slug: Web/API/EditContext/characterBoundsRangeStart
l10n:
  sourceCommit: c9fe79713a9323e8f1492c3c5b802fc8776a5f6a
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`characterBoundsRangeStart`** der [`EditContext`](/de/docs/Web/API/EditContext)-Schnittstelle gibt den Index des Zeichens im bearbeitbaren Textinhalt an, das dem ersten Element im [`characterBounds`](/de/docs/Web/API/EditContext/characterBounds)-Array entspricht.

Wenn das `EditContent` beispielsweise die Zeichen `abc` enthält und `characterBoundRangeStart` `1` ist, enthält das erste Element im `characterBounds`-Array die Grenzen für das Zeichen `b`.

## Wert

Eine {{jsxref("Number")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
