---
title: "RTCIceCandidatePairStats: writable-Eigenschaft"
short-title: writable
slug: Web/API/RTCIceCandidatePairStats/writable
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("WebRTC")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die _veraltete_ [`RTCIceCandidatePairStats`](/de/docs/Web/API/RTCIceCandidatePairStats)
Eigenschaft **`writable`** gibt an, ob die Verbindung, die durch das Kandidatenpaar beschrieben wird, beschreibbar ist.

## Wert

Ein boolescher Wert, der `true` ist, wenn die Verbindung, die durch dieses
Kandidatenpaar beschrieben wird, eine Empfangsbestätigung (ACK) für mindestens eine ICE-
Anfrage erhalten hat _und_ die [STUN](/de/docs/Glossary/STUN)-Zustimmung nicht abgelaufen ist.

> [!NOTE]
> Diese Eigenschaft wurde Anfang 2017 aus der Spezifikation entfernt,
> weil Sie feststellen können, ob eine eingehende ICE-Anfrage zum Lesen verfügbar ist,
> indem Sie überprüfen, ob [`responsesReceived`](/de/docs/Web/API/RTCIceCandidatePairStats/responsesReceived) größer als 0 ist und die durch
> [`consentExpiredTimestamp`](/de/docs/Web/API/RTCIceCandidatePairStats/consentExpiredTimestamp) angegebene Zeit nicht vergangen ist:
>
> ```js
> if (
>   icpStats.responsesReceived > 0 &&
>   icpStats.consentExpiredTimestamp < performance.now()
> ) {
>   /* mindestens eine ICE-Antwort wurde empfangen */
> }
> ```

## Browser-Kompatibilität

{{Compat}}
