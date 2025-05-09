---
title: scroll-padding-inline-start
slug: Web/CSS/scroll-padding-inline-start
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

{{CSSRef}}

Die Eigenschaft `scroll-padding-inline-start` definiert Offsets für die Startkante in der Inline-Dimension der _optimalen Anzeigeregion_ des Scrollports: die Region, die als Zielregion für das Platzieren von Elementen im Sichtbereich des Benutzers verwendet wird. Dadurch kann der Autor Regionen des Scrollports ausschließen, die durch andere Inhalte (wie fix positionierte Symbolleisten oder Seitenleisten) verdeckt sind, oder um mehr Abstand zwischen einem gezielten Element und den Rändern des Scrollports zu schaffen.

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
  - : Ein nach innen gerichtetes Offset von der Inline-Startkante des Scrollports, als gültige Länge oder Prozentsatz.
- `auto`
  - : Das Offset wird durch den User-Agent bestimmt. Dies ist in der Regel 0px, aber ein User-Agent kann etwas anderes erkennen und anwenden, wenn ein anderer Wert geeigneter ist.

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
