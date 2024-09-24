---
title: "RTCRtpReceiver: Methode getStats()"
short-title: getStats()
slug: Web/API/RTCRtpReceiver/getStats
l10n:
  sourceCommit: db78f0012bfcd536dcfd6aaf7a79a712bb4570b0
---

{{APIRef("WebRTC")}}

Die Methode **`getStats()`** des {{domxref("RTCRtpReceiver")}} fordert asynchron ein {{domxref("RTCStatsReport")}}-Objekt an, das Statistiken über eingehenden Verkehr auf dem zugehörigen {{domxref("RTCPeerConnection")}} bereitstellt. Dabei wird ein {{jsxref("Promise")}} zurückgegeben, dessen Erfüllungs-Handler aufgerufen wird, sobald die Ergebnisse verfügbar sind.

## Syntax

```js-nolint
getStats()
```

### Parameter

Keine.

### Rückgabewert

Ein JavaScript-{{jsxref("Promise")}}, das erfüllt wird, sobald die Statistiken verfügbar sind.
Der Erfüllungs-Handler des Promises erhält ein {{domxref("RTCStatsReport")}}-Objekt als Parameter, das die gesammelten Statistiken enthält.

Die zurückgegebenen Statistiken umfassen diejenigen aller Streams, die über den `RTCRtpReceiver` eingehen, sowie alle ihre Abhängigkeiten.

Diese können zum Beispiel Statistiken mit [Typen](/de/docs/Web/API/RTCStatsReport#the_statistic_types) umfassen: [`inbound-rtp`](/de/docs/Web/API/RTCInboundRtpStreamStats), [`candidate-pair`](/de/docs/Web/API/RTCIceCandidatePairStats), [`local-candidate`](/de/docs/Web/API/RTCIceCandidateStats), [`remote-candidate`](/de/docs/Web/API/RTCIceCandidateStats).

## Beispiele

Dieses einfache Beispiel ruft die Statistiken für einen `RTCRtpReceiver` ab und aktualisiert einen Element-{{domxref("HTMLElement/innerText", "innerText")}}, um die Anzahl der verlorenen Pakete anzuzeigen.

```js
receiver.getStats().then((stats) => {
  document.getElementById("lostpackets").innerText = stats.packetsLost;
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- {{domxref("RTCStatsReport")}}
- {{domxref("RTCRtpSender.getStats()")}}
- {{domxref("RTCPeerConnection.getStats()")}}
