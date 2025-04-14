---
title: box-ordinal-group
slug: Web/CSS/box-ordinal-group
l10n:
  sourceCommit: 0d43b58f31f30e5dbafd9c117a467e389cc8b176
---

{{CSSRef}}{{Non-standard_Header}}{{Deprecated_Header}}

> [!WARNING]
> Dies ist eine Eigenschaft des ursprünglichen Entwurfs des CSS-Flexible-Box-Layouts. Sie wurde in der Spezifikation ersetzt. Weitere Informationen über den aktuellen Standard finden Sie unter [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox).

Die **`box-ordinal-group`** [CSS](/de/docs/Web/CSS) Eigenschaft ordnet die Kindelemente eines Flexboxes einer ordinalen Gruppe zu.

Ordinale Gruppen können in Verbindung mit der {{CSSxRef("box-direction")}} Eigenschaft verwendet werden, um die Reihenfolge zu steuern, in der die direkten Kinder eines Kastens erscheinen. Wenn die berechnete `box-direction` normal ist, zeigt ein Kasten seine Elemente beginnend mit der niedrigsten nummerierten ordinalen Gruppe an und stellt sicher, dass diese Elemente links (für horizontale Boxen) oder oben (für vertikale Boxen) des Containers erscheinen. Elemente mit derselben ordinalen Gruppe fließen in der Reihenfolge, in der sie im Quell-Dokumentbaum erscheinen. In die entgegengesetzte Richtung werden die ordinalen Gruppen in derselben Reihenfolge geprüft, mit der Ausnahme, dass die Elemente umgekehrt erscheinen.

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

Die `box-ordinal-group` Eigenschaft wird als beliebige positive {{CSSxRef("&lt;integer&gt;")}} angegeben.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntaxRaw(`box-ordinal-group = <integer>`)}}

## Beispiele

### Grundlegendes Anwendungsbeispiel

In einer älteren Version der Spezifikation war `box-ordinal-group` enthalten, um die Anzeigereihenfolge von Flexkindern innerhalb eines Flexcontainers zu ändern:

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
