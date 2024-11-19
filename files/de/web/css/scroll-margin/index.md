---
title: scroll-margin
slug: Web/CSS/scroll-margin
l10n:
  sourceCommit: 919d97a4bda8004f63f655d3f9576c27a82c8a2a
---

{{CSSRef}}

Die **`scroll-margin`** [Kurzschreibweise](/de/docs/Web/CSS/Shorthand_properties) legt alle Scroll-Margen eines Elements auf einmal fest, indem Werte ähnlich der [`margin`](/de/docs/Web/CSS/margin)-Eigenschaft für Margen eines Elements zugewiesen werden.

{{EmbedInteractiveExample("pages/css/scroll-margin.html")}}

## Bestandeigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

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
  - : Ein Abstand vom entsprechenden Rand des Scroll-Containers.

## Beschreibung

Sie können den Effekt von `scroll-margin` sehen, indem Sie zu einem Punkt zwischen zwei "Seiten" des Beispiels scrollen. Der für `scroll-margin` angegebene Wert bestimmt, wie viel von der Seite, die hauptsächlich außerhalb des {{Glossary("Scroll_snap#snapport", "Snapports")}} liegt, sichtbar bleiben soll.

Die `scroll-margin`-Werte repräsentieren demnach Abstände, die den Scroll-Snap-Bereich definieren, der zum Einrasten dieses Feldes in den Snapport verwendet wird. Der Scroll-Snap-Bereich wird bestimmt, indem das transformierte Rahmen-Feld genommen, seine rechteckige Umrandungsbox (achsenbündig im Koordinatenraum des Scroll-Containers) gefunden und dann die angegebenen Abstände hinzugefügt werden.

## Formale Definition

{{cssinfo}}

## Formaler Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Demonstration

Dieses Beispiel implementiert etwas sehr Ähnliches wie das interaktive Beispiel oben, wobei wir hier erklären, wie es implementiert wird.

Das Ziel hier ist es, vier horizontal scrollende Blöcke zu erstellen, von denen der zweite und dritte an einer Position einrasten, die nahe, aber nicht ganz am linken Rand jedes Blocks liegt.

#### HTML

Das HTML umfasst einen Scroller mit vier Kindern:

```html
<div class="scroller">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
</div>
```

#### CSS

Werfen wir einen Blick auf das CSS. Der äußere Container ist wie folgt gestaltet:

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

Die Hauptteile, die für das Scroll-Einrasten relevant sind, sind `overflow-x: scroll`, das sicherstellt, dass der Inhalt scrollt und nicht verborgen wird, und `scroll-snap-type: x mandatory`, das vorgibt, dass das Scroll-Einrasten entlang der horizontalen Achse erfolgen muss und das Scrollen immer an einem Snap-Punkt enden wird.

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

Der relevanteste Teil hier ist `scroll-snap-align: start`, das angibt, dass die linken Kanten (die "Anfänge" entlang der x-Achse, in unserem Fall) die vorgesehenen Einrastpunkte sind.

Zum Schluss spezifizieren wir die Scroll-Margin-Werte, ein anderer für das zweite und dritte Kindelement:

```css
.scroller > div:nth-child(2) {
  scroll-margin: 1rem;
}

.scroller > div:nth-child(3) {
  scroll-margin: 2rem;
}
```

Das bedeutet, dass beim Scrollen an den mittleren Kindelementen vorbei, das Scrollen bei `1rem` außerhalb des linken Rands des zweiten `<div>` und `2rems` außerhalb des linken Rands des dritten `<div>` einrasten wird.

> [!NOTE]
> Hier setzen wir `scroll-margin` auf allen Seiten gleichzeitig, aber nur der Start-Rand ist wirklich relevant. Es würde genauso gut funktionieren, hier nur einen Scroll-Margin an diesem einen Rand zu setzen, zum Beispiel mit `scroll-margin-inline-start: 1rem` oder `scroll-margin: 0 0 0 1rem`.

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
