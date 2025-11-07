---
title: scroll-margin
slug: Web/CSS/Reference/Properties/scroll-margin
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`scroll-margin`** [Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) setzt alle Scroll-Ränder eines Elements auf einmal und weist Werte ähnlich zu, wie es die [`margin`](/de/docs/Web/CSS/Reference/Properties/margin)-Eigenschaft für die Ränder eines Elements tut.

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
  color: white;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-snap-align: start;
}

.scroller > div:nth-child(even) {
  background-color: white;
  color: rebeccapurple;
}
```

## Bestandteil-Eigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- [`scroll-margin-bottom`](/de/docs/Web/CSS/Reference/Properties/scroll-margin-bottom)
- [`scroll-margin-left`](/de/docs/Web/CSS/Reference/Properties/scroll-margin-left)
- [`scroll-margin-right`](/de/docs/Web/CSS/Reference/Properties/scroll-margin-right)
- [`scroll-margin-top`](/de/docs/Web/CSS/Reference/Properties/scroll-margin-top)

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
  - : Ein Abstand vom entsprechenden Rand des Scroll-Containers.

## Beschreibung

Den Effekt von `scroll-margin` können Sie sehen, indem Sie zu einem Punkt zwischen zwei der "Seiten" des Inhalts des Beispiels scrollen. Der für `scroll-margin` angegebene Wert bestimmt, wie viel von der Seite, die hauptsächlich außerhalb des {{Glossary("Scroll_snap#snapport", "Snapport")}} liegt, sichtbar bleiben soll.

Daher repräsentieren die `scroll-margin`-Werte Überstände, die den Scroll-Snap-Bereich definieren, der verwendet wird, um diese Box zum Snapport zu schnappen. Der Scroll-Snap-Bereich wird bestimmt, indem die transformierte Border-Box genommen wird, deren rechteckige Begrenzungsbox (achsenparallel im Koordinatenraum des Scroll-Containers) gefunden und dann die angegebenen Überstände hinzugefügt werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Demonstration

Dieses Beispiel implementiert etwas sehr Ähnliches wie das interaktive Beispiel oben, mit dem Unterschied, dass wir Ihnen hier erklären, wie es implementiert ist.

Das Ziel hier ist es, vier horizontal scrollende Blöcke zu erstellen, von denen der zweite und dritte fast an den linken Rand jedes Blocks schnappen.

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

Lassen Sie uns das CSS durchgehen. Der äußere Container ist wie folgt gestaltet:

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

Die Hauptteile, die für das Scroll-Snapping relevant sind, sind `overflow-x: scroll`, wodurch sichergestellt wird, dass der Inhalt scrollt und nicht verborgen wird, und `scroll-snap-type: x mandatory`, das vorschreibt, dass das Scroll-Snapping entlang der horizontalen Achse erfolgen muss und das Scrolling immer an einem Snap-Punkt zur Ruhe kommt.

Die Kinderelemente sind wie folgt gestaltet:

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
  scroll-snap-align: start;
}

.scroller > div:nth-child(2n) {
  background-color: white;
  color: rebeccapurple;
}
```

Der relevanteste Teil hier ist `scroll-snap-align: start`, welches spezifiziert, dass die linken Kanten (die "Starts" entlang der x-Achse, in unserem Fall) die festgelegten Snap-Punkte sind.

Zu guter Letzt spezifizieren wir die Scroll-Margin-Werte, unterschiedliche für das zweite und dritte Kind-Element:

```css
.scroller > div:nth-child(2) {
  scroll-margin: 1rem;
}

.scroller > div:nth-child(3) {
  scroll-margin: 2rem;
}
```

Das bedeutet, dass beim Scrollen an den mittleren Kind-Elementen das Scrollen zu `1rem` außerhalb der linken Kante des zweiten `<div>` und `2rems` außerhalb der linken Kante des dritten `<div>` schnappen wird.

> [!NOTE]
> Hier setzen wir `scroll-margin` auf allen Seiten gleichzeitig, aber nur die Anfangskante ist wirklich relevant. Es würde genauso gut funktionieren, hier nur einen Scroll-Rand auf dieser einen Kante zu setzen, zum Beispiel mit `scroll-margin-inline-start: 1rem`, oder `scroll-margin: 0 0 0 1rem`.

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
