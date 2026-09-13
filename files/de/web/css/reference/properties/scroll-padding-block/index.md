---
title: CSS-Eigenschaft `scroll-padding-block`
short-title: scroll-padding-block
slug: Web/CSS/Reference/Properties/scroll-padding-block
l10n:
  sourceCommit: 3fb9ea0187429234b47cb0385a9515a69757fe63
---

Die [CSS](/de/docs/Web/CSS)-[Kurzform](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties)-Eigenschaft **`scroll-padding-block`** legt das Scroll-Padding eines Elements in der Blockdimension fest.

Die `scroll-padding`-Eigenschaften definieren Versätze für den _optimalen Anzeigebereich_ des Scrollports: den Bereich, der als Zielbereich verwendet wird, um Dinge im Sichtbereich der Nutzenden zu platzieren. Dadurch kann der Autor Bereiche des Scrollports ausschließen, die durch andere Inhalte verdeckt werden (z. B. fest positionierte Symbolleisten oder Seitenleisten), oder mehr Abstand zwischen einem Zielelement und den Rändern des Scrollports schaffen.

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

## Bestandteileigenschaften

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
  - : Ein nach innen gerichteter Versatz von der entsprechenden Kante des Scrollports, als gültige Länge oder Prozentangabe.
- `auto`
  - : Der Versatz wird durch den User-Agent bestimmt. Im Allgemeinen beträgt dieser 0px, aber ein User-Agent kann erkennen und etwas anderes tun, wenn ein Wert ungleich null angemessener ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Scroll Snap](/de/docs/Web/CSS/Guides/Scroll_snap)-Modul
- [Gut kontrolliertes Scrollen mit CSS Scroll Snap](https://web.dev/articles/css-scroll-snap) auf web.dev (2018)
