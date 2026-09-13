---
title: CSS-Eigenschaft `scroll-padding-inline`
short-title: scroll-padding-inline
slug: Web/CSS/Reference/Properties/scroll-padding-inline
l10n:
  sourceCommit: 3fb9ea0187429234b47cb0385a9515a69757fe63
---

Die [CSS](/de/docs/Web/CSS)-[Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) **`scroll-padding-inline`** legt das Scroll-Padding eines Elements in der Inline-Dimension fest.

Die `scroll-padding`-Eigenschaften definieren Versätze für den _optimalen Anzeigebereich_ des Scrollports: den Bereich, der als Zielbereich verwendet wird, um Inhalte im Sichtbereich der Benutzerin oder des Benutzers zu platzieren. Dies ermöglicht es Autorinnen und Autoren, Bereiche des Scrollports auszuschließen, die durch andere Inhalte verdeckt werden (z. B. Toolbars oder Sidebars mit fester Positionierung), oder mehr Abstand zwischen einem Ziel-Element und den Rändern des Scrollports zu schaffen.

{{InteractiveExample("CSS Demo: scroll-padding-inline")}}

```css interactive-example-choice
scroll-padding-inline: 0;
```

```css interactive-example-choice
scroll-padding-inline: 20px;
```

```css interactive-example-choice
scroll-padding-inline: 2em;
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

## Zugehörige Eigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- {{cssxref("scroll-padding-inline-end")}}
- {{cssxref("scroll-padding-inline-start")}}

## Syntax

```css
/* Keyword values */
scroll-padding-inline: auto;

/* <length> values */
scroll-padding-inline: 10px;
scroll-padding-inline: 1em 0.5em;
scroll-padding-inline: 10%;

/* Global values */
scroll-padding-inline: inherit;
scroll-padding-inline: initial;
scroll-padding-inline: revert;
scroll-padding-inline: revert-layer;
scroll-padding-inline: unset;
```

### Werte

- `<length-percentage>`
  - : Ein nach innen gerichteter Versatz von der entsprechenden Kante des Scrollports, angegeben als gültige Länge oder Prozentsatz.
- `auto`
  - : Der Versatz wird durch den User-Agent bestimmt. Im Allgemeinen beträgt dieser Wert 0px, aber ein User-Agent kann erkennen und etwas anderes festlegen, wenn ein Wert ungleich null angemessener ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Modul [CSS scroll snap](/de/docs/Web/CSS/Guides/Scroll_snap)
- [Gut kontrolliertes Scrollen mit CSS scroll snap](https://web.dev/articles/css-scroll-snap) auf web.dev (2018)
