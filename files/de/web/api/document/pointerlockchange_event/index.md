---
title: "Dokument: pointerlockchange Ereignis"
short-title: pointerlockchange
slug: Web/API/Document/pointerlockchange_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Pointer Lock API")}}

Das **`pointerlockchange`**-Ereignis wird ausgelöst, wenn der Zeiger gesperrt oder entsperrt wird.

Der Ereignishandler kann [`Document.pointerLockElement`](/de/docs/Web/API/Document/pointerLockElement) verwenden, um festzustellen, ob der Zeiger gesperrt ist und, falls ja, an welches Element er gebunden ist.

Dieses Ereignis kann nicht abgebrochen werden und bildet keine Blase.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("pointerlockchange", (event) => { })

onpointerlockchange = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Verwendung von `addEventListener()`:

```js
addEventListener("pointerlockchange", (event) => {
  if (document.pointerLockElement)
    console.log("The pointer is locked to: ", document.pointerLockElement);
  else {
    console.log("The pointer is not locked");
  }
});
```

Verwendung der `onpointerlockchange` Ereignishandler-Eigenschaft:

```js
document.onpointerlockchange = (event) => {
  if (document.pointerLockElement)
    console.log("The pointer is locked to: ", document.pointerLockElement);
  else {
    console.log("The pointer is not locked");
  }
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Pointer Lock API](/de/docs/Web/API/Pointer_Lock_API)
