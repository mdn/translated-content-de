---
title: "RTCIceCandidatePairStats: priority-Eigenschaft"
short-title: priority
slug: Web/API/RTCIceCandidatePairStats/priority
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("WebRTC")}}{{deprecated_header}}{{non-standard_header}}

Die _veraltete_ [`RTCIceCandidatePairStats`](/de/docs/Web/API/RTCIceCandidatePairStats)
Eigenschaft **`priority`** gibt die Priorität des Kandidatenpaares als Ganzzahl an. Je höher der Wert, desto wahrscheinlicher ist es, dass die WebRTC-Schicht das Kandidatenpaar auswählt, wenn es an der Zeit ist, eine Verbindung zwischen den beiden Peers herzustellen (oder wiederherzustellen).

## Wert

Ein ganzzahliger Wert, der die Priorität dieses Kandidatenpaares im Vergleich zu anderen Paaren derselben Peer-Verbindung angibt. Je höher dieser Wert, desto besser schätzt die WebRTC-Schicht dieses Kandidatenpaar im Vergleich zu anderen ein, und desto wahrscheinlicher wird ein Paar für die Verwendung ausgewählt.

> [!NOTE]
> Diese Eigenschaft wurde aus der Spezifikation entfernt, da ihr Wert nicht garantiert genau in einer JavaScript-Zahl dargestellt werden kann. Sie können seinen Wert mit dem Algorithmus berechnen, der in {{RFC(5245, "", "5.7.2")}} beschrieben ist, wenn Sie diese Information benötigen und das Risiko akzeptieren können, dass das Ergebnis möglicherweise nicht vollständig genau ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
