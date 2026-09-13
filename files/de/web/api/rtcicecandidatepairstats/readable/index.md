---
title: 'RTCIceCandidatePairStats: Eigenschaft "readable"'
short-title: readable
slug: Web/API/RTCIceCandidatePairStats/readable
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("WebRTC")}}{{Non-standard_Header}}

Die **`readable`**-Eigenschaft des [`RTCIceCandidatePairStats`](/de/docs/Web/API/RTCIceCandidatePairStats)-Wörterbuchs gibt an, ob die durch das Kandidatenpaar beschriebene Verbindung mindestens eine gültige eingehende ICE-Anfrage erhalten hat.

## Wert

Ein Boolean-Wert, der `true` ist, wenn die durch dieses Kandidatenpaar beschriebene Verbindung mindestens eine gültige ICE-Anfrage erhalten hat und daher bereit ist, ausgelesen zu werden.

> [!NOTE]
> Anstatt diesen Wert zu verwenden, sollten Sie prüfen, ob die Verbindung lesbar ist, indem Sie feststellen, ob [`requestsReceived`](/de/docs/Web/API/RTCIceCandidatePairStats/requestsReceived) größer als 0 ist:
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
