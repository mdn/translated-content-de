---
title: Animierbare CSS-Eigenschaften
slug: Web/CSS/CSS_animated_properties
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}

[CSS-Animationen](/de/docs/Web/CSS/CSS_animations) und [Übergänge](/de/docs/Web/CSS/CSS_transitions) beruhen auf dem Konzept der **animierbaren** Eigenschaften, wobei alle CSS-Eigenschaften animierbar sind, sofern nicht anders angegeben. Der _Animationstyp_ jeder Eigenschaft bestimmt, wie Werte [kombiniert](https://drafts.csswg.org/css-values/#combining-values) werden - interpolieren, addieren oder akkumulieren - für diese Eigenschaft. Übergänge beinhalten nur Interpolation, während Animationen alle drei Kombinationsmethoden verwenden können.

> [!NOTE]
> Der Animationstyp für jede CSS-Eigenschaft ist in ihrer Tabelle mit der "Formalen Definition" aufgeführt (z.B. {{CSSXref("color", "", "#formal_definition")}}).

> [!NOTE]
> Die Interpolationsmethode für jeden CSS-Datentyp wird in seinem Abschnitt "Interpolation" beschrieben (z.B. {{CSSXref("&lt;length&gt;", "", "#interpolation")}}).

## Animationstypen

Es gibt hauptsächlich vier Animationstypen, wie in der [Web Animations](https://drafts.csswg.org/web-animations-1/#animating-properties) Spezifikation definiert:

- Nicht animierbar

  - : Die Eigenschaft ist nicht animierbar. Sie wird nicht verarbeitet, wenn sie in einem Animations-Schlüsselbild aufgeführt ist, und wird nicht von Übergängen beeinflusst.

    > [!NOTE]
    > Ein Animationseffekt, der nur auf Eigenschaften abzielt, die nicht animierbar sind, zeigt dennoch das übliche Verhalten eines Animationseffekts (z.B. das Auslösen des [`animationstart`](/de/docs/Web/API/Element/animationstart_event) Ereignisses).

- Diskret

  - : Die Werte der Eigenschaft sind nicht additiv, und die Interpolation wechselt bei `50%` vom Startwert zum Endwert. Speziell, wobei `p` den Fortschrittswert darstellt:

    - Wenn `p < 0.5`, dann `V_result = V_start`;
    - Wenn `p ≥ 0.5`, dann `V_result = V_end`.

- Nach berechnetem Wert

  - : Entsprechende einzelne Komponenten der berechneten Werte werden unter Verwendung des angegebenen Verfahrens für diesen Wertetyp kombiniert. Wenn die Anzahl der Komponenten oder die Typen der entsprechenden Komponenten nicht übereinstimmen oder wenn ein beliebiger Komponentenwert eine diskrete Animation verwendet und die beiden entsprechenden Werte nicht übereinstimmen, werden die Eigenschaftswerte diskret kombiniert.

- Wiederholbare Liste

  - : Dasselbe wie bei berechnetem Wert, außer dass, wenn die beiden Listen unterschiedliche Anzahlen von Elementen haben, sie zuerst auf die kleinste gemeinsame Vielfache Zahl von Elementen wiederholt werden. Jedes Element wird dann nach berechnetem Wert kombiniert. Wenn ein Paar von Werten nicht kombiniert werden kann oder ein beliebiger Komponentenwert eine diskrete Animation verwendet, werden die Eigenschaftswerte diskret kombiniert.

Einige Eigenschaften haben ein spezifisches Interpolationsverhalten, das nicht von diesen vier Typen abgedeckt wird. In diesem Fall konsultieren Sie den Abschnitt "Interpolation" der Eigenschaft (z.B. {{CSSXref("visibility", "", "#interpolation")}}).

## Animieren benutzerdefinierter Eigenschaften

Für benutzerdefinierte Eigenschaften, die mit der Methode [`registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static) registriert wurden, ist der Animationstyp nach berechnetem Wert, wobei der berechnete Wertetyp durch die Syntaxdefinition der Eigenschaft [bestimmt](https://drafts.css-houdini.org/css-properties-values-api/#calculation-of-computed-values) wird.

Für nicht registrierte benutzerdefinierte Eigenschaften ist der Animationstyp diskret.

## Siehe auch

- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- [Verwendung von CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)
