---
title: "RTCIceCandidatePairStats: leseeigenschaft"
short-title: leseeigenschaft
slug: Web/API/RTCIceCandidatePairStats/readable
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("WebRTC")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die _veraltete_ Eigenschaft **`readable`** von {{domxref("RTCIceCandidatePairStats")}} gibt an, ob die Verbindung, die durch das Kandidatenpaar beschrieben wird, mindestens eine gültige eingehende ICE-Anforderung erhalten hat.

## Wert

Ein boolescher Wert, der `true` ist, wenn die durch dieses Kandidatenpaar beschriebene Verbindung mindestens eine gültige ICE-Anforderung erhalten hat und daher bereit ist, gelesen zu werden.

> [!NOTE]
> Diese Eigenschaft wurde Anfang 2017 aus der Spezifikation entfernt, da Sie feststellen können, ob die Verbindung lesbar ist, indem Sie überprüfen, ob {{domxref("RTCIceCandidatePairStats.requestsReceived", "requestsReceived")}} größer als 0 ist:
>
> ```js
> if (icpStats.requestsReceived > 0) {
>   /* mindestens eine ICE-Anforderung wurde empfangen */
> }
> ```

## Browser-Kompatibilität

{{Compat}}
