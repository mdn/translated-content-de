---
title: "MessageChannel: port2-Eigenschaft"
short-title: port2
slug: Web/API/MessageChannel/port2
l10n:
  sourceCommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{APIRef("Channel Messaging API")}} {{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`port2`** der [`MessageChannel`](/de/docs/Web/API/MessageChannel)-Schnittstelle gibt den zweiten Port des Nachrichtenkanals zurück — den Port, der mit dem Kontext am anderen Ende des Kanals verbunden ist und an den die Nachricht ursprünglich gesendet wird.

## Wert

Ein [`MessagePort`](/de/docs/Web/API/MessagePort)-Objekt, das den zweiten Port des Kanals repräsentiert, den Port, der mit dem Kontext am anderen Ende des Kanals verbunden ist.

## Beispiele

Im folgenden Codeblock sehen Sie, wie ein neuer Kanal mithilfe des [`MessageChannel()`](/de/docs/Web/API/MessageChannel/MessageChannel)-Konstruktors erstellt wird. Sobald das IFrame geladen ist, übergeben wir `port2` zusammen mit einer Nachricht an das IFrame mithilfe von [`MessagePort.postMessage`](/de/docs/Web/API/MessagePort/postMessage). Der `handleMessage`-Handler reagiert dann auf eine Nachricht, die vom IFrame zurückgesendet wird (mit [`onmessage`](/de/docs/Web/API/MessagePort/message_event)), indem er sie in einen Absatz einfügt. [`port1`](/de/docs/Web/API/MessageChannel/port1) wird überwacht, um zu prüfen, wann die Nachricht eintrifft.

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

Für ein vollständiges funktionierendes Beispiel sehen Sie sich unser [Beispiel für grundlegende Kanalnachrichtenübertragung](https://github.com/mdn/dom-examples/tree/main/channel-messaging-basic) auf GitHub an ([führen Sie es auch live aus](https://mdn.github.io/dom-examples/channel-messaging-basic/)).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Kanalnachrichtenübertragung](/de/docs/Web/API/Channel_Messaging_API/Using_channel_messaging)
