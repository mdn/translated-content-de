---
title: RTCRtpStreamStats
slug: Web/API/RTCRtpStreamStats
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("WebRTC")}}

Das **`RTCRtpStreamStats`**-Wörterbuch wird von den Methoden [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats), [`RTCRtpSender.getStats()`](/de/docs/Web/API/RTCRtpSender/getStats) und [`RTCRtpReceiver.getStats()`](/de/docs/Web/API/RTCRtpReceiver/getStats) zurückgegeben, um detaillierte Statistiken über die WebRTC-Konnektivität bereitzustellen.

Während das Wörterbuch eine Basisstruktur von Eigenschaften besitzt, die in jedem dieser Fälle vorhanden sind, werden je nach Schnittstelle, auf die die Methode aufgerufen wird, zusätzliche Eigenschaften hinzugefügt.

`RTCRtpStreamStats` ist die Basisklasse für alle RTP-bezogenen Statistikberichte.

> [!NOTE]
> Diese Schnittstelle hieß bis zu einem Spezifikationsupdate im Frühjahr 2017 `RTCRTPStreamStats`.
> Überprüfen Sie die [Browser-Kompatibilität](#browser-kompatibilität)-Tabelle, um zu erfahren, ob und wann die Namensänderung in bestimmten Browsern implementiert wurde.

## Instanz-Eigenschaften

### Standardfelder, die für alle Medientypen enthalten sind

- [`codecId`](/de/docs/Web/API/RTCRtpStreamStats/codecId)
  - : Ein String, der das Objekt eindeutig identifiziert, welches inspiziert wurde, um das [`RTCCodecStats`](/de/docs/Web/API/RTCCodecStats)-Objekt zu erzeugen, das mit diesem {{Glossary("RTP", "RTP")}}-Stream verknüpft ist.
- [`kind`](/de/docs/Web/API/RTCRtpStreamStats/kind)
  - : Ein String, dessen Wert `"audio"` ist, wenn der zugehörige [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) nur Audio enthält, oder `"video"`, wenn der Track Video enthält. Dieser Wert stimmt mit dem Medientyp überein, der durch [`RTCCodecStats.codec`](/de/docs/Web/API/RTCCodecStats/codec) sowie mit der [`kind`](/de/docs/Web/API/MediaStreamTrack/kind)-Eigenschaft des Tracks angezeigt wird. Früher wurde dies `mediaType` genannt.
- [`ssrc`](/de/docs/Web/API/RTCRtpStreamStats/ssrc)
  - : Die 32-Bit-Zahl, die die Quelle der RTP-Pakete identifiziert, die dieses `RTCRtpStreamStats`-Objekt abdeckt. Dieser Wert wird gemäß der {{RFC(3550)}}-Spezifikation generiert.
- [`trackId`](/de/docs/Web/API/RTCRtpStreamStats/trackId)
  - : Ein String, der das [`RTCMediaStreamTrackStats`](/de/docs/Web/API/RTCMediaStreamTrackStats)-Objekt, das den zugehörigen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) darstellt, eindeutig identifiziert. Dies ist _nicht_ dasselbe wie der Wert von [`MediaStreamTrack.id`](/de/docs/Web/API/MediaStreamTrack/id).
- [`transportId`](/de/docs/Web/API/RTCRtpStreamStats/transportId)
  - : Ein String, der das Objekt eindeutig identifiziert, welches inspiziert wurde, um das [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats)-Objekt zu erzeugen, das mit diesem RTP-Stream verknüpft ist.

### Gemeinsame Instanz-Eigenschaften

Die folgenden Eigenschaften sind allen WebRTC-Statistikobjekten gemeinsam.

<!-- RTCStats -->

- `id
  - : Ein String, der das Objekt eindeutig identifiziert, das überwacht wird, um diese Statistikmenge zu erzeugen.
- `timestamp`
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Objekt, das den Zeitpunkt angibt, zu dem die Stichprobe für dieses Statistikobjekt entnommen wurde.
- `type`
  - : Ein String, der den Typ der Statistiken angibt, die das Objekt enthält.

### Nur lokal gemessene Daten

Diese Eigenschaften werden lokal berechnet und sind nur für das Gerät verfügbar, das den Medienstream empfängt. Ihr Hauptzweck ist es, die Fehlerbeständigkeit der Verbindung zu untersuchen, da sie Informationen über verlorene Pakete, verlorene Frames und den Kompressionsgrad der Daten liefern.

- [`firCount`](/de/docs/Web/API/RTCRtpStreamStats/firCount)
  - : Eine Zählung der Gesamtzahl von Full Intra Request (FIR)-Paketen, die vom Sender empfangen wurden. Diese Statistik ist nur für das Gerät verfügbar, das den Stream empfängt und nur für Videotracks verfügbar. Ein FIR-Paket wird vom empfangenden Ende des Streams gesendet, wenn es in Rückstand gerät oder Pakete verloren hat und den Stream nicht mehr dekodieren kann; das sendende Ende des Streams empfängt das FIR-Paket und reagiert, indem es einen vollständigen Frame anstelle eines Delta-Frames sendet, wodurch der Empfänger wieder "aufholen" kann. Je höher diese Zahl ist, desto öfter trat ein Problem dieser Art auf, was ein Zeichen für Netzwerküberlastung oder ein überlastetes Empfangsgerät sein kann.
- [`nackCount`](/de/docs/Web/API/RTCRtpStreamStats/nackCount)
  - : Die Anzahl der Male, die der Empfänger den Sender darüber informiert hat, dass ein oder mehrere RTP-Pakete durch das Senden eines Negative ACKnowledgement (NACK, auch "Generic NACK" genannt) Pakets an den Sender verloren gegangen sind. Dieser Wert ist nur für den Empfänger verfügbar.
- [`pliCount`](/de/docs/Web/API/RTCRtpStreamStats/pliCount)
  - : Die Anzahl der Male, die das empfangende Ende des Streams ein Picture Loss Indication (PLI)-Paket an den Sender gesendet hat, das anzeigt, dass ein Teil der kodierten Videodaten für ein oder mehrere Frames verloren gegangen ist. Nur der Empfänger hat diesen Wert, und er ist nur für Videotracks gültig.
- [`qpSum`](/de/docs/Web/API/RTCRtpStreamStats/qpSum)
  - : Die Summe der Quantisierungsparameter (QP)-Werte, die jedem bisher empfangenen Frame auf dem von diesem `RTCRtpStreamStats`-Objekt beschriebenen Videotrack zugeordnet sind. Im Allgemeinen gilt: Je höher diese Zahl ist, desto stärker komprimiert war der Videotrack. Kombiniert mit [`RTCReceivedRtpStreamStats.framesDecoded`](/de/docs/Web/API/RTCReceivedRtpStreamStats/framesDecoded) oder [`RTCSentRtpStreamStats.framesEncoded`](/de/docs/Web/API/RTCSentRtpStreamStats/framesEncoded) können Sie den durchschnittlichen QP über diese Frames abschätzen, wobei zu beachten ist, dass Codecs oft auch innerhalb einzelner Frames die Quantisierungswerte variieren. Außerdem ist zu bedenken, dass die QP-Werte von Codec zu Codec variieren können, weshalb dieser Wert nur dann von potenziellem Nutzen ist, wenn er gegen denselben Codec verglichen wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
