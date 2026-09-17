---
title: "RTCRtpSender: Methode setParameters()"
short-title: setParameters()
slug: Web/API/RTCRtpSender/setParameters
l10n:
  sourceCommit: a4c63d2855b2f557e7d1ee821dee65011d569a41
---

{{APIRef("WebRTC API")}}

Die Methode **`setParameters()`** des Interfaces [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) wendet Änderungen an der Konfiguration des [`track`](/de/docs/Web/API/RTCRtpSender/track) des Senders an. Dabei handelt es sich um den [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack), für den der `RTCRtpSender` verantwortlich ist.

Anders ausgedrückt aktualisiert `setParameters()` die Konfiguration der {{Glossary("RTP", "RTP")}}-Übertragung sowie die Kodierungskonfiguration für einen bestimmten ausgehenden Medien-Track auf der [WebRTC](/de/docs/Web/API/WebRTC_API)-Verbindung.

## Syntax

```js-nolint
setParameters(parameters)
```

### Parameter

- `parameters`
  - : Ein Parameterobjekt, das zuvor durch Aufrufen der Methode [`getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters) desselben Senders abgerufen wurde und die gewünschten Änderungen an den Konfigurationsparametern des Senders enthält.
    Diese Parameter umfassen mögliche Codecs, die zur Kodierung des [`track`](/de/docs/Web/API/RTCRtpSender/track) des Senders verwendet werden könnten.
    Die verfügbaren Parameter sind:
    - `encodings`
      - : Ein Array von Objekten, von denen jedes die Parameter für einen einzelnen Codec angibt, der zur Kodierung der Medien des Tracks verwendet werden könnte.
        Die Eigenschaften der Objekte umfassen:
        - `active`
          - : Das Setzen dieses Werts auf `true` (der Standardwert) bewirkt, dass diese Kodierung gesendet wird, während `false` verhindert, dass sie gesendet und verwendet wird (führt jedoch nicht dazu, dass die SSRC entfernt wird).

        - `codec` {{optional_inline}}
          - : Wählt den [Medien-Codec](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs) aus, der für den RTP-Stream dieser Kodierung verwendet wird.
            Wenn nicht festgelegt, kann der User-Agent einen beliebigen für das Senden ausgehandelten Codec auswählen.
            <!-- RTCRtpCodec -->
            - `channels` {{optional_inline}}
              - : Eine positive Ganzzahl, die die Anzahl der vom Codec unterstützten Kanäle angibt.
                Beispielsweise gibt für Audio-Codecs ein Wert von 1 monauralen Klang an, während 2 Stereo angibt.

            - `clockRate`
              - : Eine positive Ganzzahl, die die Clock-Rate des Codecs in Hertz (Hz) angibt.
                Die Clock-Rate ist die Rate, mit der der RTP-Zeitstempel des Codecs fortschreitet.
                Die meisten Codecs haben bestimmte Werte oder Wertebereiche, die sie zulassen.
                Die IANA pflegt eine [Liste von Codecs und ihren Parametern](https://www.iana.org/assignments/rtp-parameters#rtp-parameters-1), einschließlich ihrer Clock-Rates.

            - `mimeType`
              - : Ein String, der den MIME-Medientyp und -Subtyp des Codecs angibt, in der Form `"type/subtype"`.
                Die von RTP verwendeten MIME-Type-Strings unterscheiden sich von denen, die an anderer Stelle verwendet werden.
                Die IANA pflegt ein [Register gültiger MIME-Typen](https://www.iana.org/assignments/rtp-parameters#rtp-parameters-2).
                Siehe auch [Von WebRTC verwendete Codecs](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs) für Details zu möglichen Codecs, auf die hier verwiesen werden könnte.

            - `sdpFmtpLine` {{optional_inline}}
              - : Ein String, der die von der lokalen Beschreibung bereitgestellten formatspezifischen Parameter angibt.

        - `dtx` {{Deprecated_Inline}} {{Non-standard_Inline}}
          - : Wird nur für einen [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) verwendet, dessen [`kind`](/de/docs/Web/API/MediaStreamTrack/kind) `audio` ist. Diese Eigenschaft gibt an, ob diskontinuierliche Übertragung verwendet werden soll (eine Funktion, bei der ein Telefon ausgeschaltet oder das Mikrofon bei fehlender Sprachaktivität automatisch stummgeschaltet wird).
            Der Wert ist entweder `enabled` oder `disabled`.

        - `maxBitrate`
          - : Eine positive Ganzzahl, die die maximale Anzahl von Bits pro Sekunde angibt, die der User-Agent Tracks gewähren darf, die mit dieser Kodierung kodiert werden.
            Andere Parameter können die Bitrate weiter einschränken, etwa der Wert von `maxFramerate` oder die für den Transport oder das physische Netzwerk verfügbare Bandbreite.

            Der Wert wird unter Verwendung der standardmäßigen Transport Independent Application Specific Maximum (TIAS)-Bandbreite berechnet, wie in {{RFC(3890, "", "6.2.2")}} definiert; dies ist die maximal benötigte Bandbreite ohne Berücksichtigung von Protokoll-Overhead durch IP, TCP oder UDP usw.

            Beachten Sie, dass die Bitrate je nach Medium und Kodierung auf verschiedene Arten erreicht werden kann.
            Beispielsweise kann bei Video eine niedrige Bitrate durch das Verwerfen von Frames erreicht werden (eine Bitrate von null könnte erlauben, nur einen Frame zu senden), während bei Audio der Track möglicherweise nicht mehr wiedergegeben werden kann, wenn die Bitrate für das Senden zu niedrig ist.

        - `maxFramerate`
          - : Ein Wert, der die maximale Anzahl von Frames pro Sekunde angibt, die für diese Kodierung zulässig ist.
        - `priority`
          - : Ein String, der die Priorität des [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) angibt und bestimmen kann, wie der User-Agent die Bandbreite zwischen Sendern zuweist.
            Zulässige Werte sind `very-low`, `low` (Standard), `medium`, `high`.
        - `rid`
          - : Ein String, der, falls festgelegt, eine _RTP-Stream-ID_ (_RID_) angibt, die mithilfe der RID-Header-Erweiterung gesendet werden soll.
            Dieser Parameter kann nicht mit `setParameters()` geändert werden.
            Sein Wert kann nur beim ersten Erstellen des Transceivers festgelegt werden.

        - `scaleResolutionDownBy`
          - : Wird nur für Sender verwendet, deren [`kind`](/de/docs/Web/API/MediaStreamTrack/kind) des Tracks `video` ist. Dies ist ein Gleitkommawert, der einen Faktor angibt, um den das Video während der Kodierung herunterskaliert wird.
            Der Standardwert 1.0 bedeutet, dass das Video in seiner ursprünglichen Größe kodiert wird.
            Ein Wert von 2.0 skaliert die Videoframes in jeder Dimension um den Faktor 2 herunter, wodurch ein Video mit 1/4 der Größe des Originals entsteht.
            Der Wert darf nicht kleiner als 1.0 sein (der Versuch, das Video auf eine größere Größe zu skalieren, löst einen {{jsxref("RangeError")}} aus).

    - `transactionId`
      - : Ein String mit einer eindeutigen ID.
        Diese ID wird im vorherigen Aufruf von [`getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters) festgelegt und stellt sicher, dass die Parameter aus einem vorherigen Aufruf von [`getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters) stammen.
        <!-- spec defines following in RTCRtpParameters -->
    - `codecs`
      - : Ein Array von Objekten, die die [Medien-Codecs](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs) beschreiben, aus denen der Sender auswählt.
        Dieser Parameter kann nach seiner anfänglichen Festlegung nicht mehr geändert werden.

        Jedes Codec-Objekt im Array kann die folgenden Eigenschaften haben: <!-- RTCRtpCodecParameters -->
        - `channels` {{optional_inline}}
          - : Eine positive Ganzzahl, die die Anzahl der vom Codec unterstützten Kanäle angibt.
            Beispielsweise gibt für Audio-Codecs ein Wert von 1 monauralen Klang an, während 2 Stereo angibt.

        - `clockRate`
          - : Eine positive Ganzzahl, die die Clock-Rate des Codecs in Hertz (Hz) angibt.
            Die Clock-Rate ist die Rate, mit der der RTP-Zeitstempel des Codecs fortschreitet.
            Die meisten Codecs haben bestimmte Werte oder Wertebereiche, die sie zulassen.
            Die IANA pflegt eine [Liste von Codecs und ihren Parametern](https://www.iana.org/assignments/rtp-parameters#rtp-parameters-1), einschließlich ihrer Clock-Rates.

        - `mimeType`
          - : Ein String, der den MIME-Medientyp und -Subtyp des Codecs angibt, in der Form `"type/subtype"`.
            Die von RTP verwendeten MIME-Type-Strings unterscheiden sich von denen, die an anderer Stelle verwendet werden.
            Die IANA pflegt ein [Register gültiger MIME-Typen](https://www.iana.org/assignments/rtp-parameters#rtp-parameters-2).
            Siehe auch [Von WebRTC verwendete Codecs](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs) für Details zu möglichen Codecs, auf die hier verwiesen werden könnte.

        - `payloadType`
          - : Der [RTP-Payload-Typ](https://www.iana.org/assignments/rtp-parameters#rtp-parameters-1), der zur Identifizierung dieses Codecs verwendet wird.

        - `sdpFmtpLine` {{optional_inline}}
          - : Ein String, der die von der lokalen Beschreibung bereitgestellten formatspezifischen Parameter angibt.

    - `headerExtensions`
      - : Ein Array aus null oder mehr RTP-Header-Erweiterungen, von denen jede eine vom Sender unterstützte Erweiterung identifiziert.
        Header-Erweiterungen werden in {{RFC(3550, "", "5.3.1")}} beschrieben.
        Dieser Parameter kann nicht geändert werden.
    - `rtcp`
      - : Ein Objekt, das die Konfigurationsparameter für {{Glossary("RTCP", "RTCP")}} beim Sender bereitstellt.
        Dieser Parameter kann nicht geändert werden.

        Das Objekt kann die folgenden Eigenschaften haben: <!-- RTCRtcpParameters -->
        - `cname`
          - : Ein schreibgeschützter String, der den von RTCP verwendeten kanonischen Namen (CNAME) angibt, etwa in SDES-Nachrichten.
        - `reducedSize`
          - : Ein schreibgeschützter boolescher Wert, der `True` ist, wenn RTCP mit reduzierter Größe konfiguriert ist ({{rfc("5506")}}), und `False`, wenn zusammengesetztes RTCP angegeben ist ({{rfc("3550")}}).

    - `degradationPreference` {{optional_inline}}
      - : Gibt die bevorzugte Weise an, auf die die WebRTC-Schicht die Leistungsoptimierung in Situationen mit eingeschränkter Bandbreite handhaben soll. Die möglichen Werte sind:
        - `balanced`
          - : Der Standardwert. Der Browser gleicht die Verringerung von Framerate und Auflösung aus.
        - `maintain-framerate`
          - : Der Browser verringert die Auflösung, um die Framerate beizubehalten.
        - `maintain-resolution`
          - : Der Browser verringert die Framerate, um die Auflösung beizubehalten.
        - `maintain-framerate-and-resolution`
          - : Der Browser behält Framerate und Auflösung unabhängig von der Videoqualität bei. Dies kann dazu führen, dass Frames bei Bedarf vor der Kodierung verworfen werden, um Netzwerk- und Encoder-Ressourcen nicht übermäßig zu beanspruchen. Diese Einstellung ist für Anwendungen nützlich, die ihren eigenen Mechanismus zur Optimierung von Videokodierungsqualität und -leistung implementieren und nicht möchten, dass der interne Mechanismus des Browsers diesen beeinträchtigt.

### Rückgabewert

Ein {{jsxref("Promise")}}, das erfüllt wird, wenn die Eigenschaft [`RTCRtpSender.track`](/de/docs/Web/API/RTCRtpSender/track) mit den angegebenen Parametern aktualisiert wird.

### Ausnahmen

Wenn ein Fehler auftritt, wird das zurückgegebene Promise mit der passenden Ausnahme aus der folgenden Liste abgelehnt.

- `InvalidModificationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn eines der folgenden Probleme erkannt wird:
    - Die Anzahl der in der Eigenschaft `encodings` des Objekts `parameters` angegebenen Kodierungen stimmt nicht mit der Anzahl der aktuell für den `RTCRtpSender` aufgeführten Kodierungen überein.
      Sie können die Anzahl der Kodierungsoptionen nicht ändern, nachdem der Sender erstellt wurde.
    - Die Reihenfolge der angegebenen `encodings` wurde gegenüber der Reihenfolge der aktuellen Liste geändert.
    - Es wurde versucht, eine Eigenschaft zu ändern, die nach der ersten Erstellung des Senders nicht mehr geändert werden kann.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn der Transceiver, zu dem der `RTCRtpSender` gehört, nicht läuft oder keine festzulegenden Parameter hat.
- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn ein Fehler auftritt, der keinem der hier angegebenen Fehler entspricht.
- {{jsxref("RangeError")}}
  - : Wird zurückgegeben, wenn der für die Option `scaleResolutionDownBy` angegebene Wert kleiner als 1.0 ist — was zu einer Vergrößerung statt zu einer Verkleinerung führen würde und nicht zulässig ist — oder wenn einer oder mehrere der angegebenen [`maxFramerate`](#maxframerate)-Werte von `encodings` kleiner als 0.0 sind.

Wenn außerdem ein WebRTC-Fehler beim Konfigurieren oder Zugreifen auf die Medien auftritt, wird ein [`RTCError`](/de/docs/Web/API/RTCError) ausgelöst, dessen [`errorDetail`](/de/docs/Web/API/RTCError/errorDetail) auf `hardware-encoder-error` gesetzt ist.

## Beschreibung

Es ist wichtig, zu beachten, dass Sie das Objekt `parameters` nicht selbst erstellen und erwarten können, dass es funktioniert.
Stattdessen _müssen_ Sie zuerst [`getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters) aufrufen, das empfangene Parameterobjekt ändern und dieses Objekt dann an `setParameters()` übergeben.
WebRTC verwendet die Eigenschaft `transactionId` des Parameterobjekts, um sicherzustellen, dass Ihre Änderungen beim Festlegen von Parametern auf den aktuellsten Parametern und nicht auf einer veralteten Konfiguration basieren.

## Beispiele

Ein Anwendungsfall für `setParameters()` besteht darin, zu versuchen, die in Umgebungen mit eingeschränkter Bandbreite verwendete Netzwerkbandbreite zu reduzieren, indem die Auflösung und/oder Bitrate der vom [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) übertragenen Medien geändert wird.

Derzeit haben einige Browser Einschränkungen in ihren Implementierungen, die Probleme verursachen können.
Aus diesem Grund werden hier zwei Beispiele angegeben.
Das erste zeigt, wie `setParameters()` verwendet wird, wenn alle Browser die verwendeten Parameter vollständig unterstützen, während das zweite Beispiel Workarounds zur Behebung von Einschränkungen in Browsern mit unvollständiger Unterstützung für die Parameter [`maxBitrate`](#maxbitrate) und [`scaleResolutionDownBy`](#scaleresolutiondownby) zeigt.

### Gemäß der Spezifikation

Sobald alle Browser die Spezifikation vollständig implementieren, erledigt diese Implementierung von `setVideoParams()` die Aufgabe. Sie zeigt, wie alles _funktionieren sollte_.
Vorerst sollten Sie wahrscheinlich das zweite Beispiel weiter unten verwenden.
Dieses Beispiel veranschaulicht jedoch klarer das Grundkonzept: zuerst die Parameter abrufen, dann ändern und anschließend festlegen.

```js
async function setVideoParams(sender, height, bitrate) {
  const scaleRatio = sender.track.getSettings().height / height;
  const params = sender.getParameters();

  params.encodings[0].scaleResolutionDownBy = Math.max(scaleRatio, 1);
  params.encodings[0].maxBitrate = bitrate;
  await sender.setParameters(params);
}
```

Beim Aufrufen dieser Funktion geben Sie einen Sender sowie die Höhe an, auf die Sie das Video des Senders skalieren möchten, und außerdem eine maximale Bitrate, mit der der Sender übertragen darf.
Es wird ein Skalierungsfaktor für die Größe des Videos, `scaleRatio`, berechnet.
Anschließend werden die aktuellen Parameter des Senders mit [`getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters) abgerufen.

Die Parameter werden dann geändert, indem `scaleResolutionDownBy` und `maxBitrate` des ersten Objekts in `encodings` auf den berechneten Skalierungsfaktor bzw. die angegebene maximale `bitrate` gesetzt werden.

Die geänderten Parameter werden anschließend durch Aufrufen der Methode `setParameters()` des Senders gespeichert.

### Derzeit kompatible Implementierung

Wie oben erwähnt, zeigt das vorherige Beispiel, wie die Funktionsweise vorgesehen ist.
Leider verhindern Implementierungsprobleme dies derzeit in vielen Browsern.
Wenn Sie daher mit iPhone und anderen Geräten mit Safari sowie mit Firefox kompatibel sein möchten, verwenden Sie Code, der eher diesem entspricht:

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

Die Unterschiede:

- Wenn `encodings` `null` ist, erstellen wir es, um sicherzustellen, dass wir die Parameter anschließend erfolgreich festlegen können, ohne abzustürzen.
- Wenn der Wert von `scaleResolutionDownBy` nach dem Festlegen der Parameter weiterhin 1 ist, rufen wir die Methode [`applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) des Tracks des Senders auf, um die Höhe des Tracks auf `height` zu beschränken.
  Dies gleicht ein nicht implementiertes `scaleResolutionDownBy` aus (wie es zum Zeitpunkt der Erstellung dieses Textes bei Safari der Fall ist).

Dieser Code greift sauber auf die normale Funktionsweise zurück und funktioniert auf diese Weise, wenn der Browser die verwendeten Funktionen vollständig implementiert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Von WebRTC verwendete Codecs](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs)
- [Web-Medientechnologien](/de/docs/Web/Media)
