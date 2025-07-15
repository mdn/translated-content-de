---
title: scroll-padding-block-start
slug: Web/CSS/scroll-padding-block-start
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die Eigenschaft `scroll-padding-block-start` definiert Versätze für die Anfangskante in der Blockdimension der _optimalen Betrachtungsregion_ des Scrollports: der Region, die als Zielregion verwendet wird, um Elemente für den Nutzer sichtbar zu platzieren. Dadurch kann der Autor Bereiche des Scrollports ausschließen, die durch andere Inhalte (wie zum Beispiel fest positionierte Toolbars oder Seitenleisten) verdeckt werden, oder um mehr Abstand zwischen einem anvisierten Element und den Rändern des Scrollports zu schaffen.

{{InteractiveExample("CSS Demo: scroll-padding-block-start")}}

```css interactive-example-choice
scroll-padding-block-start: 0;
```

```css interactive-example-choice
scroll-padding-block-start: 20px;
```

```css interactive-example-choice
scroll-padding-block-start: 2em;
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
scroll-padding-block-start: auto;

/* <length> values */
scroll-padding-block-start: 10px;
scroll-padding-block-start: 1em;
scroll-padding-block-start: 10%;

/* Global values */
scroll-padding-block-start: inherit;
scroll-padding-block-start: initial;
scroll-padding-block-start: revert;
scroll-padding-block-start: revert-layer;
scroll-padding-block-start: unset;
```

### Werte

- `<length-percentage>`
  - : Ein innerer Versatz von der Startkante des Scrollports in der Blockrichtung, als gültige Länge oder Prozentsatz.
- `auto`
  - : Der Versatz wird vom Benutzeragenten bestimmt. Dies ist im Allgemeinen 0px, aber ein Benutzeragent kann erkennen und anders handeln, wenn ein Wert ungleich null geeigneter ist.

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
