---
title: "WebSocket: bufferedAmount-Eigenschaft"
short-title: bufferedAmount
slug: Web/API/WebSocket/bufferedAmount
l10n:
  sourceCommit: eba47bb55d10e6dc73f61dbefc9d3da2abf1fd78
---

{{APIRef("WebSockets API")}}

Die schreibgeschützte Eigenschaft **`WebSocket.bufferedAmount`** gibt die Anzahl der Bytes zurück, die mittels Aufrufen von [`send()`](/de/docs/Web/API/WebSocket/send) in die Warteschlange gestellt, aber noch nicht ans Netzwerk übertragen wurden. Dieser Wert wird auf null zurückgesetzt, sobald alle in der Warteschlange stehenden Daten gesendet wurden. Der Wert wird nicht auf null zurückgesetzt, wenn die Verbindung geschlossen wird; wenn Sie weiterhin [`send()`](/de/docs/Web/API/WebSocket/send) aufrufen, wird dieser Wert weiter ansteigen.

## Wert

Ein `unsigned long`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
