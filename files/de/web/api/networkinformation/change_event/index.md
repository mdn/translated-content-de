---
title: "NetworkInformation: change-Ereignis"
short-title: change
slug: Web/API/NetworkInformation/change_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{apiref("Network Information API")}} {{AvailableInWorkers}}

Das **`change`**-Ereignis der [`NetworkInformation`](/de/docs/Web/API/NetworkInformation)-Schnittstelle wird ausgelöst, wenn sich die Verbindungsinformationen ändern, und das Ereignis wird vom [`NetworkInformation`](/de/docs/Web/API/NetworkInformation)-Objekt empfangen.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("change", (event) => { })

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

// Register for event changes:
navigator.connection.onchange = changeHandler;

// Another way: navigator.connection.addEventListener('change', changeHandler);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
