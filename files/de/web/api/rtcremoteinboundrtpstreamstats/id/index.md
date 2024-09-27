---
title: "RTCRemoteInboundRtpStreamStats: id-Eigenschaft"
short-title: id
slug: Web/API/RTCRemoteInboundRtpStreamStats/id
l10n:
  sourceCommit: cd494150381c2588d5b2f4c3425bd772eee8f29d
---

{{APIRef("WebRTC")}}

Die **`id`**-Eigenschaft des [`RTCRemoteInboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats)-Wörterbuchs ist ein String, der das Objekt, für das diese Statistik bereitgestellt wird, eindeutig identifiziert.

Mit der `id` können Sie dieses Statistikobjekt mit anderen in Verbindung bringen, um über die Zeit Statistiken für ein bestimmtes WebRTC-Objekt zu überwachen, wie zum Beispiel eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) oder einen [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel).

## Wert

Ein String, der das Objekt, für welches dieses `RTCRemoteInboundRtpStreamStats`-Objekt Statistiken bereitstellt, eindeutig identifiziert.

Das Format des ID-Strings ist nicht durch die Spezifikation definiert, sodass Sie keine verlässlichen Annahmen über den Inhalt des Strings treffen oder davon ausgehen können, dass das Format des Strings für einen bestimmten Objekttyp unverändert bleibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
