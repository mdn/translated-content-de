---
title: z-index
slug: Web/CSS/z-index
l10n:
  sourceCommit: 9b9086cf753e2d5721fe1229ff6f767ccf512f97
---

{{CSSRef}}

Die **`z-index`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Z-Ordnung eines [positionierten](/de/docs/Web/CSS/position) Elements und seiner Nachkommen oder von Flex- und Gitterelementen fest. Überlappende Elemente mit einem größeren z-index überdecken diejenigen mit einem kleineren Wert.

{{EmbedInteractiveExample("pages/css/z-index.html")}}

Für ein positioniertes Feld (das heißt, eines mit einer anderen `position` als `static`), gibt die `z-index` Eigenschaft Folgendes an:

1. Das Stapelniveau des Feldes im aktuellen [Stapelkonte­xt](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context).
2. Ob das Feld einen lokalen Stapelkontext festlegt.

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

Die `z-index` Eigenschaft wird entweder als das Schlüsselwort `auto` oder als ein `<integer>` angegeben.

### Werte

- `auto`
  - : Das Feld erstellt keinen neuen lokalen Stapelkontext. Das Stapelniveau des generierten Feldes im aktuellen Stapelkontext ist `0`.
- `<integer>`
  - : Dieses {{cssxref("&lt;integer&gt;")}} ist das Stapelniveau des generierten Feldes im aktuellen Stapelkontext. Das Feld erstellt auch einen lokalen Stapelkontext. Dies bedeutet, dass die z-indexe der Nachkommen nicht mit den z-indexen von Elementen außerhalb dieses Elements verglichen werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Visuelles Schichten von Elementen

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
