---
title: "RTCDataChannelStats: id-Eigenschaft"
short-title: id
slug: Web/API/RTCDataChannelStats/id
l10n:
  sourceCommit: 7e6058c754c6d38bc15a16cf8e65f1e31139f05b
---

{{APIRef("WebRTC")}}

Die **`id`**-Eigenschaft des {{domxref("RTCDataChannelStats")}}-Wörterbuchs ist ein String, der das Objekt, für das dieses Objekt Statistiken bereitstellt, eindeutig identifiziert.

Mit der `id` können Sie dieses Statistikobjekt mit anderen korrelieren, um Statistiken im Laufe der Zeit für ein bestimmtes WebRTC-Objekt wie eine {{domxref("RTCPeerConnection")}} oder einen {{domxref("RTCDataChannel")}} zu überwachen.

## Wert

Ein String, der das Objekt, für das dieses `RTCDataChannelStats`-Objekt Statistiken bereitstellt, eindeutig identifiziert.

Das Format des ID-Strings ist nicht durch die Spezifikation definiert, sodass Sie nicht zuverlässig Annahmen über den Inhalt des Strings treffen oder davon ausgehen können, dass das Format des Strings für einen bestimmten Objekttyp unverändert bleibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
