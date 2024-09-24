---
title: "MessageChannel: port1-Eigenschaft"
short-title: port1
slug: Web/API/MessageChannel/port1
l10n:
  sourceCommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{APIRef("Channel Messaging API")}} {{AvailableInWorkers}}

Die schreibgeschützte **`port1`**-Eigenschaft der
{{domxref("MessageChannel")}}-Schnittstelle gibt den ersten Port des Nachrichtenkanals zurück —
den Port, der mit dem Kontext verbunden ist, der den Kanal erstellt hat.

## Wert

Ein {{domxref("MessagePort")}}-Objekt, der erste Port des Kanals, der an den Kontext angefügt ist, der den Kanal erstellt hat.

## Beispiele

Im folgenden Codeblock sehen Sie, wie ein neuer Kanal mithilfe des
{{domxref("MessageChannel.MessageChannel", "MessageChannel()")}}-Konstruktors erstellt wird. Wenn der
{{HTMLElement("iframe")}} geladen ist, übergeben wir {{domxref("MessageChannel.port2", "port2")}} an das
{{HTMLElement("iframe")}} zusammen mit einer Nachricht, indem wir {{domxref("MessagePort.postMessage")}} verwenden. Der `handleMessage`-Handler reagiert dann auf eine Nachricht, die
vom `<iframe>` zurückgesendet wird (mithilfe von {{domxref("MessagePort.message_event", "onmessage")}}),
und zeigt sie in einem Absatz an. Die `handleMessage`-Methode ist mit dem
`port1` verbunden, um zu hören, wann die Nachricht eintrifft.

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

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Nachrichtenkanälen](/de/docs/Web/API/Channel_Messaging_API/Using_channel_messaging)
