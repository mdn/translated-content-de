---
title: ":state()"
slug: Web/CSS/:state
l10n:
  sourceCommit: b60bc79c7ad36c56dddf6760d2fd4dbb642d2023
---

{{CSSRef}}

Die **`:state()`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) stimmt mit [benutzerdefinierten Elementen](/de/docs/Web/API/Web_components/Using_custom_elements) überein, die den angegebenen benutzerdefinierten Zustand haben.

## Syntax

Die `:state()` Pseudoklasse nimmt als Argument einen benutzerdefinierten Bezeichner, der den Zustand des benutzerdefinierten Elements darstellt, mit dem sie übereinstimmen soll.

```css-nolint
:state(<custom identifier>) {
  /* ... */
}
```

## Beschreibung

Elemente können aufgrund von Benutzerinteraktionen und anderen Faktoren zwischen Zuständen wechseln.
Zum Beispiel kann sich ein Element im „hover“-Zustand befinden, wenn ein Benutzer über das Element fährt, oder ein Link kann sich im „visited“-Zustand befinden, nachdem ein Benutzer darauf geklickt hat.
Von Browsern bereitgestellte Elemente können basierend auf diesen Zuständen mit CSS-Pseudoklassen wie [`:hover`](/de/docs/Web/CSS/:hover) und [`:visited`](/de/docs/Web/CSS/:visited) gestaltet werden.
In ähnlicher Weise können [autonome benutzerdefinierte Elemente](/de/docs/Web/API/Web_components/Using_custom_elements#types_of_custom_element) (benutzerdefinierte Elemente, die nicht von eingebauten Elementen abgeleitet sind) ihre Zustände offenlegen, sodass Seiten, die die Elemente verwenden, sie mit der CSS `:state()` Pseudoklasse gestalten können.

Die Zustände eines benutzerdefinierten Elements werden durch Zeichenkettenwerte dargestellt.
Diese Werte werden zu einem [`CustomStateSet`](/de/docs/Web/API/CustomStateSet)-Objekt, das dem Element zugeordnet ist, hinzugefügt oder daraus entfernt.
Die CSS `:state()` Pseudoklasse stimmt mit einem Element überein, wenn der als Argument übergebene Bezeichner im `CustomStateSet` des Elements vorhanden ist.

Die `:state()` Pseudoklasse kann auch verwendet werden, um benutzerdefinierte Zustände innerhalb der Implementierung eines benutzerdefinierten Elements zu vergleichen.
Dies wird erreicht, indem `:state()` innerhalb der [`:host()`](/de/docs/Web/CSS/:host_function) Pseudoklasse-Funktion verwendet wird, die einen Zustand nur innerhalb des Shadow DOM des aktuellen benutzerdefinierten Elements abgleicht.

Zusätzlich erlaubt das [`::part()`](/de/docs/Web/CSS/::part) Pseudoelement, gefolgt von der `:state()` Pseudoklasse, den Abgleich auf den [Shadow-Parts](/de/docs/Web/CSS/CSS_shadow_parts) eines benutzerdefinierten Elements, die sich in einem bestimmten Zustand befinden. (**Shadow-Parts** sind Teile eines benutzerdefinierten Elements im Shadow-Baum, die ausdrücklich für Stylingzwecke auf eine enthaltene Seite exponiert werden.)

## Beispiele

### Abgleich eines benutzerdefinierten Zustands

Dieses CSS zeigt, wie man den Rand des autonomen benutzerdefinierten Elements `<labeled-checkbox>` auf `rot` ändert, wenn es sich im „checked“-Zustand befindet.

```css
labeled-checkbox {
  border: dashed red;
}
labeled-checkbox:state(checked) {
  border: solid;
}
```

Für ein Live-Beispiel, wie dieser Code funktioniert, sehen Sie sich das [Abgleichen des benutzerdefinierten Zustands eines benutzerdefinierten Checkbox-Elements](/de/docs/Web/API/CustomStateSet#matching_the_custom_state_of_a_custom_checkbox_element)-Beispiel auf der `CustomStateSet` Seite an.

### Abgleich eines benutzerdefinierten Zustands im Shadow DOM eines benutzerdefinierten Elements

Dieses Beispiel zeigt, wie die `:state()` Pseudoklasse innerhalb der [`:host()`](/de/docs/Web/CSS/:host_function) Pseudoklasse-Funktion verwendet werden kann, um benutzerdefinierte Zustände innerhalb der Implementierung eines benutzerdefinierten Elements abzugleichen.

Das folgende CSS fügt ein graues `[x]` vor dem Element hinzu, wenn es sich im „checked“-Zustand befindet.

```css
:host(:state(checked))::before {
  content: "[x]";
}
```

Für ein Live-Beispiel, wie dieser Code funktioniert, sehen Sie sich das [Abgleichen des benutzerdefinierten Zustands eines benutzerdefinierten Checkbox-Elements](/de/docs/Web/API/CustomStateSet#matching_the_custom_state_of_a_custom_checkbox_element)-Beispiel auf der `CustomStateSet` Seite an.

### Abgleich eines benutzerdefinierten Zustands in einem Shadow-Part

Dieses Beispiel zeigt, wie die `:state()` Pseudoklasse verwendet werden kann, um die [Shadow-Parts](/de/docs/Web/CSS/CSS_shadow_parts) eines benutzerdefinierten Elements anzuvisieren.

Shadow-Parts werden definiert und benannt unter Verwendung des [`part`](/de/docs/Web/HTML/Global_attributes#part) Attributs.
Betrachten Sie zum Beispiel ein benutzerdefiniertes Element mit dem Namen `<question-box>`, das ein `<labeled-checkbox>` benutzerdefiniertes Element als Shadow-Part namens `checkbox` verwendet:

```js
shadowRoot.innerHTML = `<labeled-checkbox part='checkbox'>Yes</labeled-checkbox>`;
```

Das untenstehende CSS zeigt, wie das [`::part()`](/de/docs/Web/CSS/::part) Pseudoelement verwendet werden kann, um den `'checkbox'` Shadow-Part abzugleichen.
Es zeigt dann, wie das `::part()` Pseudoelement gefolgt von der `:state()` Pseudoklasse verwendet werden kann, um den gleichen Part abzugleichen, wenn er sich im `checked` Zustand befindet.

```css
question-box::part(checkbox) {
  color: red;
}

question-box::part(checkbox):state(checked) {
  color: green;
}
```

Für ein Live-Beispiel, wie dieser Code funktioniert, sehen Sie sich das [Abgleichen eines benutzerdefinierten Zustands in einem Shadow-Part eines benutzerdefinierten Elements](/de/docs/Web/API/CustomStateSet#matching_a_custom_state_in_a_shadow_part_of_a_custom_element)-Beispiel auf der `CustomStateSet` Seite an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CustomStateSet`](/de/docs/Web/API/CustomStateSet)
- [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes)
- [Pseudoklassen und Pseudoelemente](/de/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements)
- [Benutzerdefinierte Zustände und benutzerdefinierte Zustands-Pseudoklasse-CSS-Selektoren](/de/docs/Web/API/Web_components/Using_custom_elements#custom_states_and_custom_state_pseudo-class_css_selectors) im [Verwenden von benutzerdefinierten Elementen](/de/docs/Web/API/Web_components/Using_custom_elements)
