---
title: box-flex-group
slug: Web/CSS/Reference/Properties/box-flex-group
l10n:
  sourceCommit: 1bfe630bd8538b64c97c7f684f5ee647a76c1a28
---

{{Non-standard_Header}}{{Deprecated_Header}}

> [!WARNING]
> Dies ist eine Eigenschaft des ursprünglichen CSS Flexible Box Layout Module-Entwurfs. Sie wurde in der Spezifikation ersetzt. Siehe [Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts) für Informationen über den aktuellen Standard.

Die **`box-flex-group`** [CSS](/de/docs/Web/CSS)-Eigenschaft weist den Kindelementen eines Flexbox-Containers eine Flex-Gruppe zu.

Für flexible Elemente, die Flex-Gruppen zugewiesen sind, ist die erste Flex-Gruppe die 1, und höhere Werte spezifizieren nachfolgende Flex-Gruppen. Der Anfangswert ist 1. Bei der Verteilung des zusätzlichen Platzes des Containers berücksichtigt der Browser zuerst alle Elemente innerhalb der ersten Flex-Gruppe. Jedes Element innerhalb dieser Gruppe erhält zusätzlichen Raum basierend auf dem Verhältnis der Flexibilität dieses Elements im Vergleich zur Flexibilität der anderen Elemente innerhalb derselben Flex-Gruppe. Wenn der Raum aller flexiblen Kinder innerhalb der Gruppe auf das Maximum erhöht wurde, wiederholt sich der Vorgang für die Kinder der nächsten Flex-Gruppe, wobei der Überschuss des vorherigen Flex-Gruppenraums verwendet wird. Wenn keine weiteren Flex-Gruppen mehr vorhanden sind und immer noch Platz übrig ist, wird der zusätzliche Platz innerhalb des umschließenden Containers gemäß der {{cssxref("box-pack")}}-Eigenschaft verteilt.

Falls der Container überlaufen würde, nachdem der bevorzugte Raum der Kindelemente berechnet wurde, wird der Platz von flexiblen Elementen in einer ähnlichen Weise entfernt, wie beim Hinzufügen von zusätzlichem Raum. Jede Flex-Gruppe wird der Reihe nach untersucht, und Platz wird entsprechend dem Flexibilitätsverhältnis jedes Elements entfernt. Elemente schrumpfen nicht unter ihre Mindestbreite.

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

### Grundlegendes Anwendungsbeispiel

Im ursprünglichen Flexbox-Entwurf konnte `box-flex-group` verwendet werden, um Flex-Kinder verschiedenen Gruppen zuzuweisen, um flexiblen Raum zu verteilen:

```css
article:nth-child(1) {
  -webkit-box-flex-group: 1;
}

article:nth-child(2) {
  -webkit-box-flex-group: 2;
}
```

Dies wurde nur in auf WebKit basierenden Browsern mit Präfix unterstützt, und in nachfolgenden Versionen der Spezifikation hat diese Funktionalität kein Äquivalent. Stattdessen wird die Verteilung des Raums innerhalb des Flex-Containers jetzt mit [`flex-basis`](/de/docs/Web/CSS/Reference/Properties/flex-basis), [`flex-grow`](/de/docs/Web/CSS/Reference/Properties/flex-grow) und [`flex-shrink`](/de/docs/Web/CSS/Reference/Properties/flex-shrink) gehandhabt.

## Spezifikationen

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("flex")}}
- {{CSSxRef("flex-basis")}}
- {{CSSxRef("flex-grow")}}
- {{CSSxRef("flex-shrink")}}
