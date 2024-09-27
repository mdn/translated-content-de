---
title: ":-moz-drag-over"
slug: Web/CSS/:-moz-drag-over
l10n:
  sourceCommit: a4ae225903c2784a3d74b43f311e05f208e42c91
---

{{CSSRef}}{{Non-standard_header}}

Die **`:-moz-drag-over`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) ist eine [Mozilla-Erweiterung](/de/docs/Web/CSS/Mozilla_Extensions), die ein Element dann anpasst, wenn ein [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)-Ereignis auf ihm ausgelöst wird.

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

Die meisten Elemente sind keine gültigen Orte zum Ablegen von Daten, daher müssen Sie, um das Ablegen zu ermöglichen, das Standardverhalten durch das Abbrechen der [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event)- oder [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)-Ereignisse (oder beides) verhindern. In diesem Beispiel müssen wir nur das `dragenter`-Ereignis abbrechen, welches das erste Ereignis ist, das ausgelöst wird, wenn der Browser bewertet, ob ein Element ein Ziel zum Ablegen sein kann. Weitere Informationen finden Sie unter [Drag-Operationen: Festlegung von Zielorten zum Ablegen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#specifying_drop_targets).

```js
const target = document.getElementById("drop-target");
/* dragenter event fired on the drop target */
target.addEventListener(
  "dragenter",
  (event) => {
    // prevent default to allow drop
    event.preventDefault();
  },
  false,
);
```

### CSS

```css
body {
  font-family: arial;
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

Das folgende CSS ändert die Farbe des Zielbereichs zum Ablegen auf Rot, wenn das ziehbare Element die Ablagefläche überlagert.

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

Kein Teil eines Standards.

## Siehe auch

- [Mozilla CSS-Erweiterungen](/de/docs/Web/CSS/Mozilla_Extensions)
- [HTML-Drag-and-Drop](/de/docs/Web/API/HTML_Drag_and_Drop_API)
