---
title: box-flex
slug: Web/CSS/box-flex
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{Non-standard_Header}}{{Deprecated_Header}}

> [!WARNING]
> Dies ist eine Eigenschaft zur Steuerung von Teilen des XUL-Box-Modells. Sie entspricht weder den alten CSS Flexible Box Layout Modul-Entwürfen für `box-flex` (die auf dieser Eigenschaft basierten) noch dem Verhalten von `-webkit-box-flex` (das auf diesen Entwürfen basiert). Siehe [flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) für Informationen über den aktuellen Standard.

Die **`-moz-box-flex`** und **`-webkit-box-flex`** [CSS](/de/docs/Web/CSS) Eigenschaften bestimmen, wie eine `-moz-box` oder `-webkit-box` wächst, um die Box auszufüllen, die sie enthält, in der Richtung der Layout-Anordnung der enthaltenen Box.

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

Die `box-flex` Eigenschaft wird als ein {{CSSxRef("&lt;number&gt;")}} angegeben. Wenn der Wert 0 ist, wächst die Box nicht. Wenn er größer als 0 ist, wächst die Box, um einen Anteil des verfügbaren Raumes auszufüllen.

## Hinweise

Die enthaltene Box weist den verfügbaren zusätzlichen Platz proportional zum Flex-Wert jedes der Inhaltselemente zu.

Inhaltselemente mit einem Flex von null wachsen nicht.

Wenn nur ein Inhaltselement einen von null verschiedenen Flex hat, wächst es, um den verfügbaren Platz auszufüllen.

Inhaltselemente mit dem gleichen Flex wachsen um die gleichen absoluten Beträge.

Wenn der Flex-Wert mit dem `flex`-Attribut des Elements gesetzt wird, wird der Stil ignoriert.

Um XUL-Elemente in einer enthaltenden Box gleich groß zu machen, setzen Sie das `equalsize`-Attribut der enthaltenen Box auf den Wert `always`. Dieses Attribut hat keine entsprechende CSS-Eigenschaft.

Ein Trick, um alle Inhaltselemente in einer enthaltenen Box gleich groß zu machen, besteht darin, ihnen alle eine feste Größe (z.B. `height: 0`) und den gleichen `box-flex`-Wert größer als null (z.B. `-moz-box-flex: 1`) zu geben.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntaxRaw(`box-flex = <number>`)}}

## Beispiele

### Setzen von box-flex

```html
<div class="example">
  <p>I will expand to fill extra space</p>
  <p>I will not expand</p>
</div>
```

```css
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
