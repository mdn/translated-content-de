---
title: scroll-padding-block-start
slug: Web/CSS/scroll-padding-block-start
l10n:
  sourceCommit: 4ec412012be0b083ebcae4a56b425f49901143f2
---

Die Eigenschaft `scroll-padding-block-start` definiert Versätze für den Startbereich in der Blockdimension der _optimalen Anzeigeregion_ des Scrollports: der Bereich, der als Zielregion zum Platzieren von Elementen im Sichtbereich des Nutzers verwendet wird. Dies ermöglicht es dem Autor, Bereiche des Scrollports auszuschließen, die von anderen Inhalten verdeckt werden (wie fix positionierte Werkzeugleisten oder Seitenleisten) oder mehr Abstand zwischen einem zielgerichteten Element und den Rändern des Scrollports zu schaffen.

{{InteractiveExample("CSS Demo: scroll-padding-block-start")}}

```css interactive-example-choice
scroll-padding-block-start: 0;
```

```css interactive-example-choice
scroll-padding-block-start: 20px;
```

```css interactive-example-choice
scroll-padding-block-start: 2em;
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

## Syntax

```css
/* Keyword values */
scroll-padding-block-start: auto;

/* <length> values */
scroll-padding-block-start: 10px;
scroll-padding-block-start: 1em;
scroll-padding-block-start: 10%;

/* Global values */
scroll-padding-block-start: inherit;
scroll-padding-block-start: initial;
scroll-padding-block-start: revert;
scroll-padding-block-start: revert-layer;
scroll-padding-block-start: unset;
```

### Werte

- `<length-percentage>`
  - : Ein innerer Versatz vom Block-Startbereich des Scrollports, als gültige Länge oder Prozentsatz.
- `auto`
  - : Der Versatz wird vom User-Agent bestimmt. Dies ist in der Regel 0px, aber ein User-Agent kann erkennen und etwas anderes tun, wenn ein nicht-nuller Wert angemessener ist.

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
