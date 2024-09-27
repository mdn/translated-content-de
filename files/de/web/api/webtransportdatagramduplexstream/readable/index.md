---
title: "WebTransportDatagramDuplexStream: readable Eigenschaft"
short-title: readable
slug: Web/API/WebTransportDatagramDuplexStream/readable
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die schreibgeschützte **`readable`**-Eigenschaft der [`WebTransportDatagramDuplexStream`](/de/docs/Web/API/WebTransportDatagramDuplexStream)-Schnittstelle gibt eine [`ReadableStream`](/de/docs/Web/API/ReadableStream)-Instanz zurück, die verwendet werden kann, um unzuverlässig eingehende Datagramme aus dem Stream zu lesen.

"Unzuverlässig" bedeutet, dass die Übertragung der Daten nicht garantiert ist, noch eine Ankunft in einer bestimmten Reihenfolge. Dies ist in einigen Situationen in Ordnung und ermöglicht eine sehr schnelle Zustellung. Zum Beispiel könnte man regelmäßig Aktualisierungen des Spielzustands übertragen wollen, bei denen jede Nachricht die letzte überholt, die ankommt, und die Reihenfolge nicht wichtig ist.

## Wert

Ein [`ReadableStream`](/de/docs/Web/API/ReadableStream).

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
