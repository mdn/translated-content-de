---
title: box-align
slug: Web/CSS/box-align
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}{{Non-standard_header}}{{Deprecated_Header}}

> [!WARNING]
> Dies ist eine Eigenschaft des ursprünglichen Entwurfs des Flexbox-Moduls in CSS und wurde durch einen neueren Standard ersetzt.

Die **`box-align`**-Eigenschaft von [CSS](/de/docs/Web/CSS) bestimmt, wie ein Element seinen Inhalt in seiner Layoutstruktur in einer senkrechten Richtung ausrichtet. Der Effekt der Eigenschaft ist nur sichtbar, wenn zusätzlicher Platz im Element vorhanden ist.

Siehe [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) für Informationen über den aktuellen Standard.

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

Die `box-align`-Eigenschaft wird als einer der unten aufgeführten Schlüsselwortwerte angegeben.

### Werte

- `start`
  - : Das Element richtet den Inhalt am Anfang aus und lässt zusätzlichen Platz am Ende.
- `center`
  - : Das Element richtet den Inhalt in der Mitte aus und teilt den zusätzlichen Platz gleichmäßig zwischen Anfang und Ende.
- `end`
  - : Das Element richtet den Inhalt am Ende aus und lässt zusätzlichen Platz am Anfang.
- `baseline`
  - : Das Element richtet die Baselines des Inhalts aus (Text wird ausgerichtet). Dies gilt nur, wenn die Orientierung des Elements horizontal ist.
- `stretch`
  - : Das Element dehnt den Inhalt so aus, dass kein zusätzlicher Platz im Element vorhanden ist.

## Anmerkungen

Die Kante des Elements, die für Ausrichtungszwecke als _Anfang_ festgelegt wird, hängt von der Orientierung des Elements ab:

- Bei horizontalen Elementen ist der _Anfang_ die obere Kante.
- Bei vertikalen Elementen ist der _Anfang_ die linke Kante.

Die Kante gegenüber dem Anfang wird als _Ende_ bezeichnet.

Wenn die Ausrichtung über das `align`-Attribut des Elements festgelegt wird, wird der Stil ignoriert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

```plain
box-align =
  start | center | end | baseline | stretch
```

## Beispiele

### Festlegung der Elementausrichtung

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
