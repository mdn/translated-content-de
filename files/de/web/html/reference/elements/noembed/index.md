---
title: "`<noembed>` HTML-Einbettungs-Fallback-Element"
short-title: <noembed>
slug: Web/HTML/Reference/Elements/noembed
l10n:
  sourceCommit: d7240a6c8942ba8255527cd1c6e9265a35913590
---

{{deprecated_header}}

Das **`<noembed>`** [HTML](/de/docs/Web/HTML)-Element ist eine veraltete, nicht standardisierte Methode, um alternative oder "Fallback"-Inhalte für Browser bereitzustellen, die das {{HTMLElement("embed")}}-Element oder den vom Autor gewünschten Typ von [eingebetteten Inhalten](/de/docs/Web/HTML/Guides/Content_categories#embedded_content) nicht unterstützen. Dieses Element wurde in HTML 4.01 und höher zugunsten des Platzierens von Fallback-Inhalten zwischen den Öffnungs- und Schließ-Tags eines {{HTMLElement("object")}}-Elements verworfen.

> [!NOTE]
> Auch wenn dieses Element derzeit noch in vielen Browsern funktioniert, ist es veraltet und sollte nicht mehr verwendet werden. Stattdessen sollte {{HTMLElement("object")}} verwendet werden, mit Fallback-Inhalten zwischen den Öffnungs- und Schließ-Tags des Elements.

## Beispiele

Die Nachricht innerhalb des `<noembed>`-Tags wird nur angezeigt, wenn Ihr Browser das `<embed>`-Tag nicht unterstützt.

### Alternative Inhalte anzeigen

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
