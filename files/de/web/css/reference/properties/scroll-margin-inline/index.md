---
title: "`scroll-margin-inline` CSS-Eigenschaft"
short-title: scroll-margin-inline
slug: Web/CSS/Reference/Properties/scroll-margin-inline
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die CSS-Kurzeigenschaft [`scroll-margin-inline`](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) legt die Scroll-Ränder eines Elements in der Inline-Dimension fest.

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

## Zusammengesetzte Eigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- {{cssxref("scroll-margin-inline-end")}}
- {{cssxref("scroll-margin-inline-start")}}

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

Die Werte von `scroll-margin` repräsentieren Abstände, die den Scroll-Snap-Bereich definieren, der verwendet wird, um diese Box an den {{Glossary("Scroll_snap#snapport", "Snapport")}} zu befestigen. Der Scroll-Snap-Bereich wird bestimmt, indem die transformierte Border-Box genommen wird, deren rechteckige Umrandung (achsealigned im Koordinatenraum des Scroll-Containers) gefunden und dann die angegebenen Abstände hinzugefügt werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Demonstration

Dieses Beispiel implementiert etwas sehr Ähnliches wie das interaktive Beispiel oben, mit dem Unterschied, dass wir hier erklären, wie es implementiert wird.

Das Ziel hier ist es, vier horizontal scrollende Blöcke zu erstellen, von denen der zweite und dritte in Position rasten, nahe, aber nicht ganz am rechten Rand jedes Blocks.

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

Gehen wir den CSS-Code durch. Der äußere Container ist folgendermaßen gestaltet:

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

Die Hauptbestandteile, die für das Scroll-Snapping relevant sind, sind `overflow-x: scroll`, das sicherstellt, dass der Inhalt scrollt und nicht versteckt wird, und `scroll-snap-type: x mandatory`, das vorschreibt, dass das Scroll-Snapping entlang der horizontalen Achse erfolgen muss und das Scrollen immer an einem Snap-Punkt endet.

Die Kindelemente sind wie folgt gestaltet:

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

Der relevanteste Teil hier ist `scroll-snap-align: end`, das angibt, dass die rechten Kanten (die "Enden" entlang der x-Achse, in unserem Fall) die vorgesehenen Snap-Punkte sind.

Zuletzt spezifizieren wir die Scroll-Margin-Werte, unterschiedliche für das zweite und dritte Kindelement:

```css
.scroller > div:nth-child(2) {
  scroll-margin-inline: 1rem;
}

.scroller > div:nth-child(3) {
  scroll-margin-inline: 2rem;
}
```

Dies bedeutet, dass beim Scrollen an den mittleren Kindelementen das Scrollen an `1rem` außerhalb der Inline-Endkante des zweiten `<div>` und `2rems` außerhalb der Inline-Endkante des dritten `<div>` einrastet.

> [!NOTE]
> Hier setzen wir `scroll-margin` am Anfang _und_ Ende der Inline-Achse (x in unserem Fall), aber nur die Endkante ist wirklich relevant. Es würde genauso gut funktionieren, hier nur einen Scroll-Margin an diese eine Kante zu setzen, zum Beispiel mit `scroll-margin-inline: 0 1rem`, oder `scroll-margin-inline-end: 1rem`.

#### Ergebnis

Probieren Sie es selbst aus:

{{EmbedLiveSample('Basic_demonstration', '100%', 300)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Scroll Snap](/de/docs/Web/CSS/Guides/Scroll_snap) Modul
- [Gut kontrolliertes Scrollen mit CSS Scroll Snap](https://web.dev/articles/css-scroll-snap) auf web.dev (2018)
