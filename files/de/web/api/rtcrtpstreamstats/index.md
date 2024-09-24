---
title: RTCRtpStreamStats
slug: Web/API/RTCRtpStreamStats
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("WebRTC")}}

Das **`RTCRtpStreamStats`**-Wörterbuch wird von den Methoden {{domxref("RTCPeerConnection.getStats()")}}, {{domxref("RTCRtpSender.getStats()")}} und {{domxref("RTCRtpReceiver.getStats()")}} zurückgegeben, um detaillierte Statistiken über die WebRTC-Konnektivität bereitzustellen.

Während das Wörterbuch einen grundlegenden Satz von Eigenschaften hat, die in jedem dieser Fälle vorhanden sind, gibt es auch zusätzliche Eigenschaften, die je nach der Schnittstelle, auf der die Methode aufgerufen wird, hinzugefügt werden.

`RTCRtpStreamStats` ist die Basisklasse für alle RTP-bezogenen Statistikberichte.

> [!NOTE]
> Diese Schnittstelle wurde bis zu einem Spezifikationsupdate im Frühjahr 2017 `RTCRTPStreamStats` genannt.
> Überprüfen Sie die [Browser-Kompatibilität](#browser-kompatibilität)-Tabelle, um zu erfahren, ob und wann die Namensänderung in bestimmten Browsern umgesetzt wurde.

## Instanzeigenschaften

### Standardfelder für alle Medientypen

- {{domxref("RTCRtpStreamStats.codecId", "codecId")}}
  - : Ein String, der das Objekt eindeutig identifiziert, das inspiziert wurde, um das {{domxref("RTCCodecStats")}}-Objekt zu erstellen, das mit diesem {{Glossary("RTP")}}-Stream verknüpft ist.
- {{domxref("RTCRtpStreamStats.kind", "kind")}}
  - : Ein String, dessen Wert `"audio"` ist, wenn das zugehörige {{domxref("MediaStreamTrack")}} nur Audio enthält, oder `"video"`, wenn die Spur Video enthält. Dieser Wert wird dem Medientyp entsprechen, der durch {{domxref("RTCCodecStats.codec")}} angegeben ist, sowie der {{domxref("MediaStreamTrack.kind", "kind")}}-Eigenschaft der Spur. Früher als `mediaType` bezeichnet.
- {{domxref("RTCRtpStreamStats.ssrc", "ssrc")}}
  - : Die 32-Bit-Ganzzahl, die die Quelle der RTP-Pakete identifiziert, die dieses `RTCRtpStreamStats`-Objekt abdeckt. Dieser Wert wird gemäß der {{RFC(3550)}}-Spezifikation generiert.
- {{domxref("RTCRtpStreamStats.trackId", "trackId")}}
  - : Ein String, der das {{domxref("RTCMediaStreamTrackStats")}}-Objekt, das die zugehörige {{domxref("MediaStreamTrack")}} darstellt, eindeutig identifiziert. Dies ist _nicht_ dasselbe wie der Wert von {{domxref("MediaStreamTrack.id")}}.
- {{domxref("RTCRtpStreamStats.transportId", "transportId")}}
  - : Ein String, der das Objekt eindeutig identifiziert, das inspiziert wurde, um das {{domxref("RTCTransportStats")}}-Objekt zu erstellen, das mit diesem RTP-Stream verknüpft ist.

### Gemeinsame Instanzeigenschaften

Die folgenden Eigenschaften sind allen WebRTC-Statistikobjekten gemeinsam.

<!-- RTCStats -->

- `id`
  - : Ein String, der das Objekt, das überwacht wird, um diesen Satz von Statistiken zu erzeugen, eindeutig identifiziert.
- `timestamp`
  - : Ein {{domxref("DOMHighResTimeStamp")}}-Objekt, das die Zeit angibt, zu der die Stichprobe für dieses Statistikobjekt genommen wurde.
- `type`
  - : Ein String, der den Typ der Statistiken angibt, die das Objekt enthält.

### Nur lokal berechnete Messungen

Diese Eigenschaften werden lokal berechnet und sind nur für das Gerät verfügbar, das den Medienstream empfängt. Ihr Hauptzweck besteht darin, die Fehlerresilienz der Verbindung zu untersuchen, da sie Informationen über verlorene Pakete, verlorene Frames und die Stärke der Datenkompression liefern.

- {{domxref("RTCRtpStreamStats.firCount", "firCount")}}
  - : Eine Zählung der Gesamtanzahl der Full Intra Request (FIR)-Pakete, die vom Sender empfangen wurden. Diese Statistik ist nur für das Gerät verfügbar, das den Stream empfängt und steht nur für Videospuren zur Verfügung. Ein FIR-Paket wird vom empfangenden Ende des Streams gesendet, wenn es zurückfällt oder Pakete verloren hat und das Decodieren des Streams nicht fortsetzen kann; das sendende Ende des Streams empfängt das FIR-Paket und antwortet, indem es ein vollständiges Bild anstelle eines Delta-Bildes sendet, wodurch der Empfänger "aufholen" kann. Je höher diese Zahl ist, desto häufiger trat ein Problem dieser Art auf, was ein Zeichen für Netzwerküberlastung oder ein überlastetes Empfangsgerät sein kann.
- {{domxref("RTCRtpStreamStats.nackCount", "nackCount")}}
  - : Die Anzahl der Male, die der Empfänger den Sender darüber informiert hat, dass ein oder mehrere RTP-Pakete verloren gegangen sind, indem er ein Negative ACKnowledgement (NACK, auch "Generic NACK" genannt) an den Sender geschickt hat. Dieser Wert ist nur für den Empfänger verfügbar.
- {{domxref("RTCRtpStreamStats.pliCount", "pliCount")}}
  - : Die Anzahl der Male, die das empfangende Ende des Streams ein Picture Loss Indication (PLI)-Paket an den Sender gesendet hat, was darauf hinweist, dass einige der kodierten Videodaten für ein oder mehrere Frames verloren gegangen sind. Nur der Empfänger verfügt über diesen Wert, und er ist nur für Videospuren gültig.
- {{domxref("RTCRtpStreamStats.qpSum", "qpSum")}}
  - : Die Summe der Quantisierungsparameter (QP)-Werte, die allen bisher empfangenen Frames auf der Videospur, die durch dieses `RTCRtpStreamStats`-Objekt beschrieben werden, zugewiesen sind. Im Allgemeinen gilt: Je höher dieser Wert ist, desto stärker wurde die Videospur komprimiert. In Verbindung mit {{domxref("RTCReceivedRtpStreamStats.framesDecoded")}} oder {{domxref("RTCSentRtpStreamStats.framesEncoded")}} können Sie den durchschnittlichen QP über diese Frames annähernd berechnen, wobei zu beachten ist, dass Codecs die Quantisierungswerte oft sogar innerhalb von Frames variieren. Beachten Sie auch, dass die QP-Werte je nach Codec variieren können, daher ist dieser Wert nur potenziell nützlich, wenn er mit demselben Codec verglichen wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
