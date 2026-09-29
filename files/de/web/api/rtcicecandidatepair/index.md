---
title: RTCIceCandidatePair
slug: Web/API/RTCIceCandidatePair
l10n:
  sourceCommit: 4ccd81240a6d531962fab92886631885a90bfa3c
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

Das **`RTCIceCandidatePair`**-Dictionary beschreibt ein Paar von ICE-Kandidaten, die zusammen eine mögliche Verbindung zwischen zwei WebRTC-Endpunkten beschreiben. Es wird als Rückgabewert von [`RTCIceTransport.getSelectedCandidatePair()`](/de/docs/Web/API/RTCIceTransport/getSelectedCandidatePair) verwendet, um das aktuell vom ICE-Agenten ausgewählte Kandidatenpaar zu identifizieren.

## Instanzeigenschaften

- [`local`](/de/docs/Web/API/RTCIceCandidatePair/local) {{ReadOnlyInline}} {{experimental_inline}}
  - : Ein [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate), der die Konfiguration des lokalen Endes der Verbindung beschreibt.
- [`remote`](/de/docs/Web/API/RTCIceCandidatePair/remote) {{ReadOnlyInline}} {{experimental_inline}}
  - : Der **`RTCIceCandidate`**, der die Konfiguration des entfernten Endes der Verbindung beschreibt.

## Beispiele

Beispielcode finden Sie unter [`RTCIceTransport.onselectedcandidatepairchange`](/de/docs/Web/API/RTCIceTransport/selectedcandidatepairchange_event#examples).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
