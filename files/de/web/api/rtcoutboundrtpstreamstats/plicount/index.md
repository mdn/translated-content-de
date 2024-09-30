---
title: "RTCOutboundRtpStreamStats: pliCount-Eigenschaft"
short-title: pliCount
slug: Web/API/RTCOutboundRtpStreamStats/pliCount
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("WebRTC")}}

Die **`pliCount`**-Eigenschaft des
[`RTCOutboundRtpStreamStats`](/de/docs/Web/API/RTCOutboundRtpStreamStats)-Dictionaries gibt die Anzahl der Male an, zu denen der
entfernte Peer`s [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) ein **Picture Loss
Indication** (**PLI**)-Paket an den [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)
gesendet hat, für den dieses Objekt Statistiken bereitstellt.

Ein PLI-Paket zeigt an, dass eine gewisse Menge kodierter Videodaten für ein oder mehrere Frames verloren gegangen ist.

## Wert

Ein ganzzahliger Wert, der die Anzahl angibt, wie oft ein PLI-Paket von
dem `RTCRtpReceiver` des entfernten Peers an diesen Sender gesendet wurde. Diese werden vom Decoder des Empfängers gesendet, um den Encoder des Senders darüber zu informieren, dass eine undefinierte Menge an kodierten Videodaten,
die möglicherweise Frame-Grenzen überlappt, verloren gegangen ist.

> [!NOTE]
> Diese Eigenschaft wird nur für Videostreams verwendet.

## Verwendungshinweise

Beim Empfang eines PLI-Pakets hat der Sender möglicherweise mit dem Senden eines vollständigen Frames an den entfernten Peer reagiert, um es dem Peerm zu ermöglichen, sich mit den Medien neu zu synchronisieren. Der Hauptzweck eines PLI-Pakets besteht jedoch darin, dem `RTCRtpSender`, für den dieses
`RTCOutboundRtpStreamStats`-Objekt Statistiken bereitstellt, Techniken zu empfehlen, um Netzwerkleistungsprobleme zu mindern. Dies wird oft durch Methoden wie
Empfänger die Kompression zu erhöhen oder die Auflösung zu verringern erreicht, obwohl die Mechanismen, die zur Reduzierung der Bitrate des Streams zur Verfügung stehen, je nach Codec variieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{RFC(4585, "", "6.3.1")}}: Definition von "PLI messages" im Dokument _Extended
  RTP Profile for Real-time Transport Control Protocol (RTCP)-Based Feedback
  (RTP/AVPF)_.
