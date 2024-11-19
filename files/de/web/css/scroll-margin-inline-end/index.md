---
title: scroll-margin-inline-end
slug: Web/CSS/scroll-margin-inline-end
l10n:
  sourceCommit: 919d97a4bda8004f63f655d3f9576c27a82c8a2a
---

{{CSSRef}}

Die Eigenschaft `scroll-margin-inline-end` definiert den Rand des Scroll-Snapping-Bereichs am Ende der Inline-Dimension, die genutzt wird, um dieses Element an den {{Glossary("Scroll_snap#snapport", "Snapport")}} zu schnappen. Der Bereich für das Scroll-Snapping wird ermittelt, indem die transformierte Umrandungsbox genutzt wird. Dazu wird deren rechteckige Begrenzungsbox (achsenbündig im Koordinatenraum des Scroll-Containers) gefunden und dann die angegebenen Erweiterungen hinzugefügt.

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
  - : Ein Abstand ausgehend von der Inline-Endkante des Scroll-Containers.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Demonstration

Dieses Beispiel implementiert etwas sehr Ähnliches wie das obenstehende interaktive Beispiel, allerdings erklären wir hier, wie es umgesetzt wird.

Das Ziel ist es, vier horizontal scrollbare Blöcke zu erstellen, von denen die zweiten und dritten an einer Stelle einrasten, die etwas, aber nicht ganz am rechten Rand jedes Blocks liegt.

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

Lassen Sie uns den CSS-Code durchgehen. Der äußere Container wird folgendermaßen gestaltet:

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

Die Hauptbestandteile, die für das Scroll-Snapping relevant sind, sind `overflow-x: scroll`, welches sicherstellt, dass die Inhalte scrollen und nicht verborgen werden, und `scroll-snap-type: x mandatory`, welches vorschreibt, dass das Scroll-Snapping entlang der horizontalen Achse erfolgen muss und das Scrolling immer auf einem Snap-Punkt zur Ruhe kommt.

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

Der relevanteste Teil hier ist `scroll-snap-align: end`, welcher spezifiziert, dass die rechten Kanten (die "Enden" entlang der x-Achse, in unserem Fall) die vorgesehenen Snap-Punkte sind.

Zuletzt spezifizieren wir die Scroll-Margin-Werte, wobei für das zweite und dritte Kindelement unterschiedliche Werte gesetzt werden:

```css
.scroller > div:nth-child(2) {
  scroll-margin-inline-end: 1rem;
}

.scroller > div:nth-child(3) {
  scroll-margin-inline-end: 2rem;
}
```

Dies bedeutet, dass wenn man an den mittleren Kindelementen vorbeiscrollt, das Scrollen bei `1rem` außerhalb der Inline-Endkante des zweiten `<div>` einrastet und bei `2rems` außerhalb der Inline-Endkante des dritten `<div>`.

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
