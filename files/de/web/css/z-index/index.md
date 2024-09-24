---
title: z-index
slug: Web/CSS/z-index
l10n:
  sourceCommit: aac4966bd12c77281f9374bbfaf4e17e2680ac3b
---

{{CSSRef}}

Die **`z-index`**-Eigenschaft ([CSS](/de/docs/Web/CSS)) legt die Stapelreihenfolge eines [positionierten](/de/docs/Web/CSS/position) Elements und seiner Nachkommen oder Flex- und Gitter-Elemente fest. Überlappende Elemente mit einem größeren `z-index` überdecken solche mit einem kleineren.

{{EmbedInteractiveExample("pages/css/z-index.html")}}

Für ein positioniertes Element (also eines mit einem anderen `position` als `static`) gibt die `z-index`-Eigenschaft Folgendes an:

1. Die Stapel-Ebene des Elements im aktuellen [Stapelkontext](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context).
2. Ob das Element einen lokalen Stapelkontext erstellt.

## Syntax

```css
/* Schlüsselwortwert */
z-index: auto;

/* <integer>-Werte */
z-index: 0;
z-index: 3;
z-index: 289;
z-index: -1; /* Negative Werte zur Senkung der Priorität */

/* Globale Werte */
z-index: inherit;
z-index: initial;
z-index: revert;
z-index: revert-layer;
z-index: unset;
```

Die `z-index`-Eigenschaft wird entweder als Schlüsselwort `auto` oder als `<integer>` angegeben.

### Werte

- `auto`
  - : Das Element erstellt keinen neuen lokalen Stapelkontext. Die Stapel-Ebene des generierten Elements im aktuellen Stapelkontext ist `0`.
- `<integer>`
  - : Dieses {{cssxref("&lt;integer&gt;")}} ist die Stapel-Ebene des generierten Elements im aktuellen Stapelkontext. Das Element erstellt auch einen lokalen Stapelkontext. Das bedeutet, dass die `z-index`-Werte der Nachkommen nicht mit den `z-index`-Werten von Elementen außerhalb dieses Elements verglichen werden.

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

- CSS-Eigenschaft {{Cssxref("position")}}
- [Verständnis von CSS z-indexes](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index)
