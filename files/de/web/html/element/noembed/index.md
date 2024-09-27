---
title: "<noembed>: Das Embed Fallback-Element"
slug: Web/HTML/Element/noembed
l10n:
  sourceCommit: b7955e77cd4293adf45ef23686df50b0305f02ad
---

{{HTMLSidebar}}{{deprecated_header}}

Das **`<noembed>`** [HTML](/de/docs/Web/HTML)-Element ist eine veraltete, nicht standardisierte Möglichkeit, um alternative oder "Fallback"-Inhalte für Browser bereitzustellen, die das {{HTMLElement("embed")}}-Element nicht unterstützen oder die Art der [eingebetteten Inhalte](/de/docs/Web/HTML/Content_categories#embedded_content), die ein Autor nutzen möchte, nicht unterstützen. Dieses Element wurde in HTML 4.01 und höher zugunsten der Platzierung von Fallback-Inhalten zwischen den öffnenden und schließenden Tags eines {{HTMLElement("object")}}-Elements als veraltet markiert.

> [!NOTE]
> Auch wenn dieses Element derzeit noch in vielen Browsern funktioniert, ist es veraltet und sollte nicht mehr verwendet werden. Nutzen Sie stattdessen {{HTMLElement("object")}}, mit Fallback-Inhalten zwischen den öffnenden und schließenden Tags des Elements.

## Beispiele

Die Nachricht innerhalb des `<noembed>`-Tags wird nur angezeigt, wenn Ihr Browser das `<embed>`-Tag nicht unterstützt.

### Alternative Inhalte anzeigen

```html
<embed type="vide/webm" src="/media/examples/flower.mp4" width="200" height="200">
  <noembed>
    <h1>Alternative content</h1>
  </noembed>
</embed>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
