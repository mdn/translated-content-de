---
title: "RTCAudioSourceStats: kind-Eigenschaft"
short-title: kind
slug: Web/API/RTCAudioSourceStats/kind
l10n:
  sourceCommit: d32ba6a7c5a4c43029b92fab2e78e3bedc00b63c
---

{{APIRef("WebRTC")}}

Die **`kind`**-Eigenschaft des {{domxref("RTCAudioSourceStats")}}-Wörterbuchs ist ein String mit dem Wert `audio`.

Das `kind` wird verwendet, um zwischen Audio- und Videomedienquellen zu unterscheiden, wenn ein {{domxref("RTCStatsReport")}} durchlaufen wird. Beide haben einen {{domxref("RTCAudioSourceStats.type", "Typ")}} von `media-source` (ein `kind` von `video` zeigt ein {{domxref("RTCVideoSourceStats")}}-Objekt an).

## Wert

Ein String mit dem Wert `audio`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
