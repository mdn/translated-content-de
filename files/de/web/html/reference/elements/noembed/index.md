---
title: "`<noembed>` HTML-Einbettungsfallelement"
short-title: <noembed>
slug: Web/HTML/Reference/Elements/noembed
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

Das **`<noembed>`**-[HTML](/de/docs/Web/HTML)-Element ist eine veraltete, nicht standardisierte Methode, um alternative oder "Fallback"-Inhalte für Browser bereitzustellen, die das {{HTMLElement("embed")}}-Element nicht unterstützen oder den Typ von [eingebetteten Inhalten](/de/docs/Web/HTML/Guides/Content_categories#embedded_content), den ein Autor verwenden möchte, nicht unterstützen. Dieses Element wurde in HTML 4.01 und höher zugunsten von Fallback-Inhalten zwischen den öffnenden und schließenden Tags eines {{HTMLElement("object")}}-Elements veraltet.

> [!NOTE]
> Obwohl dieses Element derzeit noch in vielen Browsern funktioniert, ist es veraltet und sollte nicht verwendet werden. Verwenden Sie stattdessen {{HTMLElement("object")}}, mit Fallback-Inhalt zwischen den öffnenden und schließenden Tags des Elements.

## Beispiele

Die Nachricht innerhalb des `<noembed>`-Tags wird nur angezeigt, wenn Ihr Browser das `<embed>`-Tag nicht unterstützt.

### Ein alternativer Inhalt anzeigen

```html
<embed
  type="video/webm"
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
