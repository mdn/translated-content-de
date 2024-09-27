---
title: "WebSocket: bufferedAmount-Eigenschaft"
short-title: bufferedAmount
slug: Web/API/WebSocket/bufferedAmount
l10n:
  sourceCommit: fb311d7305937497570966f015d8cc0eb1a0c29c
---

{{APIRef("WebSockets API")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`WebSocket.bufferedAmount`** gibt die Anzahl der Bytes zurück, die durch Aufrufe von [`send()`](/de/docs/Web/API/WebSocket/send) in die Warteschlange gestellt wurden, aber noch nicht an das Netzwerk übertragen wurden. Dieser Wert wird auf null zurückgesetzt, sobald alle in der Warteschlange befindlichen Daten gesendet wurden. Dieser Wert wird nicht auf null zurückgesetzt, wenn die Verbindung geschlossen wird; wenn Sie weiterhin [`send()`](/de/docs/Web/API/WebSocket/send) aufrufen, wird dieser Wert weiter ansteigen.

## Wert

Ein `unsigned long`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
