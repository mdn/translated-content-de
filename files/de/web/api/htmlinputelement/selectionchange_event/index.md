---
title: "HTMLInputElement: selectionchange-Ereignis"
short-title: selectionchange
slug: Web/API/HTMLInputElement/selectionchange_event
l10n:
  sourceCommit: 81a7c1667ff8881e40435fa7fc7e968f9b6cd622
---

{{APIRef("Selection API")}}

Das **`selectionchange`**-Ereignis der [Selection API](/de/docs/Web/API/Selection) wird ausgelöst, wenn die Textauswahl innerhalb eines {{HTMLElement("input")}}-Elements geändert wird.
Dies umfasst sowohl Änderungen im ausgewählten Zeichenbereich als auch das Bewegen der Einfügemarke.

Dieses Ereignis ist nicht abbrechbar.

> [!NOTE]
> Wenn Sie die Auswahl programmgesteuert ändern, zum Beispiel durch Aufruf von [`setSelectionRange()`](/de/docs/Web/API/HTMLInputElement/setSelectionRange), wird die Auswahl sofort aktualisiert, aber das `selectionchange`-Ereignis wird als Aufgabe in die Warteschlange gestellt. Seine Listener werden später ausgeführt, nachdem das aktuelle Skript die Ausführung beendet hat. Dies steht im Gegensatz zu Ereignissen wie `focus` und `click`, deren Listener synchron ausgeführt werden, wenn sie durch [`focus()`](/de/docs/Web/API/HTMLElement/focus) und [`click()`](/de/docs/Web/API/HTMLElement/click) ausgelöst werden.

Das Ereignis wird üblicherweise durch Hinzufügen eines Ereignis-Listeners an das {{HTMLElement("input")}} verarbeitet, und in der Handlerfunktion durch die `selectionStart`, `selectionEnd` und `selectionDirection`-Eigenschaften des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) ausgelesen.

Es ist auch möglich, einen Listener auf dem `onselectionchange`-Ereignishandler hinzuzufügen und innerhalb der Handlerfunktion [`Document.getSelection()`](/de/docs/Web/API/Document/getSelection) zu verwenden, um die [`Selection`](/de/docs/Web/API/Selection) zu erhalten. Dies ist jedoch nicht sehr nützlich, um Änderungen an _Text_-Auswahlen zu erhalten.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("selectionchange", (event) => { })

onselectionchange = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Das folgende Beispiel zeigt, wie der Text ausgewählt wird, der in einem {{HTMLElement("input")}}-Element ausgewählt wurde.

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
