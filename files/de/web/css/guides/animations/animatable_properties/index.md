---
title: Animierbare CSS-Eigenschaften
short-title: Animierbare Eigenschaften
slug: Web/CSS/Guides/Animations/Animatable_properties
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

[CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) und [Übergänge](/de/docs/Web/CSS/Guides/Transitions) basieren auf dem Konzept der **animierbaren** Eigenschaften, und alle CSS-Eigenschaften sind animierbar, sofern nicht anders angegeben. Der _Animationstyp_ jeder Eigenschaft bestimmt, wie Werte für diese Eigenschaft [kombiniert](https://drafts.csswg.org/css-values/#combining-values) werden - interpoliert, addiert oder akkumuliert. Übergänge beinhalten nur Interpolation, während Animationen alle drei Kombinationsmethoden verwenden können.

> [!NOTE]
> Der Animationstyp für jede CSS-Eigenschaft ist in ihrer "Formalen Definition" Tabelle aufgeführt (z.B., {{CSSXref("color", "", "#formal_definition")}}).

> [!NOTE]
> Die Interpolationsmethode für jeden CSS-Datentyp wird im Abschnitt "Interpolation" beschrieben (z.B., {{CSSXref("&lt;length&gt;", "", "#interpolation")}}).

## Animationstypen

Es gibt hauptsächlich vier Animationstypen, wie in der [Web-Animationen](https://drafts.csswg.org/web-animations-1/#animating-properties)-Spezifikation definiert:

- Nicht animierbar
  - : Die Eigenschaft ist nicht animierbar. Sie wird nicht verarbeitet, wenn sie in einem Animations-Schlüsselbild aufgelistet ist, und wird von Übergängen nicht beeinflusst.

    > [!NOTE]
    > Ein Animationseffekt, der sich nur auf Eigenschaften konzentriert, die nicht animierbar sind, zeigt dennoch das übliche Verhalten eines Animationseffekts (z.B., Auslösen des [`animationstart`](/de/docs/Web/API/Element/animationstart_event) Ereignisses).

- Diskret
  - : Die Werte der Eigenschaft sind nicht additiv, und die Interpolation wechselt vom Startwert zum Endwert bei `50%`. Genauer gesagt, unter Verwendung des Fortschrittswerts `p`:
    - Wenn `p < 0.5`, dann `V_result = V_start`;
    - Wenn `p ≥ 0.5`, dann `V_result = V_end`.

- Nach berechnetem Wert
  - : Die entsprechenden individuellen Komponenten der berechneten Werte werden mit dem angegebenen Verfahren für diesen Werttyp kombiniert. Wenn die Anzahl der Komponenten oder die Typen der entsprechenden Komponenten nicht übereinstimmen oder wenn irgendein Komponentenwert eine diskrete Animation verwendet und die beiden entsprechenden Werte nicht übereinstimmen, werden die Eigenschaftswerte als diskret kombiniert.

- Wiederholbare Liste
  - : Genauso wie nach berechnetem Wert, außer dass, wenn die beiden Listen unterschiedliche Anzahlen von Elementen haben, sie zuerst auf die kleinste gemeinsame Vielfache Anzahl von Elementen wiederholt werden. Jedes Element wird dann nach berechnetem Wert kombiniert. Wenn ein Wertepaar nicht kombiniert werden kann oder irgendein Komponentenwert eine diskrete Animation verwendet, werden die Eigenschaftswerte als diskret kombiniert.

Einige Eigenschaften haben spezielles Interpolationsverhalten, das nicht von diesen vier Typen abgedeckt wird. In diesem Fall konsultieren Sie den Abschnitt "Interpolation" der Eigenschaft (z.B., {{CSSXref("visibility", "", "#interpolation")}}).

## Animation von benutzerdefinierten Eigenschaften

Für benutzerdefinierte Eigenschaften, die über die Methode [`registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static) registriert wurden, ist der Animationstyp "nach berechnetem Wert", wobei der Typ des berechneten Wertes [bestimmt](https://drafts.css-houdini.org/css-properties-values-api/#calculation-of-computed-values) wird durch die Syntaxdefinition der Eigenschaft.

Für nicht registrierte benutzerdefinierte Eigenschaften ist der Animationstyp diskret.

## Siehe auch

- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/Guides/Animations/Using)
- [Verwendung von CSS-Übergängen](/de/docs/Web/CSS/Guides/Transitions/Using)
