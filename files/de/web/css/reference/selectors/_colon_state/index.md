---
title: "`:state()` CSS-Pseudoklasse"
short-title: :state()
slug: Web/CSS/Reference/Selectors/:state
l10n:
  sourceCommit: 28f5f3b9b463fa842fa686ccc73c9e1d9b06282b
---

Die **`:state()`** [CSS](/de/docs/Web/CSS)-[Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) entspricht [benutzerdefinierten Elementen](/de/docs/Web/API/Web_components/Using_custom_elements), die den angegebenen benutzerdefinierten Zustand haben.

## Syntax

```css-nolint
:state(<custom identifier>) {
  /* ... */
}
```

### Parameter

Die `:state()`-Pseudoklasse nimmt als Argument einen benutzerdefinierten Bezeichner, der den Zustand des zu überwachenden benutzerdefinierten Elements darstellt.

## Beschreibung

Elemente können aufgrund von Benutzerinteraktionen und anderen Faktoren zwischen Zuständen wechseln.
Zum Beispiel kann sich ein Element im "hover"-Zustand befinden, wenn ein Benutzer darüber fährt, oder ein Link kann im "visited"-Zustand sein, nachdem ein Benutzer darauf geklickt hat.
Von Browsern bereitgestellte Elemente können basierend auf diesen Zuständen mithilfe von CSS-Pseudoklassen wie {{cssxref(":hover")}} und {{cssxref(":visited")}} gestaltet werden.
Ebenso können [autonome benutzerdefinierte Elemente](/de/docs/Web/API/Web_components/Using_custom_elements#types_of_custom_element) (benutzerdefinierte Elemente, die nicht von eingebauten Elementen abgeleitet sind) ihre Zustände offenlegen, wodurch Seiten, die die Elemente verwenden, diese mithilfe der CSS-`:state()`-Pseudoklasse gestalten können.

Die Zustände eines benutzerdefinierten Elements werden durch Zeichenfolgenwerte dargestellt.
Diese Werte werden zu einem [`CustomStateSet`](/de/docs/Web/API/CustomStateSet)-Objekt hinzugefügt oder davon entfernt, das mit dem Element verknüpft ist.
Die CSS-Pseudoklasse `:state()` entspricht einem Element, wenn der als Argument übergebene Bezeichner im `CustomStateSet` des Elements vorhanden ist.

Die `:state()`-Pseudoklasse kann auch verwendet werden, um benutzerdefinierte Zustände innerhalb der Implementierung eines benutzerdefinierten Elements zu überwachen.
Dies wird erreicht, indem `:state()` innerhalb der [`:host()`](/de/docs/Web/CSS/Reference/Selectors/:host_function)-Pseudoklassenfunktion verwendet wird, welche einen Zustand nur innerhalb des Shadow-DOM des aktuellen benutzerdefinierten Elements überwacht.

Zusätzlich ermöglicht das [`::part()`](/de/docs/Web/CSS/Reference/Selectors/::part)-Pseudo-Element zusammen mit der `:state()`-Pseudoklasse das Überwachen der [Shadow-Parts](/de/docs/Web/CSS/Guides/Shadow_parts) eines benutzerdefinierten Elements, die sich in einem bestimmten Zustand befinden. (**Shadow-Parts** sind Teile eines benutzerdefinierten Elements im Shadow-Baum, die explizit zur Gestaltung auf einer umgebenden Seite freigelegt werden.)

## Beispiele

### Überwachen eines benutzerdefinierten Zustands

Dieses CSS zeigt, wie der Rand des autonomen benutzerdefinierten Elements `<labeled-checkbox>` auf `rot` geändert wird, wenn es sich im "checked"-Zustand befindet.

```css
labeled-checkbox {
  border: dashed red;
}
labeled-checkbox:state(checked) {
  border: solid;
}
```

Für ein Live-Beispiel dieser funktionierenden Code, siehe das [Matching the custom state of a custom checkbox element](/de/docs/Web/API/CustomStateSet#matching_the_custom_state_of_a_custom_checkbox_element)-Beispiel auf der `CustomStateSet`-Seite.

### Überwachen eines benutzerdefinierten Zustands im Shadow-DOM eines benutzerdefinierten Elements

Dieses Beispiel zeigt, wie die `:state()`-Pseudoklasse innerhalb der [`:host()`](/de/docs/Web/CSS/Reference/Selectors/:host_function)-Pseudoklassenfunktion verwendet werden kann, um benutzerdefinierte Zustände innerhalb der Implementierung eines benutzerdefinierten Elements zu überwachen.

Das folgende CSS fügt dem Element ein graues `[x]` hinzu, wenn es sich im "checked"-Zustand befindet.

```css
:host(:state(checked))::before {
  content: "[x]";
}
```

Für ein Live-Beispiel dieses funktionierenden Codes, siehe das [Matching the custom state of a custom checkbox element](/de/docs/Web/API/CustomStateSet#matching_the_custom_state_of_a_custom_checkbox_element)-Beispiel auf der `CustomStateSet`-Seite.

### Überwachen eines benutzerdefinierten Zustands in einem Shadow-Part

Dieses Beispiel zeigt, wie die `:state()`-Pseudoklasse verwendet werden kann, um die [Shadow-Parts](/de/docs/Web/CSS/Guides/Shadow_parts) eines benutzerdefinierten Elements zu überwachen.

Shadow-Parts werden mithilfe des [`part`](/de/docs/Web/HTML/Reference/Global_attributes/part)-Attributs definiert und benannt.
Beispielsweise betrachten Sie ein benutzerdefiniertes Element namens `<question-box>`, das ein benutzerdefiniertes Element `<labeled-checkbox>` als ein Shadow-Part namens `checkbox` verwendet:

```js
shadowRoot.innerHTML = `<labeled-checkbox part='checkbox'>Yes</labeled-checkbox>`;
```

Das folgende CSS zeigt, wie das [`::part()`](/de/docs/Web/CSS/Reference/Selectors/::part)-Pseudoelement verwendet werden kann, um das `'checkbox'`-Shadow-Part zu überwachen.
Es zeigt auch, wie das `::part()`-Pseudoelement, gefolgt von der `:state()`-Pseudoklasse, verwendet werden kann, um das gleiche Part zu überwachen, wenn es im `checked`-Zustand ist.

```css
question-box::part(checkbox) {
  color: red;
}

question-box::part(checkbox):state(checked) {
  color: green;
  outline: dashed 1px green;
}
```

Für ein Live-Beispiel dieses funktionierenden Codes, siehe das [Matching a custom state in a shadow part of a custom element](/de/docs/Web/API/CustomStateSet#matching_a_custom_state_in_a_shadow_part_of_a_custom_element)-Beispiel auf der `CustomStateSet`-Seite.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CustomStateSet`](/de/docs/Web/API/CustomStateSet)
- [Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes)
- [Erfahren: Pseudoklassen und Pseudoelemente](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements)
- [Benutzerdefinierte Zustände und benutzerdefinierte Zustands-Pseudoklassen-CSS-Selektoren](/de/docs/Web/API/Web_components/Using_custom_elements#custom_states_and_custom_state_pseudo-class_css_selectors) in [Verwendung benutzerdefinierter Elemente](/de/docs/Web/API/Web_components/Using_custom_elements)
