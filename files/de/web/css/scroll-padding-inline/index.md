---
title: scroll-padding-inline
slug: Web/CSS/scroll-padding-inline
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die Eigenschaft `scroll-padding-inline` [Kurzschreibweise](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) setzt das Scroll-Padding eines Elements in der Inline-Dimension.

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

Die Scroll-Padding-Eigenschaften definieren Versätze für den _optimalen Anzeigebereich_ des Scrollbereichs: der Bereich, der als Zielregion für die Platzierung von Inhalten im Sichtbereich des Benutzers dient. Dies ermöglicht es dem Autor, Regionen des Scrollbereichs auszuschließen, die durch andere Inhalte (wie z.B. fest positionierte Toolbars oder Seitenleisten) verdeckt sind, oder mehr Platz zwischen einem Ziel-Element und den Rändern des Scrollbereichs zu schaffen.

## Einzelne Eigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

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
  - : Ein nach innen versetzter Abstand von der entsprechenden Kante des Scrollbereichs, als gültige Länge oder Prozentsatz.
- `auto`
  - : Der Versatz wird durch den Benutzeragenten bestimmt. Dies wird im Allgemeinen 0px sein, aber ein Benutzeragent kann etwas anderes erkennen und tun, wenn ein Wert ungleich null angemessener ist.

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
- [Kontrolliertes Scrollen mit CSS scroll snap](https://web.dev/articles/css-scroll-snap)
