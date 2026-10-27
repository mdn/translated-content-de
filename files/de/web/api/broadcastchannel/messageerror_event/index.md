---
title: "BroadcastChannel: messageerror-Ereignis"
short-title: messageerror
slug: Web/API/BroadcastChannel/messageerror_event
l10n:
  sourceCommit: 1c322acc575d927494ecff49c04159ba34aec781
---

{{APIRef("BroadCastChannel API")}}{{AvailableInWorkers}}

Das **`messageerror`**-Ereignis der [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel)-Schnittstelle wird ausgelöst, wenn eine Nachricht im Kanal eintrifft, die nicht deserialisiert werden kann.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("messageerror", (event) => { })
```

Alternativ können Sie die [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onmessageerror = (event) => { }
```

## Ereignistyp

Ein [`MessageEvent`](/de/docs/Web/API/MessageEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("MessageEvent")}}

## Beispiele

### Auf messageerror-Ereignisse lauschen

Dieser Code verwendet [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), um auf Nachrichten und Fehler zu lauschen:

```js
const channel = new BroadcastChannel("example-channel");

channel.addEventListener("message", (event) => {
  received.textContent = event.data;
});

channel.addEventListener("messageerror", (event) => {
  console.error(event);
});
```

Dasselbe mit den Event-Handler-Eigenschaften `onmessage` und `onmessageerror` (beachten Sie jedoch, dass dadurch gegebenenfalls andere über `onmessage` und `onmessageerror` hinzugefügte Event-Listener ersetzt werden):

```js
const channel = new BroadcastChannel("example-channel");

channel.onmessage = (event) => {
  received.textContent = event.data;
};

channel.onmessageerror = (event) => {
  console.log(event);
};
```

### Versuch, Speicher gemeinsam zu nutzen

Eine häufige Ursache für `messageerror`-Ereignisse ist der Versuch, ein {{jsxref("SharedArrayBuffer")}}-Objekt oder eine darauf basierende Buffer-View zwischen [Agent-Clustern](/de/docs/Web/JavaScript/Reference/Execution_model#agent_clusters_and_memory_sharing) zu senden. Der folgende Code veranschaulicht dies.

Seite A führt den folgenden Code aus:

```js
const channel = new BroadcastChannel("hello");
channel.postMessage({ data: new SharedArrayBuffer(1024) });
```

Seite B führt den folgenden Code aus:

```js
const channel = new BroadcastChannel("hello");
channel.addEventListener("messageerror", (event) => {
  console.error("Message error");
});
```

Wenn Seite B versucht, die von Seite A gesendete Nachricht zu deserialisieren, empfängt sie ein `messageerror`-Ereignis.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandte Ereignisse: [`message`](/de/docs/Web/API/BroadcastChannel/message_event).
