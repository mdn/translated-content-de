---
title: :state()
slug: Web/CSS/Reference/Selectors/:state
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Die **`:state()`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) wählt [benutzerdefinierte Elemente](/de/docs/Web/API/Web_components/Using_custom_elements) aus, die den angegebenen benutzerdefinierten Zustand haben.

## Syntax

```css-nolint
:state(<custom identifier>) {
  /* ... */
}
```

### Parameter

Die `:state()`-Pseudoklasse nimmt als Argument einen benutzerdefinierten Bezeichner, der den Zustand des benutzerdefinierten Elements darstellt, das übereinstimmen soll.

## Beschreibung

Elemente können durch Benutzerinteraktionen oder andere Faktoren zwischen Zuständen wechseln. Beispielsweise kann ein Element sich im „Hover“-Zustand befinden, wenn ein Benutzer mit der Maus darüber fährt, oder ein Link kann sich im „Besucht“-Zustand befinden, nachdem ein Benutzer darauf geklickt hat. Von Browsern bereitgestellte Elemente können basierend auf diesen Zuständen mit CSS-Pseudoklassen wie {{cssxref(":hover")}} und {{cssxref(":visited")}} gestaltet werden. Ähnlich können [autonome benutzerdefinierte Elemente](/de/docs/Web/API/Web_components/Using_custom_elements#types_of_custom_element) (benutzerdefinierte Elemente, die nicht von eingebauten Elementen abgeleitet sind) ihre Zustände anzeigen, sodass Seiten, die die Elemente verwenden, sie mithilfe der CSS `:state()`-Pseudoklasse gestalten können.

Die Zustände eines benutzerdefinierten Elements werden durch String-Werte dargestellt. Diese Werte werden einem [`CustomStateSet`](/de/docs/Web/API/CustomStateSet)-Objekt hinzugefügt oder daraus entfernt, das dem Element zugeordnet ist. Die CSS `:state()`-Pseudoklasse stimmt mit einem Element überein, wenn der als Argument übergebene Bezeichner im `CustomStateSet` des Elements vorhanden ist.

Die `:state()`-Pseudoklasse kann auch verwendet werden, um benutzerdefinierte Zustände innerhalb der Implementierung eines benutzerdefinierten Elements abzugleichen. Dies wird erreicht, indem `:state()` innerhalb der [`:host()`](/de/docs/Web/CSS/Reference/Selectors/:host_function)-Pseudoklasse verwendet wird, die einen Zustand nur innerhalb des Shadow DOM des aktuellen benutzerdefinierten Elements abgleicht.

Darüber hinaus ermöglicht das [`::part()`](/de/docs/Web/CSS/Reference/Selectors/::part)-Pseudoelement, gefolgt von der `:state()`-Pseudoklasse, das Abgleichen mit den [Shadow-Parts](/de/docs/Web/CSS/Guides/Shadow_parts) eines benutzerdefinierten Elements, die sich in einem bestimmten Zustand befinden. (**Shadow-Parts** sind Teile des Shadow-Baums eines benutzerdefinierten Elements, die explizit für die Gestaltung auf einer zugehörigen Seite zur Verfügung gestellt werden.)

## Beispiele

### Abgleichen eines benutzerdefinierten Zustands

Dieses CSS zeigt, wie der Rahmen des autonomen benutzerdefinierten Elements `<labeled-checkbox>` auf `rot` geändert wird, wenn es sich im „checked“-Zustand befindet.

```css
labeled-checkbox {
  border: dashed red;
}
labeled-checkbox:state(checked) {
  border: solid;
}
```

Für ein Live-Beispiel dieses Codes in Aktion, siehe das Beispiel [Abgleichen des benutzerdefinierten Zustands eines benutzerdefinierten Checkbox-Elements](/de/docs/Web/API/CustomStateSet#matching_the_custom_state_of_a_custom_checkbox_element) auf der `CustomStateSet`-Seite.

### Abgleichen eines benutzerdefinierten Zustands im Shadow DOM eines benutzerdefinierten Elements

Dieses Beispiel zeigt, wie die `:state()`-Pseudoklasse innerhalb der [`:host()`](/de/docs/Web/CSS/Reference/Selectors/:host_function)-Pseudoklasse verwendet werden kann, um benutzerdefinierte Zustände innerhalb der Implementierung eines benutzerdefinierten Elements abzugleichen.

Das folgende CSS fügt ein graues `[x]` vor dem Element hinzu, wenn es sich im „checked“-Zustand befindet.

```css
:host(:state(checked))::before {
  content: "[x]";
}
```

Für ein Live-Beispiel dieses Codes in Aktion, siehe das Beispiel [Abgleichen des benutzerdefinierten Zustands eines benutzerdefinierten Checkbox-Elements](/de/docs/Web/API/CustomStateSet#matching_the_custom_state_of_a_custom_checkbox_element) auf der `CustomStateSet`-Seite.

### Abgleichen eines benutzerdefinierten Zustands in einem Shadow-Part

Dieses Beispiel zeigt, wie die `:state()`-Pseudoklasse verwendet werden kann, um die [Shadow-Parts](/de/docs/Web/CSS/Guides/Shadow_parts) eines benutzerdefinierten Elements zu zielgerichtet anzusprechen.

Shadow-Parts werden mittels des [`part`](/de/docs/Web/HTML/Reference/Global_attributes/part)-Attributs definiert und benannt. Betrachten Sie beispielsweise ein benutzerdefiniertes Element namens `<question-box>`, das ein benutzerdefiniertes Element `<labeled-checkbox>` als Shadow-Part namens `checkbox` verwendet:

```js
shadowRoot.innerHTML = `<labeled-checkbox part='checkbox'>Yes</labeled-checkbox>`;
```

Das folgende CSS zeigt, wie das [`::part()`](/de/docs/Web/CSS/Reference/Selectors/::part)-Pseudoelement verwendet werden kann, um auf das `'checkbox'`-Shadow-Part abzugleichen. Es zeigt auch, wie das `::part()`-Pseudoelement gefolgt von der `:state()`-Pseudoklasse verwendet werden kann, um das gleiche Part abzugleichen, wenn es sich im `checked`-Zustand befindet.

```css
question-box::part(checkbox) {
  color: red;
}

question-box::part(checkbox):state(checked) {
  color: green;
  outline: dashed 1px green;
}
```

Für ein Live-Beispiel dieses Codes in Aktion, siehe das Beispiel [Abgleichen eines benutzerdefinierten Zustands in einem Shadow-Part eines benutzerdefinierten Elements](/de/docs/Web/API/CustomStateSet#matching_a_custom_state_in_a_shadow_part_of_a_custom_element) auf der `CustomStateSet`-Seite.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CustomStateSet`](/de/docs/Web/API/CustomStateSet)
- [Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes)
- [Lernen: Pseudoklassen und Pseudoelemente](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements)
- [Benutzerdefinierte Zustände und benutzerdefinierte Zustand-Pseudoklasse-CSS-Selektoren](/de/docs/Web/API/Web_components/Using_custom_elements#custom_states_and_custom_state_pseudo-class_css_selectors) in [Verwendung benutzerdefinierter Elemente](/de/docs/Web/API/Web_components/Using_custom_elements)
