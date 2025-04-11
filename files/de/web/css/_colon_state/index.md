---
title: :state()
slug: Web/CSS/:state
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{CSSRef}}

Die **`:state()`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) passt zu [benutzerdefinierten Elementen](/de/docs/Web/API/Web_components/Using_custom_elements), die den angegebenen benutzerdefinierten Status haben.

## Syntax

Die `:state()`-Pseudoklasse nimmt als Argument einen benutzerdefinierten Bezeichner, der den Status des zugehörigen benutzerdefinierten Elements darstellt.

```css-nolint
:state(<custom identifier>) {
  /* ... */
}
```

## Beschreibung

Elemente können aufgrund von Benutzerinteraktionen und anderen Faktoren zwischen Zuständen wechseln.
Zum Beispiel kann sich ein Element im „Hover“-Status befinden, wenn ein Benutzer darüber schwebt, oder ein Link kann im „Besucht“-Status sein, nachdem ein Benutzer darauf geklickt hat.
Von Browsern bereitgestellte Elemente können basierend auf diesen Zuständen mithilfe von CSS-Pseudoklassen wie [`:hover`](/de/docs/Web/CSS/:hover) und [`:visited`](/de/docs/Web/CSS/:visited) gestylt werden.
Ähnlich können [autonome benutzerdefinierte Elemente](/de/docs/Web/API/Web_components/Using_custom_elements#types_of_custom_element) (benutzerdefinierte Elemente, die nicht von eingebauten Elementen abgeleitet sind) ihre Zustände exponieren, wodurch Seiten, die die Elemente verwenden, sie mit der CSS-`:state()`-Pseudoklasse stylen können.

Die Zustände eines benutzerdefinierten Elements werden durch Zeichenfolgenwerte dargestellt.
Diese Werte werden zu einem [`CustomStateSet`](/de/docs/Web/API/CustomStateSet)-Objekt hinzugefügt oder daraus entfernt, das dem Element zugeordnet ist.
Die CSS-`:state()`-Pseudoklasse passt zu einem Element, wenn der als Argument übergebene Bezeichner im `CustomStateSet` des Elements vorhanden ist.

Die `:state()`-Pseudoklasse kann auch verwendet werden, um benutzerdefinierte Zustände innerhalb der Implementierung eines benutzerdefinierten Elements zu erfassen.
Dies wird erreicht, indem `:state()` innerhalb der [`:host()`](/de/docs/Web/CSS/:host_function)-Pseudoklassenfunktion verwendet wird, die einen Zustand nur innerhalb des Shadow DOM des aktuellen benutzerdefinierten Elements erfasst.

Darüber hinaus ermöglicht das [`::part()`](/de/docs/Web/CSS/::part)-Pseudo-Element, gefolgt von der `:state()`-Pseudoklasse, das Erfassen der [Shadow-Parts](/de/docs/Web/CSS/CSS_shadow_parts) eines benutzerdefinierten Elements, die sich in einem bestimmten Zustand befinden. (**Shadow-Parts** sind Teile des Shadow-Baums eines benutzerdefinierten Elements, die explizit für eine Enthält-Seite zum Styling freigegeben werden.)

## Beispiele

### Erfassen eines benutzerdefinierten Zustands

Dieses CSS zeigt, wie der Rahmen des autonomen benutzerdefinierten Elements `<labeled-checkbox>` auf `rot` geändert wird, wenn es sich im „checked“-Zustand befindet.

```css
labeled-checkbox {
  border: dashed red;
}
labeled-checkbox:state(checked) {
  border: solid;
}
```

Für ein Live-Beispiel dieses Codes in Aktion siehe das [Erfassen des benutzerdefinierten Zustands eines benutzerdefinierten Checkbox-Elements](/de/docs/Web/API/CustomStateSet#matching_the_custom_state_of_a_custom_checkbox_element)-Beispiel auf der `CustomStateSet`-Seite.

### Erfassen eines benutzerdefinierten Zustands im Shadow DOM eines benutzerdefinierten Elements

Dieses Beispiel zeigt, wie die `:state()`-Pseudoklasse innerhalb der [`:host()`](/de/docs/Web/CSS/:host_function)-Pseudoklassenfunktion verwendet werden kann, um benutzerdefinierte Zustände innerhalb der Implementierung eines benutzerdefinierten Elements zu erfassen.

Das folgende CSS fügt ein graues `[x]` vor dem Element ein, wenn es sich im „checked“-Zustand befindet.

```css
:host(:state(checked))::before {
  content: "[x]";
}
```

Für ein Live-Beispiel dieses Codes in Aktion siehe das [Erfassen des benutzerdefinierten Zustands eines benutzerdefinierten Checkbox-Elements](/de/docs/Web/API/CustomStateSet#matching_the_custom_state_of_a_custom_checkbox_element)-Beispiel auf der `CustomStateSet`-Seite.

### Erfassen eines benutzerdefinierten Zustands in einem Shadow-Part

Dieses Beispiel zeigt, wie die `:state()`-Pseudoklasse verwendet werden kann, um die [Shadow-Parts](/de/docs/Web/CSS/CSS_shadow_parts) eines benutzerdefinierten Elements zu erfassen.

Shadow-Parts werden definiert und benannt mithilfe des [`part`](/de/docs/Web/HTML/Reference/Global_attributes/part)-Attributs.
Zum Beispiel, überlegen Sie sich ein benutzerdefiniertes Element namens `<question-box>`, das ein benutzerdefiniertes Element `<labeled-checkbox>` als Shadow-Part namens `checkbox` verwendet:

```js
shadowRoot.innerHTML = `<labeled-checkbox part='checkbox'>Yes</labeled-checkbox>`;
```

Das untenstehende CSS zeigt, wie das [`::part()`](/de/docs/Web/CSS/::part)-Pseudo-Element verwendet werden kann, um gegen den `checkbox`-Shadow-Part zu erfassen.
Es zeigt dann, wie das `::part()`-Pseudo-Element, gefolgt von der `:state()`-Pseudoklasse, verwendet werden kann, um gegen denselben Part zu erfassen, wenn er sich im `checked`-Zustand befindet.

```css
question-box::part(checkbox) {
  color: red;
}

question-box::part(checkbox):state(checked) {
  color: green;
}
```

Für ein Live-Beispiel dieses Codes in Aktion siehe das [Erfassen eines benutzerdefinierten Zustands in einem Shadow-Part eines benutzerdefinierten Elements](/de/docs/Web/API/CustomStateSet#matching_a_custom_state_in_a_shadow_part_of_a_custom_element)-Beispiel auf der `CustomStateSet`-Seite.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CustomStateSet`](/de/docs/Web/API/CustomStateSet)
- [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes)
- [Lernen: Pseudoklassen und Pseudo-Elemente](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements)
- [Benutzerdefinierte Zustände und benutzerdefinierte Zustandspseudoklassen-CSS-Selektoren](/de/docs/Web/API/Web_components/Using_custom_elements#custom_states_and_custom_state_pseudo-class_css_selectors) in [Benutzerdefinierte Elemente verwenden](/de/docs/Web/API/Web_components/Using_custom_elements)
