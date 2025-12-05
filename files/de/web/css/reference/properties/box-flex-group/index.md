---
title: box-flex-group
slug: Web/CSS/Reference/Properties/box-flex-group
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

{{Non-standard_Header}}{{Deprecated_Header}}

> [!WARNING]
> Dies ist eine Eigenschaft des ursprünglichen Entwurfs des CSS Flexible Box Layout Moduls. Sie wurde in der Spezifikation ersetzt. Siehe [flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts) für Informationen über den aktuellen Standard.

Die **`box-flex-group`** [CSS](/de/docs/Web/CSS) Eigenschaft ordnet die Kind-Elemente des Flexbox-Containers einer Flex-Gruppe zu.

Für flexible Elemente, die Flex-Gruppen zugewiesen sind, ist die erste Flex-Gruppe 1 und höhere Werte bestimmen nachfolgende Flex-Gruppen. Der Anfangswert ist 1. Beim Verteilen des zusätzlichen Raums des Containers berücksichtigt der Browser zuerst alle Elemente innerhalb der ersten Flex-Gruppe. Jedes Element innerhalb dieser Gruppe erhält zusätzlichen Raum basierend auf dem Verhältnis der Flexibilität dieses Elements im Vergleich zur Flexibilität anderer Elemente innerhalb derselben Flex-Gruppe. Wenn der Raum aller flexiblen Kinder innerhalb der Gruppe auf das Maximum erhöht wurde, wiederholt sich der Vorgang für die Kinder innerhalb der nächsten Flex-Gruppe, wobei der übrig gebliebene Raum aus der vorherigen Flex-Gruppe verwendet wird. Sobald keine weiteren Flex-Gruppen mehr vorhanden sind und noch Raum übrig ist, wird der zusätzliche Raum innerhalb des umschließenden Containers entsprechend der {{cssxref("box-pack")}} Eigenschaft aufgeteilt.

Wenn der Container nach der Berechnung des bevorzugten Raums der Kinder überläuft, wird Raum von den flexiblen Elementen entfernt, ähnlich wie beim Hinzufügen von zusätzlichem Raum. Jede Flex-Gruppe wird der Reihe nach untersucht, und Raum wird gemäß dem Verhältnis der Flexibilität jedes Elements entfernt. Elemente schrumpfen nicht unter ihre Mindestbreiten.

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

Die `box-flex-group` Eigenschaft wird als jede positive {{CSSxRef("&lt;integer&gt;")}} angegeben.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntaxRaw(`box-flex-group = <integer>`)}}

## Beispiele

### Grundlegendes Anwendungsbeispiel

Im ursprünglichen Flexbox-Spezifikation konnte `box-flex-group` verwendet werden, um Flex-Kinder verschiedenen Gruppen zuzuweisen, um den flexiblen Raum zu verteilen:

```css
article:nth-child(1) {
  -webkit-box-flex-group: 1;
}

article:nth-child(2) {
  -webkit-box-flex-group: 2;
}
```

Dies wurde nur in WebKit-basierten Browsern mit einem Präfix unterstützt, und in späteren Versionen der Spezifikation gibt es keine entsprechende Funktionalität. Stattdessen wird die Verteilung des Raums innerhalb des Flex-Containers jetzt mit {{cssxref("flex-basis")}}, {{cssxref("flex-grow")}}, und {{cssxref("flex-shrink")}} gehandhabt.

## Spezifikationen

Kein Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("flex")}}
- {{CSSxRef("flex-basis")}}
- {{CSSxRef("flex-grow")}}
- {{CSSxRef("flex-shrink")}}
