---
title: "PushEvent: PushEvent()-Konstruktor"
short-title: PushEvent()
slug: Web/API/PushEvent/PushEvent
l10n:
  sourceCommit: 3a91caa0ebbc5131ed75afe0e5168cd5bffc0976
---

{{APIRef("Push API")}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Der **`PushEvent()`**-Konstruktor erstellt ein neues
{{domxref("PushEvent")}}-Objekt. Beachten Sie, dass dieser Konstruktor nur in einem Service-Worker-Kontext verfügbar ist.

## Syntax

```js-nolint
new PushEvent(type)
new PushEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Er ist case-sensitiv und Browser setzen ihn auf `push` oder `pushsubscriptionchange`.
- `options` {{optional_inline}}
  - : Ein Objekt, das, _zusätzlich zu den in {{domxref("ExtendableEvent/ExtendableEvent", "ExtendableEvent()")}} definierten Eigenschaften_, die folgenden Eigenschaften haben kann:
    - `data`
      - : Die Daten, die Sie möchten, dass das `PushEvent` enthält, falls vorhanden.
        Wenn der Konstruktor aufgerufen wird, wird die {{domxref("PushEvent.data")}}-Eigenschaft des resultierenden Objekts auf ein neues {{domxref("PushMessageData")}}-Objekt gesetzt, das diese Bytes enthält.

### Rückgabewert

Ein neues {{domxref("PushEvent")}}-Objekt.

## Beispiele

```js
const dataInit = {
  data: "Some sample text",
};

const myPushEvent = new PushEvent("push", dataInit);

myPushEvent.data.text(); // should return 'Some sample text'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Push API](/de/docs/Web/API/Push_API)
- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
