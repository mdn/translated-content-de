---
title: box-flex-group
slug: Web/CSS/box-flex-group
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}{{Non-standard_Header}}{{Deprecated_Header}}

> [!WARNING]
> Dies ist eine Eigenschaft des ursprünglichen CSS-Flexiblen-Box-Layout-Entwurfs. Sie wurde in der Spezifikation ersetzt. Siehe [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) für Informationen über den aktuellen Standard.

Die **`box-flex-group`**-Eigenschaft von [CSS](/de/docs/Web/CSS) weist die Kindelemente eines Flexbox-Containers einer Flex-Gruppe zu.

Für flexible Elemente, die Flex-Gruppen zugewiesen sind, ist die erste Flex-Gruppe 1, und höhere Werte geben nachfolgende Flex-Gruppen an. Der anfängliche Wert ist 1. Bei der Aufteilung des zusätzlichen Raums der Box berücksichtigt der Browser zunächst alle Elemente innerhalb der ersten Flex-Gruppe. Jedes Element innerhalb dieser Gruppe erhält zusätzlichen Platz basierend auf dem Verhältnis der Flexibilität dieses Elements im Vergleich zur Flexibilität anderer Elemente innerhalb derselben Flex-Gruppe. Wenn der Raum aller flexiblen Kinder innerhalb der Gruppe auf das Maximum erweitert wurde, wiederholt sich der Vorgang für die Kinder innerhalb der nächsten Flex-Gruppe und verwendet dabei den verbleibenden Raum der vorherigen Flex-Gruppe. Sobald keine weiteren Flex-Gruppen verbleiben und noch Platz übrig ist, wird der zusätzliche Platz innerhalb der umgebenden Box gemäß der {{cssxref("box-pack")}}-Eigenschaft verteilt.

Wenn die Box nach der Berechnung des bevorzugten Raums der Kinder überläuft, wird der Raum von flexiblen Elementen auf ähnliche Weise entfernt, wie zusätzlicher Raum hinzugefügt wird. Jede Flex-Gruppe wird der Reihe nach untersucht, und der Raum wird entsprechend dem Verhältnis der Flexibilität jedes Elements entfernt. Elemente schrumpfen nicht unter ihre Mindestbreiten.

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

```plain
box-flex-group =
  <integer>
```

## Beispiele

### Einfaches Anwendungsbeispiel

Im ursprünglichen Flexbox-Spezifikation konnte `box-flex-group` verwendet werden, um Flex-Kinder verschiedenen Gruppen zuzuordnen, um flexiblen Raum zwischen ihnen zu verteilen:

```css
article:nth-child(1) {
  -webkit-box-flex-group: 1;
}

article:nth-child(2) {
  -webkit-box-flex-group: 2;
}
```

Dies wurde nur in WebKit-basierten Browsern mit einem Präfix unterstützt und in den nachfolgenden Versionen der Spezifikation hat diese Funktionalität kein Äquivalent. Stattdessen wird die Verteilung des Raums innerhalb des Flex-Containers jetzt mit [`flex-basis`](/de/docs/Web/CSS/flex-basis), [`flex-grow`](/de/docs/Web/CSS/flex-grow) und [`flex-shrink`](/de/docs/Web/CSS/flex-shrink) behandelt.

## Spezifikationen

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("flex")}}
- {{CSSxRef("flex-basis")}}
- {{CSSxRef("flex-grow")}}
- {{CSSxRef("flex-shrink")}}
