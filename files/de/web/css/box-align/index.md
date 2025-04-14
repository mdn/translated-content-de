---
title: box-align
slug: Web/CSS/box-align
l10n:
  sourceCommit: 0d43b58f31f30e5dbafd9c117a467e389cc8b176
---

{{CSSRef}}{{Non-standard_header}}{{Deprecated_Header}}

> [!WARNING]
> Dies ist eine Eigenschaft des ursprünglichen Entwurfs des CSS Flexiblen Box Layout Moduls und wurde durch einen neueren Standard ersetzt.

Die **`box-align`** [CSS](/de/docs/Web/CSS) Eigenschaft bestimmt, wie ein Element seine Inhalte in einer senkrechten Richtung innerhalb seines Layouts ausrichtet. Die Wirkung der Eigenschaft ist nur sichtbar, wenn im Kasten zusätzlicher Platz vorhanden ist.

Informationen über den aktuellen Standard finden Sie unter [flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox).

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

Die `box-align` Eigenschaft wird als einer der unten aufgeführten Schlüsselwortwerte angegeben.

### Werte

- `start`
  - : Der Kasten richtet Inhalte am Anfang aus und lässt zusätzlichen Platz am Ende.
- `center`
  - : Der Kasten richtet Inhalte in der Mitte aus und teilt zusätzlichen Platz gleichmäßig zwischen Anfang und Ende auf.
- `end`
  - : Der Kasten richtet Inhalte am Ende aus und lässt zusätzlichen Platz am Anfang.
- `baseline`
  - : Der Kasten richtet die Baselines der Inhalte aus (Text wird ausgerichtet). Dies gilt nur, wenn die Ausrichtung des Kastens horizontal ist.
- `stretch`
  - : Der Kasten streckt die Inhalte, sodass kein zusätzlicher Platz im Kasten vorhanden ist.

## Hinweise

Der Rand des Kastens, der für Ausrichtungszwecke als _Anfang_ bezeichnet wird, hängt von der Ausrichtung des Kastens ab:

- Für horizontale Elemente ist der _Anfang_ die obere Kante.
- Für vertikale Elemente ist der _Anfang_ die linke Kante.

Der Rand gegenüber dem Anfang wird als _Ende_ bezeichnet.

Wenn die Ausrichtung durch das `align` Attribut des Elements festgelegt wird, wird der Stil ignoriert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntaxRaw(`box-align = start | center | end | baseline | stretch`)}}

## Beispiele

### Festlegen der Kasten-Ausrichtung

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
