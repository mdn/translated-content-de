---
title: "BroadcastChannel: messageerror Ereignis"
short-title: messageerror
slug: Web/API/BroadcastChannel/messageerror_event
l10n:
  sourceCommit: 50a45d52fd9f45f1ca30b546af5920d0ccda82dc
---

{{APIRef("BroadCastChannel API")}}{{AvailableInWorkers}}

Das **`messageerror`** Ereignis der [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel)-Schnittstelle wird ausgelöst, wenn eine Nachricht, die nicht deserialisiert werden kann, auf dem Kanal ankommt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("messageerror", (event) => { })
onmessageerror = (event) => { }
```

## Ereignistyp

Ein [`MessageEvent`](/de/docs/Web/API/MessageEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("MessageEvent")}}

## Ereigniseigenschaften

_Neben den unten aufgeführten Eigenschaften sind die Eigenschaften der übergeordneten Schnittstelle, [`Event`](/de/docs/Web/API/Event), verfügbar._

- [`data`](/de/docs/Web/API/MessageEvent/data) {{ReadOnlyInline}}
  - : Die vom Nachrichtensender gesendeten Daten.
- [`origin`](/de/docs/Web/API/MessageEvent/origin) {{ReadOnlyInline}}
  - : Ein String, der den Ursprung des Nachrichtensenders repräsentiert.
- [`lastEventId`](/de/docs/Web/API/MessageEvent/lastEventId) {{ReadOnlyInline}}
  - : Ein String, der eine eindeutige ID für das Ereignis darstellt.
- [`source`](/de/docs/Web/API/MessageEvent/source) {{ReadOnlyInline}}
  - : Eine _message event source_, die entweder ein [WindowProxy](/de/docs/Glossary/WindowProxy), ein [`MessagePort`](/de/docs/Web/API/MessagePort) oder ein [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) Objekt darstellt, welches der Nachrichtensender ist.
- [`ports`](/de/docs/Web/API/MessageEvent/ports) {{ReadOnlyInline}}
  - : Ein Array von [`MessagePort`](/de/docs/Web/API/MessagePort)-Objekten, die die mit dem Kanal verbundenen Ports darstellen, durch den die Nachricht gesendet wird (wo zutreffend, z.B. im Channel-Messaging oder beim Senden einer Nachricht an einen Shared Worker).

## Beispiele

Dieser Code verwendet [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), um Nachrichten und Fehler zu überwachen:

```js
const channel = new BroadcastChannel("example-channel");

channel.addEventListener("message", (event) => {
  received.textContent = event.data;
});

channel.addEventListener("messageerror", (event) => {
  console.error(event);
});
```

Dasselbe, aber unter Verwendung der `onmessage` und `onmessageerror` Ereignishandler-Eigenschaften:

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
