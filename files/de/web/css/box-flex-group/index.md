---
title: box-flex-group
slug: Web/CSS/box-flex-group
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}{{Non-standard_Header}}{{Deprecated_Header}}

> [!WARNING]
> Dies ist eine Eigenschaft des ursprünglichen Entwurfs des CSS Flexbox-Layout-Moduls. Sie wurde in der Spezifikation ersetzt. Weitere Informationen über den aktuellen Standard finden Sie unter [flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox).

Die **`box-flex-group`** [CSS](/de/docs/Web/CSS)-Eigenschaft ordnet den Kindelementen der Flexbox eine Flexgruppe zu.

Für flexible Elemente, die Flexgruppen zugewiesen sind, ist die erste Flexgruppe 1 und höhere Werte spezifizieren nachfolgende Flexgruppen. Der Standardwert ist 1. Beim Aufteilen des zusätzlichen Platzes des Kastens berücksichtigt der Browser zunächst alle Elemente innerhalb der ersten Flexgruppe. Jedes Element innerhalb dieser Gruppe erhält zusätzlichen Platz basierend auf dem Verhältnis der Flexibilität dieses Elements im Vergleich zur Flexibilität anderer Elemente innerhalb derselben Flexgruppe. Wenn der Platz aller flexiblen Kinder innerhalb der Gruppe auf das Maximum vergrößert wurde, wird der Vorgang für die Kinder der nächsten Flexgruppe wiederholt, wobei der vom vorherigen Flexgruppe verbleibende Platz verwendet wird. Sobald keine weiteren Flexgruppen mehr vorhanden sind und noch Platz übrig bleibt, wird der zusätzliche Platz entsprechend der {{cssxref("box-pack")}}-Eigenschaft innerhalb des umgebenden Kastens verteilt.

Wenn der Kasten überläuft, nachdem der bevorzugte Platz der Kinder berechnet wurde, wird der Platz von flexiblen Elementen auf ähnliche Weise entfernt, wie dies bei der Zugabe von zusätzlichem Platz geschieht. Jede Flexgruppe wird der Reihe nach geprüft und der Platz wird entsprechend dem Flexibilitätsverhältnis jedes Elements entfernt. Elemente schrumpfen nicht unter ihre minimalen Breiten.

## Syntax

```css
/* <integer>-Werte */
box-flex-group: 1;
box-flex-group: 5;

/* Globale Werte */
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

Im ursprünglichen Flexbox-Spezifikationsentwurf konnte `box-flex-group` verwendet werden, um Flexkindern unterschiedliche Gruppen zuzuweisen, um flexiblen Raum zwischen ihnen zu verteilen:

```css
article:nth-child(1) {
  -webkit-box-flex-group: 1;
}

article:nth-child(2) {
  -webkit-box-flex-group: 2;
}
```

Dies wurde nur in WebKit-basierten Browsern mit einem Präfix unterstützt, und in nachfolgenden Versionen der Spezifikation hat diese Funktionalität kein Äquivalent. Stattdessen wird die Verteilung des Raums innerhalb des Flexcontainers nun mit [`flex-basis`](/de/docs/Web/CSS/flex-basis), [`flex-grow`](/de/docs/Web/CSS/flex-grow) und [`flex-shrink`](/de/docs/Web/CSS/flex-shrink) gehandhabt.

## Spezifikationen

Nicht Teil eines Standards.

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{CSSxRef("flex")}}
- {{CSSxRef("flex-basis")}}
- {{CSSxRef("flex-grow")}}
- {{CSSxRef("flex-shrink")}}
