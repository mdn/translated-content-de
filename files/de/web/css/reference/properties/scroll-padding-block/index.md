---
title: scroll-padding-block
slug: Web/CSS/Reference/Properties/scroll-padding-block
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

Die Eigenschaft `scroll-padding-block` [Kurzschreibweiseigenschaft](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) setzt das Scroll-Padding eines Elements in der Block-Dimension.

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

Die Scroll-Padding-Eigenschaften definieren Offsets für den _optimalen Ansichtsbereich_ des Scrollports: den Bereich, der als Zielbereich für das Platzieren von Inhalten in der Ansicht des Benutzers verwendet wird. Dadurch kann der Autor Bereiche des Scrollports ausschließen, die durch andere Inhalte (wie fest positionierte Werkzeugleisten oder Seitenleisten) verdeckt sind, oder mehr Freiraum zwischen einem anvisierten Element und den Kanten des Scrollports schaffen.

## Untergeordnete Eigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- {{cssxref("scroll-padding-block-end")}}
- {{cssxref("scroll-padding-block-start")}}

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
  - : Ein nach innen gerichteter Abstand von der entsprechenden Kante des Scrollports, als gültige Länge oder als Prozentsatz.
- `auto`
  - : Das Offset wird durch den User Agent bestimmt. Dies wird im Allgemeinen 0px sein, aber ein User Agent kann erkennen und etwas anderes tun, wenn ein von Null verschiedener Wert angemessener ist.

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
