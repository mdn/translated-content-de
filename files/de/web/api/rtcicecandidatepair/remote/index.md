---
title: "RTCIceCandidatePair: remote-Eigenschaft"
short-title: remote
slug: Web/API/RTCIceCandidatePair/remote
l10n:
  sourceCommit: e57e3fdd4ab6fb372ddc3d78e5b428f318202426
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

Die **`remote`**-Eigenschaft der [`RTCIceCandidatePair`](/de/docs/Web/API/RTCIceCandidatePair)-Schnittstelle gibt den [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate) an, der die Konfiguration des Remote-Endes einer funktionierenden WebRTC-Verbindung beschreibt.

Das `RTCIceCandidatePair` wird von der [`getSelectedCandidatePair()`](/de/docs/Web/API/RTCIceTransport/getSelectedCandidatePair)-Methode von [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) zurückgegeben.

## Wert

Ein [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate).

## Beispiele

### Grundlegende Nutzung

Dieses einzeilige Beispiel erhält das aktuelle Kandidatenpaar und daraus den Remote-Kandidaten.

```js
const candidatePair = pc
  .getSenders()[0]
  .transport.transport.getSelectedCandidatePair();
const remoteCandidate = candidatePair.remote;
```

Das [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) wird ermittelt, indem die Liste der [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)-Objekte für den [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) `pc` abgerufen wird.
Im ersten `RTCRtpSender` erhalten wir das [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport), über das die Mediendaten übertragen werden, und schließlich daraus das `RTCIceTransport`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
