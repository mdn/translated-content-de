---
title: "WebTransportDatagramDuplexStream: writable-Eigenschaft"
short-title: writable
slug: Web/API/WebTransportDatagramDuplexStream/writable
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`writable`** der Schnittstelle [`WebTransportDatagramDuplexStream`](/de/docs/Web/API/WebTransportDatagramDuplexStream) gibt eine [`WritableStream`](/de/docs/Web/API/WritableStream)-Instanz zurück, die verwendet werden kann, um ausgehende Datagramme unzuverlässig auf den Stream zu schreiben.

"Unzuverlässig" bedeutet, dass die Übertragung der Daten nicht garantiert ist, noch die Ankunft in einer bestimmten Reihenfolge. Dies ist in manchen Situationen akzeptabel und bietet eine sehr schnelle Lieferung. Zum Beispiel möchten Sie möglicherweise regelmäßige Spielstatus-Updates übertragen, bei denen jede Nachricht die letzte ankommende überschreibt und die Reihenfolge unwichtig ist.

## Wert

Ein [`WritableStream`](/de/docs/Web/API/WritableStream).

## Beispiele

Siehe die Hauptseite der [`WebTransportDatagramDuplexStream`](/de/docs/Web/API/WebTransportDatagramDuplexStream)-Schnittstelle.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebTransport verwenden](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
- [WebSockets API](/de/docs/Web/API/WebSockets_API)
- [Streams API](/de/docs/Web/API/Streams_API)
- [WebTransport über HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)
