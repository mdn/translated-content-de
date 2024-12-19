---
title: ":state()"
slug: Web/CSS/:state
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{CSSRef}}

Die **`:state()`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) passt zu [benutzerdefinierten Elementen](/de/docs/Web/API/Web_components/Using_custom_elements), die den angegebenen benutzerdefinierten Zustand haben.

## Syntax

Die `:state()`-Pseudo-Klasse nimmt als Argument einen benutzerdefinierten Bezeichner, der den Zustand des benutzerdefinierten Elements repräsentiert, das abgeglichen werden soll.

```css-nolint
:state(<custom identifier>) {
  /* ... */
}
```

## Beschreibung

Elemente können aufgrund von Benutzerinteraktion und anderen Faktoren zwischen Zuständen wechseln. Ein Element kann beispielsweise im "hover"-Zustand sein, wenn ein Benutzer über das Element schwebt, oder ein Link kann im "visited"-Zustand sein, nachdem ein Benutzer darauf geklickt hat. Von Browsern bereitgestellte Elemente können basierend auf diesen Zuständen mit CSS-Pseudoklassen wie [`:hover`](/de/docs/Web/CSS/:hover) und [`:visited`](/de/docs/Web/CSS/:visited) gestylt werden. Ebenso können [autonome benutzerdefinierte Elemente](/de/docs/Web/API/Web_components/Using_custom_elements#types_of_custom_element) (benutzerdefinierte Elemente, die nicht von integrierten Elementen abgeleitet sind) ihre Zustände offenlegen, sodass Seiten, die die Elemente verwenden, diese mithilfe der CSS-`:state()`-Pseudoklasse stylen können.

Die Zustände eines benutzerdefinierten Elements werden durch Zeichenfolgenwerte repräsentiert. Diese Werte werden einem [`CustomStateSet`](/de/docs/Web/API/CustomStateSet)-Objekt hinzugefügt oder daraus entfernt, das dem Element zugeordnet ist. Die CSS-`:state()`-Pseudoklasse stimmt mit einem Element überein, wenn der als Argument übergebene Bezeichner im `CustomStateSet` des Elements vorhanden ist.

Die `:state()`-Pseudoklasse kann auch verwendet werden, um benutzerdefinierte Zustände innerhalb der Implementierung eines benutzerdefinierten Elements abzugleichen. Dies wird erreicht, indem `:state()` innerhalb der [`:host()`](/de/docs/Web/CSS/:host_function)-Pseudoklassenfunktion verwendet wird, die einen Zustand nur innerhalb des Shadow DOM des aktuellen benutzerdefinierten Elements abgleicht.

Zudem ermöglicht die [`::part()`](/de/docs/Web/CSS/::part)-Pseudo-Elementfunktion, gefolgt von der `:state()`-Pseudo-Klasse, das Abgleichen der [Shadow-Parts](/de/docs/Web/CSS/CSS_shadow_parts) eines benutzerdefinierten Elements, die sich in einem bestimmten Zustand befinden. (**Shadow-Parts** sind Teile eines benutzerdefinierten Element-Shadow-Baums, die explizit für das Styling einer enthaltenden Seite freigelegt werden.)

## Beispiele

### Anpassen eines benutzerdefinierten Zustandes

Dieses CSS zeigt, wie die Grenze des autonomen benutzerdefinierten Elements `<labeled-checkbox>` auf `rot` geändert wird, wenn es sich im "checked"-Zustand befindet.

```css
labeled-checkbox {
  border: dashed red;
}
labeled-checkbox:state(checked) {
  border: solid;
}
```

Ein Live-Beispiel dieser Umsetzung finden Sie im [Anpassen des benutzerdefinierten Zustands eines benutzerdefinierten Checkbox-Elements](/de/docs/Web/API/CustomStateSet#matching_the_custom_state_of_a_custom_checkbox_element)-Beispiel auf der `CustomStateSet`-Seite.

### Anpassen eines benutzerdefinierten Zustandes im Shadow DOM eines benutzerdefinierten Elements

Dieses Beispiel zeigt, wie die `:state()`-Pseudoklasse innerhalb der [`:host()`](/de/docs/Web/CSS/:host_function)-Pseudoklassenfunktion verwendet werden kann, um benutzerdefinierte Zustände innerhalb der Implementierung eines benutzerdefinierten Elements abzugleichen.

Das folgende CSS fügt ein graues `[x]` vor dem Element ein, wenn es sich im "checked"-Zustand befindet.

```css
:host(:state(checked))::before {
  content: "[x]";
}
```

Ein Live-Beispiel dieser Umsetzung finden Sie im [Anpassen des benutzerdefinierten Zustands eines benutzerdefinierten Checkbox-Elements](/de/docs/Web/API/CustomStateSet#matching_the_custom_state_of_a_custom_checkbox_element)-Beispiel auf der `CustomStateSet`-Seite.

### Anpassen eines benutzerdefinierten Zustandes in einem Shadow-Part

Dieses Beispiel zeigt, wie die `:state()`-Pseudoklasse verwendet werden kann, um auf die [Shadow-Parts](/de/docs/Web/CSS/CSS_shadow_parts) eines benutzerdefinierten Elements zu zielen.

Shadow-Parts werden mithilfe des [`part`](/de/docs/Web/HTML/Global_attributes/part)-Attributs definiert und benannt. Beispielsweise betrachten Sie ein benutzerdefiniertes Element namens `<question-box>`, das ein `<labeled-checkbox>`-benutzerdefiniertes Element als Shadow-Part mit dem Namen `checkbox` verwendet:

```js
shadowRoot.innerHTML = `<labeled-checkbox part='checkbox'>Yes</labeled-checkbox>`;
```

Das CSS unten zeigt, wie das [`::part()`](/de/docs/Web/CSS/::part)-Pseudo-Element verwendet werden kann, um gegen den `'checkbox'`-Shadow-Part zu matchen. Es zeigt dann, wie das `::part()`-Pseudo-Element, gefolgt von der `:state()`-Pseudo-Klasse, verwendet werden kann, um gegen denselben Part zu matchen, wenn er sich im `checked`-Zustand befindet.

```css
question-box::part(checkbox) {
  color: red;
}

question-box::part(checkbox):state(checked) {
  color: green;
}
```

Ein Live-Beispiel dieser Umsetzung finden Sie im [Anpassen eines benutzerdefinierten Zustands in einem Shadow-Part eines benutzerdefinierten Elements](/de/docs/Web/API/CustomStateSet#matching_a_custom_state_in_a_shadow_part_of_a_custom_element)-Beispiel auf der `CustomStateSet`-Seite.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CustomStateSet`](/de/docs/Web/API/CustomStateSet)
- [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes)
- [Lernen: Pseudoklassen und Pseudo-Elemente](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements)
- [Benutzerdefinierte Zustände und benutzerdefinierte Zustands-Pseudoklassen-CSS-Selektoren](/de/docs/Web/API/Web_components/Using_custom_elements#custom_states_and_custom_state_pseudo-class_css_selectors) in [Verwendung von benutzerdefinierten Elementen](/de/docs/Web/API/Web_components/Using_custom_elements)
