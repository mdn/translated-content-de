---
title: "RTCIceCandidatePairStats: writable-Eigenschaft"
short-title: writable
slug: Web/API/RTCIceCandidatePairStats/writable
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("WebRTC")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die _veraltete_ Eigenschaft **`writable`** des {{domxref("RTCIceCandidatePairStats")}}
berichtet, ob die Verbindung, die durch das Kandidatenpaar beschrieben wird, beschreibbar ist.

## Wert

Ein boolescher Wert, der `true` ist, wenn die Verbindung, die durch dieses
Kandidatenpaar beschrieben wird, eine Empfangsbestätigung (ACK) für mindestens eine ICE-
Anfrage erhalten hat _und_ dass die Zustimmung des {{Glossary("STUN")}} nicht abgelaufen ist.

> [!NOTE]
> Diese Eigenschaft wurde Anfang 2017 aus der Spezifikation entfernt,
> weil Sie feststellen können, ob eine eingehende ICE-Anfrage lesbar ist,
> indem Sie prüfen, ob {{domxref("RTCIceCandidatePairStats.responsesReceived", "responsesReceived")}} größer als 0 ist und die durch
> {{domxref("RTCIceCandidatePairStats.consentExpiredTimestamp", "consentExpiredTimestamp")}} angegebene Zeit nicht abgelaufen ist:
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
