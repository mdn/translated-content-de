---
title: "DataTransfer: addElement()-Methode"
short-title: addElement()
slug: Web/API/DataTransfer/addElement
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{APIRef("HTML Drag and Drop API")}}{{SeeCompatTable}}{{Non-standard_header}}

Die **`DataTransfer.addElement()`**-Methode setzt die Drag-Quelle auf das angegebene Element. Dieses Element wird das Element sein, an das [`drag`](/de/docs/Web/API/HTMLElement/drag_event) und [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event)-Ereignisse gesendet werden, und nicht das Standardziel (der Knoten, der gezogen wurde).

> [!NOTE]
> Diese Methode ist spezifisch für Firefox.

## Syntax

```js-nolint
addElement(element)
```

### Parameter

- `element`
  - : Das [`Element`](/de/docs/Web/API/Element), das als Drag-Quelle gesetzt werden soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Dieses Beispiel zeigt die Verwendung der `addElement()`-Methode

```js
function change_drag_node(event, node) {
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
- [Drag-Vorgänge](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [Empfohlene Drag-Typen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types)
- [DataTransfer-Test - Einfügen oder Ziehen](https://codepen.io/tech_query/pen/MqGgap)
