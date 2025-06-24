---
title: "RTCTransportStats: dtlsState-Eigenschaft"
short-title: dtlsState
slug: Web/API/RTCTransportStats/dtlsState
l10n:
  sourceCommit: 185acd0fe4bd6d0f4a5c6d79fa46b1b748d09ea1
---

{{APIRef("WebRTC")}}

Die **`dtlsState`**-Eigenschaft des [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats)-Wörterbuchs ist ein String, der den aktuellen Zustand des zugrunde liegenden [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport) anzeigt.

Dieser hat denselben Wert wie die entsprechende [`RTCDtlsTransport.state`](/de/docs/Web/API/RTCDtlsTransport/state)-Eigenschaft.

## Wert

Ein String, der einen der folgenden Werte hat: `new`, `connecting`, `connected`, `closed`, `failed`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
