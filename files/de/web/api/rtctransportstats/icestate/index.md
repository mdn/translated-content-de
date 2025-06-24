---
title: "RTCTransportStats: iceState-Eigenschaft"
short-title: iceState
slug: Web/API/RTCTransportStats/iceState
l10n:
  sourceCommit: 185acd0fe4bd6d0f4a5c6d79fa46b1b748d09ea1
---

{{APIRef("WebRTC")}}

Die **`iceState`**-Eigenschaft des [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats)-Wörterbuchs ist ein String, der den aktuellen ICE-Status des zugrunde liegenden [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) anzeigt.

Dieser hat denselben Wert wie die entsprechende [`RTCIceTransport.state`](/de/docs/Web/API/RTCIceTransport/state)-Eigenschaft.

## Wert

Ein String, der einen der folgenden Werte haben wird: `new`, `checking`, `connected`, `completed`, `disconnected`, `failed` oder `closed`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
