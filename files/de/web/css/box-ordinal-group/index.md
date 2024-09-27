---
title: box-ordinal-group
slug: Web/CSS/box-ordinal-group
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}{{Non-standard_Header}}{{Deprecated_Header}}

> [!WARNING]
> Dies ist eine Eigenschaft des ursprünglichen Entwurfs des flexiblen Box-Layout-Moduls von CSS. Sie wurde in der Spezifikation ersetzt. Informationen zum aktuellen Standard finden Sie unter [flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox).

Die **`box-ordinal-group`** [CSS](/de/docs/Web/CSS) Eigenschaft weist den Kindelementen der Flexbox eine ordinale Gruppe zu.

Ordinalgruppen können in Verbindung mit der {{CSSxRef("box-direction")}} Eigenschaft verwendet werden, um die Reihenfolge zu steuern, in der die direkten Kinder eines Kastens erscheinen. Wenn die berechnete `box-direction` normal ist, wird ein Kasten seine Elemente beginnend mit der niedrigst nummerierten ordinalen Gruppe anzeigen und sicherstellen, dass diese Elemente links (für horizontale Kästen) oder oben (für vertikale Kästen) des Containers erscheinen. Elemente mit derselben ordinalen Gruppe werden in der Reihenfolge angezeigt, in der sie im Quelldokumentbaum erscheinen. In umgekehrter Richtung werden die ordinalen Gruppen in derselben Reihenfolge geprüft, außer dass die Elemente umgekehrt erscheinen.

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

```plain
box-ordinal-group =
  <integer>
```

## Beispiele

### Grundlegendes Anwendungsbeispiel

In einer älteren Version der Spezifikation war `box-ordinal-group` enthalten, um die Anzeigereihenfolge der Flex-Kinder innerhalb eines Flex-Containers zu ändern:

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
