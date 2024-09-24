---
title: "ReadableByteStreamController: desiredSize-Eigenschaft"
short-title: desiredSize
slug: Web/API/ReadableByteStreamController/desiredSize
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`desiredSize`** schreibgeschützte Eigenschaft der {{domxref("ReadableByteStreamController")}}-Schnittstelle gibt die Anzahl der Bytes zurück, die benötigt werden, um die interne Warteschlange des Streams auf die "gewünschte Größe" zu füllen.

Der Wert wird vom Stream verwendet, um eine bevorzugte Flussrate zur zugrunde liegenden Quelle anzuzeigen. Quellen, die Drosselung oder Pausierung ihres Datenzuflusses unterstützen (nicht alle tun dies!), sollten den Zufluss so steuern, dass `desiredSize` des Stream-Puffers positiv und so nah wie möglich bei Null gehalten wird.

Die `desiredSize` wird verwendet, um [Gegendruck](/de/docs/Web/API/Streams_API/Concepts#backpressure) von nachgelagerten Verbrauchern anzuwenden.

## Wert

Ein ganzzahliger Wert. Beachten Sie, dass dieser Wert negativ sein kann, wenn die Warteschlange überfüllt ist.

Der Wert wird `null` sein, wenn der Stream einen Fehler aufweist, und `0`, wenn er geschlossen ist.

## Beispiele

Das Beispiel [Ein lesbarer Stream mit einer zugrunde liegenden Push-Quelle und Unterstützung für Gegendruck](https://streams.spec.whatwg.org/#example-rs-push-backpressure) in der Spezifikation bietet ein gutes Beispiel dafür, wie `desiredSize` verwendet wird, um manuell zu erkennen, wann der Stream voll ist und Gegendruck angewendet werden kann.

Während das Beispiel eine Standardquelle verwendet, sind die Konzepte genau die gleichen wie bei lesbaren Bytequellen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von lesbaren Bytestreams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams)
- {{domxref("ReadableByteStreamController")}}
