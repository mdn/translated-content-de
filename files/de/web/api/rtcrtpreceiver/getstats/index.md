---
title: "RTCRtpReceiver: getStats()-Methode"
short-title: getStats()
slug: Web/API/RTCRtpReceiver/getStats
l10n:
  sourceCommit: db78f0012bfcd536dcfd6aaf7a79a712bb4570b0
---

{{APIRef("WebRTC")}}

Die Methode **`getStats()`** des [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) fordert asynchron ein [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport)-Objekt an, das Statistiken über den eingehenden Datenverkehr der zugehörigen [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) liefert. Sie gibt ein {{jsxref("Promise")}} zurück, dessen Erfüllungs-Handler aufgerufen wird, sobald die Ergebnisse verfügbar sind.

## Syntax

```js-nolint
getStats()
```

### Parameter

Keine.

### Rückgabewert

Ein JavaScript {{jsxref("Promise")}}, das erfüllt wird, sobald die Statistiken verfügbar sind. Der Erfüllungs-Handler des Promises erhält als Parameter ein [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport)-Objekt, das die gesammelten Statistiken enthält.

Die zurückgegebenen Statistiken umfassen diejenigen von allen Streams, die über den `RTCRtpReceiver` eingehend sind, sowie alle deren Abhängigkeiten.

Diese können beispielsweise Statistiken mit [Typen](/de/docs/Web/API/RTCStatsReport#the_statistic_types) beinhalten: [`inbound-rtp`](/de/docs/Web/API/RTCInboundRtpStreamStats), [`candidate-pair`](/de/docs/Web/API/RTCIceCandidatePairStats), [`local-candidate`](/de/docs/Web/API/RTCIceCandidateStats), [`remote-candidate`](/de/docs/Web/API/RTCIceCandidateStats).

## Beispiele

Dieses einfache Beispiel ruft die Statistiken für einen `RTCRtpReceiver` ab und aktualisiert das [`innerText`](/de/docs/Web/API/HTMLElement/innerText) eines Elements, um die Anzahl der verlorenen Pakete anzuzeigen.

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
- [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport)
- [`RTCRtpSender.getStats()`](/de/docs/Web/API/RTCRtpSender/getStats)
- [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats)
