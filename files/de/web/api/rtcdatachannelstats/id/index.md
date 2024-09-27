---
title: "RTCDataChannelStats: id-Eigenschaft"
short-title: id
slug: Web/API/RTCDataChannelStats/id
l10n:
  sourceCommit: 7e6058c754c6d38bc15a16cf8e65f1e31139f05b
---

{{APIRef("WebRTC")}}

Die **`id`**-Eigenschaft des [`RTCDataChannelStats`](/de/docs/Web/API/RTCDataChannelStats)-Wörterbuchs ist ein String, der das Objekt eindeutig identifiziert, für das dieses Objekt Statistiken bereitstellt.

Mit der `id` können Sie dieses Statistikobjekt mit anderen korrelieren, um Statistiken im Laufe der Zeit für ein bestimmtes WebRTC-Objekt zu überwachen, wie z. B. eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) oder einen [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel).

## Wert

Ein String, der das Objekt eindeutig identifiziert, für das dieses `RTCDataChannelStats`-Objekt Statistiken bereitstellt.

Das Format des ID-Strings ist nicht durch die Spezifikation definiert, daher können Sie keine zuverlässigen Annahmen über den Inhalt des Strings treffen oder davon ausgehen, dass das Format des Strings für einen bestimmten Objekttyp unverändert bleibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
