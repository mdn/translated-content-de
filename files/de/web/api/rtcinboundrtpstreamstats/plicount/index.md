---
title: "RTCInboundRtpStreamStats: pliCount-Eigenschaft"
short-title: pliCount
slug: Web/API/RTCInboundRtpStreamStats/pliCount
l10n:
  sourceCommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{APIRef("WebRTC")}}

Die **`pliCount`**-Eigenschaft des
{{domxref("RTCInboundRtpStreamStats")}}-Wörterbuchs gibt die Anzahl der Male an, die der
{{domxref("RTCRtpReceiver")}}, der in diesen Statistiken beschrieben wird, ein **Picture
Loss Indication** (**PLI**)-Paket an den Sender gesendet hat.

Ein PLI-Paket zeigt an, dass eine Menge kodierter Videodaten für einen oder mehrere
Frames verloren gegangen ist.

## Wert

Ein ganzzahliger Wert, der die Anzahl der Male angibt, die ein PLI-Paket vom
{{domxref("RTCRtpReceiver")}} an den Sender gesendet wurde. Diese werden vom Decoder des Empfängers gesendet, um den Encoder (den Sender) darüber zu informieren, dass eine undefinierte Menge kodierter Videodaten, die möglicherweise die Frame-Grenzen überschreiten, verloren gegangen ist. Diese Informationen sind nur für Videostreams verfügbar.

Dies kann den Sender dazu veranlassen, ein vollständiges Frame zu senden, um dem Empfänger die Möglichkeit der Synchronisation zu geben, da der Verlust von Daten eine nicht wiederherstellbare Situation für die Dekodierung von Medien sein kann. Der Hauptzweck dieser Nachricht besteht jedoch darin, dem Sender die Möglichkeit zu geben, Techniken zur Minderung von Netzwerkleistungsproblemen in Betracht zu ziehen. Dies wird oft durch Methoden erreicht, wie die Erhöhung der Kompression, die Verringerung der Auflösung oder andere Möglichkeiten, um die Bitrate des Streams zu reduzieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{RFC(4585, "", "6.3.1")}}: Definition von "PLI-Nachrichten" im Dokument _Extended
  RTP Profile for Real-time Transport Control Protocol (RTCP)-Based Feedback
  (RTP/AVPF)_.
