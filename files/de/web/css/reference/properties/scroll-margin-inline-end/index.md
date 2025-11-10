---
title: scroll-margin-inline-end
slug: Web/CSS/Reference/Properties/scroll-margin-inline-end
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die Eigenschaft `scroll-margin-inline-end` definiert den Rand des Scroll-Snap-Bereichs am Ende der Inline-Dimension, der verwendet wird, um dieses Element an den {{Glossary("Scroll_snap#snapport", "Snapport")}} zu schnappen. Der Scroll-Snap-Bereich wird bestimmt, indem die transformierte Border-Box genommen, ihre rechteckige Begrenzungsbox (achsenparallel im Koordinatenraum des Scroll-Containers) gefunden und dann die angegebenen Erweiterungen hinzugefügt werden.

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
  - : Eine Erweiterung vom Inline-Endrand des Scroll-Containers.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Demonstration

Dieses Beispiel implementiert etwas sehr Ähnliches wie das interaktive Beispiel oben, außer dass wir Ihnen hier erklären, wie es implementiert wird.

Das Ziel hier ist es, vier horizontal scrollbare Blöcke zu erstellen, wobei der zweite und dritte einrasten, in der Nähe aber nicht ganz am rechten Rand jedes Blocks.

#### HTML

Das HTML beinhaltet einen Scroller mit vier Kindern:

```html
<div class="scroller">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
</div>
```

#### CSS

Lassen Sie uns durch das CSS gehen. Der äußere Container wird folgendermaßen gestaltet:

```css
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
```

Die Hauptteile, die für das Scroll-Snapping relevant sind, sind `overflow-x: scroll`, welches sicherstellt, dass die Inhalte scrollen und nicht ausgeblendet werden, und `scroll-snap-type: x mandatory`, welches vorschreibt, dass Scroll-Snapping entlang der horizontalen Achse erfolgen muss und das Scrollen immer an einem Snap-Punkt endet.

Die Kindelemente werden wie folgt gestaltet:

```css
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

.scroller > div:nth-child(2n) {
  background-color: white;
  color: rebeccapurple;
}
```

Der relevanteste Teil hier ist `scroll-snap-align: end`, welcher angibt, dass die rechten Ränder (die "Enden" entlang der x-Achse, in unserem Fall) die definierten Snap-Punkte sind.

Zuletzt spezifizieren wir die Scroll-Randwerte, einen anderen für das zweite und dritte Kindelement:

```css
.scroller > div:nth-child(2) {
  scroll-margin-inline-end: 1rem;
}

.scroller > div:nth-child(3) {
  scroll-margin-inline-end: 2rem;
}
```

Das bedeutet, dass beim Scrollen entlang der mittleren Kindelemente das Scrollen `1rem` außerhalb des Inline-Endrandes des zweiten `<div>` und `2rems` außerhalb des Inline-Endrandes des dritten `<div>` einrastet.

#### Ergebnis

Probieren Sie es selbst aus:

{{EmbedLiveSample('Basic_demonstration', '100%', 300)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS scroll snap](/de/docs/Web/CSS/Guides/Scroll_snap)
- [Gut kontrolliertes Scrollen mit CSS scroll snap](https://web.dev/articles/css-scroll-snap)
