---
title: "HTMLInputElement: selectionchange-Ereignis"
short-title: selectionchange
slug: Web/API/HTMLInputElement/selectionchange_event
l10n:
  sourceCommit: e1b44d1e4197102da109a563f343cf41ef06ca7c
---

{{APIRef("Selection API")}}

Das **`selectionchange`**-Ereignis der [Selection API](/de/docs/Web/API/Selection) wird ausgelöst, wenn sich die Textauswahl innerhalb eines {{HTMLElement("input")}}-Elements ändert. Dazu zählen sowohl Änderungen am ausgewählten Zeichenbereich als auch Bewegungen des Cursors.

Dieses Ereignis kann nicht abgebrochen werden.

> [!NOTE]
> Wenn Sie die Auswahl programmgesteuert ändern, beispielsweise durch einen Aufruf von [`setSelectionRange()`](/de/docs/Web/API/HTMLInputElement/setSelectionRange), wird die Auswahl sofort aktualisiert. Das `selectionchange`-Ereignis wird jedoch als Aufgabe in die Warteschlange gestellt. Die zugehörigen Listener werden erst später ausgeführt, nachdem das aktuelle Skript beendet ist. Im Gegensatz dazu werden die Listener von Ereignissen wie `focus` und `click` synchron ausgeführt, wenn die Ereignisse durch [`focus()`](/de/docs/Web/API/HTMLElement/focus) beziehungsweise [`click()`](/de/docs/Web/API/HTMLElement/click) ausgelöst werden.

Das Ereignis wird üblicherweise verarbeitet, indem dem {{HTMLElement("input")}}-Element ein Event-Listener hinzugefügt wird. In dessen Handler-Funktion werden die Eigenschaften `selectionStart`, `selectionEnd` und `selectionDirection` des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) ausgelesen.

Sie können auch über den Event-Handler `onselectionchange` einen Listener hinzufügen. Beachten Sie jedoch, dass dadurch gegebenenfalls andere Listener ersetzt werden, die über `onselectionchange` hinzugefügt wurden. Innerhalb der Handler-Funktion können Sie dann mit [`Document.getSelection()`](/de/docs/Web/API/Document/getSelection) die [`Selection`](/de/docs/Web/API/Selection) abrufen. Um Änderungen an einer _Textauswahl_ zu erfassen, ist dies allerdings wenig hilfreich.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("selectionchange", (event) => { })
```

Alternativ können Sie die [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onselectionchange = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Das folgende Beispiel zeigt, wie Sie den in einem {{HTMLElement("input")}}-Element ausgewählten Text abrufen.

### HTML

```html
<div>
  Enter and select text here:<br /><input id="my-text" rows="2" cols="20" />
</div>
<div>selectionStart: <span id="start"></span></div>
<div>selectionEnd: <span id="end"></span></div>
<div>selectionDirection: <span id="direction"></span></div>
```

### JavaScript

```js
const myInput = document.getElementById("my-text");

myInput.addEventListener("selectionchange", () => {
  document.getElementById("start").textContent = myInput.selectionStart;
  document.getElementById("end").textContent = myInput.selectionEnd;
  document.getElementById("direction").textContent = myInput.selectionDirection;
});
```

### Ergebnis

{{EmbedLiveSample("Examples")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
