---
title: "WebTransportDatagramDuplexStream: writable-Eigenschaft"
short-title: writable
slug: Web/API/WebTransportDatagramDuplexStream/writable
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}{{non-standard_header}}

Die schreibgeschützte **`writable`**-Eigenschaft des [`WebTransportDatagramDuplexStream`](/de/docs/Web/API/WebTransportDatagramDuplexStream)-Interfaces gibt eine [`WritableStream`](/de/docs/Web/API/WritableStream)-Instanz zurück, die verwendet werden kann, um unzuverlässig ausgehende Datagramme in den Stream zu schreiben.

"Unzuverlässig" bedeutet, dass die Übertragung von Daten nicht garantiert ist und auch nicht die Ankunft in einer bestimmten Reihenfolge. Dies ist in einigen Situationen in Ordnung und bietet eine sehr schnelle Lieferung. Zum Beispiel könnten Sie regelmäßige Spielstatus-Updates übertragen wollen, bei denen jede Nachricht die letzte, die ankommt, überschreibt und die Reihenfolge nicht wichtig ist.

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
- [WebSockets-API](/de/docs/Web/API/WebSockets_API)
- [Streams-API](/de/docs/Web/API/Streams_API)
- [WebTransport über HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)
