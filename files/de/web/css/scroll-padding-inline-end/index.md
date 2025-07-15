---
title: scroll-padding-inline-end
slug: Web/CSS/scroll-padding-inline-end
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die Eigenschaft `scroll-padding-inline-end` definiert Versätze für die Endkante in der Inline-Dimension des _optimalen Ansichtsbereichs_ des Scrollportals: der Bereich, der als Zielbereich für die Platzierung von Inhalten im Sichtfeld des Benutzers verwendet wird. Dies ermöglicht es dem Autor, Bereiche des Scrollportals auszuschließen, die von anderem Inhalt verdeckt werden (wie z. B. fest positionierte Werkzeugleisten oder Seitenleisten), oder mehr Abstand zwischen einem gezielten Element und den Rändern des Scrollportals zu schaffen.

{{InteractiveExample("CSS Demo: scroll-padding-inline-end")}}

```css interactive-example-choice
scroll-padding-inline-end: 0;
```

```css interactive-example-choice
scroll-padding-inline-end: 20px;
```

```css interactive-example-choice
scroll-padding-inline-end: 2em;
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
  scroll-snap-align: end;
}

.scroller > div:nth-child(even) {
  background-color: #fff;
  color: rebeccapurple;
}
```

## Syntax

```css
/* Keyword values */
scroll-padding-inline-end: auto;

/* <length> values */
scroll-padding-inline-end: 10px;
scroll-padding-inline-end: 1em;
scroll-padding-inline-end: 10%;

/* Global values */
scroll-padding-inline-end: inherit;
scroll-padding-inline-end: initial;
scroll-padding-inline-end: revert;
scroll-padding-inline-end: revert-layer;
scroll-padding-inline-end: unset;
```

### Werte

- `<length-percentage>`
  - : Ein Inwards-Versatz von der Inline-Endkante des Scrollportals als gültige Länge oder als Prozentsatz.
- `auto`
  - : Der Versatz wird durch den User-Agent bestimmt. Dies ist im Allgemeinen 0px, aber ein User-Agent kann erkennen und etwas anderes tun, wenn ein anderer Wert angemessener ist.

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
