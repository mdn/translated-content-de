---
title: box-flex-group
slug: Web/CSS/box-flex-group
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}{{Non-standard_Header}}{{Deprecated_Header}}

> [!WARNING]
> Dies ist eine Eigenschaft des ursprünglichen Entwurfs des CSS-Flexiblen Box-Layouts. Sie wurde in der Spezifikation ersetzt. Siehe [flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) für Informationen über den aktuellen Standard.

Die **`box-flex-group`** [CSS](/de/docs/Web/CSS) Eigenschaft ordnet den Kindelementen der Flexbox eine Flexgruppe zu.

Für flexible Elemente, die Flexgruppen zugewiesen sind, ist die erste Flexgruppe 1, und höhere Werte bezeichnen nachfolgende Flexgruppen. Der Anfangswert ist 1. Bei der Aufteilung des zusätzlichen Platzes im Rahmen betrachtet der Browser zunächst alle Elemente innerhalb der ersten Flexgruppe. Jedes Element innerhalb dieser Gruppe erhält zusätzlichen Raum basierend auf dem Verhältnis der Flexibilität dieses Elements im Vergleich zu den anderen Elementen innerhalb derselben Flexgruppe. Wenn der Platz aller flexiblen Kinder innerhalb der Gruppe auf das Maximum erweitert wurde, wiederholt sich der Prozess für die Kinder innerhalb der nächsten Flexgruppe und verwendet dabei jeden Raum, der von der vorherigen Flexgruppe übrig geblieben ist. Wenn es keine weiteren Flexgruppen gibt und immer noch Platz übrig ist, wird der zusätzliche Raum innerhalb des enthaltenen Rahmens gemäß der {{cssxref("box-pack")}} Eigenschaft aufgeteilt.

Wenn der Rahmen nach der Berechnung des bevorzugten Raums der Kinder überläuft, wird der Raum flexiblen Elementen in einer ähnlichen Weise entzogen, wie er zugefügt wurde. Jede Flexgruppe wird der Reihe nach untersucht und der Raum wird entsprechend dem Verhältnis der Flexibilität jedes Elements entfernt. Elemente schrumpfen nicht unter ihre minimalen Breiten.

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

```plain
box-flex-group =
  <integer>
```

## Beispiele

### Einfaches Anwendungsbeispiel

Im ursprünglichen Flexbox-Spez, konnte `box-flex-group` verwendet werden, um flexiblen Kindern unterschiedliche Gruppen zuzuweisen, um den flexiblen Raum zwischen ihnen zu verteilen:

```css
article:nth-child(1) {
  -webkit-box-flex-group: 1;
}

article:nth-child(2) {
  -webkit-box-flex-group: 2;
}
```

Dies wurde nur jemals in WebKit-basierten Browsern mit einem Präfix unterstützt, und in nachfolgenden Versionen der Spezifikation hat diese Funktionalität kein Äquivalent. Stattdessen wird die Verteilung des Raumes innerhalb des Flexcontainers nun mit [`flex-basis`](/de/docs/Web/CSS/flex-basis), [`flex-grow`](/de/docs/Web/CSS/flex-grow) und [`flex-shrink`](/de/docs/Web/CSS/flex-shrink) gehandhabt.

## Spezifikationen

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("flex")}}
- {{CSSxRef("flex-basis")}}
- {{CSSxRef("flex-grow")}}
- {{CSSxRef("flex-shrink")}}
