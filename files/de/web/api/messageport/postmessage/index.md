---
title: "MessagePort: postMessage()-Methode"
short-title: postMessage()
slug: Web/API/MessagePort/postMessage
l10n:
  sourceCommit: ff81a4e4cb740060aca2df256ce2e07d1e2c0b4e
---

{{APIRef("Channel Messaging API")}} {{AvailableInWorkers}}

Die **`postMessage()`**-Methode des [`MessagePort`](/de/docs/Web/API/MessagePort)-Interfaces sendet eine Nachricht vom Port und überträgt optional die Eigentümerschaft von Objekten an andere Browsing-Kontexte.

## Syntax

```js-nolint
postMessage(message)
postMessage(message, transfer)
postMessage(message, options)
```

### Parameter

- `message`
  - : Die Nachricht, die Sie über den Kanal senden möchten. Diese kann von jedem grundlegenden Datentyp sein. Mehrere Datenobjekte können als Array gesendet werden.

    > [!NOTE]
    > Ausführungskontexte, die miteinander Nachrichten austauschen können, befinden sich möglicherweise nicht im selben [Agent-Cluster](/de/docs/Web/JavaScript/Reference/Execution_model#agent_clusters_and_memory_sharing) und können daher keinen Speicher gemeinsam nutzen. {{jsxref("SharedArrayBuffer")}}-Objekte oder darauf basierende Pufferansichten können nicht über Agent-Cluster hinweg gepostet werden. Ein Versuch, dies zu tun, erzeugt ein [`messageerror`](/de/docs/Web/API/BroadcastChannel/messageerror_event)-Ereignis mit einer `DataCloneError`-[`DOMException`](/de/docs/Web/API/DOMException) auf der Empfangsseite.

- `transfer` {{optional_inline}}
  - : Ein optionales [Array](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) von [übertragbaren Objekten](/de/docs/Web/API/Web_Workers_API/Transferable_objects), deren Eigentümerschaft übertragen werden soll. Das Eigentum dieser Objekte wird auf die Empfängerseite übertragen und sie sind auf der Senderseite nicht mehr verwendbar. Diese übertragbaren Objekte werden nicht automatisch gesendet; sie müssen entweder in der Nachricht enthalten sein oder dem Empfänger auf andere Weise zugänglich gemacht werden, wie z.B. [`MessagePort`](/de/docs/Web/API/MessagePort) über [`MessageEvent.ports`](/de/docs/Web/API/MessageEvent/ports).
- `options` {{optional_inline}}
  - : Ein optionales Objekt, das die folgenden Eigenschaften enthält:
    - `transfer` {{optional_inline}}
      - : Hat die gleiche Bedeutung wie der `transfer`-Parameter.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

## Beispiele

Im folgenden Codeblock sehen Sie, wie ein neuer Kanal mit dem [`MessageChannel()`](/de/docs/Web/API/MessageChannel/MessageChannel)-Konstruktor erstellt wird. Wenn das IFrame geladen ist, übergeben wir [`MessageChannel.port2`](/de/docs/Web/API/MessageChannel/port2) an das IFrame mittels [`window.postMessage`](/de/docs/Web/API/Window/postMessage) zusammen mit einer Nachricht. Das Iframe empfängt die Nachricht und sendet eine Nachricht über den `MessageChannel` mit `postMessage()` zurück. Der `handleMessage`-Handler antwortet dann auf eine Nachricht, die vom IFrame zurückgesendet wird, indem er `onmessage` verwendet und sie in einen Absatz schreibt — [`MessageChannel.port1`](/de/docs/Web/API/MessageChannel/port1) wird abgehört, um zu prüfen, wann die Nachricht ankommt.

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

Für ein vollständiges funktionierendes Beispiel sehen Sie sich unser [grundlegendes Demonstrationsprojekt zur Kanalnachricht](https://github.com/mdn/dom-examples/tree/main/channel-messaging-basic) auf GitHub an ([auch live ausführen](https://mdn.github.io/dom-examples/channel-messaging-basic/)).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Kanalnachricht](/de/docs/Web/API/Channel_Messaging_API/Using_channel_messaging)
