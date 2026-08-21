---
title: "Dokument: lastStyleSheetSet-Eigenschaft"
short-title: lastStyleSheetSet
slug: Web/API/Document/lastStyleSheetSet
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("DOM")}}{{Non-standard_header}}

Die **`Document.lastStyleSheetSet`**-Eigenschaft gibt das zuletzt aktivierte Stylesheet-Set zurück. Der Wert dieser Eigenschaft ändert sich, wann immer die Eigenschaft [`document.selectedStyleSheetSet`](/de/docs/Web/API/Document/selectedStyleSheetSet) geändert wird.

## Wert

Das Stylesheet-Set, das zuletzt gesetzt wurde. Wenn das aktuelle Stylesheet-Set nicht durch Setzen von [`document.selectedStyleSheetSet`](/de/docs/Web/API/Document/selectedStyleSheetSet) geändert wurde, ist der zurückgegebene Wert `null`.

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
