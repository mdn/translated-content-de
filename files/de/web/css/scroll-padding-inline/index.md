---
title: scroll-padding-inline
slug: Web/CSS/scroll-padding-inline
l10n:
  sourceCommit: 4ec412012be0b083ebcae4a56b425f49901143f2
---

Die `scroll-padding-inline` [Kurzschreibweise](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) setzt das Scroll-Padding eines Elements in der Inline-Dimension.

{{InteractiveExample("CSS Demo: scroll-padding-inline")}}

```css interactive-example-choice
scroll-padding-inline: 0;
```

```css interactive-example-choice
scroll-padding-inline: 20px;
```

```css interactive-example-choice
scroll-padding-inline: 2em;
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
.default-example {
  flex-wrap: wrap;
}

.default-example .info {
  width: 100%;
  padding: 0.5em 0;
  font-size: 90%;
}

.scroller {
  text-align: left;
  width: 250px;
  height: 250px;
  overflow-x: scroll;
  display: flex;
  box-sizing: border-box;
  border: 1px solid black;
  scroll-snap-type: x mandatory;
}

.scroller > div {
  flex: 0 0 250px;
  width: 250px;
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

Die Scroll-Padding-Eigenschaften definieren Versätze für die _optimale Ansichtsregion_ des Scrollports: die Region, die als Zielregion verwendet wird, um Dinge im Blickfeld des Benutzers zu platzieren. Dies ermöglicht es dem Autor, Regionen des Scrollports auszuschließen, die durch andere Inhalte (wie fest positionierte Werkzeugleisten oder Seitenleisten) verdeckt werden, oder um mehr Platz zwischen einem anvisierten Element und den Rändern des Scrollports zu schaffen.

## Bestandteile

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- [`scroll-padding-inline-end`](/de/docs/Web/CSS/scroll-padding-inline-end)
- [`scroll-padding-inline-start`](/de/docs/Web/CSS/scroll-padding-inline-start)

## Syntax

```css
/* Keyword values */
scroll-padding-inline: auto;

/* <length> values */
scroll-padding-inline: 10px;
scroll-padding-inline: 1em 0.5em;
scroll-padding-inline: 10%;

/* Global values */
scroll-padding-inline: inherit;
scroll-padding-inline: initial;
scroll-padding-inline: revert;
scroll-padding-inline: revert-layer;
scroll-padding-inline: unset;
```

### Werte

- `<length-percentage>`
  - : Ein nach innen gerichteter Versatz vom entsprechenden Rand des Scrollports, entweder als gültige Länge oder als Prozentsatz.
- `auto`
  - : Der Versatz wird vom User-Agent bestimmt. Dies wird in der Regel 0px sein, aber ein User-Agent kann ein anderes Verhalten erkennen und umsetzen, wenn ein ungleich Null Wert geeigneter ist.

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
