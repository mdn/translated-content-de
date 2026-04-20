---
title: CSS-Eigenschaft `scroll-margin-block`
short-title: scroll-margin-block
slug: Web/CSS/Reference/Properties/scroll-margin-block
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die CSS-[Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) `scroll-margin-block` legt die Scroll-Margen eines Elements in der Block-Dimension fest.

{{InteractiveExample("CSS Demo: scroll-margin-block")}}

```css interactive-example-choice
scroll-margin-block: 0;
```

```css interactive-example-choice
scroll-margin-block: 20px;
```

```css interactive-example-choice
scroll-margin-block: 2em;
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

## Bestandteil-Eigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- {{cssxref("scroll-margin-block-end")}}
- {{cssxref("scroll-margin-block-start")}}

## Syntax

```css
/* <length> values */
scroll-margin-block: 10px;
scroll-margin-block: 1em 0.5em;

/* Global values */
scroll-margin-block: inherit;
scroll-margin-block: initial;
scroll-margin-block: revert;
scroll-margin-block: revert-layer;
scroll-margin-block: unset;
```

### Werte

- {{CSSXref("&lt;length&gt;")}}
  - : Ein Abstand vom entsprechenden Rand des Scroll-Containers.

## Beschreibung

Die `scroll-margin`-Werte stellen Abstände dar, die den Scroll-Snap-Bereich definieren, der verwendet wird, um diese Box an das {{Glossary("Scroll_snap#snapport", "Snapport")}} einrasten zu lassen. Der Scroll-Snap-Bereich wird bestimmt, indem die transformierte Border-Box genommen wird, deren rechteckige Begrenzungsbox im Koordinatenbereich des Scroll-Containers gefunden wird und dann die angegebenen Abstände hinzugefügt werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS scroll snap](/de/docs/Web/CSS/Guides/Scroll_snap)-Modul
- [Well-controlled scrolling with CSS scroll snap](https://web.dev/articles/css-scroll-snap) auf web.dev (2018)
