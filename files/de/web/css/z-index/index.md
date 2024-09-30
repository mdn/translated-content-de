---
title: z-index
slug: Web/CSS/z-index
l10n:
  sourceCommit: aac4966bd12c77281f9374bbfaf4e17e2680ac3b
---

{{CSSRef}}

Die **`z-index`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt die Z-Ordnung eines [positionierten](/de/docs/Web/CSS/position) Elements und seiner Nachkommen oder von Flex- und Gitter-Elementen fest. Überlappende Elemente mit einem größeren z-index überdecken solche mit einem kleineren.

{{EmbedInteractiveExample("pages/css/z-index.html")}}

Für ein positioniertes Feld (d.h. eines mit einer anderen `position` als `static`) gibt die `z-index`-Eigenschaft Folgendes an:

1. Die Stapel-Ebene des Feldes im aktuellen [Stacking-Kontext](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context).
2. Ob das Feld einen lokalen Stacking-Kontext erstellt.

## Syntax

```css
/* Keyword value */
z-index: auto;

/* <integer> values */
z-index: 0;
z-index: 3;
z-index: 289;
z-index: -1; /* Negative values to lower the priority */

/* Global values */
z-index: inherit;
z-index: initial;
z-index: revert;
z-index: revert-layer;
z-index: unset;
```

Die `z-index`-Eigenschaft wird entweder als das Schlüsselwort `auto` oder als `<integer>` angegeben.

### Werte

- `auto`
  - : Das Feld erstellt keinen neuen lokalen Stacking-Kontext. Die Stapel-Ebene des generierten Feldes im aktuellen Stacking-Kontext ist `0`.
- `<integer>`
  - : Dieses {{cssxref("&lt;integer&gt;")}} ist die Stapel-Ebene des generierten Feldes im aktuellen Stacking-Kontext. Das Feld erstellt auch einen lokalen Stacking-Kontext. Das bedeutet, dass die z-indexe der Nachkommen nicht mit den z-indexen der Elemente außerhalb dieses Elements verglichen werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Visuelle Schichtung von Elementen

#### HTML

```html
<div class="wrapper">
  <div class="dashed-box">Dashed box</div>
  <div class="gold-box">Gold box</div>
  <div class="green-box">Green box</div>
</div>
```

#### CSS

```css
.wrapper {
  position: relative;
}

.dashed-box {
  position: relative;
  z-index: 1;
  border: dashed;
  height: 8em;
  margin-bottom: 1em;
  margin-top: 2em;
}
.gold-box {
  position: absolute;
  z-index: 3; /* put .gold-box above .green-box and .dashed-box */
  background: gold;
  width: 80%;
  left: 60px;
  top: 3em;
}
.green-box {
  position: absolute;
  z-index: 2; /* put .green-box above .dashed-box */
  background: lightgreen;
  width: 20%;
  left: 65%;
  top: -25px;
  height: 7em;
  opacity: 0.9;
}
```

#### Ergebnis

{{EmbedLiveSample('Visually_layering_elements', '550', '200')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{Cssxref("position")}} Eigenschaft
- [Verständnis von CSS z-indexen](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index)
