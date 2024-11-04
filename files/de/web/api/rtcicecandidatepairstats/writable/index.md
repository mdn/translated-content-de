---
title: "RTCIceCandidatePairStats: writable-Eigenschaft"
short-title: writable
slug: Web/API/RTCIceCandidatePairStats/writable
l10n:
  sourceCommit: 2c2b213b9a7d391732c94dd35928edf9ff34d8ed
---

{{APIRef("WebRTC")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die **`writable`**-Eigenschaft des [`RTCIceCandidatePairStats`](/de/docs/Web/API/RTCIceCandidatePairStats)-Wörterbuchs gibt an, ob die durch das Kandidatenpaar beschriebene Verbindung schreibbar ist.

## Wert

`true`, wenn die Verbindung, die durch dieses Kandidatenpaar beschrieben wird, eine Empfangsbestätigung (ACK) für mindestens eine ICE-Anfrage erhalten hat _und_ die {{Glossary("STUN", "STUN")}}-Zustimmung nicht abgelaufen ist.

> [!NOTE]
> Diese Eigenschaft ist veraltet.
> Sie können stattdessen feststellen, ob eine eingehende ICE-Anfrage lesbar ist, indem Sie prüfen, ob [`responsesReceived`](/de/docs/Web/API/RTCIceCandidatePairStats/responsesReceived) größer als 0 ist und die durch [`consentExpiredTimestamp`](/de/docs/Web/API/RTCIceCandidatePairStats/consentExpiredTimestamp) angegebene Zeit nicht überschritten wurde:
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
