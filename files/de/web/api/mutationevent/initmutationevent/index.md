---
title: "MutationEvent: initMutationEvent() Methode"
short-title: initMutationEvent()
slug: Web/API/MutationEvent/initMutationEvent
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{APIRef("UI Events")}}{{deprecated_header}}

Die **`initMutationEvent()`** Methode des [`MutationEvent`](/de/docs/Web/API/MutationEvent)-Interfaces initialisiert den
Wert eines Mutationsevents, nachdem es erstellt wurde (normalerweise mit der [`Document.createEvent()`](/de/docs/Web/API/Document/createEvent)-Methode).

Diese Methode muss aufgerufen werden, um das Event festzulegen, bevor es mit [`EventTarget.dispatchEvent()`](/de/docs/Web/API/EventTarget/dispatchEvent) gesendet wird.

> [!NOTE]
> Im Allgemeinen werden Sie diese Events nicht selbst erstellen; sie werden vom Browser erstellt.

## Syntax

```js-nolint
initMutationEvent(type, canBubble, cancelable, relatedNode,
                  prevValue, newValue, attrName, attrChange)
```

### Parameter

- `type`
  - : Ein String, der den [`type`](/de/docs/Web/API/Event/type) des Events festlegt. Browser setzen die folgenden Werte für [`MutationEvent`](/de/docs/Web/API/MutationEvent): `DOMAttrModified`, `DOMAttributeNameChanged`, `DOMCharacterDataModified`, `DOMElementNameChanged`, `DOMNodeInserted`, `DOMNodeInsertedIntoDocument`, `DOMNodeRemoved`, `DOMNodeRemovedFromDocument`, `DOMSubtreeModified`.
- `canBubble`
  - : Ein Boolean, der angibt, ob das Event bubbeln kann oder nicht. Setzt den Wert von [`Event.bubbles`](/de/docs/Web/API/Event/bubbles).
- `cancelable`
  - : Ein Boolean, der angibt, ob die Standardaktion des Events verhindert werden kann oder nicht. Setzt den Wert von [`Event.cancelable`](/de/docs/Web/API/Event/cancelable).
- `relatedNode`
  - : Ein String, der den neuen Wert des geänderten Knotens darstellt, falls vorhanden. Setzt den Wert von [`MutationEvent.relatedNode`](/de/docs/Web/API/MutationEvent/relatedNode).
- `prevValue`
  - : Ein String, der den vorherigen Wert des geänderten Knotens darstellt, falls vorhanden. Setzt den Wert von [`MutationEvent.prevValue`](/de/docs/Web/API/MutationEvent/prevValue).
- `newValue`
  - : Ein String, der den neuen Wert des geänderten Knotens darstellt, falls vorhanden. Setzt den Wert von [`MutationEvent.newValue`](/de/docs/Web/API/MutationEvent/newValue).
- `attrName`
  - : Ein String, der den Namen des geänderten [`Attr`](/de/docs/Web/API/Attr)-Knotens darstellt, falls vorhanden. Setzt den Wert von [`MutationEvent.attrName`](/de/docs/Web/API/MutationEvent/attrName).
- `attrChange`
  - : Ein Integer, der den Grund für die Änderung des Attributknotens darstellt. Setzt den Wert von [`MutationEvent.attrChange`](/de/docs/Web/API/MutationEvent/attrChange).

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
