---
title: "Dokument: lastStyleSheetSet-Eigenschaft"
short-title: lastStyleSheetSet
slug: Web/API/Document/lastStyleSheetSet
l10n:
  sourceCommit: ae380dd2b211ab497e064d4074ff81e71cb91a00
---

{{APIRef("DOM")}}{{Non-standard_header}}

Die schreibgeschützte Eigenschaft **`lastStyleSheetSet`** der Schnittstelle [`Document`](/de/docs/Web/API/Document) gibt den zuletzt aktivierten Stylesheet-Satz zurück. Der Wert dieser Eigenschaft ändert sich, wenn die Eigenschaft [`document.selectedStyleSheetSet`](/de/docs/Web/API/Document/selectedStyleSheetSet) geändert wird.

## Wert

Der zuletzt festgelegte Stylesheet-Satz. Wenn der aktuelle Stylesheet-Satz nicht durch Setzen von [`document.selectedStyleSheetSet`](/de/docs/Web/API/Document/selectedStyleSheetSet) geändert wurde, ist der Rückgabewert `null`.

> [!NOTE]
> Dieser Wert ändert sich nicht, wenn [`document.enableStyleSheetsForSet()`](/de/docs/Web/API/Document/enableStyleSheetsForSet) aufgerufen wird.

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
