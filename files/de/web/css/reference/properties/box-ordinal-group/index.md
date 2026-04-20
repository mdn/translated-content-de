---
title: "`box-ordinal-group` CSS property"
short-title: box-ordinal-group
slug: Web/CSS/Reference/Properties/box-ordinal-group
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

{{Non-standard_Header}}{{Deprecated_Header}}

> [!WARNING]
> Dies ist eine Eigenschaft des ursprünglichen CSS-Flexible-Box-Layout-Modul-Entwurfs. Sie wurde in der Spezifikation ersetzt. Siehe [flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts) für Informationen über den aktuellen Standard.

Die **`box-ordinal-group`** [CSS](/de/docs/Web/CSS) Eigenschaft ordnet die Kind-Elemente eines Flexcontainers einer ordinalen Gruppe zu.

Ordinale Gruppen können in Verbindung mit der {{CSSxRef("box-direction")}} Eigenschaft verwendet werden, um die Reihenfolge zu steuern, in der die direkten Kinder eines Containers erscheinen. Wenn die berechnete `box-direction` normal ist, zeigt ein Container seine Elemente beginnend mit der niedrigst nummerierten ordinalen Gruppe und stellt sicher, dass diese Elemente links (für horizontale Container) oder oben (für vertikale Container) im Container erscheinen. Elemente mit derselben ordinalen Gruppe werden in der Reihenfolge dargestellt, in der sie im Quell-Dokumentbaum erscheinen. In umgekehrter Richtung werden die ordinalen Gruppen in derselben Reihenfolge geprüft, nur dass die Elemente umgekehrt erscheinen.

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

In einer älteren Version der Spezifikation war `box-ordinal-group` enthalten, um die Anzeige-Reihenfolge von Flexkindern innerhalb eines Flexcontainers zu ändern:

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
