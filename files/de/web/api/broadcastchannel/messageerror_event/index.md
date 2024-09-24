---
title: "BroadcastChannel: messageerror-Ereignis"
short-title: messageerror
slug: Web/API/BroadcastChannel/messageerror_event
l10n:
  sourceCommit: 50a45d52fd9f45f1ca30b546af5920d0ccda82dc
---

{{APIRef("BroadCastChannel API")}}{{AvailableInWorkers}}

Das **`messageerror`**-Ereignis der {{domxref("BroadcastChannel")}}-Schnittstelle wird ausgelöst, wenn eine Nachricht, die nicht deserialisiert werden kann, auf dem Kanal ankommt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignisbehandlereigenschaft.

```js-nolint
addEventListener("messageerror", (event) => { })
onmessageerror = (event) => { }
```

## Ereignistyp

Ein {{domxref("MessageEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("MessageEvent")}}

## Ereigniseigenschaften

_Zusätzlich zu den unten aufgelisteten Eigenschaften sind Eigenschaften der übergeordneten Schnittstelle {{domxref("Event")}} verfügbar._

- {{domxref("MessageEvent.data", "data")}} {{ReadOnlyInline}}
  - : Die von dem Nachrichtensender gesendeten Daten.
- {{domxref("MessageEvent.origin", "origin")}} {{ReadOnlyInline}}
  - : Ein String, der den Ursprung des Nachrichtensenders darstellt.
- {{domxref("MessageEvent.lastEventId", "lastEventId")}} {{ReadOnlyInline}}
  - : Ein String, der eine eindeutige ID für das Ereignis darstellt.
- {{domxref("MessageEvent.source", "source")}} {{ReadOnlyInline}}
  - : Eine _Nachrichtenquellen_, die entweder ein {{glossary("WindowProxy")}}, ein {{domxref("MessagePort")}} oder ein {{domxref("ServiceWorker")}}-Objekt ist, das den Nachrichtensender darstellt.
- {{domxref("MessageEvent.ports", "ports")}} {{ReadOnlyInline}}
  - : Ein Array von {{domxref("MessagePort")}}-Objekten, die die mit dem Kanal assoziierten Ports darstellen, durch den die Nachricht gesendet wird (wo es zutrifft, z.B. bei der Kanalnachrichtenübertragung oder beim Senden einer Nachricht an einen Shared Worker).

## Beispiele

Dieser Code verwendet {{domxref("EventTarget.addEventListener", "addEventListener()")}}, um Nachrichten und Fehler zu überwachen:

```js
const channel = new BroadcastChannel("example-channel");

channel.addEventListener("message", (event) => {
  received.textContent = event.data;
});

channel.addEventListener("messageerror", (event) => {
  console.error(event);
});
```

Dasselbe, aber mit den Ereignisbehandlereigenschaften `onmessage` und `onmessageerror`:

```js
const channel = new BroadcastChannel("example-channel");

channel.onmessage = (event) => {
  received.textContent = event.data;
};

channel.onmessageerror = (event) => {
  console.log(event);
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandte Ereignisse: {{domxref("BroadcastChannel/message_event", "message")}}.
