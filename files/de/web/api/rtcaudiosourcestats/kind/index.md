---
title: "RTCAudioSourceStats: kind-Eigenschaft"
short-title: kind
slug: Web/API/RTCAudioSourceStats/kind
l10n:
  sourceCommit: d32ba6a7c5a4c43029b92fab2e78e3bedc00b63c
---

{{APIRef("WebRTC")}}

Die **`kind`**-Eigenschaft des [`RTCAudioSourceStats`](/de/docs/Web/API/RTCAudioSourceStats)-Dictionaries ist ein String mit dem Wert `audio`.

Das `kind` wird verwendet, um zwischen Audio- und Video-Medienquellen zu unterscheiden, wenn ein [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) durchlaufen wird, die beide einen [`type`](/de/docs/Web/API/RTCAudioSourceStats/type) von `media-source` haben (ein `kind` von `video` weist auf ein [`RTCVideoSourceStats`](/de/docs/Web/API/RTCVideoSourceStats)-Objekt hin).

## Wert

Ein String mit dem Wert `audio`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
