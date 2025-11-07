---
title: scroll-margin-inline
slug: Web/CSS/Reference/Properties/scroll-margin-inline
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die `scroll-margin-inline`-[Kurzformeigenschaft](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) setzt die Scroll-Margen eines Elements in der Inline-Dimension.

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

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

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
  - : Ein Beginn von der entsprechenden Kante des Scroll-Containers.

## Beschreibung

Die Werte der Scroll-Marge stellen Vergrößerungen dar, die den Scroll-Snap-Bereich definieren, der verwendet wird, um diese Box am {{Glossary("Scroll_snap#snapport", "Snapport")}} einzurasten. Der Scroll-Snap-Bereich wird durch das Transformieren des Rahmenbereichs, das Finden seines rechteckigen Begrenzungsrahmens (achsenbündig im Koordinatenraum des Scroll-Containers) und das Hinzufügen der angegebenen Vergrößerungen bestimmt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Demonstration

Dieses Beispiel implementiert etwas sehr Ähnliches wie das interaktive Beispiel oben, außer dass wir hier erklären, wie es implementiert ist.

Das Ziel hier ist es, vier horizontal scrollende Blöcke zu erstellen, von denen sich der zweite und dritte an ihren Platz einrasten, nahe aber nicht ganz am rechten Rand jedes Blocks.

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

Gehen wir durch das CSS. Der äußere Container ist wie folgt gestylt:

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

Die Hauptteile, die für das Scroll-Snapping relevant sind, sind `overflow-x: scroll`, das sicherstellt, dass der Inhalt scrollt und nicht verborgen ist, und `scroll-snap-type: x mandatory`, das vorschreibt, dass das Scroll-Snapping entlang der horizontalen Achse erfolgen muss und das Scrollen immer auf einem Snap-Punkt zum Stehen kommt.

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

Der relevanteste Teil hier ist `scroll-snap-align: end`, welches festlegt, dass die rechten Kanten (die "Ends" entlang der x-Achse, in unserem Fall) die festgelegten Snap-Punkte sind.

Zuletzt spezifizieren wir die Werte der Scroll-Margen, einen anderen für das zweite und dritte Kindelement:

```css
.scroller > div:nth-child(2) {
  scroll-margin-inline: 1rem;
}

.scroller > div:nth-child(3) {
  scroll-margin-inline: 2rem;
}
```

Dies bedeutet, dass beim Scrollen vorbei an den mittleren Kindelementen das Scrollen an `1rem` außerhalb der Inline-Endkante des zweiten `<div>` einrastet und `2rems` außerhalb der Inline-Endkante des dritten `<div>`.

> [!NOTE]
> Hier setzen wir `scroll-margin` sowohl am Anfang als auch am Ende der Inline-Achse (x in unserem Fall), aber nur die Endkante ist wirklich relevant. Es würde hier genauso gut funktionieren, nur eine Scroll-Marge an dieser einen Kante zu setzen, zum Beispiel mit `scroll-margin-inline: 0 1rem` oder `scroll-margin-inline-end: 1rem`.

#### Ergebnis

Probieren Sie es selbst:

{{EmbedLiveSample('Basic_demonstration', '100%', 300)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS scroll snap](/de/docs/Web/CSS/Guides/Scroll_snap)
- [Gut kontrolliertes Scrollen mit CSS scroll snap](https://web.dev/articles/css-scroll-snap)
