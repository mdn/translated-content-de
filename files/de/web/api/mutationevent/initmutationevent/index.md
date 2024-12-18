---
title: "MutationEvent: initMutationEvent() Methode"
short-title: initMutationEvent()
slug: Web/API/MutationEvent/initMutationEvent
l10n:
  sourceCommit: 8583c1238d297609d6db0623aba9070d5c57f330
---

{{APIRef("UI Events")}}{{deprecated_header}}{{non-standard_header}}

Die **`initMutationEvent()`**-Methode der [`MutationEvent`](/de/docs/Web/API/MutationEvent)-Schnittstelle initialisiert den Wert eines Mutation-Events, nachdem es erstellt wurde (normalerweise mit der [`Document.createEvent()`](/de/docs/Web/API/Document/createEvent)-Methode).

Diese Methode muss aufgerufen werden, um das Event zu setzen, bevor es mithilfe von [`EventTarget.dispatchEvent()`](/de/docs/Web/API/EventTarget/dispatchEvent) ausgesendet wird.

> [!NOTE]
> Im Allgemeinen werden Sie diese Events nicht selbst erstellen; sie werden vom Browser erzeugt.

## Syntax

```js-nolint
initMutationEvent(type, canBubble, cancelable, relatedNode,
                  prevValue, newValue, attrName, attrChange)
```

### Parameter

- `type`
  - : Ein String, um den [`type`](/de/docs/Web/API/Event/type) des Events festzulegen. Browser setzen die folgenden Werte für [`MutationEvent`](/de/docs/Web/API/MutationEvent): `DOMAttrModified`, `DOMAttributeNameChanged`, `DOMCharacterDataModified`, `DOMElementNameChanged`, `DOMNodeInserted`, `DOMNodeInsertedIntoDocument`, `DOMNodeRemoved`, `DOMNodeRemovedFromDocument`, `DOMSubtreeModified`.
- `canBubble`
  - : Ein Boolean-Wert, der angibt, ob das Event "bubblen" kann oder nicht. Setzt den Wert von [`Event.bubbles`](/de/docs/Web/API/Event/bubbles).
- `cancelable`
  - : Ein Boolean-Wert, der angibt, ob die Standardaktion des Events verhindert werden kann oder nicht. Setzt den Wert von [`Event.cancelable`](/de/docs/Web/API/Event/cancelable).
- `relatedNode`
  - : Ein String, der den neuen Wert des modifizierten Knotens, falls vorhanden, darstellt. Setzt den Wert von [`MutationEvent.relatedNode`](/de/docs/Web/API/MutationEvent/relatedNode).
- `prevValue`
  - : Ein String, der den vorherigen Wert des modifizierten Knotens, falls vorhanden, darstellt. Setzt den Wert von [`MutationEvent.prevValue`](/de/docs/Web/API/MutationEvent/prevValue).
- `newValue`
  - : Ein String, der den neuen Wert des modifizierten Knotens, falls vorhanden, darstellt. Setzt den Wert von [`MutationEvent.newValue`](/de/docs/Web/API/MutationEvent/newValue).
- `attrName`
  - : Ein String, der den Namen des geänderten [`Attr`](/de/docs/Web/API/Attr)-Knotens, falls vorhanden, darstellt. Setzt den Wert von [`MutationEvent.attrName`](/de/docs/Web/API/MutationEvent/attrName).
- `attrChange`
  - : Ein Integer, der den Grund darstellt, warum der Attributknoten geändert wurde. Setzt den Wert von [`MutationEvent.attrChange`](/de/docs/Web/API/MutationEvent/attrChange).

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
