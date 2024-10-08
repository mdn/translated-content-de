---
title: scroll-snap-stop
slug: Web/CSS/scroll-snap-stop
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{CSSRef}}

Die **`scroll-snap-stop`**-[CSS](/de/docs/Web/CSS)-Eigenschaft definiert, ob der Scroll-Container "mögliche Snap-Positionen" überspringen darf oder nicht.

{{EmbedInteractiveExample("pages/css/scroll-snap-stop.html")}}

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
  - : Der Scroll-Container darf keine mögliche Snap-Position "überspringen" und muss zur ersten Snap-Position dieses Elements springen.

## Formale Definition

{{CSSInfo}}

## Formaler Syntax

{{csssyntax}}

## Beispiele

### Unterschiedliche Snap-Stopps festlegen

Das folgende Beispiel zeigt den Kontrast zwischen den Werten `always` und `normal` von `scroll-snap-stop`. Der Unterschied zwischen den beiden `scroll-snap-stop`-Werten ist deutlicher, wenn die Eigenschaft `scroll-snap-type` auf `mandatory` gesetzt ist, was in diesem Beispiel verwendet wird.

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
  outline: 1px solid #333;
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

Scrollen Sie von links nach rechts und von oben nach unten in den X- und Y-Kästchen unten. In den X- und Y-Kästchen, in denen die Eigenschaft `scroll-snap-stop` auf `always` gesetzt ist, wird das Scrollen gezwungen, an der Snap-Position anzuhalten, auch wenn Sie schnell scrollen. In den Kästchen, in denen die Eigenschaft `scroll-snap-stop` auf `normal` gesetzt ist, werden die Snap-Punkte hingegen übersprungen, wenn Sie schnell scrollen.

Bei Bedarf können Sie gezielt festlegen, bei welchen Elementen im Scroll-Container `immer` angehalten werden soll. Dies wird im folgenden Beispiel gezeigt, indem ungerade und gerade Elemente angesprochen werden; Sie können je nach Bedarf eine andere Strategie wählen. Im folgenden Beispiel "überspringt" das Scrollen keine ungeraden und geraden Elemente in den zweiten und dritten Kästchen.

{{EmbedLiveSample("Snapping_in_different_axes", "100%", "1080")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS scroll snap](/de/docs/Web/CSS/CSS_scroll_snap)
- [Gut kontrolliertes Scrollen mit CSS scroll snap](https://web.dev/articles/css-scroll-snap)
