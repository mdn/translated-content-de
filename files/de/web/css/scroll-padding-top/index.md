---
title: scroll-padding-top
slug: Web/CSS/scroll-padding-top
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`scroll-padding-top`**-Eigenschaft definiert Versätze für den oberen Rand der _optimalen Betrachtungsregion_ des Scrollports: die Region, die als Zielbereich zum Platzieren von Elementen im Sichtbereich des Nutzers verwendet wird. Damit kann der Autor Bereiche des Scrollports ausschließen, die von anderem Inhalt verdeckt werden (wie feste Toolbars oder Sidebars), oder mehr Abstand zwischen einem anvisierten Element und den Rändern des Scrollports schaffen.

{{InteractiveExample("CSS Demo: scroll-padding-top")}}

```css interactive-example-choice
scroll-padding-top: 0;
```

```css interactive-example-choice
scroll-padding-top: 20px;
```

```css interactive-example-choice
scroll-padding-top: 2em;
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
scroll-padding-top: auto;

/* <length> values */
scroll-padding-top: 10px;
scroll-padding-top: 1em;
scroll-padding-top: 10%;

/* Global values */
scroll-padding-top: inherit;
scroll-padding-top: initial;
scroll-padding-top: revert;
scroll-padding-top: revert-layer;
scroll-padding-top: unset;
```

### Werte

- {{cssxref("&lt;length-percentage&gt;")}}
  - : Ein innerer Versatz vom oberen Rand des Scrollports, entweder als gültige Länge oder als Prozentsatz.
- `auto`
  - : Der Versatz wird vom User Agent bestimmt. Dies ist in der Regel 0px, aber ein User Agent kann auch einen anderen Wert verwenden, wenn ein Nicht-Null-Wert besser geeignet ist.

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
