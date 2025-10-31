---
title: scroll-snap-align
slug: Web/CSS/Reference/Properties/scroll-snap-align
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die Eigenschaft `scroll-snap-align` gibt die Schnapp-Position des Kastens als Ausrichtung seines {{Glossary("Scroll_snap#snap_area", "Schnappbereichs")}} (als {{Glossary("alignment_subject", "Ausrichtungs-Subjekt")}}) innerhalb des Schnapp-Ports seines Schnapp-Containers (als {{Glossary("alignment_container", "Ausrichtungs-Container")}}) an.

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

Für die Eigenschaft `scroll-snap-align` können ein oder zwei Werte angegeben werden. Wenn ein Wert festgelegt ist, wird er sowohl auf die Block- als auch auf die Inline-Achse angewendet. Wenn zwei Werte festgelegt sind, steuert der erste Wert die Block-Achse und der zweite Wert die Inline-Achse.

- `none`
  - : Der Kasten definiert keine Schnapp-Position in dieser Achse.
- `start`
  - : Die Startausrichtung des Schnappbereichs dieses Kastens innerhalb des Schnapp-Ports des Scroll-Containers ist eine Schnapp-Position in dieser Achse.
- `end`
  - : Die Endausrichtung des Schnappbereichs dieses Kastens innerhalb des Schnapp-Ports des Scroll-Containers ist eine Schnapp-Position in dieser Achse.
- `center`
  - : Die Mittelausrichtung des Schnappbereichs dieses Kastens innerhalb des Schnapp-Ports des Scroll-Containers ist eine Schnapp-Position in dieser Achse.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS scroll snap](/de/docs/Web/CSS/CSS_scroll_snap)
- [Gut kontrolliertes Scrollen mit CSS scroll snap](https://web.dev/articles/css-scroll-snap)
