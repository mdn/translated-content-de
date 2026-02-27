---
title: scroll-snap-align
slug: Web/CSS/Reference/Properties/scroll-snap-align
l10n:
  sourceCommit: a14f56b06eabf3b182ae4bc0e02634a8ccc01f20
---

Die Eigenschaft `scroll-snap-align` legt die Snap-Position des Kastens als Ausrichtung seines {{Glossary("Scroll_snap#snap_area", "Snap-Bereichs")}} (als {{Glossary("alignment_subject", "Ausrichtungsobjekt")}}) innerhalb des Snap-Ports des Snap-Containers (als {{Glossary("alignment_container", "Ausrichtungscontainer")}}) fest.

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

Für die Eigenschaft `scroll-snap-align` können ein oder zwei Werte angegeben werden. Wenn ein Wert festgelegt ist, wird er sowohl auf die Block- als auch die Inline-Achse angewendet. Wenn zwei Werte festgelegt sind, steuert der erste Wert die Block-Achse und der zweite Wert steuert die Inline-Achse.

- `none`
  - : Der Kasten definiert keine Snap-Position in dieser Achse.
- `start`
  - : Die Startausrichtung des Scroll-Snap-Bereichs dieses Kastens innerhalb des {{Glossary("Scroll_snap#snapport", "Snap-Ports")}} des Scroll-Containers ist eine Snap-Position in dieser Achse.
- `end`
  - : Die Endausrichtung des Scroll-Snap-Bereichs dieses Kastens innerhalb des Snap-Ports des Scroll-Containers ist eine Snap-Position in dieser Achse.
- `center`
  - : Die Mittelausrichtung des Scroll-Snap-Bereichs dieses Kastens innerhalb des Snap-Ports des Scroll-Containers ist eine Snap-Position in dieser Achse.

## Formelle Definition

{{cssinfo}}

## Formelle Syntax

{{csssyntax}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("scroll-snap-stop")}}
- {{cssxref("scroll-initial-target")}}
- [CSS Scroll Snap](/de/docs/Web/CSS/Guides/Scroll_snap) Modul
- [Gut kontrolliertes Scrollen mit CSS Scroll Snap](https://web.dev/articles/css-scroll-snap) auf web.dev (2018)
