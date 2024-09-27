---
title: "RTCCodecStats: id-Eigenschaft"
short-title: id
slug: Web/API/RTCCodecStats/id
l10n:
  sourceCommit: 667d3fc3409c0524a1fb97a7f3d784606d12f48d
---

{{APIRef("WebRTC")}}

Die **`id`**-Eigenschaft des [`RTCCodecStats`](/de/docs/Web/API/RTCCodecStats)-Wörterbuchs ist ein Zeichenfolge, die das Objekt, für das dieses Objekt Statistiken bereitstellt, eindeutig identifiziert.

Mit der `id` können Sie dieses Statistikobjekt mit anderen korrelieren, um Statistiken im Zeitverlauf für ein bestimmtes WebRTC-Objekt zu überwachen, wie z.B. eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) oder einen [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel).

## Wert

Eine Zeichenfolge, die das Objekt, für das dieses `RTCCodecStats`-Objekt Statistiken bereitstellt, eindeutig identifiziert.

Das Format der ID-Zeichenfolge ist nicht durch die Spezifikation definiert, sodass Sie keine verlässlichen Annahmen über den Inhalt der Zeichenfolge treffen können oder davon ausgehen können, dass das Format der Zeichenfolge für einen bestimmten Objekttyp gleich bleibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
