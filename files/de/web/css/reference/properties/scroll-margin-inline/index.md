---
title: scroll-margin-inline
slug: Web/CSS/Reference/Properties/scroll-margin-inline
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

Die `scroll-margin-inline` [Kurzeigenschaft](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) setzt die Scroll-Margen eines Elements in der Inline-Dimension.

{{InteractiveExample("CSS Demo: scroll-margin-inline")}}

```css interactive-example-choice
scroll-margin-inline: 0;
```

```css interactive-example-choice
scroll-margin-inline: 40px 20px;
```

```css interactive-example-choice
scroll-margin-inline: 4em 0;
```

```css interactive-example-choice
scroll-margin-inline: 0px 3em;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="scroller">
    <div>1</div>
    <div id="example-element">2</div>
    <div>3</div>
  </div>
  <div class="info">Scroll »</div>
</section>
```

```css interactive-example
.default-example {
  flex-wrap: wrap;
}

.default-example .info {
  width: 100%;
  padding: 0.5em 0;
  font-size: 90%;
}

.scroller {
  text-align: left;
  width: 250px;
  height: 250px;
  overflow-x: scroll;
  display: flex;
  box-sizing: border-box;
  border: 1px solid black;
  scroll-snap-type: x mandatory;
}

.scroller > div {
  flex: 0 0 250px;
  width: 250px;
  background-color: rebeccapurple;
  color: white;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-snap-align: end;
}

.scroller > div:nth-child(even) {
  background-color: white;
  color: rebeccapurple;
}
```

## Zugehörige Eigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- {{cssxref("scroll-margin-inline-end")}}
- {{cssxref("scroll-margin-inline-start")}}

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

Die Werte für die Scroll-Margen repräsentieren Abstände, die den Scroll-Snap-Bereich definieren, der für das Einrasten dieses Blocks zum {{Glossary("Scroll_snap#snapport", "Snapport")}} verwendet wird. Der Scroll-Snap-Bereich wird ermittelt, indem der transformierte Randrahmen genommen, dessen rechteckiges Begrenzungsfeld (achsenparallel im Koordinatenraum des Scroll-Containers) gefunden wird, und dann die angegebenen Abstände hinzugefügt werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Demonstration

Dieses Beispiel implementiert etwas sehr ähnliches wie das interaktive Beispiel oben, allerdings erklären wir hier, wie es implementiert wird.

Das Ziel ist es, vier horizontal scrollende Blöcke zu erstellen, wobei der zweite und dritte Block einrasten, nahe, aber nicht ganz am rechten Rand jedes Blocks.

#### HTML

Das HTML beinhaltet einen Scroller mit vier Kind-Elementen:

```html
<div class="scroller">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
</div>
```

#### CSS

Lassen Sie uns den CSS durchgehen. Der äußere Container ist so gestylt:

```css
.scroller {
  text-align: left;
  width: 250px;
  height: 250px;
  overflow-x: scroll;
  display: flex;
  box-sizing: border-box;
  border: 1px solid black;
  scroll-snap-type: x mandatory;
}
```

Die Hauptteile, die für das Scroll-Snapping relevant sind, sind `overflow-x: scroll`, was sicherstellt, dass die Inhalte scrollen und nicht verborgen werden, und `scroll-snap-type: x mandatory`, was vorschreibt, dass das Scroll-Snapping entlang der horizontalen Achse erfolgen muss, und das Scrollen immer auf einem Snap-Punkt zum Stillstand kommt.

Die Kind-Elemente sind wie folgt gestylt:

```css
.scroller > div {
  flex: 0 0 250px;
  width: 250px;
  background-color: rebeccapurple;
  color: white;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-snap-align: end;
}

.scroller > div:nth-child(2n) {
  background-color: white;
  color: rebeccapurple;
}
```

Der relevanteste Teil hier ist `scroll-snap-align: end`, welches angibt, dass die rechten Kanten (die "Enden" entlang der x-Achse, in unserem Fall) die vorgesehenen Snap-Punkte sind.

Zuletzt spezifizieren wir die Scroll-Margen-Werte, einen anderen für das zweite und dritte Kind-Element:

```css
.scroller > div:nth-child(2) {
  scroll-margin-inline: 1rem;
}

.scroller > div:nth-child(3) {
  scroll-margin-inline: 2rem;
}
```

Das bedeutet, dass beim Scrollen über die mittleren Kind-Elemente das Scrollen bei `1rem` außerhalb des Inline-Endrands des zweiten `<div>` und `2rems` außerhalb des Inline-Endrands des dritten `<div>` einrastet.

> [!NOTE]
> Hier setzen wir `scroll-margin` am Anfang _und_ Ende der Inline-Achse (x in unserem Fall), aber nur der Endrand ist wirklich relevant. Es würde hier genauso gut funktionieren, nur eine Scroll-Marge an diesem einen Rand zu setzen, zum Beispiel mit `scroll-margin-inline: 0 1rem` oder `scroll-margin-inline-end: 1rem`.

#### Ergebnis

Probieren Sie es selbst aus:

{{EmbedLiveSample('Basic_demonstration', '100%', 300)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS scroll snap](/de/docs/Web/CSS/Guides/Scroll_snap)
- [Gut kontrolliertes Scrollen mit CSS scroll snap](https://web.dev/articles/css-scroll-snap)
