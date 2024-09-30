---
title: "RTCRtpSender: getStats()-Methode"
short-title: getStats()
slug: Web/API/RTCRtpSender/getStats
l10n:
  sourceCommit: 829720f86ce858b9bb8cbe7aa9e0bea148915f8c
---

{{APIRef("WebRTC")}}

Die Methode **`getStats()`** des [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) fordert asynchron ein [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport)-Objekt an, das Statistiken über den ausgehenden Datenverkehr auf der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) bereitstellt, die den Sender besitzt. Sie gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird, wenn die Ergebnisse verfügbar sind.

## Syntax

```js-nolint
getStats()
```

### Parameter

Keine.

### Rückgabewert

Ein JavaScript {{jsxref("Promise")}}, das erfüllt wird, sobald die Statistiken verfügbar sind.
Der Erfüllungshandler des Promises erhält als Parameter ein [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport)-Objekt, das die gesammelten Statistiken enthält.

Das zurückgegebene `RTCStatsReport` akkumuliert die Statistiken für alle Streams, die mit dem `RTCRtpSender` gesendet werden, sowie die Statistiken für alle Abhängigkeiten dieser Streams.

Diese können beispielsweise Statistiken mit [Typen](/de/docs/Web/API/RTCStatsReport#the_statistic_types) umfassen: [`outbound-rtp`](/de/docs/Web/API/RTCOutboundRtpStreamStats), [`candidate-pair`](/de/docs/Web/API/RTCIceCandidatePairStats), [`local-candidate`](/de/docs/Web/API/RTCIceCandidateStats), [`remote-candidate`](/de/docs/Web/API/RTCIceCandidateStats).

## Beispiele

Dieses einfache Beispiel erhält die Statistiken für einen `RTCRtpSender` und aktualisiert das [`innerText`](/de/docs/Web/API/HTMLElement/innerText)-Element, um die aktuelle Round-Trip-Zeit für Anfragen an den Sender anzuzeigen.

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
- [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport)
- [`RTCRtpReceiver.getStats()`](/de/docs/Web/API/RTCRtpReceiver/getStats)
- [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats)
