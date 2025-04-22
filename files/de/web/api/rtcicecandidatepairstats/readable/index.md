---
title: "RTCIceCandidatePairStats: readable-Eigenschaft"
short-title: readable
slug: Web/API/RTCIceCandidatePairStats/readable
l10n:
  sourceCommit: 7c03abf6c6abaf0013f6606cae9cb97717415cce
---

{{APIRef("WebRTC")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die **`readable`**-Eigenschaft des [`RTCIceCandidatePairStats`](/de/docs/Web/API/RTCIceCandidatePairStats)-Dictionaries gibt an, ob die durch das Kandidatenpaar beschriebene Verbindung mindestens eine gültige eingehende ICE-Anfrage erhalten hat.

## Wert

Ein boolescher Wert, der `true` ist, wenn die durch dieses Kandidatenpaar beschriebene Verbindung mindestens eine gültige ICE-Anfrage erhalten hat und daher bereit ist, gelesen zu werden.

> [!NOTE]
> Anstatt diesen Wert zu verwenden, sollten Sie feststellen, ob die Verbindung lesbar ist, indem Sie überprüfen, ob [`requestsReceived`](/de/docs/Web/API/RTCIceCandidatePairStats/requestsReceived) größer als 0 ist:
>
> ```js
> if (icpStats.requestsReceived > 0) {
>   /* mindestens eine ICE-Anfrage wurde empfangen */
> }
> ```

## Spezifikationen

Diese Eigenschaft wurde Anfang 2017 aus der Spezifikation entfernt.

## Browser-Kompatibilität

{{Compat}}
