---
title: scroll-margin-inline
slug: Web/CSS/scroll-margin-inline
l10n:
  sourceCommit: 919d97a4bda8004f63f655d3f9576c27a82c8a2a
---

{{CSSRef}}

Die `scroll-margin-inline` [Kurzform Eigenschaft](/de/docs/Web/CSS/Shorthand_properties) setzt die Scroll-Margen eines Elements in der Inline-Dimension.

{{EmbedInteractiveExample("pages/css/scroll-margin-inline.html")}}

## Bestandteileigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- [`scroll-margin-inline-end`](/de/docs/Web/CSS/scroll-margin-inline-end)
- [`scroll-margin-inline-start`](/de/docs/Web/CSS/scroll-margin-inline-start)

## Syntax

```css
/* <length> values */
scroll-margin-inline: 10px;
scroll-margin-inline: 1em 0.5em;

/* Global values */
scroll-margin-inline: inherit;
scroll-margin-inline: initial;
scroll-margin-inline: revert;
scroll-margin-inline: revert-layer;
scroll-margin-inline: unset;
```

### Werte

- {{CSSXref("&lt;length&gt;")}}
  - : Ein Abstand vom entsprechenden Rand des Scroll-Containers.

## Beschreibung

Die scroll-margin-Werte repräsentieren Abstände, die den Scroll-Snap-Bereich definieren, der zum Einrasten dieses Kastens am {{Glossary("Scroll_snap#snapport", "Snapport")}} verwendet wird. Der Scroll-Snap-Bereich wird bestimmt, indem der transformierte Randkasten genommen wird, um dessen rechteckige Begrenzungsbox zu finden (achsenkonform im Koordinatenraum des Scroll-Containers), und dann die angegebenen Abstände hinzugefügt werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Demonstration

Dieses Beispiel implementiert etwas sehr Ähnliches wie das interaktive Beispiel oben, außer dass wir Ihnen hier erklären, wie es implementiert wird.

Das Ziel hier ist es, vier horizontal scrollbare Blöcke zu erstellen, wobei der zweite und dritte Block einrasten, fast, aber nicht ganz, am rechten Ende jedes Blocks.

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

Gehen wir den CSS-Code durch. Der äußere Container ist folgendermaßen gestaltet:

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

Die Hauptteile, die für das Scroll-Snapping relevant sind, sind `overflow-x: scroll`, was sicherstellt, dass der Inhalt scrollt und nicht verborgen wird, und `scroll-snap-type: x mandatory`, was vorschreibt, dass das Scroll-Snapping entlang der horizontalen Achse erfolgen muss und das Scrollen immer an einem Snap-Punkt endet.

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

Der relevanteste Teil hier ist `scroll-snap-align: end`, was angibt, dass die rechten Kanten (die "Endpunkte" entlang der x-Achse, in unserem Fall) die bezeichneten Schnapp-Punkte sind.

Zuletzt spezifizieren wir die Scroll-Margen-Werte, einen anderen für das zweite und dritte Kindelement:

```css
.scroller > div:nth-child(2) {
  scroll-margin-inline: 1rem;
}

.scroller > div:nth-child(3) {
  scroll-margin-inline: 2rem;
}
```

Das bedeutet, dass beim Scrollen an den mittleren Kindelementen vorbei das Scrollen auf `1rem` außerhalb des Inline-Endes des zweiten `<div>` und `2rems` außerhalb des Inline-Endes des dritten `<div>` einrastet.

> [!NOTE]
> Hier setzen wir `scroll-margin` sowohl am Anfang _als auch_ am Ende der Inline-Achse (x in unserem Fall), jedoch ist nur die Endkante wirklich relevant. Es würde hier genauso gut funktionieren, nur eine Scroll-Marge an dieser einen Kante zu setzen, beispielsweise mit `scroll-margin-inline: 0 1rem` oder `scroll-margin-inline-end: 1rem`.

#### Ergebnis

Versuchen Sie es selbst:

{{EmbedLiveSample('Basic_demonstration', '100%', 300)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS scroll snap](/de/docs/Web/CSS/CSS_scroll_snap)
- [Gut kontrolliertes Scrollen mit CSS scroll snap](https://web.dev/articles/css-scroll-snap)
