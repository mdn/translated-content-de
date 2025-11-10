---
title: box-ordinal-group
slug: Web/CSS/Reference/Properties/box-ordinal-group
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{Non-standard_Header}}{{Deprecated_Header}}

> [!WARNING]
> Dies ist eine Eigenschaft des ursprünglichen Entwurfs des CSS Flexible Box Layout Moduls. Sie wurde in der Spezifikation ersetzt. Siehe [flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts) für Informationen über den aktuellen Standard.

Die **`box-ordinal-group`** [CSS](/de/docs/Web/CSS) Eigenschaft ordnet die Kind-Elemente des Flexboxen einer Ordinalgruppe zu.

Ordinalgruppen können in Verbindung mit der {{CSSxRef("box-direction")}} Eigenschaft verwendet werden, um die Reihenfolge zu steuern, in der die direkten Kinder eines Kastens erscheinen. Wenn die berechnete `box-direction` normal ist, zeigt ein Kasten seine Elemente beginnend mit der am niedrigsten nummerierten Ordinalgruppe an und stellt sicher, dass diese Elemente links (für horizontale Kästen) oder oben (für vertikale Kästen) des Containers erscheinen. Elemente mit derselben Ordinalgruppe werden in der Reihenfolge angezeigt, in der sie im Quelldokumentbaum erscheinen. In umgekehrter Richtung werden die Ordinalgruppen in derselben Reihenfolge geprüft, mit dem Unterschied, dass die Elemente umgekehrt erscheinen.

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

Die `box-ordinal-group` Eigenschaft wird als jede positive {{CSSxRef("&lt;integer&gt;")}} angegeben.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntaxRaw(`box-ordinal-group = <integer>`)}}

## Beispiele

### Grundlegendes Anwendungsbeispiel

In einer älteren Version der Spezifikation wurde `box-ordinal-group` eingeführt, um die Anzeigereihenfolge von Flex-Kindern innerhalb eines Flex-Containers zu ändern:

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
