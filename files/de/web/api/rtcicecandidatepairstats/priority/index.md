---
title: "RTCIceCandidatePairStats: Eigenschaft priority"
short-title: priority
slug: Web/API/RTCIceCandidatePairStats/priority
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("WebRTC")}}{{deprecated_header}}{{non-standard_header}}

Die _veraltete_ {{domxref("RTCIceCandidatePairStats")}}
Eigenschaft **`priority`** gibt die Priorität des Kandidatenpaares als Ganzzahlwert an. Je höher der Wert, desto wahrscheinlicher ist es, dass die WebRTC-Schicht das Kandidatenpaar auswählt, wenn es an der Zeit ist, eine Verbindung zwischen den beiden Peers zu etablieren (oder wiederherzustellen).

## Wert

Ein ganzzahliger Wert, der die Priorität dieses Kandidatenpaares im Vergleich zu anderen Paaren in derselben Peer-Verbindung anzeigt. Je höher dieser Wert, desto besser denkt die WebRTC-Schicht, dass dieses Paar von Kandidaten im Vergleich zu den anderen ist, und desto wahrscheinlicher wird ein Paar zur Verwendung ausgewählt.

> [!NOTE]
> Diese Eigenschaft wurde aus der Spezifikation entfernt, da ihr Wert nicht garantiert genau in einer JavaScript-Nummer dargestellt werden kann. Sie können seinen Wert mit dem im {{RFC(5245, "", "5.7.2")}} beschriebenen Algorithmus berechnen, wenn Sie diese Information benötigen und das Risiko akzeptieren können, dass das Ergebnis möglicherweise nicht vollständig genau ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
