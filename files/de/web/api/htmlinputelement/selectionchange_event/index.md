---
title: "HTMLInputElement: selectionchange-Ereignis"
short-title: selectionchange
slug: Web/API/HTMLInputElement/selectionchange_event
l10n:
  sourceCommit: 3869033353873623537ef2d810c1406a7299b49c
---

{{APIRef("Selection API")}}

Das **`selectionchange`**-Ereignis der [Selection API](/de/docs/Web/API/Selection) wird ausgelöst, wenn sich die Textauswahl innerhalb eines {{HTMLElement("input")}}-Elements in ihrem Umfang oder ihrer Richtung ändert – unabhängig davon, ob die Auswahl aus einer Einfügemarke oder einem Zeichenbereich besteht.

Dieses Ereignis kann nicht abgebrochen werden.

> [!NOTE]
> Wenn Sie die Auswahl programmgesteuert ändern, beispielsweise durch einen Aufruf von [`setSelectionRange()`](/de/docs/Web/API/HTMLInputElement/setSelectionRange), wird die Auswahl sofort aktualisiert. Das `selectionchange`-Ereignis wird jedoch als Task in die Warteschlange gestellt. Seine Listener werden erst später ausgeführt, nachdem das aktuelle Skript beendet ist. Im Gegensatz dazu werden die Listener von Ereignissen wie `focus` und `click` synchron ausgeführt, wenn diese durch [`focus()`](/de/docs/Web/API/HTMLElement/focus) beziehungsweise [`click()`](/de/docs/Web/API/HTMLElement/click) ausgelöst werden.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("selectionchange", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) des Interfaces zuweisen:

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
