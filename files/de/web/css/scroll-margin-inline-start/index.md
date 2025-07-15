---
title: scroll-margin-inline-start
slug: Web/CSS/scroll-margin-inline-start
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die Eigenschaft `scroll-margin-inline-start` definiert den Rand des Scroll-Snap-Bereichs am Anfang der Inline-Dimension, der verwendet wird, um dieses Element an den {{Glossary("Scroll_snap#snapport", "Snapport")}} zu snappen. Der Scroll-Snap-Bereich wird bestimmt, indem der transformierte Rahmenrahmen genommen wird, seine rechteckige Begrenzungsbox (achsenaligniert im Koordinatenraum des Scroll-Containers) gefunden wird und dann die angegebenen Ausdehnungen hinzugefügt werden.

{{InteractiveExample("CSS Demo: scroll-margin-inline-start")}}

```css interactive-example-choice
scroll-margin-inline-start: 0;
```

```css interactive-example-choice
scroll-margin-inline-start: 20px;
```

```css interactive-example-choice
scroll-margin-inline-start: 2em;
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
scroll-margin-inline-start: 10px;
scroll-margin-inline-start: 1em;

/* Global values */
scroll-margin-inline-start: inherit;
scroll-margin-inline-start: initial;
scroll-margin-inline-start: revert;
scroll-margin-inline-start: revert-layer;
scroll-margin-inline-start: unset;
```

### Werte

- {{CSSXref("&lt;length&gt;")}}
  - : Ein Ausmaß vom Inline-Start-Rand des Scroll-Containers.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Demonstration

Dieses Beispiel implementiert etwas sehr Ähnliches wie das interaktive Beispiel oben, jedoch erklären wir Ihnen hier, wie es implementiert wird.

Das Ziel ist es, vier horizontal scrollbare Blöcke zu erstellen, von denen der zweite und dritte einrasten, nahe, aber nicht ganz links von jedem Block.

#### HTML

Das HTML enthält einen Scroller mit vier Elementen:

```html
<div class="scroller">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
</div>
```

#### CSS

Schauen wir uns das CSS genauer an. Der äußere Container wird wie folgt gestylt:

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

Die Hauptbestandteile, die für das Scroll-Snapping relevant sind, sind `overflow-x: scroll`, was sicherstellt, dass der Inhalt scrollt und nicht verborgen wird, und `scroll-snap-type: x mandatory`, das vorschreibt, dass Scroll-Snapping entlang der horizontalen Achse erfolgen muss, und das Scrollen immer an einem Snap-Punkt stillstehen wird.

Die Kindelemente werden wie folgt gestylt:

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
  scroll-snap-align: start;
}

.scroller > div:nth-child(2n) {
  background-color: #fff;
  color: #663399;
}
```

Der relevanteste Teil hier ist `scroll-snap-align: start`, welches spezifiziert, dass die linken Kanten (die "Starts" entlang der x-Achse, in unserem Fall) die festgelegten Snap-Punkte sind.

Zuletzt geben wir die Scroll-Rand-Werte an, einen anderen für das zweite und dritte Kindelement:

```css
.scroller > div:nth-child(2) {
  scroll-margin-inline-start: 1rem;
}

.scroller > div:nth-child(3) {
  scroll-margin-inline-start: 2rem;
}
```

Dies bedeutet, dass beim Scrollen an den mittleren Kindelementen vorbei das Scrollen auf `1rem` außerhalb des Inline-Start-Randes des zweiten `<div>` und `2rem` außerhalb des Inline-Start-Randes des dritten `<div>` einrastet.

#### Ergebnis

Probieren Sie es selbst aus:

{{EmbedLiveSample('Basic_demonstration', '100%', 300)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS scroll snap](/de/docs/Web/CSS/CSS_scroll_snap)
- [Gut kontrolliertes Scrollen mit CSS scroll snap](https://web.dev/articles/css-scroll-snap)
