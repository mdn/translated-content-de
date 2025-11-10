---
title: box-flex
slug: Web/CSS/Reference/Properties/box-flex
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{Non-standard_Header}}{{Deprecated_Header}}

> [!WARNING]
> Dies ist eine Eigenschaft zur Steuerung von Teilen des XUL-Box-Modells. Sie entspricht weder den alten CSS flexible box layout Modulentwürfen für `box-flex` (die auf dieser Eigenschaft basierten) noch dem Verhalten von `-webkit-box-flex` (das auf diesen Entwürfen basiert). Siehe [flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts) für Informationen über den aktuellen Standard.

Die **`-moz-box-flex`** und **`-webkit-box-flex`** [CSS](/de/docs/Web/CSS)-Eigenschaften geben an, wie eine `-moz-box` oder `-webkit-box` in der Richtung des Layouts der enthaltenden Box wächst, um diese zu füllen.

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

## Hinweise

Die enthaltende Box verteilt den verfügbaren zusätzlichen Raum proportional zum Flex-Wert jedes der Inhaltselemente.

Inhaltselemente mit einem Flex-Wert von null wachsen nicht.

Wenn nur ein Inhaltselement einen Flex-Wert ungleich null hat, wächst es, um den verfügbaren Raum zu füllen.

Inhaltselemente mit dem gleichen Flex-Wert wachsen um denselben absoluten Betrag.

Wenn der Flex-Wert über das `flex`-Attribut des Elements gesetzt wird, wird der Stil ignoriert.

Um XUL-Elemente in einer enthaltenden Box gleich groß zu machen, setzen Sie das `equalsize`-Attribut der enthaltenden Box auf den Wert `always`. Dieses Attribut hat keine entsprechende CSS-Eigenschaft.

Ein Trick, um alle Inhaltselemente in einer enthaltenden Box gleich groß zu machen, besteht darin, ihnen alle eine feste Größe zu geben (z. B. `height: 0`) und denselben `box-flex`-Wert größer als null (z. B. `-moz-box-flex: 1`).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntaxRaw(`box-flex = <number>`)}}

## Beispiele

### Box-Flex einstellen

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

Kein Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("box-orient")}}
- {{CSSxRef("box-pack")}}
- {{CSSxRef("box-direction")}}
- {{CSSxRef("flex")}}
