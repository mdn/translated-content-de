---
title: scroll-snap-type
slug: Web/CSS/scroll-snap-type
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}

Die **`scroll-snap-type`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie strikt Snap-Punkte im Scroll-Container durchgesetzt werden, falls ein solcher existiert.

{{EmbedInteractiveExample("pages/css/scroll-snap-type.html")}}

Die Angabe genauer Animationen oder physikalischer Eigenschaften, die zur Durchsetzung dieser Snap-Punkte verwendet werden, ist nicht durch diese Eigenschaft abgedeckt, sondern dem Benutzeragenten überlassen.

## Syntax

```css
/* No snapping */
scroll-snap-type: none;

/* Keyword values for snap axes */
scroll-snap-type: x;
scroll-snap-type: y;
scroll-snap-type: block;
scroll-snap-type: inline;
scroll-snap-type: both;

/* Optional keyword values for snap strictness */
/* mandatory | proximity */
scroll-snap-type: x mandatory;
scroll-snap-type: y proximity;
scroll-snap-type: both mandatory;

/* Global values */
scroll-snap-type: inherit;
scroll-snap-type: initial;
scroll-snap-type: revert;
scroll-snap-type: revert-layer;
scroll-snap-type: unset;
```

### Werte

- `none`
  - : Wenn der visuelle [Viewport](/de/docs/Glossary/viewport) dieses Scroll-Containers gescrollt wird, muss er Snap-Punkte ignorieren.
- `x`
  - : Der Scroll-Container schnappt nur zu Snap-Positionen auf seiner horizontalen Achse.
- `y`
  - : Der Scroll-Container schnappt nur zu Snap-Positionen auf seiner vertikalen Achse.
- `block`
  - : Der Scroll-Container schnappt nur zu Snap-Positionen auf seiner Block-Achse.
- `inline`
  - : Der Scroll-Container schnappt nur zu Snap-Positionen auf seiner Inline-Achse.
- `both`
  - : Der Scroll-Container schnappt unabhängig in beiden Achsen zu Snap-Positionen (möglicherweise schnappt er zu verschiedenen Elementen in jeder Achse).
- `mandatory`
  - : Der visuelle Viewport dieses Scroll-Containers muss zu einer Snap-Position schnappen, wenn er nicht aktuell gescrollt wird.
- `proximity`
  - : Der visuelle Viewport dieses Scroll-Containers kann zu einer Snap-Position schnappen, wenn er nicht aktuell gescrollt wird. Der Benutzeragent entscheidet, ob er schnappt oder nicht, basierend auf den Scroll-Parametern. Dies ist die standardmäßige Snap-Striktheit, wenn eine Snap-Achse angegeben ist.

> [!NOTE]
> Wenn sich der Inhalt im Snap-Port ändert (z.B. hinzugefügt, verschoben, gelöscht oder in der Größe verändert) oder der Wert einer scroll-snap-bezogenen Eigenschaft (z.B. `scroll-snap-type` oder `scroll-margin`) geändert wird, wird der Scroll-Container entsprechend dem neuesten Wert von `scroll-snap-type` [erneut geschnappt](https://drafts.csswg.org/css-scroll-snap/#re-snap).

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Snappen in verschiedene Achsen

#### HTML

```html
<div class="holster">
  <div class="container x mandatory-scroll-snapping" dir="ltr">
    <div>X Mand. LTR</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </div>
  <div class="container x proximity-scroll-snapping" dir="ltr">
    <div>X Prox. LTR</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </div>
  <div class="container y mandatory-scroll-snapping" dir="ltr">
    <div>Y Mand. LTR</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </div>
  <div class="container y proximity-scroll-snapping" dir="ltr">
    <div>Y Prox. LTR</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </div>
  <div class="container x mandatory-scroll-snapping" dir="rtl">
    <div>X Mand. RTL</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </div>
  <div class="container x proximity-scroll-snapping" dir="rtl">
    <div>X Prox. RTL</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </div>
  <div class="container y mandatory-scroll-snapping" dir="rtl">
    <div>Y Mand. RTL</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </div>
  <div class="container y proximity-scroll-snapping" dir="rtl">
    <div>Y Prox. RTL</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </div>
</div>
```

#### CSS

```css hidden
.holster {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: column nowrap;
  font-family: monospace;
}
.container {
  display: flex;
  margin: 1em auto;
  outline: 1px dashed lightgray;
  flex: none;
  overflow: auto;
}
.container.x {
  width: 100%;
  height: 128px;
  flex-flow: row nowrap;
  overflow-y: hidden;
}
.container.y {
  width: 256px;
  height: 256px;
  flex-flow: column nowrap;
  overflow-x: hidden;
}
```

```css
/* scroll-snap */
.x.mandatory-scroll-snapping {
  scroll-snap-type: x mandatory;
}
.x.proximity-scroll-snapping {
  scroll-snap-type: x proximity;
}
.y.mandatory-scroll-snapping {
  scroll-snap-type: y mandatory;
}
.y.proximity-scroll-snapping {
  scroll-snap-type: y proximity;
}

.container > div {
  text-align: center;
  scroll-snap-align: center;
  flex: none;
}
```

```css hidden
.x.container > div {
  line-height: 128px;
  font-size: 64px;
  width: 100%;
  height: 128px;
}
.y.container > div {
  line-height: 256px;
  font-size: 128px;
  width: 256px;
  height: 100%;
}

/* appearance fixes */
.y.container > div:first-child {
  line-height: 1.3;
  font-size: 64px;
}

/* coloration */
.container > div:nth-child(even) {
  background-color: #87ea87;
}
.container > div:nth-child(odd) {
  background-color: #87ccea;
}
```

#### Ergebnisse

{{EmbedLiveSample("snapping_in_different_axes", "100%", 1800)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS scroll snap](/de/docs/Web/CSS/CSS_scroll_snap)
- [Gut kontrolliertes Scrollen mit CSS scroll snap](https://web.dev/articles/css-scroll-snap)
