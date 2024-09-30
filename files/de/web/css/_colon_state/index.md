---
title: ":state()"
slug: Web/CSS/:state
l10n:
  sourceCommit: b60bc79c7ad36c56dddf6760d2fd4dbb642d2023
---

{{CSSRef}}

Die **`:state()`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) trifft auf [benutzerdefinierte Elemente](/de/docs/Web/API/Web_components/Using_custom_elements) zu, die den angegebenen benutzerdefinierten Zustand aufweisen.

## Syntax

Die `:state()` Pseudoklasse nimmt als Argument einen benutzerdefinierten Bezeichner an, der den Zustand des benutzerdefinierten Elements darstellt, auf den damit gezielt werden soll.

```css-nolint
:state(<custom identifier>) {
  /* ... */
}
```

## Beschreibung

Elemente können durch Benutzerinteraktionen und andere Faktoren zwischen Zuständen wechseln.
Zum Beispiel kann ein Element im "hover"-Zustand sein, wenn ein Benutzer über das Element fährt, oder ein Link kann im "visited"-Zustand sein, nachdem ein Benutzer darauf geklickt hat.
Von Browsern bereitgestellte Elemente können basierend auf diesen Zuständen mithilfe von CSS-Pseudoklassen wie [`:hover`](/de/docs/Web/CSS/:hover) und [`:visited`](/de/docs/Web/CSS/:visited) gestaltet werden.
Ähnlich können [autonome benutzerdefinierte Elemente](/de/docs/Web/API/Web_components/Using_custom_elements#types_of_custom_element) (benutzerdefinierte Elemente, die nicht von eingebauten Elementen abgeleitet sind) ihre Zustände offenlegen, wodurch Seiten, die diese Elemente verwenden, diese mithilfe der CSS `:state()` Pseudoklasse gestalten können.

Die Zustände eines benutzerdefinierten Elements werden durch Zeichenfolgenwerte repräsentiert.
Diese Werte werden zu einem [`CustomStateSet`](/de/docs/Web/API/CustomStateSet)-Objekt hinzugefügt oder daraus entfernt, das dem Element zugeordnet ist.
Die CSS `:state()` Pseudoklasse trifft auf ein Element zu, wenn der als Argument übergebene Bezeichner im `CustomStateSet` des Elements vorhanden ist.

Die `:state()` Pseudoklasse kann auch verwendet werden, um benutzerdefinierte Zustände innerhalb der Implementierung eines benutzerdefinierten Elements zu treffen.
Dies wird durch die Verwendung von `:state()` innerhalb der [`:host()`](/de/docs/Web/CSS/:host_function) Pseudoklasse-Funktion erreicht, die nur innerhalb des Shadow-DOM des aktuellen benutzerdefinierten Elements einen Zustand trifft.

Zusätzlich ermöglicht die [`::part()`](/de/docs/Web/CSS/::part) Pseudo-Element in Kombination mit der `:state()` Pseudoklasse das Treiben auf die [Shadow-Parts](/de/docs/Web/CSS/CSS_shadow_parts) eines benutzerdefinierten Elements, die sich in einem bestimmten Zustand befinden. (**Shadow-Parts** sind Teile eines Shadow-Baums eines benutzerdefinierten Elements, die explizit für die Gestaltung durch eine umgebende Seite offenbart werden.)

## Beispiele

### Treffen eines benutzerdefinierten Zustands

Dieses CSS zeigt, wie der Rahmen des autonomen benutzerdefinierten Elements `<labeled-checkbox>` in `rot` geändert wird, wenn es sich im "checked"-Zustand befindet.

```css
labeled-checkbox {
  border: dashed red;
}
labeled-checkbox:state(checked) {
  border: solid;
}
```

Ein lebendiges Beispiel für diesen Code in Aktion finden Sie im Beispiel [Treffen des benutzerdefinierten Zustands eines benutzerdefinierten Checkbox-Elements](/de/docs/Web/API/CustomStateSet#matching_the_custom_state_of_a_custom_checkbox_element) auf der `CustomStateSet`-Seite.

### Treffen eines benutzerdefinierten Zustands im Shadow-DOM eines benutzerdefinierten Elements

Dieses Beispiel zeigt, wie die `:state()` Pseudoklasse innerhalb der [`:host()`](/de/docs/Web/CSS/:host_function) Pseudoklasse-Funktion verwendet werden kann, um benutzerdefinierte Zustände innerhalb der Implementierung eines benutzerdefinierten Elements zu treffen.

Das folgende CSS fügt ein graues `[x]` vor dem Element hinzu, wenn es sich im "checked"-Zustand befindet.

```css
:host(:state(checked))::before {
  content: "[x]";
}
```

Ein lebendiges Beispiel für diesen Code in Aktion finden Sie im Beispiel [Treffen des benutzerdefinierten Zustands eines benutzerdefinierten Checkbox-Elements](/de/docs/Web/API/CustomStateSet#matching_the_custom_state_of_a_custom_checkbox_element) auf der `CustomStateSet`-Seite.

### Treffen eines benutzerdefinierten Zustands in einem Shadow-Part

Dieses Beispiel zeigt, wie die `:state()` Pseudoklasse verwendet werden kann, um auf die [Shadow-Parts](/de/docs/Web/CSS/CSS_shadow_parts) eines benutzerdefinierten Elements zu zielen.

Shadow-Parts werden mit dem [`part`](/de/docs/Web/HTML/Global_attributes#part) Attribut definiert und benannt.
Betrachten Sie beispielsweise ein benutzerdefiniertes Element namens `<question-box>`, das ein `<labeled-checkbox>` benutzerdefiniertes Element als Shadow-Part namens `checkbox` verwendet:

```js
shadowRoot.innerHTML = `<labeled-checkbox part='checkbox'>Yes</labeled-checkbox>`;
```

Das folgende CSS zeigt, wie das [`::part()`](/de/docs/Web/CSS/::part) Pseudo-Element verwendet werden kann, um gegen das `'checkbox'` Shadow-Part zu treffen.
Es zeigt dann, wie das `::part()` Pseudo-Element gefolgt von der `:state()` Pseudoklasse verwendet werden kann, um gegen dasselbe Part zu treffen, wenn es sich im `checked`-Zustand befindet.

```css
question-box::part(checkbox) {
  color: red;
}

question-box::part(checkbox):state(checked) {
  color: green;
}
```

Ein lebendiges Beispiel für diesen Code in Aktion finden Sie im Beispiel [Treffen eines benutzerdefinierten Zustands in einem Shadow-Part eines benutzerdefinierten Elements](/de/docs/Web/API/CustomStateSet#matching_a_custom_state_in_a_shadow_part_of_a_custom_element) auf der `CustomStateSet`-Seite.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CustomStateSet`](/de/docs/Web/API/CustomStateSet)
- [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes)
- [Pseudoklassen und Pseudo-Elemente](/de/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements)
- [Benutzerdefinierte Zustände und benutzerdefinierte Zustand-Pseudoklasse CSS-Selektoren](/de/docs/Web/API/Web_components/Using_custom_elements#custom_states_and_custom_state_pseudo-class_css_selectors) in [Verwendung von benutzerdefinierten Elementen](/de/docs/Web/API/Web_components/Using_custom_elements)
