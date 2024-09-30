---
title: MessagePort
slug: Web/API/MessagePort
l10n:
  sourceCommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{APIRef("Channel Messaging API")}} {{AvailableInWorkers}}

Das **`MessagePort`**-Interface der [Channel Messaging API](/de/docs/Web/API/Channel_Messaging_API) repräsentiert einen der beiden Ports eines [`MessageChannel`](/de/docs/Web/API/MessageChannel), welcher es ermöglicht, Nachrichten von einem Port zu senden und sie am anderen zu empfangen.

`MessagePort` ist ein [transferierbares Objekt](/de/docs/Web/API/Web_Workers_API/Transferable_objects).

{{InheritanceDiagram}}

## Instanzmethoden

_Erbt Methoden von seinem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)_.

- [`postMessage()`](/de/docs/Web/API/MessagePort/postMessage)
  - : Sendet eine Nachricht vom Port und überträgt optional die Eigentümerschaft von Objekten an andere Browsing-Kontexte.
- [`start()`](/de/docs/Web/API/MessagePort/start)
  - : Startet das Senden von im Port wartenden Nachrichten (nur erforderlich bei Verwendung von [`EventTarget.addEventListener`](/de/docs/Web/API/EventTarget/addEventListener); es ist impliziert bei der Verwendung von [`onmessage`](/de/docs/Web/API/MessagePort/message_event)).
- [`close()`](/de/docs/Web/API/MessagePort/close)
  - : Trennt den Port, sodass er nicht mehr aktiv ist.

## Ereignisse

_Erbt Ereignisse von seinem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)_.

- [`message`](/de/docs/Web/API/MessagePort/message_event)
  - : Wird ausgelöst, wenn ein `MessagePort`-Objekt eine Nachricht erhält.
- [`messageerror`](/de/docs/Web/API/MessagePort/messageerror_event)
  - : Wird ausgelöst, wenn ein `MessagePort`-Objekt eine Nachricht erhält, die nicht deserialisiert werden kann.

## Beispiel

Im folgenden Beispiel sehen Sie, wie ein neuer Kanal mit dem [`MessageChannel()`](/de/docs/Web/API/MessageChannel/MessageChannel)-Konstruktor erstellt wird.

Wenn das IFrame geladen ist, registrieren wir einen [`onmessage`](/de/docs/Web/API/MessagePort/message_event)-Handler für [`MessageChannel.port1`](/de/docs/Web/API/MessageChannel/port1) und übertragen [`MessageChannel.port2`](/de/docs/Web/API/MessageChannel/port2) an das IFrame mittels der Methode [`window.postMessage`](/de/docs/Web/API/Window/postMessage) zusammen mit einer Nachricht.

Wenn eine Nachricht vom IFrame zurückkommt, gibt die `onMessage`-Funktion die Nachricht an einen Absatz aus.

```js
const channel = new MessageChannel();
const output = document.querySelector(".output");
const iframe = document.querySelector("iframe");

// Wait for the iframe to load
iframe.addEventListener("load", onLoad);

function onLoad() {
  // Listen for messages on port1
  channel.port1.onmessage = onMessage;

  // Transfer port2 to the iframe
  iframe.contentWindow.postMessage("Hello from the main page!", "*", [
    channel.port2,
  ]);
}

// Handle messages received on port1
function onMessage(e) {
  output.innerHTML = e.data;
}
```

Für ein vollständiges funktionierendes Beispiel, schauen Sie sich unser [Kanal-Messaging-Grundlagen-Demo](https://github.com/mdn/dom-examples/tree/main/channel-messaging-basic) auf GitHub an ([starten Sie es auch live](https://mdn.github.io/dom-examples/channel-messaging-basic/)).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Kanal-Messaging](/de/docs/Web/API/Channel_Messaging_API/Using_channel_messaging)
