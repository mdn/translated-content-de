---
title: scroll-snap-type
slug: Web/CSS/scroll-snap-type
l10n:
  sourceCommit: fcbc9f9a687826bd41983e5ea558b6b830e23dec
---

{{CSSRef}}

Die **`scroll-snap-type`** [CSS](/de/docs/Web/CSS)-Eigenschaft wird auf einem {{Glossary("scroll_container", "Scroll-Container")}} festgelegt, wodurch dieser in das Scroll-Snapping eintritt, indem die Richtung und Genauigkeit der Snap-Punkt-Durchsetzung innerhalb des {{Glossary("Scroll_snap#snapport", "Snap-Ports")}} bestimmt wird.

{{EmbedInteractiveExample("pages/css/scroll-snap-type.html")}}

Wenn sich der Inhalt im Scroll-Port ändert – zum Beispiel, wenn Inhalte hinzugefügt, verschoben, gelöscht oder die Größe geändert werden – wird der Scroll-Container wieder auf den zuvor gesnappten Inhalt zurückspringen, sofern dieser Inhalt noch vorhanden ist.

Wird der Wert einer scrollsnap-bezogenen Eigenschaft, wie `scroll-snap-type` oder {{cssxref("scroll-margin")}}, geändert, wird der Scroll-Container sich basierend auf dem aktuellen Wert von `scroll-snap-type` neu ausrichten.

Die spezifizierten Animationen oder physikalischen Verhaltensweisen zur Umsetzung dieser Snap-Punkte sind nicht durch diese Eigenschaft abgedeckt, sondern dem Benutzeragenten überlassen.

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
  - : Wenn der visuelle {{Glossary("viewport", "Viewport")}} dieses Scroll-Containers gescrollt wird, müssen Snap-Punkte ignoriert werden.
- `x`
  - : Der Scroll-Container schnappt nur zu Snap-Positionen auf seiner horizontalen Achse.
- `y`
  - : Der Scroll-Container schnappt nur zu Snap-Positionen auf seiner vertikalen Achse.
- `block`
  - : Der Scroll-Container schnappt nur zu Snap-Positionen auf seiner Block-Achse.
- `inline`
  - : Der Scroll-Container schnappt nur zu Snap-Positionen auf seiner Inline-Achse.
- `both`
  - : Der Scroll-Container schnappt unabhängig auf beiden Achsen zu Snap-Positionen (möglicherweise Schnappen zu unterschiedlichen Elementen auf jeder Achse).
- `mandatory`
  - : Der visuelle Viewport dieses Scroll-Containers muss zu einer Snap-Position springen, wenn er nicht aktuell gescrollt wird.
- `proximity`
  - : Der visuelle Viewport dieses Scroll-Containers darf zu einer Snap-Position springen, wenn er nicht aktuell gescrollt wird. Der Benutzeragent entscheidet, ob gesprungen wird oder nicht, basierend auf den Scroll-Parametern. Dies ist die standardmäßige Snap-Strenge, wenn eine Snap-Achse angegeben ist.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Snapping auf verschiedenen Achsen

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

- Weitere Eigenschaften des Scroll-Ports: {{cssxref("scroll-margin")}}, {{cssxref("scroll-padding")}}
- Eigenschaften von Scroll-Childs: {{cssxref("scroll-snap-align")}}, {{cssxref("scroll-margin")}}, {{cssxref("scroll-snap-stop")}}
- [Grundkonzepte von CSS Scroll Snap](/de/docs/Web/CSS/CSS_scroll_snap/Basic_concepts)
- [Verwendung von Scroll-Snap-Ereignissen](/de/docs/Web/CSS/CSS_scroll_snap/Using_scroll_snap_events)
- [CSS Scroll Snap](/de/docs/Web/CSS/CSS_scroll_snap)
- [Gut kontrolliertes Scrollen mit CSS Scroll Snap](https://web.dev/articles/css-scroll-snap)
