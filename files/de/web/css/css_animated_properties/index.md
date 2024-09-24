---
title: Animierbare CSS-Eigenschaften
slug: Web/CSS/CSS_animated_properties
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}

[CSS-Animationen](/de/docs/Web/CSS/CSS_animations) und [Transitionen](/de/docs/Web/CSS/CSS_transitions) basieren auf dem Konzept der **animierbaren** Eigenschaften, und alle CSS-Eigenschaften sind animierbar, es sei denn, es ist anders festgelegt. Der _Animationstyp_ jeder Eigenschaft bestimmt, wie Werte [kombiniert](https://drafts.csswg.org/css-values/#combining-values) werden - interpoliert, addiert oder akkumuliert - für diese Eigenschaft. Transitionen beinhalten nur Interpolation, während Animationen alle drei Kombinationsmethoden verwenden können.

> [!NOTE]
> Der Animationstyp für jede CSS-Eigenschaft ist in ihrer "Formalen Definition" Tabelle angegeben (z.B. {{CSSXref("color", "", "#formal_definition")}}).

> [!NOTE]
> Die Interpolationsmethode für jeden CSS-Datentyp wird in seinem Abschnitt "Interpolation" beschrieben (z.B. {{CSSXref("&lt;length&gt;", "", "#interpolation")}}).

## Animationstypen

Es gibt hauptsächlich vier Animationstypen, wie in der [Web Animations](https://drafts.csswg.org/web-animations-1/#animating-properties) Spezifikation definiert:

- Nicht animierbar

  - : Die Eigenschaft ist nicht animierbar. Sie wird nicht verarbeitet, wenn sie in einem Animations-Keyframe aufgeführt ist und wird von Transitionen nicht beeinflusst.

    > [!NOTE]
    > Ein Animationseffekt, der nur auf Eigenschaften abzielt, die nicht animierbar sind, zeigt dennoch das übliche Verhalten eines Animationseffekts (z.B. das Auslösen des {{DOMXref("Element/animationstart_event", "animationstart")}} Ereignisses).

- Diskret

  - : Die Werte der Eigenschaft sind nicht additiv, und die Interpolation wechselt beim `50%`-Fortschritt vom Startwert zum Endwert. Insbesondere, wenn `p` den Fortschrittswert bezeichnet:

    - Wenn `p < 0.5`, dann `V_result = V_start`;
    - Wenn `p ≥ 0.5`, dann `V_result = V_end`.

- Nach berechnetem Wert

  - : Entsprechende Einzelkomponenten der berechneten Werte werden mit dem angegebenen Verfahren für diesen Wertetyp kombiniert. Wenn die Anzahl der Komponenten oder die Typen der entsprechenden Komponenten nicht übereinstimmen oder ein Komponentenwert diskrete Animation verwendet und die beiden entsprechenden Werte nicht übereinstimmen, werden die Eigenschaftswerte diskret kombiniert.

- Wiederholbare Liste

  - : Entspricht "nach berechnetem Wert", außer dass bei zwei Listen mit unterschiedlicher Anzahl von Elementen sie zunächst auf das kleinste gemeinsame Vielfache der Elemente wiederholt werden. Jedes Element wird dann nach berechnetem Wert kombiniert. Kann ein Wertepaar nicht kombiniert werden oder verwendet ein beliebiger Komponentenwert diskrete Animation, werden die Eigenschaftswerte diskret kombiniert.

Einige Eigenschaften haben ein spezifisches Interpolationsverhalten, das von diesen vier Typen nicht abgedeckt wird. In diesem Fall konsultieren Sie den Abschnitt "Interpolation" der Eigenschaft (z.B. {{CSSXref("visibility", "", "#interpolation")}}).

## Animieren von benutzerdefinierten Eigenschaften

Für benutzerdefinierte Eigenschaften, die mit der {{DOMXref("CSS/registerProperty_static", "registerProperty()")}} Methode registriert werden, ist der Animationstyp nach berechnetem Wert, wobei der berechnete Wertetyp durch die Syntaxdefinition der Eigenschaft [bestimmt](https://drafts.css-houdini.org/css-properties-values-api/#calculation-of-computed-values) wird.

Für nicht registrierte benutzerdefinierte Eigenschaften ist der Animationstyp diskret.

## Siehe auch

- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- [Verwendung von CSS-Transitionen](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)
