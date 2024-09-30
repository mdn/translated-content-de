---
title: box-flex
slug: Web/CSS/box-flex
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{CSSRef}}{{Non-standard_Header}}{{Deprecated_Header}}

> [!WARNING]
> Dies ist eine Eigenschaft zur Steuerung von Teilen des XUL-Boxmodells. Sie entspricht weder den alten CSS-Flexiblen Box Layout-Modul-Entwürfen für `box-flex` (die auf dieser Eigenschaft basierten) noch dem Verhalten von `-webkit-box-flex` (das auf diesen Entwürfen basiert). Informationen über den aktuellen Standard finden Sie unter [flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox).

Die **`-moz-box-flex`** und **`-webkit-box-flex`** [CSS](/de/docs/Web/CSS)-Eigenschaften geben an, wie eine `-moz-box` oder `-webkit-box` wächst, um die sie enthaltende Box in der Richtung des Layouts der enthaltenden Box auszufüllen.

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

Die `box-flex`-Eigenschaft wird als {{CSSxRef("&lt;number&gt;")}} spezifiziert. Wenn der Wert 0 ist, wächst die Box nicht. Wenn er größer als 0 ist, wächst die Box, um einen Anteil des verfügbaren Raums zu füllen.

## Hinweise

Die enthaltende Box teilt den verfügbaren zusätzlichen Raum proportional zum Flex-Wert jedes der Inhalts-Elemente zu.

Inhalts-Elemente, die Flex 0 haben, wachsen nicht.

Wenn nur ein Inhalts-Element einen Flex ungleich Null hat, wächst es, um den verfügbaren Raum auszufüllen.

Inhalts-Elemente mit demselben Flex-Wert wachsen um denselben absoluten Betrag.

Wenn der Flex-Wert über das `flex`-Attribut des Elements gesetzt wird, wird der Stil ignoriert.

Um XUL-Elemente in einer enthaltenden Box gleich groß zu machen, setzen Sie das `equalsize`-Attribut der enthaltenden Box auf den Wert `always`. Dieses Attribut hat keine entsprechende CSS-Eigenschaft.

Ein Trick, um alle Inhalts-Elemente in einer enthaltenden Box gleich groß zu machen, ist, ihnen alle eine feste Größe zu geben (z. B. `height: 0`), und denselben `box-flex`-Wert größer als Null (z. B. `-moz-box-flex: 1`).

## Formelle Definition

{{cssinfo}}

## Formelle Syntax

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

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("box-orient")}}
- {{CSSxRef("box-pack")}}
- {{CSSxRef("box-direction")}}
- {{CSSxRef("flex")}}
