---
title: "`<noembed>` HTML embed fallback Element"
short-title: <noembed>
slug: Web/HTML/Reference/Elements/noembed
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

{{deprecated_header}}

Das **`<noembed>`** [HTML](/de/docs/Web/HTML)-Element ist eine veraltete, nicht standardisierte Methode, um alternative oder "Fallback"-Inhalte für Browser bereitzustellen, die das {{HTMLElement("embed")}}-Element nicht unterstützen oder den Typ von [eingebetteten Inhalten](/de/docs/Web/HTML/Guides/Content_categories#embedded_content) nicht unterstützen, den ein Autor verwenden möchte. Dieses Element wurde in HTML 4.01 und höher zugunsten des Platzierens von Fallback-Inhalten zwischen den öffnenden und schließenden Tags eines {{HTMLElement("object")}}-Elements als veraltet erklärt.

> [!NOTE]
> Obwohl dieses Element derzeit noch in vielen Browsern funktioniert, ist es veraltet und sollte nicht verwendet werden. Verwenden Sie stattdessen {{HTMLElement("object")}}, mit Fallback-Inhalten zwischen den öffnenden und schließenden Tags des Elements.

## Beispiele

Die Nachricht im `<noembed>`-Tag wird nur angezeigt, wenn Ihr Browser das `<embed>`-Tag nicht unterstützt.

### Alternative Inhalte anzeigen

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
