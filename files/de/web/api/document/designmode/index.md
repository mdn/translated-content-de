---
title: "Dokument: designMode Eigenschaft"
short-title: designMode
slug: Web/API/Document/designMode
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("DOM")}}

**`document.designMode`** steuert, ob das gesamte Dokument bearbeitbar ist. Gültige Werte sind `"on"` und `"off"`. Laut der Spezifikation sollte diese Eigenschaft standardmäßig auf `"off"` gesetzt sein. Firefox folgt diesem Standard. Die früheren Versionen von Chrome und IE sind standardmäßig auf `"inherit"` eingestellt. Ab Chrome 43 ist der Standard `"off"` und `"inherit"` wird nicht mehr unterstützt. In IE6-10 wird der Wert großgeschrieben.

## Wert

Ein String, der angibt, ob `designMode` auf on oder off gesetzt ist (oder sein sollte). Gültige Werte sind `on` und `off`.

## Beispiele

Machen Sie das Dokument eines {{HTMLElement("iframe")}} bearbeitbar:

```js
iframeNode.contentDocument.designMode = "on";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLElement.contentEditable`](/de/docs/Web/API/HTMLElement/contentEditable)
