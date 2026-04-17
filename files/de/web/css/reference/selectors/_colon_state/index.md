---
title: "`:state()` CSS-Pseudoklasse"
short-title: :state()
slug: Web/CSS/Reference/Selectors/:state
l10n:
  sourceCommit: bf90d24ddf56e3f60df25fcbc0d4e3e084004794
---

Die **`:state()`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) stimmt mit [benutzerdefinierten Elementen](/de/docs/Web/API/Web_components/Using_custom_elements) überein, die den angegebenen benutzerdefinierten Status haben.

## Syntax

```css-nolint
:state(<custom identifier>) {
  /* ... */
}
```

### Parameter

Die `:state()`-Pseudoklasse nimmt als Argument einen benutzerdefinierten Bezeichner, der den Zustand des benutzerdefinierten Elements beschreibt, mit dem eine Übereinstimmung erfolgen soll.

## Beschreibung

Elemente können aufgrund von Benutzerinteraktion und anderen Faktoren zwischen Zuständen wechseln.
Zum Beispiel kann sich ein Element im "hover"-Zustand befinden, wenn ein Benutzer über das Element fährt, oder ein Link kann im "visited"-Zustand sein, nachdem ein Benutzer darauf geklickt hat.
Von Browsern bereitgestellte Elemente können basierend auf diesen Zuständen mithilfe von CSS-Pseudoklassen wie {{cssxref(":hover")}} und {{cssxref(":visited")}} gestylt werden.
In ähnlicher Weise können [autonome benutzerdefinierte Elemente](/de/docs/Web/API/Web_components/Using_custom_elements#types_of_custom_element) (benutzerdefinierte Elemente, die nicht von integrierten Elementen abgeleitet sind) ihre Zustände offenlegen, sodass Seiten, die die Elemente verwenden, diese mit der CSS `:state()`-Pseudoklasse stylen können.

Die Zustände eines benutzerdefinierten Elements werden durch Zeichenfolgenwerte dargestellt.
Diese Werte werden einem [`CustomStateSet`](/de/docs/Web/API/CustomStateSet)-Objekt hinzugefügt oder daraus entfernt, das dem Element zugeordnet ist.
Die CSS `:state()`-Pseudoklasse stimmt mit einem Element überein, wenn der als Argument übergebene Bezeichner im `CustomStateSet` des Elements vorhanden ist.

Die `:state()`-Pseudoklasse kann auch verwendet werden, um benutzerdefinierte Zustände innerhalb der Implementierung eines benutzerdefinierten Elements abzugleichen.
Dies wird erreicht, indem `:state()` innerhalb der [`:host()`](/de/docs/Web/CSS/Reference/Selectors/:host_function)-Pseudoklassenfunktion verwendet wird, die einen Zustand nur innerhalb des Shadow-DOM des aktuellen benutzerdefinierten Elements abgleicht.

Zusätzlich ermöglicht das [`::part()`](/de/docs/Web/CSS/Reference/Selectors/::part)-Pseudoelement, gefolgt von der `:state()`-Pseudoklasse, die Übereinstimmung mit den [Shadow-Parts](/de/docs/Web/CSS/Guides/Shadow_parts) eines benutzerdefinierten Elements, die sich in einem bestimmten Zustand befinden. (**Shadow-Parts** sind Teile des Shadow-Baums eines benutzerdefinierten Elements, die explizit zur stilistischen Anpassung an eine umgebende Seite offengelegt werden.)

## Beispiele

### Übereinstimmung eines benutzerdefinierten Zustands

Diese CSS zeigt, wie der Rahmen des autonomen benutzerdefinierten Elements `<labeled-checkbox>` auf `rot` geändert wird, wenn es sich im "checked"-Zustand befindet.

```css
labeled-checkbox {
  border: dashed red;
}
labeled-checkbox:state(checked) {
  border: solid;
}
```

Für ein Live-Beispiel dieses Codes in Aktion, siehe das [Matching the custom state of a custom checkbox element](/de/docs/Web/API/CustomStateSet#matching_the_custom_state_of_a_custom_checkbox_element)-Beispiel auf der `CustomStateSet`-Seite.

### Übereinstimmung eines benutzerdefinierten Zustands im Shadow-DOM eines benutzerdefinierten Elements

Dieses Beispiel zeigt, wie die `:state()`-Pseudoklasse innerhalb der [`:host()`](/de/docs/Web/CSS/Reference/Selectors/:host_function)-Pseudoklassenfunktion verwendet werden kann, um benutzerdefinierte Zustände innerhalb der Implementierung eines benutzerdefinierten Elements abzugleichen.

Der folgende CSS injiziert ein graues `[x]` vor das Element, wenn es sich im "checked"-Zustand befindet.

```css
:host(:state(checked))::before {
  content: "[x]";
}
```

Für ein Live-Beispiel dieses Codes in Aktion, siehe das [Matching the custom state of a custom checkbox element](/de/docs/Web/API/CustomStateSet#matching_the_custom_state_of_a_custom_checkbox_element)-Beispiel auf der `CustomStateSet`-Seite.

### Übereinstimmung eines benutzerdefinierten Zustands in einem Shadow-Part

Dieses Beispiel zeigt, wie die `:state()`-Pseudoklasse verwendet werden kann, um die [Shadow-Parts](/de/docs/Web/CSS/Guides/Shadow_parts) eines benutzerdefinierten Elements zu steuern.

Shadow-Parts werden mit dem [`part`](/de/docs/Web/HTML/Reference/Global_attributes/part)-Attribut definiert und benannt.
Betrachten Sie zum Beispiel ein benutzerdefiniertes Element namens `<question-box>`, das ein benutzerdefiniertes `<labeled-checkbox>`-Element als Shadow-Part namens `checkbox` verwendet:

```js
shadowRoot.innerHTML = `<labeled-checkbox part='checkbox'>Yes</labeled-checkbox>`;
```

Der folgende CSS zeigt, wie das [`::part()`](/de/docs/Web/CSS/Reference/Selectors/::part)-Pseudoelement verwendet werden kann, um eine Übereinstimmung mit dem `'checkbox'`-Shadow-Part zu erzielen.
Es zeigt dann, wie das `::part()`-Pseudoelement, gefolgt von der `:state()`-Pseudoklasse, verwendet werden kann, um mit demselben Part zu übereinstimmen, wenn es im `checked`-Zustand ist.

```css
question-box::part(checkbox) {
  color: red;
}

question-box::part(checkbox):state(checked) {
  color: green;
  outline: dashed 1px green;
}
```

Für ein Live-Beispiel dieses Codes in Aktion, siehe das [Matching a custom state in a shadow part of a custom element](/de/docs/Web/API/CustomStateSet#matching_a_custom_state_in_a_shadow_part_of_a_custom_element)-Beispiel auf der `CustomStateSet`-Seite.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CustomStateSet`](/de/docs/Web/API/CustomStateSet)
- [Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes)
- [Lernen: Pseudoklassen und Pseudoelemente](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements)
- [Benutzerdefinierte Zustände und benutzerdefinierte Zustands-Pseudoklassen-CSS-Selektoren](/de/docs/Web/API/Web_components/Using_custom_elements#custom_states_and_custom_state_pseudo-class_css_selectors) in [Verwendung von benutzerdefinierten Elementen](/de/docs/Web/API/Web_components/Using_custom_elements)
