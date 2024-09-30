---
title: "RTCCodecStats: id-Eigenschaft"
short-title: id
slug: Web/API/RTCCodecStats/id
l10n:
  sourceCommit: 667d3fc3409c0524a1fb97a7f3d784606d12f48d
---

{{APIRef("WebRTC")}}

Die **`id`**-Eigenschaft des [`RTCCodecStats`](/de/docs/Web/API/RTCCodecStats)-Wörterbuchs ist ein String, der das Objekt, für das dieses Objekt Statistiken bereitstellt, eindeutig identifiziert.

Mit der `id` können Sie dieses Statistikobjekt mit anderen in Verbindung bringen, um Statistiken über die Zeit für ein bestimmtes WebRTC-Objekt zu überwachen, wie beispielsweise eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) oder einen [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel).

## Wert

Ein String, der das Objekt, für das dieses `RTCCodecStats`-Objekt Statistiken bereitstellt, eindeutig identifiziert.

Das Format der ID-Zeichenfolge ist von der Spezifikation nicht definiert, daher können Sie keine zuverlässigen Annahmen über den Inhalt der Zeichenfolge treffen oder davon ausgehen, dass das Format der Zeichenfolge für einen bestimmten Objekttyp unverändert bleibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
