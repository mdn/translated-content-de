---
title: "NetworkInformation: change-Ereignis"
short-title: change
slug: Web/API/NetworkInformation/change_event
l10n:
  sourceCommit: 1c322acc575d927494ecff49c04159ba34aec781
---

{{apiref("Network Information API")}} {{AvailableInWorkers}}

Das **`change`**-Ereignis der [`NetworkInformation`](/de/docs/Web/API/NetworkInformation)-Schnittstelle wird ausgelöst, wenn sich die Verbindungsinformationen ändern. Das [`NetworkInformation`](/de/docs/Web/API/NetworkInformation)-Objekt empfängt das Ereignis.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("change", (event) => { })
```

Alternativ können Sie der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle einen Wert zuweisen:

```js-nolint
onchange = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

```js
// Get the connection type.
const type = navigator.connection.type;

function changeHandler(e) {
  // Handle change of connection type here.
}

// Register for event changes (but note that this replaces other event listeners
// added using onchange, if any):
navigator.connection.onchange = changeHandler;

// Another way: navigator.connection.addEventListener('change', changeHandler);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
