---
title: "RTCOutboundRtpStreamStats: pliCount-Eigenschaft"
short-title: pliCount
slug: Web/API/RTCOutboundRtpStreamStats/pliCount
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("WebRTC")}}

Die **`pliCount`**-Eigenschaft des [`RTCOutboundRtpStreamStats`](/de/docs/Web/API/RTCOutboundRtpStreamStats)-Wörterbuchs gibt die Anzahl der Male an, die der [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) des entfernten Peers ein **Picture Loss Indication** (**PLI**)-Paket an den [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) gesendet hat, für den dieses Objekt Statistiken bereitstellt.

Ein PLI-Paket zeigt an, dass eine bestimmte Menge an kodierten Videodaten für einen oder mehrere Frames verloren gegangen ist.

## Wert

Ein ganzzahliger Wert, der die Anzahl der Male angibt, die ein PLI-Paket an diesen Sender vom [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) des entfernten Peers gesendet wurde. Diese werden vom Decoder des Empfängers gesendet, um den Encoder des Senders darüber zu informieren, dass eine undefinierte Menge an kodierten Videodaten, die möglicherweise Frame-Grenzen überschreitet, verloren gegangen ist.

> [!NOTE]
> Diese Eigenschaft wird nur für Videostreams verwendet.

## Verwendungshinweise

Beim Empfang eines PLI-Pakets hat der Sender möglicherweise durch das Senden eines vollständigen Frames an den entfernten Peer geantwortet, um diesem die erneute Synchronisierung mit den Medien zu ermöglichen. Das Hauptziel eines PLI-Pakets ist jedoch, dem `RTCRtpSender`, für den dieses `RTCOutboundRtpStreamStats`-Objekt Statistiken bereitstellt, Überlegungen zu Techniken zur Abschwächung von Netzwerkleistungsproblemen zu ermöglichen. Dies wird oft durch Methoden wie Erhöhung der Kompression oder Verringerung der Auflösung erreicht, obwohl die Mechanismen zur Reduzierung der Bitrate des Streams je nach Codec variieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{RFC(4585, "", "6.3.1")}}: Definition von "PLI-Nachrichten" im Dokument _Extended RTP Profile for Real-time Transport Control Protocol (RTCP)-Based Feedback (RTP/AVPF)_.
