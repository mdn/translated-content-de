---
title: "ExtendableMessageEvent: ExtendableMessageEvent() Konstruktor"
short-title: ExtendableMessageEvent()
slug: Web/API/ExtendableMessageEvent/ExtendableMessageEvent
l10n:
  sourceCommit: 2ef36a6d6f380e79c88bc3a80033e1d3c4629994
---

{{APIRef("Service Workers API")}}{{AvailableInWorkers("service")}}

Der **`ExtendableMessageEvent()`** Konstruktor erstellt ein neues {{domxref("ExtendableMessageEvent")}}-Objekt.

## Syntax

```js-nolint
new ExtendableMessageEvent(type)
new ExtendableMessageEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Er ist case-sensitive, und Browser setzen ihn auf `messageerror` oder `message`.
- `options` {{optional_inline}}
  - : Ein Objekt, das zusätzlich zu den in {{domxref("ExtendableEvent/ExtendableEvent", "ExtendableEvent()")}} definierten Eigenschaften die folgenden Eigenschaften haben kann:
    - `data` {{optional_inline}}
      - : Die Daten des Ereignisses; dies kann jeder Datentyp sein. Der Standardwert ist `null`.
    - `origin` {{optional_inline}}
      - : Ein String, der den Ursprung des entsprechenden Umgebungs-Einstellungsobjekts des Service Workers definiert.
        Der Standardwert ist `""`.
    - `lastEventId` {{optional_inline}}
      - : Ein String, der die letzte Ereignis-ID der Ereignisquelle definiert. Der Standardwert ist `""`.
    - `source` {{optional_inline}}
      - : Der {{domxref("Client")}}, {{domxref("ServiceWorker")}} oder {{domxref("MessagePort")}}, der die Nachricht gesendet hat.
        Der Standardwert ist `null`.
    - `ports` {{optional_inline}}
      - : Ein Array, das die {{domxref("MessagePort")}}-Objekte enthält, die mit dem Kanal verbunden sind, der die Nachricht sendet.
        Der Standardwert ist ein leeres Array.

### Rückgabewert

Ein neues {{domxref("ExtendableMessageEvent")}}-Objekt.

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

- [Verwendung von Service Workers](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Grundlegendes Codebeispiel für Service Worker](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [Channel Messaging](/de/docs/Web/API/Channel_Messaging_API)
