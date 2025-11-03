---
title: :state()
slug: Web/CSS/Reference/Selectors/:state
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

Die **`:state()`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) stimmt mit [benutzerdefinierten Elementen](/de/docs/Web/API/Web_components/Using_custom_elements) überein, die den angegebenen benutzerdefinierten Zustand haben.

## Syntax

```css-nolint
:state(<custom identifier>) {
  /* ... */
}
```

### Parameter

Die `:state()`-Pseudoklasse nimmt als Argument einen benutzerdefinierten Bezeichner, der den Zustand des benutzerdefinierten Elements darstellt, das übereinstimmen soll.

## Beschreibung

Elemente können aufgrund von Benutzerinteraktionen und anderen Faktoren zwischen Zuständen wechseln. Zum Beispiel kann sich ein Element im "Hover"-Zustand befinden, wenn ein Benutzer mit der Maus darüber schwebt, oder ein Link kann sich im "Besucht"-Zustand befinden, nachdem ein Benutzer darauf geklickt hat. Von Browsern bereitgestellte Elemente können basierend auf diesen Zuständen mit CSS-Pseudoklassen wie [`:hover`](/de/docs/Web/CSS/Reference/Selectors/:hover) und [`:visited`](/de/docs/Web/CSS/Reference/Selectors/:visited) gestylt werden. Ebenso können [autonome benutzerdefinierte Elemente](/de/docs/Web/API/Web_components/Using_custom_elements#types_of_custom_element) (benutzerdefinierte Elemente, die nicht von integrierten Elementen abgeleitet sind) ihre Zustände zur Verfügung stellen, sodass Seiten, die die Elemente verwenden, sie mithilfe der CSS `:state()`-Pseudoklasse stylen können.

Die Zustände eines benutzerdefinierten Elements werden durch Zeichenfolgenwerte dargestellt. Diese Werte werden zu einem [`CustomStateSet`](/de/docs/Web/API/CustomStateSet)-Objekt hinzugefügt oder entfernt, das dem Element zugeordnet ist. Die CSS `:state()`-Pseudoklasse stimmt mit einem Element überein, wenn der Bezeichner, der als Argument übergeben wird, im `CustomStateSet` des Elements vorhanden ist.

Die `:state()`-Pseudoklasse kann auch verwendet werden, um benutzerdefinierte Zustände innerhalb der Implementierung eines benutzerdefinierten Elements zu erfassen. Dies wird erreicht, indem `:state()` innerhalb der [`:host()`](/de/docs/Web/CSS/Reference/Selectors/:host_function)-Pseudoklassenfunktion verwendet wird, die einen Zustand nur innerhalb des Shadow-DOM des aktuellen benutzerdefinierten Elements erfasst.

Darüber hinaus ermöglicht die [`::part()`](/de/docs/Web/CSS/Reference/Selectors/::part)-Pseudo-Element gefolgt von der `:state()`-Pseudoklasse die Übereinstimmung mit den [Shadow-Parts](/de/docs/Web/CSS/CSS_shadow_parts) eines benutzerdefinierten Elements, die sich in einem bestimmten Zustand befinden. (**Shadow-Parts** sind Teile eines benutzerdefinierten Elemente-Shadow-Trees, die explizit für Styling-Zwecke auf einer enthaltenden Seite freigegeben sind.)

## Beispiele

### Übereinstimmung eines benutzerdefinierten Zustands

Dieses CSS zeigt, wie die Grenze des autonomen benutzerdefinierten Elements `<labeled-checkbox>` auf `red` geändert werden kann, wenn es sich im "checked"-Zustand befindet.

```css
labeled-checkbox {
  border: dashed red;
}
labeled-checkbox:state(checked) {
  border: solid;
}
```

Für ein Live-Beispiel dieses Codes in Aktion siehe das [Übereinstimmen des benutzerdefinierten Zustands eines benutzerdefinierten Kontrollkästchenelements](/de/docs/Web/API/CustomStateSet#matching_the_custom_state_of_a_custom_checkbox_element) Beispiel auf der `CustomStateSet`-Seite.

### Übereinstimmung eines benutzerdefinierten Zustands im Shadow-DOM eines benutzerdefinierten Elements

Dieses Beispiel zeigt, wie die `:state()`-Pseudoklasse innerhalb der [`:host()`](/de/docs/Web/CSS/Reference/Selectors/:host_function)-Pseudoklassenfunktion verwendet werden kann, um benutzerdefinierte Zustände innerhalb der Implementierung eines benutzerdefinierten Elements zu erfassen.

Das folgende CSS fügt ein graues `[x]` vor das Element ein, wenn es sich im "checked"-Zustand befindet.

```css
:host(:state(checked))::before {
  content: "[x]";
}
```

Für ein Live-Beispiel dieses Codes in Aktion siehe das [Übereinstimmen des benutzerdefinierten Zustands eines benutzerdefinierten Kontrollkästchenelements](/de/docs/Web/API/CustomStateSet#matching_the_custom_state_of_a_custom_checkbox_element) Beispiel auf der `CustomStateSet`-Seite.

### Übereinstimmung eines benutzerdefinierten Zustands in einem Shadow-Part

Dieses Beispiel zeigt, wie die `:state()`-Pseudoklasse verwendet werden kann, um die [Shadow-Parts](/de/docs/Web/CSS/CSS_shadow_parts) eines benutzerdefinierten Elements zu erfassen.

Shadow-Parts werden unter Verwendung des [`part`](/de/docs/Web/HTML/Reference/Global_attributes/part)-Attributs definiert und benannt. Nehmen Sie zum Beispiel ein benutzerdefiniertes Element namens `<question-box>`, das ein `<labeled-checkbox>` benutzerdefiniertes Element als Shadow-Part namens `checkbox` verwendet:

```js
shadowRoot.innerHTML = `<labeled-checkbox part='checkbox'>Yes</labeled-checkbox>`;
```

Das unten stehende CSS zeigt, wie das [`::part()`](/de/docs/Web/CSS/Reference/Selectors/::part)-Pseudo-Element verwendet werden kann, um gegen den `'checkbox'` Shadow-Part zu erfassen. Es zeigt dann, wie das `::part()`-Pseudo-Element gefolgt von der `:state()`-Pseudoklasse verwendet werden kann, um gegen denselben Teil zu erfassen, wenn er sich im `checked`-Zustand befindet.

```css
question-box::part(checkbox) {
  color: red;
}

question-box::part(checkbox):state(checked) {
  color: green;
  outline: dashed 1px green;
}
```

Für ein Live-Beispiel dieses Codes in Aktion siehe das [Übereinstimmen eines benutzerdefinierten Zustands in einem Shadow-Part eines benutzerdefinierten Elements](/de/docs/Web/API/CustomStateSet#matching_a_custom_state_in_a_shadow_part_of_a_custom_element) Beispiel auf der `CustomStateSet`-Seite.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CustomStateSet`](/de/docs/Web/API/CustomStateSet)
- [Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes)
- [Erfahren: Pseudoklassen und Pseudo-Elemente](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements)
- [Benutzerdefinierte Zustände und benutzerdefinierte Zustand-Pseudoklasse CSS-Selektoren](/de/docs/Web/API/Web_components/Using_custom_elements#custom_states_and_custom_state_pseudo-class_css_selectors) in [Verwendung benutzerdefinierter Elemente](/de/docs/Web/API/Web_components/Using_custom_elements)
