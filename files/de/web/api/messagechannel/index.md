---
title: MessageChannel
slug: Web/API/MessageChannel
l10n:
  sourceCommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{APIRef("Channel Messaging API")}} {{AvailableInWorkers}}

Das **`MessageChannel`**-Interface der [Channel Messaging API](/de/docs/Web/API/Channel_Messaging_API) ermöglicht es uns, einen neuen Nachrichtenkanal zu erstellen und Daten über diesen mit seinen beiden {{domxref("MessagePort")}}-Eigenschaften zu senden.

## Konstruktor

- {{domxref("MessageChannel.MessageChannel", "MessageChannel()")}}
  - : Gibt ein neues `MessageChannel`-Objekt mit zwei neuen {{domxref("MessagePort")}}-Objekten zurück.

## Instanz-Eigenschaften

- {{domxref("MessageChannel.port1")}} {{ReadOnlyInline}}
  - : Gibt port1 des Kanals zurück.
- {{domxref("MessageChannel.port2")}} {{ReadOnlyInline}}
  - : Gibt port2 des Kanals zurück.

## Beispiel

Im folgenden Beispiel sehen Sie, wie ein neuer Kanal mit dem {{domxref("MessageChannel.MessageChannel", "MessageChannel()")}}-Konstruktor erstellt wird.

Wenn das IFrame geladen wurde, registrieren wir einen {{domxref("MessagePort/message_event","onmessage")}}-Handler für {{domxref("MessageChannel.port1")}} und übertragen {{domxref("MessageChannel.port2")}} an das IFrame mithilfe der {{domxref("window.postMessage")}}-Methode zusammen mit einer Nachricht.

Wenn eine Nachricht vom IFrame zurückempfangen wird, gibt die `onMessage`-Funktion die Nachricht in einem Absatz aus.

```js
const channel = new MessageChannel();
const output = document.querySelector(".output");
const iframe = document.querySelector("iframe");

// Warten, bis das IFrame geladen ist
iframe.addEventListener("load", onLoad);

function onLoad() {
  // Nachrichten auf port1 empfangen
  channel.port1.onmessage = onMessage;

  // Übertrag port2 zum IFrame
  iframe.contentWindow.postMessage("Hello from the main page!", "*", [
    channel.port2,
  ]);
}

// Verarbeiten von Nachrichten, die auf port1 empfangen werden
function onMessage(e) {
  output.innerHTML = e.data;
}
```

Für ein vollständiges Arbeitsbeispiel sehen Sie sich unser [Grundlegendes Demo zur Kanalnachrichtübermittlung](https://github.com/mdn/dom-examples/tree/main/channel-messaging-basic) auf GitHub an ([führen Sie es auch live aus](https://mdn.github.io/dom-examples/channel-messaging-basic/)).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Kanalnachrichtübermittlung](/de/docs/Web/API/Channel_Messaging_API/Using_channel_messaging)
