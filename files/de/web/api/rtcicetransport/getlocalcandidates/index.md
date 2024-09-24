---
title: "RTCIceTransport: Methode getLocalCandidates()"
short-title: getLocalCandidates()
slug: Web/API/RTCIceTransport/getLocalCandidates
l10n:
  sourceCommit: 9f18116c362265a3dfb65185728548ec43cd12f4
---

{{APIRef("WebRTC")}}

Die **`getLocalCandidates()`** Methode der {{domxref("RTCIceTransport")}} Schnittstelle gibt ein Array von {{domxref("RTCIceCandidate")}} Objekten zurück, jeweils eines für jeden der Kandidaten, die vom lokalen Gerät während der aktuellen {{Glossary("ICE")}} Agentensitzung gesammelt wurden.

Die lokalen Kandidaten werden von dem ICE-Agenten in diese Liste aufgenommen, bevor sie dem lokalen Client-Code in einem {{domxref("RTCPeerConnection.icecandidate_event", "icecandidate")}} Ereignis übergeben werden, damit der Client die Kandidaten an den entfernten Peer weiterleiten kann.

## Syntax

```js-nolint
getLocalCandidates()
```

### Parameter

Keine.

### Rückgabewert

Ein JavaScript {{jsxref("Array")}}, das ein {{domxref("RTCIceCandidate")}} Objekt für jeden Kandidaten enthält, der bisher während der ICE-Kandidatensammlungssitzung identifiziert wurde.

Sie können diese lokalen Kandidaten nicht mit passenden entfernten Kandidaten zuordnen.
Um das bisher beste gefundene Paar zu ermitteln, rufen Sie {{domxref("RTCIceTransport.getSelectedCandidatePair()")}} auf.

## Beispiele

Dieses einfache Beispiel erhält die Liste der lokalen Kandidaten von der {{domxref("RTCIceTransport")}} für den ersten {{domxref("RTCRtpSender")}} auf der {{domxref("RTCPeerConnection")}}, und gibt dann alle Kandidaten in der Liste auf der Konsole aus.

```js
const localCandidates = pc
  .getSenders()[0]
  .transport.transport.getLocalCandidates();

localCandidates.forEach((candidate, index) => {
  console.log(`Candidate ${index}: ${candidate.candidate}`);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
