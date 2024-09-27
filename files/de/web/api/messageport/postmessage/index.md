---
title: "MessagePort: postMessage()-Methode"
short-title: postMessage()
slug: Web/API/MessagePort/postMessage
l10n:
  sourceCommit: e0310b3f565d3147fa80d9e63ace41e0fc244fa6
---

{{APIRef("Channel Messaging API")}} {{AvailableInWorkers}}

Die **`postMessage()`**-Methode der [`MessagePort`](/de/docs/Web/API/MessagePort)-Schnittstelle sendet eine Nachricht über den Port und kann optional die Eigentümerschaft von Objekten an andere Browsing-Kontexte übertragen.

## Syntax

```js-nolint
postMessage(message)
postMessage(message, transfer)
postMessage(message, options)
```

### Parameter

- `message`
  - : Die Nachricht, die Sie über den Kanal senden möchten. Diese kann jeden einfachen Datentyp enthalten. Mehrere Datenobjekte können als Array gesendet werden.
- `transfer` {{optional_inline}}
  - : Ein optionales [Array](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) von [übertragbaren Objekten](/de/docs/Web/API/Web_Workers_API/Transferable_objects), deren Eigentümerschaft übertragen werden soll. Das Eigentum dieser Objekte wird an die Zielseite gegeben und sie sind auf der sendenden Seite nicht mehr nutzbar. Diese übertragbaren Objekte sollten an die Nachricht angehängt werden; andernfalls würden sie zwar verschoben, wären aber auf der Empfangsseite nicht tatsächlich zugänglich.
- `options` {{optional_inline}}
  - : Ein optionales Objekt mit den folgenden Eigenschaften:
    - `transfer` {{optional_inline}}
      - : Hat dieselbe Bedeutung wie der `transfer`-Parameter.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Im folgenden Codeblock sehen Sie, wie ein neuer Kanal mit dem [`MessageChannel()`](/de/docs/Web/API/MessageChannel/MessageChannel)-Konstruktor erstellt wird. Wenn das IFrame geladen ist, übergeben wir [`MessageChannel.port2`](/de/docs/Web/API/MessageChannel/port2) an das IFrame mit [`window.postMessage`](/de/docs/Web/API/Window/postMessage) zusammen mit einer Nachricht. Das IFrame empfängt die Nachricht und sendet eine Nachricht über den `MessageChannel` mit `postMessage()` zurück. Der `handleMessage`-Handler reagiert dann auf eine Nachricht, die vom IFrame mit `onmessage` zurückgesendet wird, und fügt sie in einen Absatz ein — [`MessageChannel.port1`](/de/docs/Web/API/MessageChannel/port1) wird abgehört, um zu überprüfen, wann die Nachricht ankommt.

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

Für ein vollständig funktionierendes Beispiel, siehe unser [basis Kanal-Messaging-Demo](https://github.com/mdn/dom-examples/tree/main/channel-messaging-basic) auf GitHub ([führen Sie es auch live aus](https://mdn.github.io/dom-examples/channel-messaging-basic/)).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Kanal-Messaging](/de/docs/Web/API/Channel_Messaging_API/Using_channel_messaging)
