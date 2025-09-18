---
title: "MessagePort: Methode close()"
short-title: close()
slug: Web/API/MessagePort/close
l10n:
  sourceCommit: 2ccbd062264d0a2a34f185a3386cb272f42c50f5
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

Keine ({{jsxref("undefined")}}).

## Beispiele

Im folgenden Codeblock sehen Sie eine `handleMessage`-Handlerfunktion, die ausgeführt wird, wenn eine Nachricht an dieses Dokument zurückgesendet wird, unter Verwendung von [`EventTarget.addEventListener`](/de/docs/Web/API/EventTarget/addEventListener).

```js
channel.port1.addEventListener("message", handleMessage);
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
