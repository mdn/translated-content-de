---
title: box-flex-group
slug: Web/CSS/Reference/Properties/box-flex-group
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{Non-standard_Header}}{{Deprecated_Header}}

> [!WARNING]
> Dies ist eine Eigenschaft des ursprünglichen CSS flexible box layout Modulentwurfs. Sie wurde in der Spezifikation ersetzt. Siehe [flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts) für Informationen über den aktuellen Standard.

Die **`box-flex-group`** [CSS](/de/docs/Web/CSS) Eigenschaft ordnet die Kind-Elemente des Flexbox-Containers einer Flex-Gruppe zu.

Für flexible Elemente, die Flex-Gruppen zugeordnet sind, ist die erste Flex-Gruppe 1, und höhere Werte spezifizieren nachfolgende Flex-Gruppen. Der Anfangswert ist 1. Bei der Aufteilung des zusätzlichen Platzes im Container berücksichtigt der Browser zuerst alle Elemente innerhalb der ersten Flex-Gruppe. Jedes Element innerhalb dieser Gruppe erhält zusätzlichen Platz basierend auf dem Verhältnis der Flexibilität dieses Elements im Vergleich zur Flexibilität der anderen Elemente innerhalb derselben Flex-Gruppe. Wenn der Platz aller flexiblen Kinder innerhalb der Gruppe bis zum Maximum erhöht wurde, wird der Vorgang für die Kinder innerhalb der nächsten Flex-Gruppe mit dem übrig gebliebenen Platz der vorherigen Flex-Gruppe wiederholt. Sobald es keine weiteren Flex-Gruppen mehr gibt und noch Platz übrig ist, wird der zusätzliche Platz innerhalb des umgebenden Containers gemäß der {{cssxref("box-pack")}} Eigenschaft verteilt.

Wenn der Container überläuft, nachdem der bevorzugte Platz der Kinder berechnet wurde, wird Platz von flexiblen Elementen in ähnlicher Weise entfernt, wie er beim Hinzufügen von zusätzlichem Platz verwendet wird. Jede Flex-Gruppe wird der Reihe nach betrachtet und Platz wird entsprechend dem Verhältnis der Flexibilität jedes Elements entfernt. Elemente schrumpfen nicht unter ihre minimalen Breiten.

## Syntax

```css
/* <integer> values */
box-flex-group: 1;
box-flex-group: 5;

/* Global values */
box-flex-group: inherit;
box-flex-group: initial;
box-flex-group: unset;
```

Die `box-flex-group` Eigenschaft wird als beliebiger positiver {{CSSxRef("&lt;integer&gt;")}} angegeben.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntaxRaw(`box-flex-group = <integer>`)}}

## Beispiele

### Grundlegendes Nutzungsbeispiel

Im ursprünglichen flexbox Entwurf konnte `box-flex-group` verwendet werden, um Flex-Kinder verschiedenen Gruppen zuzuordnen, um flexiblen Raum zu verteilen:

```css
article:nth-child(1) {
  -webkit-box-flex-group: 1;
}

article:nth-child(2) {
  -webkit-box-flex-group: 2;
}
```

Dies wurde nur in WebKit-basierten Browsern mit einem Präfix unterstützt, und in nachfolgenden Versionen der Spezifikation hat diese Funktionalität kein Äquivalent. Stattdessen wird die Aufteilung des Raums innerhalb des Flex-Containers jetzt mit [`flex-basis`](/de/docs/Web/CSS/Reference/Properties/flex-basis), [`flex-grow`](/de/docs/Web/CSS/Reference/Properties/flex-grow), und [`flex-shrink`](/de/docs/Web/CSS/Reference/Properties/flex-shrink) gehandhabt.

## Spezifikationen

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("flex")}}
- {{CSSxRef("flex-basis")}}
- {{CSSxRef("flex-grow")}}
- {{CSSxRef("flex-shrink")}}
