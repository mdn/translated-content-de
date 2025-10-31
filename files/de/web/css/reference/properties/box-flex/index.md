---
title: box-flex
slug: Web/CSS/Reference/Properties/box-flex
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{Non-standard_Header}}{{Deprecated_Header}}

> [!WARNING]
> Dies ist eine Eigenschaft zur Steuerung von Teilen des XUL-Box-Modells. Es stimmt weder mit den alten CSS-Flexbox-Layout-Entwurfentwürfen für `box-flex` überein (die auf dieser Eigenschaft basierten) noch mit dem Verhalten von `-webkit-box-flex` (das auf jenen Entwürfen basiert). Siehe [flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) für Informationen über den aktuellen Standard.

Die **`-moz-box-flex`** und **`-webkit-box-flex`** [CSS](/de/docs/Web/CSS) Eigenschaften legen fest, wie ein `-moz-box` oder `-webkit-box` wächst, um die Box auszufüllen, die ihn im Layout des umgebenden Containers enthält.

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

Die `box-flex` Eigenschaft wird als ein {{CSSxRef("&lt;number&gt;")}} angegeben. Wenn der Wert 0 ist, wächst die Box nicht. Wenn er größer als 0 ist, wächst die Box, um einen Anteil des verfügbaren Raums auszufüllen.

## Hinweise

Die umgebende Box verteilt den verfügbaren zusätzlichen Raum im Verhältnis zum Flex-Wert jedes Inhalts-Elements.

Inhalts-Elemente, die Flex-Wert null haben, wachsen nicht.

Wenn nur ein Inhalts-Element einen nicht-null Flex-Wert hat, wächst es, um den verfügbaren Raum auszufüllen.

Inhalts-Elemente mit dem gleichen Flex-Wert wachsen um den gleichen absoluten Betrag.

Wenn der Flex-Wert über das `flex` Attribut des Elements festgelegt wird, wird der Stil ignoriert.

Um XUL-Elemente in einer umgebenden Box gleich groß zu machen, setzen Sie das `equalsize` Attribut der umgebenden Box auf den Wert `always`. Dieses Attribut hat keine entsprechende CSS-Eigenschaft.

Ein Trick, um alle Inhalts-Elemente in einer umgebenden Box gleich groß zu machen, besteht darin, ihnen alle eine feste Größe zu geben (z.B. `height: 0`), und den gleichen `box-flex` Wert größer als null (z.B. `-moz-box-flex: 1`).

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

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("box-orient")}}
- {{CSSxRef("box-pack")}}
- {{CSSxRef("box-direction")}}
- {{CSSxRef("flex")}}
