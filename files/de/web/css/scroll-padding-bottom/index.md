---
title: scroll-padding-bottom
slug: Web/CSS/scroll-padding-bottom
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die Eigenschaft `scroll-padding-bottom` definiert Versätze für den unteren Rand des _optimalen Ansichtsbereichs_ des Scrollports: der Bereich, der als Zielregion für das Platzieren von Inhalten im Sichtbereich des Benutzers genutzt wird. Dies ermöglicht es dem Autor, Bereiche des Scrollports auszuschließen, die durch andere Inhalte verdeckt sind (wie fest positionierte Symbolleisten oder Seitenleisten), oder mehr Abstand zwischen einem anvisierten Element und den Rändern des Scrollports zu schaffen.

{{InteractiveExample("CSS Demo: scroll-padding-bottom")}}

```css interactive-example-choice
scroll-padding-bottom: 0;
```

```css interactive-example-choice
scroll-padding-bottom: 20px;
```

```css interactive-example-choice
scroll-padding-bottom: 2em;
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
scroll-padding-bottom: auto;

/* <length> values */
scroll-padding-bottom: 10px;
scroll-padding-bottom: 1em;
scroll-padding-bottom: 10%;

/* Global values */
scroll-padding-bottom: inherit;
scroll-padding-bottom: initial;
scroll-padding-bottom: revert;
scroll-padding-bottom: revert-layer;
scroll-padding-bottom: unset;
```

### Werte

- `<length-percentage>`
  - : Ein nach innen gerichteter Versatz vom unteren Rand des Scrollports, als gültige Länge oder Prozentangabe.
- `auto`
  - : Der Versatz wird durch den Benutzeragenten bestimmt. Dies ist in der Regel 0px, ein Benutzeragent kann jedoch erkennen und etwas anderes tun, wenn ein anderer Wert angemessener ist.

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
