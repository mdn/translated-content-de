---
title: scroll-margin-block
slug: Web/CSS/scroll-margin-block
l10n:
  sourceCommit: 4ec412012be0b083ebcae4a56b425f49901143f2
---

Die `scroll-margin-block` [Shorthand-Eigenschaft](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) setzt die Scroll-Margen eines Elements in der Block-Dimension.

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

## Bestandteileigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- [`scroll-margin-block-end`](/de/docs/Web/CSS/scroll-margin-block-end)
- [`scroll-margin-block-start`](/de/docs/Web/CSS/scroll-margin-block-start)

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

Die Werte der Scroll-Marge repräsentieren Abstände, die den Bereich für das Scroll-Snapping definieren, der verwendet wird, um diese Box an den {{Glossary("Scroll_snap#snapport", "Snapport")}} zu schnappen. Der Scroll-Snap-Bereich wird bestimmt, indem man die transformierte Rand-Box nimmt, ihre rechteckige Begrenzungsbox (achsausrichtet im Koordinatenraum des Scroll-Containers) findet und dann die angegebenen Abstände hinzufügt.

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
- [Gut gesteuertes Scrollen mit CSS scroll snap](https://web.dev/articles/css-scroll-snap)
