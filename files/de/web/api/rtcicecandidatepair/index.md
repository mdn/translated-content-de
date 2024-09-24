---
title: RTCIceCandidatePair
slug: Web/API/RTCIceCandidatePair
l10n:
  sourceCommit: fa1301aead2cee37516b7ad5a5ec2fb21e004227
---

{{APIRef("WebRTC")}}

Das **`RTCIceCandidatePair`**-Wörterbuch beschreibt ein Paar von ICE-Kandidaten, die zusammen eine Beschreibung einer brauchbaren Verbindung zwischen zwei WebRTC-Endpunkten bilden. Es wird als Rückgabewert von {{domxref("RTCIceTransport.getSelectedCandidatePair()")}} verwendet, um das derzeit vom ICE-Agenten ausgewählte Kandidatenpaar zu identifizieren.

## Instanz-Eigenschaften

- {{domxref("RTCIceCandidatePair.local", "local")}}
  - : Ein {{domxref("RTCIceCandidate")}}, der die Konfiguration des lokalen Endes der Verbindung beschreibt.
- {{domxref("RTCIceCandidatePair.remote", "remote")}}
  - : Der **`RTCIceCandidate`**, der die Konfiguration des entfernten Endes der Verbindung beschreibt.

## Beispiele

Siehe [`RTCIceTransport.onselectedcandidatepairchange`](/de/docs/Web/API/RTCIceTransport/selectedcandidatepairchange_event#examples) für Beispielcode.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
