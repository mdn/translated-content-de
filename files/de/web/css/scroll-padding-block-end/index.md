---
title: scroll-padding-block-end
slug: Web/CSS/scroll-padding-block-end
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die Eigenschaft `scroll-padding-block-end` definiert Versätze für die Kante am Blockende der _optimalen Anzeigeregion_ des Scrollports: die Region, die als Zielregion verwendet wird, um Elemente im Sichtbereich des Nutzers zu platzieren. Dies ermöglicht es dem Autor, Bereiche des Scrollports auszuschließen, die durch andere Inhalte (z. B. fixierte Werkzeugleisten oder Seitenleisten) verdeckt sind, oder mehr Abstand zwischen einem Ziel-Element und den Rändern des Scrollports zu schaffen.

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
  - : Ein nach innen gerichteter Versatz von der Block-Endkante des Scrollports, als gültige Länge oder Prozentzahl.
- `auto`
  - : Der Versatz wird vom Benutzeragenten bestimmt. Dies wird in der Regel 0px sein, jedoch kann ein Benutzeragent Erkennung durchführen und etwas anderes festlegen, wenn ein nicht-null Wert angemessener ist.

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
