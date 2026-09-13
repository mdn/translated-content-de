---
title: "`scroll-margin-inline` CSS-Eigenschaft"
short-title: scroll-margin-inline
slug: Web/CSS/Reference/Properties/scroll-margin-inline
l10n:
  sourceCommit: 5381238460a48ff323a93e652d15cb62598f0262
---

Die **`scroll-margin-inline`** [CSS](/de/docs/Web/CSS) [Shorthand](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties)-Eigenschaft legt die Scroll-Margen eines Elements in der Inline-Dimension fest.

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

## Bestandeigenschaften

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
  - : Ein Vorsprung vom entsprechenden Rand des Scroll-Containers.

## Beschreibung

Die `scroll-margin`-Werte repräsentieren Vorsprünge, die den Scroll-Snap-Bereich definieren, der verwendet wird, um diese Box an den {{Glossary("Scroll_snap#snapport", "Snapport")}} zu schnappen. Der Scroll-Snap-Bereich wird bestimmt, indem die transformierte Rand-Box genommen, ihre rechteckige Begrenzungsbox (achsenparallel im Koordinatenraum des Scroll-Containers) ermittelt und dann die angegebenen Vorsprünge hinzugefügt werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Demonstration

Dieses Beispiel implementiert etwas sehr Ähnliches wie das interaktive Beispiel oben, außer dass wir Ihnen hier erklären, wie es implementiert wird.

Ziel ist es, vier horizontal scrollende Blöcke zu erstellen, wobei der zweite und dritte Block einrastet, nahe, aber nicht ganz am rechten Rand jedes Blocks.

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

Lassen Sie uns das CSS durchgehen. Der äußere Container ist wie folgt gestylt:

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

Die Hauptteile, die für das Scroll-Snapping relevant sind, sind `overflow-x: scroll`, was sicherstellt, dass die Inhalte scrollen und nicht ausgeblendet werden, und `scroll-snap-type: x mandatory`, was vorschreibt, dass Scroll-Snapping entlang der horizontalen Achse auftreten muss und das Scrollen immer an einem Snap-Punkt zur Ruhe kommt.

Die Kindelemente sind wie folgt gestylt:

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

Der relevanteste Teil hier ist `scroll-snap-align: end`, was spezifiziert, dass die rechten Kanten (die "Ends" entlang der x-Achse, in unserem Fall) die festgelegten Snap-Punkte sind.

Schließlich spezifizieren wir die Scroll-Margen-Werte, einen anderen für das zweite und dritte Kindelement:

```css
.scroller > div:nth-child(2) {
  scroll-margin-inline: 1rem;
}

.scroller > div:nth-child(3) {
  scroll-margin-inline: 2rem;
}
```

Dies bedeutet, dass beim Scrollen über die mittleren Kindelemente das Scrollen auf `1rem` außerhalb der Inline-Endkante des zweiten `<div>` und `2rems` außerhalb der Inline-Endkante des dritten `<div>` einrastet.

> [!NOTE]
> Hier setzen wir `scroll-margin` sowohl am Anfang _als auch_ am Ende der Inline-Achse (x in unserem Fall), aber nur die Endkante ist wirklich relevant. Es würde hier genauso gut funktionieren, nur eine Scroll-Marge auf dieser einen Kante zu setzen, zum Beispiel mit `scroll-margin-inline: 0 1rem`, oder `scroll-margin-inline-end: 1rem`.

#### Ergebnis

Versuchen Sie es selbst:

{{EmbedLiveSample('Basic_demonstration', '100%', 300)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS scroll snap](/de/docs/Web/CSS/Guides/Scroll_snap)-Modul
- [Gut kontrolliertes Scrollen mit CSS scroll snap](https://web.dev/articles/css-scroll-snap) auf web.dev (2018)
