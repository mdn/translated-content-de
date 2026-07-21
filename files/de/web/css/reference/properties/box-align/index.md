---
title: "`box-align` CSS property"
short-title: box-align
slug: Web/CSS/Reference/Properties/box-align
l10n:
  sourceCommit: c0c85c3dc0d6ff4247c85b0144149e584d74b625
---

{{Non-standard_header}}{{Deprecated_Header}}

> [!WARNING]
> Dies ist eine Eigenschaft des ursprünglichen CSS Flexible Box Layout Moduls im Entwurf, und wurde durch einen neueren Standard ersetzt.

Die **`box-align`** [CSS](/de/docs/Web/CSS) Eigenschaft gibt an, wie ein Element seine Inhalte über sein Layout in einer senkrechten Richtung ausrichtet. Die Wirkung der Eigenschaft wird nur sichtbar, wenn im Kasten zusätzlicher Platz vorhanden ist.

Für Informationen über den aktuellen Standard siehe [flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts).

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

### Werte

Diese Eigenschaft wird mit einem der folgenden Schlüsselwortwerte angegeben:

- `start`
  - : Der Kasten richtet Inhalte am Anfang aus und lässt jeglichen zusätzlichen Platz am Ende.
- `center`
  - : Der Kasten richtet Inhalte in der Mitte aus und teilt jeden zusätzlichen Platz gleichmäßig zwischen Anfang und Ende auf.
- `end`
  - : Der Kasten richtet Inhalte am Ende aus und lässt jeglichen zusätzlichen Platz am Anfang.
- `baseline`
  - : Der Kasten richtet die Grundlinien der Inhalte (Textausrichtung) aus. Dies gilt nur, wenn die Orientierung des Kastens horizontal ist.
- `stretch`
  - : Der Kasten streckt die Inhalte so, dass kein zusätzlicher Platz im Kasten vorhanden ist.

## Anmerkungen

Der Rand des Kastens, der für Ausrichtungszwecke als _Start_ bezeichnet wird, hängt von der Orientierung des Kastens ab:

- Bei horizontalen Elementen ist der _Start_ die obere Kante.
- Bei vertikalen Elementen ist der _Start_ die linke Kante.

Der Rand gegenüber dem Start wird als _Ende_ bezeichnet.

Wenn die Ausrichtung durch das `align`-Attribut des Elements festgelegt wird, wird der Stil ignoriert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntaxRaw(`box-align = start | center | end | baseline | stretch`)}}

## Beispiele

### Festlegen der Kastausrichtung

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

Teil keines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("align-items")}}, {{cssxref("box-orient")}}, {{cssxref("box-direction")}}, {{cssxref("box-pack")}}
