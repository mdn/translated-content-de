---
title: "Dokument: pointerlockerror-Ereignis"
short-title: pointerlockerror
slug: Web/API/Document/pointerlockerror_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Pointer Lock API")}}

Das **`pointerlockerror`**-Ereignis wird ausgelöst, wenn das Sperren des Zeigers aus technischen Gründen oder wegen verweigerter Berechtigung fehlgeschlagen ist.

Dieses Ereignis ist nicht abbruchbar und wird nicht weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("pointerlockerror", (event) => { })

onpointerlockerror = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Verwendung von `addEventListener()`:

```js
const para = document.querySelector("p");

document.addEventListener("pointerlockerror", (event) => {
  console.log("Error locking pointer");
});
```

Verwendung der `onpointerlockerror` Ereignis-Handler-Eigenschaft:

```js
document.onpointerlockerror = (event) => {
  console.log("Error locking pointer");
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Pointer Lock API](/de/docs/Web/API/Pointer_Lock_API)
