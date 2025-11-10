---
title: "HTMLSlotElement: slotchange Ereignis"
short-title: slotchange
slug: Web/API/HTMLSlotElement/slotchange_event
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("Web Components")}}

Das **`slotchange`**-Ereignis wird auf einer Instanz des [`HTMLSlotElement`](/de/docs/Web/API/HTMLSlotElement) ({{HTMLElement("slot")}}-Element) ausgelöst, wenn sich die in diesem Slot enthaltenen Knoten ändern.

> [!NOTE]
> Das `slotchange`-Ereignis wird nicht ausgelöst, wenn sich die Kinder eines geschachtelten Knotens ändern — nur wenn Sie die tatsächlichen Knoten selbst ändern (z.B. hinzufügen oder löschen).

Um ein **slotchange**-Ereignis auszulösen, muss das `slot`-Attribut gesetzt oder entfernt werden.

Dieses Ereignis ist nicht abbruchfähig.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandler-Eigenschaft.

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

Der folgende Ausschnitt stammt aus unserem [slotchange Beispiel](https://github.com/mdn/web-components-examples/tree/main/slotchange) ([sehen Sie es sich auch live an](https://mdn.github.io/web-components-examples/slotchange/)).

```js
let slots = this.shadowRoot.querySelectorAll("slot");
slots[1].addEventListener("slotchange", (e) => {
  let nodes = slots[1].assignedNodes();
  console.log(
    `Element in Slot "${slots[1].name}" changed to "${nodes[0].outerHTML}".`,
  );
});
```

Hier holen wir Referenzen zu allen `<slot>`s ein und fügen dem zweiten Slot der Vorlage — demjenigen, dessen Inhalt im Beispiel geändert wird — einen `slotchange`-Ereignislistener hinzu.

Jedes Mal, wenn sich das in den Slot eingefügte Element ändert, protokollieren wir einen Bericht in der Konsole, der angibt, welcher Slot sich geändert hat und welches das neue Element im Slot ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

[`HTMLSlotElement`](/de/docs/Web/API/HTMLSlotElement)
