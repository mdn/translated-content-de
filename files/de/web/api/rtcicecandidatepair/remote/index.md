---
title: "RTCIceCandidatePair: remote-Eigenschaft"
short-title: remote
slug: Web/API/RTCIceCandidatePair/remote
l10n:
  sourceCommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{APIRef("WebRTC")}}

Die **`remote`**-Eigenschaft des **{{domxref("RTCIceCandidatePair")}}** Wörterbuchs gibt den {{domxref("RTCIceCandidate")}} an, der die Konfiguration des entfernten Endes einer funktionsfähigen WebRTC-Verbindung beschreibt.

## Wert

Ein {{domxref("RTCIceCandidate")}}, der die Konfiguration des entfernten Endes eines funktionsfähigen Paares von ICE-Kandidaten beschreibt. Der `RTCIceCandidatePair` wird durch die Methode {{domxref("RTCIceTransport")}} {{domxref("RTCIceTransport.getSelectedCandidatePair", "getSelectedCandidatePair()")}} zurückgegeben.

## Beispiele

Dieses einzeilige Beispiel erhält das aktuelle Kandidatenpaar und daraus den entfernten Kandidaten.

```js
const candidatePair = pc
  .getSenders()[0]
  .transport.transport.getSelectedCandidatePair();
const remoteCandidate = candidatePair.remote;
```

Der {{domxref("RTCIceTransport")}} wird durch Abrufen der Liste von {{domxref("RTCRtpSender")}} Objekten für die {{domxref("RTCPeerConnection")}} `pc` gefunden. Im ersten `RTCRtpSender` erhalten wir den {{domxref("RTCDtlsTransport")}}, über den die Mediendaten übertragen werden, und schließlich daraus den `RTCIceTransport`.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
