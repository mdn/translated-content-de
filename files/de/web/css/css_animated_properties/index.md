---
title: Animierbare CSS-Eigenschaften
short-title: Animierbare Eigenschaften
slug: Web/CSS/CSS_animated_properties
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

[CSS-Animationen](/de/docs/Web/CSS/CSS_animations) und [Übergänge](/de/docs/Web/CSS/CSS_transitions) basieren auf dem Konzept der **animierbaren** Eigenschaften, und alle CSS-Eigenschaften sind animierbar, es sei denn, es ist anders angegeben. Der _Animationstyp_ jeder Eigenschaft bestimmt, wie Werte [kombiniert](https://drafts.csswg.org/css-values/#combining-values) werden - interpoliert, addiert oder akkumuliert - für diese Eigenschaft. Übergänge beinhalten nur Interpolation, während Animationen alle drei Kombinationsmethoden verwenden können.

> [!NOTE]
> Der Animationstyp für jede CSS-Eigenschaft ist in ihrer Tabelle "Formale Definition" aufgeführt (z.B. {{CSSXref("color", "", "#formal_definition")}}).

> [!NOTE]
> Die Interpolationsmethode für jeden CSS-Datentyp ist in ihrem Abschnitt "Interpolation" beschrieben (z.B. {{CSSXref("&lt;length&gt;", "", "#interpolation")}}).

## Animationstypen

Es gibt hauptsächlich vier Animationstypen, wie in der [Web Animations](https://drafts.csswg.org/web-animations-1/#animating-properties)-Spezifikation definiert:

- Nicht animierbar

  - : Die Eigenschaft ist nicht animierbar. Sie wird nicht verarbeitet, wenn sie in einem Animations-Schlüsselbild aufgeführt ist, und ist von Übergängen unberührt.

    > [!NOTE]
    > Ein Animationseffekt, der nur nicht animierbare Eigenschaften anspricht, zeigt dennoch das übliche Verhalten eines Animationseffekts (z.B. das Auslösen des [`animationstart`](/de/docs/Web/API/Element/animationstart_event) Ereignisses).

- Diskret

  - : Die Werte der Eigenschaft sind nicht additiv und die Interpolation wechselt bei `50%` vom Startwert zum Endwert. Genauer gesagt, unter Bezeichnung von `p` als Fortschrittswert:
    - Wenn `p < 0.5`, dann `V_result = V_start`;
    - Wenn `p ≥ 0.5`, dann `V_result = V_end`.

- Nach berechnetem Wert

  - : Entsprechende einzelne Komponenten der berechneten Werte werden mit dem angegebenen Verfahren für diesen Werttyp kombiniert. Wenn die Anzahl der Komponenten oder die Typen der entsprechenden Komponenten nicht übereinstimmen oder wenn ein Komponentwert diskrete Animation verwendet und die beiden entsprechenden Werte nicht übereinstimmen, dann werden die Eigenschaftswerte als diskret kombiniert.

- Wiederholbare Liste
  - : Das Gleiche wie nach berechnetem Wert, außer dass, wenn die beiden Listen eine unterschiedliche Anzahl von Elementen haben, sie zuerst auf die kleinste gemeinsame Vielfache Anzahl von Elementen wiederholt werden. Jedes Element wird dann nach berechnetem Wert kombiniert. Wenn ein Wertepaar nicht kombiniert werden kann oder ein Komponentwert diskrete Animation verwendet, dann werden die Eigenschaftswerte als diskret kombiniert.

Einige Eigenschaften haben ein spezifisches Interpolationsverhalten, das nicht durch diese vier Typen abgedeckt wird. In diesem Fall beziehen Sie sich bitte auf den Abschnitt "Interpolation" der jeweiligen Eigenschaft (z.B. {{CSSXref("visibility", "", "#interpolation")}}).

## Animierung benutzerdefinierter Eigenschaften

Bei benutzerdefinierten Eigenschaften, die mit der Methode [`registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static) registriert wurden, ist der Animationstyp der berechnete Wert, wobei der berechnete Werttyp [bestimmt](https://drafts.css-houdini.org/css-properties-values-api/#calculation-of-computed-values) wird durch die Syntaxdefinition der Eigenschaft.

Bei nicht registrierten benutzerdefinierten Eigenschaften ist der Animationstyp diskret.

## Siehe auch

- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- [Verwendung von CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)
