---
title: "RTCInboundRtpStreamStats: pliCount-Eigenschaft"
short-title: pliCount
slug: Web/API/RTCInboundRtpStreamStats/pliCount
l10n:
  sourceCommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{APIRef("WebRTC")}}

Die **`pliCount`**-Eigenschaft des
[`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)-Wörterbuchs gibt die Anzahl der Male an, die der
[`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver), der durch diese Statistiken beschrieben wird, ein **Picture
Loss Indication** (**PLI**)-Paket an den Absender gesendet hat.

Ein PLI-Paket weist darauf hin, dass eine gewisse Menge an kodierten Videodaten für ein oder mehrere
Frames verloren gegangen ist.

## Wert

Ein ganzzahliger Wert, der die Anzahl der Male angibt, die ein PLI-Paket vom
[`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) an den Absender gesendet wurde. Diese werden vom Decoder des Empfängers gesendet, um den Encoder (den Absender) zu benachrichtigen, dass eine undefinierte Menge an kodierten Videodaten, die möglicherweise Frame-Grenzen überschreitet, verloren gegangen ist. Diese Information ist nur für Videostreams verfügbar.

Dies kann den Absender veranlassen, ein vollständiges Frame zu senden, um dem Empfänger die erneute Synchronisation zu ermöglichen, da verlorene Daten eine nicht wiederherstellbare Situation für die Dekodierung von Medien darstellen können. Der Hauptzweck dieser Nachricht besteht jedoch darin, dem Absender Techniken zur Minderung von Netzwerkleistungsproblemen in Betracht zu ziehen. Dies wird oft durch Methoden wie Erhöhung der Kompression, Reduzierung der Auflösung oder andere Wege zur Reduzierung der Bitrate des Streams erreicht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{RFC(4585, "", "6.3.1")}}: Definition von "PLI-Nachrichten" im Dokument _Extended
  RTP Profile for Real-time Transport Control Protocol (RTCP)-Based Feedback
  (RTP/AVPF)_.
