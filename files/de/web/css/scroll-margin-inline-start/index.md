---
title: scroll-margin-inline-start
slug: Web/CSS/scroll-margin-inline-start
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{CSSRef}}

Die Eigenschaft `scroll-margin-inline-start` definiert den Rand des Scroll-Snap-Bereichs am Anfang der Inline-Dimension, der verwendet wird, um dieses Box-Element an den Snapport zu schnappen. Der Scroll-Snap-Bereich wird bestimmt, indem die transformierte Border-Box genommen wird, ihre rechteckige Umhüllungsbox (achsen-ausgerichtet im Koordinatenraum des Scroll-Containers) gefunden und dann die angegebenen Ränder hinzugefügt werden.

{{EmbedInteractiveExample("pages/css/scroll-margin-inline-start.html")}}

## Syntax

```css
/* <length> Werte */
scroll-margin-inline-start: 10px;
scroll-margin-inline-start: 1em;

/* Globale Werte */
scroll-margin-inline-start: inherit;
scroll-margin-inline-start: initial;
scroll-margin-inline-start: revert;
scroll-margin-inline-start: revert-layer;
scroll-margin-inline-start: unset;
```

### Werte

- {{CSSXref("&lt;length&gt;")}}
  - : Ein Vorsprung vom Anfangsrand der Inline-Achse des Scroll-Containers.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfache Demonstration

Dieses Beispiel implementiert etwas sehr Ähnliches wie das interaktive Beispiel oben, außer dass wir Ihnen hier erklären, wie es implementiert ist.

Das Ziel ist es, vier horizontal scrollende Blöcke zu erstellen, von denen der zweite und dritte an Ort und Stelle schnappen, nahe aber nicht ganz am linken Rand jedes Blocks.

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

Gehen wir den CSS-Code durch. Der äußere Container wird so gestylt:

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

Die Hauptteile, die für das Scroll-Snapping relevant sind, sind `overflow-x: scroll`, was sicherstellt, dass der Inhalt scrollt und nicht versteckt wird, und `scroll-snap-type: x mandatory`, was vorschreibt, dass das Scroll-Snapping entlang der horizontalen Achse erfolgen muss und das Scrollen immer an einem Snap-Punkt endet.

Die Kindelemente werden wie folgt gestylt:

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

Der relevanteste Teil hier ist `scroll-snap-align: start`, das festlegt, dass die linken Ränder (die "Starts" entlang der x-Achse, in unserem Fall) die designierten Snap-Punkte sind.

Zuletzt spezifizieren wir die Scroll-Margin-Werte, jeweils ein anderer für das zweite und dritte Kindelement:

```css
.scroller > div:nth-child(2) {
  scroll-margin-inline-start: 1rem;
}

.scroller > div:nth-child(3) {
  scroll-margin-inline-start: 2rem;
}
```

Das bedeutet, dass beim Scrollen an den mittleren Kindelementen vorbei der Bildlauf `1rem` außerhalb des Inline-Start-Rands des zweiten `<div>` und `2rem` außerhalb des Inline-Start-Rands des dritten `<div>` schnappt.

#### Ergebnis

Probieren Sie es selbst aus:

{{EmbedLiveSample('Simple_demonstration', '100%', 300)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS scroll snap](/de/docs/Web/CSS/CSS_scroll_snap)
- [Kontrolliertes Scrollen mit CSS scroll snap](https://web.dev/articles/css-scroll-snap)
