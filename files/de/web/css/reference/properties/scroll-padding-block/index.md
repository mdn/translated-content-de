---
title: CSS-Eigenschaft `scroll-padding-block`
short-title: scroll-padding-block
slug: Web/CSS/Reference/Properties/scroll-padding-block
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die [Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) der Eigenschaft `scroll-padding-block` setzt das Scroll-Padding eines Elements in der Block-Dimension.

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

Die `scroll-padding` Eigenschaften definieren Versätze für den _optimalen Anzeigebereich_ des Scrollports: den Bereich, der als Zielregion dient, um Dinge im Blickfeld des Benutzers zu platzieren. Dies ermöglicht es dem Autor, Bereiche des Scrollports auszuschließen, die von anderem Inhalt verdeckt werden (wie fest positionierte Werkzeugleisten oder Seitenleisten) oder um mehr Abstand zwischen einem Ziel-Element und den Rändern des Scrollports zu schaffen.

## Zusammenhängende Eigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

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
  - : Ein nach innen gerichteter Versatz von der entsprechenden Kante des Scrollports, als gültige Länge oder Prozentsatz.
- `auto`
  - : Der Versatz wird durch den Benutzeragenten bestimmt. Dieser wird im Allgemeinen 0px betragen, aber ein Benutzeragent kann etwas anderes erkennen und tun, wenn ein nicht-null Wert angemessener ist.

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
- [Kontrolliertes Scrollen mit CSS-Scroll-Snap](https://web.dev/articles/css-scroll-snap) auf web.dev (2018)
