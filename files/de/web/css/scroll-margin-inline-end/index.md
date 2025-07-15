---
title: scroll-margin-inline-end
slug: Web/CSS/scroll-margin-inline-end
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die `scroll-margin-inline-end`-Eigenschaft definiert den Abstand des Scroll-Snap-Bereichs am Ende der Inline-Dimension, die verwendet wird, um dieses Feld an den {{Glossary("Scroll_snap#snapport", "Snapport")}} zu snappen. Der Scroll-Snap-Bereich wird bestimmt, indem das transformierte Border-Box gefunden, seine rechteckige Begrenzungsbox (achsenparallel im Koordinatenraum des Scroll-Containers) ermittelt und dann die angegebenen Ausdehnungen hinzugefügt werden.

{{InteractiveExample("CSS Demo: scroll-margin-inline-end")}}

```css interactive-example-choice
scroll-margin-inline-end: 0;
```

```css interactive-example-choice
scroll-margin-inline-end: 20px;
```

```css interactive-example-choice
scroll-margin-inline-end: 2em;
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
scroll-margin-inline-end: 10px;
scroll-margin-inline-end: 1em;

/* Global values */
scroll-margin-inline-end: inherit;
scroll-margin-inline-end: initial;
scroll-margin-inline-end: revert;
scroll-margin-inline-end: revert-layer;
scroll-margin-inline-end: unset;
```

### Werte

- {{CSSXref("&lt;length&gt;")}}
  - : Ein Abstand vom Inline-Endrand des Scroll-Containers.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Demonstration

Dieses Beispiel implementiert etwas, das dem interaktiven Beispiel oben sehr ähnlich ist, mit dem Unterschied, dass wir Ihnen hier erklären, wie es implementiert ist.

Das Ziel hier ist es, vier horizontal scrollende Blöcke zu erstellen, wobei der zweite und dritte Block in Position einrasten, nahe, aber nicht ganz rechts von jedem Block.

#### HTML

Das HTML enthält einen Scroller mit vier Kindern:

```html
<div class="scroller">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
</div>
```

#### CSS

Gehen wir den CSS-Code durch. Der äußere Container ist wie folgt gestaltet:

```css
.scroller {
  text-align: left;
  width: 250px;
  height: 250px;
  overflow-x: scroll;
  display: flex;
  box-sizing: border-box;
  border: 1px solid #000;
  scroll-snap-type: x mandatory;
}
```

Die wichtigsten Teile, die für das Scroll-Snapping relevant sind, sind `overflow-x: scroll`, welches sicherstellt, dass die Inhalte scrollen und nicht verborgen werden, und `scroll-snap-type: x mandatory`, welches vorschreibt, dass das Scroll-Snapping entlang der horizontalen Achse auftreten muss und das Scrollen immer auf einem Snap-Punkt zum Stillstand kommt.

Die Kindelemente sind wie folgt gestaltet:

```css
.scroller > div {
  flex: 0 0 250px;
  width: 250px;
  background-color: #663399;
  color: #fff;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-snap-align: end;
}

.scroller > div:nth-child(2n) {
  background-color: #fff;
  color: #663399;
}
```

Der relevanteste Teil hier ist `scroll-snap-align: end`, welches angibt, dass die rechten Kanten (die "Enden" entlang der x-Achse, in unserem Fall) die bestimmten Snap-Punkte sind.

Als letztes spezifizieren wir die Scroll-Marign-Werte, ein unterschiedlicher Wert für das zweite und dritte Kind-Element:

```css
.scroller > div:nth-child(2) {
  scroll-margin-inline-end: 1rem;
}

.scroller > div:nth-child(3) {
  scroll-margin-inline-end: 2rem;
}
```

Das bedeutet, dass beim Scrollen an den mittleren Kindelementen vorbei, das Scrollen `1rem` außerhalb des Inline-Endrandes des zweiten `<div>` und `2rems` außerhalb des Inline-Endrandes des dritten `<div>` einrasten wird.

#### Ergebnis

Probieren Sie es selbst aus:

{{EmbedLiveSample('Basic_demonstration', '100%', 300)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS scroll snap](/de/docs/Web/CSS/CSS_scroll_snap)
- [Well-controlled scrolling with CSS scroll snap](https://web.dev/articles/css-scroll-snap)
