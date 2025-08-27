---
title: "RTCRtpSender: Methode setParameters()"
short-title: setParameters()
slug: Web/API/RTCRtpSender/setParameters
l10n:
  sourceCommit: f3da5803a7463dbd22f72611442507b1d7668adf
---

{{APIRef("WebRTC API")}}

Die **`setParameters()`** Methode des [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) Interface ändert die Konfiguration des Senders für [`track`](/de/docs/Web/API/RTCRtpSender/track), welches der [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) ist, für den der `RTCRtpSender` verantwortlich ist.

Mit anderen Worten, `setParameters()` aktualisiert die Konfiguration der {{Glossary("RTP", "RTP")}}-Übertragung sowie die Kodierungskonfiguration für einen bestimmten ausgehenden Medientrack auf der [WebRTC](/de/docs/Web/API/WebRTC_API)-Verbindung.

## Syntax

```js-nolint
setParameters(parameters)
```

### Parameter

- `parameters`
  - : Ein Parameterobjekt, das zuvor durch den Aufruf der Methode [`getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters) desselben Senders erhalten wurde, mit den gewünschten Änderungen an den Konfigurationsparametern des Senders.
    Diese Parameter umfassen potenzielle Codecs, die zur Kodierung des Senders [`track`](/de/docs/Web/API/RTCRtpSender/track) verwendet werden könnten.
    Die verfügbaren Parameter sind:
    - `encodings`
      - : Ein Array von Objekten, die jeweils die Parameter für einen einzelnen Codec spezifizieren, der zur Kodierung der Medientracks verwendet werden könnte.
        Die Eigenschaften der Objekte umfassen:
        - `active`
          - : Durch Setzen auf `true` (der Standardwert) wird diese Kodierung gesendet, während `false` das Senden und Verwenden stoppt (aber nicht die SSRC entfernt).

        - `codec` {{optional_inline}}
          - : Wählt den [Mediencodec](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs) aus, der für diesen RTP-Datenstrom der Kodierung verwendet wird.
            Wird kein Codec festgelegt, kann der User Agent einen beliebigen für das Senden ausgehandelten Codec auswählen.
            <!-- RTCRtpCodec -->
            - `channels` {{optional_inline}}
              - : Eine positive Ganzzahl, die die Anzahl von Kanälen angibt, die vom Codec unterstützt werden.
                Zum Beispiel spezifiziert ein Wert von 1 für Audiocodecs Mono-Ton, während 2 Stereo angibt.

            - `clockRate`
              - : Eine positive Ganzzahl, die die Taktrate des Codecs in Hertz (Hz) angibt.
                Die Taktrate ist die Rate, mit der der RTP-Zeitstempel des Codecs fortschreitet.
                Die meisten Codecs erlauben bestimmte Werte oder Wertebereiche.
                Die IANA pflegt eine [Liste von Codecs und deren Parametern](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-1), einschließlich ihrer Taktraten.

            - `mimeType`
              - : Ein String, der den MIME-Medientyp und Subtyp des Codecs angibt, spezifiziert als ein String im Format `"type/subtype"`.
                Die von RTP verwendeten MIME-Typ-Strings unterscheiden sich von denen, die anderswo verwendet werden.
                IANA pflegt ein [Register gültiger MIME-Typen](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-2).
                Siehe auch [Von WebRTC verwendete Codecs](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs) für Details zu potenziellen Codecs, die hier referenziert werden könnten.

            - `sdpFmtpLine` {{optional_inline}}
              - : Ein String, der die format-spezifischen Parameter angibt, die von der lokalen Beschreibung bereitgestellt werden.

        - `dtx` {{Deprecated_Inline}} {{Non-standard_Inline}}
          - : Wird nur für einen [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) verwendet, dessen [`kind`](/de/docs/Web/API/MediaStreamTrack/kind) `audio` ist. Diese Eigenschaft gibt an, ob diskontinuierliche Übertragung verwendet werden soll (eine Funktion, bei der ein Telefon ausgeschaltet oder das Mikrofon automatisch stummgeschaltet wird, wenn keine Sprachaktivität vorhanden ist).
            Der Wert kann `enabled` oder `disabled` sein.

        - `maxBitrate`
          - : Eine positive Ganzzahl, die die maximale Anzahl von Bits pro Sekunde angibt, die dem User Agent erlaubt ist, Tracks mit dieser Kodierung zuzuweisen.
            Andere Parameter können die Bitrate weiter begrenzen, wie zum Beispiel der Wert von `maxFramerate` oder die für den Transport oder das physische Netzwerk verfügbare Bandbreite.

            Der Wert wird unter Verwendung des Standard-Transportunabhängigen, anwendungsspezifischen Maximums (TIAS) berechnet, wie es durch {{RFC(3890, "", "6.2.2")}} definiert ist; dies ist die benötigte maximale Bandbreite ohne Berücksichtigung von Protokoll-Overheads von IP, TCP oder UDP usw.

            Beachten Sie, dass die Bitrate auf verschiedene Weise erreicht werden kann, abhängig von den Medien und der Kodierung.
            Für Video könnte eine niedrige Bitrate beispielsweise erreicht werden, indem Frames fallen gelassen werden (eine Bitrate von null könnte nur das Senden eines Frames erlauben), während ein Audiotrack möglicherweise aufhören muss zu spielen, wenn die Bitrate zu niedrig ist, um gesendet zu werden.

        - `maxFramerate`
          - : Ein Wert, der die maximale Anzahl von Frames pro Sekunde angibt, die für diese Kodierung erlaubt sind.
        - `priority`
          - : Ein String, der die Priorität des [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) angibt, was möglicherweise bestimmt, wie der User Agent die Bandbreite zwischen den Sendern zuteilt.
            Erlaubte Werte sind `very-low`, `low` (Standard), `medium`, `high`.
        - `rid`
          - : Ein String, der, falls gesetzt, eine _RTP-Stream-ID_ (_RID_) angibt, die mit der RID-Header-Erweiterung gesendet wird.
            Dieser Parameter kann mit `setParameters()` nicht geändert werden.
            Sein Wert kann nur gesetzt werden, wenn der Transceiver erstmals erstellt wird.

        - `scaleResolutionDownBy`
          - : Wird nur für Sender verwendet, deren Track's [`kind`](/de/docs/Web/API/MediaStreamTrack/kind) `video` ist. Dies ist ein Gleitkommawert, der einen Faktor angibt, um den das Video während der Kodierung verkleinert wird.
            Der Standardwert, 1.0, bedeutet, dass das Video in seiner Originalgröße kodiert wird.
            Ein Wert von 2.0 verkleinert die Videoframes um einen Faktor von 2 in jeder Dimension, was zu einem Video führt, das 1/4 der Originalgröße entspricht.
            Der Wert darf nicht kleiner als 1.0 sein (ein Versuch, das Video auf eine größere Größe zu skalieren, führt zu einem {{jsxref("RangeError")}}).

    - `transactionId`
      - : Ein String, der eine eindeutige ID enthält.
        Diese ID wird im vorherigen Aufruf von [`getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters) gesetzt und stellt sicher, dass die Parameter aus einem vorherigen Aufruf von [`getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters) stammen.
        <!-- spec defines following in RTCRtpParameters -->
    - `codecs`
      - : Ein Array von Objekten, das die [Mediencodecs](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs) beschreibt, aus denen der Sender wählen wird.
        Dieser Parameter kann nicht geändert werden, nachdem er initial gesetzt wurde.

        Jedes Codec-Objekt im Array kann die folgenden Eigenschaften haben: <!-- RTCRtpCodecParameters -->
        - `channels` {{optional_inline}}
          - : Eine positive Ganzzahl, die die Anzahl von Kanälen angibt, die vom Codec unterstützt werden.
            Bei Audiocodecs spezifiziert ein Wert von 1 z. B. Mono-Sound, während 2 Stereo angibt.

        - `clockRate`
          - : Eine positive Ganzzahl, die die Taktrate des Codecs in Hertz (Hz) angibt.
            Die Taktrate ist die Rate, mit der der RTP-Zeitstempel des Codecs fortschreitet.
            Die meisten Codecs erlauben spezifische Werte oder Wertebereiche.
            Die IANA pflegt eine [Liste von Codecs und deren Parametern](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-1), einschließlich ihrer Taktraten.

        - `mimeType`
          - : Ein String, der den MIME-Medientyp und Subtyp des Codecs angibt, spezifiziert als ein String im Format `"type/subtype"`.
            Die von RTP verwendeten MIME-Typ-Strings unterscheiden sich von denen, die anderswo verwendet werden.
            IANA pflegt ein [Register gültiger MIME-Typen](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-2).
            Siehe auch [Von WebRTC verwendete Codecs](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs) für Details zu potenziellen Codecs, die hier referenziert werden könnten.

        - `payloadType`
          - : Der [RTP-Payload-Typ](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-1), der verwendet wird, um diesen Codec zu identifizieren.

        - `sdpFmtpLine` {{optional_inline}}
          - : Ein String, der die format-spezifischen Parameter angibt, die von der lokalen Beschreibung bereitgestellt werden.

    - `headerExtensions`
      - : Ein Array von null oder mehr RTP-Header-Erweiterungen, die jeweils eine vom Sender unterstützte Erweiterung identifizieren.
        Header-Erweiterungen werden in {{RFC(3550, "", "5.3.1")}} beschrieben.
        Dieser Parameter kann nicht geändert werden.
    - `rtcp`
      - : Ein Objekt, das die Konfigurationsparameter bereitstellt, die für {{Glossary("RTCP", "RTCP")}} auf dem Sender verwendet werden.
        Dieser Parameter kann nicht geändert werden.

        Das Objekt kann die folgenden Eigenschaften haben: <!-- RTCRtcpParameters -->
        - `cname`
          - : Ein schreibgeschützter String, der den von RTCP verwendeten kanonischen Namen (CNAME) angibt (z. B. in SDES-Nachrichten).
        - `reducedSize`
          - : Ein schreibgeschütztes Boolean, das `True` ist, wenn reduzierte Größe RTCP konfiguriert ist ({{rfc("5506")}}), und `False`, wenn zusammengesetzte Größe RTCP spezifiziert ist ({{rfc("3550")}}).

    - `degradationPreference` {{deprecated_inline}}
      - : Gibt an, wie der WebRTC-Layer bevorzugt mit der Optimierung von Bandbreite gegen Qualität in situationen mit eingeschränkter Bandbreite umgeht.
        Die möglichen Werte sind `maintain-framerate`, `maintain-resolution` oder `balanced`.
        Der Standardwert ist `balanced`.

### Rückgabewert

Ein {{jsxref("Promise")}}, das aufgelöst wird, wenn die [`RTCRtpSender.track`](/de/docs/Web/API/RTCRtpSender/track) Eigenschaft mit den angegebenen Parametern aktualisiert wird.

### Ausnahmen

Wenn ein Fehler auftritt, wird das zurückgegebene Promise mit der entsprechenden Ausnahme aus der folgenden Liste abgelehnt.

- `InvalidModificationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn eines der folgenden Probleme festgestellt wird:
    - Die im `parameters` Objekt angegebene Anzahl der `encodings` entspricht nicht der aktuell für den `RTCRtpSender` gelisteten Anzahl.
      Sie können die Anzahl der Kodierungsoptionen nach der Erzeugung des Senders nicht ändern.
    - Die Reihenfolge der angegebenen `encodings` hat sich gegenüber der aktuellen Liste geändert.
    - Es wurde versucht, eine Eigenschaft zu ändern, die nach der Erzeugung des Senders nicht geändert werden kann.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn der Transceiver, zu dem der `RTCRtpSender` gehört, nicht läuft oder keine Parameter zu setzen hat.
- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn ein Fehler auftritt, der nicht zu denen gehört, die hier spezifiziert sind.
- {{jsxref("RangeError")}}
  - : Wird zurückgegeben, wenn der für die `scaleResolutionDownBy` Option angegebene Wert kleiner als 1.0 ist — was zu einer Aufwärts- statt einer Abwärtsskalierung führen würde, was nicht erlaubt ist; oder wenn einer oder mehrere der angegebenen `encodings` [`maxFramerate`](#maxframerate) Werte kleiner als 0.0 sind.

Zusätzlich wird bei Auftreten eines WebRTC-Fehlers während der Konfiguration oder des Zugriffs auf die Medien ein [`RTCError`](/de/docs/Web/API/RTCError) mit seinem [`errorDetail`](/de/docs/Web/API/RTCError/errorDetail) auf `hardware-encoder-error` gesetzt.

## Beschreibung

Es ist wichtig zu beachten, dass Sie das `parameters` Objekt nicht selbst erstellen und erwarten können, dass es funktioniert.
Stattdessen _müssen_ Sie zunächst [`getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters) aufrufen, das empfangene Parameterobjekt ändern und dann dieses Objekt in `setParameters()` übergeben.
WebRTC verwendet die `transactionId` Eigenschaft des Parameterobjekts, um sicherzustellen, dass beim Festlegen von Parametern Ihre Änderungen auf den neuesten Parametern basieren und nicht auf einer veralteten Konfiguration.

## Beispiele

Ein Anwendungsfall für `setParameters()` ist der Versuch, die im eingeschränkten Umfeld genutzte Netzbandbreite zu reduzieren, indem die Auflösung und/oder die Bitrate des von [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) gesendeten Mediums verändert werden.

Aktuell haben einige Browser ihre Implementierungen eingeschränkt, was zu Problemen führen kann.
Aus diesem Grund werden hier zwei Beispiele gegeben.
Das erste zeigt, wie `setParameters()` verwendet wird, wenn alle Browser die verwendeten Parameter vollständig unterstützen, während das zweite Beispiel Umgehungen demonstriert, um Einschränkungen in Browsern mit unvollständiger Unterstützung der Parameter [`maxBitrate`](#maxbitrate) und [`scaleResolutionDownBy`](#scaleresolutiondownby) zu lösen.

### Nach der Spezifikation

Sobald alle Browser die Spezifikation vollständig implementieren, wird diese Implementierung von `setVideoParams()` die Aufgabe erledigen. Dies zeigt, wie alles _sollte_ funktionieren.
Sie sollten vorerst wahrscheinlich das zweite Beispiel unten verwenden.
Aber dies ist eine klarere Demonstration des grundlegenden Konzepts, zuerst die Parameter zu holen, sie dann zu ändern und sie schließlich festzulegen.

```js
async function setVideoParams(sender, height, bitrate) {
  const scaleRatio = sender.track.getSettings().height / height;
  const params = sender.getParameters();

  params.encodings[0].scaleResolutionDownBy = Math.max(scaleRatio, 1);
  params.encodings[0].maxBitrate = bitrate;
  await sender.setParameters(params);
}
```

Beim Aufruf dieser Funktion spezifizieren Sie einen Sender sowie die Höhe, auf die Sie das Video des Senders skalieren möchten, und eine maximale Bitrate, die dem Sender erlaubt ist zu übertragen.
Ein Skalierungsfaktor für die Größe des Videos, `scaleRatio`, wird berechnet.
Dann werden die aktuellen Parameter des Senders mit [`getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters) abgerufen.

Die Parameter werden dann geändert, indem das erste `encodings` Objekt [`scaleResolutionDownBy`](#scaleresolutiondownby) und [`maxBitrate`](#maxbitrate) auf den berechneten Skalierungsfaktor und die angegebene maximale `bitrate` geändert werden.

Die geänderten Parameter werden dann durch einen Aufruf der `setParameters()` Methode des Senders gespeichert.

### Aktuell kompatible Implementierung

Wie oben erwähnt, zeigt das vorherige Beispiel, wie alles gedacht ist zu arbeiten.
Leider gibt es derzeit Implementierungsprobleme, die dies in vielen Browsern verhindern.
Aus diesem Grund sollten Sie, wenn Sie mit dem iPhone und anderen Geräten, die Safari ausführen, und mit Firefox kompatibel sein möchten, einen Code verwenden, der eher so aussieht:

```js
async function setVideoParams(sender, height, bitrate) {
  const scaleRatio = sender.track.getSettings().height / height;
  const params = sender.getParameters();

  // If encodings is null, create it
  params.encodings ??= [{}];
  params.encodings[0].scaleResolutionDownBy = Math.max(scaleRatio, 1);
  params.encodings[0].maxBitrate = bitrate;
  await sender.setParameters(params);

  // If the newly changed value of scaleResolutionDownBy is 1,
  // use applyConstraints() to be sure the height is constrained,
  // since scaleResolutionDownBy may not be implemented

  if (sender.getParameters().encodings[0].scaleResolutionDownBy === 1) {
    await sender.track.applyConstraints({ height });
  }
}
```

Die Unterschiede hier:

- Wenn `encodings` `null` ist, erstellen wir es, um sicherzustellen, dass wir dann die Parameter erfolgreich setzen können, ohne abzustürzen.
- Wenn der Wert von `scaleResolutionDownBy` nach dem Setzen der Parameter immer noch 1 ist, rufen wir die Methode [`applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) des Tracks des Senders auf, um die Höhe des Tracks auf `height` zu begrenzen.
  Dies kompensiert eine nicht implementierte `scaleResolutionDownBy` (wie es zum Zeitpunkt des Schreibens in Safari der Fall ist).

Dieser Code wird sauber zurückfallen und auf normale Weise funktionieren, wenn der Browser die verwendeten Funktionen vollständig implementiert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Von WebRTC verwendete Codecs](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs)
- [Webmedientechnologien](/de/docs/Web/Media)
