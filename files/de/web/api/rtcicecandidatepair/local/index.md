---
title: "RTCIceCandidatePair: lokale Eigenschaft"
short-title: local
slug: Web/API/RTCIceCandidatePair/local
l10n:
  sourceCommit: 7dae8cc1bbde35982df7baaa495714f45a064913
---

{{APIRef("WebRTC")}}

Die **`local`**-Eigenschaft der Schnittstelle [`RTCIceCandidatePair`](/de/docs/Web/API/RTCIceCandidatePair) gibt den [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate) an, der die Konfiguration des lokalen Endes einer funktionierenden WebRTC-Verbindung beschreibt.

Das `RTCIceCandidatePair` wird von der Methode [`getSelectedCandidatePair()`](/de/docs/Web/API/RTCIceTransport/getSelectedCandidatePair) von [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) zurückgegeben.

## Wert

Ein [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate).

## Beispiele

### Grundlegende Verwendung

Dieses einzeilige Beispiel erhält das aktuelle Kandidatenpaar und ermittelt daraus den lokalen Kandidaten.

```js
const candidatePair = pc
  .getSenders()[0]
  .transport.iceTransport.getSelectedCandidatePair();
const localCandidate = candidatePair.local;
```

Der [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) wird gefunden, indem die Liste der [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)-Objekte für die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) `pc` abgerufen wird.
Im ersten `RTCRtpSender` erhalten wir den [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport), über den die Mediendaten übertragen werden, und schließlich daraus den `RTCIceTransport`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
