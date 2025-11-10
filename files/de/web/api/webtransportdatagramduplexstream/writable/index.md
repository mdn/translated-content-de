---
title: "WebTransportDatagramDuplexStream: writable-Eigenschaft"
short-title: writable
slug: Web/API/WebTransportDatagramDuplexStream/writable
l10n:
  sourceCommit: 3b1efe57f3b22a97acb9db335f2848c90cdfe40e
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}{{deprecated_header}}

Die schreibgeschützte **`writable`**-Eigenschaft der [`WebTransportDatagramDuplexStream`](/de/docs/Web/API/WebTransportDatagramDuplexStream)-Schnittstelle gibt eine [`WritableStream`](/de/docs/Web/API/WritableStream)-Instanz zurück, die verwendet werden kann, um Datagramme unreliabel in den Stream zu schreiben.

"Unreliabel" bedeutet, dass die Übertragung der Daten nicht garantiert ist und auch deren Ankunft in einer bestimmten Reihenfolge nicht gewährleistet wird. Dies ist in einigen Situationen akzeptabel und ermöglicht eine sehr schnelle Lieferung. Zum Beispiel möchten Sie vielleicht regelmäßige Aktualisierungen des Spielzustands übertragen, wobei jede Nachricht die letzte überschreibt, die eintrifft, und die Reihenfolge nicht wichtig ist.

## Wert

Ein [`WritableStream`](/de/docs/Web/API/WritableStream).

## Beispiele

Siehe die Hauptseite der [`WebTransportDatagramDuplexStream`](/de/docs/Web/API/WebTransportDatagramDuplexStream)-Schnittstelle.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von WebTransport](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
- [WebSockets API](/de/docs/Web/API/WebSockets_API)
- [Streams API](/de/docs/Web/API/Streams_API)
- [WebTransport über HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)
