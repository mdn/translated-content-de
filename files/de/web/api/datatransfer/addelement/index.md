---
title: "DataTransfer: addElement()-Methode"
short-title: addElement()
slug: Web/API/DataTransfer/addElement
l10n:
  sourceCommit: 8285d415db211ae9efe04752d9dab1b574450ee8
---

{{APIRef("HTML Drag and Drop API")}}{{SeeCompatTable}}{{Non-standard_header}}

Die **`DataTransfer.addElement()`**-Methode setzt die Drag-Quelle
auf das angegebene Element. Dieses Element wird das Element sein, bei dem [`drag`](/de/docs/Web/API/HTMLElement/drag_event)- und
[`dragend`](/de/docs/Web/API/HTMLElement/dragend_event)-Ereignisse ausgelöst werden, und nicht das Standardziel (der Knoten, der
gezogen wurde).

> [!NOTE]
> Diese Methode ist Firefox-spezifisch.

## Syntax

```js-nolint
addElement(element)
```

### Parameter

- `element`
  - : Das [`Element`](/de/docs/Web/API/Element), das als Drag-Quelle festgelegt werden soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Dieses Beispiel zeigt die Verwendung der `addElement()`-Methode.

```js
function change_drag_node(event, node) {
  const dt = event.dataTransfer;
  dt.addElement(node);
}
```

## Spezifikationen

Diese Methode ist in keinem Webstandard definiert.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Drag and Drop](/de/docs/Web/API/HTML_Drag_and_Drop_API)
- [Drag-Operationen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [Arbeiten mit dem Drag-Daten-Store](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store)
