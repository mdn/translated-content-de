---
title: scroll-snap-type
slug: Web/CSS/scroll-snap-type
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

{{CSSRef}}

Die **`scroll-snap-type`** [CSS](/de/docs/Web/CSS) Eigenschaft wird auf einen {{Glossary("scroll_container", "Scroll-Container")}} gesetzt, um ihn für das Scroll-Snapping zu aktivieren, indem die Richtung und die Strenge der Druckpunkteinbindung innerhalb des {{Glossary("Scroll_snap#snapport", "Snap-Ports")}} festgelegt werden.

{{InteractiveExample("CSS Demo: scroll-snap-type")}}

```css interactive-example-choice
scroll-snap-type: none;
```

```css interactive-example-choice
scroll-snap-type: x mandatory;
```

```css interactive-example-choice
scroll-snap-type: x proximity;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div id="example-element">
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

#example-element {
  text-align: left;
  width: 250px;
  height: 250px;
  overflow-x: scroll;
  display: flex;
  box-sizing: border-box;
  border: 1px solid black;
}

#example-element > div {
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

#example-element > div:nth-child(even) {
  background-color: #fff;
  color: rebeccapurple;
}
```

Wenn sich der Inhalt im Scroll-Port ändert — zum Beispiel, wenn Inhalt hinzugefügt, verschoben, gelöscht oder in der Größe geändert wird —, wird der Scroll-Container erneut den vorher festgelegten Inhalt einrasten, sofern dieser Inhalt noch vorhanden ist.

Wenn der Wert einer scrollbezogenen Eigenschaft, wie `scroll-snap-type` oder {{cssxref("scroll-margin")}}, geändert wird, wird der Scroll-Container basierend auf dem aktuellen Wert von `scroll-snap-type` erneut einrasten.

Das Spezifizieren von präzisen Animationen oder Physikmodellen, die verwendet werden, um diese Snap-Punkte durchzusetzen, wird nicht von dieser Eigenschaft abgedeckt, sondern dem Benutzeragenten überlassen.

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
  - : Wenn das visuelle {{Glossary("viewport", "Viewport")}} dieses Scroll-Containers gescrollt wird, muss es Snap-Punkte ignorieren.
- `x`
  - : Der Scroll-Container schnellt nur zu Snap-Positionen auf seiner horizontalen Achse.
- `y`
  - : Der Scroll-Container schnellt nur zu Snap-Positionen auf seiner vertikalen Achse.
- `block`
  - : Der Scroll-Container schnellt nur zu Snap-Positionen auf seiner Block-Achse.
- `inline`
  - : Der Scroll-Container schnellt nur zu Snap-Positionen auf seiner Inline-Achse.
- `both`
  - : Der Scroll-Container schnellt unabhängig zu Snap-Positionen auf beiden seiner Achsen (möglicherweise zu unterschiedlichen Elementen auf jeder Achse).
- `mandatory`
  - : Das visuelle Viewport dieses Scroll-Containers muss zu einer Snap-Position einrasten, wenn es derzeit nicht gescrollt ist.
- `proximity`
  - : Das visuelle Viewport dieses Scroll-Containers darf zu einer Snap-Position einrasten, wenn es derzeit nicht gescrollt ist. Der Benutzeragent entscheidet, ob er einrastet oder nicht, basierend auf Scroll-Parametern. Dies ist die standardmäßige Einraststrenge, wenn eine Snap-Achse angegeben ist.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einrasten in verschiedenen Achsen

#### HTML

```html
<main>
  <section class="x mandatory-scroll-snapping" dir="ltr">
    <div>X Mand. LTR</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </section>
  <section class="x proximity-scroll-snapping" dir="ltr">
    <div>X Prox. LTR</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </section>
  <section class="y mandatory-scroll-snapping" dir="ltr">
    <div>Y Mand. LTR</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </section>
  <section class="y proximity-scroll-snapping" dir="ltr">
    <div>Y Prox. LTR</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </section>
  <section class="x mandatory-scroll-snapping" dir="rtl">
    <div>X Mand. RTL</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </section>
  <section class="x proximity-scroll-snapping" dir="rtl">
    <div>X Prox. RTL</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </section>
  <section class="y mandatory-scroll-snapping" dir="rtl">
    <div>Y Mand. RTL</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </section>
  <section class="y proximity-scroll-snapping" dir="rtl">
    <div>Y Prox. RTL</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </section>
</main>
```

#### CSS

```css hidden
main {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: column nowrap;
  font-family: monospace;
}
section {
  display: flex;
  margin: 1em auto;
  outline: 1px dashed lightgray;
  flex: none;
  overflow: auto;
}
.x {
  width: 100%;
  height: 128px;
  flex-flow: row nowrap;
  overflow-y: hidden;
}
.y {
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

div {
  text-align: center;
  scroll-snap-align: center;
  flex: none;
}
```

```css hidden
.x div {
  line-height: 128px;
  font-size: 64px;
  width: 100%;
  height: 128px;
}
.y div {
  line-height: 256px;
  font-size: 128px;
  width: 256px;
  height: 100%;
}

/* appearance fixes */
.y div:first-child {
  line-height: 1.3;
  font-size: 64px;
}

/* coloration */
div:nth-child(even) {
  background-color: #87ea87;
}
div:nth-child(odd) {
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

- Andere Scroll-Port-Eigenschaften: {{cssxref("scroll-margin")}}, {{cssxref("scroll-padding")}}
- Eigenschaften von Scroll-Kindern: {{cssxref("scroll-snap-align")}}, {{cssxref("scroll-margin")}}, {{cssxref("scroll-snap-stop")}}
- [Grundlegende Konzepte des CSS-Scroll-Snap](/de/docs/Web/CSS/CSS_scroll_snap/Basic_concepts)
- [Verwendung von Scroll-Snap-Ereignissen](/de/docs/Web/CSS/CSS_scroll_snap/Using_scroll_snap_events)
- [CSS scroll snap](/de/docs/Web/CSS/CSS_scroll_snap)
- [Gut kontrolliertes Scrollen mit CSS scroll snap](https://web.dev/articles/css-scroll-snap)
