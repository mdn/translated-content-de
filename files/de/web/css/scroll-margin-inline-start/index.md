---
title: scroll-margin-inline-start
slug: Web/CSS/scroll-margin-inline-start
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{CSSRef}}

Die Eigenschaft `scroll-margin-inline-start` definiert den Abstand des Scroll-Snap-Bereichs am Anfang der Inline-Dimension, der verwendet wird, um dieses Element an den Snapport anzuschnappen. Der Scroll-Snap-Bereich wird bestimmt, indem das transformierte Rahmenfeld genommen wird, das rechteckige Begrenzungsfeld (achsenbündig im Koordinatenraum des Scroll-Containers) ermittelt wird und dann die angegebenen Abstände hinzugefügt werden.

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
  - : Ein Abstand vom Inline-Anfangsrand des Scroll-Containers.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfache Demonstration

Dieses Beispiel implementiert etwas, das dem interaktiven Beispiel oben sehr ähnlich ist, jedoch erklären wir Ihnen hier, wie es implementiert wird.

Das Ziel hier ist es, vier horizontal scrollende Blöcke zu erstellen, wobei der zweite und dritte Block einrastet, nahe aber nicht ganz am linken Rand jedes Blocks.

#### HTML

Das HTML, das die Blöcke repräsentiert, ist sehr einfach:

```html
<div class="scroller">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
</div>
```

#### CSS

Lassen Sie uns das CSS durchgehen. Der äußere Container wird wie folgt gestylt:

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

Die Hauptteile, die für das Scroll-Snapping relevant sind, sind `overflow-x: scroll`, was sicherstellt, dass die Inhalte scrollen und nicht versteckt werden, und `scroll-snap-type: x mandatory`, das diktiert, dass das Scroll-Snapping entlang der horizontalen Achse erfolgen muss und das Scrollen immer an einem Snap-Punkt endet.

Die Kind-Elemente werden wie folgt gestylt:

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

Der relevanteste Teil hier ist `scroll-snap-align: start`, das angibt, dass die linken Ränder (die "Starts" entlang der x-Achse in unserem Fall) die festgelegten Snap-Punkte sind.

Zuletzt spezifizieren wir die Scroll-Abstandswerte, einen anderen für das zweite und dritte Kindelement:

```css
.scroller > div:nth-child(2) {
  scroll-margin-inline-start: 1rem;
}

.scroller > div:nth-child(3) {
  scroll-margin-inline-start: 2rem;
}
```

Das bedeutet, dass beim Scrollen an den mittleren Kindelementen die Scrollbewegung bei `1rem` außerhalb des Inline-Anfangsrands des zweiten `<div>` und `2rem` außerhalb des Inline-Anfangsrands des dritten `<div>` stoppt.

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
