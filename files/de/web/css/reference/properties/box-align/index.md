---
title: box-align
slug: Web/CSS/Reference/Properties/box-align
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{Non-standard_header}}{{Deprecated_Header}}

> [!WARNING]
> Dies ist eine Eigenschaft des ursprünglichen CSS flexible box layout Module-Entwurfs und wurde durch einen neueren Standard ersetzt.

Die **`box-align`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie ein Element seine Inhalte quer zu seinem Layout ausrichtet. Die Wirkung der Eigenschaft ist nur sichtbar, wenn zusätzlicher Raum in der Box vorhanden ist.

Informationen zum aktuellen Standard finden Sie unter [flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts).

Die Richtung des Layouts hängt von der Ausrichtung des Elements ab: horizontal oder vertikal.

## Syntax

```css
/* Keyword values */
box-align: start;
box-align: center;
box-align: end;
box-align: baseline;
box-align: stretch;

/* Global values */
box-lines: inherit;
box-lines: initial;
box-lines: unset;
```

Die `box-align` Eigenschaft wird als eines der unten aufgeführten Schlüsselwortwerte angegeben.

### Werte

- `start`
  - : Die Box richtet Inhalte am Anfang aus, wobei jeglicher zusätzlicher Raum am Ende bleibt.
- `center`
  - : Die Box richtet Inhalte in der Mitte aus und teilt jeglichen zusätzlichen Raum gleichmäßig zwischen Anfang und Ende.
- `end`
  - : Die Box richtet Inhalte am Ende aus, wobei jeglicher zusätzlicher Raum am Anfang bleibt.
- `baseline`
  - : Die Box richtet die Baselines der Inhalte aus (die Texte werden ausgerichtet). Dies gilt nur, wenn die Ausrichtung der Box horizontal ist.
- `stretch`
  - : Die Box dehnt die Inhalte so, dass kein zusätzlicher Raum in der Box vorhanden ist.

## Hinweise

Der Rand der Box, der als _Anfang_ für Ausrichtungszwecke bezeichnet wird, hängt von der Ausrichtung der Box ab:

- Für horizontale Elemente ist der _Anfang_ die obere Kante.
- Für vertikale Elemente ist der _Anfang_ die linke Kante.

Die dem Anfang gegenüberliegende Kante wird als _Ende_ bezeichnet.

Wenn die Ausrichtung durch das `align` Attribut des Elements gesetzt wird, wird der Stil ignoriert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntaxRaw(`box-align = start | center | end | baseline | stretch`)}}

## Beispiele

### Box-Ausrichtung festlegen

```html
<div class="example">
  <p>I will be second from the bottom of div.example, centered horizontally.</p>
  <p>I will be on the bottom of div.example, centered horizontally.</p>
</div>
```

```css
div.example {
  display: box; /* As specified */
  display: -moz-box; /* Mozilla */
  display: -webkit-box; /* WebKit */

  /* Make this box taller than the children,
     so there is room for the box-pack */
  height: 400px;

  /* Make this box wider than the children
     so there is room for the box-align */
  width: 300px;

  /* Children should be oriented vertically */
  box-orient: vertical; /* As specified */
  -moz-box-orient: vertical; /* Mozilla */
  -webkit-box-orient: vertical; /* WebKit */

  /* Align children to the horizontal center of this box */
  box-align: center; /* As specified */
  -moz-box-align: center; /* Mozilla */
  -webkit-box-align: center; /* WebKit */

  /* Pack children to the bottom of this box */
  box-pack: end; /* As specified */
  -moz-box-pack: end; /* Mozilla */
  -webkit-box-pack: end; /* WebKit */
}

div.example > p {
  /* Make children narrower than their parent,
     so there is room for the box-align */
  width: 200px;
}
```

## Spezifikationen

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("align-items")}}, {{cssxref("box-orient")}}, {{cssxref("box-direction")}}, {{cssxref("box-pack")}}
