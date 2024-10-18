---
title: scroll-margin
slug: Web/CSS/scroll-margin
l10n:
  sourceCommit: 2b112aef57df0649462db5d9f47d782a7aa1f25c
---

{{CSSRef}}

Die **`scroll-margin`**-[Kurzschreibweise](/de/docs/Web/CSS/Shorthand_properties) setzt alle Scrollränder eines Elements gleichzeitig und weist Werte ähnlich wie die [`margin`](/de/docs/Web/CSS/margin)-Eigenschaft für die Ränder eines Elements zu.

{{EmbedInteractiveExample("pages/css/scroll-margin.html")}}

## Bestandteileigenschaften

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
  - : Ein Versatz vom entsprechenden Rand des Scrollcontainers.

## Beschreibung

Sie können den Effekt von `scroll-margin` sehen, indem Sie zu einem Punkt zwischen zwei der "Seiten" des Beispielinhalts scrollen. Der für `scroll-margin` angegebene Wert bestimmt, wie viel von der Seite, die hauptsächlich außerhalb des {{Glossary("Scroll_snap#snapport", "snapports")}} ist, sichtbar bleiben soll.

Daher stellen die `scroll-margin`-Werte Versätze dar, die den Scroll-Schnappbereich definieren, der für das Einrasten dieses Blocks in den Snapport verwendet wird. Der Scroll-Schnappbereich wird bestimmt, indem die transformierte Randbox genommen, ihr rechteckiger Begrenzungsrahmen (achsenbündig im Koordinatenraum des Scrollcontainers) gefunden und dann die angegebenen Versätze hinzugefügt werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfache Demonstration

Dieses Beispiel implementiert etwas, das dem interaktiven Beispiel oben sehr ähnlich ist, außer dass wir Ihnen hier erklären, wie es implementiert wird.

Das Ziel hier ist es, vier horizontal scrollende Blöcke zu erstellen, von denen der zweite und dritte an ihren Platz einrasten, nicht ganz links vom jeweiligen Block.

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

Lassen Sie uns den CSS-Rundgang durchführen. Der äußere Container wird wie folgt gestaltet:

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

Die Hauptteile, die für das Scroll-Snapping relevant sind, sind `overflow-x: scroll`, das sicherstellt, dass die Inhalte scrollen und nicht verborgen werden, und `scroll-snap-type: x mandatory`, das vorschreibt, dass das Scroll-Snapping entlang der horizontalen Achse erfolgen muss, und das Scrollen wird immer an einem Snap-Punkt zum Stillstand kommen.

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

Der relevanteste Teil hier ist `scroll-snap-align: start`, was spezifiziert, dass die linken Kanten (die "Starts" entlang der x-Achse, in unserem Fall) die bezeichneten Snap-Punkte sind.

Zuletzt spezifizieren wir die Scrollrand-Werte, einen anderen für das zweite und dritte Kind-Element:

```css
.scroller > div:nth-child(2) {
  scroll-margin: 1rem;
}

.scroller > div:nth-child(3) {
  scroll-margin: 2rem;
}
```

Das bedeutet, dass beim Scrollen an den mittleren Kind-Elementen das Scrollen zu `1rem` außerhalb der linken Kante des zweiten `<div>` einrastet, und `2rems` außerhalb der linken Kante des dritten `<div>`.

> [!NOTE]
> Hier setzen wir `scroll-margin` auf allen Seiten gleichzeitig, aber nur der Startpunkt ist wirklich relevant. Es würde ebenso gut funktionieren, hier nur einen Scrollrand an dieser einen Kante zu setzen, z.B. mit `scroll-margin-inline-start: 1rem`, oder `scroll-margin: 0 0 0 1rem`.

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
