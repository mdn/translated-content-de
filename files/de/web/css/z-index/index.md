---
title: z-index
slug: Web/CSS/z-index
l10n:
  sourceCommit: aac4966bd12c77281f9374bbfaf4e17e2680ac3b
---

{{CSSRef}}

Die **`z-index`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die z-Ordnung eines [positionierten](/de/docs/Web/CSS/position) Elements und seiner Nachfahren oder Flex- und Grid-Items fest. Sich überlappende Elemente mit einem größeren z-index überdecken diejenigen mit einem kleineren.

{{EmbedInteractiveExample("pages/css/z-index.html")}}

Für ein positioniertes Kästchen (d.h. eines mit jedem `position` außer `static`) gibt die `z-index`-Eigenschaft Folgendes an:

1. Das Stapel-Level des Kästchens im aktuellen [Stacking-Kontext](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context).
2. Ob das Kästchen einen lokalen Stacking-Kontext erzeugt.

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

Die `z-index`-Eigenschaft wird entweder als Schlüsselwort `auto` oder als `<integer>` angegeben.

### Werte

- `auto`
  - : Das Kästchen erzeugt keinen neuen lokalen Stacking-Kontext. Das Stapel-Level des generierten Kästchens im aktuellen Stacking-Kontext ist `0`.
- `<integer>`
  - : Dieses {{cssxref("&lt;integer&gt;")}} ist das Stapel-Level des generierten Kästchens im aktuellen Stacking-Kontext. Das Kästchen erzeugt auch einen lokalen Stacking-Kontext. Das bedeutet, dass die z-indexes der Nachfahren nicht mit den z-indexes von Elementen außerhalb dieses Elements verglichen werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Elemente visuell schichten

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
- [Verständnis der CSS z-indexes](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index)
