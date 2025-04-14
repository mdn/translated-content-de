---
title: box-flex-group
slug: Web/CSS/box-flex-group
l10n:
  sourceCommit: 0d43b58f31f30e5dbafd9c117a467e389cc8b176
---

{{CSSRef}}{{Non-standard_Header}}{{Deprecated_Header}}

> [!WARNING]
> Dies ist eine Eigenschaft des ursprünglichen CSS-Flexiblen Box-Layout-Entwurfs. Sie wurde in der Spezifikation ersetzt. Siehe [flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) für Informationen über den aktuellen Standard.

Die **`box-flex-group`** [CSS](/de/docs/Web/CSS) Eigenschaft ordnet die Kind-Elemente des Flexbox einem Flex-Gruppe zu.

Für flexible Elemente, die Flex-Gruppen zugewiesen sind, ist die erste Flex-Gruppe 1, und höhere Werte geben nachfolgende Flex-Gruppen an. Der Anfangswert ist 1. Beim Aufteilen des überschüssigen Platzes der Box berücksichtigt der Browser zunächst alle Elemente innerhalb der ersten Flex-Gruppe. Jedes Element innerhalb dieser Gruppe erhält zusätzlichen Platz basierend auf dem Verhältnis der Flexibilität dieses Elements im Vergleich zur Flexibilität anderer Elemente innerhalb derselben Flex-Gruppe. Wenn der Platz aller flexiblen Kinder innerhalb der Gruppe auf das Maximum erhöht wurde, wird der Vorgang für die Kinder innerhalb der nächsten Flex-Gruppe wiederholt, wobei jeglicher Platz verwendet wird, der aus der vorherigen Flex-Gruppe übrig geblieben ist. Sobald es keine weiteren Flex-Gruppen mehr gibt und noch immer Platz übrig ist, wird der zusätzliche Platz innerhalb der enthaltenen Box gemäß der {{cssxref("box-pack")}} Eigenschaft aufgeteilt.

Wenn die Box überlaufen würde, nachdem der bevorzugte Platz der Kinder berechnet wurde, wird Platz von flexiblen Elementen in ähnlicher Weise entfernt, wie beim Hinzufügen von zusätzlichem Platz. Jede Flex-Gruppe wird der Reihe nach untersucht und Platz wird entsprechend dem Verhältnis der Flexibilität jedes Elements entfernt. Elemente schrumpfen nicht unter ihre Mindestbreiten.

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

### Einfaches Nutzungsbeispiel

Im ursprünglichen Flexbox-Standard konnte `box-flex-group` verwendet werden, um Flex-Kindern unterschiedliche Gruppen zuzuweisen, um flexiblen Platz dazwischen zu verteilen:

```css
article:nth-child(1) {
  -webkit-box-flex-group: 1;
}

article:nth-child(2) {
  -webkit-box-flex-group: 2;
}
```

Dies wurde nur in WebKit-basierten Browsern mit einem Präfix unterstützt, und in nachfolgenden Versionen der Spezifikation hat diese Funktionalität kein Äquivalent. Stattdessen wird die Verteilung des Platzes innerhalb des Flex-Containers nun mit [`flex-basis`](/de/docs/Web/CSS/flex-basis), [`flex-grow`](/de/docs/Web/CSS/flex-grow) und [`flex-shrink`](/de/docs/Web/CSS/flex-shrink) gehandhabt.

## Spezifikationen

Kein Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("flex")}}
- {{CSSxRef("flex-basis")}}
- {{CSSxRef("flex-grow")}}
- {{CSSxRef("flex-shrink")}}
