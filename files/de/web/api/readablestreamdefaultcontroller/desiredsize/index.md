---
title: "ReadableStreamDefaultController: desiredSize-Eigenschaft"
short-title: desiredSize
slug: Web/API/ReadableStreamDefaultController/desiredSize
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`desiredSize`**-schreibgeschützte Eigenschaft des [`ReadableStreamDefaultController`](/de/docs/Web/API/ReadableStreamDefaultController)-Interfaces gibt die gewünschte Größe zurück, die erforderlich ist, um die interne Warteschlange des Streams zu füllen.

## Wert

Ein Integer. Beachten Sie, dass dieser negativ sein kann, wenn die Warteschlange übervoll ist.

## Beispiele

Das Beispiel [A readable stream with an underlying push source and backpressure support](https://streams.spec.whatwg.org/#example-rs-push-backpressure) in der Spezifikation bietet ein gutes Beispiel für die Verwendung von `desiredSize`, um manuell zu erkennen, wann der Stream voll ist und Druck auszuüben, sowie die Verwendung von [`ReadablestreamDefaultController.error()`](/de/docs/Web/API/ReadablestreamDefaultController/error), um manuell einen Streamfehler auszulösen, wenn ein anderer Teil des Systems, auf den es angewiesen ist, fehlschlägt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von lesbaren Streams](/de/docs/Web/API/Streams_API/Using_readable_streams)
- [`ReadableStreamDefaultController`](/de/docs/Web/API/ReadableStreamDefaultController)
