---
title: "WebTransportDatagramDuplexStream: writable-Eigenschaft"
short-title: writable
slug: Web/API/WebTransportDatagramDuplexStream/writable
l10n:
  sourceCommit: c4ced66f871dd67ff683526ecc38e9eb7ebb5c9a
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}{{non-standard_header}}

Die schreibgeschützte Eigenschaft **`writable`** der Schnittstelle [`WebTransportDatagramDuplexStream`](/de/docs/Web/API/WebTransportDatagramDuplexStream) gibt eine Instanz von [`WritableStream`](/de/docs/Web/API/WritableStream) zurück, die verwendet werden kann, um ausgehende Datagramme unzuverlässig in den Stream zu schreiben.

"Unzuverlässig" bedeutet, dass die Übertragung von Daten nicht garantiert ist, noch das Eintreffen in einer bestimmten Reihenfolge. Dies ist in einigen Situationen in Ordnung und ermöglicht eine sehr schnelle Lieferung. Zum Beispiel könnte man regelmäßig Updates des Spielstatus übertragen wollen, bei denen jede Nachricht die letzte, die ankommt, ersetzt und die Reihenfolge nicht wichtig ist.

[`createWritable()`](/de/docs/Web/API/WebTransportDatagramDuplexStream/createWritable) sollte vorzugsweise verwendet werden.

## Wert

Ein [`WritableStream`](/de/docs/Web/API/WritableStream).

## Beispiele

Siehe die Hauptseite der Schnittstelle [`WebTransportDatagramDuplexStream`](/de/docs/Web/API/WebTransportDatagramDuplexStream).

## Spezifikationen

Diese Funktion wurde aus der Spezifikation entfernt.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von WebTransport](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
- [WebSockets API](/de/docs/Web/API/WebSockets_API)
- [Streams API](/de/docs/Web/API/Streams_API)
- [WebTransport über HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)
