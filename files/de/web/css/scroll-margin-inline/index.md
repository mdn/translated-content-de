---
title: scroll-margin-inline
slug: Web/CSS/scroll-margin-inline
l10n:
  sourceCommit: 7526c9b4f29818bdca7505de41a4883f4ada2707
---

{{CSSRef}}

Die `scroll-margin-inline` [Shorthand-Eigenschaft](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) legt die Scroll-Margen eines Elements in der Inline-Dimension fest.

{{EmbedInteractiveExample("pages/css/scroll-margin-inline.html")}}

## Bestandeigenschaften

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
  - : Ein Abstandsmaß von der entsprechenden Kante des Scroll-Containers.

## Beschreibung

Die Werte der Scroll-Marge stellen Abstände dar, die den Scroll-Schnappbereich definieren, der verwendet wird, um diese Box am {{Glossary("Scroll_snap#snapport", "Snapport")}} auszurichten. Der Scroll-Schnappbereich wird ermittelt, indem die transformierte Rahmenbox genommen wird, dann wird deren rechteckige Begrenzungsbox (achsenparallel im Koordinatenraum des Scroll-Containers) gefunden und die angegebenen Abstände werden hinzugefügt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Demonstration

Dieses Beispiel implementiert etwas sehr Ähnliches wie das interaktive Beispiel oben, aber hier erklären wir Ihnen, wie es implementiert ist.

Das Ziel hier ist es, vier horizontal scrollende Blöcke zu erstellen, von denen der zweite und dritte einrasten, nah aber nicht ganz am rechten Rand jedes Blocks.

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

Lassen Sie uns das CSS durchgehen. Der äußere Container wird wie folgt gestaltet:

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

Die Hauptteile, die für das Scroll-Snapping relevant sind, sind `overflow-x: scroll`, das sicherstellt, dass der Inhalt scrollt und nicht versteckt wird, und `scroll-snap-type: x mandatory`, das vorschreibt, dass Scroll-Snapping entlang der horizontalen Achse stattfinden muss und das Scrollen immer an einem Snap-Punkt endet.

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
  scroll-snap-align: end;
}

.scroller > div:nth-child(2n) {
  background-color: #fff;
  color: #663399;
}
```

Der relevanteste Teil hier ist `scroll-snap-align: end`, welches angibt, dass die rechten Kanten (die "Enden" entlang der x-Achse, in unserem Fall) die festgelegten Snap-Punkte sind.

Zum Schluss spezifizieren wir die Werte für die Scroll-Marge, unterschiedliche für das zweite und dritte Kind-Element:

```css
.scroller > div:nth-child(2) {
  scroll-margin-inline: 1rem;
}

.scroller > div:nth-child(3) {
  scroll-margin-inline: 2rem;
}
```

Dies bedeutet, dass beim Scrollen über die mittleren Kind-Elemente das Scrollen `1rem` außerhalb des Inline-Endrands des zweiten `<div>` und `2rem` außerhalb des Inline-Endrands des dritten `<div>` einrastet.

> [!NOTE]
> Hier setzen wir `scroll-margin` am Anfang _und_ Ende der Inline-Achse (x in unserem Fall), aber nur der Endrand ist wirklich relevant. Es würde genauso gut funktionieren, hier nur eine Scroll-Marge auf diesem einen Rand zu setzen, zum Beispiel mit `scroll-margin-inline: 0 1rem`, oder `scroll-margin-inline-end: 1rem`.

#### Ergebnis

Probieren Sie es selbst:

{{EmbedLiveSample('Basic_demonstration', '100%', 300)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS scroll snap](/de/docs/Web/CSS/CSS_scroll_snap)
- [Gut kontrolliertes Scrollen mit CSS scroll snap](https://web.dev/articles/css-scroll-snap)
