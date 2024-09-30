---
title: RTCIceCandidatePair
slug: Web/API/RTCIceCandidatePair
l10n:
  sourceCommit: fa1301aead2cee37516b7ad5a5ec2fb21e004227
---

{{APIRef("WebRTC")}}

Das **`RTCIceCandidatePair`**-Wörterbuch beschreibt ein Paar von ICE-Kandidaten, die zusammen eine Beschreibung einer möglichen Verbindung zwischen zwei WebRTC-Endpunkten darstellen. Es wird als Rückgabewert von [`RTCIceTransport.getSelectedCandidatePair()`](/de/docs/Web/API/RTCIceTransport/getSelectedCandidatePair) verwendet, um das derzeit vom ICE-Agenten ausgewählte Kandidatenpaar zu identifizieren.

## Instanzeigenschaften

- [`local`](/de/docs/Web/API/RTCIceCandidatePair/local)
  - : Ein [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate), das die Konfiguration des lokalen Endes der Verbindung beschreibt.
- [`remote`](/de/docs/Web/API/RTCIceCandidatePair/remote)
  - : Der **`RTCIceCandidate`**, der die Konfiguration des entfernten Endes der Verbindung beschreibt.

## Beispiele

Beispielcode finden Sie unter [`RTCIceTransport.onselectedcandidatepairchange`](/de/docs/Web/API/RTCIceTransport/selectedcandidatepairchange_event#examples).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
