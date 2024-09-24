---
title: MessagePort
slug: Web/API/MessagePort
l10n:
  sourceCommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{APIRef("Channel Messaging API")}} {{AvailableInWorkers}}

Die **`MessagePort`** Schnittstelle der [Channel Messaging API](/de/docs/Web/API/Channel_Messaging_API) repräsentiert einen der beiden Ports eines {{domxref("MessageChannel")}}, wodurch Nachrichten von einem Port gesendet und am anderen empfangen werden können.

`MessagePort` ist ein [übertragbares Objekt](/de/docs/Web/API/Web_Workers_API/Transferable_objects).

{{InheritanceDiagram}}

## Instanzmethoden

_Erbt Methoden von seinem Elternteil {{domxref("EventTarget")}}_.

- {{domxref("MessagePort.postMessage","postMessage()")}}
  - : Sendet eine Nachricht vom Port und überträgt gegebenenfalls das Eigentum von Objekten an andere Browsing-Kontexte.
- {{domxref("MessagePort.start","start()")}}
  - : Startet das Senden von Nachrichten, die in der Warteschlange des Ports stehen (nur erforderlich bei Verwendung von {{domxref("EventTarget.addEventListener")}}; bei Verwendung von {{domxref("MessagePort.message_event", "onmessage")}} ist es impliziert).
- {{domxref("MessagePort.close","close()")}}
  - : Trennt den Port, sodass er nicht mehr aktiv ist.

## Ereignisse

_Erbt Ereignisse von seinem Elternteil {{domxref("EventTarget")}}_.

- {{domxref("MessagePort.message_event","message")}}
  - : Wird ausgelöst, wenn ein `MessagePort`-Objekt eine Nachricht empfängt.
- {{domxref("MessagePort.messageerror_event","messageerror")}}
  - : Wird ausgelöst, wenn ein `MessagePort`-Objekt eine Nachricht empfängt, die nicht deserialisiert werden kann.

## Beispiel

Im folgenden Beispiel sehen Sie, wie ein neuer Kanal mit dem {{domxref("MessageChannel.MessageChannel","MessageChannel()")}} Konstruktor erstellt wird.

Wenn das IFrame geladen ist, registrieren wir einen {{domxref("MessagePort/message_event","onmessage")}}-Handler für {{domxref("MessageChannel.port1")}} und übertragen {{domxref("MessageChannel.port2")}} an das IFrame mittels der {{domxref("window.postMessage")}} Methode zusammen mit einer Nachricht.

Wenn eine Nachricht vom IFrame zurückempfangen wird, gibt die Funktion `onMessage` die Nachricht in einem Absatz aus.

```js
const channel = new MessageChannel();
const output = document.querySelector(".output");
const iframe = document.querySelector("iframe");

// Warten Sie, bis das IFrame geladen ist
iframe.addEventListener("load", onLoad);

function onLoad() {
  // Hören Sie auf Nachrichten auf port1
  channel.port1.onmessage = onMessage;

  // Übertragen Sie port2 an das IFrame
  iframe.contentWindow.postMessage("Hello from the main page!", "*", [
    channel.port2,
  ]);
}

// Nachrichten behandeln, die auf port1 empfangen werden
function onMessage(e) {
  output.innerHTML = e.data;
}
```

Für ein vollständig funktionierendes Beispiel sehen Sie unser [Grundlegendes Beispiel zur Channel-Kommunikation](https://github.com/mdn/dom-examples/tree/main/channel-messaging-basic) auf GitHub ([auch live ausführen](https://mdn.github.io/dom-examples/channel-messaging-basic/)).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung des Channel Messaging](/de/docs/Web/API/Channel_Messaging_API/Using_channel_messaging)
