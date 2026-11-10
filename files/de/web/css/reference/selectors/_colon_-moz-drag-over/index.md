---
title: "`:-moz-drag-over` CSS-Pseudoklasse"
short-title: :-moz-drag-over
slug: Web/CSS/Reference/Selectors/:-moz-drag-over
l10n:
  sourceCommit: b4f42a2037bcb8f2daec61f6b3d92bfdd13e5386
---

{{Non-standard_header}}

Die **`:-moz-drag-over`**-[CSS](/de/docs/Web/CSS)-[Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) ist eine [Mozilla-Erweiterung](/de/docs/Web/CSS/Reference/Mozilla_extensions), die auf ein Element zutrifft, wenn für dieses ein [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)-Ereignis ausgelöst wird.

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

Das folgende CSS ändert die Farbe des Ablageziels in Rot, wenn sich das ziehbare Element über dem Ablagebereich befindet.

```css
#drop-target {
  background-color: cornflowerblue;
}
#drop-target:-moz-drag-over {
  background-color: red;
}
```

### JavaScript

Die meisten Elemente sind keine gültigen Ablageziele für Daten. Damit Daten dort abgelegt werden können, müssen Sie das Standardverhalten verhindern, indem Sie das [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event)- oder das [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)-Ereignis (oder beide) abbrechen.
In diesem Beispiel müssen wir nur das `dragenter`-Ereignis abbrechen. Es ist das erste Ereignis, das ausgelöst wird, wenn der Browser prüft, ob ein Element als Ablageziel dienen kann.
Weitere Informationen finden Sie unter [Drag-Operationen: Ablageziele festlegen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#dragging_over_elements_and_specifying_drop_targets).

```js
const target = document.getElementById("drop-target");
/* dragenter event fired on the drop target */
target.addEventListener("dragenter", (event) => {
  // prevent default to allow drop
  event.preventDefault();
});
```

### Ergebnis

{{EmbedLiveSample("Examples", "100%", "200px")}}

## Spezifikationen

Nicht Teil eines Standards.

## Siehe auch

- [Mozilla-CSS-Erweiterungen](/de/docs/Web/CSS/Reference/Mozilla_extensions)
- [HTML Drag and Drop](/de/docs/Web/API/HTML_Drag_and_Drop_API)
