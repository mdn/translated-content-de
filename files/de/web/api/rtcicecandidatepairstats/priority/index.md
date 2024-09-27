---
title: "RTCIceCandidatePairStats: Eigenschaft priority"
short-title: priority
slug: Web/API/RTCIceCandidatePairStats/priority
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("WebRTC")}}{{deprecated_header}}{{non-standard_header}}

Die _veraltete_ [`RTCIceCandidatePairStats`](/de/docs/Web/API/RTCIceCandidatePairStats)-Eigenschaft **`priority`** gibt die Priorität des Kandidatenpaares als Integer-Wert an. Je höher der Wert, desto wahrscheinlicher ist es, dass die WebRTC-Schicht das Kandidatenpaar auswählt, wenn es darum geht, eine Verbindung zwischen den beiden Peers herzustellen (oder wiederherzustellen).

## Wert

Ein Integer-Wert, der die Priorität dieses Kandidatenpaares im Vergleich zu anderen Paaren auf derselben Peer-Verbindung anzeigt. Je höher dieser Wert ist, desto besser schätzt die WebRTC-Schicht dieses Paar von Kandidaten im Vergleich zu den anderen ein, und desto wahrscheinlicher ist es, dass ein Paar zur Verwendung ausgewählt wird.

> [!NOTE]
> Diese Eigenschaft wurde aus der Spezifikation entfernt, da ihr Wert nicht garantiert genau mit einer JavaScript-Zahl dargestellt werden kann. Sie können ihren Wert mithilfe des Algorithmus berechnen, der in {{RFC(5245, "", "5.7.2")}} beschrieben ist, falls Sie diese Information benötigen und das Risiko akzeptieren können, dass das Ergebnis möglicherweise nicht vollständig genau ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
