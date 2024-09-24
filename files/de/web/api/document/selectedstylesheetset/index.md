---
title: "Dokument: selectedStyleSheetSet-Eigenschaft"
short-title: selectedStyleSheetSet
slug: Web/API/Document/selectedStyleSheetSet
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{APIRef("DOM")}}{{deprecated_header}}{{Non-standard_header}}

Die **`selectedStyleSheetSet`**-Eigenschaft gibt den Namen des aktuell verwendeten Stylesheet-Sets an.

## Wert

Der Name des derzeit verwendeten Stylesheet-Sets. Sie können dieses Stylesheet-Set auch über diese Eigenschaft einstellen.

Das Setzen des Wertes dieser Eigenschaft entspricht dem Aufruf von
{{domxref("document.enableStyleSheetsForSet()")}} mit dem Wert von
`currentStyleSheetSet`. Anschließend wird der Wert von
`lastStyleSheetSet` ebenfalls auf diesen Wert gesetzt.

> [!NOTE]
> Der Wert dieses Attributs ist dynamisch; eine direkte Änderung des
> `disabled`-Attributs an Stylesheets wirkt sich auf den Wert dieses Attributs
> aus.

## Beispiele

```js
console.log(`Current style sheet set: ${document.selectedStyleSheetSet}`);

document.selectedStyleSheetSet = "Some other style sheet";
```

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("document.lastStyleSheetSet")}}
- {{domxref("document.preferredStyleSheetSet")}}
- {{domxref("document.styleSheetSets")}}
- {{domxref("document.enableStyleSheetsForSet()")}}
