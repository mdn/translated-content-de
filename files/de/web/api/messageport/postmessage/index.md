---
title: "MessagePort: postMessage()-Methode"
short-title: postMessage()
slug: Web/API/MessagePort/postMessage
l10n:
  sourceCommit: 079b166268e5a1353e4244133f5883a3f530228f
---

{{APIRef("Channel Messaging API")}} {{AvailableInWorkers}}

Die **`postMessage()`**-Methode des [`MessagePort`](/de/docs/Web/API/MessagePort)-Interfaces sendet eine Nachricht vom Port und überträgt optional die Eigentumsrechte an Objekten an andere Browser-Kontexte.

## Syntax

```js-nolint
postMessage(message)
postMessage(message, transfer)
postMessage(message, options)
```

### Parameter

- `message`
  - : Die Nachricht, die Sie über den Kanal senden möchten. Dies kann ein beliebiger Basisdatentyp sein. Mehrere Datenobjekte können als Array gesendet werden.

    > [!NOTE]
    > Ausführungskontexte, die miteinander Nachrichten austauschen können, befinden sich möglicherweise nicht im selben [Agenten-Cluster](/de/docs/Web/JavaScript/Reference/Execution_model#agent_clusters_and_memory_sharing) und können daher keinen Speicher teilen. {{jsxref("SharedArrayBuffer")}}-Objekte oder Pufferansichten, die durch einen solchen unterstützt werden, können nicht über Agenten-Cluster hinweg gepostet werden. Ein Versuch, dies zu tun, erzeugt ein [`messageerror`](/de/docs/Web/API/BroadcastChannel/messageerror_event)-Ereignis, das ein `DataCloneError` [`DOMException`](/de/docs/Web/API/DOMException) auf der Empfängerseite enthält.

- `transfer` {{optional_inline}}
  - : Ein optionales [Array](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) von [übertragbaren Objekten](/de/docs/Web/API/Web_Workers_API/Transferable_objects), um deren Eigentum zu übertragen. Das Eigentum an diesen Objekten wird auf die Empfängerseite übertragen und sie sind auf der sendenden Seite nicht mehr verwendbar. Diese übertragbaren Objekte sollten an die Nachricht angehängt werden; andernfalls würden sie verschoben, aber tatsächlich nicht auf der Empfängerseite zugänglich sein.
- `options` {{optional_inline}}
  - : Ein optionales Objekt, das die folgenden Eigenschaften enthält:
    - `transfer` {{optional_inline}}
      - : Hat die gleiche Bedeutung wie der `transfer`-Parameter.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Im folgenden Codeblock sehen Sie, wie ein neuer Kanal unter Verwendung des [`MessageChannel()`](/de/docs/Web/API/MessageChannel/MessageChannel)-Konstruktors erstellt wird. Wenn das IFrame geladen ist, übergeben wir dem IFrame [`MessageChannel.port2`](/de/docs/Web/API/MessageChannel/port2) zusammen mit einer Nachricht mit Hilfe von [`window.postMessage`](/de/docs/Web/API/Window/postMessage). Das IFrame empfängt die Nachricht und sendet mit `postMessage()` eine Nachricht auf dem `MessageChannel` zurück. Der `handleMessage`-Handler reagiert dann auf eine Nachricht, die vom IFrame mit `onmessage` zurückgesendet wird, indem er sie in einen Absatz einfügt — [`MessageChannel.port1`](/de/docs/Web/API/MessageChannel/port1) wird überwacht, um zu prüfen, wann die Nachricht eintrifft.

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

Für ein vollständiges Arbeitsbeispiel sehen Sie sich unser [einfaches Channel-Messaging-Demo](https://github.com/mdn/dom-examples/tree/main/channel-messaging-basic) auf GitHub an ([führen Sie es auch live aus](https://mdn.github.io/dom-examples/channel-messaging-basic/)).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Channel Messaging](/de/docs/Web/API/Channel_Messaging_API/Using_channel_messaging)
