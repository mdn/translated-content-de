---
title: scroll-margin-inline
slug: Web/CSS/scroll-margin-inline
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}

Die `scroll-margin-inline` [Kurzschreibweise](/de/docs/Web/CSS/Shorthand_properties) legt die Scroll-Margen eines Elements in der Inline-Dimension fest.

{{EmbedInteractiveExample("pages/css/scroll-margin-inline.html")}}

## Zusammengesetzte Eigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- [`scroll-margin-inline-end`](/de/docs/Web/CSS/scroll-margin-inline-end)
- [`scroll-margin-inline-start`](/de/docs/Web/CSS/scroll-margin-inline-start)

## Syntax

```css
/* <length>-Werte */
scroll-margin-inline: 10px;
scroll-margin-inline: 1em 0.5em;

/* Globale Werte */
scroll-margin-inline: inherit;
scroll-margin-inline: initial;
scroll-margin-inline: revert;
scroll-margin-inline: revert-layer;
scroll-margin-inline: unset;
```

### Werte

- {{CSSXref("&lt;length&gt;")}}
  - : Ein Abstand von der entsprechenden Kante des Scroll-Containers.

## Beschreibung

Die scroll-margin-Werte stellen Abstände dar, die den Scroll-Snap-Bereich definieren, der verwendet wird, um diese Box an den Snapport auszurichten. Der Scroll-Snap-Bereich wird ermittelt, indem man die transformierte Randbox nimmt, ihre rechteckige Begrenzungsbox (achsenausgerichtet im Koordinatenraum des Scroll-Containers) findet und dann die angegebenen Abstände hinzufügt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfache Demonstration

Dieses Beispiel implementiert etwas sehr Ähnliches wie das oben interaktive Beispiel, wobei wir Ihnen hier erklären, wie es implementiert wird.

Das Ziel hier ist es, vier horizontal scrollende Blöcke zu erstellen, wobei sich der zweite und dritte Block fast, aber nicht ganz, am rechten Rand jedes Blocks einrasten.

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

Werfen wir einen Blick auf das CSS. Der äußere Container ist wie folgt gestylt:

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

Die Hauptteile, die für das Scroll-Snapping relevant sind, sind `overflow-x: scroll`, was sicherstellt, dass der Inhalt scrollt und nicht versteckt wird, und `scroll-snap-type: x mandatory`, das vorschreibt, dass das Scroll-Snapping entlang der horizontalen Achse erfolgen muss und das Scrollen immer an einem Snap-Punkt zum Stillstand kommt.

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

Der relevanteste Teil hier ist `scroll-snap-align: end`, welcher angibt, dass die rechten Kanten (die "Enden" entlang der x-Achse, in unserem Fall) die festgelegten Einrastpunkte sind.

Zuletzt spezifizieren wir die Scroll-Margin-Werte, einen anderen für das zweite und dritte Kindelement:

```css
.scroller > div:nth-child(2) {
  scroll-margin-inline: 1rem;
}

.scroller > div:nth-child(3) {
  scroll-margin-inline: 2rem;
}
```

Das bedeutet, dass beim Scrollen an den mittleren Kindelementen vorbei, das Scrollen an `1rem` außerhalb des Inline-Endrandes des zweiten `<div>` und `2rems` außerhalb des Inline-Endrandes des dritten `<div>` stoppt.

> [!NOTE]
> Hier setzen wir `scroll-margin` am Anfang _und_ Ende der Inline-Achse (x in unserem Fall), aber nur die Endkante ist wirklich relevant. Es würde hier genauso gut funktionieren, nur eine Scroll-Marge an dieser einen Kante zu setzen, zum Beispiel mit `scroll-margin-inline: 0 1rem` oder `scroll-margin-inline-end: 1rem`.

#### Ergebnis

Probieren Sie es selbst aus:

{{EmbedLiveSample('Simple_demonstration', '100%', 300)}}

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- [CSS scroll snap](/de/docs/Web/CSS/CSS_scroll_snap)
- [Gut kontrolliertes Scrollen mit CSS scroll snap](https://web.dev/articles/css-scroll-snap)
