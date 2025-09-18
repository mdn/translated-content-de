---
title: "MessageChannel: port2-Eigenschaft"
short-title: port2
slug: Web/API/MessageChannel/port2
l10n:
  sourceCommit: 2ccbd062264d0a2a34f185a3386cb272f42c50f5
---

{{APIRef("Channel Messaging API")}} {{AvailableInWorkers}}

Die **`port2`** Schreibgeschützte-Eigenschaft des [`MessageChannel`](/de/docs/Web/API/MessageChannel)-Interfaces gibt den zweiten Port des Nachrichtenkanals zurück — den Port, der mit dem Kontext am anderen Ende des Kanals verbunden ist und an den die Nachricht ursprünglich gesendet wird.

## Wert

Ein [`MessagePort`](/de/docs/Web/API/MessagePort)-Objekt, das den zweiten Port des Kanals repräsentiert, den Port, der mit dem Kontext am anderen Ende des Kanals verbunden ist.

## Beispiele

Im folgenden Codeblock sehen Sie, wie ein neuer Kanal mithilfe des [`MessageChannel()`](/de/docs/Web/API/MessageChannel/MessageChannel)-Konstruktors erstellt wird. Wenn das IFrame geladen ist, übergeben wir `port2` zusammen mit einer Nachricht an das IFrame mittels [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage). Der `handleMessage`-Handler antwortet dann auf eine Nachricht, die vom IFrame zurückgesendet wird (unter Verwendung von [`onmessage`](/de/docs/Web/API/MessagePort/message_event)), indem er sie in einen Absatz einfügt. [`port1`](/de/docs/Web/API/MessageChannel/port1) wird überwacht, um zu prüfen, wann die Nachricht eintrifft.

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

Für ein vollständiges funktionierendes Beispiel, siehe unser [Grundlegendes Demo zur Kanalnachrichtenübermittlung](https://github.com/mdn/dom-examples/tree/main/channel-messaging-basic) auf GitHub ([führen Sie es auch live aus](https://mdn.github.io/dom-examples/channel-messaging-basic/)).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Kanalnachrichten](/de/docs/Web/API/Channel_Messaging_API/Using_channel_messaging)
