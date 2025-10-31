---
title: scroll-snap-stop
slug: Web/CSS/Reference/Properties/scroll-snap-stop
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`scroll-snap-stop`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert, ob es dem Scroll-Container erlaubt ist, mögliche Snap-Positionen zu "überspringen".

{{InteractiveExample("CSS Demo: scroll-snap-stop")}}

```css interactive-example-choice
scroll-snap-stop: normal;
```

```css interactive-example-choice
scroll-snap-stop: always;
```

```html interactive-example
<section class="default-example" id="default-example">
  <p class="explanation">
    The effect of this property can be noticed on devices with a touchpad. Try
    to scroll through all items with a single swing. Value
    <b class="keyword">'normal'</b> should pass through all pages, while
    <b class="keyword">'always'</b> will stop at the second page.
  </p>
  <div class="snap-container">
    <div>1</div>
    <div id="example-element">2</div>
    <div>3</div>
  </div>
  <div class="info">Scroll »</div>
</section>
```

```css interactive-example
.default-example {
  flex-direction: column;
}

.explanation {
  margin-top: 0;
}

.keyword {
  color: darkorange;
}

.default-example .info {
  width: 100%;
  padding: 0.5em 0;
  font-size: 90%;
}

.snap-container {
  text-align: left;
  width: 250px;
  height: 250px;
  overflow-x: scroll;
  display: flex;
  box-sizing: border-box;
  border: 1px solid black;
  scroll-snap-type: x mandatory;
}

.snap-container > div {
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

.snap-container > div:nth-child(even) {
  background-color: white;
  color: rebeccapurple;
}
```

## Syntax

```css
/* Keyword values */
scroll-snap-stop: normal;
scroll-snap-stop: always;

/* Global values */
scroll-snap-stop: inherit;
scroll-snap-stop: initial;
scroll-snap-stop: revert;
scroll-snap-stop: revert-layer;
scroll-snap-stop: unset;
```

### Werte

- `normal`
  - : Wenn der visuelle {{Glossary("viewport", "Viewport")}} des Scroll-Containers dieses Elements gescrollt wird, kann er mögliche Snap-Positionen "überspringen".
- `always`
  - : Der Scroll-Container darf keine mögliche Snap-Position "überspringen" und muss zur ersten Snap-Position dieses Elements einrasten.

## Offizielle Definition

{{CSSInfo}}

## Offizieller Syntax

{{csssyntax}}

## Beispiele

### Verschiedene Snap-Stops festlegen

Das folgende Beispiel zeigt den Kontrast zwischen den Werten `always` und `normal` von `scroll-snap-stop`. Der Unterschied zwischen den beiden `scroll-snap-stop`-Werten ist bemerkenswerter, wenn die Eigenschaft `scroll-snap-type` auf `mandatory` gesetzt ist, was in diesem Beispiel verwendet wird.

#### HTML

```html
<p>scroll-snap-stop: always (X Mandatory)</p>
<div class="x mandatory-scroll-snapping always-stop">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>

<p>scroll-snap-stop: always (X Mandatory) on odd child elements</p>
<div class="x mandatory-scroll-snapping always-stop-odd">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>

<p>scroll-snap-stop: always (X Mandatory) on even child elements</p>
<div class="x mandatory-scroll-snapping always-stop-even">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>

<p>scroll-snap-stop: normal (X Mandatory)</p>
<div class="x mandatory-scroll-snapping normal-stop">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>

<p>scroll-snap-stop: always (Y Mandatory)</p>
<div class="y mandatory-scroll-snapping always-stop">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>

<p>scroll-snap-stop: normal (Y Mandatory)</p>
<div class="y mandatory-scroll-snapping normal-stop">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>
```

#### CSS

```css hidden
/* setup */
body {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: column nowrap;
  font-family: monospace;
  text-align: center;
}

div[class] {
  font-size: 3rem;
  display: flex;
  overflow: auto;
  flex: none;
}

.x {
  width: 50%;
  min-width: 15rem;
  height: 6rem;
  flex-flow: row nowrap;
}

.y {
  width: 30%;
  min-width: 12rem;
  height: 12rem;
  flex-flow: column nowrap;
}

div > div {
  flex: none;
  outline: 1px solid #333333;
}

.x > div {
  width: 90%;
  height: 100%;
}

.y > div {
  width: 100%;
  height: 80%;
}

/* coloration */
div > div:nth-child(even) {
  background-color: #87ea87;
}

div > div:nth-child(odd) {
  background-color: #87ccea;
}
```

```css
/* setting up mandatory scroll-snap on parent */
.x.mandatory-scroll-snapping {
  scroll-snap-type: x mandatory;
}

.y.mandatory-scroll-snapping {
  scroll-snap-type: y mandatory;
}

/* defining scroll-snap alignment on children */
div > div {
  scroll-snap-align: center;
}

/* defining scroll-snap stop on children */
.always-stop > div {
  scroll-snap-stop: always;
}

.always-stop-odd > div:nth-of-type(odd) {
  scroll-snap-stop: always;
}

.always-stop-even > div:nth-of-type(even) {
  scroll-snap-stop: always;
}

.normal-stop > div {
  scroll-snap-stop: normal;
}
```

#### Ergebnis

Scrollen Sie von links nach rechts und von oben nach unten in den X- und Y-Boxen unten. In den X- und Y-Boxen, in denen die Eigenschaft `scroll-snap-stop` auf `always` gesetzt ist, wird das Scrollen gezwungen, an der Snap-Position zu stoppen, selbst wenn Sie schnell scrollen. In den Boxen, in denen `scroll-snap-stop` auf `normal` gesetzt ist, werden die Snap-Positionen übersprungen, wenn Sie schnell scrollen.

Falls erforderlich, können Sie selektiv festlegen, bei welchen Elementen im Scroll-Container `always` gestoppt wird. Dies wird im folgenden Beispiel gezeigt, indem ungerade und gerade Elemente angesprochen werden; Sie können je nach Bedarf eine andere Strategie wählen. Im untenstehenden Beispiel wird beim Scrollen nicht über ungerade und gerade Elemente in der zweiten und dritten Box "hinweggescrollt".

{{EmbedLiveSample("Snapping_in_different_axes", "100%", "1080")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS scroll snap](/de/docs/Web/CSS/CSS_scroll_snap)
- [Gut kontrolliertes Scrollen mit CSS scroll snap](https://web.dev/articles/css-scroll-snap)
