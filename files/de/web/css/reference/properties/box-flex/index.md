---
title: "`box-flex` CSS property"
short-title: box-flex
slug: Web/CSS/Reference/Properties/box-flex
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

{{Non-standard_Header}}{{Deprecated_Header}}

> [!WARNING]
> Dies ist eine Eigenschaft zur Steuerung von Teilen des XUL-Box-Modells. Sie entspricht weder den alten Entwürfen des CSS-Flexible-Box-Layout-Moduls für `box-flex` (die auf dieser Eigenschaft basierten) noch dem Verhalten von `-webkit-box-flex` (das auf diesen Entwürfen basiert). Weitere Informationen zum aktuellen Standard finden Sie unter [flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts).

Die **`-moz-box-flex`** und **`-webkit-box-flex`** [CSS](/de/docs/Web/CSS) Eigenschaften geben an, wie eine `-moz-box` oder `-webkit-box` in die Box hineinwächst, die sie enthält, in der Richtung des Layouts der umgebenden Box.

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

Die `box-flex` Eigenschaft wird als ein {{CSSxRef("&lt;number&gt;")}} spezifiziert. Wenn der Wert 0 ist, wächst die Box nicht. Ist er größer als 0, wächst die Box, um einen Anteil des verfügbaren Platzes auszufüllen.

## Anmerkungen

Die umgebende Box teilt den verfügbaren zusätzlichen Raum proportional zu den Flex-Werten der einzelnen Inhaltselemente zu.

Inhaltselemente mit einem Flex-Wert von null wachsen nicht.

Hat nur ein Inhaltselement einen von null verschiedenen Flex-Wert, wächst es, um den verfügbaren Raum auszufüllen.

Inhaltselemente mit demselben Flex-Wert wachsen um dieselbe absolute Menge.

Wenn der Flex-Wert über das `flex` Attribut des Elements gesetzt wird, wird der Stil ignoriert.

Um XUL-Elemente in einer umgebenden Box gleich groß zu machen, setzen Sie das Attribut `equalsize` der umgebenden Box auf den Wert `always`. Dieses Attribut hat keine entsprechende CSS-Eigenschaft.

Ein Trick, um alle Inhaltselemente in einer umgebenden Box gleich groß zu machen, besteht darin, ihnen allen eine feste Größe zu geben (z.B. `height: 0`) und denselben `box-flex` Wert größer als null (z.B. `-moz-box-flex: 1`).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntaxRaw(`box-flex = <number>`)}}

## Beispiele

### Einstellung von box-flex

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
