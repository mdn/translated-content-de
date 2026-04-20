---
title: "`scroll-margin-block-start` CSS property"
short-title: scroll-margin-block-start
slug: Web/CSS/Reference/Properties/scroll-margin-block-start
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die Eigenschaft `scroll-margin-block-start` definiert den Rand des Scroll-Snap-Bereichs am Anfang der Block-Dimension, der verwendet wird, um dieses Element an den {{Glossary("Scroll_snap#snapport", "Snapport")}} zu schnappen. Der Scroll-Snap-Bereich wird bestimmt, indem die transformierte Rahmenbox genommen wird, ihre rechteckige Begrenzungsbox (achsenparallel im Koordinatenraum des Scroll-Containers) ermittelt wird und dann die angegebenen Überstände addiert werden.

{{InteractiveExample("CSS Demo: scroll-margin-block-start")}}

```css interactive-example-choice
scroll-margin-block-start: 0;
```

```css interactive-example-choice
scroll-margin-block-start: 20px;
```

```css interactive-example-choice
scroll-margin-block-start: 2em;
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
  scroll-snap-align: start;
}

.scroller > div:nth-child(even) {
  background-color: white;
  color: rebeccapurple;
}
```

## Syntax

```css
/* <length> values */
scroll-margin-block-start: 10px;
scroll-margin-block-start: 1em;

/* Global values */
scroll-margin-block-start: inherit;
scroll-margin-block-start: initial;
scroll-margin-block-start: revert;
scroll-margin-block-start: revert-layer;
scroll-margin-block-start: unset;
```

### Werte

- {{CSSXref("&lt;length&gt;")}}
  - : Ein Überstand von der Block-Startkante des Scroll-Containers.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS-Scroll-Snap](/de/docs/Web/CSS/Guides/Scroll_snap) Modul
- [Gut kontrolliertes Scrolling mit CSS Scroll Snap](https://web.dev/articles/css-scroll-snap) auf web.dev (2018)
