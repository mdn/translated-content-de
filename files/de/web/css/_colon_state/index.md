---
title: :state()
slug: Web/CSS/:state
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`:state()`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) entspricht [benutzerdefinierten Elementen](/de/docs/Web/API/Web_components/Using_custom_elements), die den angegebenen benutzerdefinierten Zustand haben.

## Syntax

```css-nolint
:state(<custom identifier>) {
  /* ... */
}
```

### Parameter

Die `:state()` Pseudoklasse nimmt als Argument einen benutzerdefinierten Bezeichner, der den Zustand des zu treffenden benutzerdefinierten Elements repräsentiert.

## Beschreibung

Elemente können durch Benutzerinteraktionen und andere Faktoren zwischen Zuständen wechseln. Beispielsweise kann sich ein Element im "hover"-Zustand befinden, wenn ein Benutzer über das Element fährt, oder ein Link kann im "visited"-Zustand sein, nachdem ein Benutzer darauf geklickt hat. Elemente, die von Browsern bereitgestellt werden, können basierend auf diesen Zuständen mithilfe von CSS-Pseudoklassen wie [`:hover`](/de/docs/Web/CSS/:hover) und [`:visited`](/de/docs/Web/CSS/:visited) gestaltet werden. In ähnlicher Weise können [autonome benutzerdefinierte Elemente](/de/docs/Web/API/Web_components/Using_custom_elements#types_of_custom_element) (benutzerdefinierte Elemente, die nicht von eingebauten Elementen abgeleitet sind) ihre Zustände offenlegen, wodurch Seiten, die die Elemente verwenden, sie mithilfe der CSS `:state()` Pseudoklasse stylen können.

Die Zustände eines benutzerdefinierten Elements werden durch Zeichenkettenwerte dargestellt. Diese Werte werden zu oder aus einem [`CustomStateSet`](/de/docs/Web/API/CustomStateSet)-Objekt hinzugefügt oder entfernt, das mit dem Element verknüpft ist. Die CSS `:state()` Pseudoklasse trifft auf ein Element zu, wenn der als Argument übergebene Bezeichner im `CustomStateSet` des Elements vorhanden ist.

Die `:state()` Pseudoklasse kann auch verwendet werden, um benutzerdefinierte Zustände innerhalb der Implementierung eines benutzerdefinierten Elements zu treffen. Dies wird erreicht, indem `:state()` innerhalb der [`:host()`](/de/docs/Web/CSS/:host_function) Pseudoklasse verwendet wird, die einen Zustand nur innerhalb des Shadow DOM des aktuellen benutzerdefinierten Elements trifft.

Darüber hinaus erlaubt die [`::part()`](/de/docs/Web/CSS/::part) Pseudoelement gefolgt von der `:state()` Pseudoklasse das Treffen auf die [Shadow-Teile](/de/docs/Web/CSS/CSS_shadow_parts) eines benutzerdefinierten Elements, die sich in einem bestimmten Zustand befinden. (**Shadow-Teile** sind Teile des Shadow-Tree eines benutzerdefinierten Elements, die explizit auf einer enthaltenden Seite zur Stilgestaltung offengelegt werden.)

## Beispiele

### Einem benutzerdefinierten Zustand entsprechen

Dieses CSS zeigt, wie der Rahmen des autonomen benutzerdefinierten Elements `<labeled-checkbox>` auf `rot` geändert wird, wenn es sich im "checked"-Zustand befindet.

```css
labeled-checkbox {
  border: dashed red;
}
labeled-checkbox:state(checked) {
  border: solid;
}
```

Ein Live-Beispiel dieses Codes in Aktion finden Sie im [Matching the custom state of a custom checkbox element](/de/docs/Web/API/CustomStateSet#matching_the_custom_state_of_a_custom_checkbox_element) Beispiel auf der `CustomStateSet` Seite.

### Einem benutzerdefinierten Zustand im Shadow DOM eines benutzerdefinierten Elements entsprechen

Dieses Beispiel zeigt, wie die `:state()` Pseudoklasse innerhalb der [`:host()`](/de/docs/Web/CSS/:host_function) Pseudoklasse verwendet werden kann, um benutzerdefinierte Zustände innerhalb der Implementierung eines benutzerdefinierten Elements zu treffen.

Das folgende CSS fügt ein graues `[x]` vor dem Element ein, wenn es sich im "checked"-Zustand befindet.

```css
:host(:state(checked))::before {
  content: "[x]";
}
```

Ein Live-Beispiel dieses Codes in Aktion finden Sie im [Matching the custom state of a custom checkbox element](/de/docs/Web/API/CustomStateSet#matching_the_custom_state_of_a_custom_checkbox_element) Beispiel auf der `CustomStateSet` Seite.

### Einem benutzerdefinierten Zustand in einem Shadow-Teil entsprechen

Dieses Beispiel zeigt, wie die `:state()` Pseudoklasse verwendet werden kann, um auf die [Shadow-Teile](/de/docs/Web/CSS/CSS_shadow_parts) eines benutzerdefinierten Elements zu zielen.

Shadow-Teile werden unter Verwendung des [`part`](/de/docs/Web/HTML/Reference/Global_attributes/part) Attributs definiert und benannt. Zum Beispiel betrachten Sie ein benutzerdefiniertes Element mit dem Namen `<question-box>`, das ein `<labeled-checkbox>` benutzerdefiniertes Element als einen Shadow-Teil mit dem Namen `checkbox` verwendet:

```js
shadowRoot.innerHTML = `<labeled-checkbox part='checkbox'>Yes</labeled-checkbox>`;
```

Das folgende CSS zeigt, wie das [`::part()`](/de/docs/Web/CSS/::part) Pseudoelement verwendet werden kann, um gegen den `'checkbox'` Shadow-Teil zu treffen. Es zeigt dann, wie das `::part()` Pseudoelement gefolgt von der `:state()` Pseudoklasse verwendet werden kann, um gegen denselben Teil zu treffen, wenn er sich im `checked` Zustand befindet.

```css
question-box::part(checkbox) {
  color: red;
}

question-box::part(checkbox):state(checked) {
  color: green;
}
```

Ein Live-Beispiel dieses Codes in Aktion finden Sie im [Matching a custom state in a shadow part of a custom element](/de/docs/Web/API/CustomStateSet#matching_a_custom_state_in_a_shadow_part_of_a_custom_element) Beispiel auf der `CustomStateSet` Seite.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CustomStateSet`](/de/docs/Web/API/CustomStateSet)
- [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes)
- [Lernen: Pseudoklassen und Pseudoelemente](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements)
- [Benutzerdefinierte Zustände und benutzerdefinierte Zustandspseudoklassen-CSS-Selektoren](/de/docs/Web/API/Web_components/Using_custom_elements#custom_states_and_custom_state_pseudo-class_css_selectors) in [Verwendung von benutzerdefinierten Elementen](/de/docs/Web/API/Web_components/Using_custom_elements)
