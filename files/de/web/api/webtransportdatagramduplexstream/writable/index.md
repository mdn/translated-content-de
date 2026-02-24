---
title: "WebTransportDatagramDuplexStream: writable-Eigenschaft"
short-title: writable
slug: Web/API/WebTransportDatagramDuplexStream/writable
l10n:
  sourceCommit: 581fd2ecfa9a6a5fb6d2b9d0085a089213e168fa
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}{{deprecated_header}}{{non-standard_header}}

Die schreibgeschützte Eigenschaft **`writable`** des [`WebTransportDatagramDuplexStream`](/de/docs/Web/API/WebTransportDatagramDuplexStream)-Interfaces gibt eine [`WritableStream`](/de/docs/Web/API/WritableStream)-Instanz zurück, die verwendet werden kann, um Datagramme ohne Zuverlässigkeit in den Stream zu schreiben.

"Ohne Zuverlässigkeit" bedeutet, dass die Übertragung von Daten nicht garantiert ist, ebenso wenig das Eintreffen in einer bestimmten Reihenfolge. Dies ist in einigen Situationen akzeptabel und ermöglicht eine sehr schnelle Übermittlung. Beispielsweise könnten Sie regelmäßige Spielstatus-Updates übertragen wollen, bei denen jede Nachricht die letzte, die ankommt, überschreibt und die Reihenfolge nicht wichtig ist.

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
