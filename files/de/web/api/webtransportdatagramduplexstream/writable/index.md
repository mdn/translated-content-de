---
title: "WebTransportDatagramDuplexStream: writable-Eigenschaft"
short-title: writable
slug: Web/API/WebTransportDatagramDuplexStream/writable
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`writable`** des {{domxref("WebTransportDatagramDuplexStream")}}-Interfaces gibt eine Instanz von {{domxref("WritableStream")}} zurück, die verwendet werden kann, um nicht zuverlässig ausgehende Datagramme in den Stream zu schreiben.

"Nicht zuverlässig" bedeutet, dass die Übertragung von Daten nicht garantiert ist und dass Daten nicht in einer bestimmten Reihenfolge ankommen müssen. Dies ist in einigen Situationen in Ordnung und ermöglicht eine sehr schnelle Lieferung. Zum Beispiel könnten Sie regelmäßige Spielstatus-Updates übertragen wollen, bei denen jede Nachricht die letzte übertrifft, die ankommt, und die Reihenfolge keine Rolle spielt.

## Wert

Ein {{domxref("WritableStream")}}.

## Beispiele

Siehe die Hauptseite des {{domxref("WebTransportDatagramDuplexStream")}}-Interfaces.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- [Verwendung von WebTransport](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
- {{domxref("WebSockets API", "WebSockets API", "", "nocode")}}
- {{domxref("Streams API", "Streams API", "", "nocode")}}
- [WebTransport über HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)
