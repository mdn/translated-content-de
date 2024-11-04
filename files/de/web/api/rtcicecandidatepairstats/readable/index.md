---
title: "RTCIceCandidatePairStats: readable Eigenschaft"
short-title: readable
slug: Web/API/RTCIceCandidatePairStats/readable
l10n:
  sourceCommit: 2c2b213b9a7d391732c94dd35928edf9ff34d8ed
---

{{APIRef("WebRTC")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die **`readable`** Eigenschaft des [`RTCIceCandidatePairStats`](/de/docs/Web/API/RTCIceCandidatePairStats) Dictionary gibt an, ob die Verbindung, die durch das Kandidatenpaar beschrieben wird, mindestens eine gültige eingehende ICE-Anfrage erhalten hat.

## Wert

Ein Boolean-Wert, der `true` ist, wenn die Verbindung, die durch dieses Kandidatenpaar beschrieben wird, mindestens eine gültige ICE-Anfrage erhalten hat und daher bereit ist, von ihr gelesen zu werden.

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
