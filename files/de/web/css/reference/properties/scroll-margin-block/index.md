---
title: scroll-margin-block
slug: Web/CSS/Reference/Properties/scroll-margin-block
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die `scroll-margin-block` [Kurzschreibweise](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) setzt die Scroll-Margen eines Elements in der Block-Dimension.

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

## Bestandeigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- [`scroll-margin-block-end`](/de/docs/Web/CSS/Reference/Properties/scroll-margin-block-end)
- [`scroll-margin-block-start`](/de/docs/Web/CSS/Reference/Properties/scroll-margin-block-start)

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
  - : Ein Abstand von der entsprechenden Kante des Scroll-Containers.

## Beschreibung

Die Scroll-Margen-Werte repräsentieren Abstände, die den Scroll-Snap-Bereich definieren, der verwendet wird, um diese Box an den {{Glossary("Scroll_snap#snapport", "Snapport")}} anzupassen. Der Scroll-Snap-Bereich wird ermittelt, indem die transformierte Border-Box genommen wird, deren rechteckige Begrenzungsbox (achsenbündig im Koordinatensystem des Scroll-Containers) ermittelt und dann die angegebenen Abstände hinzugefügt werden.

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
