---
title: scroll-padding-block
slug: Web/CSS/Reference/Properties/scroll-padding-block
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die `scroll-padding-block` [Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) setzt die Scroll-Padding eines Elements in der Block-Dimension.

{{InteractiveExample("CSS Demo: scroll-padding-block")}}

```css interactive-example-choice
scroll-padding-block: 0;
```

```css interactive-example-choice
scroll-padding-block: 20px;
```

```css interactive-example-choice
scroll-padding-block: 2em;
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
  scroll-snap-align: start;
}

.scroller > div:nth-child(even) {
  background-color: white;
  color: rebeccapurple;
}
```

Die Scroll-Padding-Eigenschaften definieren Versätze für den _optimalen Ansichtsbereich_ des Scrollports: den Bereich, der als Zielregion für die Platzierung von Elementen im Benutzerblick dient. Dies ermöglicht es dem Autor, Bereiche des Scrollports auszuschließen, die von anderem Inhalt (wie zum Beispiel fixierten Werkzeugleisten oder Seitenleisten) verdeckt sind oder um mehr Freiraum zwischen einem anvisierten Element und den Rändern des Scrollports zu schaffen.

## Bestandteile

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- [`scroll-padding-block-end`](/de/docs/Web/CSS/Reference/Properties/scroll-padding-block-end)
- [`scroll-padding-block-start`](/de/docs/Web/CSS/Reference/Properties/scroll-padding-block-start)

## Syntax

```css
/* Keyword values */
scroll-padding-block: auto;

/* <length> values */
scroll-padding-block: 10px;
scroll-padding-block: 1em 0.5em;
scroll-padding-block: 10%;

/* Global values */
scroll-padding-block: inherit;
scroll-padding-block: initial;
scroll-padding-block: revert;
scroll-padding-block: revert-layer;
scroll-padding-block: unset;
```

### Werte

- `<length-percentage>`
  - : Ein nach innen gerichteter Versatz vom entsprechenden Rand des Scrollports, entweder in einer gültigen Länge oder einem Prozentsatz.
- `auto`
  - : Der Versatz wird vom Benutzeragenten bestimmt. Dies wird im Allgemeinen 0px sein, aber ein Benutzeragent kann etwas anderes erkennen und vornehmen, wenn ein nicht-null Wert geeigneter ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS scroll snap](/de/docs/Web/CSS/Guides/Scroll_snap)
- [Gut kontrolliertes Scrollen mit CSS scroll snap](https://web.dev/articles/css-scroll-snap)
