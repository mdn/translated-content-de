---
title: "MessagePort: start()-Methode"
short-title: start()
slug: Web/API/MessagePort/start
l10n:
  sourceCommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{APIRef("Channel Messaging API")}} {{AvailableInWorkers}}

Die **`start()`**-Methode des [`MessagePort`](/de/docs/Web/API/MessagePort)-Interface startet das Senden von Nachrichten, die in der Warteschlange dieses Ports liegen. Diese Methode ist nur erforderlich, wenn [`EventTarget.addEventListener`](/de/docs/Web/API/EventTarget/addEventListener) verwendet wird; sie ist implizit beim Verwenden von [`onmessage`](/de/docs/Web/API/MessagePort/message_event).

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

Eine weitere Möglichkeit wäre, dies mit [`EventTarget.addEventListener`](/de/docs/Web/API/EventTarget/addEventListener) zu tun. In diesem Fall müssen Sie jedoch explizit `start()` aufrufen, um den Nachrichtenfluss zu diesem Dokument zu starten:

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
