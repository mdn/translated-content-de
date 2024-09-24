---
title: box-align
slug: Web/CSS/box-align
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}{{Non-standard_header}}{{Deprecated_Header}}

> [!WARNING]
> Dies ist eine Eigenschaft des ursprünglichen Entwurfs des CSS Flexible Box Layout Moduls und wurde durch einen neueren Standard ersetzt.

Die **`box-align`** [CSS](/de/docs/Web/CSS) Eigenschaft gibt an, wie ein Element seinen Inhalt in einer senkrechten Richtung innerhalb seines Layouts ausrichtet. Der Effekt dieser Eigenschaft ist nur sichtbar, wenn im Container zusätzlicher Platz vorhanden ist.

Siehe [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) für Informationen über den aktuellen Standard.

Die Ausrichtungsrichtung hängt von der Orientierung des Elements ab: horizontal oder vertikal.

## Syntax

```css
/* Schlüsselwortwerte */
box-align: start;
box-align: center;
box-align: end;
box-align: baseline;
box-align: stretch;

/* Globale Werte */
box-lines: inherit;
box-lines: initial;
box-lines: unset;
```

Die `box-align` Eigenschaft wird als eines der unten aufgeführten Schlüsselwortwerte angegeben.

### Werte

- `start`
  - : Der Box richtet den Inhalt am Anfang aus und lässt zusätzlichen Platz am Ende.
- `center`
  - : Der Box richtet den Inhalt in der Mitte aus und teilt den zusätzlichen Platz gleichmäßig zwischen Anfang und Ende.
- `end`
  - : Der Box richtet den Inhalt am Ende aus und lässt zusätzlichen Platz am Anfang.
- `baseline`
  - : Der Box richtet die Baselines des Inhalts aus (Textausrichtung). Dies gilt nur, wenn die Orientierung des Box horizontal ist.
- `stretch`
  - : Der Box dehnt den Inhalt so, dass im Container kein zusätzlicher Platz bleibt.

## Hinweise

Die Kante der Box, die für Ausrichtungszwecke den _Anfang_ darstellt, hängt von der Orientierung der Box ab:

- Für horizontale Elemente ist der _Anfang_ die obere Kante.
- Für vertikale Elemente ist der _Anfang_ die linke Kante.

Die Kante gegenüber dem Anfang wird als _Ende_ bezeichnet.

Wenn die Ausrichtung durch das `align` Attribut des Elements festgelegt wird, wird der Stil ignoriert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

```plain
box-align =
  start | center | end | baseline | stretch
```

## Beispiele

### Festlegen der Box-Ausrichtung

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

        /* Machen Sie diese Box höher als die Kinder,
     so dass Platz für das Box-Pack ist */
        height: 400px;

        /* Machen Sie diese Box breiter als die Kinder,
     so dass Platz für das Box-Align ist */
        width: 300px;

        /* Kinder sollten vertikal orientiert sein */
        box-orient: vertical; /* As specified */
        -moz-box-orient: vertical; /* Mozilla */
        -webkit-box-orient: vertical; /* WebKit */

        /* Kinder horizontal in der Mitte dieser Box ausrichten */
        box-align: center; /* As specified */
        -moz-box-align: center; /* Mozilla */
        -webkit-box-align: center; /* WebKit */

        /* Kinder am unteren Rand dieser Box anordnen */
        box-pack: end; /* As specified */
        -moz-box-pack: end; /* Mozilla */
        -webkit-box-pack: end; /* WebKit */
      }

      div.example > p {
        /* Machen Sie die Kinder schmaler als ihre Eltern,
     so dass Platz für das Box-Align ist */
        width: 200px;
      }
    </style>
  </head>
  <body>
    <div class="example">
      <p>
        Ich werde als zweites vom Boden von div.example aus horizontal zentriert sein.
      </p>
      <p>Ich werde am Boden von div.example horizontal zentriert sein.</p>
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
