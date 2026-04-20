---
title: "`scroll-padding-block-end` CSS property"
short-title: scroll-padding-block-end
slug: Web/CSS/Reference/Properties/scroll-padding-block-end
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die Eigenschaft `scroll-padding-block-end` definiert Offsets für die Endkante in der Block-Dimension des _optimalen Ansichtsbereichs_ des Scrollports: der Bereich, der als Zielregion verwendet wird, um Dinge in das Sichtfeld des Benutzers zu stellen. Dies ermöglicht es dem Autor, Regionen des Scrollports auszuschließen, die durch andere Inhalte (wie fest positionierte Werkzeugleisten oder Seitenleisten) verdeckt werden, oder um mehr Abstand zwischen einem anvisierten Element und den Rändern des Scrollports zu schaffen.

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
  - : Ein nach innen gerichteter Offset von der Endkante des Scrollports in der Block-Dimension, als gültige Länge oder Prozentsatz.
- `auto`
  - : Der Offset wird durch den Benutzeragenten bestimmt. Dies wird im Allgemeinen 0px sein, aber ein Benutzeragent kann etwas anderes erkennen und tun, wenn ein von Null abweichender Wert angemessener ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS scroll snap](/de/docs/Web/CSS/Guides/Scroll_snap) Modul
- [Gut gesteuertes Scrollen mit CSS scroll snap](https://web.dev/articles/css-scroll-snap) auf web.dev (2018)
