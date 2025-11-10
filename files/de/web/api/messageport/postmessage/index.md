---
title: "MessagePort: postMessage() Methode"
short-title: postMessage()
slug: Web/API/MessagePort/postMessage
l10n:
  sourceCommit: 2ccbd062264d0a2a34f185a3386cb272f42c50f5
---

{{APIRef("Channel Messaging API")}} {{AvailableInWorkers}}

Die **`postMessage()`**-Methode der
[`MessagePort`](/de/docs/Web/API/MessagePort)-Schnittstelle sendet eine Nachricht vom Port und überträgt optional die Eigentumsrechte von Objekten auf andere Browsing-Kontexte.

## Syntax

```js-nolint
postMessage(message)
postMessage(message, transfer)
postMessage(message, options)
```

### Parameter

- `message`
  - : Die Nachricht, die Sie über den Kanal senden möchten. Dies kann jeglicher Basisdatentyp sein. Mehrere Datenobjekte können als Array gesendet werden.

    > [!NOTE]
    > Ausführungskontexte, die einander Nachrichten senden können, müssen sich möglicherweise nicht im selben [Agenten-Cluster](/de/docs/Web/JavaScript/Reference/Execution_model#agent_clusters_and_memory_sharing) befinden und können daher keinen Speicher teilen. {{jsxref("SharedArrayBuffer")}}-Objekte oder Pufferansichten, die von einem solchen unterstützt werden, können nicht über Agenten-Cluster hinweg gesendet werden. Der Versuch, dies zu tun, wird ein [`messageerror`](/de/docs/Web/API/BroadcastChannel/messageerror_event)-Ereignis erzeugen, das ein `DataCloneError` [`DOMException`](/de/docs/Web/API/DOMException) auf der empfangenden Seite enthält.

- `transfer` {{optional_inline}}
  - : Ein optionales [Array](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) von [übertragbaren Objekten](/de/docs/Web/API/Web_Workers_API/Transferable_objects), um deren Eigentumsrechte zu übertragen. Das Eigentum dieser Objekte wird auf die Zielseite übertragen und sie sind auf der sendenden Seite nicht mehr verwendbar. Diese übertragbaren Objekte sollten der Nachricht beigefügt werden; andernfalls würden sie verschoben, aber auf der Empfängerseite nicht tatsächlich zugänglich sein.
- `options` {{optional_inline}}
  - : Ein optionales Objekt, das die folgenden Eigenschaften enthält:
    - `transfer` {{optional_inline}}
      - : Hat die gleiche Bedeutung wie der `transfer`-Parameter.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Im folgenden Codeblock sehen Sie, wie ein neuer Kanal mithilfe des
[`MessageChannel()`](/de/docs/Web/API/MessageChannel/MessageChannel)-Konstruktors erstellt wird. Wenn das
IFrame geladen ist, übergeben wir [`MessageChannel.port2`](/de/docs/Web/API/MessageChannel/port2) an das IFrame mithilfe von
[`window.postMessage`](/de/docs/Web/API/Window/postMessage) zusammen mit einer Nachricht. Das iframe empfängt die Nachricht
und sendet eine Nachricht zurück über den `MessageChannel` mit `postMessage()`.
Der `handleMessage`-Handler reagiert dann auf eine Nachricht vom IFrame über
`onmessage`, indem er sie in einen Absatz einfügt —
[`MessageChannel.port1`](/de/docs/Web/API/MessageChannel/port1) wird überwacht, um zu prüfen, wann die Nachricht ankommt.

```js
const channel = new MessageChannel();
const para = document.querySelector("p");

const ifr = document.querySelector("iframe");
const otherWindow = ifr.contentWindow;

ifr.addEventListener("load", iframeLoaded);

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

Für ein vollständiges funktionierendes Beispiel siehe unser [Grundlegendes Demo zur Kanalnachrichtenübermittlung](https://github.com/mdn/dom-examples/tree/main/channel-messaging-basic) auf GitHub ([auch live ausführen](https://mdn.github.io/dom-examples/channel-messaging-basic/)).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Nachrichtenübermittlung über Kanäle](/de/docs/Web/API/Channel_Messaging_API/Using_channel_messaging)
