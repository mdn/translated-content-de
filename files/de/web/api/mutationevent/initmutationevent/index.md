---
title: "MutationEvent: initMutationEvent()-Methode"
short-title: initMutationEvent()
slug: Web/API/MutationEvent/initMutationEvent
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{APIRef("UI Events")}}{{deprecated_header}}

Die **`initMutationEvent()`**-Methode der {{domxref("MutationEvent")}}-Schnittstelle initialisiert den Wert eines Mutation-Events, nachdem es erstellt wurde (normalerweise mit der Methode {{domxref("Document.createEvent()")}}).

Diese Methode muss aufgerufen werden, um das Event festzulegen, bevor es mit {{ domxref("EventTarget.dispatchEvent()") }} ausgelöst wird.

> [!NOTE]
> Im Allgemeinen werden Sie diese Events nicht selbst erstellen; sie werden vom Browser erzeugt.

## Syntax

```js-nolint
initMutationEvent(type, canBubble, cancelable, relatedNode,
                  prevValue, newValue, attrName, attrChange)
```

### Parameter

- `type`
  - : Ein String, der den {{domxref("Event.type", "Typ")}} des Events festlegt. Browser setzen die folgenden Werte für {{domxref("MutationEvent")}}:
    `DOMAttrModified`, `DOMAttributeNameChanged`, `DOMCharacterDataModified`, `DOMElementNameChanged`, `DOMNodeInserted`, `DOMNodeInsertedIntoDocument`, `DOMNodeRemoved`, `DOMNodeRemovedFromDocument`, `DOMSubtreeModified`.
- `canBubble`
  - : Ein boolescher Wert, der angibt, ob das Event "bubbeln" kann oder nicht. Setzt den Wert von {{domxref("Event.bubbles")}}.
- `cancelable`
  - : Ein boolescher Wert, der angibt, ob die Standardaktion des Events verhindert werden kann oder nicht. Setzt den Wert von {{domxref("Event.cancelable")}}.
- `relatedNode`
  - : Ein String, der den neuen Wert des geänderten Knotens darstellt, falls vorhanden. Setzt den Wert von {{domxref("MutationEvent.relatedNode")}}.
- `prevValue`
  - : Ein String, der den vorherigen Wert des geänderten Knotens darstellt, falls vorhanden. Setzt den Wert von {{domxref("MutationEvent.prevValue")}}.
- `newValue`
  - : Ein String, der den neuen Wert des geänderten Knotens darstellt, falls vorhanden. Setzt den Wert von {{domxref("MutationEvent.newValue")}}.
- `attrName`
  - : Ein String, der den Namen des geänderten {{domxref("Attr")}}-Knotens darstellt, falls vorhanden. Setzt den Wert von {{domxref("MutationEvent.attrName")}}.
- `attrChange`
  - : Ein Integer, der den Grund für die Änderung des Attributknotens darstellt. Setzt den Wert von {{domxref("MutationEvent.attrChange")}}.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
