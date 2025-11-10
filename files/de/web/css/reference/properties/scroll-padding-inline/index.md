---
title: scroll-padding-inline
slug: Web/CSS/Reference/Properties/scroll-padding-inline
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die `scroll-padding-inline` [Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) legt das Scroll-Padding eines Elements in der Inline-Dimension fest.

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

Die Scroll-Padding-Eigenschaften definieren Versätze für den _optimalen Ansichtsbereich_ des Scrollports: den Bereich, der als Zielregion dient, um Dinge für den Benutzer sichtbar zu machen. Dies ermöglicht es dem Autor, Bereiche des Scrollports auszuschließen, die durch andere Inhalte verdeckt werden (wie z.B. fest positionierte Werkzeugleisten oder Seitenleisten), oder um zwischen einem zielgerichteten Element und den Rändern des Scrollports mehr Abstand zu schaffen.

## Bestandeigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- [`scroll-padding-inline-end`](/de/docs/Web/CSS/Reference/Properties/scroll-padding-inline-end)
- [`scroll-padding-inline-start`](/de/docs/Web/CSS/Reference/Properties/scroll-padding-inline-start)

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
  - : Ein innerer Versatz von dem entsprechenden Rand des Scrollports, als gültige Länge oder Prozentangabe.
- `auto`
  - : Der Versatz wird durch den User-Agent bestimmt. Dies wird im Allgemeinen 0px sein, aber ein User-Agent kann etwas anderes feststellen und tun, wenn ein Wert ungleich null angemessener ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS scroll snap](/de/docs/Web/CSS/Guides/Scroll_snap)
- [Gut kontrolliertes Scrollen mit CSS scroll snap](https://web.dev/articles/css-scroll-snap)
