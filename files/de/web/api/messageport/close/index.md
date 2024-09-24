---
title: "MessagePort: close()-Methode"
short-title: close()
slug: Web/API/MessagePort/close
l10n:
  sourceCommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{APIRef("Channel Messaging API")}} {{AvailableInWorkers}}

Die **`close()`**-Methode des {{domxref("MessagePort")}}-Interfaces trennt den Port, sodass er nicht mehr aktiv ist. Dies stoppt den Nachrichtenfluss zu diesem Port.

## Syntax

```js-nolint
close()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Im folgenden Codeblock sehen Sie eine `handleMessage`-Handlerfunktion, die ausgeführt wird, wenn eine Nachricht mit {{domxref("EventTarget.addEventListener")}} an dieses Dokument zurückgesendet wird.

```js
channel.port1.addEventListener("message", handleMessage, false);
function handleMessage(e) {
  para.innerHTML = e.data;
  textInput.value = "";
}

channel.port1.start();
```

Sie könnten den Versand von Nachrichten jederzeit mit

```js
channel.port1.close();
```

stoppen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Channel Messaging](/de/docs/Web/API/Channel_Messaging_API/Using_channel_messaging)
