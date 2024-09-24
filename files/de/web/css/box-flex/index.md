---
title: box-flex
slug: Web/CSS/box-flex
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}{{Non-standard_Header}}{{Deprecated_Header}}

> [!WARNING]
> Dies ist eine Eigenschaft zur Steuerung von Teilen des XUL-Box-Modells. Sie entspricht weder den alten Entwürfen des CSS-Flexible-Box-Layout-Moduls für '`box-flex`' (die auf dieser Eigenschaft basierten) noch dem Verhalten von '`-webkit-box-flex`' (das auf diesen Entwürfen basiert). Informationen über den aktuellen Standard finden Sie unter [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox).

Die **`-moz-box-flex`** und **`-webkit-box-flex`** [CSS](/de/docs/Web/CSS) Eigenschaften geben an, wie eine `-moz-box` oder `-webkit-box` in die sie enthaltende Box hineinwächst, in der Richtung des Layouts der enthaltenden Box.

## Syntax

```css
/* <number> Werte */
-moz-box-flex: 0;
-moz-box-flex: 2;
-moz-box-flex: 3.5;
-webkit-box-flex: 0;
-webkit-box-flex: 2;
-webkit-box-flex: 3.5;

/* Globale Werte */
-moz-box-flex: inherit;
-moz-box-flex: initial;
-moz-box-flex: revert;
-moz-box-flex: revert-layer;
-moz-box-flex: unset;
-webkit-box-flex: inherit;
-webkit-box-flex: initial;
-webkit-box-flex: revert;
-webkit-box-flex: revert-layer;
-webkit-box-flex: unset;
```

Die `box-flex` Eigenschaft wird als {{CSSxRef("&lt;number&gt;")}} angegeben. Wenn der Wert 0 ist, wächst die Box nicht. Wenn er größer als 0 ist, wächst die Box, um einen Anteil des verfügbaren Raums auszufüllen.

## Anmerkungen

Die enthaltene Box verteilt den verfügbaren zusätzlichen Raum proportional zum Flex-Wert jedes der Inhaltselemente.

Inhaltselemente, die einen Flex von Null haben, wachsen nicht.

Wenn nur ein Inhaltselement einen nicht-null Flex hat, dann wächst es, um den verfügbaren Raum auszufüllen.

Inhaltselemente mit dem gleichen Flex wachsen um die gleichen absoluten Beträge.

Wenn der Flex-Wert mit dem `flex` Attribut des Elements gesetzt wird, wird der Stil ignoriert.

Um XUL-Elemente in einer enthaltenden Box gleich groß zu machen, setzen Sie das `equalsize` Attribut der enthaltenden Box auf den Wert `always`. Dieses Attribut hat keine entsprechende CSS-Eigenschaft.

Ein Trick, um alle Inhaltselemente in einer enthaltenden Box gleich groß zu machen, besteht darin, ihnen alle eine feste Größe zu geben (z.B. `height: 0`), und denselben `box-flex` Wert größer als Null zu geben (z.B. `-moz-box-flex: 1`).

## Formale Definition

{{cssinfo}}

## Formale Syntax

```plain
box-flex =
  <number>
```

## Beispiele

### Festlegen von box-flex

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <title>-moz-box-flex Beispiel</title>
    <style>
      div.example {
        display: -moz-box;
        display: -webkit-box;
        border: 1px solid black;
        width: 100%;
      }
      div.example > p:nth-child(1) {
        -moz-box-flex: 1; /* Mozilla */
        -webkit-box-flex: 1; /* WebKit */
        border: 1px solid black;
      }
      div.example > p:nth-child(2) {
        -moz-box-flex: 0; /* Mozilla */
        -webkit-box-flex: 0; /* WebKit */
        border: 1px solid black;
      }
    </style>
  </head>
  <body>
    <div class="example">
      <p>Ich werde den zusätzlichen Platz ausfüllen</p>
      <p>Ich werde nicht expandieren</p>
    </div>
  </body>
</html>
```

## Spezifikationen

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("box-orient")}}
- {{CSSxRef("box-pack")}}
- {{CSSxRef("box-direction")}}
- {{CSSxRef("flex")}}
