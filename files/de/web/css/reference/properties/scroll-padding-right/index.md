---
title: scroll-padding-right
slug: Web/CSS/Reference/Properties/scroll-padding-right
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die Eigenschaft `scroll-padding-right` definiert Offsets für die rechte Seite des _optimalen Ansichtsbereichs_ des Scrollports: den Bereich, der als Zielregion für das Platzieren von Inhalten im Sichtbereich des Nutzers verwendet wird. Dies ermöglicht es dem Autor, Regionen des Scrollports auszuschließen, die durch andere Inhalte verdeckt sind (wie zum Beispiel fest positionierte Toolbars oder Seitenleisten), oder mehr Platz zwischen einem anvisierten Element und den Rändern des Scrollports zu schaffen.

{{InteractiveExample("CSS Demo: scroll-padding-right")}}

```css interactive-example-choice
scroll-padding-right: 0;
```

```css interactive-example-choice
scroll-padding-right: 20px;
```

```css interactive-example-choice
scroll-padding-right: 2em;
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
  scroll-snap-align: end;
}

.scroller > div:nth-child(even) {
  background-color: white;
  color: rebeccapurple;
}
```

## Syntax

```css
/* Keyword values */
scroll-padding-right: auto;

/* <length> values */
scroll-padding-right: 10px;
scroll-padding-right: 1em;
scroll-padding-right: 10%;

/* Global values */
scroll-padding-right: inherit;
scroll-padding-right: initial;
scroll-padding-right: revert;
scroll-padding-right: revert-layer;
scroll-padding-right: unset;
```

### Werte

- `<length-percentage>`
  - : Ein nach innen gerichteter Offset vom oberen Rand des Scrollports, als gültige Länge oder Prozentsatz.
- `auto`
  - : Der Offset wird durch den User-Agent bestimmt. Dieser Wert ist in der Regel 0px, aber ein User-Agent kann erkennen und etwas anderes tun, wenn ein von null verschiedener Wert angemessener ist.

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
- [Gesteuertes Scrollen mit CSS scroll snap](https://web.dev/articles/css-scroll-snap)
