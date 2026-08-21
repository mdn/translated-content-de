---
title: "`box-flex-group` CSS property"
short-title: box-flex-group
slug: Web/CSS/Reference/Properties/box-flex-group
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{Non-standard_Header}}

> [!WARNING]
> Dies ist eine Eigenschaft des ursprünglichen CSS-Flexible-Box-Layout-Modul-Entwurfs. Sie wurde in der Spezifikation ersetzt. Sehen Sie sich [flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts) für Informationen über den aktuellen Standard an.

Die **`box-flex-group`**-[CSS](/de/docs/Web/CSS)-Eigenschaft ordnet die Kindelemente des Flexbox-Containers einer Flex-Gruppe zu.

Für flexible Elemente, die Flex-Gruppen zugeordnet sind, ist die erste Flex-Gruppe 1, und höhere Werte spezifizieren nachfolgende Flex-Gruppen. Der anfängliche Wert ist 1. Beim Verteilen des zusätzlichen Platzes der Box berücksichtigt der Browser zuerst alle Elemente innerhalb der ersten Flex-Gruppe. Jedes Element innerhalb dieser Gruppe erhält zusätzlichen Platz basierend auf dem Verhältnis der Flexibilität dieses Elements im Vergleich zur Flexibilität anderer Elemente innerhalb derselben Flex-Gruppe. Wenn der Platz aller flexiblen Kinder innerhalb der Gruppe auf das Maximum erhöht wurde, wiederholt sich der Prozess für die Kinder innerhalb der nächsten Flex-Gruppe, wobei der verbleibende Platz der vorherigen Flex-Gruppe verwendet wird. Sobald keine weiteren Flex-Gruppen mehr vorhanden sind und noch Platz übrig ist, wird dieser zusätzliche Platz innerhalb der enthaltenen Box gemäß der {{cssxref("box-pack")}}-Eigenschaft verteilt.

Wenn die Box nach der Berechnung des bevorzugten Platzes der Kinder überläuft, wird der zusätzliche Raum von den flexiblen Elementen in ähnlicher Weise entfernt, wie er beim Hinzufügen zusätzlichen Raums hinzugefügt wurde. Jede Flex-Gruppe wird der Reihe nach geprüft und der Raum wird entsprechend dem Verhältnis der Flexibilität jedes Elements entfernt. Elemente schrumpfen nicht unter ihre Mindestbreiten.

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

Die `box-flex-group`-Eigenschaft wird als jede positive {{CSSxRef("&lt;integer&gt;")}} spezifiziert.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntaxRaw(`box-flex-group = <integer>`)}}

## Beispiele

### Beispiel für grundlegende Verwendung

Im ursprünglichen Flexbox-Standard konnte `box-flex-group` verwendet werden, um Flex-Kinder verschiedenen Gruppen zuzuweisen, um flexiblen Raum zwischen ihnen zu verteilen:

```css
article:nth-child(1) {
  -webkit-box-flex-group: 1;
}

article:nth-child(2) {
  -webkit-box-flex-group: 2;
}
```

Dies wurde nur in WebKit-basierten Browsern mit einem Präfix unterstützt, und in späteren Versionen der Spezifikation gibt es dafür keine Entsprechung. Stattdessen wird die Verteilung des Raums innerhalb des Flex-Containers nun mit {{cssxref("flex-basis")}}, {{cssxref("flex-grow")}} und {{cssxref("flex-shrink")}} gehandhabt.

## Spezifikationen

Kein Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("flex")}}
- {{CSSxRef("flex-basis")}}
- {{CSSxRef("flex-grow")}}
- {{CSSxRef("flex-shrink")}}
