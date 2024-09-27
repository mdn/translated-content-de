---
title: scroll-margin-inline-end
slug: Web/CSS/scroll-margin-inline-end
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{CSSRef}}

Die `scroll-margin-inline-end`-Eigenschaft definiert den Außenabstand des Scroll-Snap-Bereichs am Ende der Inline-Dimension, der verwendet wird, um dieses Element an den Snap-Port anzudocken. Der Scroll-Snap-Bereich wird bestimmt, indem der transformierte Rahmen des Begrenzungsrechtecks (achsenparallel im Koordinatenraum des Scroll-Containers) ermittelt und die angegebenen Abstände hinzugefügt werden.

{{EmbedInteractiveExample("pages/css/scroll-margin-inline-end.html")}}

## Syntax

```css
/* <length> values */
scroll-margin-inline-end: 10px;
scroll-margin-inline-end: 1em;

/* Global values */
scroll-margin-inline-end: inherit;
scroll-margin-inline-end: initial;
scroll-margin-inline-end: revert;
scroll-margin-inline-end: revert-layer;
scroll-margin-inline-end: unset;
```

### Werte

- {{CSSXref("&lt;length&gt;")}}
  - : Ein Außenabstand vom Inline-Ende des Scroll-Containers.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfache Demonstration

Dieses Beispiel implementiert etwas sehr Ähnliches wie das interaktive Beispiel oben, außer dass wir Ihnen hier erklären, wie es implementiert wird.

Das Ziel hier ist es, vier horizontal-scrollbare Blöcke zu erstellen, von denen der zweite und dritte in Position einrasten, nahe, aber nicht ganz am rechten Rand jedes Blocks.

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

Lassen Sie uns die CSS durchgehen. Der äußere Container wird folgendermaßen gestaltet:

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

Die Hauptteile, die für das Scroll-Snappen relevant sind, sind `overflow-x: scroll`, was sicherstellt, dass der Inhalt scrollt und nicht verborgen wird, und `scroll-snap-type: x mandatory`, was festlegt, dass das Scroll-Snapping entlang der horizontalen Achse erfolgen muss, und das Scrollen immer an einem Snap-Punkt endet.

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
  scroll-snap-align: end;
}

.scroller > div:nth-child(2n) {
  background-color: #fff;
  color: #663399;
}
```

Der relevanteste Teil hier ist `scroll-snap-align: end`, was angibt, dass die rechten Kanten (die "Ends" entlang der x-Achse, in unserem Fall) die vorgesehenen Snap-Punkte sind.

Zuletzt spezifizieren wir die Scroll-Margin-Werte, unterschiedliche für das zweite und dritte Kindelement:

```css
.scroller > div:nth-child(2) {
  scroll-margin-inline-end: 1rem;
}

.scroller > div:nth-child(3) {
  scroll-margin-inline-end: 2rem;
}
```

Das bedeutet, dass beim Scrollen an den mittleren Kindelementen das Scrollen `1rem` außerhalb des Inline-Endes des zweiten `<div>` und `2rems` außerhalb des Inline-Endes des dritten `<div>` einrastet.

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
