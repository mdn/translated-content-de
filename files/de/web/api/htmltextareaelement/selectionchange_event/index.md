---
title: "HTMLTextAreaElement: selectionchange-Ereignis"
short-title: selectionchange
slug: Web/API/HTMLTextAreaElement/selectionchange_event
l10n:
  sourceCommit: 1c322acc575d927494ecff49c04159ba34aec781
---

{{APIRef("Selection API")}}

Das **`selectionchange`**-Ereignis der [Selection API](/de/docs/Web/API/Selection) wird ausgelöst, wenn sich die Textauswahl innerhalb eines {{HTMLElement("textarea")}}-Elements ändert. Dazu gehören sowohl Änderungen am ausgewählten Zeichenbereich als auch Bewegungen der Einfügemarke.

Dieses Ereignis kann nicht abgebrochen werden.

> [!NOTE]
> Wenn Sie die Auswahl programmatisch ändern, beispielsweise durch einen Aufruf von [`setSelectionRange()`](/de/docs/Web/API/HTMLTextAreaElement/setSelectionRange), wird die Auswahl sofort aktualisiert. Das `selectionchange`-Ereignis wird jedoch als Task in die Warteschlange gestellt. Seine Listener werden erst später ausgeführt, nachdem das aktuelle Skript vollständig ausgeführt wurde. Im Gegensatz dazu werden die Listener von Ereignissen wie `focus` und `click` synchron ausgeführt, wenn diese durch [`focus()`](/de/docs/Web/API/HTMLElement/focus) beziehungsweise [`click()`](/de/docs/Web/API/HTMLElement/click) ausgelöst werden.

Üblicherweise wird das Ereignis verarbeitet, indem dem {{HTMLElement("textarea")}} ein Event-Listener hinzugefügt wird. In dessen Handler-Funktion werden die Eigenschaften `selectionStart`, `selectionEnd` und `selectionDirection` von [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement) ausgelesen.

Sie können auch über den globalen Event-Handler `onselectionchange` einen Listener hinzufügen. Beachten Sie jedoch, dass dadurch gegebenenfalls andere über `onselectionchange` hinzugefügte Event-Listener ersetzt werden. Innerhalb der Handler-Funktion können Sie dann mit [`Document.getSelection()`](/de/docs/Web/API/Document/getSelection) die [`Selection`](/de/docs/Web/API/Selection) abrufen. Um Änderungen an einer _Textauswahl_ zu erfassen, ist dies allerdings wenig hilfreich.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("selectionchange", (event) => { })
```

Alternativ können Sie der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle einen Wert zuweisen:

```js-nolint
onselectionchange = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Das folgende Beispiel zeigt, wie Sie den in einem {{HTMLElement("textarea")}}-Element ausgewählten Text abrufen.

### HTML

```html
<div>
  Enter and select text here:<br /><textarea
    id="my-text"
    rows="2"
    cols="20"></textarea>
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
