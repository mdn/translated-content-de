---
title: "`scroll-margin-left` CSS property"
short-title: scroll-margin-left
slug: Web/CSS/Reference/Properties/scroll-margin-left
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die Eigenschaft `scroll-margin-left` definiert den linken Rand des Scroll-Snap-Bereichs, der verwendet wird, um dieses Element an das {{Glossary("Scroll_snap#snapport", "Snapport")}} zu schnappen. Der Scroll-Snap-Bereich wird durch die Transformation des Rahmenmodells bestimmt, indem dessen rechteckige Begrenzungsbox (achsenparallel im Koordinatenraum des Scrollcontainers) ermittelt und anschließend die angegebenen Randwerte hinzugefügt werden.

{{InteractiveExample("CSS Demo: scroll-margin-left")}}

```css interactive-example-choice
scroll-margin-left: 0;
```

```css interactive-example-choice
scroll-margin-left: 20px;
```

```css interactive-example-choice
scroll-margin-left: 2em;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="scroller">
    <div>1</div>
    <div id="example-element">2</div>
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

## Syntax

```css
/* <length> values */
scroll-margin-left: 10px;
scroll-margin-left: 1em;

/* Global values */
scroll-margin-left: inherit;
scroll-margin-left: initial;
scroll-margin-left: revert;
scroll-margin-left: revert-layer;
scroll-margin-left: unset;
```

### Werte

- {{CSSXref("&lt;length&gt;")}}
  - : Ein Versatz vom linken Rand des Scrollcontainers.

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
- [Gut kontrolliertes Scrollen mit CSS-Scroll-Snap](https://web.dev/articles/css-scroll-snap) auf web.dev (2018)
