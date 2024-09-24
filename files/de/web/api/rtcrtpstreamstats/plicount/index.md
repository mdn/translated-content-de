---
title: "RTCRtpStreamStats: pliCount-Eigenschaft"
short-title: pliCount
slug: Web/API/RTCRtpStreamStats/pliCount
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("WebRTC")}}

Die **`pliCount`**-Eigenschaft des
{{domxref("RTCRtpStreamStats")}}-Wörterbuchs gibt an, wie oft das empfangende Ende des Streams ein **Picture Loss Indication** (**PLI**)
Paket an den Sender geschickt hat.

Ein PLI-Paket zeigt an, dass eine gewisse Menge an kodierten Videodaten für einen oder mehrere Frames verloren gegangen ist.

## Wert

Ein ganzzahliger Wert, der die Anzahl der Male angibt, die ein PLI-Paket vom Empfänger des Streams an den Sender gesendet wurde.

Eine PLI-Nachricht wird von Videodecodern (die am Empfangsende des Streams laufen) verwendet, um den Encoder (den Sender) darüber zu informieren, dass eine undefinierte Menge kodierter Videodaten, die möglicherweise Frame-Grenzen überschreitet, verloren gegangen ist.

Dies kann den Sender dazu veranlassen, einen vollständigen Frame zu senden, um dem Empfänger das erneute Synchronisieren zu ermöglichen, da verloren gegangene Daten eine unwiderrufliche Situation für die Dekodierung von Medien darstellen können. Der Hauptzweck dieser Nachricht ist jedoch, dem Sender die Möglichkeit zu geben, Techniken zur Minderung von Netzwerkleistungsproblemen in Betracht zu ziehen. Dies wird oft durch Methoden wie das Erhöhen der Kompression, das Verringern der Auflösung oder das Finden anderer Wege zur Reduzierung der Bitrate des Streams erreicht.

> [!NOTE]
> Dieser Wert ist nur auf der Empfängerseite und nur für
> Videomedien verfügbar.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{RFC(4585, "", "6.3.1")}}: Definition von "PLI-Nachrichten" im Dokument _Extended
  RTP Profile for Real-time Transport Control Protocol (RTCP)-Based Feedback
  (RTP/AVPF)_.
