---
title: "ReadableByteStreamController: desiredSize-Eigenschaft"
short-title: desiredSize
slug: Web/API/ReadableByteStreamController/desiredSize
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`desiredSize`**-Eigenschaft des [`ReadableByteStreamController`](/de/docs/Web/API/ReadableByteStreamController)-Interfaces ist eine schreibgeschützte Eigenschaft, die die Anzahl von Bytes zurückgibt, die benötigt werden, um die interne Warteschlange des Streams auf die "gewünschte Größe" zu füllen.

Der Wert wird vom Stream verwendet, um eine bevorzugte Flussrate zur zugrunde liegenden Quelle anzugeben. Quellen, die Drosselung oder das Anhalten ihres Datenzuflusses unterstützen (nicht alle tun dies!), sollten den Zufluss so steuern, dass die `desiredSize` des Stream-Puffers positiv und so nah wie möglich bei null bleibt.

Die `desiredSize` wird verwendet, um [Gegendruck](/de/docs/Web/API/Streams_API/Concepts#backpressure) von nachgelagerten Verbrauchern anzuwenden.

## Wert

Ein Integer. Beachten Sie, dass dieser Wert negativ sein kann, wenn die Warteschlange überfüllt ist.

Der Wert wird `null` sein, wenn der Stream einen Fehler hat, und `0`, wenn er geschlossen ist.

## Beispiele

Das Beispiel [A readable stream with an underlying push source and backpressure support](https://streams.spec.whatwg.org/#example-rs-push-backpressure) im Standard bietet ein gutes Beispiel dafür, wie `desiredSize` verwendet wird, um manuell zu erkennen, wenn der Stream voll ist und Gegendruck anzuwenden.

Während das Beispiel eine Standardquelle verwendet, sind die Konzepte genau gleich wie für lesbare Bytequellen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von lesbaren Byte-Streams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams)
- [`ReadableByteStreamController`](/de/docs/Web/API/ReadableByteStreamController)
