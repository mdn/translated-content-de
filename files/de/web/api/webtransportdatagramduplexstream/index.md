---
title: WebTransportDatagramDuplexStream
slug: Web/API/WebTransportDatagramDuplexStream
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Das **`WebTransportDatagramDuplexStream`** Interface der [WebTransport API](/de/docs/Web/API/WebTransport_API) repräsentiert einen Duplex-Stream, der für den unzuverlässigen Transport von Datagrammen zwischen Client und Server genutzt werden kann. Es bietet Zugriff auf einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) zum Lesen eingehender Datagramme, einen [`WritableStream`](/de/docs/Web/API/WritableStream) zum Schreiben ausgehender Datagramme sowie verschiedene Einstellungen und Statistiken in Bezug auf den Stream.

Der Zugriff erfolgt über die [`WebTransport.datagrams`](/de/docs/Web/API/WebTransport/datagrams) Eigenschaft.

„Unzuverlässig“ bedeutet, dass die Datenübertragung nicht garantiert ist, noch die Reihenfolge des Eintreffens. Dies ist in einigen Situationen in Ordnung und ermöglicht eine sehr schnelle Lieferung. Beispielsweise könnten Sie regelmäßige Aktualisierungen des Spielstands übertragen wollen, bei denen jede Nachricht die letzte übertrifft, und die Reihenfolge nicht wichtig ist.

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`incomingHighWaterMark`](/de/docs/Web/API/WebTransportDatagramDuplexStream/incomingHighWaterMark)
  - : Ruft die High-Water-Mark für eingehende Datenblöcke ab oder setzt diese — dies ist die maximale Größe in Datenblöcken, die die interne Warteschlange des eingehenden [`ReadableStream`](/de/docs/Web/API/ReadableStream) erreichen kann, bevor sie als voll betrachtet wird. Siehe [Interne Warteschlangen und Warteschlangenstrategien](/de/docs/Web/API/Streams_API/Concepts#internal_queues_and_queuing_strategies) für weitere Informationen.
- [`incomingMaxAge`](/de/docs/Web/API/WebTransportDatagramDuplexStream/incomingMaxAge)
  - : Ruft das maximale Alter für eingehende Datagramme in Millisekunden ab oder setzt es. Gibt `null` zurück, wenn kein maximales Alter festgelegt wurde.
- [`maxDatagramSize`](/de/docs/Web/API/WebTransportDatagramDuplexStream/maxDatagramSize) {{ReadOnlyInline}}
  - : Gibt die maximale zulässige Größe ausgehender Datagramme in Bytes zurück, die in [`writable`](/de/docs/Web/API/WebTransportDatagramDuplexStream/writable) geschrieben werden können.
- [`outgoingHighWaterMark`](/de/docs/Web/API/WebTransportDatagramDuplexStream/outgoingHighWaterMark)
  - : Ruft die High-Water-Mark für ausgehende Datenblöcke ab oder setzt diese — dies ist die maximale Größe in Datenblöcken, die die interne Warteschlange des ausgehenden [`WritableStream`](/de/docs/Web/API/WritableStream) erreichen kann, bevor sie als voll betrachtet wird. Siehe [Interne Warteschlangen und Warteschlangenstrategien](/de/docs/Web/API/Streams_API/Concepts#internal_queues_and_queuing_strategies) für weitere Informationen.
- [`outgoingMaxAge`](/de/docs/Web/API/WebTransportDatagramDuplexStream/outgoingMaxAge)
  - : Ruft das maximale Alter für ausgehende Datagramme in Millisekunden ab oder setzt es. Gibt `null` zurück, wenn kein maximales Alter festgelegt wurde.
- [`readable`](/de/docs/Web/API/WebTransportDatagramDuplexStream/readable) {{ReadOnlyInline}}
  - : Gibt eine [`ReadableStream`](/de/docs/Web/API/ReadableStream) Instanz zurück, die verwendet werden kann, um eingehende Datagramme aus dem Stream zu lesen.
- [`writable`](/de/docs/Web/API/WebTransportDatagramDuplexStream/writable) {{ReadOnlyInline}}
  - : Gibt eine [`WritableStream`](/de/docs/Web/API/WritableStream) Instanz zurück, die verwendet werden kann, um ausgehende Datagramme in den Stream zu schreiben.

## Beispiele

### Schreiben ausgehender Datagramme

Die [`writable`](/de/docs/Web/API/WebTransportDatagramDuplexStream/writable) Eigenschaft gibt ein [`WritableStream`](/de/docs/Web/API/WritableStream) Objekt zurück, in das Sie Daten mit einem Writer schreiben können, um sie an den Server zu senden:

```js
const writer = transport.datagrams.writable.getWriter();
const data1 = new Uint8Array([65, 66, 67]);
const data2 = new Uint8Array([68, 69, 70]);
writer.write(data1);
writer.write(data2);
```

### Lesen eingehender Datagramme

Die [`readable`](/de/docs/Web/API/WebTransportDatagramDuplexStream/readable) Eigenschaft gibt ein [`ReadableStream`](/de/docs/Web/API/ReadableStream) Objekt zurück, das Sie verwenden können, um Daten vom Server zu empfangen:

```js
async function readData() {
  const reader = transport.datagrams.readable.getReader();
  while (true) {
    const { value, done } = await reader.read();
    if (done) {
      break;
    }
    // value is a Uint8Array.
    console.log(value);
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Using WebTransport](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
- [WebSockets API](/de/docs/Web/API/WebSockets_API)
- [Streams API](/de/docs/Web/API/Streams_API)
- [WebTransport über HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)
