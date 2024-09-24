---
title: "RTCOutboundRtpStreamStats: pliCount-Eigenschaft"
short-title: pliCount
slug: Web/API/RTCOutboundRtpStreamStats/pliCount
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("WebRTC")}}

Die **`pliCount`**-Eigenschaft des
{{domxref("RTCOutboundRtpStreamStats")}}-Wörterbuchs gibt die Anzahl der Male an, die der
{{domxref("RTCRtpReceiver")}} des entfernten Peers ein **Picture Loss
Indication** (**PLI**)-Paket an den {{domxref("RTCRtpSender")}}
gesendet hat, für den dieses Objekt Statistiken bereitstellt.

Ein PLI-Paket zeigt an, dass eine
Menge kodierter Videodaten für einen oder mehrere Frames verloren gegangen ist.

## Wert

Ein ganzzahliger Wert, der die Anzahl der Male angibt, die ein PLI-Paket von
dem {{domxref("RTCRtpReceiver")}} des entfernten Peers an diesen Sender gesendet wurde. Diese werden vom Decoder des Empfängers gesendet, um den Encoder des Senders darüber zu informieren, dass eine undefinierte Menge kodierter Videodaten, die möglicherweise Frame-Grenzen überschreiten, verloren gegangen ist.

> [!NOTE]
> Diese Eigenschaft wird nur für Videostreams verwendet.

## Verwendungshinweise

Nach dem Empfang eines PLI-Pakets könnte der Sender darauf reagiert haben, indem er ein vollständiges Bild an den entfernten Peer gesendet hat, damit dieser sich wieder mit den Medien synchronisieren kann. Der Hauptzweck eines PLI-Pakets besteht jedoch darin, dem `RTCRtpSender`, für den dieses
`RTCOutboundRtpStreamStats`-Objekt Statistiken bereitstellt, die Berücksichtigung von Techniken zur Minderung von Netzwerkleistungsproblemen zu ermöglichen. Dies wird oft durch Methoden wie das Erhöhen der Komprimierung oder das Verringern der Auflösung erreicht, obwohl die zur Reduzierung der Bitrate des Streams verfügbaren Mechanismen von Codec zu Codec unterschiedlich sind.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{RFC(4585, "", "6.3.1")}}: Definition von "PLI-Nachrichten" im Dokument _Extended
  RTP Profile for Real-time Transport Control Protocol (RTCP)-Based Feedback
  (RTP/AVPF)_.
