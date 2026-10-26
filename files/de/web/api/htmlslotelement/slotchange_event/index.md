---
title: "HTMLSlotElement: slotchange-Ereignis"
short-title: slotchange
slug: Web/API/HTMLSlotElement/slotchange_event
l10n:
  sourceCommit: 2f34ca590baf2d5447d42fc79002a70b9cb65e73
---

{{APIRef("Web Components")}}

Das **`slotchange`**-Ereignis wird auf einer [`HTMLSlotElement`](/de/docs/Web/API/HTMLSlotElement)-Instanz (einem {{HTMLElement("slot")}}-Element) ausgelöst, wenn sich die in diesem Slot enthaltenen Knoten ändern.

> [!NOTE]
> Das `slotchange`-Ereignis wird nicht ausgelöst, wenn sich die Kindknoten eines einem Slot zugewiesenen Knotens ändern – nur, wenn Sie die zugewiesenen Knoten selbst ändern (z. B. hinzufügen oder entfernen).

Um ein **slotchange**-Ereignis auszulösen, müssen Sie das `slot`-Attribut setzen oder entfernen.

Dieses Ereignis kann nicht abgebrochen werden.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("slotchange", (event) => { })
```

Alternativ können Sie der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) des Interfaces einen Wert zuweisen:

```js-nolint
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

Der folgende Ausschnitt stammt aus unserem [slotchange-Beispiel](https://github.com/mdn/web-components-examples/tree/main/slotchange) ([auch live ansehen](https://mdn.github.io/web-components-examples/slotchange/)).

```js
let slots = this.shadowRoot.querySelectorAll("slot");
slots[1].addEventListener("slotchange", (e) => {
  let nodes = slots[1].assignedNodes();
  console.log(
    `Element in Slot "${slots[1].name}" changed to "${nodes[0].outerHTML}".`,
  );
});
```

Hier holen wir Referenzen auf alle `<slot>`-Elemente und fügen dann dem zweiten Slot des Templates einen `slotchange`-Event-Listener hinzu. In diesem Slot ändert sich im Beispiel der Inhalt.

Jedes Mal, wenn sich das in den Slot eingefügte Element ändert, geben wir auf der Konsole aus, welcher Slot sich geändert hat und welcher Knoten sich nun darin befindet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLSlotElement`](/de/docs/Web/API/HTMLSlotElement)
