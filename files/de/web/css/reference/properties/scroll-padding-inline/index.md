---
title: scroll-padding-inline
slug: Web/CSS/Reference/Properties/scroll-padding-inline
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die CSS-Eigenschaft `scroll-padding-inline` ist eine [Shorthand-Eigenschaft](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties), die das Scroll-Padding eines Elements in der Inline-Richtung festlegt.

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

Die Scroll-Padding-Eigenschaften definieren Versätze für den _optimalen Anzeigeausschnitt_ des Scrollbereichs: den Bereich, der als Zielregion für das Platzieren von Elementen im Sichtfeld des Benutzers verwendet wird. Dies ermöglicht es dem Autor, Regionen des Scrollbereichs auszuschließen, die von anderem Inhalt verdeckt werden (wie fest positionierte Werkzeugleisten oder Seitenleisten) oder mehr Abstand zwischen einem anvisierten Element und den Rändern des Scrollbereichs zu schaffen.

## Bestandteileigenschaften

Diese Eigenschaft ist eine Shorthand für die folgenden CSS-Eigenschaften:

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
  - : Ein interner Versatz von der entsprechenden Kante des Scrollbereichs, angegeben als gültige Länge oder Prozentsatz.
- `auto`
  - : Der Versatz wird durch den Benutzeragenten bestimmt. Dies ist in der Regel 0px, aber ein Benutzeragent kann etwas anderes feststellen und tun, wenn ein anderer Wert angemessener ist.

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
- [Well-controlled scrolling with CSS scroll snap](https://web.dev/articles/css-scroll-snap)
