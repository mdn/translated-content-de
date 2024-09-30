---
title: scroll-margin
slug: Web/CSS/scroll-margin
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}

Die **`scroll-margin`**-[Kurzschreibweise](/de/docs/Web/CSS/Shorthand_properties) setzt alle Scrollabstände eines Elements gleichzeitig, indem sie Werte ähnlich wie die [`margin`](/de/docs/Web/CSS/margin)-Eigenschaft für die Abstände eines Elements zuweist.

{{EmbedInteractiveExample("pages/css/scroll-margin.html")}}

## Bestandteileigenschaften

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
  - : Ein Abstand von der entsprechenden Kante des Scroll-Containers.

## Beschreibung

Sie können die Wirkung von `scroll-margin` sehen, indem Sie zu einem Punkt zwischen zwei der "Seiten" des Inhalts des Beispiels scrollen. Der für `scroll-margin` festgelegte Wert bestimmt, wie viel von der Seite, die hauptsächlich außerhalb des Snapports liegt, sichtbar bleiben soll.

Die `scroll-margin`-Werte repräsentieren daher die Abstände, die den Scroll-Snap-Bereich definieren, der zum Einrasten dieses Kästchens im Snapport verwendet wird. Der Scroll-Snap-Bereich wird bestimmt, indem die transformierte Rahmenbox genommen, ihr rechteckiger Begrenzungsrahmen (achsenweise ausgerichtet im Koordinatenraum des Scroll-Containers) gefunden und dann die angegebenen Abstände hinzugefügt werden.

## Formale Definition

{{cssinfo}}

## Formaler Syntax

{{csssyntax}}

## Beispiele

### Einfache Demonstration

Dieses Beispiel implementiert etwas sehr Ähnliches wie das interaktive Beispiel oben, außer dass hier erklärt wird, wie es implementiert wurde.

Das Ziel ist es, vier horizontal scrollbare Blöcke zu erstellen, von denen der zweite und dritte in der Nähe, aber nicht ganz am linken Rand jedes Blocks, einrasten.

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

Gehen wir den CSS-Code durch. Der äußere Container wird folgendermaßen gestaltet:

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

Die Hauptbestandteile, die für das Scroll-Snapping relevant sind, sind `overflow-x: scroll`, das sicherstellt, dass die Inhalte scrollen und nicht verborgen werden, und `scroll-snap-type: x mandatory`, das vorschreibt, dass ein Scroll-Snapping entlang der horizontalen Achse erfolgen muss und das Scrollen immer an einem Snap-Punkt enden wird.

Die Kindelemente werden wie folgt gestaltet:

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

Der relevanteste Teil hier ist `scroll-snap-align: start`, das angibt, dass die linken Kanten (die "Starts" entlang der x-Achse, in unserem Fall) die vorgesehenen Snap-Punkte sind.

Zum Schluss spezifizieren wir die Werte für die Scroll-Abstände, einen unterschiedlichen für das zweite und dritte Kindelement:

```css
.scroller > div:nth-child(2) {
  scroll-margin: 1rem;
}

.scroller > div:nth-child(3) {
  scroll-margin: 2rem;
}
```

Dies bedeutet, dass beim Scrollen an den mittleren Kindelementen vorbei das Scrollen bei `1rem` außerhalb der linken Kante des zweiten `<div>` und `2rems` außerhalb der linken Kante des dritten `<div>` einrasten wird.

> [!NOTE]
> Hier setzen wir `scroll-margin` auf allen Seiten gleichzeitig, aber nur die Startkante ist wirklich relevant. Es würde hier genauso gut funktionieren, nur auf dieser einen Kante ein Scroll-Margin einzustellen, zum Beispiel mit `scroll-margin-inline-start: 1rem` oder `scroll-margin: 0 0 0 1rem`.

#### Ergebnis

Probieren Sie es selbst aus:

{{EmbedLiveSample('Simple_demonstration', '100%', 300)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS scroll snap](/de/docs/Web/CSS/CSS_scroll_snap)
- [Gut gesteuertes Scrollen mit CSS scroll snap](https://web.dev/articles/css-scroll-snap)
