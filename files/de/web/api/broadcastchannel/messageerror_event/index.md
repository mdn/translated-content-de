---
title: "BroadcastChannel: messageerror-Ereignis"
short-title: messageerror
slug: Web/API/BroadcastChannel/messageerror_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("BroadCastChannel API")}}{{AvailableInWorkers}}

Das **`messageerror`**-Ereignis der [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel)-Schnittstelle wird ausgelöst, wenn eine Nachricht, die nicht deserialisiert werden kann, auf dem Kanal ankommt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("messageerror", (event) => { })

onmessageerror = (event) => { }
```

## Ereignistyp

Ein [`MessageEvent`](/de/docs/Web/API/MessageEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("MessageEvent")}}

## Ereigniseigenschaften

_Neben den unten aufgeführten Eigenschaften sind Eigenschaften aus der Elternschnittstelle, [`Event`](/de/docs/Web/API/Event), verfügbar._

- [`data`](/de/docs/Web/API/MessageEvent/data) {{ReadOnlyInline}}
  - : Die Daten, die vom Nachrichtensender gesendet wurden.
- [`origin`](/de/docs/Web/API/MessageEvent/origin) {{ReadOnlyInline}}
  - : Ein String, der die Herkunft des Nachrichtensenders darstellt.
- [`lastEventId`](/de/docs/Web/API/MessageEvent/lastEventId) {{ReadOnlyInline}}
  - : Ein String, der eine eindeutige ID für das Ereignis darstellt.
- [`source`](/de/docs/Web/API/MessageEvent/source) {{ReadOnlyInline}}
  - : Eine _Nachrichtenereignisquelle_, die entweder ein {{Glossary("WindowProxy", "WindowProxy")}}, ein [`MessagePort`](/de/docs/Web/API/MessagePort) oder ein [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Objekt ist, das den Nachrichtensender repräsentiert.
- [`ports`](/de/docs/Web/API/MessageEvent/ports) {{ReadOnlyInline}}
  - : Ein Array von [`MessagePort`](/de/docs/Web/API/MessagePort)-Objekten, die die Ports repräsentieren, die mit dem Kanal verbunden sind, durch den die Nachricht gesendet wird (wenn zutreffend, z. B. bei Kanalnachrichtenübermittlung oder beim Senden einer Nachricht an einen Shared Worker).

## Beispiele

Dieser Code verwendet [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), um Nachrichten und Fehler zu beobachten:

```js
const channel = new BroadcastChannel("example-channel");

channel.addEventListener("message", (event) => {
  received.textContent = event.data;
});

channel.addEventListener("messageerror", (event) => {
  console.error(event);
});
```

Dasselbe, aber mit den `onmessage`- und `onmessageerror`-Ereignis-Handler-Eigenschaften:

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

- Verwandte Ereignisse: [`message`](/de/docs/Web/API/BroadcastChannel/message_event).
