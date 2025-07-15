---
title: scroll-margin-inline
slug: Web/CSS/scroll-margin-inline
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
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
  color: #fff;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-snap-align: end;
}

.scroller > div:nth-child(even) {
  background-color: #fff;
  color: rebeccapurple;
}
```

## Bestandeigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

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

Die Werte von `scroll-margin` stellen Vorsprünge dar, die den Scroll-Snap-Bereich definieren, der zum Einrasten dieser Box in den {{Glossary("Scroll_snap#snapport", "Snapport")}} verwendet wird. Der Scroll-Snap-Bereich wird bestimmt, indem die transformierte Rahmen-Box genommen, ihre rechteckige Begrenzungsbox (achsenparallel im Koordinatenraum des Scroll-Containers) gefunden und dann die angegebenen Vorsprünge hinzugefügt werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Demonstration

Dieses Beispiel implementiert etwas Ähnliches wie das interaktive Beispiel oben, mit dem Unterschied, dass wir Ihnen hier erklären, wie es implementiert wird.

Das Ziel ist, vier horizontal scrollende Blöcke zu erstellen, von denen der zweite und dritte Block einrasten und sich nahe, aber nicht ganz am rechten Rand jedes Blocks befinden.

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

Die Hauptteile, die für das Scroll-Snapping relevant sind, sind `overflow-x: scroll`, was sicherstellt, dass der Inhalt scrollt und nicht ausgeblendet wird, und `scroll-snap-type: x mandatory`, das vorschreibt, dass das Scroll-Snapping entlang der horizontalen Achse erfolgen muss, und dass das Scrollen immer an einem Snap-Punkt zum Stillstand kommen wird.

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
  scroll-snap-align: end;
}

.scroller > div:nth-child(2n) {
  background-color: #fff;
  color: #663399;
}
```

Der relevanteste Teil hier ist `scroll-snap-align: end`, welcher angibt, dass die rechten Kanten (die "Ends" entlang der x-Achse, in unserem Fall) die festgelegten Snap-Punkte sind.

Zuletzt spezifizieren wir die Scroll-Margen-Werte, unterschiedliche für das zweite und dritte Kindelement:

```css
.scroller > div:nth-child(2) {
  scroll-margin-inline: 1rem;
}

.scroller > div:nth-child(3) {
  scroll-margin-inline: 2rem;
}
```

Das bedeutet, dass beim Scrollen an den mittleren Kindelementen der Bildlauf `1rem` außerhalb der Inline-Endkante des zweiten `<div>` und `2rems` außerhalb der Inline-Endkante des dritten `<div>` einrastet.

> [!NOTE]
> Hier setzen wir `scroll-margin` sowohl am Anfang als auch am Ende der Inline-Achse (x in unserem Fall), aber nur die Endkante ist wirklich relevant. Es würde genauso gut funktionieren, hier nur eine Scroll-Marge an dieser einen Kante zu setzen, zum Beispiel mit `scroll-margin-inline: 0 1rem`, oder `scroll-margin-inline-end: 1rem`.

#### Ergebnis

Versuchen Sie es selbst:

{{EmbedLiveSample('Basic_demonstration', '100%', 300)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS scroll snap](/de/docs/Web/CSS/CSS_scroll_snap)
- [Gut kontrolliertes Scrollen mit CSS scroll snap](https://web.dev/articles/css-scroll-snap)
