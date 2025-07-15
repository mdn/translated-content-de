---
title: box-flex-group
slug: Web/CSS/box-flex-group
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{Non-standard_Header}}{{Deprecated_Header}}

> [!WARNING]
> Dies ist eine Eigenschaft des ursprünglichen Entwurfs des CSS Flexible Box Layout Moduls. Sie wurde in der Spezifikation ersetzt. Siehe [flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) für Informationen über den aktuellen Standard.

Die **`box-flex-group`** [CSS](/de/docs/Web/CSS)-Eigenschaft ordnet die Kindelemente des Flexbox-Containers einer Flex-Gruppe zu.

Für flexible Elemente, die Flex-Gruppen zugewiesen sind, ist die erste Flex-Gruppe 1, und höhere Werte geben nachfolgende Flex-Gruppen an. Der Anfangswert ist 1. Bei der Aufteilung des zusätzlichen Platzes der Box berücksichtigt der Browser zuerst alle Elemente innerhalb der ersten Flex-Gruppe. Jedes Element innerhalb dieser Gruppe erhält zusätzlichen Raum basierend auf dem Verhältnis der Flexibilität dieses Elements im Vergleich zur Flexibilität anderer Elemente innerhalb derselben Flex-Gruppe. Wenn der Raum aller flexiblen Kinder innerhalb der Gruppe bis zum Maximum vergrößert wurde, wird der Prozess für die Kinder der nächsten Flex-Gruppe wiederholt, wobei der verbleibende Raum aus der vorherigen Flex-Gruppe verwendet wird. Sobald es keine weiteren Flex-Gruppen mehr gibt und noch Platz übrig ist, wird der zusätzliche Raum innerhalb der enthaltenen Box gemäß der {{cssxref("box-pack")}}-Eigenschaft aufgeteilt.

Wenn die Box nach Berechnung des bevorzugten Raums der Kinder überfüllt wäre, wird der Raum von flexiblen Elementen auf ähnliche Weise entfernt, wie er hinzugefügt wurde. Jede Flex-Gruppe wird nacheinander betrachtet und der Raum wird entsprechend dem Verhältnis der Flexibilität jedes Elements entfernt. Elemente schrumpfen nicht unter ihre minimalen Breiten.

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

Die `box-flex-group`-Eigenschaft wird als jede positive {{CSSxRef("&lt;integer&gt;")}} angegeben.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntaxRaw(`box-flex-group = <integer>`)}}

## Beispiele

### Grundlegendes Nutzungbeispiel

Im ursprünglichen Flexbox-Entwurf konnte `box-flex-group` verwendet werden, um Flex-Kinder verschiedenen Gruppen zuzuweisen, um flexiblen Raum zwischen ihnen zu verteilen:

```css
article:nth-child(1) {
  -webkit-box-flex-group: 1;
}

article:nth-child(2) {
  -webkit-box-flex-group: 2;
}
```

Dies wurde nur in auf WebKit basierenden Browsern mit einem Präfix unterstützt, und in späteren Versionen der Spezifikation hat diese Funktionalität kein Äquivalent. Stattdessen wird die Verteilung von Raum innerhalb des Flex-Containers nun mit [`flex-basis`](/de/docs/Web/CSS/flex-basis), [`flex-grow`](/de/docs/Web/CSS/flex-grow) und [`flex-shrink`](/de/docs/Web/CSS/flex-shrink) gehandhabt.

## Spezifikationen

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("flex")}}
- {{CSSxRef("flex-basis")}}
- {{CSSxRef("flex-grow")}}
- {{CSSxRef("flex-shrink")}}
