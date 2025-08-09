---
title: scroll-margin-inline
slug: Web/CSS/scroll-margin-inline
l10n:
  sourceCommit: 4ec412012be0b083ebcae4a56b425f49901143f2
---

Die `scroll-margin-inline` [Kurzschreibweise](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) setzt die Scroll-Margen eines Elements in der Inline-Dimension.

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

## Bestandteilende Eigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- [`scroll-margin-inline-end`](/de/docs/Web/CSS/scroll-margin-inline-end)
- [`scroll-margin-inline-start`](/de/docs/Web/CSS/scroll-margin-inline-start)

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

Die Werte von Scroll-Margen stehen für Vorsprünge, die den Scroll-Snap-Bereich definieren, der verwendet wird, um dieses Feld an den {{Glossary("Scroll_snap#snapport", "Snapport")}} zu fangen. Der Scroll-Snap-Bereich wird durch die transformierte Begrenzungsbox bestimmt, indem die rechteckige Begrenzungsbox (achsenbündig im Koordinatenraum des Scroll-Containers) gefunden und anschließend die angegebenen Vorsprünge hinzugefügt werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Demonstration

Dieses Beispiel implementiert etwas sehr Ähnliches wie das obige interaktive Beispiel, außer dass wir Ihnen hier erklären, wie es implementiert wird.

Das Ziel ist es, vier horizontal scrollbare Blöcke zu erstellen, wobei der zweite und dritte Block an Ort und Stelle einrasten, nahe aber nicht ganz am rechten Rand jedes Blocks.

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

Lassen Sie uns das CSS durchgehen. Der äußere Container wird folgendermaßen gestylt:

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

Die Hauptteile, die für das Scroll-Snapping relevant sind, sind `overflow-x: scroll`, was sicherstellt, dass die Inhalte scrollen und nicht verborgen werden, und `scroll-snap-type: x mandatory`, das vorgibt, dass das Scroll-Snapping entlang der horizontalen Achse erfolgen muss und das Scrollen immer auf einem Snap-Punkt zur Ruhe kommen wird.

Die Kindelemente werden wie folgt gestylt:

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

Der relevanteste Teil hier ist `scroll-snap-align: end`, das angibt, dass die rechten Kanten (die "Enden" entlang der x-Achse in unserem Fall) die festgelegten Snap-Punkte sind.

Zuletzt spezifizieren wir die Werte der Scroll-Margen, unterschiedliche für das zweite und dritte Kindelement:

```css
.scroller > div:nth-child(2) {
  scroll-margin-inline: 1rem;
}

.scroller > div:nth-child(3) {
  scroll-margin-inline: 2rem;
}
```

Das bedeutet, dass beim Scrollen an den mittleren Kindelementen das Scrollen `1rem` außerhalb des Inline-Endrandes des zweiten `<div>` und `2rems` außerhalb des Inline-Endrandes des dritten `<div>` einrastet.

> [!NOTE]
> Hier setzen wir `scroll-margin` auf den Start _und_ das Ende der Inline-Achse (x in unserem Fall), aber nur der Endrand ist wirklich relevant. Es würde genauso gut funktionieren, hier nur eine Scroll-Marge auf diesen einen Rand zu setzen, zum Beispiel mit `scroll-margin-inline: 0 1rem`, oder `scroll-margin-inline-end: 1rem`.

#### Ergebnis

Probieren Sie es selbst:

{{EmbedLiveSample('Basic_demonstration', '100%', 300)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS scroll snap](/de/docs/Web/CSS/CSS_scroll_snap)
- [Gut gesteuertes Scrollen mit CSS scroll snap](https://web.dev/articles/css-scroll-snap)
