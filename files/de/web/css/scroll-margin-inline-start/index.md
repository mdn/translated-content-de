---
title: scroll-margin-inline-start
slug: Web/CSS/scroll-margin-inline-start
l10n:
  sourceCommit: 919d97a4bda8004f63f655d3f9576c27a82c8a2a
---

{{CSSRef}}

Die Eigenschaft `scroll-margin-inline-start` definiert den Rand des "scroll snap"-Bereichs am Anfang der Inline-Dimension, der verwendet wird, um diese Box an den {{Glossary("Scroll_snap#snapport", "Snapport")}} zu schnappen. Der "scroll snap"-Bereich wird bestimmt, indem die transformierte Border-Box genommen, deren rechteckige Begrenzungsbox (achsenbündig im Koordinatenraum des Scroll-Containers) gefunden und dann die angegebenen Abstände hinzugefügt werden.

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
  - : Ein Abstand vom Inline-Start des Scroll-Containers.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Demonstration

Dieses Beispiel implementiert etwas sehr Ähnliches wie das interaktive Beispiel oben, jedoch werden wir Ihnen hier erklären, wie es implementiert wird.

Das Ziel hier ist es, vier horizontal scrollbare Blöcke zu erstellen, von denen der zweite und dritte an einer Stelle einrasten, die sich nah, aber nicht ganz links in jedem Block befindet.

#### HTML

Der HTML-Code enthält einen Scroller mit vier Kind-Elementen:

```html
<div class="scroller">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
</div>
```

#### CSS

Schauen wir uns den CSS-Code an. Der äußere Container ist wie folgt gestylt:

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

Die Hauptteile, die für das Scroll-Snapping relevant sind, sind `overflow-x: scroll`, was sicherstellt, dass der Inhalt gescrollt wird und nicht versteckt ist, und `scroll-snap-type: x mandatory`, was vorschreibt, dass das Scroll-Snapping entlang der horizontalen Achse erfolgen muss und das Scrollen immer an einem Snap-Punkt zum Stehen kommt.

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

Der relevanteste Teil hier ist `scroll-snap-align: start`, das angibt, dass die linken Kanten (die "Starts" entlang der x-Achse, in unserem Fall) die festgelegten Snap-Punkte sind.

Zuletzt spezifizieren wir die Scroll-Margin-Werte, verschiedene für das zweite und dritte Kindelement:

```css
.scroller > div:nth-child(2) {
  scroll-margin-inline-start: 1rem;
}

.scroller > div:nth-child(3) {
  scroll-margin-inline-start: 2rem;
}
```

Das bedeutet, dass beim Scrollen über die mittleren Kindelemente das Scrollen an `1rem` außerhalb der Inline-Startkante des zweiten `<div>` und `2rems` außerhalb der Inline-Startkante des dritten `<div>` einrastet.

#### Ergebnis

Probieren Sie es selbst aus:

{{EmbedLiveSample('Basic_demonstration', '100%', 300)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Scroll Snap](/de/docs/Web/CSS/CSS_scroll_snap)
- [Gut kontrolliertes Scrollen mit CSS Scroll Snap](https://web.dev/articles/css-scroll-snap)
