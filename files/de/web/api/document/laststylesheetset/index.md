---
title: "Document: lastStyleSheetSet Eigenschaft"
short-title: lastStyleSheetSet
slug: Web/API/Document/lastStyleSheetSet
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{APIRef("DOM")}}{{deprecated_header}}{{Non-standard_header}}

Die **`Document.lastStyleSheetSet`**-Eigenschaft gibt das zuletzt aktivierte Style-Sheet-Set zurück. Der Wert dieser Eigenschaft ändert sich, wann immer die [`document.selectedStyleSheetSet`](/de/docs/Web/API/Document/selectedStyleSheetSet)-Eigenschaft geändert wird.

## Wert

Das zuletzt festgelegte Style-Sheet-Set. Wenn das aktuelle Style-Sheet-Set nicht durch Festlegen von [`document.selectedStyleSheetSet`](/de/docs/Web/API/Document/selectedStyleSheetSet) geändert wurde, ist der zurückgegebene Wert `null`.

> [!NOTE]
> Dieser Wert ändert sich nicht, wenn
> [`document.enableStyleSheetsForSet()`](/de/docs/Web/API/Document/enableStyleSheetsForSet) aufgerufen wird.

## Beispiele

```js
let lastSheetSet = document.lastStyleSheetSet;

if (!lastSheetSet) {
  lastSheetSet = "Style sheet not yet changed";
} else {
  console.log(`The last style sheet set is: ${lastSheetSet}`);
}
```

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`document.preferredStyleSheetSet`](/de/docs/Web/API/Document/preferredStyleSheetSet)
- [`document.selectedStyleSheetSet`](/de/docs/Web/API/Document/selectedStyleSheetSet)
- [`document.styleSheetSets`](/de/docs/Web/API/Document/styleSheetSets)
- [`document.enableStyleSheetsForSet()`](/de/docs/Web/API/Document/enableStyleSheetsForSet)
