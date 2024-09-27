---
title: RTCRtpStreamStats
slug: Web/API/RTCRtpStreamStats
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("WebRTC")}}

Das **`RTCRtpStreamStats`**-Wörterbuch wird von den Methoden [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats), [`RTCRtpSender.getStats()`](/de/docs/Web/API/RTCRtpSender/getStats) und [`RTCRtpReceiver.getStats()`](/de/docs/Web/API/RTCRtpReceiver/getStats) zurückgegeben, um detaillierte Statistiken über WebRTC-Konnektivität bereitzustellen.

Während das Wörterbuch eine grundlegende Eigenschaftsmenge hat, die in jedem dieser Fälle vorhanden ist, gibt es auch zusätzliche Eigenschaften, die je nach der Schnittstelle, auf der die Methode aufgerufen wird, hinzugefügt werden.

`RTCRtpStreamStats` ist die Basisklasse für alle RTP-bezogenen Statistikberichte.

> [!NOTE]
> Diese Schnittstelle wurde bis zu einer Spezifikationsaktualisierung im Frühjahr 2017 `RTCRTPStreamStats` genannt.
> Überprüfen Sie die [Browser-Kompatibilität](#browser-kompatibilität) Tabelle, um zu erfahren, ob und wann die Namensänderung in spezifischen Browsern implementiert wurde.

## Instanz-Eigenschaften

### Standardfelder für alle Medientypen

- [`codecId`](/de/docs/Web/API/RTCRtpStreamStats/codecId)
  - : Ein String, der das Objekt eindeutig identifiziert, das inspiziert wurde, um das [`RTCCodecStats`](/de/docs/Web/API/RTCCodecStats)-Objekt zu erzeugen, das mit diesem [RTP](/de/docs/Glossary/RTP)-Stream verbunden ist.
- [`kind`](/de/docs/Web/API/RTCRtpStreamStats/kind)
  - : Ein String, dessen Wert `"audio"` ist, wenn der zugehörige [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) nur Audio enthält, oder `"video"`, wenn der Track Video enthält. Dieser Wert entspricht dem Medientyp, der durch [`RTCCodecStats.codec`](/de/docs/Web/API/RTCCodecStats/codec) angegeben ist, sowie der [`kind`](/de/docs/Web/API/MediaStreamTrack/kind)-Eigenschaft des Tracks. Früher `mediaType` genannt.
- [`ssrc`](/de/docs/Web/API/RTCRtpStreamStats/ssrc)
  - : Der 32-Bit-Integer, der die Quelle der RTP-Pakete identifiziert, die dieses `RTCRtpStreamStats`-Objekt abdeckt. Dieser Wert wird gemäß der {{RFC(3550)}}-Spezifikation generiert.
- [`trackId`](/de/docs/Web/API/RTCRtpStreamStats/trackId)
  - : Ein String, der das [`RTCMediaStreamTrackStats`](/de/docs/Web/API/RTCMediaStreamTrackStats)-Objekt, das den zugehörigen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) darstellt, eindeutig identifiziert. Dies ist _nicht_ dasselbe wie der Wert von [`MediaStreamTrack.id`](/de/docs/Web/API/MediaStreamTrack/id).
- [`transportId`](/de/docs/Web/API/RTCRtpStreamStats/transportId)
  - : Ein String, der das Objekt, das inspiziert wurde, um das [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats)-Objekt zu erzeugen, das mit diesem RTP-Stream verbunden ist, eindeutig identifiziert.

### Gemeinsame Instanz-Eigenschaften

Die folgenden Eigenschaften sind allen WebRTC-Statistikobjekten gemein.

<!-- RTCStats -->

- `id`
  - : Ein String, der das Objekt, das überwacht wird, um diese Sammlung von Statistiken zu erzeugen, eindeutig identifiziert.
- `timestamp`
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Objekt, das den Zeitpunkt angibt, zu dem die Stichprobe für dieses Statistikobjekt genommen wurde.
- `type`
  - : Ein String, der den Typ der Statistiken angibt, den das Objekt enthält.

### Nur lokal verfügbare Messungen

Diese Eigenschaften werden lokal berechnet und sind nur dem Gerät, das den Medienstrom empfängt, verfügbar. Ihr Hauptzweck ist es, die Fehlertoleranz der Verbindung zu untersuchen, da sie Informationen über verlorene Pakete, verlorene Frames und den Grad der Datenkomprimierung liefern.

- [`firCount`](/de/docs/Web/API/RTCRtpStreamStats/firCount)
  - : Eine Zählung der Gesamtanzahl an Full Intra Request (FIR)-Paketen, die vom Sender empfangen wurden. Diese Statistik ist nur dem Gerät, das den Stream empfängt, verfügbar und ist nur für Videotracks verfügbar. Ein FIR-Paket wird von der Empfangsseite des Streams gesendet, wenn es im Verzug ist oder Pakete verloren hat und den Stream nicht weiter decodieren kann; die sendende Seite des Streams empfängt das FIR-Paket und antwortet, indem sie statt eines Delta-Frames einen vollständigen Frame sendet, wodurch der Empfänger "aufrücken" kann. Je höher diese Zahl ist, desto häufiger trat ein Problem dieser Art auf, was ein Zeichen für Netzwerküberlastung oder ein überlastetes Empfangsgerät sein kann.
- [`nackCount`](/de/docs/Web/API/RTCRtpStreamStats/nackCount)
  - : Die Anzahl der Male, die der Empfänger den Sender darüber informiert hat, dass ein oder mehrere RTP-Pakete verloren gegangen sind, indem er ein Negative ACKnowledgement (NACK, auch "Generic NACK" genannt) Paket an den Sender geschickt hat. Dieser Wert ist nur dem Empfänger verfügbar.
- [`pliCount`](/de/docs/Web/API/RTCRtpStreamStats/pliCount)
  - : Die Anzahl der Male, die die Empfangsseite des Streams ein Picture Loss Indication (PLI)-Paket an den Sender geschickt hat, was darauf hinweist, dass einige kodierte Videodaten für ein oder mehrere Frames verloren gegangen sind. Nur der Empfänger hat diesen Wert, und er ist nur für Videotracks gültig.
- [`qpSum`](/de/docs/Web/API/RTCRtpStreamStats/qpSum)
  - : Die Summe der Quantization Parameter (QP)-Werte, die mit jedem bisher empfangenen Frame des von diesem `RTCRtpStreamStats`-Objekt beschriebenen Videotracks verbunden sind. Im Allgemeinen gilt: Je höher diese Zahl ist, desto stärker war der Videotrack komprimiert. In Kombination mit [`RTCReceivedRtpStreamStats.framesDecoded`](/de/docs/Web/API/RTCReceivedRtpStreamStats/framesDecoded) oder [`RTCSentRtpStreamStats.framesEncoded`](/de/docs/Web/API/RTCSentRtpStreamStats/framesEncoded) können Sie den durchschnittlichen QP über diese Frames annähernd bestimmen, wobei zu beachten ist, dass Codecs die Quantisierungswerte oft innerhalb von Frames variieren. Beachten Sie auch, dass die QP-Werte von Codec zu Codec unterschiedlich sein können, sodass dieser Wert nur dann potenziell nützlich ist, wenn er mit demselben Codec verglichen wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
