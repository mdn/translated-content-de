---
title: "WebTransportDatagramDuplexStream: readable-Eigenschaft"
short-title: readable
slug: Web/API/WebTransportDatagramDuplexStream/readable
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die **`readable`** schreibgeschützte Eigenschaft des [`WebTransportDatagramDuplexStream`](/de/docs/Web/API/WebTransportDatagramDuplexStream)-Interfaces gibt eine [`ReadableStream`](/de/docs/Web/API/ReadableStream)-Instanz zurück, die verwendet werden kann, um eingehende Datagramme unzuverlässig aus dem Stream zu lesen.

"Unzuverlässig" bedeutet, dass die Übertragung von Daten nicht garantiert wird, noch eine Ankunft in einer spezifischen Reihenfolge. Dies ist in einigen Situationen akzeptabel und ermöglicht sehr schnelle Lieferung. Zum Beispiel möchten Sie vielleicht regelmäßige Spielstatus-Updates übertragen, bei denen jede Nachricht die zuletzt eingetroffene Nachricht ersetzt, und die Reihenfolge unwichtig ist.

## Wert

Ein [`ReadableStream`](/de/docs/Web/API/ReadableStream).

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
