---
title: ":root"
slug: Web/CSS/:root
l10n:
  sourceCommit: 5fea7c9593f5e4b4ef13ec65064acf1eabf01e4e
---

{{CSSRef}}

Die **`:root`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) entspricht dem Wurzelelement eines Baumes, der das Dokument darstellt. In HTML repräsentiert `:root` das {{HTMLElement("html")}}-Element und ist identisch mit dem Selektor `html`, außer dass seine [Spezifität](/de/docs/Web/CSS/Specificity) höher ist.

```css
/* Wählt das Wurzelelement des Dokuments aus:
   <html> im Fall von HTML */
:root {
  background: yellow;
}
```

## Syntax

```css
:root {
  /* ... */
}
```

## Beispiele

### Deklarieren von globalen CSS-Variablen

`:root` kann nützlich sein, um globale [CSS-Variablen](/de/docs/Web/CSS/Using_CSS_custom_properties) zu deklarieren:

```css
:root {
  --main-color: hotpink;
  --pane-padding: 5px 42px;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("html")}}
- {{domxref("Document.rootElement")}}
- {{domxref("Node.getRootNode()")}}
- {{domxref("Element.shadowRoot")}}
- {{domxref("ShadowRoot")}}
