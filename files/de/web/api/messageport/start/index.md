---
title: "MessagePort: start()-Methode"
short-title: start()
slug: Web/API/MessagePort/start
l10n:
  sourceCommit: 2ccbd062264d0a2a34f185a3386cb272f42c50f5
---

{{APIRef("Channel Messaging API")}} {{AvailableInWorkers}}

Die **`start()`**-Methode des [`MessagePort`](/de/docs/Web/API/MessagePort)
Interfaces startet das Senden von Nachrichten, die in der Warteschlange des Ports stehen. Diese Methode ist nur erforderlich, wenn [`EventTarget.addEventListener`](/de/docs/Web/API/EventTarget/addEventListener) verwendet wird; sie wird implizit verwendet, wenn [`onmessage`](/de/docs/Web/API/MessagePort/message_event) genutzt wird.

## Syntax

```js-nolint
start()
```

### Parameter

Keine.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

## Beispiele

Im folgenden Codeblock sehen Sie eine `handleMessage`-Handlerfunktion,
die ausgeführt wird, wenn eine Nachricht mit `onmessage` an dieses Dokument zurückgesendet wird:

```js
channel.port1.onmessage = handleMessage;
function handleMessage(e) {
  para.innerHTML = e.data;
}
```

Eine andere Möglichkeit wäre, dies mit [`EventTarget.addEventListener`](/de/docs/Web/API/EventTarget/addEventListener) zu tun. In diesem Fall müssen Sie jedoch explizit `start()` aufrufen, um den Nachrichtenfluss zu diesem Dokument zu beginnen:

```js
channel.port1.addEventListener("message", handleMessage);
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
