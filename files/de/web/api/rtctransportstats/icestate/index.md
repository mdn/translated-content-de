---
title: "RTCTransportStats: iceState-Eigenschaft"
short-title: iceState
slug: Web/API/RTCTransportStats/iceState
l10n:
  sourceCommit: 361dd9caf4ac5db8a73cc33e4d8ee43fa2e35fcc
---

{{APIRef("WebRTC")}}

Die **`iceState`**-Eigenschaft des [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats)-Wörterbuchs ist ein String, der den aktuellen ICE-Zustand des zugrunde liegenden [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) angibt.

Diese hat denselben Wert wie die entsprechende [`RTCIceTransport.state`](/de/docs/Web/API/RTCIceTransport/state)-Eigenschaft.

## Wert

Ein String, der einen der folgenden Werte haben wird: `new`, `checking`, `connected`, `completed`, `disconnected`, `failed`, oder `closed`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
