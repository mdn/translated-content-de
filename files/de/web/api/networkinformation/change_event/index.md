---
title: "NetworkInformation: change Ereignis"
short-title: change
slug: Web/API/NetworkInformation/change_event
l10n:
  sourceCommit: 895129fb017e0bb86c61f688d99ac4c5c75f4934
---

{{apiref("Network Information API")}} {{AvailableInWorkers}}

Das **`change`** Ereignis der {{domxref("NetworkInformation")}} Schnittstelle wird ausgelöst, wenn sich Verbindungsinformationen ändern, und das Ereignis wird vom {{domxref("NetworkInformation")}} Objekt empfangen.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignisbehandlereigenschaft.

```js
addEventListener("change", (event) => {});

onchange = (event) => {};
```

## Ereignistyp

Ein generisches {{domxref("Event")}}.

## Beispiele

```js
// Erhalten Sie den Verbindungstyp.
const type = navigator.connection.type;

function changeHandler(e) {
  // Handhaben Sie hier die Änderung des Verbindungstyps.
}

// Melden Sie sich für Ereignisänderungen an:
navigator.connection.onchange = changeHandler;

// Eine andere Möglichkeit: navigator.connection.addEventListener('change', changeHandler);
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
