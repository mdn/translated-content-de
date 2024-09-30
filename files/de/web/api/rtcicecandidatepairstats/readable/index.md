---
title: "RTCIceCandidatePairStats: readable-Eigenschaft"
short-title: readable
slug: Web/API/RTCIceCandidatePairStats/readable
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("WebRTC")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die _veraltete_ [`RTCIceCandidatePairStats`](/de/docs/Web/API/RTCIceCandidatePairStats)
Eigenschaft **`readable`** gibt an, ob die Verbindung, die durch das Kandidatenpaar beschrieben wird, mindestens einen gültigen eingehenden ICE-Antrag erhalten hat.

## Wert

Ein Boolean-Wert, der `true` ist, wenn die Verbindung, die durch dieses
Kandidatenpaar beschrieben wird, mindestens einen gültigen ICE-Antrag erhalten hat und daher bereit ist, ausgelesen zu werden.

> [!NOTE]
> Diese Eigenschaft wurde Anfang 2017 aus der Spezifikation entfernt,
> da Sie feststellen können, ob die Verbindung auslesbar ist, indem Sie überprüfen, ob [`requestsReceived`](/de/docs/Web/API/RTCIceCandidatePairStats/requestsReceived) größer als 0 ist:
>
> ```js
> if (icpStats.requestsReceived > 0) {
>   /* mindestens ein ICE-Antrag wurde empfangen */
> }
> ```

## Browser-Kompatibilität

{{Compat}}
