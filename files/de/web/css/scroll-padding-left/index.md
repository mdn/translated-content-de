---
title: scroll-padding-left
slug: Web/CSS/scroll-padding-left
l10n:
  sourceCommit: 4ec412012be0b083ebcae4a56b425f49901143f2
---

Die Eigenschaft `scroll-padding-left` definiert Versätze für die linke Seite des _optimalen Anzeigebereichs_ des Scrollports: der Bereich, der als Zielregion verwendet wird, um Dinge im Blickfeld des Benutzers zu platzieren. Dies ermöglicht es dem Autor, Bereiche des Scrollports auszuschließen, die durch andere Inhalte verdeckt sind (wie fest positionierte Symbolleisten oder Seitenleisten) oder um einem anvisierten Element mehr Abstand zu den Rändern des Scrollports zu geben.

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
  - : Ein innerer Versatz von der linken Kante des Scrollports, als gültige Länge oder Prozentsatz.
- `auto`
  - : Der Versatz wird durch den Benutzeragenten bestimmt. Im Allgemeinen wird dies 0px sein, aber ein Benutzeragent kann erkennen und etwas anderes tun, wenn ein ungleich Null Wert angemessener ist.

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
