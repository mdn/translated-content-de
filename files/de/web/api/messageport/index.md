---
title: MessagePort
slug: Web/API/MessagePort
l10n:
  sourceCommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{APIRef("Channel Messaging API")}} {{AvailableInWorkers}}

Die **`MessagePort`**-Schnittstelle der [Channel Messaging API](/de/docs/Web/API/Channel_Messaging_API) repräsentiert einen der beiden Ports eines [`MessageChannel`](/de/docs/Web/API/MessageChannel), der es ermöglicht, Nachrichten von einem Port zu senden und am anderen auf deren Ankunft zu lauschen.

`MessagePort` ist ein [übertragbares Objekt](/de/docs/Web/API/Web_Workers_API/Transferable_objects).

{{InheritanceDiagram}}

## Instanzmethoden

_Erbt Methoden von seinem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)_.

- [`postMessage()`](/de/docs/Web/API/MessagePort/postMessage)
  - : Sendet eine Nachricht vom Port und überträgt optional den Besitz von Objekten an andere Browsing-Kontexte.
- [`start()`](/de/docs/Web/API/MessagePort/start)
  - : Startet das Senden von Nachrichten, die in der Warteschlange des Ports stehen (nur erforderlich, wenn [`EventTarget.addEventListener`](/de/docs/Web/API/EventTarget/addEventListener) verwendet wird; es ist impliziert, wenn [`onmessage`](/de/docs/Web/API/MessagePort/message_event) verwendet wird).
- [`close()`](/de/docs/Web/API/MessagePort/close)
  - : Trennt den Port, so dass er nicht mehr aktiv ist.

## Ereignisse

_Erbt Ereignisse von seinem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)_.

- [`message`](/de/docs/Web/API/MessagePort/message_event)
  - : Wird ausgelöst, wenn ein `MessagePort`-Objekt eine Nachricht erhält.
- [`messageerror`](/de/docs/Web/API/MessagePort/messageerror_event)
  - : Wird ausgelöst, wenn ein `MessagePort`-Objekt eine Nachricht erhält, die nicht deserialisiert werden kann.

## Beispiel

Im folgenden Beispiel sehen Sie, wie ein neuer Kanal mit dem [`MessageChannel()`](/de/docs/Web/API/MessageChannel/MessageChannel)-Konstruktor erstellt wird.

Wenn das IFrame geladen ist, registrieren wir einen [`onmessage`](/de/docs/Web/API/MessagePort/message_event)-Handler für [`MessageChannel.port1`](/de/docs/Web/API/MessageChannel/port1) und übertragen [`MessageChannel.port2`](/de/docs/Web/API/MessageChannel/port2) an das IFrame, indem wir zusammen mit einer Nachricht die [`window.postMessage`](/de/docs/Web/API/Window/postMessage)-Methode verwenden.

Wenn eine Nachricht vom IFrame zurück empfangen wird, gibt die `onMessage`-Funktion die Nachricht in einem Absatz aus.

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

Für ein vollständiges funktionierendes Beispiel siehe unser [Grundlehrgang zur Kanalnachricht](https://github.com/mdn/dom-examples/tree/main/channel-messaging-basic) auf GitHub ([führen Sie es auch live aus](https://mdn.github.io/dom-examples/channel-messaging-basic/)).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung des Kanalnachrichtensystems](/de/docs/Web/API/Channel_Messaging_API/Using_channel_messaging)
