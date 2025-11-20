---
title: Animierbare CSS Eigenschaften
short-title: Animierbare Eigenschaften
slug: Web/CSS/Guides/Animations/Animatable_properties
l10n:
  sourceCommit: ca5d9f9e63b460fc0c9e15ac57d9739e10e4ea0d
---

[CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) und [Übergänge](/de/docs/Web/CSS/Guides/Transitions) basieren auf dem Konzept der **animierbaren** Eigenschaften, und alle CSS-Eigenschaften sind animierbar, es sei denn, es ist anders angegeben. Der _Animationstyp_ jeder Eigenschaft bestimmt, wie Werte [kombiniert](https://drafts.csswg.org/css-values/#combining-values) werden - interpolieren, addieren oder akkumulieren - für diese Eigenschaft. Übergänge beinhalten nur Interpolation, während Animationen alle drei Kombinationsmethoden verwenden können.

> [!NOTE]
> Der Animationstyp für jede CSS-Eigenschaft ist in ihrer "Formaldefinition"-Tabelle aufgeführt (z. B. {{CSSXref("color", "", "#formal_definition")}}).

> [!NOTE]
> Die Interpolationsmethode für jeden CSS-Datentyp wird in seinem "Interpolation"-Abschnitt beschrieben (z. B. {{CSSXref("&lt;length&gt;", "", "#interpolation")}}).

## Animationstypen

Es gibt hauptsächlich vier Animationstypen, wie in der [Web-Animationen](https://drafts.csswg.org/web-animations-1/#animating-properties) Spezifikation definiert:

- Nicht animierbar
  - : Die Eigenschaft ist nicht animierbar. Sie wird nicht verarbeitet, wenn sie in einem Animationsschlüsselbild aufgeführt ist und wird von Übergängen nicht beeinflusst.

    > [!NOTE]
    > Ein Animationseffekt, der nur auf Eigenschaften abzielt, die nicht animierbar sind, zeigt dennoch das übliche Verhalten eines Animationseffekts (z. B. das Auslösen des [`animationstart`](/de/docs/Web/API/Element/animationstart_event) Ereignisses).

- Diskret
  - : Die Werte der Eigenschaft sind nicht additiv, und die Interpolation wechselt vom Startwert zum Endwert bei `50%`. Genauer gesagt, wenn `p` den Fortschrittswert bezeichnet:
    - Wenn `p < 0.5`, dann `V_result = V_start`;
    - Wenn `p ≥ 0.5`, dann `V_result = V_end`.

- Nach berechnetem Wert
  - : Entsprechende einzelne Komponenten der berechneten Werte werden mit dem angegebenen Verfahren für diesen Wertetyp kombiniert. Wenn die Anzahl der Komponenten oder die Typen der entsprechenden Komponenten nicht übereinstimmen oder wenn ein Komponentenwert diskrete Animation verwendet und die beiden entsprechenden Werte nicht übereinstimmen, dann werden die Eigenschaftswerte als diskret kombiniert.

- Wiederholbare Liste
  - : Wie nach berechnetem Wert, außer dass, wenn die beiden Listen unterschiedliche Anzahlen von Elementen haben, sie zuerst auf die kleinste gemeinsame Vielfache Anzahl von Elementen wiederholt werden. Jedes Element wird dann nach berechnetem Wert kombiniert. Wenn ein Wertepaar nicht kombiniert werden kann oder ein Komponentenwert diskrete Animation verwendet, dann werden die Eigenschaftswerte als diskret kombiniert.

Einige Eigenschaften haben spezifisches Interpolationsverhalten, das nicht von diesen vier Typen abgedeckt wird. In diesem Fall beziehen Sie sich auf den "Interpolation"-Abschnitt der Eigenschaft (z. B. {{CSSXref("visibility", "", "#interpolation")}}).

## Animierung benutzerdefinierter Eigenschaften

Für benutzerdefinierte Eigenschaften, die mit der [`registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static) Methode registriert wurden, ist der Animationstyp nach berechnetem Wert, wobei der berechnete Wertetyp [bestimmt wird](https://drafts.css-houdini.org/css-properties-values-api/#calculation-of-computed-values) durch die Syntaxdefinition der Eigenschaft.

Für nicht registrierte benutzerdefinierte Eigenschaften ist der Animationstyp diskret.

## Siehe auch

- {{cssxref("transition-behavior")}}
- {{cssxref("@starting-style")}}
- [CSS-Animationsmodul](/de/docs/Web/CSS/Guides/Animations)
- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/Guides/Animations/Using)
- [Verwendung von CSS-Übergängen](/de/docs/Web/CSS/Guides/Transitions/Using)
