---
title: "RTCRtpSender: Methode getStats()"
short-title: getStats()
slug: Web/API/RTCRtpSender/getStats
l10n:
  sourceCommit: 829720f86ce858b9bb8cbe7aa9e0bea148915f8c
---

{{APIRef("WebRTC")}}

Die Methode **`getStats()`** des {{domxref("RTCRtpSender")}} fordert asynchron ein {{domxref("RTCStatsReport")}}-Objekt an, das Statistiken über den ausgehenden Verkehr auf dem {{domxref("RTCPeerConnection")}}, der den Sender besitzt, bereitstellt. Sie gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird, sobald die Ergebnisse verfügbar sind.

## Syntax

```js-nolint
getStats()
```

### Parameter

Keine.

### Rückgabewert

Ein JavaScript {{jsxref("Promise")}}, das erfüllt wird, sobald die Statistiken verfügbar sind.
Der Erfüllungshandler des Promises erhält als Parameter ein {{domxref("RTCStatsReport")}}-Objekt, das die gesammelten Statistiken enthält.

Das zurückgegebene `RTCStatsReport` sammelt die Statistiken für alle Streams, die mit dem `RTCRtpSender` gesendet werden, sowie die Statistiken für alle Abhängigkeiten, die diese Streams haben.

Diese können zum Beispiel Statistiken mit [Typen](/de/docs/Web/API/RTCStatsReport#the_statistic_types) beinhalten: [`outbound-rtp`](/de/docs/Web/API/RTCOutboundRtpStreamStats), [`candidate-pair`](/de/docs/Web/API/RTCIceCandidatePairStats), [`local-candidate`](/de/docs/Web/API/RTCIceCandidateStats), [`remote-candidate`](/de/docs/Web/API/RTCIceCandidateStats).

## Beispiele

Dieses einfache Beispiel ruft die Statistiken für einen `RTCRtpSender` ab und aktualisiert die {{domxref("HTMLElement/innerText", "innerText")}}-Eigenschaft eines Elements, um die aktuelle Round-Trip-Zeit für Anfragen auf dem Sender anzuzeigen.

```js
sender.getStats().then((stats) => {
  document.getElementById("currentRTT").innerText = stats.roundTripTime;
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- {{domxref("RTCStatsReport")}}
- {{domxref("RTCRtpReceiver.getStats()")}}
- {{domxref("RTCPeerConnection.getStats()")}}
