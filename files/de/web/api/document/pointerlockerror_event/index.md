---
title: "Dokument: pointerlockerror-Ereignis"
short-title: pointerlockerror
slug: Web/API/Document/pointerlockerror_event
l10n:
  sourceCommit: 1c322acc575d927494ecff49c04159ba34aec781
---

{{APIRef("Pointer Lock API")}}

Das **`pointerlockerror`**-Ereignis wird ausgelöst, wenn das Sperren des Zeigers fehlschlägt (aus technischen Gründen oder weil die Berechtigung verweigert wurde).

Dieses Ereignis kann nicht abgebrochen werden und steigt nicht auf.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("pointerlockerror", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onpointerlockerror = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Mit `addEventListener()`:

```js
const para = document.querySelector("p");

document.addEventListener("pointerlockerror", (event) => {
  console.log("Error locking pointer");
});
```

Mit der Event-Handler-Eigenschaft `onpointerlockerror` (beachten Sie jedoch, dass dadurch gegebenenfalls andere über `onpointerlockerror` hinzugefügte Event-Listener ersetzt werden):

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

- [Pointer Lock API verwenden](/de/docs/Web/API/Pointer_Lock_API)
