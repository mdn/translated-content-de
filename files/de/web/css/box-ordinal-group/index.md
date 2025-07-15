---
title: box-ordinal-group
slug: Web/CSS/box-ordinal-group
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{Non-standard_Header}}{{Deprecated_Header}}

> [!WARNING]
> Dies ist eine Eigenschaft des ursprünglichen CSS Flexbox-Layout-Modul-Entwurfs. Sie wurde in der Spezifikation ersetzt. Siehe [flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) für Informationen über den aktuellen Standard.

Die **`box-ordinal-group`** [CSS](/de/docs/Web/CSS) Eigenschaft ordnet die Kind-Elemente des Flexbox-Containers einer Ordinalgruppe zu.

Ordinalgruppen können in Verbindung mit der {{CSSxRef("box-direction")}}-Eigenschaft verwendet werden, um die Reihenfolge zu steuern, in der die direkten Kinder eines Containers angezeigt werden. Wenn die berechnete `box-direction` normal ist, zeigt ein Container seine Elemente beginnend mit der niedrigsten nummerierten Ordinalgruppe an und stellt sicher, dass diese Elemente links (für horizontale Boxen) oder oben (für vertikale Boxen) des Containers erscheinen. Elemente mit derselben Ordinalgruppe werden in der Reihenfolge angezeigt, in der sie im Quelldokument-Baum erscheinen. In umgekehrter Richtung werden die Ordinalgruppen in derselben Reihenfolge überprüft, nur dass die Elemente in umgekehrter Ordnung erscheinen.

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

### Grundlegendes Nutzungsbeispiel

In einer älteren Version der Spezifikation war `box-ordinal-group` enthalten, um Ihnen zu ermöglichen, die Anzeigereihenfolge von Flex-Kindern innerhalb eines Flex-Containers zu ändern:

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

Kein Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("flex")}}
- {{CSSxRef("flex-basis")}}
- {{CSSxRef("flex-grow")}}
- {{CSSxRef("flex-shrink")}}
