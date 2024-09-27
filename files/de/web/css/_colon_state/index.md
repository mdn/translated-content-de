---
title: ":state()"
slug: Web/CSS/:state
l10n:
  sourceCommit: b60bc79c7ad36c56dddf6760d2fd4dbb642d2023
---

{{CSSRef}}

Die **`:state()`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) stimmt mit [benutzerdefinierten Elementen](/de/docs/Web/API/Web_components/Using_custom_elements) überein, die den angegebenen benutzerdefinierten Zustand haben.

## Syntax

Die `:state()` Pseudoklasse nimmt als Argument einen benutzerdefinierten Bezeichner, der den Zustand des benutzerdefinierten Elements, das übereinstimmen soll, repräsentiert.

```css-nolint
:state(<custom identifier>) {
  /* ... */
}
```

## Beschreibung

Elemente können aufgrund von Benutzerinteraktionen und anderen Faktoren zwischen Zuständen wechseln.
Zum Beispiel kann sich ein Element im "hover" Zustand befinden, wenn ein Benutzer über das Element fährt, oder ein Link kann sich im "visited" Zustand befinden, nachdem ein Benutzer darauf geklickt hat.
Von Browsern bereitgestellte Elemente können basierend auf diesen Zuständen mit CSS-Pseudoklassen wie [`:hover`](/de/docs/Web/CSS/:hover) und [`:visited`](/de/docs/Web/CSS/:visited) gestaltet werden.
Ähnlich können [autonome benutzerdefinierte Elemente](/de/docs/Web/API/Web_components/Using_custom_elements#types_of_custom_element) (benutzerdefinierte Elemente, die nicht von eingebauten Elementen abgeleitet sind) ihre Zustände offenlegen, sodass Seiten, die die Elemente nutzen, diese mit der CSS `:state()` Pseudoklasse gestalten können.

Die Zustände eines benutzerdefinierten Elements werden durch Zeichenfolgenwerte dargestellt.
Diese Werte werden zu einem [`CustomStateSet`](/de/docs/Web/API/CustomStateSet) Objekt hinzugefügt oder von diesem entfernt, das dem Element zugeordnet ist.
Die CSS `:state()` Pseudoklasse stimmt mit einem Element überein, wenn der als Argument übergebene Bezeichner im `CustomStateSet` des Elements vorhanden ist.

Die `:state()` Pseudoklasse kann auch verwendet werden, um benutzerdefinierte Zustände innerhalb der Implementierung eines benutzerdefinierten Elements zu erreichen.
Dies wird erreicht, indem `:state()` innerhalb der [`:host()`](/de/docs/Web/CSS/:host_function) Pseudoklassenfunktion verwendet wird, die einen Zustand nur innerhalb des Shadow-DOM des aktuellen benutzerdefinierten Elements übereinstimmen lässt.

Zusätzlich ermöglicht der [`::part()`](/de/docs/Web/CSS/::part) Pseudoelement gefolgt von der `:state()` Pseudoklasse die Übereinstimmung mit den [Schatten-Teilen](/de/docs/Web/CSS/CSS_shadow_parts) eines benutzerdefinierten Elements, die sich in einem bestimmten Zustand befinden. (**Schatten-Teile** sind Teile eines Schattenbaums eines benutzerdefinierten Elements, die explizit für Stilzwecke auf einer enthaltenen Seite erkennbar gemacht werden.)

## Beispiele

### Übereinstimmen eines benutzerdefinierten Zustands

Dieses CSS zeigt, wie man die Umrandung des autonomen benutzerdefinierten Elements `<labeled-checkbox>` auf `rot` ändert, wenn es sich im "checked" Zustand befindet.

```css
labeled-checkbox {
  border: dashed red;
}
labeled-checkbox:state(checked) {
  border: solid;
}
```

Für ein live Beispiel dieses Codes in Aktion, siehe das [Übereinstimmen des benutzerdefinierten Zustands eines benutzerdefinierten Checkbox-Elements](/de/docs/Web/API/CustomStateSet#matching_the_custom_state_of_a_custom_checkbox_element) Beispiel auf der `CustomStateSet` Seite.

### Übereinstimmen eines benutzerdefinierten Zustands im Shadow-DOM eines benutzerdefinierten Elements

Dieses Beispiel zeigt, wie die `:state()` Pseudoklasse innerhalb der [`:host()`](/de/docs/Web/CSS/:host_function) Pseudoklassenfunktion verwendet werden kann, um benutzerdefinierte Zustände innerhalb der Implementierung eines benutzerdefinierten Elements zu erreichen.

Das folgende CSS fügt ein graues `[x]` vor dem Element hinzu, wenn es sich im "checked" Zustand befindet.

```css
:host(:state(checked))::before {
  content: "[x]";
}
```

Für ein live Beispiel dieses Codes in Aktion, siehe das [Übereinstimmen des benutzerdefinierten Zustands eines benutzerdefinierten Checkbox-Elements](/de/docs/Web/API/CustomStateSet#matching_the_custom_state_of_a_custom_checkbox_element) Beispiel auf der `CustomStateSet` Seite.

### Übereinstimmen eines benutzerdefinierten Zustands in einem Schatten-Teil

Dieses Beispiel zeigt, wie die `:state()` Pseudoklasse verwendet werden kann, um die [Schatten-Teile](/de/docs/Web/CSS/CSS_shadow_parts) eines benutzerdefinierten Elements anzusprechen.

Schatten-Teile werden mithilfe des [`part`](/de/docs/Web/HTML/Global_attributes#part) Attributs definiert und benannt.
Zum Beispiel, nehmen wir ein benutzerdefiniertes Element namens `<question-box>`, das ein `<labeled-checkbox>` benutzerdefiniertes Element als Schatten-Teil namens `checkbox` verwendet:

```js
shadowRoot.innerHTML = `<labeled-checkbox part='checkbox'>Yes</labeled-checkbox>`;
```

Das folgende CSS zeigt, wie das [`::part()`](/de/docs/Web/CSS/::part) Pseudoelement verwendet werden kann, um mit dem `'checkbox'` Schatten-Teil übereinzustimmen.
Es zeigt dann, wie das `::part()` Pseudoelement gefolgt von der `:state()` Pseudoklasse verwendet werden kann, um mit demselben Teil im `checked` Zustand zu übereinstimmen.

```css
question-box::part(checkbox) {
  color: red;
}

question-box::part(checkbox):state(checked) {
  color: green;
}
```

Für ein live Beispiel dieses Codes in Aktion, siehe das [Übereinstimmen eines benutzerdefinierten Zustands in einem Schatten-Teil eines benutzerdefinierten Elements](/de/docs/Web/API/CustomStateSet#matching_a_custom_state_in_a_shadow_part_of_a_custom_element) Beispiel auf der `CustomStateSet` Seite.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CustomStateSet`](/de/docs/Web/API/CustomStateSet)
- [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes)
- [Pseudoklassen und Pseudoelemente](/de/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements)
- [Benutzerdefinierte Zustände und benutzerdefinierte Zustandspseudoklasse CSS-Selektoren](/de/docs/Web/API/Web_components/Using_custom_elements#custom_states_and_custom_state_pseudo-class_css_selectors) in [Verwendung von benutzerdefinierten Elementen](/de/docs/Web/API/Web_components/Using_custom_elements)
