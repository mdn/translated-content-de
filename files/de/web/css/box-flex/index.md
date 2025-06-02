---
title: box-flex
slug: Web/CSS/box-flex
l10n:
  sourceCommit: fc52eb81b630ca02c16addc346924295bdb5aaa8
---

{{CSSRef}}{{Non-standard_Header}}{{Deprecated_Header}}

> [!WARNING]
> Dies ist eine Eigenschaft zur Steuerung von Teilen des XUL-Box-Modells. Sie entspricht weder den alten CSS-Flexible-Box-Layout-Modulentwürfen für `box-flex` (die auf dieser Eigenschaft basierten) noch dem Verhalten von `-webkit-box-flex` (das auf diesen Entwürfen basiert). Siehe [flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) für Informationen über den aktuellen Standard.

Die **`-moz-box-flex`** und **`-webkit-box-flex`** [CSS](/de/docs/Web/CSS) Eigenschaften spezifizieren, wie eine `-moz-box` oder `-webkit-box` wächst, um die Box, die sie enthält, in der Richtung des Layouts der enthaltenen Box auszufüllen.

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

Die `box-flex` Eigenschaft wird als {{CSSxRef("&lt;number&gt;")}} angegeben. Wenn der Wert 0 ist, wächst die Box nicht. Wenn er größer als 0 ist, wächst die Box, um einen Anteil des verfügbaren Raums zu füllen.

## Anmerkungen

Die umschließende Box verteilt den verfügbaren zusätzlichen Platz im Verhältnis zum Flex-Wert jedes der Inhaltselemente.

Inhaltselemente, die einen Flex-Wert von null haben, wachsen nicht.

Wenn nur ein Inhaltselement einen nicht-Null-Flex-Wert hat, dann wächst es, um den verfügbaren Raum zu füllen.

Inhaltselemente, die denselben Flex-Wert haben, wachsen um dieselbe absolute Menge.

Wenn der Flex-Wert über das `flex` Attribut des Elements festgelegt wird, wird der Style ignoriert.

Um XUL-Elemente in einer umschließenden Box gleich groß zu machen, setzen Sie das `equalsize` Attribut der umschließenden Box auf den Wert `always`. Dieses Attribut hat keine entsprechende CSS-Eigenschaft.

Ein Trick, um alle Inhaltselemente in einer umschließenden Box gleich groß zu machen, besteht darin, ihnen alle eine feste Größe (z.B. `height: 0`) und denselben `box-flex` Wert größer als null zu geben (z.B. `-moz-box-flex: 1`).

## Formale Definition

{{cssinfo}}

## Formaler Syntax

{{CSSSyntaxRaw(`box-flex = <number>`)}}

## Beispiele

### box-flex festlegen

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
