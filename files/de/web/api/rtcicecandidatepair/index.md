---
title: RTCIceCandidatePair
slug: Web/API/RTCIceCandidatePair
l10n:
  sourceCommit: e57e3fdd4ab6fb372ddc3d78e5b428f318202426
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

Das **`RTCIceCandidatePair`** Dictionary beschreibt ein Paar von ICE-Kandidaten, die zusammen eine Beschreibung einer möglichen Verbindung zwischen zwei WebRTC-Endpunkten bilden. Es wird als Rückgabewert von [`RTCIceTransport.getSelectedCandidatePair()`](/de/docs/Web/API/RTCIceTransport/getSelectedCandidatePair) verwendet, um das aktuell vom ICE-Agenten ausgewählte Kandidatenpaar zu identifizieren.

## Instanz-Eigenschaften

- [`local`](/de/docs/Web/API/RTCIceCandidatePair/local) {{experimental_inline}}
  - : Ein [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate), der die Konfiguration des lokalen Endes der Verbindung beschreibt.
- [`remote`](/de/docs/Web/API/RTCIceCandidatePair/remote) {{experimental_inline}}
  - : Der **`RTCIceCandidate`**, der die Konfiguration des entfernten Endes der Verbindung beschreibt.

## Beispiele

Siehe [`RTCIceTransport.onselectedcandidatepairchange`](/de/docs/Web/API/RTCIceTransport/selectedcandidatepairchange_event#examples) für Beispielcode.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
