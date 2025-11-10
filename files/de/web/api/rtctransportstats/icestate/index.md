---
title: "RTCTransportStats: iceState-Eigenschaft"
short-title: iceState
slug: Web/API/RTCTransportStats/iceState
l10n:
  sourceCommit: bec7ef59277e752985de0ee963c86f6e8e4b3400
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

Die **`iceState`**-Eigenschaft des [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats)-Wörterbuchs ist ein String, der den aktuellen ICE-Status des zugrunde liegenden [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) angibt.

Dies hat denselben Wert wie die entsprechende [`RTCIceTransport.state`](/de/docs/Web/API/RTCIceTransport/state)-Eigenschaft.

## Wert

Ein String, der einen der folgenden Werte haben wird: `new`, `checking`, `connected`, `completed`, `disconnected`, `failed` oder `closed`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
