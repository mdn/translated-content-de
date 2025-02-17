---
title: "RTCOutboundRtpStreamStats: scalabilityMode-Eigenschaft"
short-title: scalabilityMode
slug: Web/API/RTCOutboundRtpStreamStats/scalabilityMode
l10n:
  sourceCommit: 7f29fefe27ee8362a8b5f36255f942a2358cc8f8
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

Die **`scalabilityMode`**-Eigenschaft des [`RTCOutboundRtpStreamStats`](/de/docs/Web/API/RTCOutboundRtpStreamStats)-Wörterbuchs repräsentiert den Skalierbarkeitsmodus für den RTP-Stream, falls einer konfiguriert wurde. Ist keiner konfiguriert, ist die Eigenschaft nicht definiert.

Der Modus wird im [Scalable Video Coding (SVC)](https://www.w3.org/TR/webrtc-svc/) verwendet, um zu definieren, wie ein Videostream kodiert werden kann, um eine Anpassung an unterschiedliche Netzwerkbedingungen und Empfängerfähigkeiten zu ermöglichen. Verschiedene Codecs erlauben unterschiedliche Arten von Skalierbarkeit, wie zum Beispiel die Bereitstellung unterschiedlicher Auflösungen, verschiedener Bildraten oder verschiedener Qualitätsstufen für ein bestimmtes Video.

Der Modus kann beispielsweise konfiguriert werden, indem der Skalierbarkeitsmodus als Parameteroption in [`VideoEncoder.configure()`](/de/docs/Web/API/VideoEncoder/configure), [`RTCRtpSender.setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters) oder [`RTCPeerConnection.addTransceiver()`](/de/docs/Web/API/RTCPeerConnection/addTransceiver) angegeben wird.

> [!NOTE]
> Diese Eigenschaft ist für Audio-Streams nicht definiert.

## Wert

Ein String, der den konfigurierten Skalierbarkeitsmodus angibt, wie z. B. "L1T1". Wenn kein Modus konfiguriert wurde, ist die Eigenschaft nicht definiert.

Die Menge der erlaubten Modi ist in der [Scalable Video Coding (SVC) Extension for WebRTC](https://w3c.github.io/webrtc-svc/#scalabilitymodes*) (w3c.github.io/webrtc-svc) definiert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
