---
title: scroll-padding-block-end
slug: Web/CSS/Reference/Properties/scroll-padding-block-end
l10n:
  sourceCommit: a14f56b06eabf3b182ae4bc0e02634a8ccc01f20
---

Die Eigenschaft `scroll-padding-block-end` definiert Versätze für die Endkante in der Blockdimension der _optimalen Anzeigeregion_ des Scrollports: Die Region, die als Zielregion für das Platzieren von Inhalten im Sichtbereich des Nutzers verwendet wird. Dies ermöglicht es dem Autor, Regionen des Scrollports auszuschließen, die von anderem Inhalt (wie z. B. fest positionierten Werkzeugleisten oder Seitenleisten) verdeckt sind, oder mehr Platz zwischen einem angezielten Element und den Rändern des Scrollports zu schaffen.

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
  - : Ein innerer Versatz von der Blockendkante des Scrollports, als gültige Länge oder Prozentsatz.
- `auto`
  - : Der Versatz wird vom User Agent bestimmt. Dies ist im Allgemeinen 0px, aber ein User Agent kann erkennen und etwas anderes tun, wenn ein von 0 abweichender Wert geeigneter ist.

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
- [Gut kontrolliertes Scrollen mit CSS scroll snap](https://web.dev/articles/css-scroll-snap) auf web.dev (2018)
