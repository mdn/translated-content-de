---
title: "PushEvent: PushEvent() Konstruktor"
short-title: PushEvent()
slug: Web/API/PushEvent/PushEvent
l10n:
  sourceCommit: 3a91caa0ebbc5131ed75afe0e5168cd5bffc0976
---

{{APIRef("Push API")}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Der **`PushEvent()`** Konstruktor erstellt ein neues
[`PushEvent`](/de/docs/Web/API/PushEvent)-Objekt. Beachten Sie, dass dieser Konstruktor nur in einem
Service-Worker-Kontext verfügbar ist.

## Syntax

```js-nolint
new PushEvent(type)
new PushEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Es ist case-sensitiv und Browser setzen es auf `push` oder `pushsubscriptionchange`.
- `options` {{optional_inline}}
  - : Ein Objekt, das, _zusätzlich zu den in [`ExtendableEvent()`](/de/docs/Web/API/ExtendableEvent/ExtendableEvent) definierten Eigenschaften_, die folgenden Eigenschaften enthalten kann:
    - `data`
      - : Die Daten, die das `PushEvent` enthalten soll, falls vorhanden.
        Wenn der Konstruktor aufgerufen wird, wird die [`PushEvent.data`](/de/docs/Web/API/PushEvent/data)-Eigenschaft des resultierenden Objekts auf ein neues [`PushMessageData`](/de/docs/Web/API/PushMessageData)-Objekt gesetzt, das diese Bytes enthält.

### Rückgabewert

Ein neues [`PushEvent`](/de/docs/Web/API/PushEvent)-Objekt.

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
