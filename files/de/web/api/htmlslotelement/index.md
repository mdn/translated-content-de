---
title: HTMLSlotElement
slug: Web/API/HTMLSlotElement
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("Web Components")}}

Das **`HTMLSlotElement`**-Interface der [Shadow DOM API](/de/docs/Web/API/Web_components/Using_shadow_DOM) ermöglicht den Zugriff auf den Namen und die zugeordneten Knoten eines HTML-{{HTMLElement("slot")}}-Elements.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seiner Elternschnittstelle, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLSlotElement.name`](/de/docs/Web/API/HTMLSlotElement/name)
  - : Ein String, der verwendet wird, um den Namen des Slots zu erhalten und festzulegen.

## Instanz-Methoden

_Erbt auch Methoden von seiner Elternschnittstelle, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLSlotElement.assign()`](/de/docs/Web/API/HTMLSlotElement/assign)
  - : Legt die manuell zugeordneten Knoten für diesen Slot auf die angegebenen Knoten fest.
- [`HTMLSlotElement.assignedNodes()`](/de/docs/Web/API/HTMLSlotElement/assignedNodes)
  - : Gibt eine Sequenz der Knoten zurück, die diesem Slot zugeordnet sind. Wenn die `flatten`-Option auf `true` gesetzt ist, gibt sie eine Sequenz sowohl der Knoten zurück, die diesem Slot zugeordnet sind, als auch der Knoten, die irgendwelchen anderen Slots zugeordnet sind, die Nachkommen dieses Slots sind. Wenn keine zugeordneten Knoten gefunden werden, gibt sie den Fallback-Inhalt des Slots zurück.
- [`HTMLSlotElement.assignedElements()`](/de/docs/Web/API/HTMLSlotElement/assignedElements)
  - : Gibt eine Sequenz der Elemente zurück, die diesem Slot zugeordnet sind (und keine anderen Knoten). Wenn die `flatten`-Option auf `true` gesetzt ist, gibt sie eine Sequenz sowohl der Elemente zurück, die diesem Slot zugeordnet sind, als auch der Elemente, die irgendwelchen anderen Slots zugeordnet sind, die Nachkommen dieses Slots sind. Wenn keine zugeordneten Elemente gefunden werden, gibt sie den Fallback-Inhalt des Slots zurück.

## Ereignisse

_Erbt auch Ereignisse von seiner Elternschnittstelle, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

Diese Ereignisse können mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) abgehört werden oder indem ein Ereignis-Listener der `oneventname`-Eigenschaft dieser Schnittstelle zugewiesen wird.

- [`slotchange`](/de/docs/Web/API/HTMLSlotElement/slotchange_event)
  - : Wird auf einer `HTMLSlotElement`-Instanz (dem [`<slot>`](/de/docs/Web/HTML/Reference/Elements/slot)-Element) ausgelöst, wenn sich die in diesem Slot enthaltenen Knoten ändern.

## Beispiele

Das folgende Snippet stammt aus unserem [slotchange-Beispiel](https://github.com/mdn/web-components-examples/tree/main/slotchange) ([siehe es auch live](https://mdn.github.io/web-components-examples/slotchange/)).

```js
let slots = this.shadowRoot.querySelectorAll("slot");
slots[1].addEventListener("slotchange", (e) => {
  let nodes = slots[1].assignedNodes();
  console.log(
    `Element in Slot "${slots[1].name}" changed to "${nodes[0].outerHTML}".`,
  );
});
```

Hier greifen wir auf Referenzen aller Slots zu, dann fügen wir dem zweiten Slot in der Vorlage einen slotchange-Ereignis-Listener hinzu – das ist derjenige, dessen Inhalte im Beispiel ständig geändert werden.

Jedes Mal, wenn sich das in den Slot eingefügte Element ändert, protokollieren wir einen Bericht in die Konsole, welcher Slot geändert wurde und was der neue Knoten im Slot ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
