---
title: "Document: pointerlockerror Ereignis"
short-title: pointerlockerror
slug: Web/API/Document/pointerlockerror_event
l10n:
  sourceCommit: c99ff93a1b71e7d664509fdd3e0c168920be967a
---

{{APIRef("Pointer Lock API")}}

Das **`pointerlockerror`**-Ereignis wird ausgelöst, wenn das Sperren des Zeigers fehlgeschlagen ist (aus technischen Gründen oder weil die Berechtigung verweigert wurde).

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("pointerlockerror", (event) => {});

onpointerlockerror = (event) => {};
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
