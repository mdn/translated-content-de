---
title: "RTCIceCandidatePairStats: priority-Eigenschaft"
short-title: priority
slug: Web/API/RTCIceCandidatePairStats/priority
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("WebRTC")}}{{non-standard_header}}

Die **`priority`**-Eigenschaft des [`RTCIceCandidatePairStats`](/de/docs/Web/API/RTCIceCandidatePairStats)-Wörterbuchs gibt die Priorität des Kandidatenpaars als ganzzahligen Wert an.

Je höher der Wert, desto wahrscheinlicher wird das WebRTC-Modul das Kandidatenpaar auswählen, wenn es an der Zeit ist, eine Verbindung zwischen den beiden Peers herzustellen (oder erneut herzustellen).

## Wert

Ein ganzzahliger Wert, der die Priorität dieses Kandidatenpaars im Vergleich zu anderen Paaren in derselben Peer-Verbindung angibt. Je höher dieser Wert, desto besser bewertet das WebRTC-Modul dieses Kandidatenpaar im Vergleich zu den anderen, und desto wahrscheinlicher wird ein Paar zur Nutzung ausgewählt.

> [!NOTE]
> Diese Eigenschaft wurde aus der Spezifikation entfernt, da ihr Wert nicht garantiert genau in einer JavaScript-Zahl dargestellt werden kann. Sie können ihren Wert mit dem in {{RFC(5245, "", "5.7.2")}} beschriebenen Algorithmus berechnen, wenn Sie diese Information benötigen und das Risiko akzeptieren können, dass das Ergebnis möglicherweise nicht vollständig genau ist.

## Spezifikationen

Diese Eigenschaft wurde aus der Spezifikation entfernt.

## Browser-Kompatibilität

{{Compat}}
