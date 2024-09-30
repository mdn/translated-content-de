---
title: "RTCIceCandidatePair: remote Eigenschaft"
short-title: remote
slug: Web/API/RTCIceCandidatePair/remote
l10n:
  sourceCommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{APIRef("WebRTC")}}

Die **`remote`**-Eigenschaft des **[`RTCIceCandidatePair`](/de/docs/Web/API/RTCIceCandidatePair)**-Wörterbuchs gibt den [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate) an, der die Konfiguration des entfernten Endes einer funktionierenden WebRTC-Verbindung beschreibt.

## Wert

Ein [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate), der die Konfiguration des entfernten Endes eines funktionierenden ICE-Kandidatenpaars beschreibt. Das `RTCIceCandidatePair` wird durch die Methode [`getSelectedCandidatePair()`](/de/docs/Web/API/RTCIceTransport/getSelectedCandidatePair) des [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) zurückgegeben.

## Beispiele

Dieses einzeilige Beispiel erhält das aktuelle Kandidatenpaar und daraus den entfernten Kandidaten.

```js
const candidatePair = pc
  .getSenders()[0]
  .transport.transport.getSelectedCandidatePair();
const remoteCandidate = candidatePair.remote;
```

Der [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) wird ermittelt, indem die Liste der [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)-Objekte für die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) `pc` abgerufen wird. Im ersten `RTCRtpSender` erhalten wir den [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport), über den die Mediendaten übertragen werden, und schließlich daraus den `RTCIceTransport`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
