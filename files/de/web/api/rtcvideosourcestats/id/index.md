---
title: "RTCVideoSourceStats: id-Eigenschaft"
short-title: id
slug: Web/API/RTCVideoSourceStats/id
l10n:
  sourceCommit: d32ba6a7c5a4c43029b92fab2e78e3bedc00b63c
---

{{APIRef("WebRTC")}}

Die **`id`**-Eigenschaft des {{domxref("RTCVideoSourceStats")}}-Wörterbuchs ist ein String, der das Objekt, für das dieses Objekt Statistiken bereitstellt, eindeutig identifiziert.

Mit der `id` können Sie dieses Statistikobjekt mit anderen in Beziehung setzen, um Statistiken im Laufe der Zeit für ein bestimmtes WebRTC-Objekt, wie eine {{domxref("RTCPeerConnection")}} oder einen {{domxref("RTCDataChannel")}}, zu überwachen.

## Wert

Ein String, der das Objekt, für das dieses `RTCVideoSourceStats`-Objekt Statistiken bereitstellt, eindeutig identifiziert.

Das Format des ID-Strings ist durch die Spezifikation nicht definiert, sodass Sie keinerlei Annahmen über den Inhalt des Strings oder darüber, dass das Format des Strings für einen bestimmten Objekttyp unverändert bleibt, machen können.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
