---
title: Animierbare CSS-Eigenschaften
short-title: Animierbare Eigenschaften
slug: Web/CSS/Guides/Animations/Animatable_properties
l10n:
  sourceCommit: cf928bd19178c302b597bc2c3d747a3eb135c30d
---

[CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) und [Transitionen](/de/docs/Web/CSS/Guides/Transitions) basieren auf dem Konzept der **animierbaren** Eigenschaften, und alle CSS-Eigenschaften sind animierbar, sofern nicht anders angegeben. Der _Animationstyp_ jeder Eigenschaft bestimmt, wie Werte [kombiniert](https://drafts.csswg.org/css-values/#combining-values) werden - interpolieren, addieren oder akkumulieren - für diese Eigenschaft. Transitionen betreffen nur die Interpolation, während Animationen alle drei Kombinationsmethoden verwenden können.

> [!NOTE]
> Der Animationstyp für jede CSS-Eigenschaft ist in ihrer Tabelle "Formale Definition" aufgeführt (z. B., {{CSSXref("color", "", "#formal_definition")}}).

> [!NOTE]
> Die Interpolationsmethode für jeden CSS-Datentyp wird in ihrem Abschnitt "Interpolation" beschrieben (z. B., {{CSSXref("&lt;length&gt;", "", "#interpolation")}}).

## Animationstypen

Es gibt hauptsächlich vier Animationstypen, wie in der [Web Animations](https://drafts.csswg.org/web-animations-1/#animating-properties)-Spezifikation definiert:

- Nicht animierbar
  - : Die Eigenschaft ist nicht animierbar. Sie wird nicht verarbeitet, wenn sie in einem Animations-Schlüsselbild aufgeführt ist, und wird von Übergängen nicht beeinflusst.

    > [!NOTE]
    > Ein Animationseffekt, der nur auf Eigenschaften abzielt, die nicht animierbar sind, zeigt dennoch das übliche Verhalten eines Animationseffekts (z. B., Auslösen des [`animationstart`](/de/docs/Web/API/Element/animationstart_event)-Ereignisses).

- Diskret
  - : Die Werte der Eigenschaft sind nicht additiv, und die Interpolation wechselt bei `50%` vom Startwert zum Endwert. Speziell, wenn `p` den Fortschrittswert bezeichnet:
    - Wenn `p < 0,5`, dann `V_result = V_start`;
    - Wenn `p ≥ 0,5`, dann `V_result = V_end`.

- Nach berechnetem Wert
  - : Entsprechende einzelne Komponenten der berechneten Werte werden unter Verwendung des angegebenen Verfahrens für diesen Werttyp kombiniert. Wenn die Anzahl der Komponenten oder die Typen der entsprechenden Komponenten nicht übereinstimmen oder wenn einer der Komponentenwerte eine diskrete Animation verwendet und die beiden entsprechenden Werte nicht übereinstimmen, dann kombinieren sich die Eigenschaftswerte als diskret.

- Wiederholbare Liste
  - : Dasselbe wie nach berechnetem Wert, außer dass, wenn die zwei Listen unterschiedliche Anzahlen von Elementen haben, sie zuerst auf das kleinste gemeinsame Vielfache der Anzahl der Elemente wiederholt werden. Jedes Element wird dann nach berechnetem Wert kombiniert. Wenn ein Wertepaar nicht kombiniert werden kann oder ein Komponentenwert eine diskrete Animation verwendet, dann kombinieren sich die Eigenschaftswerte als diskret.

Einige Eigenschaften haben ein spezifisches Interpolationsverhalten, das von diesen vier Typen nicht abgedeckt wird. In diesem Fall wird auf den Abschnitt "Interpolation" der Eigenschaft verwiesen (z. B., {{CSSXref("visibility", "", "#interpolation")}}).

## Animieren von benutzerdefinierten Eigenschaften

Für benutzerdefinierte Eigenschaften, die mit der Methode [`registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static) registriert sind, ist der Animationstyp nach berechnetem Wert, wobei der berechnete Werttyp [bestimmt](https://drafts.css-houdini.org/css-properties-values-api/#calculation-of-computed-values) wird durch die Syntaxdefinition der Eigenschaft.

Für nicht registrierte benutzerdefinierte Eigenschaften ist der Animationstyp diskret.

## Siehe auch

- {{cssxref("transition-behavior")}}
- {{cssxref("@starting-style")}}
- [CSS-Animationen verwenden](/de/docs/Web/CSS/Guides/Animations/Using)
- [CSS-Transitionen verwenden](/de/docs/Web/CSS/Guides/Transitions/Using)
