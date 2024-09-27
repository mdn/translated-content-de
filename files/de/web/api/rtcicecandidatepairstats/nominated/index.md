---
title: "RTCIceCandidatePairStats: Eigenschaft nominated"
short-title: nominated
slug: Web/API/RTCIceCandidatePairStats/nominated
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("WebRTC")}}

Die [`RTCIceCandidatePairStats`](/de/docs/Web/API/RTCIceCandidatePairStats) Eigenschaft **`nominated`** gibt an, ob das durch das zugrunde liegende `RTCIceCandidatePair` beschriebene Kandidatenpaar dazu nominiert wurde, als Konfiguration für die WebRTC-Verbindung verwendet zu werden.

## Wert

Ein Boolescher Wert, der von der ICE-Schicht auf `true` gesetzt wird, wenn der kontrollierende Benutzeragent angegeben hat, dass das Kandidatenpaar zur Konfiguration der WebRTC-Verbindung zwischen den beiden Peers verwendet werden soll.

> [!NOTE]
> Wenn mehrere Kandidatenpaare gleichzeitig nominiert werden, wird das mit der höheren Priorität zur Verwendung ausgewählt.

Sobald ein Kandidatenpaar nominiert wurde und sich beide Peers auf die angegebene Konfiguration umgestellt haben, kann der ICE-Verhandlungsprozess möglicherweise enden (oder er kann fortgesetzt werden, um der Verbindung die Anpassung an sich ändernde Bedingungen zu ermöglichen).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
