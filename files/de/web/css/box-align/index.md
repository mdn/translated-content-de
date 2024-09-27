---
title: box-align
slug: Web/CSS/box-align
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}{{Non-standard_header}}{{Deprecated_Header}}

> [!WARNING]
> Dies ist eine Eigenschaft des ursprünglichen CSS Flexible Box Layout Moduls und wurde durch einen neueren Standard ersetzt.

Die **`box-align`**-[CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie ein Element seine Inhalte quer zu seinem Layout ausrichtet. Die Wirkung der Eigenschaft ist nur sichtbar, wenn zusätzlicher Raum in der Box vorhanden ist.

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

Die `box-align`-Eigenschaft wird als eines der unten aufgeführten Schlüsselwortwerte angegeben.

### Werte

- `start`
  - : Die Box richtet Inhalte am Anfang aus und lässt zusätzlichen Raum am Ende.
- `center`
  - : Die Box richtet Inhalte in der Mitte aus und verteilt den zusätzlichen Raum gleichmäßig zwischen Anfang und Ende.
- `end`
  - : Die Box richtet Inhalte am Ende aus und lässt zusätzlichen Raum am Anfang.
- `baseline`
  - : Die Box richtet die Baselines der Inhalte aus (Texte ausrichten). Dies gilt nur, wenn die Orientierung der Box horizontal ist.
- `stretch`
  - : Die Box streckt die Inhalte so, dass kein zusätzlicher Raum in der Box bleibt.

## Hinweise

Die Kante der Box, die für Ausrichtungszwecke als _Anfang_ bezeichnet wird, hängt von der Orientierung der Box ab:

- Bei horizontalen Elementen ist der _Anfang_ die obere Kante.
- Bei vertikalen Elementen ist der _Anfang_ die linke Kante.

Die gegenüberliegende Kante zum Anfang wird als _Ende_ bezeichnet.

Wenn die Ausrichtung über das `align`-Attribut des Elements festgelegt wird, wird der Stil ignoriert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

```plain
box-align =
  start | center | end | baseline | stretch
```

## Beispiele

### Box-Ausrichtung festlegen

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <title>CSS box-align example</title>
    <style>
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
    </style>
  </head>
  <body>
    <div class="example">
      <p>
        I will be second from the bottom of div.example, centered horizontally.
      </p>
      <p>I will be on the bottom of div.example, centered horizontally.</p>
    </div>
  </body>
</html>
```

## Spezifikationen

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("align-items")}}, {{cssxref("box-orient")}}, {{cssxref("box-direction")}}, {{cssxref("box-pack")}}
