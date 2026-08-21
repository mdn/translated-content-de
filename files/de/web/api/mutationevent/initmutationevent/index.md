---
title: "MutationEvent: initMutationEvent() Methode"
short-title: initMutationEvent()
slug: Web/API/MutationEvent/initMutationEvent
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("UI Events")}}{{non-standard_header}}

Die **`initMutationEvent()`**-Methode der [`MutationEvent`](/de/docs/Web/API/MutationEvent)-Schnittstelle initialisiert den Wert eines Mutationsereignisses, nachdem es erstellt wurde (normalerweise mit der [`Document.createEvent()`](/de/docs/Web/API/Document/createEvent)-Methode).

Diese Methode muss aufgerufen werden, um das Ereignis festzulegen, bevor es unter Verwendung von [`EventTarget.dispatchEvent()`](/de/docs/Web/API/EventTarget/dispatchEvent) ausgesendet wird.

> [!NOTE]
> Im Allgemeinen werden Sie diese Ereignisse nicht selbst erstellen; sie werden vom Browser erstellt.

## Syntax

```js-nolint
initMutationEvent(type, canBubble, cancelable, relatedNode,
                  prevValue, newValue, attrName, attrChange)
```

### Parameter

- `type`
  - : Ein String, um den [`type`](/de/docs/Web/API/Event/type) des Ereignisses festzulegen. Browser setzen die folgenden Werte für [`MutationEvent`](/de/docs/Web/API/MutationEvent): `DOMAttrModified`, `DOMAttributeNameChanged`, `DOMCharacterDataModified`, `DOMElementNameChanged`, `DOMNodeInserted`, `DOMNodeInsertedIntoDocument`, `DOMNodeRemoved`, `DOMNodeRemovedFromDocument`, `DOMSubtreeModified`.
- `canBubble`
  - : Ein boolescher Wert, der angibt, ob das Ereignis aufsteigen kann. Setzt den Wert von [`Event.bubbles`](/de/docs/Web/API/Event/bubbles).
- `cancelable`
  - : Ein boolescher Wert, der angibt, ob die Standardaktion des Ereignisses verhindert werden kann. Setzt den Wert von [`Event.cancelable`](/de/docs/Web/API/Event/cancelable).
- `relatedNode`
  - : Ein String, der den neuen Wert des geänderten Knotens darstellt, falls vorhanden. Setzt den Wert von [`MutationEvent.relatedNode`](/de/docs/Web/API/MutationEvent/relatedNode).
- `prevValue`
  - : Ein String, der den vorherigen Wert des geänderten Knotens darstellt, falls vorhanden. Setzt den Wert von [`MutationEvent.prevValue`](/de/docs/Web/API/MutationEvent/prevValue).
- `newValue`
  - : Ein String, der den neuen Wert des geänderten Knotens darstellt, falls vorhanden. Setzt den Wert von [`MutationEvent.newValue`](/de/docs/Web/API/MutationEvent/newValue).
- `attrName`
  - : Ein String, der den Namen des geänderten [`Attr`](/de/docs/Web/API/Attr)-Knotens darstellt, falls vorhanden. Setzt den Wert von [`MutationEvent.attrName`](/de/docs/Web/API/MutationEvent/attrName).
- `attrChange`
  - : Ein Integer, der den Grund für die Änderung des Attributsknotens darstellt. Setzt den Wert von [`MutationEvent.attrChange`](/de/docs/Web/API/MutationEvent/attrChange).

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
