---
title: "MessagePort: postMessage() Methode"
short-title: postMessage()
slug: Web/API/MessagePort/postMessage
l10n:
  sourceCommit: e0310b3f565d3147fa80d9e63ace41e0fc244fa6
---

{{APIRef("Channel Messaging API")}} {{AvailableInWorkers}}

Die **`postMessage()`**-Methode des [`MessagePort`](/de/docs/Web/API/MessagePort)-Interfaces sendet eine Nachricht von dem Port und überträgt optional den Besitz von Objekten an andere Browsing-Kontexte.

## Syntax

```js-nolint
postMessage(message)
postMessage(message, transfer)
postMessage(message, options)
```

### Parameter

- `message`
  - : Die Nachricht, die Sie über den Kanal senden möchten. Diese kann jeden grundlegenden Datentyp haben. Mehrere Datenobjekte können als Array gesendet werden.
- `transfer` {{optional_inline}}
  - : Ein optionales [Array](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) von [übertragbaren Objekten](/de/docs/Web/API/Web_Workers_API/Transferable_objects), deren Besitz übertragen werden soll. Der Besitz dieser Objekte wird an die Empfängerseite übergeben und sie sind auf der sendenden Seite nicht mehr nutzbar. Diese übertragbaren Objekte sollten an die Nachricht angehängt werden; andernfalls würden sie verschoben, aber auf der empfangenden Seite nicht tatsächlich zugänglich sein.
- `options` {{optional_inline}}
  - : Ein optionales Objekt, das die folgenden Eigenschaften enthält:
    - `transfer` {{optional_inline}}
      - : Hat die gleiche Bedeutung wie der `transfer`-Parameter.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Im folgenden Codeblock sehen Sie, wie ein neuer Kanal mithilfe des [`MessageChannel()`](/de/docs/Web/API/MessageChannel/MessageChannel)-Konstruktors erstellt wird. Wenn das IFrame geladen ist, übergeben wir [`MessageChannel.port2`](/de/docs/Web/API/MessageChannel/port2) an das IFrame mit [`window.postMessage`](/de/docs/Web/API/Window/postMessage) zusammen mit einer Nachricht. Das IFrame empfängt die Nachricht und sendet eine Nachricht auf dem `MessageChannel` mit `postMessage()` zurück. Der `handleMessage`-Handler antwortet dann auf eine Nachricht, die vom IFrame zurückgesendet wird, indem er `onmessage` verwendet und sie in einen Absatz setzt — [`MessageChannel.port1`](/de/docs/Web/API/MessageChannel/port1) wird überwacht, um zu prüfen, wann die Nachricht ankommt.

```js
const channel = new MessageChannel();
const para = document.querySelector("p");

const ifr = document.querySelector("iframe");
const otherWindow = ifr.contentWindow;

ifr.addEventListener("load", iframeLoaded, false);

function iframeLoaded() {
  otherWindow.postMessage("Transferring message port", "*", [channel.port2]);
}

channel.port1.onmessage = handleMessage;
function handleMessage(e) {
  para.innerHTML = e.data;
}

// in the iframe…

window.addEventListener("message", (event) => {
  const messagePort = event.ports?.[0];
  messagePort.postMessage("Hello from the iframe!");
});
```

Für ein vollständig funktionsfähiges Beispiel, siehe unsere [grundlegende Demo zur Kanalkommunikation](https://github.com/mdn/dom-examples/tree/main/channel-messaging-basic) auf GitHub ([live ausführen](https://mdn.github.io/dom-examples/channel-messaging-basic/)).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Kanalkommunikation](/de/docs/Web/API/Channel_Messaging_API/Using_channel_messaging)
