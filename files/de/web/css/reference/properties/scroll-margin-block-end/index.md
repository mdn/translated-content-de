---
title: scroll-margin-block-end
slug: Web/CSS/Reference/Properties/scroll-margin-block-end
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die Eigenschaft `scroll-margin-block-end` definiert den Rand des Scroll-Schnappbereichs am Ende der Blockdimension, der verwendet wird, um dieses Element mit dem {{Glossary("Scroll_snap#snapport", "Snapport")}} zu verbinden. Der Scroll-Schnappbereich wird bestimmt, indem der transformierte Rahmen des Rahmens genommen wird, sein rechteckiger Begrenzungsrahmen (achsenparallel im Koordinatenraum des Scroll-Containers) ermittelt wird und dann die angegebenen Ausdehnungen hinzugefügt werden.

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
  color: white;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-snap-align: end;
}

.scroller > div:nth-child(even) {
  background-color: white;
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
  - : Ein Vorsprung vom Blockendrand des Scroll-Containers.

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
