---
title: "RTCIceCandidatePairStats: writable-Eigenschaft"
short-title: writable
slug: Web/API/RTCIceCandidatePairStats/writable
l10n:
  sourceCommit: 7c03abf6c6abaf0013f6606cae9cb97717415cce
---

{{APIRef("WebRTC")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die **`writable`**-Eigenschaft des [`RTCIceCandidatePairStats`](/de/docs/Web/API/RTCIceCandidatePairStats)-Wörterbuchs gibt an, ob die Verbindung, die durch das Kandidatenpaar beschrieben wird, beschreibbar ist.

## Wert

`true`, wenn die Verbindung, die durch dieses Kandidatenpaar beschrieben wird, eine Empfangsbestätigung (ACK) für mindestens eine ICE-Anfrage erhalten hat _und_ die {{Glossary("STUN", "STUN")}}-Zustimmung nicht abgelaufen ist.

> [!NOTE]
> Diese Eigenschaft ist veraltet.
> Stattdessen können Sie feststellen, ob eine eingehende ICE-Anfrage lesbar ist, indem Sie überprüfen, ob [`responsesReceived`](/de/docs/Web/API/RTCIceCandidatePairStats/responsesReceived) größer als 0 ist und dass der durch [`consentExpiredTimestamp`](/de/docs/Web/API/RTCIceCandidatePairStats/consentExpiredTimestamp) angegebene Zeitpunkt nicht überschritten wurde:
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
