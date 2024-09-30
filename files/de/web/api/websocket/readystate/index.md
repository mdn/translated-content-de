---
title: "WebSocket: readyState-Eigenschaft"
short-title: readyState
slug: Web/API/WebSocket/readyState
l10n:
  sourceCommit: fb311d7305937497570966f015d8cc0eb1a0c29c
---

{{APIRef("WebSockets API")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`WebSocket.readyState`** gibt den aktuellen Zustand der [`WebSocket`](/de/docs/Web/API/WebSocket)-Verbindung zurück.

## Wert

Eine Zahl, die einem der vier möglichen Zustandskonstanten entspricht, die in der [`WebSocket`](/de/docs/Web/API/WebSocket)-Schnittstelle definiert sind:

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
