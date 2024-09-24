---
title: scroll-snap-stop
slug: Web/CSS/scroll-snap-stop
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{CSSRef}}

Die **`scroll-snap-stop`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert, ob der Scroll-Container befugt ist, mögliche Snap-Positionen zu "überspringen".

{{EmbedInteractiveExample("pages/css/scroll-snap-stop.html")}}

## Syntax

```css
/* Schlüsselwortwerte */
scroll-snap-stop: normal;
scroll-snap-stop: always;

/* Globale Werte */
scroll-snap-stop: inherit;
scroll-snap-stop: initial;
scroll-snap-stop: revert;
scroll-snap-stop: revert-layer;
scroll-snap-stop: unset;
```

### Werte

- `normal`
  - : Wenn das visuelle {{Glossary("viewport")}} des Scroll-Containers dieses Elements gescrollt wird, kann es mögliche Snap-Positionen "überspringen".
- `always`
  - : Der Scroll-Container darf keine mögliche Snap-Position "überspringen" und muss zur ersten Snap-Position dieses Elements schnappen.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellen verschiedener Snap-Stops

Das folgende Beispiel demonstriert den Unterschied zwischen den Werten `always` und `normal` von `scroll-snap-stop`. Der Unterschied der beiden `scroll-snap-stop` Werte ist deutlicher, wenn die `scroll-snap-type` Eigenschaft auf `mandatory` gesetzt ist, was in diesem Beispiel verwendet wird.

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

<p>scroll-snap-stop: always (X Mandatory) auf ungeraden Kindelementen</p>
<div class="x mandatory-scroll-snapping always-stop-odd">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>

<p>scroll-snap-stop: always (X Mandatory) auf geraden Kindelementen</p>
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
/* Setup */
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

/* Färbung */
div > div:nth-child(even) {
  background-color: #87ea87;
}

div > div:nth-child(odd) {
  background-color: #87ccea;
}
```

```css
/* Einrichtung von obligatorischem Scroll-Snap auf Eltern */
.x.mandatory-scroll-snapping {
  scroll-snap-type: x mandatory;
}

.y.mandatory-scroll-snapping {
  scroll-snap-type: y mandatory;
}

/* Definition der Scroll-Snap-Ausrichtung auf Kindern */
div > div {
  scroll-snap-align: center;
}

/* Definition des Scroll-Snap-Stopps auf Kindern */
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

Scrollen Sie von links nach rechts und von oben nach unten in den X- und Y-Boxen unten. In den X- und Y-Boxen, in denen die `scroll-snap-stop` Eigenschaft auf `always` gesetzt ist, wird das Scrollen gezwungen, am Snap-Punkt zu stoppen, selbst wenn Sie schnell scrollen. In den Boxen, in denen die `scroll-snap-stop` Eigenschaft auf `normal` gesetzt ist, werden die Snap-Punkte übersprungen, wenn Sie schnell scrollen.

Falls erforderlich, können Sie selektiv die Elemente bestimmen, die im Scroll-Container immer gestoppt werden sollen. Dies wird im Beispiel unten durch die Zielauswahl von ungeraden und geraden Elementen demonstriert; Sie können basierend auf Ihren Anforderungen eine andere Strategie wählen. Im untenstehenden Beispiel wird das Scrollen nicht an ungeraden und geraden Elementen in der zweiten bzw. dritten Box "übersprungen".

{{EmbedLiveSample("Snapping_in_different_axes", "100%", "1080")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS scroll snap](/de/docs/Web/CSS/CSS_scroll_snap)
- [Gut kontrolliertes Scrollen mit CSS scroll snap](https://web.dev/articles/css-scroll-snap)
