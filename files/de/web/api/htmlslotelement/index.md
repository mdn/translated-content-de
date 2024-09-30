---
title: HTMLSlotElement
slug: Web/API/HTMLSlotElement
l10n:
  sourceCommit: 9d5c9fbe387ba7c143fdd7c73a265b209b7f6ec4
---

{{APIRef('Web Components')}}

Das **`HTMLSlotElement`** Interface der [Shadow DOM API](/de/docs/Web/API/Web_components/Using_shadow_DOM) ermöglicht den Zugriff auf den Namen und die zugewiesenen Knoten eines HTML-{{HTMLElement("slot")}}-Elements.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seinem Eltern-Interface, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLSlotElement.name`](/de/docs/Web/API/HTMLSlotElement/name)
  - : Ein String, der verwendet wird, um den Namen des Slots zu erhalten und zu setzen.

## Instanz-Methoden

_Erbt auch Methoden von seinem Eltern-Interface, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLSlotElement.assign()`](/de/docs/Web/API/HTMLSlotElement/assign)
  - : Setzt die manuell zugewiesenen Knoten für diesen Slot auf die angegebenen Knoten.
- [`HTMLSlotElement.assignedNodes()`](/de/docs/Web/API/HTMLSlotElement/assignedNodes)
  - : Gibt eine Sequenz der Knoten zurück, die diesem Slot zugewiesen sind. Wenn die Option `flatten` auf `true` gesetzt ist, wird eine Sequenz sowohl der diesem Slot zugewiesenen Knoten als auch der Knoten zurückgegeben, die anderen Slots zugewiesen sind, die Nachkommen dieses Slots sind. Wenn keine zugewiesenen Knoten gefunden werden, wird der Ersatzinhalt des Slots zurückgegeben.
- [`HTMLSlotElement.assignedElements()`](/de/docs/Web/API/HTMLSlotElement/assignedElements)
  - : Gibt eine Sequenz der diesem Slot zugewiesenen Elemente zurück (und keine anderen Knoten). Wenn die Option `flatten` auf `true` gesetzt ist, wird eine Sequenz sowohl der diesem Slot zugewiesenen Elemente als auch der Elemente zurückgegeben, die anderen Slots zugewiesen sind, die Nachkommen dieses Slots sind. Wenn keine zugewiesenen Elemente gefunden werden, wird der Ersatzinhalt des Slots zurückgegeben.

## Ereignisse

_Erbt auch Ereignisse von seinem Eltern-Interface, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

Hören Sie auf diese Ereignisse, indem Sie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verwenden oder einen Ereignis-Listener der `oneventname`-Eigenschaft dieses Interfaces zuweisen.

- [`slotchange`](/de/docs/Web/API/HTMLSlotElement/slotchange_event)
  - : Wird auf einer `HTMLSlotElement`-Instanz (dem [`<slot>`](/de/docs/Web/HTML/Element/slot)-Element) ausgelöst, wenn sich die in diesem Slot enthaltenen Knoten ändern.

## Beispiele

Der folgende Ausschnitt stammt aus unserem [Beispiel für slotchange](https://github.com/mdn/web-components-examples/tree/main/slotchange) ([sehen Sie es sich auch live an](https://mdn.github.io/web-components-examples/slotchange/)).

```js
let slots = this.shadowRoot.querySelectorAll("slot");
slots[1].addEventListener("slotchange", (e) => {
  let nodes = slots[1].assignedNodes();
  console.log(
    `Element in Slot "${slots[1].name}" changed to "${nodes[0].outerHTML}".`,
  );
});
```

Hier holen wir Referenzen zu allen Slots und fügen einen slotchange-Ereignis-Listener zum zweiten Slot im Template hinzu – welcher derjenige ist, dessen Inhalt im Beispiel ständig geändert wird.

Jedes Mal, wenn sich das im Slot eingefügte Element ändert, protokollieren wir einen Bericht in die Konsole, welcher Slot sich geändert hat und was der neue Knoten im Slot ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
