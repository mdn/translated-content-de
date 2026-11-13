---
title: "WebTransportDatagramDuplexStream: readable-Eigenschaft"
short-title: readable
slug: Web/API/WebTransportDatagramDuplexStream/readable
l10n:
  sourceCommit: 6520bd72ab19f400d537db7a53514f08a589301b
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`readable`** des Interfaces [`WebTransportDatagramDuplexStream`](/de/docs/Web/API/WebTransportDatagramDuplexStream) gibt eine [`ReadableStream`](/de/docs/Web/API/ReadableStream)-Instanz zurück, mit der eingehende Datagramme aus dem Stream ohne Zustellgarantie gelesen werden können.

„Ohne Zustellgarantie“ bedeutet, dass weder die Übertragung der Daten noch ihre Ankunft in einer bestimmten Reihenfolge garantiert ist. In manchen Situationen ist dies unproblematisch und ermöglicht eine sehr schnelle Zustellung. Beispielsweise können Sie regelmäßige Aktualisierungen des Spielzustands übertragen, bei denen jede Nachricht die zuletzt angekommene ersetzt und die Reihenfolge keine Rolle spielt.

## Wert

Ein [`ReadableStream`](/de/docs/Web/API/ReadableStream).

Standardmäßig handelt es sich um einen lesbaren Stream, in dem jeder Datenblock ein {{jsxref("Uint8Array")}} ist, das ein Datagramm enthält. Wenn [`WebTransport`](/de/docs/Web/API/WebTransport) mit der auf `bytes` gesetzten Option [`datagramsReadableType`](/de/docs/Web/API/WebTransport/WebTransport#datagramsreadabletype) erstellt wurde, handelt es sich um einen [lesbaren Byte-Stream](/de/docs/Web/API/Streams_API/Using_readable_byte_streams). Ein lesbarer Byte-Stream kann auch mit einem [`ReadableStreamBYOBReader`](/de/docs/Web/API/ReadableStreamBYOBReader) gelesen werden, der jedes Datagramm in einen von Ihnen bereitgestellten Puffer einliest. Siehe das Beispiel [Datagramme mit einem BYOB-Reader lesen](/de/docs/Web/API/WebTransport/WebTransport#reading_datagrams_with_a_byob_reader) auf der Seite zum Konstruktor `WebTransport()`.

## Beispiele

Siehe die Hauptseite zum Interface [`WebTransportDatagramDuplexStream`](/de/docs/Web/API/WebTransportDatagramDuplexStream).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebTransport verwenden](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
- [WebSockets API](/de/docs/Web/API/WebSockets_API)
- [Streams API](/de/docs/Web/API/Streams_API)
- [WebTransport über HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)
