---
title: "DataTransfer: addElement()-Methode"
short-title: addElement()
slug: Web/API/DataTransfer/addElement
l10n:
  sourceCommit: 565501caace6d4fbcb9c9b3d8cbf7b03145abbf5
---

{{APIRef("HTML Drag and Drop API")}}{{SeeCompatTable}}{{Non-standard_header}}

Die **`addElement()`**-Methode des [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Interfaces setzt die Zugriffsquelle auf das angegebene Element. Dieses Element wird das Element sein, auf das [`drag`](/de/docs/Web/API/HTMLElement/drag_event)- und [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event)-Ereignisse ausgelöst werden, und nicht der Standardzielknoten (der Knoten, der gezogen wurde).

Während einer Ziehoperation kann diese Methode nur im Handler für das [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)-Ereignis verwendet werden, da dies der einzige Zeitpunkt ist, an dem der Datenspeicher der Ziehoperation beschreibbar ist. Ein Aufruf in einem anderen Ziehereignis löst einen `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) aus. Siehe [Ändern des Drag-Datenspeichers](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store#modifying_the_drag_data_store) für Details.

## Syntax

```js-nolint
addElement(element)
```

### Parameter

- `element`
  - : Das [`Element`](/de/docs/Web/API/Element), das als Zugriffsquelle festgelegt werden soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Drag-Datenspeicher nicht im Lese-/Schreibmodus ist.

## Beispiele

Dieses Beispiel zeigt die Verwendung der `addElement()`-Methode

```js
function changeDragNode(event, node) {
  const dt = event.dataTransfer;
  dt.addElement(node);
}
```

## Spezifikationen

Diese Methode ist in keinem Web-Standard definiert.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Drag and drop](/de/docs/Web/API/HTML_Drag_and_Drop_API)
- [Zugoperationen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [Arbeiten mit dem Drag-Datenspeicher](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store)
