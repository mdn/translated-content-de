---
title: scroll-margin-bottom
slug: Web/CSS/scroll-margin-bottom
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die Eigenschaft `scroll-margin-bottom` definiert den unteren Rand des Scroll-Schnappbereichs, der verwendet wird, um dieses Element an den {{Glossary("Scroll_snap#snapport", "Snapport")}} zu schnappen. Der Scroll-Schnappbereich wird bestimmt, indem der transformierte Rand des Rahmens genommen, dessen rechteckige Begrenzungsbox (achsenparallel im Koordinatenraum des Scroll-Containers) ermittelt und dann die angegebenen Abstände hinzugefügt werden.

{{InteractiveExample("CSS Demo: scroll-margin-bottom")}}

```css interactive-example-choice
scroll-margin-bottom: 0;
```

```css interactive-example-choice
scroll-margin-bottom: 20px;
```

```css interactive-example-choice
scroll-margin-bottom: 2em;
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
/* <length> values */
scroll-margin-bottom: 10px;
scroll-margin-bottom: 1em;

/* Global values */
scroll-margin-bottom: inherit;
scroll-margin-bottom: initial;
scroll-margin-bottom: revert;
scroll-margin-bottom: revert-layer;
scroll-margin-bottom: unset;
```

### Werte

- {{CSSXref("&lt;length&gt;")}}
  - : Ein Abstand von der unteren Kante des Scroll-Containers.

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
