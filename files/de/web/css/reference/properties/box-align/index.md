---
title: "`box-align` CSS property"
short-title: box-align
slug: Web/CSS/Reference/Properties/box-align
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{Non-standard_header}}

> [!WARNING]
> Dies ist eine Eigenschaft des ursprünglichen CSS-Flexiblen Boxen-Layout-Modul-Entwurfs und wurde durch einen neueren Standard ersetzt.

Die **`box-align`** [CSS](/de/docs/Web/CSS)-Eigenschaft gibt an, wie ein Element seine Inhalte in seiner Layouts in einer senkrechten Richtung ausrichtet. Die Wirkung der Eigenschaft ist nur sichtbar, wenn im Kasten zusätzlicher Platz vorhanden ist.

Siehe [Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts) für Informationen über den aktuellen Standard.

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

### Werte

Diese Eigenschaft wird als eines der folgenden Schlüsselwortwerte angegeben:

- `start`
  - : Der Kasten richtet die Inhalte am Anfang aus, und lässt zusätzlichen Platz am Ende.
- `center`
  - : Der Kasten richtet die Inhalte in der Mitte aus, und teilt den zusätzlichen Platz gleichmäßig zwischen Anfang und Ende auf.
- `end`
  - : Der Kasten richtet die Inhalte am Ende aus, und lässt zusätzlichen Platz am Anfang.
- `baseline`
  - : Der Kasten richtet die Baselines der Inhalte aus (Text wird ausgerichtet). Dies gilt nur, wenn die Orientierung des Kastens horizontal ist.
- `stretch`
  - : Der Kasten dehnt die Inhalte, sodass kein zusätzlicher Platz im Kasten verbleibt.

## Hinweise

Der Rand des Kastens, der für Ausrichtungszwecke als _Anfang_ bezeichnet wird, hängt von der Orientierung des Kastens ab:

- Für horizontale Elemente ist der _Anfang_ die obere Kante.
- Für vertikale Elemente ist der _Anfang_ die linke Kante.

Der gegenüberliegende Rand des Anfangs wird als _Ende_ bezeichnet.

Wenn die Ausrichtung durch das `align`-Attribut des Elements festgelegt wird, wird der Stil ignoriert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntaxRaw(`box-align = start | center | end | baseline | stretch`)}}

## Beispiele

### Kasten-Ausrichtung festlegen

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
