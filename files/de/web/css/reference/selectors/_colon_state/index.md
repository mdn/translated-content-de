---
title: :state()
slug: Web/CSS/Reference/Selectors/:state
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`:state()`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) matcht [Custom Elements](/de/docs/Web/API/Web_components/Using_custom_elements), die den angegebenen benutzerdefinierten Zustand haben.

## Syntax

```css-nolint
:state(<custom identifier>) {
  /* ... */
}
```

### Parameter

Die `:state()` Pseudoklasse nimmt als Argument einen benutzerdefinierten Bezeichner, der den Zustand des zu matchenden Custom Elements darstellt.

## Beschreibung

Elemente können aufgrund von Benutzerinteraktion und anderen Faktoren zwischen Zuständen wechseln.
Ein Element kann sich beispielsweise im "hover"-Zustand befinden, wenn ein Benutzer über das Element fährt, oder ein Link kann sich im "besuchten" Zustand befinden, nachdem ein Benutzer darauf geklickt hat.
Von Browsern bereitgestellte Elemente können basierend auf diesen Zuständen mit CSS-Pseudoklassen wie [`:hover`](/de/docs/Web/CSS/Reference/Selectors/:hover) und [`:visited`](/de/docs/Web/CSS/Reference/Selectors/:visited) gestylt werden.
Ähnlich können [autonome Custom Elements](/de/docs/Web/API/Web_components/Using_custom_elements#types_of_custom_element) (Custom Elements, die nicht von eingebauten Elementen abgeleitet sind) ihre Zustände offenlegen, sodass Seiten, die die Elemente verwenden, diese mit der CSS `:state()` Pseudoklasse stylen können.

Die Zustände eines Custom Elements werden durch Zeichenfolgenwerte dargestellt.
Diese Werte werden einem [`CustomStateSet`](/de/docs/Web/API/CustomStateSet)-Objekt, das dem Element zugeordnet ist, hinzugefügt oder daraus entfernt.
Die CSS `:state()` Pseudoklasse matcht ein Element, wenn der als Argument übergebene Bezeichner im `CustomStateSet` des Elements vorhanden ist.

Die `:state()` Pseudoklasse kann auch verwendet werden, um benutzerdefinierte Zustände innerhalb der Implementierung eines Custom Elements zu matchen.
Dies wird erreicht, indem `:state()` innerhalb der [`:host()`](/de/docs/Web/CSS/Reference/Selectors/:host_function) Pseudoklassenfunktion verwendet wird, die einen Zustand nur innerhalb des Shadow DOM des aktuellen Custom Elements matcht.

Zusätzlich erlaubt das [`::part()`](/de/docs/Web/CSS/Reference/Selectors/::part) Pseudoelement, gefolgt von der `:state()` Pseudoklasse, das Matching von [Shadow Parts](/de/docs/Web/CSS/Guides/Shadow_parts) eines Custom Elements, die sich in einem bestimmten Zustand befinden. (**Shadow Parts** sind Teile des Shadow Tree eines Custom Elements, die explizit für das Stylen auf einer enthaltenen Seite freigelegt sind.)

## Beispiele

### Matchen eines benutzerdefinierten Zustands

Dieses CSS zeigt, wie die Umrandung des autonomen Custom Elements `<labeled-checkbox>` auf `rot` geändert wird, wenn es sich im "checked"-Zustand befindet.

```css
labeled-checkbox {
  border: dashed red;
}
labeled-checkbox:state(checked) {
  border: solid;
}
```

Für ein Live-Beispiel, wie dieser Code in Aktion funktioniert, siehe das [Matching the custom state of a custom checkbox element](/de/docs/Web/API/CustomStateSet#matching_the_custom_state_of_a_custom_checkbox_element)-Beispiel auf der `CustomStateSet`-Seite.

### Matchen eines benutzerdefinierten Zustands im Shadow DOM eines Custom Elements

Dieses Beispiel zeigt, wie die `:state()` Pseudoklasse innerhalb der [`:host()`](/de/docs/Web/CSS/Reference/Selectors/:host_function) Pseudoklassenfunktion verwendet werden kann, um benutzerdefinierte Zustände innerhalb der Implementierung eines Custom Elements zu matchen.

Das folgende CSS fügt ein graues `[x]` vor dem Element ein, wenn es sich im "checked"-Zustand befindet.

```css
:host(:state(checked))::before {
  content: "[x]";
}
```

Für ein Live-Beispiel, wie dieser Code in Aktion funktioniert, siehe das [Matching the custom state of a custom checkbox element](/de/docs/Web/API/CustomStateSet#matching_the_custom_state_of_a_custom_checkbox_element)-Beispiel auf der `CustomStateSet`-Seite.

### Matchen eines benutzerdefinierten Zustands in einem Shadow Part

Dieses Beispiel zeigt, wie die `:state()` Pseudoklasse verwendet werden kann, um die [Shadow Parts](/de/docs/Web/CSS/Guides/Shadow_parts) eines Custom Elements zu targetieren.

Shadow Parts werden mit dem [`part`](/de/docs/Web/HTML/Reference/Global_attributes/part)-Attribut definiert und benannt.
Zum Beispiel betrachten Sie ein Custom Element namens `<question-box>`, das ein `<labeled-checkbox>` Custom Element als Shadow Part namens `checkbox` verwendet:

```js
shadowRoot.innerHTML = `<labeled-checkbox part='checkbox'>Yes</labeled-checkbox>`;
```

Das untenstehende CSS zeigt, wie das [`::part()`](/de/docs/Web/CSS/Reference/Selectors/::part) Pseudoelement verwendet werden kann, um gegen den `'checkbox'` Shadow Part zu matchen.
Es zeigt dann, wie das `::part()` Pseudoelement gefolgt von der `:state()` Pseudoklasse verwendet werden kann, um gegen denselben Part zu matchen, wenn er sich im `checked`-Zustand befindet.

```css
question-box::part(checkbox) {
  color: red;
}

question-box::part(checkbox):state(checked) {
  color: green;
  outline: dashed 1px green;
}
```

Für ein Live-Beispiel, wie dieser Code in Aktion funktioniert, siehe das [Matching a custom state in a shadow part of a custom element](/de/docs/Web/API/CustomStateSet#matching_a_custom_state_in_a_shadow_part_of_a_custom_element)-Beispiel auf der `CustomStateSet`-Seite.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CustomStateSet`](/de/docs/Web/API/CustomStateSet)
- [Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes)
- [Lernen: Pseudoklassen und Pseudoelemente](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements)
- [Benutzerdefinierte Zustände und Pseudoklassen-CSS-Selektoren](/de/docs/Web/API/Web_components/Using_custom_elements#custom_states_and_custom_state_pseudo-class_css_selectors) in [Verwendung von Custom Elements](/de/docs/Web/API/Web_components/Using_custom_elements)
