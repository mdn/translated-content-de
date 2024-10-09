---
title: ":state()"
slug: Web/CSS/:state
l10n:
  sourceCommit: 92447fec056cc89b7f28445851bea0c981fcbc12
---

{{CSSRef}}

Die **`:state()`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) stimmt mit [benutzerdefinierten Elementen](/de/docs/Web/API/Web_components/Using_custom_elements) überein, die den angegebenen benutzerdefinierten Zustand haben.

## Syntax

Die `:state()` Pseudoklasse nimmt als Argument einen benutzerdefinierten Bezeichner, der den Zustand des zu betrachtenden benutzerdefinierten Elements repräsentiert.

```css-nolint
:state(<custom identifier>) {
  /* ... */
}
```

## Beschreibung

Elemente können aufgrund von Benutzerinteraktionen und anderen Faktoren zwischen Zuständen wechseln. Zum Beispiel kann sich ein Element im "hover"-Zustand befinden, wenn ein Benutzer über das Element fährt, oder ein Link kann sich im "visited"-Zustand befinden, nachdem ein Benutzer darauf geklickt hat. Elemente, die von Browsern bereitgestellt werden, können basierend auf diesen Zuständen mithilfe von CSS-Pseudoklassen wie [`:hover`](/de/docs/Web/CSS/:hover) und [`:visited`](/de/docs/Web/CSS/:visited) gestaltet werden. Ebenso können [autonome benutzerdefinierte Elemente](/de/docs/Web/API/Web_components/Using_custom_elements#types_of_custom_element) (benutzerdefinierte Elemente, die nicht von standardmäßigen Elementen abgeleitet sind) ihre Zustände offenlegen, sodass Seiten, die diese Elemente verwenden, sie mithilfe der CSS `:state()` Pseudoklasse gestalten können.

Die Zustände eines benutzerdefinierten Elements werden durch Zeichenfolgenwerte repräsentiert. Diese Werte werden zu einem [`CustomStateSet`](/de/docs/Web/API/CustomStateSet)-Objekt hinzugefügt oder daraus entfernt, das mit dem Element verknüpft ist. Die CSS `:state()` Pseudoklasse stimmt mit einem Element überein, wenn der als Argument übergebene Bezeichner im `CustomStateSet` des Elements vorhanden ist.

Die `:state()` Pseudoklasse kann auch verwendet werden, um benutzerdefinierte Zustände innerhalb der Implementierung eines benutzerdefinierten Elements anzugeben. Dies wird erreicht, indem `:state()` innerhalb der [`:host()`](/de/docs/Web/CSS/:host_function) Pseudoklasse verwendet wird, die einen Zustand nur innerhalb des Shadow DOM des aktuellen benutzerdefinierten Elements betrachtet.

Darüber hinaus ermöglicht das [`::part()`](/de/docs/Web/CSS/::part) Pseudoelement gefolgt von der `:state()` Pseudoklasse das Zuordnen von [Shadow-Teilen](/de/docs/Web/CSS/CSS_shadow_parts) eines benutzerdefinierten Elements, die sich in einem bestimmten Zustand befinden. (**Shadow-Teile** sind Teile eines Shadow-Baums eines benutzerdefinierten Elements, die explizit einer enthaltenden Seite zur Stilgestaltung zugänglich gemacht werden.)

## Beispiele

### Übereinstimmung mit einem benutzerdefinierten Zustand

Dieser CSS-Code zeigt, wie der Rahmen des autonomen benutzerdefinierten Elements `<labeled-checkbox>` auf `rot` geändert wird, wenn es sich im "checked"-Zustand befindet.

```css
labeled-checkbox {
  border: dashed red;
}
labeled-checkbox:state(checked) {
  border: solid;
}
```

Ein Live-Beispiel für diesen Code in Aktion finden Sie im Beispiel [Übereinstimmung mit dem benutzerdefinierten Zustand eines benutzerdefinierten Checkbox-Elements](/de/docs/Web/API/CustomStateSet#matching_the_custom_state_of_a_custom_checkbox_element) auf der `CustomStateSet`-Seite.

### Übereinstimmung mit einem benutzerdefinierten Zustand im Shadow DOM eines benutzerdefinierten Elements

Dieses Beispiel zeigt, wie die `:state()` Pseudoklasse innerhalb der [`:host()`](/de/docs/Web/CSS/:host_function) Pseudoklasse verwendet werden kann, um benutzerdefinierte Zustände innerhalb der Implementierung eines benutzerdefinierten Elements anzugeben.

Der folgende CSS-Code fügt ein graues `[x]` vor dem Element ein, wenn es sich im "checked"-Zustand befindet.

```css
:host(:state(checked))::before {
  content: "[x]";
}
```

Ein Live-Beispiel für diesen Code in Aktion finden Sie im Beispiel [Übereinstimmung mit dem benutzerdefinierten Zustand eines benutzerdefinierten Checkbox-Elements](/de/docs/Web/API/CustomStateSet#matching_the_custom_state_of_a_custom_checkbox_element) auf der `CustomStateSet`-Seite.

### Übereinstimmung mit einem benutzerdefinierten Zustand in einem Shadow-Teil

Dieses Beispiel zeigt, wie die `:state()` Pseudoklasse verwendet werden kann, um die [Shadow-Teile](/de/docs/Web/CSS/CSS_shadow_parts) eines benutzerdefinierten Elements anzusprechen.

Shadow-Teile werden mithilfe des [`part`](/de/docs/Web/HTML/Global_attributes/part) Attributs definiert und benannt. Betrachten Sie zum Beispiel ein benutzerdefiniertes Element namens `<question-box>`, das ein `<labeled-checkbox>` benutzerdefiniertes Element als Shadow-Teil namens `checkbox` verwendet:

```js
shadowRoot.innerHTML = `<labeled-checkbox part='checkbox'>Yes</labeled-checkbox>`;
```

Der folgende CSS-Code zeigt, wie das [`::part()`](/de/docs/Web/CSS/::part) Pseudoelement verwendet werden kann, um den `'checkbox'` Shadow-Teil zuzuordnen. Anschließend zeigt er, wie das `::part()` Pseudoelement gefolgt von der `:state()` Pseudoklasse verwendet werden kann, um denselben Teil zuzuordnen, wenn er sich im `checked`-Zustand befindet.

```css
question-box::part(checkbox) {
  color: red;
}

question-box::part(checkbox):state(checked) {
  color: green;
}
```

Ein Live-Beispiel für diesen Code in Aktion finden Sie im Beispiel [Übereinstimmung eines benutzerdefinierten Zustands in einem Shadow-Teil eines benutzerdefinierten Elements](/de/docs/Web/API/CustomStateSet#matching_a_custom_state_in_a_shadow_part_of_a_custom_element) auf der `CustomStateSet`-Seite.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CustomStateSet`](/de/docs/Web/API/CustomStateSet)
- [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes)
- [Pseudoklassen und Pseudoelemente](/de/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements)
- [Benutzerdefinierte Zustände und benutzerdefinierte Zustands-Pseudoklasse-CSS-Selektoren](/de/docs/Web/API/Web_components/Using_custom_elements#custom_states_and_custom_state_pseudo-class_css_selectors) in [Verwendung von benutzerdefinierten Elementen](/de/docs/Web/API/Web_components/Using_custom_elements)
