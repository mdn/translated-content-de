---
title: box-flex-group
slug: Web/CSS/box-flex-group
l10n:
  sourceCommit: b17ca921175c0a92d21c6c4effbc7fa3dc348a8e
---

{{CSSRef}}{{Non-standard_Header}}{{Deprecated_Header}}

> [!WARNING]
> Dies ist eine Eigenschaft des originalen CSS Flexible Box Layout Modul Entwurfs. Sie wurde in der Spezifikation ersetzt. Siehe [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) für Informationen über den aktuellen Standard.

Die **`box-flex-group`** [CSS](/de/docs/Web/CSS) Eigenschaft weist die Kindelemente der Flexbox einer Flexgruppe zu.

Für flexible Elemente, die Flexgruppen zugewiesen sind, ist die erste Flexgruppe 1 und höhere Werte spezifizieren nachfolgende Flexgruppen. Der Anfangswert ist 1. Beim Aufteilen des zusätzlichen Platzes der Box berücksichtigt der Browser zuerst alle Elemente innerhalb der ersten Flexgruppe. Jedes Element innerhalb dieser Gruppe erhält zusätzlichen Platz basierend auf dem Verhältnis der Flexibilität dieses Elements im Vergleich zur Flexibilität anderer Elemente innerhalb derselben Flexgruppe. Wenn der Platz aller flexiblen Kinder innerhalb der Gruppe bis zum Maximum erhöht wurde, wird der Vorgang für die Kinder in der nächsten Flexgruppe wiederholt, indem jeglicher Restplatz von der vorherigen Flexgruppe verwendet wird. Sobald es keine weiteren Flexgruppen gibt und noch Platz übrig ist, wird der zusätzliche Raum innerhalb der umgebenden Box gemäß der {{cssxref("box-pack")}} Eigenschaft verteilt.

Wenn die Box nach Berechnung des bevorzugten Raums der Kinder überlaufen würde, wird dann Platz von flexiblen Elementen entfernt, ähnlich wie beim Hinzufügen von zusätzlichem Platz. Jede Flexgruppe wird der Reihe nach untersucht und Platz wird entsprechend dem Verhältnis der Flexibilität jedes Elements entfernt. Elemente schrumpfen nicht unter ihre minimalen Breiten.

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

Die `box-flex-group` Eigenschaft wird als positiver {{CSSxRef("&lt;integer&gt;")}} angegeben.

## Offizielle Definition

{{CSSInfo}}

## Offizielle Syntax

```plain
box-flex-group =
  <integer>
```

## Beispiele

### Einfaches Anwendungsbeispiel

Im ursprünglichen Flexbox-Spezifikationsentwurf konnte `box-flex-group` verwendet werden, um Flex-Kinder verschiedenen Gruppen zuzuweisen, um flexiblen Raum zwischen ihnen zu verteilen:

```css
article:nth-child(1) {
  -webkit-box-flex-group: 1;
}

article:nth-child(2) {
  -webkit-box-flex-group: 2;
}
```

Dies wurde nur in auf WebKit basierenden Browsern mit einem Präfix unterstützt, und in den folgenden Versionen der Spezifikation hat diese Funktionalität kein Äquivalent. Stattdessen wird die Verteilung des Raums im Flex-Container nun mit [`flex-basis`](/de/docs/Web/CSS/flex-basis), [`flex-grow`](/de/docs/Web/CSS/flex-grow) und [`flex-shrink`](/de/docs/Web/CSS/flex-shrink) gehandhabt.

## Spezifikationen

Kein Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("flex")}}
- {{CSSxRef("flex-basis")}}
- {{CSSxRef("flex-grow")}}
- {{CSSxRef("flex-shrink")}}
