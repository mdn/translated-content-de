---
title: box-ordinal-group
slug: Web/CSS/Reference/Properties/box-ordinal-group
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{Non-standard_Header}}{{Deprecated_Header}}

> [!WARNING]
> Dies ist eine Eigenschaft des ursprünglichen Entwurfs des CSS Flexible Box Layout Moduls. Sie wurde in der Spezifikation ersetzt. Weitere Informationen zum aktuellen Standard finden Sie unter [flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox).

Die **`box-ordinal-group`** [CSS](/de/docs/Web/CSS)-Eigenschaft ordnet die Kind-Elemente des Flexbox einer Ordnungsgruppe zu.

Ordnungsgruppen können in Verbindung mit der {{CSSxRef("box-direction")}}-Eigenschaft verwendet werden, um die Reihenfolge zu steuern, in der die direkten Kinder eines Containers erscheinen. Wenn die berechnete `box-direction` normal ist, zeigt ein Container seine Elemente beginnend mit der Ordnungsgruppe mit der niedrigsten Zahl an und stellt sicher, dass diese Elemente links (für horizontale Container) oder oben (für vertikale Container) im Container erscheinen. Elemente mit derselben Ordnungsgruppe werden in der Reihenfolge angezeigt, in der sie im Quelldokumentbaum erscheinen. In der umgekehrten Richtung werden die Ordnungsgruppen in derselben Reihenfolge geprüft, außer dass die Elemente umgekehrt erscheinen.

## Syntax

```css
/* <integer> values */
box-ordinal-group: 1;
box-ordinal-group: 5;

/* Global values */
box-ordinal-group: inherit;
box-ordinal-group: initial;
box-ordinal-group: unset;
```

Die `box-ordinal-group`-Eigenschaft wird als beliebiges positives {{CSSxRef("&lt;integer&gt;")}} angegeben.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntaxRaw(`box-ordinal-group = <integer>`)}}

## Beispiele

### Grundlegendes Nutzungsszenario

In einer älteren Version der Spezifikation wurde `box-ordinal-group` eingeführt, um Ihnen zu ermöglichen, die Anzeigereihenfolge von Flexkindern innerhalb eines Flex-Containers zu ändern:

```css
article:nth-child(1) {
  -webkit-box-ordinal-group: 2;
  -moz-box-ordinal-group: 2;
  box-ordinal-group: 2;
}

article:nth-child(2) {
  -webkit-box-ordinal-group: 1;
  -moz-box-ordinal-group: 1;
  box-ordinal-group: 1;
}
```

Das moderne Flexbox-Äquivalent ist {{cssxref("order")}}.

## Spezifikationen

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("flex")}}
- {{CSSxRef("flex-basis")}}
- {{CSSxRef("flex-grow")}}
- {{CSSxRef("flex-shrink")}}
