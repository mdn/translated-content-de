---
title: "RTCIceCandidatePairStats: nominated-Eigenschaft"
short-title: nominated
slug: Web/API/RTCIceCandidatePairStats/nominated
l10n:
  sourceCommit: 2c2b213b9a7d391732c94dd35928edf9ff34d8ed
---

{{APIRef("WebRTC")}}

Die **`nominated`**-Eigenschaft des [`RTCIceCandidatePairStats`](/de/docs/Web/API/RTCIceCandidatePairStats) Wörterbuchs gibt an, ob das durch das zugrunde liegende `RTCIceCandidatePair` beschriebene Kandidatenpaar nominiert wurde, um als Konfiguration für die WebRTC-Verbindung verwendet zu werden.

## Wert

Ein Boolean-Wert, der von der ICE-Schicht auf `true` gesetzt wird, wenn der kontrollierende User-Agent angezeigt hat, dass das Kandidatenpaar zur Konfiguration der WebRTC-Verbindung zwischen den beiden Gegenstellen verwendet werden soll.

> [!NOTE]
> Wenn mehrere Kandidatenpaare gleichzeitig nominiert werden, wird dasjenige ausgewählt, dessen Priorität höher ist.

Sobald ein Kandidatenpaar nominiert wurde und die beiden Gegenstellen sich jeweils umkonfiguriert haben, um die angegebene Konfiguration zu verwenden, kann der ICE-Aushandlungsprozess möglicherweise enden (oder er kann fortgesetzt werden, um der Verbindung zu ermöglichen, sich an veränderte Bedingungen anzupassen).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
