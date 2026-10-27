---
title: "Node: selectstart-Ereignis"
short-title: selectstart
slug: Web/API/Node/selectstart_event
l10n:
  sourceCommit: 1c322acc575d927494ecff49c04159ba34aec781
---

{{APIRef("Selection API")}}

Das **`selectstart`**-Ereignis der [Selection API](/de/docs/Web/API/Selection) wird ausgelöst, wenn ein Benutzer eine neue Auswahl beginnt.

Wird das Ereignis abgebrochen, bleibt die Auswahl unverändert.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("selectstart", (event) => { })
```

Alternativ können Sie die [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onselectstart = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

```js
// addEventListener version
document.addEventListener("selectstart", () => {
  console.log("Selection started");
});

// onselectstart version (but note that this replaces other event listeners
// added using onselectstart, if any)
document.onselectstart = () => {
  console.log("Selection started.");
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`selectionchange`](/de/docs/Web/API/Document/selectionchange_event)
