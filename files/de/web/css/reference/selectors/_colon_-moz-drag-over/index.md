---
title: "`:-moz-drag-over` CSS-Pseudoklasse"
short-title: :-moz-drag-over
slug: Web/CSS/Reference/Selectors/:-moz-drag-over
l10n:
  sourceCommit: 77ea71add6054857698eb7ac1bfec8c7afe9ad4f
---

{{Non-standard_header}}

Die **`:-moz-drag-over`**-[CSS](/de/docs/Web/CSS)-[Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) ist eine [Mozilla-Erweiterung](/de/docs/Web/CSS/Reference/Mozilla_extensions), die ein Element anspricht, wenn ein [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)-Ereignis auf ihm aufgerufen wird.

## Syntax

```css
:-moz-drag-over {
  /* ... */
}
```

## Beispiele

### HTML

```html
<div id="drop-target">
  <p>Drop target</p>
</div>

<div draggable="true">
  <p>Draggable</p>
</div>
```

### JavaScript

Die meisten Elemente sind keine gültigen Ablageorte für Daten. Um ein Ablegen zu ermöglichen, müssen Sie das Standardverhalten verhindern, indem Sie [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event)- oder [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)-Ereignisse (oder beide) abbrechen. In diesem Beispiel müssen wir nur das `dragenter`-Ereignis abbrechen, welches das erste Ereignis ist, das ausgelöst wird, wenn der Browser bewertet, ob ein Element als Ablageziel dienen kann. Für weitere Informationen siehe [Vorgänge beim Ziehen: Festlegen von Ablagezielen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#dragging_over_elements_and_specifying_drop_targets).

```js
const target = document.getElementById("drop-target");
/* dragenter event fired on the drop target */
target.addEventListener("dragenter", (event) => {
  // prevent default to allow drop
  event.preventDefault();
});
```

### CSS

```css
body {
  font-family: "Arial";
}
div {
  display: inline-block;
  width: 150px;
  height: 150px;
  border: 2px dotted black;
  background-color: aquamarine;
  margin: 1rem;
}
p {
  padding: 1rem;
}
```

Das folgende CSS ändert die Farbe des Ablageziels zu Rot, wenn das ziehbare Element die Ablagefläche überlagert.

```css
#drop-target {
  background-color: cornflowerblue;
}
#drop-target:-moz-drag-over {
  background-color: red;
}
```

### Ergebnis

{{EmbedLiveSample("Examples", "100%", "200px")}}

## Spezifikationen

Teil keiner Spezifikation.

## Siehe auch

- [Mozilla CSS-Erweiterungen](/de/docs/Web/CSS/Reference/Mozilla_extensions)
- [HTML Drag and Drop](/de/docs/Web/API/HTML_Drag_and_Drop_API)
