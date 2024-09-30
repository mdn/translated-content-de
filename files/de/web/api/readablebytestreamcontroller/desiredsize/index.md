---
title: "ReadableByteStreamController: desiredSize-Eigenschaft"
short-title: desiredSize
slug: Web/API/ReadableByteStreamController/desiredSize
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`desiredSize`** der Schnittstelle [`ReadableByteStreamController`](/de/docs/Web/API/ReadableByteStreamController) gibt die Anzahl der Bytes zurück, die erforderlich sind, um die interne Warteschlange des Streams auf ihre "gewünschte Größe" zu füllen.

Der Wert wird vom Stream verwendet, um eine bevorzugte Flussrate an die zugrunde liegende Quelle anzuzeigen. Quellen, die das Drosseln oder Pausieren ihres Datenzuflusses unterstützen (das tun nicht alle!), sollten den Zufluss so steuern, dass die `desiredSize` des Stream-Puffers positiv und so nahe wie möglich an null gehalten wird.

Die `desiredSize` wird verwendet, um [Backpressure](/de/docs/Web/API/Streams_API/Concepts#backpressure) von nachgelagerten Verbrauchern anzuwenden.

## Wert

Ein ganzzahliger Wert. Es ist zu beachten, dass dieser negativ sein kann, wenn die Warteschlange überfüllt ist.

Der Wert wird `null` sein, wenn der Stream fehlerhaft ist, und `0`, wenn er geschlossen ist.

## Beispiele

Das Beispiel [Ein lesbarer Stream mit einer zugrunde liegenden Push-Quelle und Backpressure-Unterstützung](https://streams.spec.whatwg.org/#example-rs-push-backpressure) in der Spezifikation bietet ein gutes Beispiel für die Verwendung von `desiredSize`, um manuell zu erkennen, wann der Stream voll ist und Backpressure anzuwenden.

Während das Beispiel eine Standardquelle verwendet, sind die Konzepte genau die gleichen wie für lesbare Bytequellen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von lesbaren Byte-Streams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams)
- [`ReadableByteStreamController`](/de/docs/Web/API/ReadableByteStreamController)
