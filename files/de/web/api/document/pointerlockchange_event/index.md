---
title: "Dokument: pointerlockchange-Ereignis"
short-title: pointerlockchange
slug: Web/API/Document/pointerlockchange_event
l10n:
  sourceCommit: 1c322acc575d927494ecff49c04159ba34aec781
---

{{APIRef("Pointer Lock API")}}

Das **`pointerlockchange`**-Ereignis wird ausgelöst, wenn der Zeiger gesperrt oder entsperrt wird.

Mit [`Document.pointerLockElement`](/de/docs/Web/API/Document/pointerLockElement) kann im Event-Handler festgestellt werden, ob der Zeiger gesperrt ist und, falls ja, an welches Element er gebunden ist.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht nach oben weitergegeben.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("pointerlockchange", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onpointerlockchange = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Verwendung von `addEventListener()`:

```js
document.addEventListener("pointerlockchange", (event) => {
  if (document.pointerLockElement)
    console.log("The pointer is locked to: ", document.pointerLockElement);
  else {
    console.log("The pointer is not locked");
  }
});
```

Verwendung der Event-Handler-Eigenschaft `onpointerlockchange` (beachten Sie jedoch, dass dadurch andere gegebenenfalls über `onpointerlockchange` hinzugefügte Event-Listener ersetzt werden):

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
