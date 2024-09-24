---
title: "MessageChannel: port2-Eigenschaft"
short-title: port2
slug: Web/API/MessageChannel/port2
l10n:
  sourceCommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{APIRef("Channel Messaging API")}} {{AvailableInWorkers}}

Die **`port2`** schreibgeschützte Eigenschaft der
{{domxref("MessageChannel")}}-Schnittstelle gibt den zweiten Port des Nachrichtenkanals zurück — den Port, der mit dem Kontext am anderen Ende des Kanals verbunden ist und an den die Nachricht ursprünglich gesendet wird.

## Wert

Ein {{domxref("MessagePort")}}-Objekt, das den zweiten Port des Kanals darstellt, den Port, der mit dem Kontext am anderen Ende des Kanals verbunden ist.

## Beispiele

Im folgenden Codeblock sehen Sie, wie ein neuer Kanal mithilfe des
{{domxref("MessageChannel.MessageChannel", "MessageChannel()")}}-Konstruktors erstellt wird. Sobald das IFrame geladen ist, übergeben wir `port2` an das IFrame
mithilfe von {{domxref("MessagePort.postMessage")}} zusammen mit einer Nachricht. Der
`handleMessage`-Handler reagiert dann auf eine Nachricht, die vom IFrame zurückgesendet wird (mithilfe von {{domxref("MessagePort.message_event", "onmessage")}}), und setzt diese in einen Absatz ein.
{{domxref("MessageChannel.port1", "port1")}} wird beobachtet, um zu überprüfen, wann die Nachricht ankommt.

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

Ein vollständiges funktionierendes Beispiel finden Sie in unserem [Channel Messaging Basic Demo](https://github.com/mdn/dom-examples/tree/main/channel-messaging-basic) auf GitHub ([führen Sie es auch live aus](https://mdn.github.io/dom-examples/channel-messaging-basic/)).

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Kanal-Messaging](/de/docs/Web/API/Channel_Messaging_API/Using_channel_messaging)
