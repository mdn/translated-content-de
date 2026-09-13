---
title: "`box-ordinal-group` CSS property"
short-title: box-ordinal-group
slug: Web/CSS/Reference/Properties/box-ordinal-group
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{Non-standard_Header}}

> [!WARNING]
> Dies ist eine Eigenschaft des ursprünglichen Entwurfs des CSS-Flexbox-Layout-Moduls. Sie wurde in der Spezifikation ersetzt. Informationen über den aktuellen Standard finden Sie im [flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts).

Die **`box-ordinal-group`** [CSS](/de/docs/Web/CSS)-Eigenschaft ordnet die Kind-Elemente des Flexbox einer Ordinalgruppe zu.

Ordinalgruppen können in Verbindung mit der {{CSSxRef("box-direction")}}-Eigenschaft verwendet werden, um die Reihenfolge zu steuern, in der die direkten Kinder eines Blocks erscheinen. Wenn die berechnete `box-direction` normal ist, zeigt ein Block seine Elemente beginnend mit der niedrigst nummerierten Ordinalgruppe an und stellt sicher, dass diese Elemente links (für horizontale Blöcke) oder oben (für vertikale Blöcke) im Container erscheinen. Elemente mit derselben Ordinalgruppe fließen in der Reihenfolge, in der sie im Quelldokumentbaum erscheinen. In der umgekehrten Richtung werden die Ordinalgruppen in derselben Reihenfolge geprüft, außer dass die Elemente umgekehrt erscheinen.

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

Die `box-ordinal-group`-Eigenschaft wird als jede positive {{CSSxRef("&lt;integer&gt;")}} angegeben.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntaxRaw(`box-ordinal-group = <integer>`)}}

## Beispiele

### Einfaches Anwendungsbeispiel

In einer älteren Version der Spezifikation wurde `box-ordinal-group` aufgenommen, um die Anzeigereihenfolge von Flex-Kindern innerhalb eines Flex-Containers zu ändern:

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
