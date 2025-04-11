---
title: "<noembed>: Das Fallback-Element für Einbettungen"
slug: Web/HTML/Reference/Elements/noembed
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}{{deprecated_header}}

Das **`<noembed>`** [HTML](/de/docs/Web/HTML)-Element ist eine veraltete, nicht standardisierte Methode, um alternative, oder „Fallback“-Inhalte für Browser bereitzustellen, die das {{HTMLElement("embed")}}-Element oder den vom Autor gewünschten Typ von [eingebetteten Inhalten](/de/docs/Web/HTML/Guides/Content_categories#embedded_content) nicht unterstützen. Dieses Element wurde in HTML 4.01 und höher zugunsten des Platzierens von Fallback-Inhalten zwischen den öffnenden und schließenden Tags eines {{HTMLElement("object")}}-Elements als veraltet markiert.

> [!NOTE]
> Obwohl dieses Element derzeit noch in vielen Browsern funktioniert, ist es veraltet und sollte nicht verwendet werden. Verwenden Sie stattdessen das {{HTMLElement("object")}}-Element, mit Fallback-Inhalten zwischen den öffnenden und schließenden Tags des Elements.

## Beispiele

Die Nachricht innerhalb des `<noembed>`-Tags wird nur angezeigt, wenn Ihr Browser den `<embed>`-Tag nicht unterstützt.

### Alternativen Inhalt anzeigen

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
