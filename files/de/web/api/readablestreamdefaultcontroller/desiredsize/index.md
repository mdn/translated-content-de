---
title: "ReadableStreamDefaultController: desiredSize-Eigenschaft"
short-title: desiredSize
slug: Web/API/ReadableStreamDefaultController/desiredSize
l10n:
  sourceCommit: c16a9b4df8d0fed2512cdee329afdff73d0ff891
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die schreibgeschützte **`desiredSize`**-Eigenschaft der [`ReadableStreamDefaultController`](/de/docs/Web/API/ReadableStreamDefaultController)-Schnittstelle gibt die gewünschte Größe zurück, die erforderlich ist, um die interne Warteschlange des Streams zu füllen.

## Wert

Eine Zahl oder `null`.

Die Zahl kann negativ sein, wenn die Warteschlange übervoll ist. Wenn eine benutzerdefinierte Warteschlangenstrategie verwendet wird, können ihre Chunk-Größen dazu führen, dass die Zahl eine gebrochene Komponente hat. Der Wert ist `null`, wenn der Stream fehlerhaft ist, und `0`, wenn er geschlossen ist.

## Beispiele

Das [Ein lesbarer Stream mit einer zugrunde liegenden Push-Quelle und Unterstützung für Rückstau](https://streams.spec.whatwg.org/#example-rs-push-backpressure)-Beispiel in der Spezifikation bietet ein gutes Beispiel für die Verwendung von `desiredSize`, um manuell zu erkennen, wann der Stream voll ist und Rückstau anzuwenden, sowie für die Verwendung von [`ReadableStreamDefaultController.error()`](/de/docs/Web/API/ReadableStreamDefaultController/error), um manuell einen Stream-Fehler auszulösen, falls ein anderer Teil des Systems, auf den er sich stützt, fehlschlägt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von lesbaren Streams](/de/docs/Web/API/Streams_API/Using_readable_streams)
- [`ReadableStreamDefaultController`](/de/docs/Web/API/ReadableStreamDefaultController)
