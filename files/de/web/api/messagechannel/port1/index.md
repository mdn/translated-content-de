---
title: "MessageChannel: port1 Eigenschaft"
short-title: port1
slug: Web/API/MessageChannel/port1
l10n:
  sourceCommit: 2ccbd062264d0a2a34f185a3386cb272f42c50f5
---

{{APIRef("Channel Messaging API")}} {{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`port1`** der [`MessageChannel`](/de/docs/Web/API/MessageChannel) Schnittstelle gibt den ersten Port des Nachrichtenkanals zurück – den Port, der mit dem Kontext verbunden ist, der den Kanal gestartet hat.

## Wert

Ein [`MessagePort`](/de/docs/Web/API/MessagePort) Objekt, der erste Port des Kanals, der der Port ist, der mit dem Kontext verbunden ist, der den Kanal gestartet hat.

## Beispiele

Im folgenden Codeblock sehen Sie, wie ein neuer Kanal mit dem [`MessageChannel()`](/de/docs/Web/API/MessageChannel/MessageChannel) Konstruktor erstellt wird. Wenn das {{HTMLElement("iframe")}} geladen ist, übergeben wir [`port2`](/de/docs/Web/API/MessageChannel/port2) an das {{HTMLElement("iframe")}} zusammen mit einer Nachricht mit Hilfe von [`MessagePort.postMessage`](/de/docs/Web/API/MessagePort/postMessage). Der `handleMessage`-Handler reagiert dann auf eine Nachricht, die vom `<iframe>` zurückgesendet wird (unter Verwendung von [`onmessage`](/de/docs/Web/API/MessagePort/message_event)), indem er sie in einen Absatz einfügt. Die `handleMessage`-Methode ist mit dem `port1` assoziiert, um zuzuhören, wenn die Nachricht ankommt.

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

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Channel Messaging](/de/docs/Web/API/Channel_Messaging_API/Using_channel_messaging)
