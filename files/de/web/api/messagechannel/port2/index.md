---
title: "MessageChannel: port2-Eigenschaft"
short-title: port2
slug: Web/API/MessageChannel/port2
l10n:
  sourceCommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{APIRef("Channel Messaging API")}} {{AvailableInWorkers}}

Die **`port2`** schreibgeschützte Eigenschaft des [`MessageChannel`](/de/docs/Web/API/MessageChannel)-Interfaces gibt den zweiten Port des Nachrichtenkanals zurück — der Port, der an den Kontext am anderen Ende des Kanals angeschlossen ist, an den die Nachricht anfänglich gesendet wird.

## Wert

Ein [`MessagePort`](/de/docs/Web/API/MessagePort)-Objekt, das den zweiten Port des Kanals repräsentiert, also den Port, der an den Kontext am anderen Ende des Kanals angeschlossen ist.

## Beispiele

Im folgenden Codeblock sehen Sie, wie ein neuer Kanal mit dem [`MessageChannel()`](/de/docs/Web/API/MessageChannel/MessageChannel)-Konstruktor erstellt wird. Sobald das IFrame geladen ist, übergeben wir `port2` an das IFrame mithilfe von [`MessagePort.postMessage`](/de/docs/Web/API/MessagePort/postMessage) zusammen mit einer Nachricht. Der `handleMessage`-Handler reagiert dann auf eine zurückgesendete Nachricht vom IFrame (unter Verwendung von [`onmessage`](/de/docs/Web/API/MessagePort/message_event)) und fügt sie in einen Absatz ein. [`port1`](/de/docs/Web/API/MessageChannel/port1) wird überwacht, um zu überprüfen, wann die Nachricht ankommt.

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

Für ein vollständig funktionierendes Beispiel siehe unser [Grundlagendemo zur Nachrichtenübermittlung im Kanal](https://github.com/mdn/dom-examples/tree/main/channel-messaging-basic) auf GitHub ([auch live ausführen](https://mdn.github.io/dom-examples/channel-messaging-basic/)).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Nachrichtenübermittlung im Kanal](/de/docs/Web/API/Channel_Messaging_API/Using_channel_messaging)
