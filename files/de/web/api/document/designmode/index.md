---
title: "Dokument: designMode-Eigenschaft"
short-title: designMode
slug: Web/API/Document/designMode
l10n:
  sourceCommit: 62cedc63226017e9e7d0718b6fea3529ca8dbf37
---

{{APIRef}}

**`document.designMode`** steuert, ob das gesamte Dokument bearbeitbar ist. Gültige Werte sind `"on"` und `"off"`. Laut der Spezifikation soll diese Eigenschaft standardmäßig auf `"off"` gesetzt sein. Firefox folgt diesem Standard. Die früheren Versionen von Chrome und IE standardisieren auf `"inherit"`. Ab Chrome 43 ist der Standard `"off"` und `"inherit"` wird nicht mehr unterstützt. In IE6-10 ist der Wert großgeschrieben.

## Wert

Ein String, der angibt, ob `designMode` aktiviert oder deaktiviert ist (oder sein soll). Gültige Werte sind `on` und `off`.

## Beispiele

Ein Dokument eines {{HTMLElement("iframe")}} bearbeitbar machen:

```js
iframeNode.contentDocument.designMode = "on";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("HTMLElement.contentEditable")}}
