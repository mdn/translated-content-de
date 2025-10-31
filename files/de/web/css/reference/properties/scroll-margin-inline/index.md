---
title: scroll-margin-inline
slug: Web/CSS/Reference/Properties/scroll-margin-inline
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die `scroll-margin-inline`-[Kurzschreibweise](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) setzt die Scroll-Ränder eines Elements in der Inline-Dimension.

{{InteractiveExample("CSS Demo: scroll-margin-inline")}}

```css interactive-example-choice
scroll-margin-inline: 0;
```

```css interactive-example-choice
scroll-margin-inline: 40px 20px;
```

```css interactive-example-choice
scroll-margin-inline: 4em 0;
```

```css interactive-example-choice
scroll-margin-inline: 0px 3em;
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

## Bestandteilseigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- [`scroll-margin-inline-end`](/de/docs/Web/CSS/Reference/Properties/scroll-margin-inline-end)
- [`scroll-margin-inline-start`](/de/docs/Web/CSS/Reference/Properties/scroll-margin-inline-start)

## Syntax

```css
/* <length> values */
scroll-margin-inline: 10px;
scroll-margin-inline: 1em 0.5em;

/* Global values */
scroll-margin-inline: inherit;
scroll-margin-inline: initial;
scroll-margin-inline: revert;
scroll-margin-inline: revert-layer;
scroll-margin-inline: unset;
```

### Werte

- {{CSSXref("&lt;length&gt;")}}
  - : Ein Abstand von der entsprechenden Kante des Scroll-Containers.

## Beschreibung

Die Werte für `scroll-margin` stellen Abstände dar, die den Scroll-Snap-Bereich definieren, der verwendet wird, um diese Box an den {{Glossary("Scroll_snap#snapport", "Snapport")}} anzuheften. Der Scroll-Snap-Bereich wird bestimmt, indem die transformierte Border-Box verwendet wird, ihr rechteckiger Begrenzungsrahmen (achsenparallel im Koordinatenraum des Scroll-Containers) ermittelt wird und dann die angegebenen Abstände hinzugefügt werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Demonstration

Dieses Beispiel implementiert etwas sehr Ähnliches wie das interaktive Beispiel oben, außer dass wir hier erklären, wie es implementiert wird.

Das Ziel ist es, vier horizontal scrollbare Blöcke zu erstellen, von denen der zweite und dritte an einer Stelle nahe, aber nicht ganz am rechten Rand jedes Blocks einrasten.

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

Gehen wir das CSS durch. Der äußere Container ist wie folgt gestaltet:

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

Die wichtigsten Teile im Hinblick auf das Scroll-Snapping sind `overflow-x: scroll`, welches sicherstellt, dass die Inhalte scrollen und nicht verborgen werden, und `scroll-snap-type: x mandatory`, welches vorschreibt, dass das Scroll-Snapping entlang der horizontalen Achse stattfinden muss und das Scrollen immer an einem Snap-Punkt zum Stehen kommt.

Die Kind-Elemente sind wie folgt gestaltet:

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

Der relevanteste Teil hier ist `scroll-snap-align: end`, welches angibt, dass die rechten Kanten (die "Enden" entlang der x-Achse, in unserem Fall) die ausgewiesenen Snap-Punkte sind.

Zuletzt geben wir die Scroll-Rand-Werte an, unterschiedliche für das zweite und dritte Kind-Element:

```css
.scroller > div:nth-child(2) {
  scroll-margin-inline: 1rem;
}

.scroller > div:nth-child(3) {
  scroll-margin-inline: 2rem;
}
```

Das bedeutet, dass beim Scrollen an den mittleren Kind-Elementen das Scrollen auf `1rem` außerhalb des Inline-Endes des zweiten `<div>` und `2rem` außerhalb des Inline-Endes des dritten `<div>` einrastet.

> [!NOTE]
> Hier setzen wir `scroll-margin` sowohl am Anfang _als auch_ am Ende der Inline-Achse (x in unserem Fall), aber nur die Endkante ist wirklich relevant. Es würde hier genauso gut funktionieren, nur einen Scroll-Rand an dieser einen Kante festzulegen, zum Beispiel mit `scroll-margin-inline: 0 1rem`, oder `scroll-margin-inline-end: 1rem`.

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
