---
title: "Dokument: selectedStyleSheetSet-Eigenschaft"
short-title: selectedStyleSheetSet
slug: Web/API/Document/selectedStyleSheetSet
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("DOM")}}{{Non-standard_header}}

Die **`selectedStyleSheetSet`**-Eigenschaft gibt den Namen des aktuell verwendeten Stilblatt-Sets an.

## Wert

Der Name des aktuell verwendeten Stilblatt-Sets. Sie können auch das aktuelle Stilblatt-Set mithilfe dieser Eigenschaft festlegen.

Das Setzen des Werts dieser Eigenschaft entspricht dem Aufruf von [`document.enableStyleSheetsForSet()`](/de/docs/Web/API/Document/enableStyleSheetsForSet) mit dem Wert von `currentStyleSheetSet`, gefolgt vom Setzen des Werts von `lastStyleSheetSet` auf diesen Wert.

> [!NOTE]
> Der Wert dieses Attributs ist dynamisch; eine direkte Änderung
> des `disabled`-Attributs auf Stilblättern beeinflusst den Wert dieses
> Attributs.

## Beispiele

```js
console.log(`Current style sheet set: ${document.selectedStyleSheetSet}`);

document.selectedStyleSheetSet = "Some other style sheet";
```

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`document.lastStyleSheetSet`](/de/docs/Web/API/Document/lastStyleSheetSet)
- [`document.preferredStyleSheetSet`](/de/docs/Web/API/Document/preferredStyleSheetSet)
- [`document.styleSheetSets`](/de/docs/Web/API/Document/styleSheetSets)
- [`document.enableStyleSheetsForSet()`](/de/docs/Web/API/Document/enableStyleSheetsForSet)
