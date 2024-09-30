---
title: Animierbare CSS-Eigenschaften
slug: Web/CSS/CSS_animated_properties
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}

[CSS-Animationen](/de/docs/Web/CSS/CSS_animations) und [Transitionen](/de/docs/Web/CSS/CSS_transitions) basieren auf dem Konzept der **animierbaren** Eigenschaften, und alle CSS-Eigenschaften sind animierbar, sofern nicht anders angegeben. Der _Animationstyp_ jeder Eigenschaft bestimmt, wie Werte für diese Eigenschaft [kombiniert](https://drafts.csswg.org/css-values/#combining-values) werden - interpolieren, hinzufügen oder akkumulieren. Transitionen beinhalten nur Interpolation, während Animationen alle drei Kombinationstechniken verwenden können.

> [!NOTE]
> Der Animationstyp für jede CSS-Eigenschaft ist in ihrer Tabelle "Formale Definition" aufgeführt (z. B., {{CSSXref("color", "", "#formal_definition")}}).

> [!NOTE]
> Die Interpolationsmethode für jeden CSS-Datentyp wird in seinem Abschnitt "Interpolation" beschrieben (z. B., {{CSSXref("&lt;length&gt;", "", "#interpolation")}}).

## Animationstypen

Es gibt hauptsächlich vier Animationstypen, wie in der [Web Animations](https://drafts.csswg.org/web-animations-1/#animating-properties) Spezifikation definiert:

- Nicht animierbar

  - : Die Eigenschaft ist nicht animierbar. Sie wird nicht verarbeitet, wenn sie in einem Animations-Schlüsselbild aufgeführt wird und ist von Transitionen nicht betroffen.

    > [!NOTE]
    > Ein Animationseffekt, der nur auf Eigenschaften abzielt, die nicht animierbar sind, zeigt dennoch das übliche Verhalten eines Animationseffekts (z. B., das Auslösen des [`animationstart`](/de/docs/Web/API/Element/animationstart_event)-Ereignisses).

- Diskret

  - : Die Werte der Eigenschaft sind nicht additiv, und die Interpolation wechselt vom Startwert zum Endwert bei `50%`. Konkret, unter Verwendung von `p` als Fortschrittswert:

    - Wenn `p < 0.5`, dann `V_result = V_start`;
    - Wenn `p ≥ 0.5`, dann `V_result = V_end`.

- Nach berechnetem Wert

  - : Entsprechende individuelle Komponenten der berechneten Werte werden unter Verwendung des angegebenen Verfahrens für diesen Wertetyp kombiniert. Wenn die Anzahl der Komponenten oder die Typen der entsprechenden Komponenten nicht übereinstimmen oder wenn ein Komponentenwert diskrete Animation verwendet und die beiden entsprechenden Werte nicht übereinstimmen, dann werden die Eigenschaftswerte diskret kombiniert.

- Wiederholbare Liste

  - : Gleich wie nach berechnetem Wert, außer dass, wenn die zwei Listen eine unterschiedliche Anzahl von Elementen haben, sie zuerst auf die kleinste gemeinsame Vielfache Anzahl von Elementen wiederholt werden. Jedes Element wird dann nach berechnetem Wert kombiniert. Wenn ein Paar von Werten nicht kombiniert werden kann oder ein Komponentenwert diskrete Animation verwendet, dann werden die Eigenschaftswerte diskret kombiniert.

Einige Eigenschaften weisen ein spezifisches Interpolationsverhalten auf, das nicht durch diese vier Typen abgedeckt wird. In diesem Fall ist der Abschnitt "Interpolation" der Eigenschaft zu konsultieren (z. B., {{CSSXref("visibility", "", "#interpolation")}}).

## Animierung benutzerdefinierter Eigenschaften

Für benutzerdefinierte Eigenschaften, die mit der Methode [`registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static) registriert wurden, ist der Animationstyp nach berechnetem Wert, wobei der Typ des berechneten Werts durch die Syntaxdefinition der Eigenschaft [bestimmt](https://drafts.css-houdini.org/css-properties-values-api/#calculation-of-computed-values) wird.

Für nicht registrierte benutzerdefinierte Eigenschaften ist der Animationstyp diskret.

## Siehe auch

- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- [Verwendung von CSS-Transitionen](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)
