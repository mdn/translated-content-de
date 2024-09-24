---
title: "RTCIceCandidatePairStats: nominated-Eigenschaft"
short-title: nominated
slug: Web/API/RTCIceCandidatePairStats/nominated
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("WebRTC")}}

Die Eigenschaft **`nominated`** des {{domxref("RTCIceCandidatePairStats")}} gibt an, ob das durch das zugrunde liegende `RTCIceCandidatePair` beschriebene Kandidatenpaar nominiert wurde, um als Konfiguration für die WebRTC-Verbindung verwendet zu werden.

## Wert

Ein boolescher Wert, der von der ICE-Schicht auf `true` gesetzt wird, wenn der steuernde Benutzeragent angegeben hat, dass das Kandidatenpaar zur Konfiguration der WebRTC-Verbindung zwischen den beiden Peers verwendet werden soll.

> [!NOTE]
> Wenn mehr als ein Kandidatenpaar gleichzeitig nominiert wird, wird dasjenige mit der höheren Priorität zur Verwendung ausgewählt.

Sobald ein Kandidatenpaar nominiert wurde und die beiden Peers sich jeweils neu konfiguriert haben, um die angegebene Konfiguration zu verwenden, kann der ICE-Aushandlungsprozess potenziell beendet werden (oder er kann fortgesetzt werden, um der Verbindung zu ermöglichen, sich an wechselnde Bedingungen anzupassen).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
