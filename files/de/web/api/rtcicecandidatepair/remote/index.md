---
title: "RTCIceCandidatePair: remote-Eigenschaft"
short-title: remote
slug: Web/API/RTCIceCandidatePair/remote
l10n:
  sourceCommit: 7dae8cc1bbde35982df7baaa495714f45a064913
---

{{APIRef("WebRTC")}}

Die **`remote`**-Eigenschaft des [`RTCIceCandidatePair`](/de/docs/Web/API/RTCIceCandidatePair)-Interfaces gibt den [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate) an, der die Konfiguration des entfernten Endes einer funktionsfähigen WebRTC-Verbindung beschreibt.

Das `RTCIceCandidatePair` wird von der Methode [`getSelectedCandidatePair()`](/de/docs/Web/API/RTCIceTransport/getSelectedCandidatePair) des [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) zurückgegeben.

## Wert

Ein [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate).

## Beispiele

### Grundlegende Verwendung

Dieses einzeilige Beispiel erhält das aktuelle Kandidatenpaar und daraus den entfernten Kandidaten.

```js
const candidatePair = pc
  .getSenders()[0]
  .transport.transport.getSelectedCandidatePair();
const remoteCandidate = candidatePair.remote;
```

Das [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) wird gefunden, indem die Liste der [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)-Objekte für die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) `pc` abgerufen wird.
Im ersten `RTCRtpSender` erhalten wir das [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport), über das die Mediendaten übertragen werden, und schließlich daraus das `RTCIceTransport`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
