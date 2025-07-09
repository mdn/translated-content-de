---
title: "<noembed>: Das Embed-Fallback-Element"
slug: Web/HTML/Reference/Elements/noembed
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

{{deprecated_header}}

Das **`<noembed>`** [HTML](/de/docs/Web/HTML)-Element ist eine veraltete, nicht standardisierte Methode, um alternative oder "Fallback"-Inhalte für Browser bereitzustellen, die das {{HTMLElement("embed")}}-Element nicht unterstützen oder die Art von [eingebetteten Inhalten](/de/docs/Web/HTML/Guides/Content_categories#embedded_content) nicht unterstützen, die ein Autor verwenden möchte. Dieses Element wurde in HTML 4.01 und höher zugunsten von Fallback-Inhalten, die zwischen den öffnenden und schließenden Tags eines {{HTMLElement("object")}}-Elements platziert werden, für veraltet erklärt.

> [!NOTE]
> Auch wenn dieses Element derzeit noch in vielen Browsern funktioniert, ist es veraltet und sollte nicht verwendet werden. Verwenden Sie stattdessen {{HTMLElement("object")}}, mit Fallback-Inhalten zwischen den öffnenden und schließenden Tags des Elements.

## Beispiele

Die Nachricht innerhalb des `<noembed>`-Tags wird nur angezeigt, wenn Ihr Browser das `<embed>`-Tag nicht unterstützt.

### Alternativen Inhalt anzeigen

```html
<embed
  type="vide/webm"
  src="/media/examples/flower.mp4"
  width="200"
  height="200" />
<noembed>
  <h1>Alternative content</h1>
</noembed>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
