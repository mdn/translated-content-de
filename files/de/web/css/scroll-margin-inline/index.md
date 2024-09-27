---
title: scroll-margin-inline
slug: Web/CSS/scroll-margin-inline
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}

Die `scroll-margin-inline` [Kurzschreibweise](/de/docs/Web/CSS/Shorthand_properties) setzt die Scroll-Außenabstände eines Elements in der Inline-Dimension.

{{EmbedInteractiveExample("pages/css/scroll-margin-inline.html")}}

## Bestandeigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

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

Die scroll-margin-Werte stellen Abstände dar, die den Scroll-Snap-Bereich definieren, der zum Einrasten dieser Box in das Snapport verwendet wird. Der Scroll-Snap-Bereich wird durch die Umwandlung der Border-Box, das Finden seiner rechteckigen Begrenzungsbox (achsenparallel im Koordinatenraum des Scroll-Containers) und das Hinzufügen der festgelegten Abstände bestimmt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfache Demonstration

Dieses Beispiel implementiert etwas sehr Ähnliches wie das interaktive Beispiel oben, mit dem Unterschied, dass wir Ihnen hier erklären, wie es implementiert wird.

Das Ziel hier ist es, vier horizontal scrollende Blöcke zu erstellen, von denen der zweite und dritte einrasten, nahe, aber nicht ganz am rechten Rand jedes Blocks.

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

Gehen wir den CSS durch. Der äußere Container wird wie folgt gestylt:

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

Die Hauptteile, die für das Scroll-Snapping relevant sind, sind `overflow-x: scroll`, das sicherstellt, dass die Inhalte scrollen und nicht versteckt werden, und `scroll-snap-type: x mandatory`, das angibt, dass Scroll-Snapping entlang der horizontalen Achse erfolgen muss und das Scrollen immer auf einem Snap-Punkt enden wird.

Die Kindelemente werden folgendermaßen gestylt:

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

Der relevanteste Teil hier ist `scroll-snap-align: end`, das angibt, dass die rechten Kanten (die "Enden" entlang der x-Achse in unserem Fall) die vorgesehenen Snap-Punkte sind.

Zuletzt legen wir die Scroll-Margin-Werte fest, jeweils einen anderen für das zweite und dritte Kindelement:

```css
.scroller > div:nth-child(2) {
  scroll-margin-inline: 1rem;
}

.scroller > div:nth-child(3) {
  scroll-margin-inline: 2rem;
}
```

Das bedeutet, dass beim Scrollen über die mittleren Kindelemente das Scrollen `1rem` außerhalb des Inline-End-Randes des zweiten `<div>` und `2rems` außerhalb des Inline-End-Randes des dritten `<div>` einrastet.

> [!NOTE]
> Hier setzen wir `scroll-margin` an Anfang _und_ Ende der Inline-Achse (x in unserem Fall), aber nur der Endrand ist wirklich relevant. Es würde ebenso gut funktionieren, hier nur einen Scroll-Außenabstand an diesem einen Rand zu setzen, beispielsweise mit `scroll-margin-inline: 0 1rem` oder `scroll-margin-inline-end: 1rem`.

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
