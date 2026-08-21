---
title: "RTCIceCandidatePairStats: writable-Eigenschaft"
short-title: writable
slug: Web/API/RTCIceCandidatePairStats/writable
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("WebRTC")}}{{Non-standard_Header}}

Die **`writable`**-Eigenschaft des [`RTCIceCandidatePairStats`](/de/docs/Web/API/RTCIceCandidatePairStats)-Wörterbuchs gibt an, ob die durch das Kandidatenpaar beschriebene Verbindung beschreibbar ist.

## Wert

`true`, wenn die Verbindung, die durch dieses Kandidatenpaar beschrieben wird, eine Empfangsbestätigung (ACK) für mindestens eine ICE-Anfrage erhalten hat _und_ dass die {{Glossary("STUN", "STUN")}}-Zustimmung nicht abgelaufen ist.

> [!NOTE]
> Diese Eigenschaft ist veraltet.
> Sie können stattdessen feststellen, ob eine eingehende ICE-Anfrage lesbar ist, indem Sie überprüfen, ob [`responsesReceived`](/de/docs/Web/API/RTCIceCandidatePairStats/responsesReceived) größer als 0 ist und dass die durch [`consentExpiredTimestamp`](/de/docs/Web/API/RTCIceCandidatePairStats/consentExpiredTimestamp) angegebene Zeit nicht vergangen ist:
>
> ```js
> if (
>   icpStats.responsesReceived > 0 &&
>   icpStats.consentExpiredTimestamp < performance.now()
> ) {
>   /* mindestens eine ICE-Antwort wurde empfangen */
> }
> ```

## Spezifikationen

Diese Eigenschaft wurde Anfang 2017 aus der Spezifikation entfernt.

## Browser-Kompatibilität

{{Compat}}
