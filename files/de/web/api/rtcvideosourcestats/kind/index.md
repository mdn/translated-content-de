---
title: "RTCVideoSourceStats: kind-Eigenschaft"
short-title: kind
slug: Web/API/RTCVideoSourceStats/kind
l10n:
  sourceCommit: d32ba6a7c5a4c43029b92fab2e78e3bedc00b63c
---

{{APIRef("WebRTC")}}

Die **`kind`**-Eigenschaft des [`RTCVideoSourceStats`](/de/docs/Web/API/RTCVideoSourceStats)-Wörterbuchs ist ein String mit dem Wert `video`.

Der `kind`-Wert wird verwendet, um zwischen Audio- und Videomedienquellen zu unterscheiden, wenn man durch einen [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) iteriert, der beide einen [`type`](/de/docs/Web/API/RTCVideoSourceStats/type) von `media-source` haben (ein `kind` von `audio` weist auf ein [`RTCAudioSourceStats`](/de/docs/Web/API/RTCAudioSourceStats)-Objekt hin).

## Wert

Ein String mit dem Wert `video`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
