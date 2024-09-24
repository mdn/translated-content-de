---
title: "Dokument: pointerlockerror-Ereignis"
short-title: pointerlockerror
slug: Web/API/Document/pointerlockerror_event
l10n:
  sourceCommit: c99ff93a1b71e7d664509fdd3e0c168920be967a
---

{{APIRef("Pointer Lock API")}}

Das **`pointerlockerror`**-Ereignis wird ausgelöst, wenn das Sperren des Zeigers (aus technischen Gründen oder weil die Erlaubnis verweigert wurde) fehlgeschlagen ist.

Dieses Ereignis ist nicht abbruchfähig und wird nicht weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignisbehandlungs-Eigenschaft.

```js
addEventListener("pointerlockerror", (event) => {});

onpointerlockerror = (event) => {};
```

## Ereignistyp

Ein generisches {{domxref("Event")}}.

## Beispiele

Verwendung von `addEventListener()`:

```js
const para = document.querySelector("p");

document.addEventListener("pointerlockerror", (event) => {
  console.log("Error locking pointer");
});
```

Verwendung der `onpointerlockerror`-Ereignisbehandlungs-Eigenschaft:

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
