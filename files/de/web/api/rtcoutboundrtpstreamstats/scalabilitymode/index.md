---
title: "RTCOutboundRtpStreamStats: Eigenschaft scalabilityMode"
short-title: scalabilityMode
slug: Web/API/RTCOutboundRtpStreamStats/scalabilityMode
l10n:
  sourceCommit: 941ade970fd7ebad52af692b6ac27cfd96f94100
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

Die **`scalabilityMode`**-Eigenschaft des [`RTCOutboundRtpStreamStats`](/de/docs/Web/API/RTCOutboundRtpStreamStats)-Wörterbuchs repräsentiert den Skalierungsmodus für den RTP-Stream, falls einer konfiguriert wurde. Ist keiner konfiguriert, ist die Eigenschaft undefiniert.

Der Modus wird im [Scalable Video Coding (SVC)](https://w3c.github.io/webrtc-svc/) verwendet, um zu definieren, wie ein Videostream kodiert werden kann, um die Anpassung an unterschiedliche Netzwerkbedingungen und Empfängerfähigkeiten zu ermöglichen. Verschiedene Codecs erlauben unterschiedliche Arten der Skalierbarkeit, wie z.B. verschiedene Auflösungen, unterschiedliche Bildraten oder unterschiedliche Qualitätsstufen für ein bestimmtes Video.

Der Modus kann beispielsweise konfiguriert werden, indem der Skalierungsmodus als Parameteroption in [`VideoEncoder.configure()`](/de/docs/Web/API/VideoEncoder/configure), [`RTCRtpSender.setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters) oder [`RTCPeerConnection.addTransceiver()`](/de/docs/Web/API/RTCPeerConnection/addTransceiver) angegeben wird.

> [!NOTE]
> Die Eigenschaft ist für Audio-Streams undefiniert.

## Wert

Ein String, der den konfigurierten Skalierungsmodus angibt, wie z.B. "L1T1". Wenn kein Modus konfiguriert wurde, ist die Eigenschaft undefiniert.

Die Menge der zulässigen Modi wird im [Scalable Video Coding (SVC) Extension for WebRTC](https://w3c.github.io/webrtc-svc/#scalabilitymodes*) (w3c.github.io/webrtc-svc) definiert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
