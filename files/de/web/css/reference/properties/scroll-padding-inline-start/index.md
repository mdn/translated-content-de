---
title: "`scroll-padding-inline-start` CSS property"
short-title: scroll-padding-inline-start
slug: Web/CSS/Reference/Properties/scroll-padding-inline-start
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die Eigenschaft `scroll-padding-inline-start` legt die Abstände für den Anfangsrand in der Inline-Dimension des _optimalen Betrachtungsbereichs_ des Scrollports fest: Der Bereich, der als Zielregion verwendet wird, um Dinge im Sichtbereich des Benutzers zu platzieren. Dies ermöglicht es dem Autor, Bereiche des Scrollports auszuschließen, die durch anderen Inhalt verdeckt sind (wie z.B. fest positionierte Werkzeugleisten oder Seitenleisten), oder um mehr Abstand zwischen einem gezielten Element und den Rändern des Scrollports zu schaffen.

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
  - : Ein nach innen gerichteter Versatz vom Inline-Anfangsrand des Scrollports, als gültige Länge oder Prozentwert.
- `auto`
  - : Der Versatz wird durch den Benutzeragenten bestimmt. Dies ist im Allgemeinen 0px, aber ein Benutzeragent kann erkennen und etwas anderes tun, wenn ein von Null abweichender Wert angemessener ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS-Scroll-Snap](/de/docs/Web/CSS/Guides/Scroll_snap) Modul
- [Gut kontrolliertes Scrollen mit CSS-Scroll-Snap](https://web.dev/articles/css-scroll-snap) auf web.dev (2018)
