---
title: ":state()"
slug: Web/CSS/:state
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{CSSRef}}

Die **`:state()`**-[Pseudo-Klasse](/de/docs/Web/CSS/Pseudo-classes) in [CSS](/de/docs/Web/CSS) vergleicht [Custom-Elemente](/de/docs/Web/API/Web_components/Using_custom_elements), die sich in einem bestimmten benutzerdefinierten Zustand befinden.

## Syntax

Die Pseudo-Klasse `:state()` nimmt als Argument einen benutzerdefinierten Bezeichner, der den Zustand des Custom-Elements repräsentiert, das verglichen werden soll.

```css-nolint
:state(<custom identifier>) {
  /* ... */
}
```

## Beschreibung

Elemente können aufgrund von Benutzerinteraktionen und anderen Faktoren zwischen Zuständen wechseln.
Beispielsweise kann sich ein Element im "Hover"-Zustand befinden, wenn ein Benutzer mit der Maus darüberfährt, oder ein Link kann sich im "Visited"-Zustand befinden, nachdem ein Benutzer darauf geklickt hat.
Von Browsern bereitgestellte Elemente können mit CSS-Pseudo-Klassen wie [`:hover`](/de/docs/Web/CSS/:hover) und [`:visited`](/de/docs/Web/CSS/:visited) basierend auf diesen Zuständen gestaltet werden.
Ähnlich können [autonome Custom-Elemente](/de/docs/Web/API/Web_components/Using_custom_elements#types_of_custom_element) (Custom-Elemente, die nicht von eingebauten Elementen abgeleitet sind) ihre Zustände offenlegen, sodass Seiten, die diese Elemente verwenden, sie mithilfe der CSS-Pseudo-Klasse `:state()` gestalten können.

Die Zustände eines Custom-Elements werden durch Zeichenketten dargestellt.
Diese Werte werden hinzugefügt oder entfernt aus einem [`CustomStateSet`](/de/docs/Web/API/CustomStateSet)-Objekt, das mit dem Element verknüpft ist.
Die CSS-Pseudo-Klasse `:state()` vergleicht ein Element, wenn der angegebene Bezeichner, der als Argument übergeben wird, im `CustomStateSet` des Elements vorhanden ist.

Die Pseudo-Klasse `:state()` kann auch verwendet werden, um benutzerdefinierte Zustände innerhalb der Implementierung eines Custom-Elements zu vergleichen.
Dies wird erreicht, indem `:state()` innerhalb der [`:host()`](/de/docs/Web/CSS/:host_function)-Pseudo-Klasse verwendet wird, die einen Zustand nur innerhalb des Shadow-DOM des aktuellen Custom-Elements vergleicht.

Zusätzlich ermöglicht die [`::part()`](/de/docs/Web/CSS/::part)-Pseudo-Element in Kombination mit der `:state()`-Pseudo-Klasse den Vergleich von [Shadow-Parts](/de/docs/Web/CSS/CSS_shadow_parts) eines Custom-Elements, die sich in einem bestimmten Zustand befinden. (**Shadow-Parts** sind Teile des Shadow-DOM eines Custom-Elements, die explizit für Styling-Zwecke einer Seite zugänglich gemacht werden.)

## Beispiele

### Vergleich eines benutzerdefinierten Zustands

Dieses CSS zeigt, wie der Rahmen des autonomen Custom-Elements `<labeled-checkbox>` auf `rot` geändert wird, wenn es sich im Zustand "checked" befindet.

```css
labeled-checkbox {
  border: dashed red;
}
labeled-checkbox:state(checked) {
  border: solid;
}
```

Ein Live-Beispiel für diesen Code finden Sie unter [Vergleich des benutzerdefinierten Zustands eines benutzerdefinierten Checkbox-Elements](/de/docs/Web/API/CustomStateSet#matching_the_custom_state_of_a_custom_checkbox_element) auf der `CustomStateSet`-Seite.

### Vergleich eines benutzerdefinierten Zustands im Shadow-DOM eines Custom-Elements

Dieses Beispiel zeigt, wie die `:state()`-Pseudo-Klasse innerhalb der [`:host()`](/de/docs/Web/CSS/:host_function)-Pseudo-Klasse verwendet werden kann, um benutzerdefinierte Zustände innerhalb der Implementierung eines Custom-Elements zu vergleichen.

Das folgende CSS fügt ein graues `[x]` vor dem Element ein, wenn es sich im Zustand "checked" befindet.

```css
:host(:state(checked))::before {
  content: "[x]";
}
```

Ein Live-Beispiel für diesen Code finden Sie unter [Vergleich des benutzerdefinierten Zustands eines benutzerdefinierten Checkbox-Elements](/de/docs/Web/API/CustomStateSet#matching_the_custom_state_of_a_custom_checkbox_element) auf der `CustomStateSet`-Seite.

### Vergleich eines benutzerdefinierten Zustands in einem Shadow-Part

Dieses Beispiel zeigt, wie die `:state()`-Pseudo-Klasse verwendet werden kann, um die [Shadow-Parts](/de/docs/Web/CSS/CSS_shadow_parts) eines Custom-Elements anzusprechen.

Shadow-Parts werden durch das [`part`](/de/docs/Web/HTML/Global_attributes/part)-Attribut definiert und benannt.
Beispielsweise verwenden wir ein Custom-Element `<question-box>`, das ein `<labeled-checkbox>`-Custom-Element als ein Shadow-Part namens `checkbox` definiert:

```js
shadowRoot.innerHTML = `<labeled-checkbox part='checkbox'>Yes</labeled-checkbox>`;
```

Das folgende CSS zeigt, wie das [`::part()`](/de/docs/Web/CSS/::part)-Pseudo-Element verwendet werden kann, um das `'checkbox'`-Shadow-Part zu vergleichen.
Weiterhin zeigt es, wie mithilfe der `::part()`-Pseudo-Element in Kombination mit der `:state()`-Pseudo-Klasse das gleiche Part angesprochen werden kann, wenn es sich im Zustand `checked` befindet.

```css
question-box::part(checkbox) {
  color: red;
}

question-box::part(checkbox):state(checked) {
  color: green;
}
```

Ein Live-Beispiel für diesen Code finden Sie unter [Vergleich eines benutzerdefinierten Zustands in einem Shadow-Part eines Custom-Elements](/de/docs/Web/API/CustomStateSet#matching_a_custom_state_in_a_shadow_part_of_a_custom_element) auf der `CustomStateSet`-Seite.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CustomStateSet`](/de/docs/Web/API/CustomStateSet)
- [Pseudo-Klassen](/de/docs/Web/CSS/Pseudo-classes)
- [Leitfaden: Pseudo-Klassen und Pseudo-Elemente](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements)
- [Benutzerdefinierte Zustände und benutzerdefinierte Pseudo-Klassen-Selektoren](/de/docs/Web/API/Web_components/Using_custom_elements#custom_states_and_custom_state_pseudo-class_css_selectors) in [Verwendung von Custom-Elementen](/de/docs/Web/API/Web_components/Using_custom_elements)
