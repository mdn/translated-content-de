---
title: "RTCRtpSender: setParameters()-Methode"
short-title: setParameters()
slug: Web/API/RTCRtpSender/setParameters
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("WebRTC API")}}

Die **`setParameters()`**-Methode des [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)-Interfaces wendet Änderungen an der Konfiguration des Senders [`track`](/de/docs/Web/API/RTCRtpSender/track) an, also dem [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack), für den der `RTCRtpSender` verantwortlich ist.

Mit anderen Worten, `setParameters()` aktualisiert die Konfiguration der [RTP](/de/docs/Glossary/RTP)-Übertragung sowie die Kodierungskonfiguration für eine bestimmte ausgehende Medienspur auf der [WebRTC](/de/docs/Web/API/WebRTC_API)-Verbindung.

## Syntax

```js-nolint
setParameters(parameters)
```

### Parameter

- `parameters`

  - : Ein Parameterobjekt, das zuvor durch Aufruf der gleichen `sender`-Methode [`getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters) erhalten wurde, mit den gewünschten Änderungen der Konfigurationsparameter des Senders.
    Diese Parameter umfassen mögliche Codecs, die zur Kodierung des Senders [`track`](/de/docs/Web/API/RTCRtpSender/track) verwendet werden könnten.
    Die verfügbaren Parameter sind:

    - `encodings`

      - : Ein Array von Objekten, die jeweils die Parameter für einen einzelnen Codec spezifizieren, der verwendet werden könnte, um die Medien der Spur zu kodieren.
        Die Objekt-Eigenschaften umfassen:

        - `active`

          - : Wenn dieser Wert `true` (Standardwert) gesetzt ist, wird diese Kodierung gesendet, während `false` bewirkt, dass sie nicht gesendet und verwendet wird (dies führt jedoch nicht dazu, dass die SSRC entfernt wird).

        - `dtx` {{Deprecated_Inline}} {{Non-standard_Inline}}

          - : Wird nur für einen [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) verwendet, dessen [`kind`](/de/docs/Web/API/MediaStreamTrack/kind) `audio` ist. Diese Eigenschaft gibt an, ob nicht-kontinuierliche Übertragung verwendet wird (eine Funktion, bei der ein Telefon ausgeschaltet oder das Mikrofon automatisch stummgeschaltet wird, wenn keine Sprachaktivität vorhanden ist).
            Der Wert ist entweder `enabled` oder `disabled`.

        - `maxBitrate`

          - : Eine positive Ganzzahl, die die maximale Anzahl von Bits pro Sekunde anzeigt, die der Benutzeragent den mit dieser Kodierung kodierten Spuren gewähren darf.
            Andere Parameter können die Bitrate weiter einschränken, wie etwa der Wert von `maxFramerate` oder die für den Transport oder das physische Netzwerk verfügbare Bandbreite.

            Der Wert wird unter Verwendung der Standard Transport Independent Application Specific Maximum (TIAS) Bandbreite berechnet, wie von {{RFC(3890, "", "6.2.2")}} definiert; dies ist die maximale benötigte Bandbreite ohne Berücksichtigung von Protokoll-Overheads von IP, TCP oder UDP usw.

            Beachten Sie, dass die Bitrate auf verschiedene Weise erreicht werden kann, abhängig von Medien und Kodierung.
            Bei Video kann zum Beispiel eine niedrige Bitrate durch das Droppen von Frames erreicht werden (eine Bitrate von null könnte erlauben, dass nur ein Frame gesendet wird), während bei Audio die Spur möglicherweise aufhören muss zu spielen, wenn die Bitrate zu niedrig ist, um sie zu senden.

        - `maxFramerate`

          - : Ein Wert, der die maximale Anzahl von Frames pro Sekunde festlegt, die für diese Kodierung erlaubt sind.

        - `priority`

          - : Ein String, der die Priorität des [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) angibt, was bestimmen kann, wie der Benutzeragent Bandbreite zwischen Sendern aufteilt.
            Erlaubte Werte sind `very-low`, `low` (Standard), `medium`, `high`.

        - `rid`

          - : Ein String, der, wenn gesetzt, eine _RTP stream ID_ (_RID_) angibt, die mit der RID-Header-Erweiterung gesendet wird.
            Dieser Parameter kann nicht mit `setParameters()` geändert werden.
            Sein Wert kann nur bei der ersten Erstellung des Transceivers gesetzt werden.

        - `scaleResolutionDownBy`
          - : Wird nur für Sender verwendet, deren Spur [`kind`](/de/docs/Web/API/MediaStreamTrack/kind) `video` ist. Dies ist ein Gleitkommawert, der einen Faktor spezifiziert, um den das Video bei der Kodierung herunterskaliert wird.
            Der Standardwert 1.0 bedeutet, dass das Video in seiner Originalgröße kodiert wird.
            Ein Wert von 2.0 skaliert die Videoframes um einen Faktor von 2 in jeder Dimension herunter, was zu einem Video mit einem Viertel der Originalgröße führt.
            Der Wert darf nicht kleiner als 1.0 sein (der Versuch, das Video auf eine größere Größe zu skalieren, führt zu einem {{jsxref("RangeError")}}).

    - `transactionId`
      - : Ein String, der eine eindeutige ID enthält.
        Diese ID wird im vorherigen Aufruf von [`getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters) gesetzt und stellt sicher, dass die Parameter aus einem vorherigen Aufruf von [`getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters) stammen.
        <!-- spec defines following in RTCRtpParameters -->
    - `codecs`

      - : Ein Array von Objekten, die die [Medien-Codecs](/de/docs/Web/Media/Formats/WebRTC_codecs) beschreiben, aus denen der Sender wählen wird.
        Dieser Parameter kann nicht geändert werden, sobald er ursprünglich gesetzt wurde.

        Jedes Codec-Objekt im Array kann die folgenden Eigenschaften haben: <!-- RTCRtpCodecParameters -->

        - `channels` {{optional_inline}}

          - : Eine positive Ganzzahl, die die Anzahl der Kanäle angibt, die vom Codec unterstützt werden.
            Zum Beispiel spezifiziert ein Wert von 1 bei Audiocodecs monoauralen Ton, während 2 Stereo angibt.

        - `clockRate`

          - : Eine positive Ganzzahl, die die Taktfrequenz des Codecs in Hertz (Hz) angibt.
            Die Taktfrequenz ist die Rate, mit der der RTP-Zeitstempel des Codecs fortschreitet.
            Die meisten Codecs haben spezielle Werte oder Bereiche von Werten, die sie zulassen.
            Die IANA pflegt eine [Liste von Codecs und deren Parameter](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-1), einschließlich ihrer Taktfrequenzen.

        - `mimeType`

          - : Ein String, der den MIME-Medientyp und Subtyp des Codecs angibt, spezifiziert als ein String der Form `"type/subtype"`.
            Die von RTP verwendeten MIME-Typ-Strings unterscheiden sich von denen, die an anderer Stelle verwendet werden.
            IANA pflegt ein [Verzeichnis gültiger MIME-Typen](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-2).
            Siehe auch [Von WebRTC verwendete Codecs](/de/docs/Web/Media/Formats/WebRTC_codecs) für Details über potenzielle Codecs, die hier referenziert werden könnten.

        - `payloadType`

          - : Der [RTP-Payload-Typ](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-1), der verwendet wird, um diesen Codec zu identifizieren.

        - `sdpFmtpLine` {{optional_inline}}
          - : Ein String, der die vom lokalen Beschreibungsformat spezifischen Parameter angibt.

    - `headerExtensions`
      - : Ein Array von null oder mehr RTP-Header-Erweiterungen, die jeweils eine vom Sender unterstützte Erweiterung identifizieren.
        Header-Erweiterungen werden in {{RFC(3550, "", "5.3.1")}} beschrieben.
        Dieser Parameter kann nicht geändert werden.
    - `rtcp`
      - : Ein [`RTCRtcpParameters`](/de/docs/Web/API/RTCRtcpParameters)-Objekt, das die Konfigurationsparameter bereitstellt, die für [RTCP](/de/docs/Glossary/RTCP) auf dem Sender verwendet werden.
        Dieser Parameter kann nicht geändert werden.
    - `degradationPreference` {{deprecated_inline}}
      - : Gibt die bevorzugte Methode an, wie die WebRTC-Schicht das Optimieren der Bandbreite gegen Qualität in bandbreitenbeschränkten Situationen handhaben soll.
        Die möglichen Werte sind `maintain-framerate`, `maintain-resolution` oder `balanced`.
        Der Standardwert ist `balanced`.

### Rückgabewert

Ein {{jsxref("Promise")}}, das aufgelöst wird, wenn die Eigenschaft [`RTCRtpSender.track`](/de/docs/Web/API/RTCRtpSender/track) mit den gegebenen Parametern aktualisiert wird.

### Ausnahmen

Tritt ein Fehler auf, wird das zurückgegebene Promise mit der entsprechenden Ausnahme aus der untenstehenden Liste abgelehnt.

- `InvalidModificationError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Wird zurückgegeben, wenn eines der folgenden Probleme festgestellt wird:
    - Die Anzahl der im `parameters`-Objekt spezifizierten `encodings` entspricht nicht der Anzahl der aktuell für den `RTCRtpSender` aufgelisteten Kodierungen.
      Sie können die Anzahl der Kodierungsoptionen nach Erstellung des Senders nicht ändern.
    - Die Reihenfolge der angegebenen `encodings` hat sich von der Reihenfolge der aktuellen Liste geändert.
    - Es wurde versucht, eine Eigenschaft zu verändern, die nach der ersten Erstellung des Senders nicht geändert werden kann.

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Wird zurückgegeben, wenn der Transceiver, zu dem der `RTCRtpSender` gehört, nicht ausgeführt wird oder keine zu setzenden Parameter hat.

- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Wird zurückgegeben, wenn ein Fehler auftritt, der nicht den hier spezifizierten entspricht.

- {{jsxref("RangeError")}}
  - : Wird zurückgegeben, wenn der für die `scaleResolutionDownBy`-Option angegebene Wert kleiner als 1.0 ist — was eine Vergrößerung anstelle einer Verkleinerung zur Folge hätte, was nicht erlaubt ist; oder wenn einer oder mehrere der angegebenen `encodings`-[`maxFramerate`](#maxframerate)-Werte kleiner als 0.0 sind.

Zusätzlich wird ein [`RTCError`](/de/docs/Web/API/RTCError) mit seinem [`errorDetail`](/de/docs/Web/API/RTCError/errorDetail) auf `hardware-encoder-error` gesetzt, wenn ein WebRTC-Fehler beim Konfigurieren oder Zugreifen auf die Medien auftritt.

## Beschreibung

Es ist wichtig zu beachten, dass Sie das `parameters`-Objekt nicht selbst erstellen und erwarten können, dass es funktioniert.
Stattdessen _müssen_ Sie zuerst [`getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters) aufrufen, das empfangene Parameterobjekt ändern und dann dieses Objekt in `setParameters()` übergeben.
WebRTC verwendet die `transactionId`-Eigenschaft des Parameterobjekts, um sicherzustellen, dass, wenn Sie Parameter setzen, Ihre Änderungen auf den neuesten Parametern basieren und nicht auf einer veralteten Konfiguration.

## Beispiele

Ein Anwendungsfall für `setParameters()` ist der Versuch, die im Netz verwendete Bandbreite in eingeschränkten Umgebungen zu reduzieren, indem die Auflösung und/oder Bitrate der von dem [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) übertragenen Medien geändert wird.

Derzeit haben einige Browser Einschränkungen bei ihren Implementierungen, die Probleme verursachen können.
Aus diesem Grund werden hier zwei Beispiele gegeben.
Das erste zeigt, wie man `setParameters()` verwendet, wenn alle Browser die verwendeten Parameter vollständig unterstützen, während das zweite Beispiel Workarounds zeigt, um Einschränkungen in Browsern mit unvollständiger Unterstützung für die Parameter [`maxBitrate`](#maxbitrate) und [`scaleResolutionDownBy`](#scaleresolutiondownby) zu lösen.

### Nach der Spezifikation

Sobald alle Browser die Spezifikationen vollständig unterstützen, wird diese Implementierung von `setVideoParams()` die gewünschte Aufgabe erfüllen. Dies zeigt, wie alles _sollte_ funktionieren.
Sie sollten wahrscheinlich das zweite Beispiel unten verwenden.
Aber dies ist eine klarere Demonstration des grundlegenden Konzepts des ersten Abrufens der Parameter, dann deren Änderung und schließlich ihrer Einstellung.

```js
async function setVideoParams(sender, height, bitrate) {
  const scaleRatio = sender.track.getSettings().height / height;
  const params = sender.getParameters();

  params.encodings[0].scaleResolutionDownBy = Math.max(scaleRatio, 1);
  params.encodings[0].maxBitrate = bitrate;
  await sender.setParameters(params);
}
```

Beim Aufruf dieser Funktion spezifizieren Sie einen Sender sowie die Höhe, auf die Sie das Video des Senders skalieren möchten, und eine maximale Bitrate, die dem Sender erlaubt wird zu senden.
Ein Skalierungsfaktor für die Größe des Videos, `scaleRatio`, wird berechnet.
Dann werden die aktuellen Parameter des Senders durch den Aufruf von [`getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters) abgerufen.

Die Parameter werden dann geändert, indem die Eigenschaften `scaleResolutionDownBy` und [`maxBitrate`](#maxbitrate) des ersten `encodings`-Objekts auf den berechneten Skalierungsfaktor und die angegebene maximale `bitrate` gesetzt werden.

Die geänderten Parameter werden dann durch den Aufruf der `setParameters()`-Methode des Senders gespeichert.

### Derzeit kompatible Implementierung

Wie oben erwähnt, zeigt das vorherige Beispiel, wie Dinge funktionieren sollen.
Leider gibt es derzeit Implementierungsprobleme, die dies in vielen Browsern verhindern.
Aus diesem Grund sollten Sie, wenn Sie mit dem iPhone und anderen Geräten, die Safari ausführen, und mit Firefox kompatibel sein möchten, eher diesen Code verwenden:

```js
async function setVideoParams(sender, height, bitrate) {
  const scaleRatio = sender.track.getSettings().height / height;
  const params = sender.getParameters();

  // If encodings is null, create it

  if (!params.encodings) {
    params.encodings = [{}];
  }

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

- Wenn `encodings` `null` ist, erstellen wir sie, um sicherzustellen, dass wir dann die Parameter erfolgreich setzen können, ohne abzustürzen.
- Wenn nach dem Setzen der Parameter der Wert von `scaleResolutionDownBy` immer noch 1 ist, rufen wir die [`applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints)-Methode des Sendertracks auf, um die Höhe der Spur auf `height` zu begrenzen.
  Dies kompensiert eine nicht implementierte `scaleResolutionDownBy` (wie es derzeit bei Safari der Fall ist).

Dieser Code wird sauber zurückfallen und den normalen Weg funktionieren, wenn der Browser die verwendeten Funktionen vollständig implementiert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Von WebRTC verwendete Codecs](/de/docs/Web/Media/Formats/WebRTC_codecs)
- [Webmedientechnologien](/de/docs/Web/Media)
