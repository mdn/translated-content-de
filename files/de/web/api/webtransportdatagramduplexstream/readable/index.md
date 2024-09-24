---
title: "WebTransportDatagramDuplexStream: lesbare Eigenschaft"
short-title: lesbare
slug: Web/API/WebTransportDatagramDuplexStream/readable
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die schreibgeschützte **`readable`**-Eigenschaft der {{domxref("WebTransportDatagramDuplexStream")}}-Schnittstelle gibt eine {{domxref("ReadableStream")}}-Instanz zurück, die verwendet werden kann, um eingehende Datagramme aus dem Stream unzuverlässig zu lesen.

"Unzuverlässig" bedeutet, dass die Übertragung von Daten nicht garantiert ist, noch die Ankunft in einer bestimmten Reihenfolge. Dies ist in einigen Situationen akzeptabel und ermöglicht eine sehr schnelle Zustellung. Beispielsweise möchten Sie regelmäßige Spielzustandsupdates übertragen, bei denen jede Nachricht die letzte übertrifft, die eintrifft, und die Reihenfolge nicht wichtig ist.

## Wert

Ein {{domxref("ReadableStream")}}.

## Beispiele

Siehe die Hauptseite der {{domxref("WebTransportDatagramDuplexStream")}}-Schnittstelle.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von WebTransport](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
- {{domxref("WebSockets API", "WebSockets API", "", "nocode")}}
- {{domxref("Streams API", "Streams API", "", "nocode")}}
- [WebTransport über HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)
