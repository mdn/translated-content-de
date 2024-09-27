---
title: "Document: selectedStyleSheetSet Eigenschaft"
short-title: selectedStyleSheetSet
slug: Web/API/Document/selectedStyleSheetSet
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{APIRef("DOM")}}{{deprecated_header}}{{Non-standard_header}}

Die **`selectedStyleSheetSet`**-Eigenschaft gibt den Namen des aktuell verwendeten Stylesheet-Sets an.

## Wert

Der Name des aktuell verwendeten Stylesheet-Sets. Sie können dieses Eigenschaft auch verwenden, um das aktuelle Stylesheet-Set zu setzen.

Das Setzen des Wertes dieser Eigenschaft entspricht dem Aufruf von
[`document.enableStyleSheetsForSet()`](/de/docs/Web/API/Document/enableStyleSheetsForSet) mit dem Wert von
`currentStyleSheetSet`, gefolgt vom Setzen des Wertes von
`lastStyleSheetSet` auf diesen Wert.

> [!NOTE]
> Der Wert dieses Attributs ist live; das direkte Ändern des
> `disabled`-Attributs auf Stylesheets beeinflusst den Wert dieses
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
