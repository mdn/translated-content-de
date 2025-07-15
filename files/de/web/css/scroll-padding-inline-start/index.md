---
title: scroll-padding-inline-start
slug: Web/CSS/scroll-padding-inline-start
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die Eigenschaft `scroll-padding-inline-start` definiert Versätze für die Startkante in der Inline-Dimension des _optimalen Ansichtsbereichs_ des Scrollports: der Bereich, der als Zielregion verwendet wird, um Dinge in den Blick des Nutzers zu bringen. Dies ermöglicht es dem Autor, Bereiche des Scrollports auszuschließen, die durch andere Inhalte verdeckt sind (wie z. B. fixierte Toolbars oder Seitenleisten) oder um mehr Abstand zwischen einem anvisierten Element und den Kanten des Scrollports zu schaffen.

{{InteractiveExample("CSS Demo: scroll-padding-inline-start")}}

```css interactive-example-choice
scroll-padding-inline-start: 0;
```

```css interactive-example-choice
scroll-padding-inline-start: 20px;
```

```css interactive-example-choice
scroll-padding-inline-start: 2em;
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

## Syntax

```css
/* Keyword values */
scroll-padding-inline-start: auto;

/* <length> values */
scroll-padding-inline-start: 10px;
scroll-padding-inline-start: 1em;
scroll-padding-inline-start: 10%;

/* Global values */
scroll-padding-inline-start: inherit;
scroll-padding-inline-start: initial;
scroll-padding-inline-start: revert;
scroll-padding-inline-start: revert-layer;
scroll-padding-inline-start: unset;
```

### Werte

- `<length-percentage>`
  - : Ein nach innen gerichteter Versatz von der Inline-Startkante des Scrollports, als gültige Länge oder als Prozentsatz.
- `auto`
  - : Der Versatz wird durch den User-Agent bestimmt. Dies wird in der Regel 0px sein, aber ein User-Agent kann etwas anderes feststellen und tun, wenn ein Wert ungleich Null angemessener ist.

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
