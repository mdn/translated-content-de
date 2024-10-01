---
title: "RTCIceCandidatePairStats: writable-Eigenschaft"
short-title: writable
slug: Web/API/RTCIceCandidatePairStats/writable
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("WebRTC")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die _veraltete_ [`RTCIceCandidatePairStats`](/de/docs/Web/API/RTCIceCandidatePairStats)-Eigenschaft **`writable`** gibt an, ob die Verbindung, die durch das Kandidatenpaar beschrieben wird, beschreibbar ist.

## Wert

Ein boolescher Wert, der `true` ist, wenn die Verbindung, die durch dieses Kandidatenpaar beschrieben wird, eine Empfangsbestätigung (ACK) für mindestens eine ICE-Anfrage erhalten hat _und_ dass die {{Glossary("STUN", "STUN")}}-Genehmigung nicht abgelaufen ist.

> [!NOTE]
> Diese Eigenschaft wurde Anfang 2017 aus der Spezifikation entfernt, weil Sie bestimmen können, ob eine eingehende ICE-Anfrage lesbar ist, indem Sie überprüfen, ob [`responsesReceived`](/de/docs/Web/API/RTCIceCandidatePairStats/responsesReceived) größer als 0 ist und die Zeit, die durch [`consentExpiredTimestamp`](/de/docs/Web/API/RTCIceCandidatePairStats/consentExpiredTimestamp) festgelegt wird, nicht überschritten wurde:
>
> ```js
> if (
>   icpStats.responsesReceived > 0 &&
>   icpStats.consentExpiredTimestamp < performance.now()
> ) {
>   /* es wurde mindestens eine ICE-Antwort empfangen */
> }
> ```

## Browser-Kompatibilität

{{Compat}}
