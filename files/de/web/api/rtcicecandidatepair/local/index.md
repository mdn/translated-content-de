---
title: "RTCIceCandidatePair: lokale Eigenschaft"
short-title: lokal
slug: Web/API/RTCIceCandidatePair/local
l10n:
  sourceCommit: 29b4592a883de9b3848e34924b42ff195a7505a1
---

{{APIRef("WebRTC")}}

Die **`local`** Eigenschaft des **{{domxref("RTCIceCandidatePair")}}** Wörterbuchs gibt das {{domxref("RTCIceCandidate")}} an, welches die Konfiguration des lokalen Endes einer funktionierenden WebRTC-Verbindung beschreibt.

## Wert

Ein {{domxref("RTCIceCandidate")}}, der die Konfiguration des lokalen Endes eines funktionsfähigen Paares von ICE-Kandidaten beschreibt. Das `RTCIceCandidatePair` wird durch die {{domxref("RTCIceTransport")}} Methode {{domxref("RTCIceTransport.getSelectedCandidatePair", "getSelectedCandidatePair()")}} zurückgegeben.

## Beispiele

Dieses einzeilige Beispiel erhält das aktuelle Kandidatenpaar und daraus den lokalen Kandidaten.

```js
const candidatePair = pc
  .getSenders()[0]
  .transport.iceTransport.getSelectedCandidatePair();
const localCandidate = candidatePair.local;
```

Die {{domxref("RTCIceTransport")}} wird gefunden, indem die Liste der {{domxref("RTCRtpSender")}} Objekte für die {{domxref("RTCPeerConnection")}} `pc` abgerufen wird. Beim ersten `RTCRtpSender` erhalten wir das {{domxref("RTCDtlsTransport")}}, über das die Mediendaten übertragen werden, und schließlich davon die `RTCIceTransport`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
