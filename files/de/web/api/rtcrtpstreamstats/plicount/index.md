---
title: "RTCRtpStreamStats: pliCount-Eigenschaft"
short-title: pliCount
slug: Web/API/RTCRtpStreamStats/pliCount
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("WebRTC")}}

Die **`pliCount`**-Eigenschaft des
[`RTCRtpStreamStats`](/de/docs/Web/API/RTCRtpStreamStats)-Wörterbuchs gibt an, wie oft das empfangende Ende des Streams ein **Picture Loss Indication** (**PLI**)-Paket an den Sender gesendet hat.

Ein PLI-Paket zeigt an, dass eine bestimmte Menge an kodierten Videodaten für ein oder mehrere Frames verloren gegangen ist.

## Wert

Ein ganzzahliger Wert, der angibt, wie oft ein PLI-Paket vom Empfänger des Streams an den Sender gesendet wurde.

Eine PLI-Nachricht wird von Videodekodierern (die am empfangenden Ende des Streams laufen) verwendet, um den Kodierer (den Sender) darüber zu informieren, dass eine undefinierte Menge an kodierten Videodaten verloren gegangen ist, die möglicherweise Frame-Grenzen überschreitet.

Dies kann den Sender veranlassen, ein vollständiges Frame zu senden, um es dem Empfänger zu ermöglichen, sich neu zu synchronisieren, da verlorene Daten eine nicht wiederherstellbare Situation für die Dekodierung von Medien darstellen können. Der Hauptzweck dieser Nachricht besteht jedoch darin, dem Sender die Möglichkeit zu geben, Techniken zur Minderung von Netzwerkleistungseinbußen in Erwägung zu ziehen. Dies wird oft durch Methoden wie erhöhte Kompression, Reduzierung der Auflösung oder andere Möglichkeiten zur Verringerung der Bitrate des Streams erreicht.

> [!NOTE]
> Dieser Wert ist nur am Empfänger verfügbar und nur für Videomedien.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{RFC(4585, "", "6.3.1")}}: Definition von "PLI-Nachrichten" im Dokument _Extended RTP Profile for Real-time Transport Control Protocol (RTCP)-Based Feedback (RTP/AVPF)_.
