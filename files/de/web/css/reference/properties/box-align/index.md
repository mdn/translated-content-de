---
title: box-align
slug: Web/CSS/Reference/Properties/box-align
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{Non-standard_header}}{{Deprecated_Header}}

> [!WARNING]
> Dies ist eine Eigenschaft des ursprünglichen CSS flexible box layout-Modulschaftsentwurfs und wurde durch einen neueren Standard ersetzt.

Die **`box-align`**-[CSS](/de/docs/Web/CSS) Eigenschaft gibt an, wie ein Element seine Inhalte in einer senkrechten Richtung über sein Layout ausrichtet. Der Effekt der Eigenschaft ist nur sichtbar, wenn zusätzlicher Raum in der Box vorhanden ist.

Siehe [flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) für Informationen über den aktuellen Standard.

Die Richtung des Layouts hängt von der Orientierung des Elements ab: horizontal oder vertikal.

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

Die `box-align` Eigenschaft wird als einer der unten aufgeführten Schlüsselwortwerte angegeben.

### Werte

- `start`
  - : Die Box richtet Inhalte am Anfang aus und lässt zusätzlichen Raum am Ende.
- `center`
  - : Die Box zentriert Inhalte, indem zusätzlicher Raum gleichmäßig zwischen Anfang und Ende aufgeteilt wird.
- `end`
  - : Die Box richtet Inhalte am Ende aus und lässt zusätzlichen Raum am Anfang.
- `baseline`
  - : Die Box richtet die Baselines der Inhalte (Textausrichtung) aus. Dies gilt nur, wenn die Orientierung der Box horizontal ist.
- `stretch`
  - : Die Box dehnt die Inhalte so aus, dass kein zusätzlicher Raum in der Box verbleibt.

## Hinweise

Der Rand der Box, der als _Start_ für Ausrichtungszwecke bezeichnet wird, hängt von der Orientierung der Box ab:

- Für horizontale Elemente ist der _Start_ der obere Rand.
- Für vertikale Elemente ist der _Start_ der linke Rand.

Der dem Start gegenüberliegende Rand wird als _Ende_ bezeichnet.

Wenn die Ausrichtung über das `align`-Attribut des Elements festgelegt wird, wird der Stil ignoriert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntaxRaw(`box-align = start | center | end | baseline | stretch`)}}

## Beispiele

### Einstellung der Box-Ausrichtung

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
