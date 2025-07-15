---
title: :root
slug: Web/CSS/:root
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`:root`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) entspricht dem Wurzelelement eines Baumes, der das Dokument repräsentiert. In HTML steht `:root` für das {{HTMLElement("html")}} Element und ist identisch mit dem Selektor `html`, außer dass seine [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) höher ist.

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

`:root` kann nützlich sein, um globale [CSS-Variablen](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) zu deklarieren:

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
