---
title: "RTCRemoteInboundRtpStreamStats: id-Eigenschaft"
short-title: id
slug: Web/API/RTCRemoteInboundRtpStreamStats/id
l10n:
  sourceCommit: cd494150381c2588d5b2f4c3425bd772eee8f29d
---

{{APIRef("WebRTC")}}

Die **`id`**-Eigenschaft des [`RTCRemoteInboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats)-Wörterbuchs ist ein String, der das Objekt, für das dieses Objekt Statistiken bereitstellt, eindeutig identifiziert.

Mit der `id` können Sie dieses Statistikobjekt mit anderen korrelieren, um Statistiken im Laufe der Zeit für ein bestimmtes WebRTC-Objekt, wie zum Beispiel ein [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) oder ein [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel), zu überwachen.

## Wert

Ein String, der das Objekt, für das dieses `RTCRemoteInboundRtpStreamStats`-Objekt Statistiken bereitstellt, eindeutig identifiziert.

Das Format der ID-Zeichenfolge ist nicht durch die Spezifikation festgelegt, sodass Sie keine verlässlichen Annahmen über den Inhalt der Zeichenfolge treffen können oder davon ausgehen können, dass das Format der Zeichenfolge für einen bestimmten Objekttyp unverändert bleibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
