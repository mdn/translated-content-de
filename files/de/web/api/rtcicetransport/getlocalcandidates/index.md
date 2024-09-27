---
title: "RTCIceTransport: getLocalCandidates()-Methode"
short-title: getLocalCandidates()
slug: Web/API/RTCIceTransport/getLocalCandidates
l10n:
  sourceCommit: 6f0473b8ae412384093a81af49a74a696ea61a03
---

{{APIRef("WebRTC")}}

Die **`getLocalCandidates()`**-Methode der [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport)-Schnittstelle gibt ein Array von [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate)-Objekten zurück, wobei jedes Objekt einen der Kandidaten repräsentiert, die vom lokalen Gerät während der aktuellen [ICE](/de/docs/Glossary/ICE)-Agentensitzung gesammelt wurden.

Die lokalen Kandidaten werden von dem ICE-Agenten in diese Liste aufgenommen, bevor sie dem Code des lokalen Clients in einem [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)-Ereignis übergeben werden, damit der Client die Kandidaten an den Remote-Peer weiterleiten kann.

## Syntax

```js-nolint
getLocalCandidates()
```

### Parameter

Keine.

### Rückgabewert

Ein JavaScript-{{jsxref("Array")}}, das ein [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate)-Objekt für jeden Kandidaten enthält, der bisher während der ICE-Kandidatensammlungs-Sitzung identifiziert wurde.

Sie können diese lokalen Kandidaten nicht mit passenden Remote-Kandidaten in Beziehung setzen. Um das bisher beste gefundene Paar zu ermitteln, rufen Sie [`RTCIceTransport.getSelectedCandidatePair()`](/de/docs/Web/API/RTCIceTransport/getSelectedCandidatePair) auf.

## Beispiele

Dieses einfache Beispiel erhält die Liste der lokalen Kandidaten vom [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) für den ersten [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) auf der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) und gibt dann alle Kandidaten in der Liste in der Konsole aus.

```js
const localCandidates = pc
  .getSenders()[0]
  .transport.iceTransport.getLocalCandidates();

localCandidates.forEach((candidate, index) => {
  console.log(`Candidate ${index}: ${candidate.candidate}`);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
