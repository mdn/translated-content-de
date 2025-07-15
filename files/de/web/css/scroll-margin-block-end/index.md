---
title: scroll-margin-block-end
slug: Web/CSS/scroll-margin-block-end
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die Eigenschaft `scroll-margin-block-end` definiert den Rand des Scroll-Snap-Bereichs am Ende der Block-Dimension, der verwendet wird, um dieses Kästchen an den {{Glossary("Scroll_snap#snapport", "Snapport")}} zu schnappen. Der Scroll-Snap-Bereich wird bestimmt, indem die transformierte Rahmenbox genommen wird, deren rechteckige Begrenzungsbox (achsen-ausgerichtet im Koordinatenraum des Scroll-Containers) gefunden wird, und dann die angegebenen Abstände hinzugefügt werden.

{{InteractiveExample("CSS Demo: scroll-margin-block-end")}}

```css interactive-example-choice
scroll-margin-block-end: 0;
```

```css interactive-example-choice
scroll-margin-block-end: 20px;
```

```css interactive-example-choice
scroll-margin-block-end: 2em;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="scroller">
    <div>1</div>
    <div id="example-element">2</div>
    <div>3</div>
  </div>
  <div class="info">Scroll »</div>
</section>
```

```css interactive-example
.default-example .info {
  inline-size: 100%;
  padding: 0.5em 0;
  font-size: 90%;
  writing-mode: vertical-rl;
}

.scroller {
  text-align: left;
  height: 250px;
  width: 270px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border: 1px solid black;
  scroll-snap-type: y mandatory;
}

.scroller > div {
  flex: 0 0 250px;
  background-color: rebeccapurple;
  color: #fff;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-snap-align: end;
}

.scroller > div:nth-child(even) {
  background-color: #fff;
  color: rebeccapurple;
}
```

## Syntax

```css
/* <length> values */
scroll-margin-block-end: 10px;
scroll-margin-block-end: 1em;

/* Global values */
scroll-margin-block-end: inherit;
scroll-margin-block-end: initial;
scroll-margin-block-end: revert;
scroll-margin-block-end: revert-layer;
scroll-margin-block-end: unset;
```

### Werte

- {{CSSXref("&lt;length&gt;")}}
  - : Ein Rand vom Ende der Blockkante des Scroll-Containers.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS scroll snap](/de/docs/Web/CSS/CSS_scroll_snap)
- [Gut kontrolliertes Scrollen mit CSS scroll snap](https://web.dev/articles/css-scroll-snap)
