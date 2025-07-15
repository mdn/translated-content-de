---
title: scroll-padding-block
slug: Web/CSS/scroll-padding-block
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die `scroll-padding-block`-[Kurzbeschreibungseigenschaft](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) setzt das Scroll-Padding eines Elements in der Block-Dimension.

{{InteractiveExample("CSS Demo: scroll-padding-block")}}

```css interactive-example-choice
scroll-padding-block: 0;
```

```css interactive-example-choice
scroll-padding-block: 20px;
```

```css interactive-example-choice
scroll-padding-block: 2em;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="scroller" id="example-element">
    <div>1</div>
    <div>2</div>
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
  scroll-snap-align: start;
}

.scroller > div:nth-child(even) {
  background-color: #fff;
  color: rebeccapurple;
}
```

Die Scroll-Padding-Eigenschaften definieren Offsets für den _optimalen Ansichtsbereich_ des Scrollports: den Bereich, der als Zielbereich verwendet wird, um Elemente in Sicht des Nutzers zu positionieren. Dies ermöglicht es dem Autor, Bereiche des Scrollports auszuschließen, die durch andere Inhalte verdeckt sind (wie fixierte Toolbars oder Seitenleisten) oder mehr Freiraum zwischen einem Ziel-Element und den Rändern des Scrollports zu schaffen.

## Bestandteileigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- [`scroll-padding-block-end`](/de/docs/Web/CSS/scroll-padding-block-end)
- [`scroll-padding-block-start`](/de/docs/Web/CSS/scroll-padding-block-start)

## Syntax

```css
/* Keyword values */
scroll-padding-block: auto;

/* <length> values */
scroll-padding-block: 10px;
scroll-padding-block: 1em 0.5em;
scroll-padding-block: 10%;

/* Global values */
scroll-padding-block: inherit;
scroll-padding-block: initial;
scroll-padding-block: revert;
scroll-padding-block: revert-layer;
scroll-padding-block: unset;
```

### Werte

- `<length-percentage>`
  - : Ein nach innen gerichteter Offset von der entsprechenden Kante des Scrollports, als gültige Länge oder Prozentsatz.
- `auto`
  - : Der Offset wird vom User-Agent bestimmt. Dies ist im Allgemeinen 0px, aber ein User-Agent kann etwas anderes tun, wenn ein nicht null-Wert angemessener ist.

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
