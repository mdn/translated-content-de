---
title: "DedicatedWorkerGlobalScope: messageerror-Ereignis"
short-title: messageerror
slug: Web/API/DedicatedWorkerGlobalScope/messageerror_event
l10n:
  sourceCommit: e6457c34ac16790d4e62bc9ba21e899ac560089c
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("dedicated")}}

Das `messageerror`-Ereignis wird auf einem {{domxref('DedicatedWorkerGlobalScope')}}-Objekt ausgelöst, wenn eine Nachricht empfangen wird, die nicht deserialisiert werden kann.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht nach oben gebubbelt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("messageerror", (event) => {});

onmessageerror = (event) => {};
```

## Ereignistyp

Ein {{domxref("MessageEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("MessageEvent")}}

## Ereigniseigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrem übergeordneten Objekt, {{domxref("Event")}}._

- {{domxref("MessageEvent.data")}} {{ReadOnlyInline}}
  - : Die von dem Nachrichtensender gesendeten Daten.
- {{domxref("MessageEvent.origin")}} {{ReadOnlyInline}}
  - : Ein String, der den Ursprung des Nachrichtensenders darstellt.
- {{domxref("MessageEvent.lastEventId")}} {{ReadOnlyInline}}
  - : Ein String, der eine eindeutige ID für das Ereignis darstellt.
- {{domxref("MessageEvent.source")}} {{ReadOnlyInline}}
  - : Eine `MessageEventSource` (die ein {{glossary("WindowProxy")}}, {{domxref("MessagePort")}}, oder {{domxref("ServiceWorker")}} Objekt sein kann), die den Nachrichtensender darstellt.
- {{domxref("MessageEvent.ports")}} {{ReadOnlyInline}}
  - : Ein Array von {{domxref("MessagePort")}}-Objekten, die die mit dem Kanal verbundenen Ports darstellen, über den die Nachricht gesendet wird (wo zutreffend, z.B. bei Kanalnachrichtenübermittlung oder beim Senden einer Nachricht an einen geteilten Worker).

## Beispiele

Hören Sie mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) auf `messageerror`:

```js
// worker.js

self.addEventListener("messageerror", (event) => {
  self.postMessage("Error receiving message");
  console.error(event);
});
```

Das gleiche, aber unter Verwendung der `onmessageerror`-Ereignis-Handler-Eigenschaft:

```js
// worker.js

self.onmessageerror = (event) => {
  self.postMessage("Error receiving message");
  console.error(event);
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("DedicatedWorkerGlobalScope")}}
- {{domxref("WorkerGlobalScope")}}
- Verwandte Ereignisse: [`message`](/de/docs/Web/API/DedicatedWorkerGlobalScope/message_event)
- [`Worker.postMessage()`](/de/docs/Web/API/Worker/postMessage)
- [Verwendung der Kanalnachrichtenübermittlung](/de/docs/Web/API/Channel_Messaging_API/Using_channel_messaging)
