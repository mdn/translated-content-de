---
title: "MutationEvent: Methode initMutationEvent()"
short-title: initMutationEvent()
slug: Web/API/MutationEvent/initMutationEvent
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("UI Events")}}{{deprecated_header}}{{non-standard_header}}

Die **`initMutationEvent()`**-Methode der [`MutationEvent`](/de/docs/Web/API/MutationEvent)-Schnittstelle initialisiert den Wert eines Mutation-Events, nachdem es erstellt wurde (normalerweise mit der Methode [`Document.createEvent()`](/de/docs/Web/API/Document/createEvent)).

Diese Methode muss aufgerufen werden, um das Event zu setzen, bevor es mithilfe von [`EventTarget.dispatchEvent()`](/de/docs/Web/API/EventTarget/dispatchEvent) ausgelöst wird.

> [!NOTE]
> Im Allgemeinen erstellen Sie diese Events nicht selbst; sie werden vom Browser erstellt.

## Syntax

```js-nolint
initMutationEvent(type, canBubble, cancelable, relatedNode,
                  prevValue, newValue, attrName, attrChange)
```

### Parameter

- `type`
  - : Ein String, der den [`type`](/de/docs/Web/API/Event/type) des Events festlegt. Browser setzen die folgenden Werte für [`MutationEvent`](/de/docs/Web/API/MutationEvent):
    `DOMAttrModified`, `DOMAttributeNameChanged`, `DOMCharacterDataModified`, `DOMElementNameChanged`, `DOMNodeInserted`, `DOMNodeInsertedIntoDocument`, `DOMNodeRemoved`, `DOMNodeRemovedFromDocument`, `DOMSubtreeModified`.
- `canBubble`
  - : Ein boolescher Wert, der angibt, ob das Event "bubbeln" kann oder nicht. Legt den Wert von [`Event.bubbles`](/de/docs/Web/API/Event/bubbles) fest.
- `cancelable`
  - : Ein boolescher Wert, der angibt, ob die Standardaktion des Events verhindert werden kann. Legt den Wert von [`Event.cancelable`](/de/docs/Web/API/Event/cancelable) fest.
- `relatedNode`
  - : Ein String, der den neuen Wert des geänderten Knotens repräsentiert, falls vorhanden. Legt den Wert von [`MutationEvent.relatedNode`](/de/docs/Web/API/MutationEvent/relatedNode) fest.
- `prevValue`
  - : Ein String, der den vorherigen Wert des geänderten Knotens repräsentiert, falls vorhanden. Legt den Wert von [`MutationEvent.prevValue`](/de/docs/Web/API/MutationEvent/prevValue) fest.
- `newValue`
  - : Ein String, der den neuen Wert des geänderten Knotens repräsentiert, falls vorhanden. Legt den Wert von [`MutationEvent.newValue`](/de/docs/Web/API/MutationEvent/newValue) fest.
- `attrName`
  - : Ein String, der den Namen des geänderten [`Attr`](/de/docs/Web/API/Attr)-Knotens repräsentiert, falls vorhanden. Legt den Wert von [`MutationEvent.attrName`](/de/docs/Web/API/MutationEvent/attrName) fest.
- `attrChange`
  - : Ein Integer, der den Grund der Attributsänderung repräsentiert. Legt den Wert von [`MutationEvent.attrChange`](/de/docs/Web/API/MutationEvent/attrChange) fest.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
