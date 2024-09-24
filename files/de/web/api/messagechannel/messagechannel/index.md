---
title: "MessageChannel: MessageChannel() Konstruktor"
short-title: MessageChannel()
slug: Web/API/MessageChannel/MessageChannel
l10n:
  sourceCommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{APIRef("Channel Messaging API")}} {{AvailableInWorkers}}

Der **`MessageChannel()`** Konstruktor des {{domxref("MessageChannel")}} Interfaces gibt ein neues {{domxref("MessageChannel")}} Objekt mit zwei neuen {{domxref("MessagePort")}} Objekten zurück.

## Syntax

```js-nolint
new MessageChannel()
```

### Parameter

Keine ({{jsxref("undefined")}}).

### Rückgabewert

Ein neues {{domxref("MessageChannel")}} Objekt.

## Beispiele

Im folgenden Codeblock sehen Sie, wie ein neuer Kanal mit dem `MessageChannel()` Konstruktor erstellt wird.
Wenn das {{HTMLElement("iframe")}} geladen ist,
übergeben wir {{domxref("MessageChannel.port2", "port2")}} an das `<iframe>` mit {{domxref("MessagePort.postMessage")}} zusammen mit einer Nachricht.
Der `handleMessage` Handler reagiert dann auf eine Nachricht, die vom `<iframe>` zurückgesendet wird (unter Verwendung von {{domxref("MessagePort.message_event", "onmessage")}}) und platziert sie in einem Absatz.
Es wird auf {{domxref("MessageChannel.port1", "port1")}} gehört, um zu prüfen, wann die Nachricht ankommt.

```js
const channel = new MessageChannel();
const para = document.querySelector("p");

const ifr = document.querySelector("iframe");
const otherWindow = ifr.contentWindow;

ifr.addEventListener("load", iframeLoaded, false);

function iframeLoaded() {
  otherWindow.postMessage("Hello from the main page!", "*", [channel.port2]);
}

channel.port1.onmessage = handleMessage;
function handleMessage(e) {
  para.innerHTML = e.data;
}
```

Für ein vollständiges funktionierendes Beispiel,
sehen Sie sich unser [Grundlegendes Demoprojekt zur Kanalübermittlung](https://github.com/mdn/dom-examples/tree/main/channel-messaging-basic)
auf GitHub an ([auch live ausführen](https://mdn.github.io/dom-examples/channel-messaging-basic/)).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Kanalübermittlung](/de/docs/Web/API/Channel_Messaging_API/Using_channel_messaging)
