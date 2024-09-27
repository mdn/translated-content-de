---
title: "RTCInboundRtpStreamStats: pliCount Eigenschaft"
short-title: pliCount
slug: Web/API/RTCInboundRtpStreamStats/pliCount
l10n:
  sourceCommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{APIRef("WebRTC")}}

Die **`pliCount`**-Eigenschaft des
[`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)-Dictionaries gibt an, wie oft der
[`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver), der durch diese Statistik beschrieben wird, ein **Picture
Loss Indication** (**PLI**)-Paket an den Sender gesendet hat.

Ein PLI-Paket zeigt an, dass eine gewisse Menge kodierter Videodaten für ein oder mehrere
Frames verloren gegangen ist.

## Wert

Ein ganzzahliger Wert, der die Anzahl der Male angibt, die ein PLI-Paket vom
[`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) an den Sender gesendet wurde. Diese Pakete werden vom Decoder des Empfängers gesendet, um den Encoder (den Sender) darüber zu informieren, dass eine undefinierte Menge kodierter Videodaten verloren gegangen ist, die möglicherweise Frame-Grenzen überschreitet. Diese Informationen sind nur für Videostreams verfügbar.

Dies kann den Sender dazu veranlassen, ein vollständiges Frame zu senden, um dem Empfänger zu ermöglichen, sich neu zu synchronisieren, da verlorene Daten eine nicht wiederherstellbare Situation zum Dekodieren von Medien darstellen können. Der Hauptzweck dieser Nachricht ist jedoch, dem Sender die Möglichkeit zu geben, Techniken zur Minderung von Netzwerkleistungsproblemen in Betracht zu ziehen. Dies wird häufig durch Methoden wie erhöhte Kompression, verringerte Auflösung oder andere Möglichkeiten zur Reduzierung der Bitrate des Streams erreicht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{RFC(4585, "", "6.3.1")}}: Definition von "PLI Nachrichten" im Dokument _Extended RTP Profile for Real-time Transport Control Protocol (RTCP)-Based Feedback (RTP/AVPF)_.
