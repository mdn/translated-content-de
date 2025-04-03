---
title: box-flex
slug: Web/CSS/box-flex
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{CSSRef}}{{Non-standard_Header}}{{Deprecated_Header}}

> [!WARNING]
> Dies ist eine Eigenschaft zur Steuerung von Teilen des XUL-Boxmodells. Sie entspricht weder den alten Entwürfen des CSS Flexible Box Layout Moduls für `box-flex` (die auf dieser Eigenschaft basierten) noch dem Verhalten von `-webkit-box-flex` (das auf diesen Entwürfen basiert). Informationen über den aktuellen Standard finden Sie unter [flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox).

Die **`-moz-box-flex`** und **`-webkit-box-flex`** [CSS](/de/docs/Web/CSS) Eigenschaften spezifizieren, wie sich ein `-moz-box` oder `-webkit-box` vergrößert, um die Box, die es enthält, in der Richtung des Layouts der enthaltenen Box auszufüllen.

## Syntax

```css
/* <number> values */
-moz-box-flex: 0;
-moz-box-flex: 2;
-moz-box-flex: 3.5;
-webkit-box-flex: 0;
-webkit-box-flex: 2;
-webkit-box-flex: 3.5;

/* Global values */
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

Die `box-flex` Eigenschaft wird als {{CSSxRef("&lt;number&gt;")}} angegeben. Wenn der Wert 0 ist, wächst die Box nicht. Wenn er größer als 0 ist, wächst die Box, um einen Teil des verfügbaren Platzes auszufüllen.

## Hinweise

Die enthaltene Box verteilt den verfügbaren zusätzlichen Raum im Verhältnis zum Flex-Wert jedes der Inhaltselemente.

Inhaltselemente mit einem Flex-Wert von null wachsen nicht.

Wenn nur ein Inhaltselement einen Flex-Wert ungleich null hat, wächst es, um den verfügbaren Platz auszufüllen.

Inhaltselemente mit demselben Flex-Wert wachsen um denselben absoluten Betrag.

Wenn der Flex-Wert mit dem `flex`-Attribut des Elements festgelegt wird, wird der Stil ignoriert.

Um XUL-Elemente in einer enthaltenen Box auf die gleiche Größe zu bringen, setzen Sie das `equalsize`-Attribut der enthaltenen Box auf den Wert `always`. Dieses Attribut hat keine entsprechende CSS-Eigenschaft.

Ein Trick, um alle Inhaltselemente in einer enthaltenen Box auf die gleiche Größe zu bringen, besteht darin, ihnen alle eine feste Größe (z. B. `height: 0`) und denselben `box-flex`-Wert größer als null zu geben (z. B. `-moz-box-flex: 1`).

## Formale Definition

{{cssinfo}}

## Formale Syntax

```plain
box-flex =
  <number>
```

## Beispiele

### Box-flex einstellen

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <title>-moz-box-flex example</title>
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
      <p>I will expand to fill extra space</p>
      <p>I will not expand</p>
    </div>
  </body>
</html>
```

## Spezifikationen

Teil keiner Norm.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("box-orient")}}
- {{CSSxRef("box-pack")}}
- {{CSSxRef("box-direction")}}
- {{CSSxRef("flex")}}
