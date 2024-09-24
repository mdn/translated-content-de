---
title: "MessagePort: start()-Methode"
short-title: start()
slug: Web/API/MessagePort/start
l10n:
  sourceCommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{APIRef("Channel Messaging API")}} {{AvailableInWorkers}}

Die **`start()`**-Methode der {{domxref("MessagePort")}}-Schnittstelle startet das Senden von Nachrichten, die in der Warteschlange des Ports stehen. Diese Methode ist nur erforderlich, wenn Sie {{domxref("EventTarget.addEventListener")}} verwenden; sie wird impliziert, wenn Sie {{domxref("MessagePort.message_event", "onmessage")}} nutzen.

## Syntax

```js-nolint
start()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Im folgenden Codeblock sehen Sie eine `handleMessage`-Handlerfunktion, die ausgeführt wird, wenn eine Nachricht mit `onmessage` an dieses Dokument gesendet wird:

```js
channel.port1.onmessage = handleMessage;
function handleMessage(e) {
  para.innerHTML = e.data;
}
```

Eine weitere Möglichkeit wäre, dies mit {{domxref("EventTarget.addEventListener")}} zu tun. Wenn jedoch diese Methode verwendet wird, müssen Sie `start()` ausdrücklich aufrufen, um den Nachrichtenfluss zu diesem Dokument zu beginnen:

```js
channel.port1.addEventListener("message", handleMessage, false);
function handleMessage(e) {
  para.innerHTML = e.data;
  textInput.value = "";
}

channel.port1.start();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Channel Messaging](/de/docs/Web/API/Channel_Messaging_API/Using_channel_messaging)
