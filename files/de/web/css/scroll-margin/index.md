---
title: scroll-margin
slug: Web/CSS/scroll-margin
l10n:
  sourceCommit: 7526c9b4f29818bdca7505de41a4883f4ada2707
---

{{CSSRef}}

Die **`scroll-margin`** [Kurzschreibweise](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) setzt alle Scroll-Margen eines Elements auf einmal fest, indem Werte ähnlich der [`margin`](/de/docs/Web/CSS/margin)-Eigenschaft für Margen eines Elements zugewiesen werden.

{{EmbedInteractiveExample("pages/css/scroll-margin.html")}}

## Zusammengesetzte Eigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- [`scroll-margin-bottom`](/de/docs/Web/CSS/scroll-margin-bottom)
- [`scroll-margin-left`](/de/docs/Web/CSS/scroll-margin-left)
- [`scroll-margin-right`](/de/docs/Web/CSS/scroll-margin-right)
- [`scroll-margin-top`](/de/docs/Web/CSS/scroll-margin-top)

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
  - : Ein Ausmaß von der entsprechenden Kante des Scroll-Containers.

## Beschreibung

Sie können den Effekt von `scroll-margin` sehen, wenn Sie zu einem Punkt zwischen zwei der "Seiten" des Beispielinhalts scrollen. Der für `scroll-margin` angegebene Wert bestimmt, wie viel von der Seite, die sich hauptsächlich außerhalb des {{Glossary("Scroll_snap#snapport", "snapport")}} befindet, sichtbar bleiben soll.

Die `scroll-margin`-Werte repräsentieren somit Ausmaße, die den Bereich für das Scroll-Snapping definieren, der verwendet wird, um dieses Element zum Snapport zu schnappen. Der Scroll-Snap-Bereich wird bestimmt, indem die transformierte Border-Box genommen, deren rechteckige Begrenzungsbox (achsengetreu im Koordinatenraum des Scroll-Containers) gefunden und dann die angegebenen Ausmaße hinzugefügt werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Demonstration

Dieses Beispiel implementiert etwas sehr Ähnliches wie das interaktive Beispiel oben, mit dem Unterschied, dass wir Ihnen hier erklären, wie es implementiert ist.

Das Ziel hier ist es, vier horizontal scrollbare Blöcke zu erstellen, von denen der zweite und dritte an Ort und Stelle schnappen, nah aber nicht ganz links von jedem Block.

#### HTML

Das HTML enthält ein Scroller mit vier Kindern:

```html
<div class="scroller">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
</div>
```

#### CSS

Schauen wir uns das CSS an. Der äußere Container ist wie folgt gestylt:

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

Die wichtigsten Teile, die für das Scroll-Snapping relevant sind, sind `overflow-x: scroll`, was sicherstellt, dass die Inhalte scrollen und nicht versteckt werden, und `scroll-snap-type: x mandatory`, was vorschreibt, dass Scroll-Snapping entlang der Horizontalachse erfolgen muss und das Scrollen immer an einem Snap-Punkt zum Stillstand kommt.

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

Der relevanteste Teil hier ist `scroll-snap-align: start`, was angibt, dass die linken Kanten (die "Starts" entlang der x-Achse, in unserem Fall) die festgelegten Snap-Punkte sind.

Zum Schluss spezifizieren wir die Scroll-Margin-Werte, einen anderen für das zweite und dritte Kindelement:

```css
.scroller > div:nth-child(2) {
  scroll-margin: 1rem;
}

.scroller > div:nth-child(3) {
  scroll-margin: 2rem;
}
```

Das bedeutet, dass beim Scrollen an den mittleren Kindelementen vorbei, das Scrollen zu `1rem` außerhalb der linken Kante des zweiten `<div>` und `2rem` außerhalb der linken Kante des dritten `<div>` schnappen wird.

> [!NOTE]
> Hier setzen wir `scroll-margin` auf allen Seiten gleichzeitig, aber nur die Startkante ist wirklich relevant. Es würde genauso gut funktionieren, nur an dieser Kante eine Scroll-Marge zu setzen, zum Beispiel mit `scroll-margin-inline-start: 1rem` oder `scroll-margin: 0 0 0 1rem`.

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
