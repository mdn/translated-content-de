---
title: "RTCVideoSourceStats: kind-Eigenschaft"
short-title: kind
slug: Web/API/RTCVideoSourceStats/kind
l10n:
  sourceCommit: d32ba6a7c5a4c43029b92fab2e78e3bedc00b63c
---

{{APIRef("WebRTC")}}

Die **`kind`**-Eigenschaft des {{domxref("RTCVideoSourceStats")}}-Wörterbuchs ist ein String mit dem Wert `video`.

Das `kind` wird verwendet, um zwischen Audio- und Video-Medienquellen zu unterscheiden, wenn ein {{domxref("RTCStatsReport")}} durchlaufen wird. Beide haben einen {{domxref("RTCVideoSourceStats.type", "Typ")}} von `media-source` (ein `kind` von `audio` zeigt auf ein {{domxref("RTCAudioSourceStats")}}-Objekt).

## Wert

Ein String mit dem Wert `video`.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
