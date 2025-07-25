---
title: scroll-padding-left
slug: Web/CSS/scroll-padding-left
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die Eigenschaft `scroll-padding-left` definiert Versätze für die linke Seite des _optimalen Anzeigebereichs_ des Scrollports: der Bereich, der als Zielregion für die Positionierung von Elementen verwendet wird, damit diese vom Benutzer eingesehen werden können. Dadurch kann der Autor Bereiche des Scrollports ausschließen, die durch andere Inhalte verdeckt sind (z. B. fest positionierte Symbolleisten oder Seitenleisten), oder es kann mehr Freiraum zwischen einem Ziel-Element und den Rändern des Scrollports geschaffen werden.

{{InteractiveExample("CSS Demo: scroll-padding-left")}}

```css interactive-example-choice
scroll-padding-left: 0;
```

```css interactive-example-choice
scroll-padding-left: 20px;
```

```css interactive-example-choice
scroll-padding-left: 2em;
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
scroll-padding-left: auto;

/* <length> values */
scroll-padding-left: 10px;
scroll-padding-left: 1em;
scroll-padding-left: 10%;

/* Global values */
scroll-padding-left: inherit;
scroll-padding-left: initial;
scroll-padding-left: revert;
scroll-padding-left: revert-layer;
scroll-padding-left: unset;
```

### Werte

- `<length-percentage>`
  - : Ein nach innen gerichteter Versatz von der linken Kante des Scrollports, als gültige Länge oder als Prozentsatz.
- `auto`
  - : Der Versatz wird durch den User-Agent bestimmt. Dies wird im Allgemeinen 0px sein, aber ein User-Agent kann erkennen und etwas anderes tun, wenn ein anderer Wert geeigneter ist.

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
