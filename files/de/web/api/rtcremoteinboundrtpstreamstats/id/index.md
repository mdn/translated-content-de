---
title: "RTCRemoteInboundRtpStreamStats: id-Eigenschaft"
short-title: id
slug: Web/API/RTCRemoteInboundRtpStreamStats/id
l10n:
  sourceCommit: cd494150381c2588d5b2f4c3425bd772eee8f29d
---

{{APIRef("WebRTC")}}

Die **`id`**-Eigenschaft des {{domxref("RTCRemoteInboundRtpStreamStats")}} Wörterbuchs ist ein String, der das Objekt, für das diese Objekt Statistiken bereitstellt, eindeutig identifiziert.

Durch die Verwendung der `id` können Sie dieses Statistikobjekt mit anderen korrelieren, um Statistiken im Laufe der Zeit für ein gegebenes WebRTC-Objekt wie etwa eine {{domxref("RTCPeerConnection")}} oder einen {{domxref("RTCDataChannel")}} zu überwachen.

## Wert

Ein String, der das Objekt, für das dieses `RTCRemoteInboundRtpStreamStats` Objekt Statistiken bereitstellt, eindeutig identifiziert.

Das Format des ID-Strings ist nicht von der Spezifikation definiert, daher können Sie keine verlässlichen Annahmen über den Inhalt des Strings treffen oder davon ausgehen, dass das Format des Strings für einen gegebenen Objekttyp unverändert bleibt.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
