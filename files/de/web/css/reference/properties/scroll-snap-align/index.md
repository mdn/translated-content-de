---
title: "`scroll-snap-align` CSS property"
short-title: scroll-snap-align
slug: Web/CSS/Reference/Properties/scroll-snap-align
l10n:
  sourceCommit: 6354422058e438a2599e4eab71eaec8eb40850fa
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`scroll-snap-align`** legt die Einrastposition der Box als Ausrichtung ihres {{Glossary("Scroll_snap#snap_area", "Einrastbereichs")}} fest.

{{InteractiveExample("CSS Demo: scroll-snap-align")}}

```css interactive-example-choice
scroll-snap-align: start;
```

```css interactive-example-choice
scroll-snap-align: end;
```

```css interactive-example-choice
scroll-snap-align: center;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div id="example-parent">
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

#example-parent {
  text-align: left;
  width: 250px;
  height: 250px;
  overflow-x: scroll;
  display: flex;
  box-sizing: border-box;
  border: 1px solid black;
  scroll-snap-type: x mandatory;
}

#example-parent > div {
  flex: 0 0 66%;
  width: 250px;
  background-color: rebeccapurple;
  color: white;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

#example-parent > div:nth-child(even) {
  background-color: white;
  color: rebeccapurple;
}
```

## Syntax

```css
/* Single keyword value */
scroll-snap-align: none;
scroll-snap-align: center;
scroll-snap-align: start;
scroll-snap-align: end;

/* Two keyword values */
scroll-snap-align: start end;
scroll-snap-align: end center;
scroll-snap-align: center start;

/* Global values */
scroll-snap-align: inherit;
scroll-snap-align: initial;
scroll-snap-align: revert;
scroll-snap-align: revert-layer;
scroll-snap-align: unset;
```

### Werte

Diese Eigenschaft wird als einer oder zwei der folgenden Schlüsselwortwerte angegeben, die durch Leerzeichen getrennt sind:

- `none`
  - : Die Box definiert keine Einrastposition in dieser Achse.
- `start`
  - : Die Startausrichtung des Scroll-{{Glossary("Scroll_snap#snap_area", "Einrastbereichs")}} dieser Box innerhalb des {{Glossary("Scroll_snap#snapport", "Snapports")}} des Scroll-Containers ist eine Einrastposition in dieser Achse.
- `end`
  - : Die Endausrichtung des Scroll-Einrastbereichs dieser Box innerhalb des Snapports des Scroll-Containers ist eine Einrastposition in dieser Achse.
- `center`
  - : Die zentrierte Ausrichtung des Scroll-Einrastbereichs dieser Box innerhalb des Snapports des Scroll-Containers ist eine Einrastposition in dieser Achse.

## Beschreibung

Die Eigenschaft `scroll-snap-align` legt die Einrastposition der Box als Ausrichtung ihres {{Glossary("Scroll_snap#snap_area", "Einrastbereichs")}} (als {{Glossary("alignment_subject", "Ausrichtungsobjekt")}}) innerhalb des Snapports ihres Snap-Containers (als {{Glossary("alignment_container", "Ausrichtungscontainer")}}) fest.

Für die Eigenschaft `scroll-snap-align` können ein oder zwei Werte angegeben werden. Wenn ein Wert festgelegt wird, wird er auf beide Block- und Inline-Achsen angewendet. Wenn zwei Werte festgelegt werden, steuert der erste Wert die Blockachse und der zweite Wert die Inline-Achse.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("scroll-snap-stop")}}
- {{cssxref("scroll-initial-target")}}
- Modul [CSS Scroll Snap](/de/docs/Web/CSS/Guides/Scroll_snap)
- [Gut kontrolliertes Scrollen mit CSS Scroll Snap](https://web.dev/articles/css-scroll-snap) auf web.dev (2018)
