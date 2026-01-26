---
title: :root
slug: Web/CSS/Reference/Selectors/:root
l10n:
  sourceCommit: 35534a9827b883f755d6f429c230481496f9ead5
---

Die **`:root`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) entspricht dem Wurzelelement eines Baums, der das Dokument darstellt. In HTML repräsentiert `:root` das {{HTMLElement("html")}}-Element und ist identisch mit dem Selektor `html`, mit dem Unterschied, dass seine [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity) (0-1-0) höher ist als die von `html` (0-0-1).

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

`:root` kann nützlich sein, um globale [CSS-Variablen](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties) zu deklarieren:

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
