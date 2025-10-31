---
title: box-flex-group
slug: Web/CSS/Reference/Properties/box-flex-group
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{Non-standard_Header}}{{Deprecated_Header}}

> [!WARNING]
> Dies ist eine Eigenschaft des ursprünglichen Entwurfs des CSS Flexbox-Layouts. Sie wurde in der Spezifikation ersetzt. Sehen Sie sich [flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) für Informationen über den aktuellen Standard an.

Die **`box-flex-group`** [CSS](/de/docs/Web/CSS) Eigenschaft weist die Kindelemente des Flexbox-Containers einer Flex-Gruppe zu.

Für flexible Elemente, die Flex-Gruppen zugewiesen sind, ist die erste Flex-Gruppe 1 und höhere Werte spezifizieren nachfolgende Flex-Gruppen. Der Anfangswert ist 1. Wenn der zusätzliche Platz des Containers aufgeteilt wird, berücksichtigt der Browser zuerst alle Elemente innerhalb der ersten Flex-Gruppe. Jedes Element innerhalb dieser Gruppe erhält zusätzlichen Platz basierend auf dem Verhältnis der Flexibilität dieses Elements im Vergleich zur Flexibilität anderer Elemente innerhalb derselben Flex-Gruppe. Wenn der Platz aller flexiblen Kinder innerhalb der Gruppe auf das Maximum erweitert wurde, wird der Vorgang für die Kinder innerhalb der nächsten Flex-Gruppe wiederholt, wobei der verbleibende Platz von der vorherigen Flex-Gruppe verwendet wird. Wenn es keine weiteren Flex-Gruppen gibt und noch Platz übrig ist, wird der zusätzliche Platz innerhalb des umschließenden Containers gemäß der {{cssxref("box-pack")}}-Eigenschaft aufgeteilt.

Wenn der Container überlaufen würde, nachdem der bevorzugte Platz der Kinder berechnet wurde, wird der Raum von flexiblen Elementen auf ähnliche Weise entfernt, wie er hinzugefügt wurde. Jede Flex-Gruppe wird der Reihe nach überprüft, und Platz wird entsprechend dem Verhältnis der Flexibilität jedes Elements entfernt. Elemente schrumpfen nicht unter ihre minimalen Breiten.

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

Die `box-flex-group` Eigenschaft wird als eine beliebige positive {{CSSxRef("&lt;integer&gt;")}} angegeben.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntaxRaw(`box-flex-group = <integer>`)}}

## Beispiele

### Einfaches Anwendungsbeispiel

Im ursprünglichen Flexbox-Entwurf konnte `box-flex-group` verwendet werden, um Flex-Kinder verschiedenen Gruppen zuzuweisen, um flexiblen Platz zwischen ihnen zu verteilen:

```css
article:nth-child(1) {
  -webkit-box-flex-group: 1;
}

article:nth-child(2) {
  -webkit-box-flex-group: 2;
}
```

Dies wurde nur jemals in WebKit-basierten Browsern mit einem Präfix unterstützt, und in nachfolgenden Versionen der Spezifikation hat diese Funktionalität kein Äquivalent. Stattdessen wird die Verteilung des Platzes innerhalb des Flex-Containers nun mit [`flex-basis`](/de/docs/Web/CSS/Reference/Properties/flex-basis), [`flex-grow`](/de/docs/Web/CSS/Reference/Properties/flex-grow) und [`flex-shrink`](/de/docs/Web/CSS/Reference/Properties/flex-shrink) gehandhabt.

## Spezifikationen

Teil keiner Norm.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("flex")}}
- {{CSSxRef("flex-basis")}}
- {{CSSxRef("flex-grow")}}
- {{CSSxRef("flex-shrink")}}
