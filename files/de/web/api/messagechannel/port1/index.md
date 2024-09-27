---
title: "MessageChannel: port1-Eigenschaft"
short-title: port1
slug: Web/API/MessageChannel/port1
l10n:
  sourceCommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{APIRef("Channel Messaging API")}} {{AvailableInWorkers}}

Die **`port1`**-Eigenschaft der [`MessageChannel`](/de/docs/Web/API/MessageChannel)-Schnittstelle gibt den ersten Port des Nachrichtentkanals zurück — den Port, der an den Kontext angehängt ist, der den Kanal erstellt hat.

## Wert

Ein [`MessagePort`](/de/docs/Web/API/MessagePort)-Objekt, der erste Port des Kanals, das an den Kontext angehängt ist, der den Kanal erstellt hat.

## Beispiele

Im folgenden Codeblock sehen Sie, wie ein neuer Kanal mit dem [`MessageChannel()`](/de/docs/Web/API/MessageChannel/MessageChannel)-Konstruktor erstellt wird. Wenn das {{HTMLElement("iframe")}} geladen ist, übergeben wir [`port2`](/de/docs/Web/API/MessageChannel/port2) an das {{HTMLElement("iframe")}} zusammen mit einer Nachricht durch [`MessagePort.postMessage`](/de/docs/Web/API/MessagePort/postMessage). Der `handleMessage`-Handler reagiert dann auf eine Nachricht, die zurück aus dem `<iframe>` gesendet wird (unter Verwendung von [`onmessage`](/de/docs/Web/API/MessagePort/message_event)) und fügt sie in einen Absatz ein. Die `handleMessage`-Methode ist mit dem `port1` verbunden, um darauf zu hören, wann die Nachricht eintrifft.

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

- [Verwendung von Kanalmessaging](/de/docs/Web/API/Channel_Messaging_API/Using_channel_messaging)
