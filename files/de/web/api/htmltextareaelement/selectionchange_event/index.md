---
title: "HTMLTextAreaElement: selectionchange Ereignis"
short-title: selectionchange
slug: Web/API/HTMLTextAreaElement/selectionchange_event
l10n:
  sourceCommit: 81a7c1667ff8881e40435fa7fc7e968f9b6cd622
---

{{APIRef("Selection API")}}

Das **`selectionchange`** Ereignis der [Selection API](/de/docs/Web/API/Selection) wird ausgelöst, wenn die Textauswahl innerhalb eines {{HTMLElement("textarea")}} Elements verändert wird.
Dies umfasst sowohl Änderungen im ausgewählten Zeichenbereich als auch Bewegungen des Cursors.

Dieses Ereignis kann nicht abgebrochen werden.

> [!NOTE]
> Wenn Sie die Auswahl programmatisch ändern, beispielsweise durch Aufruf von [`setSelectionRange()`](/de/docs/Web/API/HTMLTextAreaElement/setSelectionRange), wird die Auswahl sofort aktualisiert, aber das `selectionchange` Ereignis wird als Aufgabe in die Warteschlange gestellt. Dessen Listener werden später ausgeführt, nachdem das aktuelle Skript die Ausführung beendet hat. Dies steht im Gegensatz zu Ereignissen wie `focus` und `click`, deren Listener synchron ausgeführt werden, wenn sie durch [`focus()`](/de/docs/Web/API/HTMLElement/focus) und [`click()`](/de/docs/Web/API/HTMLElement/click) ausgelöst werden.

Das Ereignis wird in der Regel verarbeitet, indem ein Ereignis-Listener auf das {{HTMLElement("textarea")}} hinzugefügt wird und in der Handler-Funktion durch die `selectionStart`, `selectionEnd` und `selectionDirection` Eigenschaften des [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement) gelesen wird.

Es ist auch möglich, einen Listener für den globalen `onselectionchange` Ereignishandler hinzuzufügen und innerhalb der Handler-Funktion [`Document.getSelection()`](/de/docs/Web/API/Document/getSelection) zu verwenden, um die [`Selection`](/de/docs/Web/API/Selection) zu erhalten. Dies ist jedoch nicht sehr nützlich, um Änderungen an _Text_-Auswahlen zu erhalten.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("selectionchange", (event) => { })

onselectionchange = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Das folgende Beispiel zeigt, wie man den im {{HTMLElement("textarea")}} Element ausgewählten Text erhält.

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
