---
title: scroll-margin
slug: Web/CSS/Reference/Properties/scroll-margin
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

Die **`scroll-margin`** [Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) setzt alle Scroll-Abstände eines Elements auf einmal fest, indem Werte ähnlich der `{{cssxref("margin")}}`-Eigenschaft für die Ränder eines Elements zugewiesen werden.

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

## Bestandeigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- {{cssxref("scroll-margin-bottom")}}
- {{cssxref("scroll-margin-left")}}
- {{cssxref("scroll-margin-right")}}
- {{cssxref("scroll-margin-top")}}

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
  - : Ein Versatz vom entsprechenden Rand des Scroll-Containers.

## Beschreibung

Sie können die Wirkung von `scroll-margin` sehen, indem Sie zu einem Punkt zwischen zwei der "Seiten" des Beispiels scrollen. Der für `scroll-margin` angegebene Wert bestimmt, wie viel von der Seite, die hauptsächlich außerhalb des {{Glossary("Scroll_snap#snapport", "Snapports")}} liegt, sichtbar bleiben soll.

Die `scroll-margin`-Werte stellen daher Versätze dar, die den Scroll-Snap-Bereich definieren, der verwendet wird, um dieses Feld an den Snapport zu schnappen. Der Scroll-Snap-Bereich wird bestimmt, indem der transformierte Randbereich genommen, seine rechteckige Begrenzungsbox gefunden (achsenparallel im Koordinatenraum des Scroll-Containers), und dann die angegebenen Versätze hinzugefügt werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Demonstration

Dieses Beispiel implementiert etwas sehr Ähnliches wie das interaktive Beispiel oben, außer dass wir hier erklären, wie es implementiert ist.

Ziel ist es, vier horizontal scrollende Blöcke zu erstellen, wobei der zweite und dritte Block in der Nähe, aber nicht ganz am linken Rand jedes Blocks einrasten.

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

Lassen Sie uns den CSS-Code durchgehen. Der äußere Container ist so gestylt:

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

Die Hauptbestandteile, die für das Scroll-Snapping relevant sind, sind `overflow-x: scroll`, das sicherstellt, dass die Inhalte scrollen können und nicht verborgen werden, und `scroll-snap-type: x mandatory`, das vorschreibt, dass entlang der horizontalen Achse zwingend Scroll-Snapping auftreten muss, und der Scroll-Vorgang immer an einem Snap-Punkt endet.

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
  scroll-snap-align: start;
}

.scroller > div:nth-child(2n) {
  background-color: white;
  color: rebeccapurple;
}
```

Der relevanteste Teil hier ist `scroll-snap-align: start`, der angibt, dass die linken Ränder (die "Anfänge" entlang der x-Achse, in unserem Fall) die vorgesehenen Snap-Punkte sind.

Zuletzt legen wir die Scroll-Margin-Werte fest, einen anderen für das zweite und dritte Kindelement:

```css
.scroller > div:nth-child(2) {
  scroll-margin: 1rem;
}

.scroller > div:nth-child(3) {
  scroll-margin: 2rem;
}
```

Das bedeutet, dass beim Scrollen an den mittleren Kindelementen der Scroll-Vorgang `1rem` außerhalb des linken Randes des zweiten `<div>` einrastet und `2rems` außerhalb des linken Randes des dritten `<div>`.

> [!NOTE]
> Hier setzen wir `scroll-margin` auf allen Seiten gleichzeitig, aber nur die Startkante ist wirklich relevant. Es würde hier genauso gut funktionieren, nur einen Scroll-Rand an dieser Kante festzulegen, zum Beispiel mit `scroll-margin-inline-start: 1rem` oder `scroll-margin: 0 0 0 1rem`.

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
