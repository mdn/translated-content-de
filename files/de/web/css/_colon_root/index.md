---
title: ":root"
slug: Web/CSS/:root
l10n:
  sourceCommit: 5fea7c9593f5e4b4ef13ec65064acf1eabf01e4e
---

{{CSSRef}}

Die **`:root`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) entspricht dem Wurzelelement eines Baums, der das Dokument darstellt. In HTML repräsentiert `:root` das {{HTMLElement("html")}}-Element und ist identisch mit dem Selektor `html`, außer dass seine [Spezifität](/de/docs/Web/CSS/Specificity) höher ist.

```css
/* Selects the root element of the document:
   <html> in the case of HTML */
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

### Globale CSS-Variablen deklarieren

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
- [`Document.rootElement`](/de/docs/Web/API/Document/rootElement)
- [`Node.getRootNode()`](/de/docs/Web/API/Node/getRootNode)
- [`Element.shadowRoot`](/de/docs/Web/API/Element/shadowRoot)
- [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)
