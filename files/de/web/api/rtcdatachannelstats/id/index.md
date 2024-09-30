---
title: "RTCDataChannelStats: id-Eigenschaft"
short-title: id
slug: Web/API/RTCDataChannelStats/id
l10n:
  sourceCommit: 7e6058c754c6d38bc15a16cf8e65f1e31139f05b
---

{{APIRef("WebRTC")}}

Die **`id`**-Eigenschaft des [`RTCDataChannelStats`](/de/docs/Web/API/RTCDataChannelStats)-Wörterbuchs ist eine Zeichenkette, die das Objekt, für das dieses Objekt Statistiken bereitstellt, eindeutig identifiziert.

Mit der `id` können Sie dieses Statistikobjekt mit anderen korrelieren, um Statistiken über einen bestimmten Zeitraum für ein gegebenes WebRTC-Objekt, wie zum Beispiel eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) oder einen [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel), zu überwachen.

## Wert

Eine Zeichenkette, die das Objekt, für das dieses `RTCDataChannelStats`-Objekt Statistiken bereitstellt, eindeutig identifiziert.

Das Format der ID-Zeichenkette ist durch die Spezifikation nicht festgelegt, daher können Sie von den Inhalten der Zeichenkette nicht zuverlässig Annahmen treffen oder davon ausgehen, dass das Format der Zeichenkette für einen bestimmten Objekttyp unverändert bleibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
