---
title: "`box-flex-group` CSS property"
short-title: box-flex-group
slug: Web/CSS/Reference/Properties/box-flex-group
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

{{Non-standard_Header}}{{Deprecated_Header}}

> [!WARNING]
> Dies ist eine Eigenschaft des ursprünglichen Entwurfs des CSS Flexible Box Layout Moduls. Sie wurde in der Spezifikation ersetzt. Informationen über den aktuellen Standard finden Sie unter [flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts).

Die **`box-flex-group`** [CSS](/de/docs/Web/CSS) Eigenschaft ordnet die Kind-Elemente des Flexbox-Layouts einer Flex-Gruppe zu.

Für flexible Elemente, die Flex-Gruppen zugewiesen sind, ist die erste Flex-Gruppe 1, und höhere Werte geben nachfolgende Flex-Gruppen an. Der Anfangswert ist 1. Beim Aufteilen des überschüssigen Platzes der Box berücksichtigt der Browser zunächst alle Elemente innerhalb der ersten Flex-Gruppe. Jedes Element innerhalb dieser Gruppe erhält zusätzlichen Platz basierend auf dem Verhältnis der Flexibilität dieses Elements im Vergleich zur Flexibilität anderer Elemente innerhalb derselben Flex-Gruppe. Wenn der Platz aller flexiblen Kinder innerhalb der Gruppe auf das Maximum vergrößert wurde, wird der Vorgang für die Kinder innerhalb der nächsten Flex-Gruppe wiederholt, wobei der verbleibende Platz von der vorherigen Flex-Gruppe verwendet wird. Sobald es keine weiteren Flex-Gruppen mehr gibt und immer noch Platz verbleibt, wird der zusätzliche Raum innerhalb der umschließenden Box gemäß der Eigenschaft {{cssxref("box-pack")}} aufgeteilt.

Wenn die Box nach Berechnung des bevorzugten Platzes der Kinder überlaufen würde, wird der Raum von flexiblen Elementen auf ähnliche Weise entfernt, wie er beim Hinzufügen zusätzlichen Raums eingesetzt wird. Jede Flex-Gruppe wird nacheinander geprüft, und der Raum wird entsprechend dem Flexibilitätsverhältnis jedes Elements entfernt. Elemente schrumpfen nicht unter ihre minimalen Breiten.

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

### Einfaches Anwendungsbeispiel

Im ursprünglichen Flexbox-Standard konnte `box-flex-group` verwendet werden, um Flex-Kinder verschiedenen Gruppen zuzuweisen, um flexiblen Raum zu verteilen:

```css
article:nth-child(1) {
  -webkit-box-flex-group: 1;
}

article:nth-child(2) {
  -webkit-box-flex-group: 2;
}
```

Dies wurde nur jemals in WebKit-basierten Browsern mit einem Präfix unterstützt, und in nachfolgenden Versionen der Spezifikation gibt es hierfür kein Äquivalent. Stattdessen wird die Verteilung des Raumes innerhalb des Flex-Containers jetzt mithilfe von {{cssxref("flex-basis")}}, {{cssxref("flex-grow")}} und {{cssxref("flex-shrink")}} behandelt.

## Spezifikationen

Kein Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("flex")}}
- {{CSSxRef("flex-basis")}}
- {{CSSxRef("flex-grow")}}
- {{CSSxRef("flex-shrink")}}
