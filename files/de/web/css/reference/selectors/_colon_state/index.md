---
title: :state()
slug: Web/CSS/Reference/Selectors/:state
l10n:
  sourceCommit: 4cb9d89a204a9532370693b982e8a3b274a874b1
---

Die **`:state()`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) passt zu [benutzerdefinierten Elementen](/de/docs/Web/API/Web_components/Using_custom_elements), die den angegebenen benutzerdefinierten Zustand haben.

## Syntax

```css-nolint
:state(<custom identifier>) {
  /* ... */
}
```

### Parameter

Die `:state()` Pseudoklasse nimmt als Argument einen benutzerdefinierten Bezeichner, der den Zustand des benutzerdefinierten Elements darstellt, zu dem eine Übereinstimmung hergestellt werden soll.

## Beschreibung

Elemente können aufgrund von Benutzerinteraktionen und anderen Faktoren zwischen Zuständen wechseln. Beispielsweise kann sich ein Element im "hover"-Zustand befinden, wenn ein Benutzer über das Element fährt, oder ein Link kann sich im "visited"-Zustand befinden, nachdem ein Benutzer darauf geklickt hat. Von Browsern bereitgestellte Elemente können basierend auf diesen Zuständen mit CSS-Pseudoklassen wie [`:hover`](/de/docs/Web/CSS/Reference/Selectors/:hover) und [`:visited`](/de/docs/Web/CSS/Reference/Selectors/:visited) gestaltet werden. Ebenso können [autonome benutzerdefinierte Elemente](/de/docs/Web/API/Web_components/Using_custom_elements#types_of_custom_element) (benutzerdefinierte Elemente, die nicht von eingebauten Elementen abgeleitet sind) ihre Zustände offenlegen, wodurch Seiten, die die Elemente verwenden, sie mit der CSS-Pseudoklasse `:state()` stilisieren können.

Die Zustände eines benutzerdefinierten Elements werden durch Zeichenfolgenwerte dargestellt. Diese Werte werden einem [`CustomStateSet`](/de/docs/Web/API/CustomStateSet)-Objekt hinzugefügt oder daraus entfernt, das dem Element zugeordnet ist. Die CSS-Pseudoklasse `:state()` passt zu einem Element, wenn der übergebene Bezeichner im `CustomStateSet` des Elements vorhanden ist.

Die `:state()` Pseudoklasse kann auch verwendet werden, um benutzerdefinierte Zustände innerhalb der Implementierung eines benutzerdefinierten Elements zu entsprechen. Dies wird erreicht, indem `:state()` innerhalb der [`:host()`](/de/docs/Web/CSS/Reference/Selectors/:host_function) Pseudoklassenfunktion verwendet wird, die einen Zustand nur innerhalb des Schatten-DOM des aktuellen benutzerdefinierten Elements entspricht.

Zusätzlich ermöglicht das [`::part()`](/de/docs/Web/CSS/Reference/Selectors/::part) Pseudoelement, gefolgt von der `:state()` Pseudoklasse, die Übereinstimmung mit den [Schatten-Teilen](/de/docs/Web/CSS/CSS_shadow_parts) eines benutzerdefinierten Elements, die sich in einem bestimmten Zustand befinden. (**Schatten-Teile** sind Teile eines Schattenbaums eines benutzerdefinierten Elements, die explizit einer darüber liegenden Seite zur Stilgestaltung bereitgestellt werden.)

## Beispiele

### Einen benutzerdefinierten Zustand entsprechen

Dieses CSS zeigt, wie der Rahmen des autonomen benutzerdefinierten Elements `<labeled-checkbox>` auf `rot` geändert wird, wenn es sich im "checked"-Zustand befindet.

```css
labeled-checkbox {
  border: dashed red;
}
labeled-checkbox:state(checked) {
  border: solid;
}
```

Ein Live-Beispiel dieses Codes in Aktion finden Sie im Beispiel [Matching the custom state of a custom checkbox element](/de/docs/Web/API/CustomStateSet#matching_the_custom_state_of_a_custom_checkbox_element) auf der `CustomStateSet`-Seite.

### Einen benutzerdefinierten Zustand im Schatten-DOM eines benutzerdefinierten Elements entsprechen

Dieses Beispiel zeigt, wie die `:state()` Pseudoklasse innerhalb der [`:host()`](/de/docs/Web/CSS/Reference/Selectors/:host_function) Pseudoklassenfunktion verwendet werden kann, um benutzerdefinierte Zustände innerhalb der Implementierung eines benutzerdefinierten Elements zu entsprechen.

Das folgende CSS fügt eine graue `[x]` vor dem Element hinzu, wenn es sich im "checked"-Zustand befindet.

```css
:host(:state(checked))::before {
  content: "[x]";
}
```

Ein Live-Beispiel dieses Codes in Aktion finden Sie im Beispiel [Matching the custom state of a custom checkbox element](/de/docs/Web/API/CustomStateSet#matching_the_custom_state_of_a_custom_checkbox_element) auf der `CustomStateSet`-Seite.

### Einen benutzerdefinierten Zustand in einem Schatten-Teil entsprechen

Dieses Beispiel zeigt, wie die `:state()` Pseudoklasse verwendet werden kann, um die [Schatten-Teile](/de/docs/Web/CSS/CSS_shadow_parts) eines benutzerdefinierten Elements anzusprechen.

Schatten-Teile werden unter Verwendung des [`part`](/de/docs/Web/HTML/Reference/Global_attributes/part) Attributs definiert und benannt. Berücksichtigen Sie zum Beispiel ein benutzerdefiniertes Element namens `<question-box>`, das ein `<labeled-checkbox>` benutzerdefiniertes Element als Schatten-Teil namens `checkbox` verwendet:

```js
shadowRoot.innerHTML = `<labeled-checkbox part='checkbox'>Yes</labeled-checkbox>`;
```

Das folgende CSS zeigt, wie das [`::part()`](/de/docs/Web/CSS/Reference/Selectors/::part) Pseudoelement verwendet werden kann, um den `'checkbox'` Schatten-Teil anzusprechen. Es zeigt dann, wie das `::part()` Pseudoelement gefolgt von der `:state()` Pseudoklasse verwendet werden kann, um denselben Teil anzusprechen, wenn er im `checked`-Zustand ist.

```css
question-box::part(checkbox) {
  color: red;
}

question-box::part(checkbox):state(checked) {
  color: green;
  outline: dashed 1px green;
}
```

Ein Live-Beispiel dieses Codes in Aktion finden Sie im Beispiel [Matching a custom state in a shadow part of a custom element](/de/docs/Web/API/CustomStateSet#matching_a_custom_state_in_a_shadow_part_of_a_custom_element) auf der `CustomStateSet`-Seite.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CustomStateSet`](/de/docs/Web/API/CustomStateSet)
- [Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes)
- [Lernen: Pseudoklassen und Pseudoelemente](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements)
- [Benutzerdefinierte Zustände und benutzerdefinierte Zustand-Pseudoklasse-CSS-Selektoren](/de/docs/Web/API/Web_components/Using_custom_elements#custom_states_and_custom_state_pseudo-class_css_selectors) in [Verwendung benutzerdefinierter Elemente](/de/docs/Web/API/Web_components/Using_custom_elements)
