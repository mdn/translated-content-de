---
title: Animierbare CSS-Eigenschaften
short-title: Animierbare Eigenschaften
slug: Web/CSS/CSS_animated_properties
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

[CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) und [Übergänge](/de/docs/Web/CSS/Guides/Transitions) basieren auf dem Konzept von **animierbaren** Eigenschaften, und alle CSS-Eigenschaften sind animierbar, es sei denn, es ist anders angegeben. Der _Animationstyp_ jeder Eigenschaft bestimmt, wie Werte für diese Eigenschaft [kombiniert](https://drafts.csswg.org/css-values/#combining-values) werden - interpolieren, addieren oder akkumulieren. Übergänge beinhalten nur die Interpolation, während Animationen alle drei Kombinationsmethoden verwenden können.

> [!NOTE]
> Der Animationstyp für jede CSS-Eigenschaft ist in ihrer Tabelle „Formale Definition“ aufgeführt (z.B. {{CSSXref("color", "", "#formal_definition")}}).

> [!NOTE]
> Die Interpolationsmethode für jeden CSS-Datentyp wird im Abschnitt „Interpolation“ beschrieben (z.B. {{CSSXref("&lt;length&gt;", "", "#interpolation")}}).

## Animationstypen

Es gibt hauptsächlich vier Animationstypen, wie in der Spezifikation für [Web Animationen](https://drafts.csswg.org/web-animations-1/#animating-properties) definiert:

- Nicht animierbar
  - : Die Eigenschaft ist nicht animierbar. Sie wird nicht verarbeitet, wenn sie in einem Animations-Schlüsselbild aufgeführt ist, und wird von Übergängen nicht beeinflusst.

    > [!NOTE]
    > Ein Animationseffekt, der nur auf Eigenschaften abzielt, die nicht animierbar sind, zeigt dennoch das übliche Verhalten für einen Animationseffekt (z.B. das Auslösen des [`animationstart`](/de/docs/Web/API/Element/animationstart_event)-Ereignisses).

- Diskret
  - : Die Werte der Eigenschaft sind nicht additiv, und die Interpolation wechselt bei `50%` vom Startwert zum Endwert. Genauer gesagt, indem `p` den Fortschrittswert darstellt:
    - Wenn `p < 0.5`, dann `V_result = V_start`;
    - Wenn `p ≥ 0.5`, dann `V_result = V_end`.

- Nach berechnetem Wert
  - : Entsprechende einzelne Komponenten der berechneten Werte werden durch das für diesen Werttyp angegebene Verfahren kombiniert. Wenn die Anzahl der Komponenten oder die Typen der entsprechenden Komponenten nicht übereinstimmen oder wenn ein Komponentenwert diskrete Animation verwendet und die beiden entsprechenden Werte nicht übereinstimmen, dann kombinieren sich die Eigenschaftswerte diskret.

- Wiederholbare Liste
  - : Gleich wie nach berechnetem Wert, außer dass, wenn die beiden Listen unterschiedliche Anzahlen von Elementen haben, sie zuerst auf das kleinste gemeinsame Vielfache der Anzahl der Elemente wiederholt werden. Jedes Element wird dann nach berechnetem Wert kombiniert. Wenn ein Wertepaar nicht kombiniert werden kann oder ein Komponentenwert diskrete Animation verwendet, dann kombinieren sich die Eigenschaftswerte diskret.

Einige Eigenschaften haben spezifische Interpolationsverhalten, die nicht von diesen vier Typen abgedeckt sind. In diesem Fall lesen Sie im Abschnitt „Interpolation“ der Eigenschaft nach (z.B. {{CSSXref("visibility", "", "#interpolation")}}).

## Animieren benutzerdefinierter Eigenschaften

Für benutzerdefinierte Eigenschaften, die mit der Methode [`registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static) registriert wurden, erfolgt der Animationstyp nach berechnetem Wert, wobei der Typ des berechneten Werts nach der Syntaxdefinition der Eigenschaft [bestimmt](https://drafts.css-houdini.org/css-properties-values-api/#calculation-of-computed-values) wird.

Für nicht registrierte benutzerdefinierte Eigenschaften erfolgt der Animationstyp diskret.

## Siehe auch

- [CSS-Animationen verwenden](/de/docs/Web/CSS/Guides/Animations/Using)
- [CSS-Übergänge verwenden](/de/docs/Web/CSS/Guides/Transitions/Using)
