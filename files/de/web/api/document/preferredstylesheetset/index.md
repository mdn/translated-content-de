---
title: "Dokument: preferredStyleSheetSet-Eigenschaft"
short-title: preferredStyleSheetSet
slug: Web/API/Document/preferredStyleSheetSet
l10n:
  sourceCommit: ae380dd2b211ab497e064d4074ff81e71cb91a00
---

{{APIRef("DOM")}}{{Non-standard_header}}

Die schreibgeschützte Eigenschaft **`preferredStyleSheetSet`** der Schnittstelle [`Document`](/de/docs/Web/API/Document) gibt die vom Autor der Seite festgelegte bevorzugte Stylesheet-Gruppe zurück.

## Wert

Die vom Autor bevorzugte Stylesheet-Gruppe. Sie wird durch die Reihenfolge der Stylesheet-Deklarationen und den HTTP-Header `Default-Style` bestimmt.

Wenn der Autor keine bevorzugte Stylesheet-Gruppe festgelegt hat, wird eine leere Zeichenfolge (`""`) zurückgegeben.

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
