---
title: scroll-margin-inline
slug: Web/CSS/scroll-margin-inline
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}

Die CSS-Kurzschreibweise `scroll-margin-inline` legt die Scroll-Margen eines Elements in der Inline-Dimension fest.

{{EmbedInteractiveExample("pages/css/scroll-margin-inline.html")}}

## Zusammengesetzte Eigenschaften

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
  - : Ein Versatz vom entsprechenden Rand des Scroll-Containers.

## Beschreibung

Die Werte für die Scroll-Marge stellen Versätze dar, die den Scroll-Snap-Bereich definieren, der für das Einrasten dieses Kastens in den Snapport verwendet wird. Der Scroll-Snap-Bereich wird bestimmt, indem der transformierte Rahmenkasten genommen, dessen rechteckiger Begrenzungskasten (achsenparallel im Koordinatenraum des Scroll-Containers) gefunden und dann die angegebenen Versätze hinzugefügt werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfache Demonstration

Dieses Beispiel implementiert etwas sehr Ähnliches zum obigen interaktiven Beispiel, außer dass wir hier erklären werden, wie es umgesetzt wird.

Das Ziel hierbei ist es, vier horizontal scrollende Blöcke zu erstellen, von denen der zweite und dritte einrasten, nah, aber nicht ganz am rechten Rand jedes Blocks.

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

Gehen wir den CSS-Code durch. Der äußere Container wird wie folgt gestylt:

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

Die Hauptteile, die für das Scroll-Snapping relevant sind, sind `overflow-x: scroll`, was sicherstellt, dass die Inhalte scrollen und nicht verborgen werden, und `scroll-snap-type: x mandatory`, was festlegt, dass das Scroll-Snapping entlang der horizontalen Achse erfolgen muss und das Scrollen immer an einem Snap-Punkt endet.

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
  scroll-snap-align: end;
}

.scroller > div:nth-child(2n) {
  background-color: #fff;
  color: #663399;
}
```

Der relevanteste Teil hier ist `scroll-snap-align: end`, was angibt, dass die rechten Randseiten (die "Enden" entlang der x-Achse, in unserem Fall) die vorgesehenen Snap-Punkte sind.

Zuletzt geben wir die Scroll-Margenwerte an, für das zweite und dritte Kindelement jeweils unterschiedlich:

```css
.scroller > div:nth-child(2) {
  scroll-margin-inline: 1rem;
}

.scroller > div:nth-child(3) {
  scroll-margin-inline: 2rem;
}
```

Dies bedeutet, dass beim Scrollen an den mittleren Kindelementen das Scrollen auf `1rem` außerhalb der Inline-Endkante des zweiten `<div>` und `2rems` außerhalb der Inline-Endkante des dritten `<div>` einrastet.

> [!NOTE]
> Hier setzen wir `scroll-margin` am Anfang _und_ Ende der Inline-Achse (x in unserem Fall), aber nur die Endkante ist wirklich relevant. Es würde hier ebenso funktionieren, nur eine Scroll-Marge auf dieser einen Kante zu setzen, zum Beispiel mit `scroll-margin-inline: 0 1rem`, oder `scroll-margin-inline-end: 1rem`.

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
