---
title: "DataTransfer: Methode addElement()"
short-title: addElement()
slug: Web/API/DataTransfer/addElement
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{APIRef("HTML Drag and Drop API")}}{{SeeCompatTable}}{{Non-standard_header}}

Die **`DataTransfer.addElement()`**-Methode legt das Zieh-Quellelement auf das angegebene Element fest. Dieses Element wird das Element sein, bei dem die {{domxref("HTMLElement/drag_event", "drag")}}- und {{domxref("HTMLElement/dragend_event", "dragend")}}-Ereignisse ausgelöst werden, und nicht das Standardziel (das Knotenobjekt, das gezogen wurde).

> [!NOTE]
> Diese Methode ist spezifisch für Firefox.

## Syntax

```js-nolint
addElement(element)
```

### Parameter

- `element`
  - : Das {{domxref("Element")}}, das als Zieh-Quellelement festgelegt werden soll.

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
- [Ziehoperationen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [Empfohlene Zieh-Typen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types)
- [DataTransfer-Test - Einfügen oder Ziehen](https://codepen.io/tech_query/pen/MqGgap)
