---
title: WebTransportDatagramDuplexStream
slug: Web/API/WebTransportDatagramDuplexStream
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Das **`WebTransportDatagramDuplexStream`** Interface der {{domxref("WebTransport API", "WebTransport-API", "", "nocode")}} repräsentiert einen Duplex-Stream, der für den unzuverlässigen Transport von Datagrammen zwischen Client und Server verwendet werden kann. Es bietet Zugriff auf einen {{domxref("ReadableStream")}} zum Lesen von eingehenden Datagrammen, einen {{domxref("WritableStream")}} zum Schreiben von ausgehenden Datagrammen und verschiedene Einstellungen und Statistiken im Zusammenhang mit dem Stream.

Der Zugriff erfolgt über die Eigenschaft {{domxref("WebTransport.datagrams")}}.

"Unzuverlässig" bedeutet, dass die Übertragung von Daten nicht garantiert wird und auch nicht in einer bestimmten Reihenfolge erfolgt. Dies ist in einigen Situationen in Ordnung und ermöglicht eine sehr schnelle Lieferung. Beispielsweise möchten Sie möglicherweise regelmäßige Spielstatus-Updates übertragen, bei denen jede Nachricht die letzte eingehende überschreibt und die Reihenfolge unwichtig ist.

{{InheritanceDiagram}}

## Instanzeigenschaften

- {{domxref("WebTransportDatagramDuplexStream.incomingHighWaterMark", "incomingHighWaterMark")}}
  - : Ruft die Grenze für eingehende Datenblöcke ab oder legt sie fest – dies ist die maximale Größe in Blöcken, die die interne Warteschlange des eingehenden {{domxref("ReadableStream")}} erreichen kann, bevor sie als voll angesehen wird. Weitere Informationen finden Sie unter [Interne Warteschlangen und Warteschlangenstrategien](/de/docs/Web/API/Streams_API/Concepts#internal_queues_and_queuing_strategies).
- {{domxref("WebTransportDatagramDuplexStream.incomingMaxAge", "incomingMaxAge")}}
  - : Ruft das maximale Alter für eingehende Datagramme in Millisekunden ab oder legt es fest. Gibt `null` zurück, wenn kein maximales Alter festgelegt wurde.
- {{domxref("WebTransportDatagramDuplexStream.maxDatagramSize", "maxDatagramSize")}} {{ReadOnlyInline}}
  - : Gibt die maximal zulässige Größe ausgehender Datagramme in Bytes zurück, die in {{domxref("WebTransportDatagramDuplexStream.writable", "writable")}} geschrieben werden können.
- {{domxref("WebTransportDatagramDuplexStream.outgoingHighWaterMark", "outgoingHighWaterMark")}}
  - : Ruft die Grenze für ausgehende Datenblöcke ab oder legt sie fest – dies ist die maximale Größe in Blöcken, die die interne Warteschlange des ausgehenden {{domxref("WritableStream")}} erreichen kann, bevor sie als voll angesehen wird. Weitere Informationen finden Sie unter [Interne Warteschlangen und Warteschlangenstrategien](/de/docs/Web/API/Streams_API/Concepts#internal_queues_and_queuing_strategies).
- {{domxref("WebTransportDatagramDuplexStream.outgoingMaxAge", "outgoingMaxAge")}}
  - : Ruft das maximale Alter für ausgehende Datagramme in Millisekunden ab oder legt es fest. Gibt `null` zurück, wenn kein maximales Alter festgelegt wurde.
- {{domxref("WebTransportDatagramDuplexStream.readable", "readable")}} {{ReadOnlyInline}}
  - : Gibt eine {{domxref("ReadableStream")}} Instanz zurück, die verwendet werden kann, um eingehende Datagramme aus dem Stream zu lesen.
- {{domxref("WebTransportDatagramDuplexStream.writable", "writable")}} {{ReadOnlyInline}}
  - : Gibt eine {{domxref("WritableStream")}} Instanz zurück, die verwendet werden kann, um ausgehende Datagramme in den Stream zu schreiben.

## Beispiele

### Schreiben ausgehender Datagramme

Die Eigenschaft {{domxref("WebTransportDatagramDuplexStream.writable", "writable")}} gibt ein {{domxref("WritableStream")}} Objekt zurück, in das Sie Daten mithilfe eines Schreibers schreiben können, um sie an den Server zu übertragen:

```js
const writer = transport.datagrams.writable.getWriter();
const data1 = new Uint8Array([65, 66, 67]);
const data2 = new Uint8Array([68, 69, 70]);
writer.write(data1);
writer.write(data2);
```

### Lesen eingehender Datagramme

Die Eigenschaft {{domxref("WebTransportDatagramDuplexStream.readable", "readable")}} gibt ein {{domxref("ReadableStream")}} Objekt zurück, das Sie verwenden können, um Daten vom Server zu empfangen:

```js
async function readData() {
  const reader = transport.datagrams.readable.getReader();
  while (true) {
    const { value, done } = await reader.read();
    if (done) {
      break;
    }
    // value ist ein Uint8Array.
    console.log(value);
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von WebTransport](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
- {{domxref("WebSockets API", "WebSockets-API", "", "nocode")}}
- {{domxref("Streams API", "Streams-API", "", "nocode")}}
- [WebTransport über HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)
