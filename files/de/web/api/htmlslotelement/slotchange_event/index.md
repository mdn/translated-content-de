---
title: "HTMLSlotElement: slotchange Ereignis"
short-title: slotchange
slug: Web/API/HTMLSlotElement/slotchange_event
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef}}

Das **`slotchange`** Ereignis wird auf einer [`HTMLSlotElement`](/de/docs/Web/API/HTMLSlotElement)-Instanz ({{HTMLElement("slot")}} Element) ausgelöst, wenn sich die in diesem Slot enthaltenen Node(s) ändern.

> [!NOTE]
> Das `slotchange` Ereignis wird nicht ausgelöst, wenn sich die Kinder eines geslotteten Nodes ändern — nur wenn Sie die tatsächlichen Nodes selbst ändern (z.B. hinzufügen oder löschen).

Um ein **slotchange** Ereignis auszulösen, muss man das `slot` Attribut setzen oder entfernen.

Dieses Ereignis ist nicht abbruchbar.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandlereigenschaft.

```js
addEventListener("slotchange", (event) => {});

onslotchange = (event) => {};
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

Das folgende Snippet stammt aus unserem [slotchange Beispiel](https://github.com/mdn/web-components-examples/tree/main/slotchange) ([Live-Demo ansehen](https://mdn.github.io/web-components-examples/slotchange/)).

```js
let slots = this.shadowRoot.querySelectorAll("slot");
slots[1].addEventListener("slotchange", (e) => {
  let nodes = slots[1].assignedNodes();
  console.log(
    `Element in Slot "${slots[1].name}" changed to "${nodes[0].outerHTML}".`,
  );
});
```

Hier greifen wir auf alle `<slot>` Elemente zu und fügen dann dem zweiten Slot der Vorlage einen `slotchange` Ereignislistener hinzu — das ist der Slot, dessen Inhalt im Beispiel geändert wird.

Jedes Mal, wenn sich das in den Slot eingefügte Element ändert, protokollieren wir einen Bericht in der Konsole, der angibt, welcher Slot sich geändert hat und welches neue Node im Slot enthalten ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

[`HTMLSlotElement`](/de/docs/Web/API/HTMLSlotElement)
