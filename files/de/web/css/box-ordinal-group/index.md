---
title: box-ordinal-group
slug: Web/CSS/box-ordinal-group
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}{{Non-standard_Header}}{{Deprecated_Header}}

> [!WARNING]
> Dies ist eine Eigenschaft des ursprünglichen CSS-Flexible-Box-Layoutmodul-Entwurfs. Sie wurde in der Spezifikation ersetzt. Weitere Informationen über den aktuellen Standard finden Sie unter [flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox).

Die **`box-ordinal-group`**-Eigenschaft von [CSS](/de/docs/Web/CSS) weist den Kinderelementen eines Flexbox-Elements eine Ordinalgruppe zu.

Ordinalgruppen können zusammen mit der {{CSSxRef("box-direction")}}-Eigenschaft verwendet werden, um die Reihenfolge zu steuern, in der die direkten Kinder eines Kastens erscheinen. Wenn die berechnete `box-direction` normal ist, zeigt ein Kasten seine Elemente beginnend mit der niedrigst nummerierten Ordinalgruppe an und stellt sicher, dass diese Elemente sich links (bei horizontalen Boxen) oder oben (bei vertikalen Boxen) im Container befinden. Elemente mit derselben Ordinalgruppe werden in der Reihenfolge ihres Erscheinens im Quelldokumentbaum angezeigt. In umgekehrter Richtung werden die Ordinalgruppen in derselben Reihenfolge überprüft, außer dass die Elemente umgekehrt angezeigt werden.

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

```plain
box-ordinal-group =
  <integer>
```

## Beispiele

### Grundlegendes Anwendungsbeispiel

In einer älteren Version der Spezifikation war `box-ordinal-group` enthalten, um die Anzeigereihenfolge von Flex-Kindern innerhalb eines Flex-Containers zu ändern:

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
