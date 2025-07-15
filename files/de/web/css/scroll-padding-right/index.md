---
title: scroll-padding-right
slug: Web/CSS/scroll-padding-right
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die Eigenschaft `scroll-padding-right` definiert Versätze für die rechte Seite der _optimalen Anzeigeregion_ des Scrollports: die Region, die als Zielregion verwendet wird, um Inhalte für den Benutzer in den Sichtbereich zu bringen. Dies ermöglicht es dem Autor, Bereiche des Scrollports auszuschließen, die durch andere Inhalte verdeckt werden (wie fest positionierte Werkzeugleisten oder Seitenleisten) oder mehr Abstand zwischen einem anvisierten Element und den Rändern des Scrollports zu schaffen.

{{InteractiveExample("CSS Demo: scroll-padding-right")}}

```css interactive-example-choice
scroll-padding-right: 0;
```

```css interactive-example-choice
scroll-padding-right: 20px;
```

```css interactive-example-choice
scroll-padding-right: 2em;
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
  color: #fff;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-snap-align: end;
}

.scroller > div:nth-child(even) {
  background-color: #fff;
  color: rebeccapurple;
}
```

## Syntax

```css
/* Keyword values */
scroll-padding-right: auto;

/* <length> values */
scroll-padding-right: 10px;
scroll-padding-right: 1em;
scroll-padding-right: 10%;

/* Global values */
scroll-padding-right: inherit;
scroll-padding-right: initial;
scroll-padding-right: revert;
scroll-padding-right: revert-layer;
scroll-padding-right: unset;
```

### Werte

- `<length-percentage>`
  - : Ein innenliegender Versatz von der oberen Kante des Scrollports, als gültige Länge oder Prozentsatz.
- `auto`
  - : Der Versatz wird vom User-Agent bestimmt. Dies wird im Allgemeinen 0px sein, aber ein User-Agent kann etwas anderes tun, wenn ein nicht-nullwertiger Wert angemessener ist.

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
