---
title: scroll-margin
slug: Web/CSS/scroll-margin
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`scroll-margin`**-[Kurzschreibweise](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) setzt alle Scrollränder eines Elements auf einmal und weist Werte ähnlich der [`margin`](/de/docs/Web/CSS/margin)-Eigenschaft zu, die für Ränder eines Elements verwendet wird.

{{InteractiveExample("CSS Demo: scroll-margin")}}

```css interactive-example-choice
scroll-margin: 0;
```

```css interactive-example-choice
scroll-margin: 20px;
```

```css interactive-example-choice
scroll-margin: 2em;
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
.default-example .info {
  inline-size: 100%;
  padding: 0.5em 0;
  font-size: 90%;
  writing-mode: vertical-rl;
}

.scroller {
  text-align: left;
  height: 250px;
  width: 270px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border: 1px solid black;
  scroll-snap-type: y mandatory;
}

.scroller > div {
  flex: 0 0 250px;
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

## Bestandteileigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- [`scroll-margin-bottom`](/de/docs/Web/CSS/scroll-margin-bottom)
- [`scroll-margin-left`](/de/docs/Web/CSS/scroll-margin-left)
- [`scroll-margin-right`](/de/docs/Web/CSS/scroll-margin-right)
- [`scroll-margin-top`](/de/docs/Web/CSS/scroll-margin-top)

## Syntax

```css
/* <length> values */
scroll-margin: 10px;
scroll-margin: 1em 0.5em 1em 1em;

/* Global values */
scroll-margin: inherit;
scroll-margin: initial;
scroll-margin: revert;
scroll-margin: revert-layer;
scroll-margin: unset;
```

### Werte

- {{cssxref("&lt;length&gt;")}}
  - : Ein Versatz vom entsprechenden Rand des Scrollcontainers.

## Beschreibung

Sie können die Wirkung von `scroll-margin` sehen, indem Sie zu einem Punkt zwischen zwei der "Seiten" des Beispiels scrollen. Der für `scroll-margin` angegebene Wert bestimmt, wie viel von der Seite, die sich hauptsächlich außerhalb des {{Glossary("Scroll_snap#snapport", "snapport")}} befindet, sichtbar bleiben soll.

Die `scroll-margin`-Werte repräsentieren somit Versätze, die den Scroll-Snapping-Bereich definieren, der verwendet wird, um diese Box am Snapport festzuhalten. Der Scroll-Snapping-Bereich wird bestimmt, indem die transformierte Border-Box genommen, deren rechteckige Begrenzungsbox (achsenausgerichtet im Koordinatenraum des Scroll-Containers) gefunden und dann die angegebenen Versätze hinzugefügt werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Demonstration

Dieses Beispiel implementiert etwas sehr Ähnliches wie das interaktive Beispiel oben, mit dem Unterschied, dass wir Ihnen hier erklären, wie es implementiert wird.

Das Ziel ist es, vier horizontal scrollbare Blöcke zu erstellen, wobei der zweite und dritte Block in Position rasten, nahe, aber nicht ganz links von jedem Block.

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
  border: 1px solid #000;
  scroll-snap-type: x mandatory;
}
```

Die Hauptbestandteile, die für das Scroll-Snapping relevant sind, sind `overflow-x: scroll`, was sicherstellt, dass die Inhalte scrollen und nicht verborgen werden, und `scroll-snap-type: x mandatory`, was vorgibt, dass das Scroll-Snapping entlang der horizontalen Achse auftreten muss und das Scrollen immer an einem Snap-Punkt zur Ruhe kommt.

Die Kindelemente sind wie folgt gestylt:

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

Der relevanteste Teil hier ist `scroll-snap-align: start`, was angibt, dass die linken Kanten (die "Starts" entlang der x-Achse, in unserem Fall) die vorgesehenen Snap-Punkte sind.

Zuletzt spezifizieren wir die Werte des Scrollrands, wobei wir unterschiedliche für das zweite und dritte Kindelement festlegen:

```css
.scroller > div:nth-child(2) {
  scroll-margin: 1rem;
}

.scroller > div:nth-child(3) {
  scroll-margin: 2rem;
}
```

Das bedeutet, dass beim Scrollen an den mittleren Kindelementen vorbei das Scrollen auf `1rem` außerhalb der linken Kante des zweiten `<div>` und `2rems` außerhalb der linken Kante des dritten `<div>` rasten wird.

> [!NOTE]
> Hier legen wir `scroll-margin` auf allen Seiten auf einmal fest, aber nur die Startkante ist wirklich relevant. Es würde genauso gut funktionieren, nur einen Scrollrand an dieser einen Kante festzulegen, zum Beispiel mit `scroll-margin-inline-start: 1rem` oder `scroll-margin: 0 0 0 1rem`.

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
