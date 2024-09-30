---
title: "ExtendableMessageEvent: ExtendableMessageEvent()-Konstruktor"
short-title: ExtendableMessageEvent()
slug: Web/API/ExtendableMessageEvent/ExtendableMessageEvent
l10n:
  sourceCommit: 2ef36a6d6f380e79c88bc3a80033e1d3c4629994
---

{{APIRef("Service Workers API")}}{{AvailableInWorkers("service")}}

Der **`ExtendableMessageEvent()`**-Konstruktor erstellt ein neues [`ExtendableMessageEvent`](/de/docs/Web/API/ExtendableMessageEvent)-Objekt.

## Syntax

```js-nolint
new ExtendableMessageEvent(type)
new ExtendableMessageEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Er ist case-sensitiv und Browser setzen ihn auf `messageerror` oder `message`.
- `options` {{optional_inline}}
  - : Ein Objekt, das _zusätzlich zu den in [`ExtendableEvent()`](/de/docs/Web/API/ExtendableEvent/ExtendableEvent) definierten Eigenschaften_ die folgenden Eigenschaften enthalten kann:
    - `data` {{optional_inline}}
      - : Die Daten des Ereignisses; dies kann jeder Datentyp sein. Standardmäßig `null`.
    - `origin` {{optional_inline}}
      - : Ein String, der den Ursprung des entsprechenden Service Workers-Umgebungsobjekts definiert.
        Standardmäßig `""`.
    - `lastEventId` {{optional_inline}}
      - : Ein String, der die letzte Ereignis-ID der Ereignisquelle definiert. Standardmäßig `""`.
    - `source` {{optional_inline}}
      - : Der [`Client`](/de/docs/Web/API/Client), [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) oder [`MessagePort`](/de/docs/Web/API/MessagePort), der die Nachricht gesendet hat.
        Standardmäßig `null`.
    - `ports` {{optional_inline}}
      - : Ein Array, das die [`MessagePort`](/de/docs/Web/API/MessagePort)-Objekte enthält, die mit dem Kanal verbunden sind, der die Nachricht sendet.
        Standardmäßig ein leeres Array.

### Rückgabewert

Ein neues [`ExtendableMessageEvent`](/de/docs/Web/API/ExtendableMessageEvent)-Objekt.

## Beispiele

```js
const options = {
  data: "hello message",
  source: MessagePortReference,
  ports: MessagePortListReference,
};

const myEME = new ExtendableMessageEvent("message", init);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Service Workern](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Grundlegendes Codebeispiel für Service Workers](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [Channel Messaging](/de/docs/Web/API/Channel_Messaging_API)
