---
title: :state()
slug: Web/CSS/:state
l10n:
  sourceCommit: 52463eeca07031f88cdaf7c45aec5ebbb717533c
---

Die **`:state()`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) entspricht [benutzerdefinierten Elementen](/de/docs/Web/API/Web_components/Using_custom_elements), die den angegebenen benutzerdefinierten Zustand haben.

## Syntax

```css-nolint
:state(<custom identifier>) {
  /* ... */
}
```

### Parameter

Die `:state()`-Pseudoklasse nimmt als Argument einen benutzerdefinierten Bezeichner an, der den Zustand des benutzerdefinierten Elements darstellt, das übereinstimmen soll.

## Beschreibung

Elemente können aufgrund von Benutzerinteraktion und anderen Faktoren zwischen Zuständen wechseln.
Zum Beispiel kann sich ein Element im "hover"-Zustand befinden, wenn ein Benutzer darüber schwebt, oder ein Link kann sich im "visited"-Zustand befinden, nachdem ein Benutzer darauf geklickt hat.
Von Browsern bereitgestellte Elemente können basierend auf diesen Zuständen mithilfe von CSS-Pseudoklassen wie [`:hover`](/de/docs/Web/CSS/:hover) und [`:visited`](/de/docs/Web/CSS/:visited) gestaltet werden.
In ähnlicher Weise können [autonome benutzerdefinierte Elemente](/de/docs/Web/API/Web_components/Using_custom_elements#types_of_custom_element) (benutzerdefinierte Elemente, die nicht von eingebauten Elementen abgeleitet sind) ihre Zustände offenlegen, wodurch Seiten, die die Elemente verwenden, sie mithilfe der CSS-`:state()`-Pseudoklasse gestalten können.

Die Zustände eines benutzerdefinierten Elements werden durch Zeichenfolgenwerte dargestellt.
Diese Werte werden zu einem [`CustomStateSet`](/de/docs/Web/API/CustomStateSet)-Objekt hinzugefügt oder daraus entfernt, das dem Element zugeordnet ist.
Die CSS-`:state()`-Pseudoklasse stimmt mit einem Element überein, wenn der als Argument übergebene Bezeichner im `CustomStateSet` des Elements vorhanden ist.

Die `:state()`-Pseudoklasse kann auch verwendet werden, um benutzerdefinierte Zustände innerhalb der Implementierung eines benutzerdefinierten Elements zu erfassen.
Dies wird erreicht, indem `:state()` innerhalb der [`:host()`](/de/docs/Web/CSS/:host_function)-Pseudoklasse verwendet wird, die einen Zustand nur innerhalb des Shadow-DOMs des aktuellen benutzerdefinierten Elements erfasst.

Darüber hinaus ermöglicht das [`::part()`](/de/docs/Web/CSS/::part)-Pseudoelement, gefolgt von der `:state()`-Pseudoklasse, das Erfassen von [Shadow-Teilen](/de/docs/Web/CSS/CSS_shadow_parts) eines benutzerdefinierten Elements, die sich in einem bestimmten Zustand befinden. (**Shadow-Teile** sind Teile des Shadow-Baums eines benutzerdefinierten Elements, die explizit einer enthaltenen Seite zur Gestaltung zugänglich gemacht werden.)

## Beispiele

### Übereinstimmung eines benutzerdefinierten Zustands

Dieses CSS zeigt, wie die Umrandung des autonomen benutzerdefinierten Elements `<labeled-checkbox>` geändert wird, um `rot` zu sein, wenn es sich im "checked"-Zustand befindet.

```css
labeled-checkbox {
  border: dashed red;
}
labeled-checkbox:state(checked) {
  border: solid;
}
```

Für ein Live-Beispiel dieses Codes in Aktion sehen Sie das Beispiel [Übereinstimmung des benutzerdefinierten Zustands eines benutzerdefinierten Checkbox-Elements](/de/docs/Web/API/CustomStateSet#matching_the_custom_state_of_a_custom_checkbox_element) auf der Seite `CustomStateSet`.

### Übereinstimmung eines benutzerdefinierten Zustands im Shadow-DOM eines benutzerdefinierten Elements

Dieses Beispiel zeigt, wie die `:state()`-Pseudoklasse innerhalb der [`:host()`](/de/docs/Web/CSS/:host_function)-Pseudoklasse verwendet werden kann, um benutzerdefinierte Zustände innerhalb der Implementierung eines benutzerdefinierten Elements abzugleichen.

Das folgende CSS fügt ein graues `[x]` vor dem Element ein, wenn es sich im "checked"-Zustand befindet.

```css
:host(:state(checked))::before {
  content: "[x]";
}
```

Für ein Live-Beispiel dieses Codes in Aktion sehen Sie das Beispiel [Übereinstimmung des benutzerdefinierten Zustands eines benutzerdefinierten Checkbox-Elements](/de/docs/Web/API/CustomStateSet#matching_the_custom_state_of_a_custom_checkbox_element) auf der Seite `CustomStateSet`.

### Übereinstimmung eines benutzerdefinierten Zustands in einem Shadow-Teil

Dieses Beispiel zeigt, wie die `:state()`-Pseudoklasse verwendet werden kann, um gezielt die [Shadow-Teile](/de/docs/Web/CSS/CSS_shadow_parts) eines benutzerdefinierten Elements anzusprechen.

Shadow-Teile werden über das [`part`](/de/docs/Web/HTML/Reference/Global_attributes/part)-Attribut definiert und benannt.
Betrachten Sie zum Beispiel ein benutzerdefiniertes Element namens `<question-box>`, das ein benutzerdefiniertes `<labeled-checkbox>`-Element als einen Shadow-Teil namens `checkbox` verwendet:

```js
shadowRoot.innerHTML = `<labeled-checkbox part='checkbox'>Yes</labeled-checkbox>`;
```

Das folgende CSS zeigt, wie das [`::part()`](/de/docs/Web/CSS/::part)-Pseudoelement verwendet werden kann, um gegen den 'checkbox'-Shadow-Teil abzugleichen.
Es zeigt dann, wie das `::part()`-Pseudoelement, gefolgt von der `:state()`-Pseudoklasse, verwendet werden kann, um gegen dasselbe Teil abzugleichen, wenn es sich im `checked`-Zustand befindet.

```css
question-box::part(checkbox) {
  color: red;
}

question-box::part(checkbox):state(checked) {
  color: green;
  outline: dashed 1px green;
}
```

Für ein Live-Beispiel dieses Codes in Aktion sehen Sie das Beispiel [Übereinstimmung eines benutzerdefinierten Zustands in einem Shadow-Teil eines benutzerdefinierten Elements](/de/docs/Web/API/CustomStateSet#matching_a_custom_state_in_a_shadow_part_of_a_custom_element) auf der Seite `CustomStateSet`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CustomStateSet`](/de/docs/Web/API/CustomStateSet)
- [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes)
- [Lernen: Pseudoklassen und Pseudoelemente](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements)
- [Benutzerdefinierte Zustände und benutzerdefinierte Zustands-Pseudoklasse-CSS-Selektoren](/de/docs/Web/API/Web_components/Using_custom_elements#custom_states_and_custom_state_pseudo-class_css_selectors) in [Verwendung von benutzerdefinierten Elementen](/de/docs/Web/API/Web_components/Using_custom_elements)
