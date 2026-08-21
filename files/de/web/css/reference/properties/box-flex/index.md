---
title: "`box-flex` CSS property"
short-title: box-flex
slug: Web/CSS/Reference/Properties/box-flex
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{Non-standard_Header}}

> [!WARNING]
> Dies ist eine Eigenschaft zur Steuerung von Teilen des XUL-Box-Modells. Sie entspricht weder den alten Entwürfen des CSS Flexible Box Layout Moduls für `box-flex` (die auf dieser Eigenschaft basierten) noch dem Verhalten von `-webkit-box-flex` (das auf diesen Entwürfen basiert). Weitere Informationen über den aktuellen Standard finden Sie unter [flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts).

Die **`-moz-box-flex`** und **`-webkit-box-flex`** [CSS](/de/docs/Web/CSS) Eigenschaften legen fest, wie eine `-moz-box` oder `-webkit-box` wächst, um die Box zu füllen, die sie enthält, und zwar in der Richtung des Layouts der umgebenden Box.

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

Die `box-flex`-Eigenschaft wird als {{CSSxRef("&lt;number&gt;")}} angegeben. Wenn der Wert 0 ist, wächst die Box nicht. Wenn er größer als 0 ist, wächst die Box, um einen Anteil des verfügbaren Raums zu füllen.

## Anmerkungen

Die umgebende Box verteilt den verfügbaren zusätzlichen Raum proportional zum Flex-Wert jedes der Inhaltselemente.

Inhaltselemente mit einem Flex-Wert von null wachsen nicht.

Wenn nur ein Inhaltselement einen nicht null Flex-Wert hat, wächst es, um den verfügbaren Raum zu füllen.

Inhaltselemente mit dem gleichen Flex-Wert wachsen um den gleichen absoluten Betrag.

Wenn der Flex-Wert mit dem `flex`-Attribut des Elements gesetzt wird, wird der Stil ignoriert.

Um XUL-Elemente in einer umgebenden Box gleich groß zu machen, setzen Sie das `equalsize`-Attribut der umgebenden Box auf den Wert `always`. Dieses Attribut hat keine entsprechende CSS-Eigenschaft.

Ein Trick, um alle Inhaltselemente in einer umgebenden Box gleich groß zu machen, besteht darin, ihnen alle eine feste Größe zu geben (z.B. `height: 0`) und ihnen denselben `box-flex`-Wert größer als null zuzuweisen (z.B. `-moz-box-flex: 1`).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntaxRaw(`box-flex = <number>`)}}

## Beispiele

### Festlegen von box-flex

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

Teil keiner Norm.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("box-orient")}}
- {{CSSxRef("box-pack")}}
- {{CSSxRef("box-direction")}}
- {{CSSxRef("flex")}}
