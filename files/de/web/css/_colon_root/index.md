---
title: :root
slug: Web/CSS/:root
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{CSSRef}}

Die **`:root`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) entspricht dem Wurzelelement eines Baums, der das Dokument repräsentiert. In HTML stellt `:root` das {{HTMLElement("html")}}-Element dar und ist mit dem Selektor `html` identisch, außer dass seine [Spezifität](/de/docs/Web/CSS/Specificity) höher ist.

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
