---
title: "MessagePort: close()-Methode"
short-title: close()
slug: Web/API/MessagePort/close
l10n:
  sourceCommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{APIRef("Channel Messaging API")}} {{AvailableInWorkers}}

Die **`close()`**-Methode der [`MessagePort`](/de/docs/Web/API/MessagePort)-Schnittstelle trennt den Port, sodass er nicht mehr aktiv ist. Dies stoppt den Nachrichtenfluss zu diesem Port.

## Syntax

```js-nolint
close()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Im folgenden Codeblock sehen Sie eine `handleMessage`-Handler-Funktion, die ausgeführt wird, wenn eine Nachricht mit [`EventTarget.addEventListener`](/de/docs/Web/API/EventTarget/addEventListener) an dieses Dokument zurückgesendet wird.

```js
channel.port1.addEventListener("message", handleMessage, false);
function handleMessage(e) {
  para.innerHTML = e.data;
  textInput.value = "";
}

channel.port1.start();
```

Sie könnten das Senden von Nachrichten jederzeit stoppen, indem Sie

```js
channel.port1.close();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Channel Messaging](/de/docs/Web/API/Channel_Messaging_API/Using_channel_messaging)
