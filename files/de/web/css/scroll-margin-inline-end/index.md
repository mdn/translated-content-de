---
title: scroll-margin-inline-end
slug: Web/CSS/scroll-margin-inline-end
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{CSSRef}}

Die Eigenschaft `scroll-margin-inline-end` definiert den Rand des Scroll-Snap-Bereichs am Ende der Inline-Dimension, der verwendet wird, um diese Box an den Snapport zu schnappen. Der Scroll-Snap-Bereich wird bestimmt, indem die transformierte Rahmenbox genommen wird, ihr rechteckiger Begrenzungsrahmen (achsenparallel im Koordinatenraum des Scroll-Containers) ermittelt und dann die angegebenen Abstände hinzugefügt werden.

{{EmbedInteractiveExample("pages/css/scroll-margin-inline-end.html")}}

## Syntax

```css
/* <length> Werte */
scroll-margin-inline-end: 10px;
scroll-margin-inline-end: 1em;

/* Globale Werte */
scroll-margin-inline-end: inherit;
scroll-margin-inline-end: initial;
scroll-margin-inline-end: revert;
scroll-margin-inline-end: revert-layer;
scroll-margin-inline-end: unset;
```

### Werte

- {{CSSXref("&lt;length&gt;")}}
  - : Ein Abstand vom Inline-Endrand des Scroll-Containers.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfache Demonstration

Dieses Beispiel implementiert etwas sehr Ähnliches wie das interaktive Beispiel oben, jedoch erklären wir Ihnen hier, wie es implementiert wird.

Das Ziel hier ist es, vier horizontal scrollbare Blöcke zu erstellen, wobei der zweite und dritte Block einrasten, fast, aber nicht ganz am rechten Rand jedes Blocks.

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

Gehen wir den CSS-Code durch. Der äußere Container ist wie folgt gestaltet:

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

Die Hauptteile, die für das Scroll-Snapping relevant sind, sind `overflow-x: scroll`, wodurch sichergestellt wird, dass der Inhalt scrollt und nicht verborgen wird, und `scroll-snap-type: x mandatory`, das vorschreibt, dass ein Scroll-Snap entlang der horizontalen Achse erfolgen muss und das Scrollen immer an einem Snap-Punkt zum Stillstand kommt.

Die Kindelemente sind wie folgt gestaltet:

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

Der relevanteste Teil hier ist `scroll-snap-align: end`, der festlegt, dass die rechten Kanten (die "Enden" entlang der x-Achse in unserem Fall) die vorgesehenen Snap-Punkte sind.

Zuletzt spezifizieren wir die Scroll-Margin-Werte, unterschiedliche für das zweite und dritte Kindelement:

```css
.scroller > div:nth-child(2) {
  scroll-margin-inline-end: 1rem;
}

.scroller > div:nth-child(3) {
  scroll-margin-inline-end: 2rem;
}
```

Das bedeutet, dass beim Scrollen an den mittleren Kindelementen vorbei, das Scrollen bei `1rem` außerhalb des Inline-Endrands des zweiten `<div>` und `2rems` außerhalb des Inline-Endrands des dritten `<div>` einrastet.

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
