---
title: box-align
slug: Web/CSS/box-align
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{Non-standard_header}}{{Deprecated_Header}}

> [!WARNING]
> Dies ist eine Eigenschaft des ursprünglichen CSS Flexible Box Layout Modul-Entwurfs und wurde durch einen neueren Standard ersetzt.

Die **`box-align`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie ein Element seine Inhalte in einer senkrechten Richtung innerhalb seines Layouts ausrichtet. Die Wirkung der Eigenschaft ist nur sichtbar, wenn zusätzlicher Platz im Kasten vorhanden ist.

Weitere Informationen zum aktuellen Standard finden Sie unter [flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox).

Die Ausrichtung des Layouts hängt von der Orientierung des Elements ab: horizontal oder vertikal.

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
  - : Der Kasten richtet die Inhalte am Anfang aus, wodurch jeglicher zusätzliche Platz am Ende verbleibt.
- `center`
  - : Der Kasten richtet die Inhalte in der Mitte aus und teilt jeglichen zusätzlichen Platz gleichmäßig zwischen Anfang und Ende.
- `end`
  - : Der Kasten richtet die Inhalte am Ende aus, wodurch jeglicher zusätzliche Platz am Anfang verbleibt.
- `baseline`
  - : Der Kasten richtet die Baselines der Inhalte aus (Textzeilen werden ausgerichtet). Dies gilt nur, wenn die Orientierung des Kastens horizontal ist.
- `stretch`
  - : Der Kasten streckt die Inhalte so, dass im Kasten kein zusätzlicher Platz vorhanden ist.

## Hinweise

Die Kante des Kastens, die für Ausrichtungszwecke als _Anfang_ bezeichnet wird, hängt von der Orientierung des Kastens ab:

- Für horizontale Elemente ist der _Anfang_ die obere Kante.
- Für vertikale Elemente ist der _Anfang_ die linke Kante.

Die der Anfangskante gegenüberliegende Kante wird als _Ende_ bezeichnet.

Wenn die Ausrichtung mit dem `align` Attribut des Elements festgelegt wird, wird der Stil ignoriert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntaxRaw(`box-align = start | center | end | baseline | stretch`)}}

## Beispiele

### Ausrichtung des Kastens festlegen

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

Teil von keinem Standard.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("align-items")}}, {{cssxref("box-orient")}}, {{cssxref("box-direction")}}, {{cssxref("box-pack")}}
