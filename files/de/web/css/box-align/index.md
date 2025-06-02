---
title: box-align
slug: Web/CSS/box-align
l10n:
  sourceCommit: fc52eb81b630ca02c16addc346924295bdb5aaa8
---

{{CSSRef}}{{Non-standard_header}}{{Deprecated_Header}}

> [!WARNING]
> Dies ist eine Eigenschaft aus dem ursprünglichen Entwurf des CSS Flexible Box Layout-Moduls und wurde durch einen neueren Standard ersetzt.

Die **`box-align`** [CSS](/de/docs/Web/CSS) Eigenschaft gibt an, wie ein Element seine Inhalte senkrecht zu seinem Layout ausrichtet. Die Wirkung der Eigenschaft ist nur sichtbar, wenn im Kasten zusätzlicher Platz vorhanden ist.

Siehe [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) für Informationen über den aktuellen Standard.

Die Ausrichtungsrichtung hängt von der Orientierung des Elements ab: horizontal oder vertikal.

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
  - : Der Kasten richtet die Inhalte am Anfang aus, wobei ein zusätzlicher Platz am Ende bleibt.
- `center`
  - : Der Kasten richtet die Inhalte in der Mitte aus, wobei der zusätzliche Platz gleichmäßig zwischen Anfang und Ende aufgeteilt wird.
- `end`
  - : Der Kasten richtet die Inhalte am Ende aus, wobei ein zusätzlicher Platz am Anfang bleibt.
- `baseline`
  - : Der Kasten richtet die Baselinien der Inhalte aus (Textausrichtung). Dies gilt nur, wenn die Orientierung des Kastens horizontal ist.
- `stretch`
  - : Der Kasten streckt die Inhalte so, dass kein zusätzlicher Platz im Kasten bleibt.

## Anmerkungen

Der Rand des Kastens, der für Ausrichtungszwecke als _Anfang_ bezeichnet wird, hängt von der Orientierung des Kastens ab:

- Für horizontale Elemente ist der _Anfang_ der obere Rand.
- Für vertikale Elemente ist der _Anfang_ der linke Rand.

Der dem Anfang gegenüberliegende Rand wird als _Ende_ bezeichnet.

Wenn die Ausrichtung über das `align` Attribut des Elements festgelegt wird, wird der Stil ignoriert.

## Formale Definition

{{cssinfo}}

## Formaler Syntax

{{CSSSyntaxRaw(`box-align = start | center | end | baseline | stretch`)}}

## Beispiele

### Festlegen der Kasten-Ausrichtung

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
