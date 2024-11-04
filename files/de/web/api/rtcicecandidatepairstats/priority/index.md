---
title: "RTCIceCandidatePairStats: priority-Eigenschaft"
short-title: priority
slug: Web/API/RTCIceCandidatePairStats/priority
l10n:
  sourceCommit: 2c2b213b9a7d391732c94dd35928edf9ff34d8ed
---

{{APIRef("WebRTC")}}{{deprecated_header}}{{non-standard_header}}

Die **`priority`**-Eigenschaft des [`RTCIceCandidatePairStats`](/de/docs/Web/API/RTCIceCandidatePairStats)-Wörterbuchs gibt die Priorität des Kandidatenpaars als Ganzzahlwert an.

Je höher der Wert, desto wahrscheinlicher ist es, dass die WebRTC-Schicht das Kandidatenpaar auswählt, wenn es darum geht, eine Verbindung zwischen den beiden Peers herzustellen (oder wiederherzustellen).

## Wert

Ein Ganzzahlwert, der die Priorität dieses Kandidatenpaars im Vergleich zu anderen Paaren innerhalb derselben Peer-Verbindung anzeigt. Je höher dieser Wert, desto besser schätzt die WebRTC-Schicht dieses Kandidatenpaar im Vergleich zu den anderen ein, und desto wahrscheinlicher wird ein Paar zur Verwendung ausgewählt.

> [!NOTE]
> Diese Eigenschaft wurde aus der Spezifikation entfernt, da ihr Wert in einer JavaScript-Zahl nicht genau dargestellt werden kann. Sie können den Wert mit dem in {{RFC(5245, "", "5.7.2")}} beschriebenen Algorithmus berechnen, wenn Sie diese Information benötigen und das Risiko akzeptieren können, dass das Ergebnis möglicherweise nicht vollständig korrekt ist.

## Spezifikationen

Diese Eigenschaft wurde aus der Spezifikation entfernt.

## Browser-Kompatibilität

{{Compat}}
