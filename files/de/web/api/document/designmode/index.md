---
title: "Document: designMode Eigenschaft"
short-title: designMode
slug: Web/API/Document/designMode
l10n:
  sourceCommit: 62cedc63226017e9e7d0718b6fea3529ca8dbf37
---

{{APIRef}}

**`document.designMode`** steuert, ob das gesamte Dokument bearbeitbar ist. Gültige Werte sind `"on"` und `"off"`. Laut der Spezifikation sollte diese Eigenschaft standardmäßig auf `"off"` gesetzt sein. Firefox hält sich an diesen Standard. Frühere Versionen von Chrome und IE haben standardmäßig `"inherit"` verwendet. Ab Chrome 43 ist der Standard `"off"`, und `"inherit"` wird nicht mehr unterstützt. In IE6-10 wird der Wert großgeschrieben.

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
