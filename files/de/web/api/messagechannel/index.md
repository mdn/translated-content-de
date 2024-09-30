---
title: MessageChannel
slug: Web/API/MessageChannel
l10n:
  sourceCommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{APIRef("Channel Messaging API")}} {{AvailableInWorkers}}

Das **`MessageChannel`**-Interface der [Channel Messaging API](/de/docs/Web/API/Channel_Messaging_API) ermöglicht es uns, einen neuen Nachrichtenkanal zu erstellen und Daten über seine beiden [`MessagePort`](/de/docs/Web/API/MessagePort)-Eigenschaften zu senden.

## Konstruktor

- [`MessageChannel()`](/de/docs/Web/API/MessageChannel/MessageChannel)
  - : Gibt ein neues `MessageChannel`-Objekt mit zwei neuen [`MessagePort`](/de/docs/Web/API/MessagePort)-Objekten zurück.

## Instanzeigenschaften

- [`MessageChannel.port1`](/de/docs/Web/API/MessageChannel/port1) {{ReadOnlyInline}}
  - : Gibt port1 des Kanals zurück.
- [`MessageChannel.port2`](/de/docs/Web/API/MessageChannel/port2) {{ReadOnlyInline}}
  - : Gibt port2 des Kanals zurück.

## Beispiel

Im folgenden Beispiel sehen Sie, wie ein neuer Kanal mit Hilfe des [`MessageChannel()`](/de/docs/Web/API/MessageChannel/MessageChannel)-Konstruktors erstellt wird.

Wenn das IFrame geladen ist, registrieren wir einen [`onmessage`](/de/docs/Web/API/MessagePort/message_event)-Handler für [`MessageChannel.port1`](/de/docs/Web/API/MessageChannel/port1) und übertragen [`MessageChannel.port2`](/de/docs/Web/API/MessageChannel/port2) zusammen mit einer Nachricht an das IFrame über die Methode [`window.postMessage`](/de/docs/Web/API/Window/postMessage).

Wenn eine Nachricht vom IFrame zurückgesendet wird, gibt die Funktion `onMessage` die Nachricht in einem Absatz aus.

```js
const channel = new MessageChannel();
const output = document.querySelector(".output");
const iframe = document.querySelector("iframe");

// Wait for the iframe to load
iframe.addEventListener("load", onLoad);

function onLoad() {
  // Listen for messages on port1
  channel.port1.onmessage = onMessage;

  // Transfer port2 to the iframe
  iframe.contentWindow.postMessage("Hello from the main page!", "*", [
    channel.port2,
  ]);
}

// Handle messages received on port1
function onMessage(e) {
  output.innerHTML = e.data;
}
```

Ein komplett funktionierendes Beispiel finden Sie in unserem [Grunddemonstrationsprojekt zur Kanalnachrichtübermittlung](https://github.com/mdn/dom-examples/tree/main/channel-messaging-basic) auf GitHub ([auch live ausführen](https://mdn.github.io/dom-examples/channel-messaging-basic/)).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Kanalnachrichten](/de/docs/Web/API/Channel_Messaging_API/Using_channel_messaging)
