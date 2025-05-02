---
title: "HTMLSlotElement: slotchange-Ereignis"
short-title: slotchange
slug: Web/API/HTMLSlotElement/slotchange_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}

Das **`slotchange`**-Ereignis wird auf einer Instanz des [`HTMLSlotElement`](/de/docs/Web/API/HTMLSlotElement) ({{HTMLElement("slot")}}-Element) ausgelöst, wenn sich die Knoten ändern, die in diesem Slot enthalten sind.

> [!NOTE]
> Das `slotchange`-Ereignis wird nicht ausgelöst, wenn sich die Kinder eines eingeschlitzten Knotens ändern, sondern nur, wenn Sie die tatsächlichen Knoten selbst ändern (z. B. hinzufügen oder löschen).

Um ein **slotchange**-Ereignis auszulösen, muss das `slot`-Attribut gesetzt oder entfernt werden.

Dieses Ereignis kann nicht abgebrochen werden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("slotchange", (event) => { })

onslotchange = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

```js
element.setAttribute("slot", slotName);
// element.assignedSlot = $slot
element.removeAttribute("slot");
// element.assignedSlot = null
```

Der folgende Ausschnitt stammt aus unserem [slotchange-Beispiel](https://github.com/mdn/web-components-examples/tree/main/slotchange) ([siehe es auch live](https://mdn.github.io/web-components-examples/slotchange/)).

```js
let slots = this.shadowRoot.querySelectorAll("slot");
slots[1].addEventListener("slotchange", (e) => {
  let nodes = slots[1].assignedNodes();
  console.log(
    `Element in Slot "${slots[1].name}" changed to "${nodes[0].outerHTML}".`,
  );
});
```

Hier holen wir Referenzen zu allen `<slot>`s ein und fügen dann dem zweiten Slot der Vorlage — welcher im Beispiel seine Inhalte geändert bekommt — einen `slotchange`-Ereignislistener hinzu.

Jedes Mal, wenn sich das in den Slot eingefügte Element ändert, protokollieren wir einen Bericht in die Konsole, der angibt, welcher Slot sich geändert hat und was der neue Knoten innerhalb des Slots ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

[`HTMLSlotElement`](/de/docs/Web/API/HTMLSlotElement)
