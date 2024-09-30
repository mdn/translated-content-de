---
title: "WebTransportDatagramDuplexStream: writable-Eigenschaft"
short-title: writable
slug: Web/API/WebTransportDatagramDuplexStream/writable
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`writable`** des [`WebTransportDatagramDuplexStream`](/de/docs/Web/API/WebTransportDatagramDuplexStream)-Interfaces gibt eine [`WritableStream`](/de/docs/Web/API/WritableStream)-Instanz zurück, die verwendet werden kann, um ausgehende Datagramme unreliably in den Stream zu schreiben.

"Unreliably" bedeutet, dass die Übertragung der Daten nicht garantiert ist und auch nicht in einer bestimmten Reihenfolge ankommt. Dies ist in einigen Situationen akzeptabel und ermöglicht eine sehr schnelle Zustellung. Beispielsweise möchten Sie möglicherweise regelmäßige Spielzustandsaktualisierungen übertragen, bei denen jede Nachricht die vorherige überholt und die Reihenfolge nicht wichtig ist.

## Wert

Ein [`WritableStream`](/de/docs/Web/API/WritableStream).

## Beispiele

Siehe die Hauptseite des [`WebTransportDatagramDuplexStream`](/de/docs/Web/API/WebTransportDatagramDuplexStream)-Interfaces.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von WebTransport](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
- [WebSockets API](/de/docs/Web/API/WebSockets_API)
- [Streams API](/de/docs/Web/API/Streams_API)
- [WebTransport über HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)
