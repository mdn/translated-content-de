---
title: "<noembed>: Das Fallback-Element für Einbettungen"
slug: Web/HTML/Element/noembed
l10n:
  sourceCommit: b7955e77cd4293adf45ef23686df50b0305f02ad
---

{{HTMLSidebar}}{{deprecated_header}}

Das **`<noembed>`**-Element [HTML](/de/docs/Web/HTML) ist eine veraltete, nicht standardisierte Methode, um alternativen oder "Fallback"-Inhalt für Browser bereitzustellen, die das {{HTMLElement("embed")}}-Element nicht unterstützen oder den gewünschten Typ von [eingebettetem Inhalt](/de/docs/Web/HTML/Content_categories#embedded_content) eines Autors nicht unterstützen. Dieses Element wurde in HTML 4.01 und höher zugunsten der Platzierung von Fallback-Inhalten zwischen den Öffnungs- und Schlusstags eines {{HTMLElement("object")}}-Elements als veraltet markiert.

> [!NOTE]
> Obwohl dieses Element derzeit noch in vielen Browsern funktioniert, ist es veraltet und sollte nicht verwendet werden. Verwenden Sie stattdessen das {{HTMLElement("object")}}-Element, mit Fallback-Inhalt zwischen den Öffnungs- und Schlusstags des Elements.

## Beispiele

Die Nachricht innerhalb des `<noembed>`-Tags wird nur angezeigt, wenn Ihr Browser das `<embed>`-Tag nicht unterstützt.

### Ein alternativer Inhalt anzeigen

```html
<embed type="vide/webm" src="/media/examples/flower.mp4" width="200" height="200">
  <noembed>
    <h1>Alternativer Inhalt</h1>
  </noembed>
</embed>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
