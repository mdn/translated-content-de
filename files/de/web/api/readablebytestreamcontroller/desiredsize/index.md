---
title: "ReadableByteStreamController: desiredSize-Eigenschaft"
short-title: desiredSize
slug: Web/API/ReadableByteStreamController/desiredSize
l10n:
  sourceCommit: c16a9b4df8d0fed2512cdee329afdff73d0ff891
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die schreibgeschützte **`desiredSize`**-Eigenschaft der [`ReadableByteStreamController`](/de/docs/Web/API/ReadableByteStreamController)-Schnittstelle gibt die Anzahl von Bytes zurück, die erforderlich sind, um die interne Warteschlange des Streams auf ihre "gewünschte Größe" zu füllen.

Der Wert wird vom Stream verwendet, um eine bevorzugte Flussrate für die zugrunde liegende Quelle anzugeben. Quellen, die eine Drosselung oder ein Pausieren ihres Datenzuflusses unterstützen (das tun nicht alle!), sollten den Zufluss so steuern, dass `desiredSize` des Stream-Puffers positiv und so nahe wie möglich bei null gehalten wird.

Das `desiredSize` wird verwendet, um [Gegendruck (backpressure)](/de/docs/Web/API/Streams_API/Concepts#backpressure) von nachgelagerten Verbrauchern anzuwenden.

## Wert

Eine Zahl oder `null`.

Die Zahl kann negativ sein, wenn die Warteschlange überfüllt ist. Obwohl die Warteschlangengröße in Bytes gemessen wird, kann eine gebrochene [Hohe Wasserstandsmarke (high water mark)](/de/docs/Web/API/Streams_API/Concepts#internal_queues_and_queuing_strategies) dazu führen, dass die Zahl eine gebrochene Komponente hat. Der Wert ist `null`, wenn der Stream einen Fehler hat und `0`, wenn er geschlossen ist.

## Beispiele

Das [Ein leserlicher Stream mit einer zugrunde liegenden Push-Quelle und Unterstützung für Gegendruck](https://streams.spec.whatwg.org/#example-rs-push-backpressure)-Beispiel in der Spezifikation bietet ein gutes Beispiel dafür, wie `desiredSize` verwendet wird, um manuell festzustellen, wann der Stream voll ist und Gegendruck anzuwenden.

Während das Beispiel eine Standardquelle verwendet, sind die Konzepte genau die gleichen wie bei lesbaren Bytequellen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von lesbaren Bytestreams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams)
- [`ReadableByteStreamController`](/de/docs/Web/API/ReadableByteStreamController)
