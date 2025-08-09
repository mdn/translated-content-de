---
title: scroll-padding-block-end
slug: Web/CSS/scroll-padding-block-end
l10n:
  sourceCommit: 4ec412012be0b083ebcae4a56b425f49901143f2
---

Die Eigenschaft `scroll-padding-block-end` definiert Offsets für die Endkante in der Block-Dimension des _optimalen Ansichtsbereichs_ des Scrollports: der Bereich, der als Zielregion zum Platzieren von Elementen in der Ansicht des Benutzers verwendet wird. Dies ermöglicht es dem Autor, Bereiche des Scrollports auszuschließen, die von anderem Inhalt (wie fest positionierten Werkzeugleisten oder Seitenleisten) verdeckt werden, oder um mehr Abstand zwischen einem anvisierten Element und den Rändern des Scrollports zu schaffen.

{{InteractiveExample("CSS Demo: scroll-padding-block-end")}}

```css interactive-example-choice
scroll-padding-block-end: 0;
```

```css interactive-example-choice
scroll-padding-block-end: 20px;
```

```css interactive-example-choice
scroll-padding-block-end: 2em;
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
scroll-padding-block-end: auto;

/* <length> values */
scroll-padding-block-end: 10px;
scroll-padding-block-end: 1em;
scroll-padding-block-end: 10%;

/* Global values */
scroll-padding-block-end: inherit;
scroll-padding-block-end: initial;
scroll-padding-block-end: revert;
scroll-padding-block-end: revert-layer;
scroll-padding-block-end: unset;
```

### Werte

- `<length-percentage>`
  - : Ein nach innen gerichtetes Offset von der Block-Endkante des Scrollports, angegeben als eine gültige Länge oder ein Prozentsatz.
- `auto`
  - : Das Offset wird vom Benutzeragenten bestimmt. Dies ist in der Regel 0px, aber ein Benutzeragent kann erkennen und etwas anderes tun, wenn ein Wert ungleich Null angemessener ist.

## Formaler Definition

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
