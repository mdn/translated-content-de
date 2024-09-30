---
title: "HTMLSlotElement: slotchange-Ereignis"
short-title: slotchange
slug: Web/API/HTMLSlotElement/slotchange_event
l10n:
  sourceCommit: 4dec42ed700040565e8af0e14ff104054ebc20f5
---

{{APIRef}}

Das **`slotchange`**-Ereignis wird bei einer Instanz von [`HTMLSlotElement`](/de/docs/Web/API/HTMLSlotElement) ({{HTMLElement("slot")}}-Element) ausgelöst, wenn sich die im Slot enthaltenen Knoten ändern.

> [!NOTE]
> Das `slotchange`-Ereignis wird nicht ausgelöst, wenn sich die Kinder eines geschlitzten Knotens ändern – nur wenn Sie die tatsächlichen Knoten selbst ändern (z.B. hinzufügen oder löschen).

Um ein **slotchange**-Ereignis auszulösen, muss das `slot`-Attribut gesetzt oder entfernt werden.

Dieses Ereignis ist nicht abbruchfähig.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

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

Der folgende Abschnitt stammt aus unserem [slotchange-Beispiel](https://github.com/mdn/web-components-examples/tree/main/slotchange) ([siehe es auch live](https://mdn.github.io/web-components-examples/slotchange/)).

```js
let slots = this.shadowRoot.querySelectorAll("slot");
slots[1].addEventListener("slotchange", (e) => {
  let nodes = slots[1].assignedNodes();
  console.log(
    `Element in Slot "${slots[1].name}" changed to "${nodes[0].outerHTML}".`,
  );
});
```

Hier holen wir Referenzen zu allen `<slot>`s, dann fügen wir einen `slotchange`-Ereignislistener zum zweiten Slot der Vorlage hinzu – das ist derjenige, dessen Inhalt im Beispiel geändert wird.

Jedes Mal, wenn sich das im Slot eingefügte Element ändert, protokollieren wir einen Bericht in der Konsole, welcher Slot geändert wurde und welches neue Element sich im Slot befindet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

[`HTMLSlotElement`](/de/docs/Web/API/HTMLSlotElement)
