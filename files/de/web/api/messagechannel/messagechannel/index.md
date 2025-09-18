---
title: "MessageChannel: MessageChannel()-Konstruktor"
short-title: MessageChannel()
slug: Web/API/MessageChannel/MessageChannel
l10n:
  sourceCommit: 2ccbd062264d0a2a34f185a3386cb272f42c50f5
---

{{APIRef("Channel Messaging API")}} {{AvailableInWorkers}}

Der **`MessageChannel()`**-Konstruktor der [`MessageChannel`](/de/docs/Web/API/MessageChannel)-Schnittstelle gibt ein neues [`MessageChannel`](/de/docs/Web/API/MessageChannel)-Objekt mit zwei neuen [`MessagePort`](/de/docs/Web/API/MessagePort)-Objekten zurück.

## Syntax

```js-nolint
new MessageChannel()
```

### Parameter

Keine ({{jsxref("undefined")}}).

### Rückgabewert

Ein neues [`MessageChannel`](/de/docs/Web/API/MessageChannel)-Objekt.

## Beispiele

Im folgenden Codeblock sehen Sie, wie ein neuer Kanal mit dem `MessageChannel()`-Konstruktor erstellt wird. Wenn das {{HTMLElement("iframe")}} geladen ist, übergeben wir [`port2`](/de/docs/Web/API/MessageChannel/port2) an das `<iframe>` unter Verwendung von [`MessagePort.postMessage`](/de/docs/Web/API/MessagePort/postMessage) zusammen mit einer Nachricht. Der `handleMessage`-Handler reagiert dann auf eine Nachricht, die vom `<iframe>` zurückgesendet wird (unter Verwendung von [`onmessage`](/de/docs/Web/API/MessagePort/message_event)) und fügt diese in einen Absatz ein. Auf den [`port1`](/de/docs/Web/API/MessageChannel/port1) wird gelauscht, um zu prüfen, wann die Nachricht ankommt.

```js
const channel = new MessageChannel();
const para = document.querySelector("p");

const ifr = document.querySelector("iframe");
const otherWindow = ifr.contentWindow;

ifr.addEventListener("load", iframeLoaded);

function iframeLoaded() {
  otherWindow.postMessage("Hello from the main page!", "*", [channel.port2]);
}

channel.port1.onmessage = handleMessage;
function handleMessage(e) {
  para.innerHTML = e.data;
}
```

Für ein vollständiges funktionierendes Beispiel, siehe unser [Kanal-Messaging-Grundlagen-Demo](https://github.com/mdn/dom-examples/tree/main/channel-messaging-basic) auf GitHub ([testen Sie es auch live](https://mdn.github.io/dom-examples/channel-messaging-basic/)).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Kanal-Messaging](/de/docs/Web/API/Channel_Messaging_API/Using_channel_messaging)
