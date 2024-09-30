---
title: "RTCIceCandidatePairStats: nominated-Eigenschaft"
short-title: nominated
slug: Web/API/RTCIceCandidatePairStats/nominated
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("WebRTC")}}

Die [`RTCIceCandidatePairStats`](/de/docs/Web/API/RTCIceCandidatePairStats) Eigenschaft
**`nominated`** gibt an, ob das durch das zugrunde liegende `RTCIceCandidatePair`
beschriebene Kandidatenpaar zur Verwendung als Konfiguration für die WebRTC-Verbindung
nominiert wurde.

## Wert

Ein boolescher Wert, der von der ICE-Schicht auf `true` gesetzt wird, wenn der kontrollierende
Benutzeragent angegeben hat, dass das Kandidatenpaar zur Konfiguration der WebRTC-Verbindung
zwischen den beiden Peers verwendet werden soll.

> [!NOTE]
> Wenn mehr als ein Kandidatenpaar gleichzeitig nominiert wird, wird dasjenige
> mit der höheren Priorität zur Verwendung ausgewählt.

Sobald ein Kandidatenpaar nominiert wurde und sich die beiden Peers jeweils so konfiguriert
haben, dass sie die angegebene Konfiguration verwenden, kann der ICE-Aushandlungsprozess
möglicherweise enden (oder er kann fortgesetzt werden, um der Verbindung die Anpassung an
sich ändernde Bedingungen zu ermöglichen).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
