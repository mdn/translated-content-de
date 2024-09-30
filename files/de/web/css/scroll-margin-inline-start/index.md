---
title: scroll-margin-inline-start
slug: Web/CSS/scroll-margin-inline-start
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{CSSRef}}

Die Eigenschaft `scroll-margin-inline-start` definiert den Rand der Scroll-Snap-Fläche am Anfang der Inline-Dimension, die verwendet wird, um dieses Element an der Snapport zu verankern. Die Scroll-Snap-Fläche wird ermittelt, indem die transformierte Border-Box genommen, ihre rechteckige Umrandungsbox (achsenparallel im Koordinatenraum des Scroll-Containers) gefunden und dann die angegebenen Ausdehnungen hinzugefügt werden.

{{EmbedInteractiveExample("pages/css/scroll-margin-inline-start.html")}}

## Syntax

```css
/* <length> values */
scroll-margin-inline-start: 10px;
scroll-margin-inline-start: 1em;

/* Global values */
scroll-margin-inline-start: inherit;
scroll-margin-inline-start: initial;
scroll-margin-inline-start: revert;
scroll-margin-inline-start: revert-layer;
scroll-margin-inline-start: unset;
```

### Werte

- {{CSSXref("&lt;length&gt;")}}
  - : Ein Ausstand vom Inline-Anfangsrand des Scroll-Containers.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfache Demonstration

Dieses Beispiel implementiert etwas sehr Ähnliches wie das interaktive Beispiel oben, außer dass wir Ihnen hier erklären, wie es implementiert wird.

Das Ziel hier ist es, vier horizontal scrollende Blöcke zu erstellen, von denen der zweite und dritte an Ort und Stelle einrasten, nahe aber nicht ganz am linken Rand jedes Blocks.

#### HTML

Das HTML, das die Blöcke darstellt, ist sehr einfach:

```html
<div class="scroller">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
</div>
```

#### CSS

Gehen wir den CSS-Code durch. Der äußere Container wird wie folgt gestaltet:

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

Die Hauptteile, die für das Scroll-Snapping relevant sind, sind `overflow-x: scroll`, was sicherstellt, dass die Inhalte scrollen und nicht verborgen werden, und `scroll-snap-type: x mandatory`, welches bestimmt, dass das Scroll-Snapping entlang der horizontalen Achse erfolgen muss und das Scrollen immer an einem Snap-Punkt zum Stillstand kommt.

Die Kindelemente werden wie folgt gestaltet:

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

Der relevanteste Teil hier ist `scroll-snap-align: start`, welches festlegt, dass die linken Ränder (die "Anfänge" entlang der x-Achse, in unserem Fall) die festgelegten Snap-Punkte sind.

Zuletzt spezifizieren Sie die Scroll-Margin-Werte, einen anderen für das zweite und dritte Kindelement:

```css
.scroller > div:nth-child(2) {
  scroll-margin-inline-start: 1rem;
}

.scroller > div:nth-child(3) {
  scroll-margin-inline-start: 2rem;
}
```

Das bedeutet, dass beim Scrollen an den mittleren Kindelementen das Scrollen auf `1rem` außerhalb des Inline-Anfangsrandes des zweiten `<div>` und `2rems` außerhalb des Inline-Anfangsrandes des dritten `<div>` einrastet.

#### Ergebnis

Probieren Sie es selbst aus:

{{EmbedLiveSample('Simple_demonstration', '100%', 300)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS scroll snap](/de/docs/Web/CSS/CSS_scroll_snap)
- [Gut kontrolliertes Scrollen mit CSS scroll snap](https://web.dev/articles/css-scroll-snap)
