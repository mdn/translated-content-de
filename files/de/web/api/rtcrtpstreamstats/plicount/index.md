---
title: "RTCRtpStreamStats: pliCount-Eigenschaft"
short-title: pliCount
slug: Web/API/RTCRtpStreamStats/pliCount
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("WebRTC")}}

Die **`pliCount`**-Eigenschaft des
[`RTCRtpStreamStats`](/de/docs/Web/API/RTCRtpStreamStats)-Wörterbuchs gibt die Anzahl der Male an, die das empfangende Ende des Streams ein **Picture Loss Indication** (**PLI**) Paket an den Sender geschickt hat.

Ein PLI-Paket zeigt an, dass eine gewisse Menge an kodierten Videodaten für ein oder mehrere Frames verloren gegangen ist.

## Wert

Ein ganzzahliger Wert, der angibt, wie oft ein PLI-Paket vom Empfänger des Streams an den Sender gesendet wurde.

Eine PLI-Nachricht wird von Videodecodern (die am empfangenden Ende des Streams laufen) verwendet, um den Encoder (den Sender) darüber zu informieren, dass eine undefinierte Menge an kodierten Videodaten, die möglicherweise Frame-Grenzen überschreitet, verloren gegangen ist.

Dies könnte den Sender dazu veranlassen, ein vollständiges Frame zu senden, um dem Empfänger die Möglichkeit zur Resynchronisation zu geben, da verlorene Daten eine unwiederbringliche Situation beim Dekodieren von Medien darstellen können. Der Hauptzweck dieser Nachricht ist es jedoch, dem Sender zu ermöglichen, Techniken zur Minderung von Netzwerkleistungsproblemen in Betracht zu ziehen. Dies wird häufig durch Methoden wie Erhöhung der Kompression, Verringerung der Auflösung oder andere Möglichkeiten zur Reduzierung der Bitrate des Streams erreicht.

> [!NOTE]
> Dieser Wert ist nur am Empfänger verfügbar und nur für Videomedien.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{RFC(4585, "", "6.3.1")}}: Definition von "PLI-Nachrichten" im Dokument _Extended
  RTP Profile for Real-time Transport Control Protocol (RTCP)-Based Feedback
  (RTP/AVPF)_.
