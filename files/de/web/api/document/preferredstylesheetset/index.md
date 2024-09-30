---
title: "Document: preferredStyleSheetSet-Eigenschaft"
short-title: preferredStyleSheetSet
slug: Web/API/Document/preferredStyleSheetSet
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("DOM")}}{{deprecated_header}}{{Non-standard_header}}

Die **`preferredStyleSheetSet`**-Eigenschaft gibt das bevorzugte Stylesheet-Set zurück, wie es vom Seitenautor festgelegt wurde.

## Wert

Das bevorzugte Stylesheet-Set des Autors. Dies wird durch die Reihenfolge der Stylesheet-Deklarationen und den
`Default-Style`-HTTP-Header bestimmt.

Wenn kein bevorzugtes Stylesheet-Set vom Autor definiert ist, wird der leere String (`""`) zurückgegeben.

## Beispiele

```js
if (document.preferredStyleSheetSet) {
  console.log(
    `The preferred style sheet set is: ${document.preferredStyleSheetSet}`,
  );
} else {
  console.log("There is no preferred style sheet.");
}
```

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`document.lastStyleSheetSet`](/de/docs/Web/API/Document/lastStyleSheetSet)
- [`document.selectedStyleSheetSet`](/de/docs/Web/API/Document/selectedStyleSheetSet)
- [`document.styleSheetSets`](/de/docs/Web/API/Document/styleSheetSets)
- [`document.enableStyleSheetsForSet()`](/de/docs/Web/API/Document/enableStyleSheetsForSet)
