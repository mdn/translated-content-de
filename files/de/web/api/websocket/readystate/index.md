---
title: "WebSocket: readyState Eigenschaft"
short-title: readyState
slug: Web/API/WebSocket/readyState
l10n:
  sourceCommit: e932acf254c5dd06e26798b9d8fe01ce8dab1fb7
---

{{APIRef("WebSockets API")}}

Die schreibgeschützte Eigenschaft **`WebSocket.readyState`** gibt den aktuellen Status der {{domxref("WebSocket")}}-Verbindung zurück.

## Wert

Eine Zahl, die einem der vier möglichen Statuskonstanten entspricht, die in der {{domxref("WebSocket")}}-Schnittstelle definiert sind:

- `WebSocket.CONNECTING` (0)
  - : Der Socket wurde erstellt. Die Verbindung ist noch nicht geöffnet.
- `WebSocket.OPEN` (1)
  - : Die Verbindung ist geöffnet und bereit zur Kommunikation.
- `WebSocket.CLOSING` (2)
  - : Die Verbindung wird gerade geschlossen.
- `WebSocket.CLOSED` (3)
  - : Die Verbindung ist geschlossen oder konnte nicht geöffnet werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
