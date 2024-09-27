---
title: "RTCIceCandidatePair: lokale Eigenschaft"
short-title: lokal
slug: Web/API/RTCIceCandidatePair/local
l10n:
  sourceCommit: 29b4592a883de9b3848e34924b42ff195a7505a1
---

{{APIRef("WebRTC")}}

Die **`local`**-Eigenschaft des **[`RTCIceCandidatePair`](/de/docs/Web/API/RTCIceCandidatePair)**-Wörterbuchs gibt das [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate) an, das die Konfiguration des lokalen Endes einer funktionsfähigen WebRTC-Verbindung beschreibt.

## Wert

Ein [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate), das die Konfiguration des lokalen Endes eines funktionsfähigen Paars von ICE-Kandidaten beschreibt.
Das `RTCIceCandidatePair` wird von der [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport)-Methode [`getSelectedCandidatePair()`](/de/docs/Web/API/RTCIceTransport/getSelectedCandidatePair) zurückgegeben.

## Beispiele

Dieses einzeilige Beispiel erhält das aktuelle Kandidatenpaar und daraus den lokalen Kandidaten.

```js
const candidatePair = pc
  .getSenders()[0]
  .transport.iceTransport.getSelectedCandidatePair();
const localCandidate = candidatePair.local;
```

Das [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) wird gefunden, indem die Liste der [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)-Objekte für das [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) `pc` abgerufen wird.
Im ersten `RTCRtpSender` erhalten wir das [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport), über das die Mediendaten übertragen werden, und schließlich daraus das `RTCIceTransport`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
