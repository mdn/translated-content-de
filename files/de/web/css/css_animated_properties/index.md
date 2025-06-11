---
title: Animierbare CSS-Eigenschaften
short-title: Animierbare Eigenschaften
slug: Web/CSS/CSS_animated_properties
l10n:
  sourceCommit: 0dcad86763896bba7f8e1ddc30c6dfd2aa664c6b
---

{{CSSRef}}

[CSS-Animationen](/de/docs/Web/CSS/CSS_animations) und [Übergänge](/de/docs/Web/CSS/CSS_transitions) basieren auf dem Konzept von **animierbaren** Eigenschaften, und alle CSS-Eigenschaften sind animierbar, sofern nicht anders angegeben. Der _Animationstyp_ jeder Eigenschaft bestimmt, wie Werte für diese Eigenschaft [kombiniert](https://drafts.csswg.org/css-values/#combining-values) werden - interpolieren, addieren oder akkumulieren. Übergänge beinhalten nur Interpolation, während Animationen alle drei Kombinationsmethoden verwenden können.

> [!NOTE]
> Der Animationstyp für jede CSS-Eigenschaft ist in der Tabelle "Formale Definition" aufgeführt (z. B. {{CSSXref("color", "", "#formal_definition")}}).

> [!NOTE]
> Die Interpolationsmethode für jeden CSS-Datentyp wird im Abschnitt "Interpolation" beschrieben (z. B. {{CSSXref("&lt;length&gt;", "", "#interpolation")}}).

## Animationstypen

Es gibt hauptsächlich vier Animationstypen, wie in der [Web Animations](https://drafts.csswg.org/web-animations-1/#animating-properties)-Spezifikation definiert:

- Nicht animierbar

  - : Die Eigenschaft ist nicht animierbar. Sie wird nicht verarbeitet, wenn sie in einem Animations-Schlüsselbild aufgeführt ist und wird von Übergängen nicht beeinflusst.

    > [!NOTE]
    > Ein Animationseffekt, der nur auf Eigenschaften abzielt, die nicht animierbar sind, zeigt dennoch das übliche Verhalten eines Animationseffekts (z. B. das Auslösen des [`animationstart`](/de/docs/Web/API/Element/animationstart_event)-Ereignisses).

- Diskret

  - : Die Werte der Eigenschaft sind nicht additiv und die Interpolation wechselt bei `50%` vom Startwert zum Endwert. Genauer gesagt: Unter der Annahme, dass `p` der Fortschrittswert ist:

    - Falls `p < 0.5`, dann `V_result = V_start`;
    - Falls `p ≥ 0.5`, dann `V_result = V_end`.

- Nach berechnetem Wert

  - : Die entsprechenden einzelnen Komponenten der berechneten Werte werden mit dem für diesen Werttyp angegebenen Verfahren kombiniert. Falls die Anzahl der Komponenten oder die Typen der entsprechenden Komponenten nicht übereinstimmen, oder wenn ein Komponentenwert diskrete Animation verwendet und die beiden entsprechenden Werte nicht übereinstimmen, werden die Eigenschaftswerte diskret kombiniert.

- Wiederholbare Liste

  - : Gleich wie nach berechnetem Wert, außer dass, wenn die beiden Listen unterschiedliche Anzahlen von Elementen haben, sie zuerst auf die kleinste gemeinsame Vielfache Anzahl von Elementen wiederholt werden. Jedes Element wird dann nach berechnetem Wert kombiniert. Wenn ein Wertepaar nicht kombiniert werden kann oder irgendein Komponentenwert diskrete Animation verwendet, dann werden die Eigenschaftswerte diskret kombiniert.

Einige Eigenschaften haben spezifisches Interpolationsverhalten, das nicht durch diese vier Typen abgedeckt wird. In diesem Fall beziehen Sie sich auf den Abschnitt "Interpolation" der Eigenschaft (z. B. {{CSSXref("visibility", "", "#interpolation")}}).

## Animation benutzerdefinierter Eigenschaften

Für benutzerdefinierte Eigenschaften, die mit der [`registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static)-Methode registriert wurden, erfolgt die Animation nach berechnetem Wert, wobei der berechnete Werttyp durch die Syntaxdefinition der Eigenschaft [bestimmt](https://drafts.css-houdini.org/css-properties-values-api/#calculation-of-computed-values) wird.

Für nicht registrierte benutzerdefinierte Eigenschaften ist der Animationstyp diskret.

## Siehe auch

- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- [Verwendung von CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)
