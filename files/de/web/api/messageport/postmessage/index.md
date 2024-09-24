---
title: "MessagePort: postMessage()-Methode"
short-title: postMessage()
slug: Web/API/MessagePort/postMessage
l10n:
  sourceCommit: e0310b3f565d3147fa80d9e63ace41e0fc244fa6
---

{{APIRef("Channel Messaging API")}} {{AvailableInWorkers}}

Die **`postMessage()`**-Methode des
{{domxref("MessagePort")}}-Interfaces sendet eine Nachricht vom Port und überträgt optional das Eigentum an Objekten auf andere Browsing-Kontexte.

## Syntax

```js-nolint
postMessage(message)
postMessage(message, transfer)
postMessage(message, options)
```

### Parameter

- `message`
  - : Die Nachricht, die Sie durch den Kanal senden möchten. Dies kann ein beliebiger elementarer Datentyp sein. Mehrere Datenobjekte können als Array gesendet werden.
- `transfer` {{optional_inline}}
  - : Ein optionales [Array](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) von [übertragbaren Objekten](/de/docs/Web/API/Web_Workers_API/Transferable_objects), um deren Eigentum zu übertragen. Das Eigentum an diesen Objekten wird auf die Zielseite übertragen und sie sind auf der sendenden Seite nicht mehr nutzbar. Diese übertragbaren Objekte sollten an die Nachricht angehängt werden; andernfalls würden sie übertragen, aber auf der Empfangsseite nicht tatsächlich zugänglich sein.
- `options` {{optional_inline}}
  - : Ein optionales Objekt, das die folgenden Eigenschaften enthält:
    - `transfer` {{optional_inline}}
      - : Hat die gleiche Bedeutung wie der `transfer`-Parameter.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

## Beispiele

Im folgenden Codeblock sehen Sie, wie ein neuer Kanal mit dem
{{domxref("MessageChannel.MessageChannel", "MessageChannel()")}}-Konstruktor erstellt wird. Wenn das
IFrame geladen ist, übergeben wir {{domxref("MessageChannel.port2")}} an das IFrame mit
{{domxref("window.postMessage")}} zusammen mit einer Nachricht. Das IFrame empfängt die Nachricht
und sendet eine Nachricht über den `MessageChannel` mit `postMessage()` zurück.
Der `handleMessage`-Handler reagiert dann auf eine Nachricht, die vom IFrame mit
`onmessage` gesendet wird, und gibt sie in einem Absatz aus —
{{domxref("MessageChannel.port1")}} wird abgehört, um zu prüfen, wann die Nachricht ankommt.

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

// im IFrame…

window.addEventListener("message", (event) => {
  const messagePort = event.ports?.[0];
  messagePort.postMessage("Hello from the iframe!");
});
```

Für ein vollständiges funktionierendes Beispiel, siehe unser [Channel Messaging Basic Demo](https://github.com/mdn/dom-examples/tree/main/channel-messaging-basic) auf GitHub ([führen Sie es auch live aus](https://mdn.github.io/dom-examples/channel-messaging-basic/)).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Channel Messaging](/de/docs/Web/API/Channel_Messaging_API/Using_channel_messaging)
