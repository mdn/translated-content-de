---
title: "Dokument: preferredStyleSheetSet-Eigenschaft"
short-title: preferredStyleSheetSet
slug: Web/API/Document/preferredStyleSheetSet
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("DOM")}}{{Non-standard_header}}

Die **`preferredStyleSheetSet`**-Eigenschaft gibt das bevorzugte Style-Sheet-Set zurück, wie es vom Seitenautor festgelegt wurde.

## Wert

Das bevorzugte Style-Sheet-Set des Autors. Dies wird durch die Reihenfolge der Style-Sheet-Deklarationen und den `Default-Style`-HTTP-Header bestimmt.

Wenn kein bevorzugtes Style-Sheet-Set vom Autor definiert ist, wird der leere String (`""`) zurückgegeben.

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
