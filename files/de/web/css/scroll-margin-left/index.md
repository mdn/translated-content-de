---
title: scroll-margin-left
slug: Web/CSS/scroll-margin-left
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

{{CSSRef}}

Die Eigenschaft `scroll-margin-left` definiert den linken Rand des Scroll-Schnappbereichs, der verwendet wird, um dieses Element an den {{Glossary("Scroll_snap#snapport", "Snapport")}} zu schnappen. Der Scroll-Schnappbereich wird bestimmt, indem die transformierte Rahmenbox genommen wird, deren rechteckige Begrenzungsbox (achsenweise im Koordinatenraum des Scroll-Containers ausgerichtet) gefunden wird, und dann die angegebenen Erweiterungen hinzugefügt werden.

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
  color: #fff;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-snap-align: start;
}

.scroller > div:nth-child(even) {
  background-color: #fff;
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
  - : Eine Erweiterung vom linken Rand des Scroll-Containers.

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
