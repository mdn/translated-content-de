---
title: scroll-margin
slug: Web/CSS/scroll-margin
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}

Die **`scroll-margin`** [Kurzschreibweise](/de/docs/Web/CSS/Shorthand_properties) legt alle Scroll-Ränder eines Elements auf einmal fest, indem Werte ähnlich wie bei der [`margin`](/de/docs/Web/CSS/margin)-Eigenschaft für die Ränder eines Elements zugewiesen werden.

{{EmbedInteractiveExample("pages/css/scroll-margin.html")}}

## Bestandteile der Eigenschaften

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
  - : Ein Abstand vom entsprechenden Rand des Scroll-Containers.

## Beschreibung

Sie können die Wirkung von `scroll-margin` sehen, indem Sie zu einem Punkt zwischen zwei "Seiten" des Inhalts des Beispiels scrollen. Der für `scroll-margin` angegebene Wert bestimmt, wie viel von der Seite, die sich hauptsächlich außerhalb des Snap-Ports befindet, sichtbar bleiben soll.

Die `scroll-margin`-Werte repräsentieren daher Abstände, die den Scroll-Snap-Bereich definieren, der für das Anpassen dieses Kastens an den Snap-Port verwendet wird. Der Scroll-Snap-Bereich wird bestimmt, indem der transformierte Rahmenkasten genommen, seine rechteckige Begrenzung (axisausrichtend im Koordinatenraum des Scroll-Containers) gefunden und dann die angegebenen Abstände hinzugefügt werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfache Demonstration

Dieses Beispiel implementiert etwas sehr Ähnliches wie das obige interaktive Beispiel, außer dass wir Ihnen hier erklären, wie es implementiert ist.

Das Ziel ist es, vier horizontal scrollbare Blöcke zu erstellen, von denen der zweite und der dritte einrasten, nahe aber nicht ganz an der linken Seite jedes Blocks.

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

Lassen Sie uns den CSS durchgehen. Der äußere Container wird so gestaltet:

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

Die Hauptteile, die für das Scroll-Snapping relevant sind, sind `overflow-x: scroll`, was sicherstellt, dass der Inhalt scrollen kann und nicht verborgen wird, und `scroll-snap-type: x mandatory`, das vorgibt, dass das Scroll-Snapping entlang der horizontalen Achse erfolgen muss und der Scrolling-Vorgang immer an einem Snap-Punkt zum Stillstand kommen wird.

Die Kind-Elemente werden wie folgt gestaltet:

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

Der relevanteste Teil hier ist `scroll-snap-align: start`, der angibt, dass die linken Ränder (die "Starts" entlang der x-Achse, in unserem Fall) die festgelegten Snap-Punkte sind.

Zuletzt spezifizieren wir die Scroll-Randwerte, die sich für das zweite und dritte Kind-Element unterscheiden:

```css
.scroller > div:nth-child(2) {
  scroll-margin: 1rem;
}

.scroller > div:nth-child(3) {
  scroll-margin: 2rem;
}
```

Dies bedeutet, dass beim Scrollen an den mittleren Kind-Elementen das Scrolling bei `1rem` außerhalb der linken Kante des zweiten `<div>` und `2rems` außerhalb der linken Kante des dritten `<div>` einrastet.

> [!NOTE]
> Hier setzen wir `scroll-margin` auf allen Seiten gleichzeitig, aber nur der Start-Rand ist wirklich relevant. Es würde genauso gut funktionieren, hier nur auf dieser einen Kante einen Scroll-Rand zu setzen, zum Beispiel mit `scroll-margin-inline-start: 1rem` oder `scroll-margin: 0 0 0 1rem`.

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
