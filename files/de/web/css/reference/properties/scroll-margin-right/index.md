---
title: scroll-margin-right
slug: Web/CSS/Reference/Properties/scroll-margin-right
l10n:
  sourceCommit: a14f56b06eabf3b182ae4bc0e02634a8ccc01f20
---

Die Eigenschaft `scroll-margin-right` definiert den rechten Rand des Scroll-Snap-Bereichs, der verwendet wird, um dieses Feld an das {{Glossary("Scroll_snap#snapport", "Snapport")}} anzupassen. Der Scroll-Snap-Bereich wird bestimmt, indem der transformierte Rahmenkasten genommen wird, sein rechteckiges Begrenzungsfeld (achsenangepaßt im Koordinatenraum des Scroll-Containers) gefunden wird und dann die angegebenen Auswüchse hinzugefügt werden.

{{InteractiveExample("CSS Demo: scroll-margin-right")}}

```css interactive-example-choice
scroll-margin-right: 0;
```

```css interactive-example-choice
scroll-margin-right: 20px;
```

```css interactive-example-choice
scroll-margin-right: 2em;
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
  scroll-snap-align: end;
}

.scroller > div:nth-child(even) {
  background-color: white;
  color: rebeccapurple;
}
```

## Syntax

```css
/* <length> values */
scroll-margin-right: 10px;
scroll-margin-right: 1em;

/* Global values */
scroll-margin-right: inherit;
scroll-margin-right: initial;
scroll-margin-right: revert;
scroll-margin-right: revert-layer;
scroll-margin-right: unset;
```

### Werte

- {{CSSXref("&lt;length&gt;")}}
  - : Ein Auswuchs vom rechten Rand des Scroll-Containers.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Scroll Snap](/de/docs/Web/CSS/Guides/Scroll_snap) Modul
- [Gut kontrolliertes Scrollen mit CSS Scroll Snap](https://web.dev/articles/css-scroll-snap) auf web.dev (2018)
