---
title: "ReadableStreamDefaultController: desiredSize-Eigenschaft"
short-title: desiredSize
slug: Web/API/ReadableStreamDefaultController/desiredSize
l10n:
  sourceCommit: 00f46adb5616d826821d63b11eac285faf1cf4a5
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`desiredSize`**-Schreibgeschützte Eigenschaft der [`ReadableStreamDefaultController`](/de/docs/Web/API/ReadableStreamDefaultController)-Schnittstelle gibt die gewünschte Größe zurück, die benötigt wird, um die interne Warteschlange des Streams zu füllen.

## Wert

Ein Integer. Beachten Sie, dass dieser negativ sein kann, wenn die Warteschlange überfüllt ist.

## Beispiele

Das [Lesbarer Stream mit einer zugrunde liegenden Push-Quelle und Unterstützung für Gegendruck](https://streams.spec.whatwg.org/#example-rs-push-backpressure)-Beispiel in der Spezifikation zeigt ein gutes Beispiel für die Verwendung von `desiredSize`, um manuell zu erkennen, wann der Stream voll ist und Gegendruck anzuwenden. Außerdem wird gezeigt, wie [`ReadableStreamDefaultController.error()`](/de/docs/Web/API/ReadableStreamDefaultController/error) verwendet wird, um manuell einen Stream-Fehler auszulösen, wenn ein anderer Teil des Systems, auf den er angewiesen ist, ausfällt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von lesbaren Streams](/de/docs/Web/API/Streams_API/Using_readable_streams)
- [`ReadableStreamDefaultController`](/de/docs/Web/API/ReadableStreamDefaultController)
