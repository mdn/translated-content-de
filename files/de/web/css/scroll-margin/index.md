---
title: scroll-margin
slug: Web/CSS/scroll-margin
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}

Die **`scroll-margin`** [Kurzform-Eigenschaft](/de/docs/Web/CSS/Shorthand_properties) setzt alle Scroll-Ränder eines Elements auf einmal, ähnlich wie die [`margin`](/de/docs/Web/CSS/margin)-Eigenschaft für die Ränder eines Elements.

{{EmbedInteractiveExample("pages/css/scroll-margin.html")}}

## Bestandteilige Eigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- [`scroll-margin-bottom`](/de/docs/Web/CSS/scroll-margin-bottom)
- [`scroll-margin-left`](/de/docs/Web/CSS/scroll-margin-left)
- [`scroll-margin-right`](/de/docs/Web/CSS/scroll-margin-right)
- [`scroll-margin-top`](/de/docs/Web/CSS/scroll-margin-top)

## Syntax

```css
/* <length>-Werte */
scroll-margin: 10px;
scroll-margin: 1em 0.5em 1em 1em;

/* Globale Werte */
scroll-margin: inherit;
scroll-margin: initial;
scroll-margin: revert;
scroll-margin: revert-layer;
scroll-margin: unset;
```

### Werte

- {{cssxref("&lt;length&gt;")}}
  - : Ein Vorsprung vom entsprechenden Rand des Scroll-Containers.

## Beschreibung

Sie können die Wirkung von `scroll-margin` sehen, indem Sie zu einem Punkt zwischen zwei der "Seiten" des Beispielinhalts scrollen. Der angegebene Wert für `scroll-margin` bestimmt, wie viel von der Seite, die sich hauptsächlich außerhalb des Snapports befindet, sichtbar bleiben sollte.

Daher repräsentieren die `scroll-margin`-Werte Vorsprünge, die den Scroll-Snap-Bereich definieren, der verwendet wird, um dieses Kästchen an den Snapport zu schnappen. Der Scroll-Snap-Bereich wird bestimmt, indem das transformierte Rahmenkästchen genommen, sein rechteckiger Begrenzungskasten (achsenweise ausgerichtet im Koordinatenraum des Scroll-Containers) gefunden und dann die angegebenen Vorsprünge hinzugefügt werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfache Demonstration

Dieses Beispiel implementiert etwas sehr Ähnliches wie das interaktive Beispiel oben, außer dass wir hier erklären, wie es implementiert wird.

Das Ziel hier ist es, vier horizontal scrollende Blöcke zu erstellen, von denen der zweite und dritte an Ort und Stelle einrasten, nahe, aber nicht ganz am linken Rand jedes Blocks.

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

Die Hauptteile, die für das Scroll-Snapping relevant sind, sind `overflow-x: scroll`, was sicherstellt, dass die Inhalte scrollen und nicht verborgen werden, und `scroll-snap-type: x mandatory`, was vorgibt, dass das Scroll-Snapping entlang der horizontalen Achse erfolgen muss und das Scrollen immer an einem Snap-Punkt zum Stehen kommt.

Die Kind-Elemente sind wie folgt gestaltet:

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

Der relevanteste Teil hier ist `scroll-snap-align: start`, der spezifiziert, dass die linken Ränder (die "Starts" entlang der x-Achse, in unserem Fall) die festgelegten Snap-Punkte sind.

Zu guter Letzt spezifizieren wir die Scroll-Margin-Werte, einen anderen für die zweiten und dritten Kind-Elemente:

```css
.scroller > div:nth-child(2) {
  scroll-margin: 1rem;
}

.scroller > div:nth-child(3) {
  scroll-margin: 2rem;
}
```

Das bedeutet, dass beim Scrollen vorbei an den mittleren Kind-Elementen das Scrollen zu `1rem` außerhalb des linken Randes des zweiten `<div>` und `2rems` außerhalb des linken Randes des dritten `<div>` einrasten wird.

> [!NOTE]
> Hier setzen wir `scroll-margin` auf allen Seiten gleichzeitig, aber nur der Start-Rand ist wirklich relevant. Es würde hier genauso gut funktionieren, nur eine Scroll-Margin an diesem einen Rand zu setzen, zum Beispiel mit `scroll-margin-inline-start: 1rem` oder `scroll-margin: 0 0 0 1rem`.

#### Ergebnis

Versuchen Sie es selbst:

{{EmbedLiveSample('Simple_demonstration', '100%', 300)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS scroll snap](/de/docs/Web/CSS/CSS_scroll_snap)
- [Gut kontrolliertes Scrollen mit CSS scroll snap](https://web.dev/articles/css-scroll-snap)
