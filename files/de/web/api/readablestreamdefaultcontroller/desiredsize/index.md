---
title: "ReadableStreamDefaultController: desiredSize-Eigenschaft"
short-title: desiredSize
slug: Web/API/ReadableStreamDefaultController/desiredSize
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`desiredSize`** der [`ReadableStreamDefaultController`](/de/docs/Web/API/ReadableStreamDefaultController)-Schnittstelle gibt die gewünschte Größe zurück, die erforderlich ist, um die interne Warteschlange des Streams zu füllen.

## Wert

Ein ganzzahliger Wert. Beachten Sie, dass dieser negativ sein kann, wenn die Warteschlange übervoll ist.

## Beispiele

Das [Lesbare Stream mit einer zugrunde liegenden Push-Quelle und Unterstützung für Rückstau](https://streams.spec.whatwg.org/#example-rs-push-backpressure) Beispiel in der Spezifikation bietet ein gutes Beispiel für die Verwendung von `desiredSize`, um manuell zu erkennen, wann der Stream voll ist und Rückstau anzuwenden, und auch für die Verwendung von [`ReadablestreamDefaultController.error()`](/de/docs/Web/API/ReadablestreamDefaultController/error), um manuell einen Stream-Fehler auszulösen, wenn ein anderer Teil des Systems, auf den er sich stützt, ausfällt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von lesbaren Streams](/de/docs/Web/API/Streams_API/Using_readable_streams)
- [`ReadableStreamDefaultController`](/de/docs/Web/API/ReadableStreamDefaultController)
