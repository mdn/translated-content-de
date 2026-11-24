---
title: "RTCRtpSender: Methode setParameters()"
short-title: setParameters()
slug: Web/API/RTCRtpSender/setParameters
l10n:
  sourceCommit: ae5795c1df4956dffee85cb3febd9067b31d9430
---

{{APIRef("WebRTC API")}}

Die Methode **`setParameters()`** der Schnittstelle [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) wendet Änderungen an der Konfiguration des [`track`](/de/docs/Web/API/RTCRtpSender/track) des Senders an. Dieser `track` ist der [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack), für den der `RTCRtpSender` verantwortlich ist.

Mit anderen Worten: `setParameters()` aktualisiert sowohl die Konfiguration der {{Glossary("RTP", "RTP")}}-Übertragung als auch die Kodierungskonfiguration für einen bestimmten ausgehenden Medientrack in der [WebRTC](/de/docs/Web/API/WebRTC_API)-Verbindung.

## Syntax

```js-nolint
setParameters(parameters)
setParameters(parameters, setParameterOptions)
```

### Parameter

- `parameters`
  - : Ein Parameterobjekt, das zuvor durch einen Aufruf der Methode [`getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters) desselben Senders abgerufen wurde und die gewünschten Änderungen an den Konfigurationsparametern des Senders enthält.
    Zu diesen Parametern gehören mögliche Codecs, mit denen der [`track`](/de/docs/Web/API/RTCRtpSender/track) des Senders kodiert werden kann.
    Folgende Parameter sind verfügbar:
    - `encodings`
      - : Ein Array von Objekten, die jeweils die Parameter für einen einzelnen Codec angeben, der zum Kodieren der Medien des Tracks verwendet werden könnte.
        Die Objekte können folgende Eigenschaften enthalten:
        - `active`
          - : Der Wert `true` (Standardwert) bewirkt, dass diese Kodierung gesendet wird. `false` verhindert, dass sie gesendet und verwendet wird, entfernt jedoch nicht die SSRC.

        - `codec` {{optional_inline}}
          - : Wählt den [Mediencodec](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs) aus, der für den RTP-Stream dieser Kodierung verwendet wird.
            Ist die Eigenschaft nicht gesetzt, kann der User Agent einen beliebigen für das Senden ausgehandelten Codec auswählen.
            <!-- RTCRtpCodec -->
            - `channels` {{optional_inline}}
              - : Eine positive Ganzzahl, die die Anzahl der vom Codec unterstützten Kanäle angibt.
                Bei Audiocodecs steht beispielsweise der Wert 1 für Mono und 2 für Stereo.

            - `clockRate`
              - : Eine positive Ganzzahl, die die Taktrate des Codecs in Hertz (Hz) angibt.
                Die Taktrate bestimmt, wie schnell der RTP-Zeitstempel des Codecs fortschreitet.
                Die meisten Codecs lassen nur bestimmte Werte oder Wertebereiche zu.
                Die IANA führt eine [Liste der Codecs und ihrer Parameter](https://www.iana.org/assignments/rtp-parameters#rtp-parameters-1), einschließlich ihrer Taktraten.

            - `mimeType`
              - : Ein String, der den MIME-Medientyp und -Untertyp des Codecs in der Form `"type/subtype"` angibt.
                Die von RTP verwendeten MIME-Typ-Strings unterscheiden sich von den andernorts verwendeten.
                Die IANA führt ein [Verzeichnis gültiger MIME-Typen](https://www.iana.org/assignments/rtp-parameters#rtp-parameters-2).
                Weitere Informationen zu möglichen Codecs, auf die hier verwiesen werden kann, finden Sie unter [Von WebRTC verwendete Codecs](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs).

            - `sdpFmtpLine` {{optional_inline}}
              - : Ein String mit den formatspezifischen Parametern aus der lokalen Beschreibung.

        - `dtx` {{Deprecated_Inline}} {{Non-standard_Inline}}
          - : Diese Eigenschaft wird nur für einen [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) verwendet, dessen [`kind`](/de/docs/Web/API/MediaStreamTrack/kind) `audio` ist. Sie gibt an, ob diskontinuierliche Übertragung verwendet werden soll. Dabei wird bei ausbleibender Sprachaktivität die Übertragung automatisch abgeschaltet oder das Mikrofon stummgeschaltet.
            Der Wert ist entweder `enabled` oder `disabled`.

        - `maxBitrate`
          - : Eine positive Ganzzahl, die die maximale Anzahl von Bits pro Sekunde angibt, die der User Agent mit dieser Kodierung kodierten Tracks zuweisen darf.
            Andere Parameter können die Bitrate weiter begrenzen, etwa der Wert von `maxFramerate` oder die für den Transport beziehungsweise das physische Netzwerk verfügbare Bandbreite.

            Der Wert wird anhand der standardisierten Bandbreite „Transport Independent Application Specific Maximum“ (TIAS) berechnet, wie in {{RFC(3890, "", "6.2.2")}} definiert. Gemeint ist die maximal benötigte Bandbreite ohne Berücksichtigung des Protokoll-Overheads von IP, TCP, UDP und ähnlichen Protokollen.

            Beachten Sie, dass eine Bitrate je nach Medium und Kodierung auf unterschiedliche Weise erreicht werden kann.
            Bei Video kann eine niedrige Bitrate beispielsweise durch das Auslassen von Frames erreicht werden (bei einer Bitrate von null könnte möglicherweise nur ein einzelner Frame gesendet werden). Bei Audio muss die Wiedergabe des Tracks unter Umständen eingestellt werden, wenn die Bitrate für eine Übertragung zu niedrig ist.

        - `maxFramerate`
          - : Ein Wert, der die maximal zulässige Anzahl von Frames pro Sekunde für diese Kodierung angibt.
        - `priority`
          - : Ein String, der die Priorität des [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) angibt. Sie kann bestimmen, wie der User Agent die Bandbreite unter den Sendern aufteilt.
            Zulässige Werte sind `very-low`, `low` (Standardwert), `medium` und `high`.
        - `rid`
          - : Ein String, der, falls gesetzt, eine _RTP stream ID_ (_RID_) angibt, die mithilfe der RID-Header-Erweiterung gesendet werden soll.
            Dieser Parameter kann nicht mit `setParameters()` geändert werden.
            Sein Wert kann nur beim erstmaligen Erstellen des Transceivers festgelegt werden.

        - `scaleResolutionDownBy`
          - : Dieser Wert wird nur für Sender verwendet, deren Track-[`kind`](/de/docs/Web/API/MediaStreamTrack/kind) `video` ist. Er ist eine Gleitkommazahl, die den Faktor angibt, um den das Video bei der Kodierung verkleinert wird.
            Der Standardwert 1.0 bedeutet, dass das Video in seiner ursprünglichen Größe kodiert wird.
            Bei einem Wert von 2.0 werden die Videoframes in jeder Dimension um den Faktor 2 verkleinert. Das resultierende Video hat damit ein Viertel der ursprünglichen Fläche.
            Der Wert darf nicht kleiner als 1.0 sein. Der Versuch, das Video zu vergrößern, löst einen {{jsxref("RangeError")}} aus.

    - `transactionId`
      - : Ein String mit einer eindeutigen ID.
        Diese ID wird beim vorherigen Aufruf von [`getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters) gesetzt und stellt sicher, dass die Parameter aus einem früheren Aufruf von [`getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters) stammen.
        <!-- spec defines following in RTCRtpParameters -->
    - `codecs`
      - : Ein Array von Objekten, die die [Mediencodecs](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs) beschreiben, aus denen der Sender auswählt.
        Dieser Parameter kann nach seiner anfänglichen Festlegung nicht mehr geändert werden.

        Jedes Codec-Objekt im Array kann folgende Eigenschaften haben: <!-- RTCRtpCodecParameters -->
        - `channels` {{optional_inline}}
          - : Eine positive Ganzzahl, die die Anzahl der vom Codec unterstützten Kanäle angibt.
            Bei Audiocodecs steht beispielsweise der Wert 1 für Mono und 2 für Stereo.

        - `clockRate`
          - : Eine positive Ganzzahl, die die Taktrate des Codecs in Hertz (Hz) angibt.
            Die Taktrate bestimmt, wie schnell der RTP-Zeitstempel des Codecs fortschreitet.
            Die meisten Codecs lassen nur bestimmte Werte oder Wertebereiche zu.
            Die IANA führt eine [Liste der Codecs und ihrer Parameter](https://www.iana.org/assignments/rtp-parameters#rtp-parameters-1), einschließlich ihrer Taktraten.

        - `mimeType`
          - : Ein String, der den MIME-Medientyp und -Untertyp des Codecs in der Form `"type/subtype"` angibt.
            Die von RTP verwendeten MIME-Typ-Strings unterscheiden sich von den andernorts verwendeten.
            Die IANA führt ein [Verzeichnis gültiger MIME-Typen](https://www.iana.org/assignments/rtp-parameters#rtp-parameters-2).
            Weitere Informationen zu möglichen Codecs, auf die hier verwiesen werden kann, finden Sie unter [Von WebRTC verwendete Codecs](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs).

        - `payloadType`
          - : Der [RTP-Payload-Typ](https://www.iana.org/assignments/rtp-parameters#rtp-parameters-1), mit dem dieser Codec identifiziert wird.

        - `sdpFmtpLine` {{optional_inline}}
          - : Ein String mit den formatspezifischen Parametern aus der lokalen Beschreibung.

    - `headerExtensions`
      - : Ein Array mit null oder mehr RTP-Header-Erweiterungen, die jeweils eine vom Sender unterstützte Erweiterung identifizieren.
        Header-Erweiterungen werden in {{RFC(3550, "", "5.3.1")}} beschrieben.
        Dieser Parameter kann nicht geändert werden.
    - `rtcp`
      - : Ein Objekt mit den Konfigurationsparametern, die der Sender für {{Glossary("RTCP", "RTCP")}} verwendet.
        Dieser Parameter kann nicht geändert werden.

        Das Objekt kann folgende Eigenschaften haben: <!-- RTCRtcpParameters -->
        - `cname`
          - : Ein schreibgeschützter String mit dem von RTCP verwendeten kanonischen Namen (CNAME), beispielsweise in SDES-Nachrichten.
        - `reducedSize`
          - : Ein schreibgeschützter boolescher Wert, der `True` ist, wenn RTCP mit reduzierter Größe konfiguriert ist ({{rfc("5506")}}), und `False`, wenn zusammengesetztes RTCP festgelegt ist ({{rfc("3550")}}).

    - `degradationPreference` {{optional_inline}}
      - : Gibt an, wie die WebRTC-Schicht die Leistung bei begrenzter Bandbreite vorzugsweise optimieren soll. Folgende Werte sind möglich:
        - `balanced`
          - : Der Standardwert. Der Browser wägt eine Verringerung der Framerate gegen eine Verringerung der Auflösung ab.
        - `maintain-framerate`
          - : Der Browser verringert die Auflösung, um die Framerate beizubehalten.
        - `maintain-resolution`
          - : Der Browser verringert die Framerate, um die Auflösung beizubehalten.
        - `maintain-framerate-and-resolution`
          - : Der Browser behält Framerate und Auflösung unabhängig von der Videoqualität bei. Falls nötig, können dadurch Frames vor der Kodierung verworfen werden, um Netzwerk- und Encoder-Ressourcen nicht übermäßig zu beanspruchen. Diese Einstellung eignet sich für Anwendungen, die einen eigenen Mechanismus zur Optimierung von Videoqualität und Leistung implementieren und nicht möchten, dass der interne Mechanismus des Browsers eingreift.

- `setParameterOptions` {{optional_inline}}
  - : Ein Objekt mit Optionen für diesen Aufruf von `setParameters()`.
    Folgende Optionen sind verfügbar:
    - `encodingOptions` {{optional_inline}}
      - : Ein Array von Objekten, die Optionen für die einzelnen Kodierungen im Array [`encodings`](#encodings) des Objekts `parameters` festlegen.
        Das Objekt an einem bestimmten Index gilt für die Kodierung am selben Index.
        Ist das Array nicht leer, muss es genauso viele Einträge wie `encodings` enthalten.
        Der Standardwert ist ein leeres Array, das keine Optionen festlegt.
        Diese Option wird ignoriert, wenn der Sender Audio sendet.

        Jedes Objekt im Array kann folgende Eigenschaft haben: <!-- RTCEncodingOptions -->
        - `keyFrame` {{optional_inline}}
          - : Ein boolescher Wert.
            Bei `true` fordert der Browser den Encoder, der die entsprechende Kodierung erzeugt, auf, einen [Keyframe](#keyframes_anfordern) zu erzeugen.
            Der Standardwert ist `false`.

### Rückgabewert

Ein {{jsxref("Promise")}}, das erfüllt wird, wenn die Eigenschaft [`RTCRtpSender.track`](/de/docs/Web/API/RTCRtpSender/track) mit den angegebenen Parametern aktualisiert wurde.
Das Promise wartet nicht darauf, dass der Encoder in `setParameterOptions` angeforderte Keyframes erzeugt.

### Ausnahmen

Wenn ein Fehler auftritt, wird das zurückgegebene Promise mit der entsprechenden Ausnahme aus der folgenden Liste abgelehnt.

- `InvalidModificationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn eines der folgenden Probleme erkannt wird:
    - Die Anzahl der Kodierungen in der Eigenschaft `encodings` des Objekts `parameters` stimmt nicht mit der Anzahl der derzeit für den `RTCRtpSender` aufgeführten Kodierungen überein.
      Nach dem Erstellen des Senders können Sie die Anzahl der Kodierungsoptionen nicht mehr ändern.
    - Die Reihenfolge der angegebenen `encodings` hat sich gegenüber der aktuellen Liste geändert.
    - Es wurde versucht, eine Eigenschaft zu ändern, die nach dem erstmaligen Erstellen des Senders nicht mehr geändert werden darf.
    - Die `transactionId` des Objekts `parameters` stimmt nicht mit derjenigen überein, die der letzte Aufruf von `getParameters()` des Senders zurückgegeben hat.
    - Das Array `encodingOptions` des Objekts `setParameterOptions` ist nicht leer und enthält nicht genauso viele Einträge wie das Array `encodings` des Objekts `parameters`.
      Der Browser überspringt diese Prüfung, wenn der Sender Audio sendet.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn der Transceiver, zu dem der `RTCRtpSender` gehört, nicht aktiv ist oder keine Parameter zum Setzen vorhanden sind.
- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn ein Fehler auftritt, der keiner der hier genannten Ausnahmen entspricht.
- {{jsxref("RangeError")}}
  - : Wird zurückgegeben, wenn der für die Option `scaleResolutionDownBy` angegebene Wert kleiner als 1.0 ist – wodurch das Video unerlaubterweise vergrößert statt verkleinert würde – oder wenn mindestens einer der angegebenen [`maxFramerate`](#maxframerate)-Werte in `encodings` kleiner als 0.0 ist.

Tritt außerdem beim Konfigurieren der Medien oder beim Zugriff darauf ein WebRTC-Fehler auf, wird ein [`RTCError`](/de/docs/Web/API/RTCError) ausgelöst, dessen [`errorDetail`](/de/docs/Web/API/RTCError/errorDetail) auf `hardware-encoder-error` gesetzt ist.

## Beschreibung

### Parameter abrufen und setzen

Das Objekt `parameters`, das Sie an `setParameters()` übergeben, muss von der Methode [`getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters) desselben Senders zurückgegeben worden sein und die von Ihnen vorgenommenen Änderungen enthalten.
Sie müssen `setParameters()` außerdem unmittelbar nach `getParameters()` aufrufen, ohne dazwischen auf etwas zu warten, etwa mit `await`.
Der Grund dafür ist, dass der Sender die von ihm gespeicherten Angaben zu den zurückgegebenen Parametern kurz nach der Ausführung von `getParameters()` verwirft.
Anhand dieser Angaben, einschließlich der `transactionId` des Objekts, prüft der Browser, ob Ihre Änderungen auf der aktuellen Konfiguration des Senders und nicht auf einer veralteten beruhen.
Wenn Sie diese Regeln nicht einhalten, wird das Promise mit einem `InvalidStateError` oder einem `InvalidModificationError` abgelehnt.

### Keyframes anfordern

Mit `setParameters()` können Sie den Encoder, der eine Videokodierung erzeugt, auffordern, einen Keyframe zu erzeugen.
So können Sie beim Ändern der Kodierungen einen Keyframe bereitstellen, ohne dass die Empfänger einen anfordern müssen.

Ein Keyframe enthält ein vollständiges Bild, während die Frames zwischen Keyframes nur die Änderungen gegenüber dem jeweils vorherigen Frame enthalten.
Ein Empfänger kann daher erst mit der Dekodierung des Videos beginnen, wenn er einen Keyframe erhalten hat.
Der Browser erzeugt automatisch Keyframes, wenn das Senden beginnt und wenn ein Empfänger einen anfordert, weil er gerade beigetreten ist oder Daten verloren hat.
Wenn Sie die Kodierungen ändern, erzeugt der Browser jedoch nicht unbedingt einen Keyframe.

Bei [Simulcast](/de/docs/Web/API/WebRTC_API/Protocols#simulcast) sendet ein Sender beispielsweise mehrere Kodierungen desselben Videos in unterschiedlichen Auflösungen, und ein Server leitet jeweils eine davon an jeden Teilnehmer weiter.
Wenn Sie die Eigenschaft `active` der hochauflösenden Kodierung auf `false` setzen, stellt der Server die Teilnehmer, die diese Kodierung empfangen haben, auf eine Kodierung mit niedrigerer Auflösung um.
Diese Teilnehmer können das Video mit niedrigerer Auflösung erst anzeigen, wenn die entsprechende Kodierung ihren nächsten Keyframe sendet.
Um diese Wartezeit zu vermeiden, setzen Sie `keyFrame` in `setParameterOptions.encodingOptions` für die Kodierungen, die einen Keyframe benötigen, auf `true` – und zwar im selben `setParameters()`-Aufruf, der die Kodierungen ändert.
Der Browser fordert die Keyframes dann an, während er die Änderung anwendet.

## Beispiele

Ein Anwendungsfall für `setParameters()` besteht darin, die beanspruchte Netzwerkbandbreite bei eingeschränkten Verbindungen zu verringern. Dazu können Sie die Auflösung und/oder Bitrate der Medien ändern, die der [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) überträgt.

Derzeit weisen die Implementierungen einiger Browser Einschränkungen auf, die Probleme verursachen können.
Deshalb zeigen die ersten beiden Beispiele zwei Varianten desselben Codes.
Das erste zeigt, wie `setParameters()` verwendet wird, wenn alle Browser die verwendeten Parameter vollständig unterstützen. Das zweite zeigt Umgehungslösungen für Einschränkungen in Browsern, die [`maxBitrate`](#maxbitrate) und [`scaleResolutionDownBy`](#scaleresolutiondownby) nicht vollständig unterstützen.

### Gemäß der Spezifikation

Sobald alle Browser die Spezifikation vollständig implementieren, erfüllt diese Implementierung von `setVideoParams()` ihren Zweck. Sie zeigt, wie alles funktionieren _sollte_.
Vorerst sollten Sie wahrscheinlich das zweite Beispiel unten verwenden.
Dieses Beispiel verdeutlicht jedoch das Grundprinzip besser: Zuerst werden die Parameter abgerufen, dann geändert und anschließend gesetzt.

```js
async function setVideoParams(sender, height, bitrate) {
  const scaleRatio = sender.track.getSettings().height / height;
  const params = sender.getParameters();

  params.encodings[0].scaleResolutionDownBy = Math.max(scaleRatio, 1);
  params.encodings[0].maxBitrate = bitrate;
  await sender.setParameters(params);
}
```

Beim Aufruf dieser Funktion geben Sie einen Sender, die gewünschte Höhe des Videos nach der Skalierung sowie eine maximal zulässige Bitrate für die Übertragung an.
Daraus wird ein Skalierungsfaktor für die Größe des Videos, `scaleRatio`, berechnet.
Anschließend werden die aktuellen Parameter des Senders mit [`getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters) abgerufen.

Dann werden im ersten Objekt von `encodings` die Eigenschaften [`scaleResolutionDownBy`](#scaleresolutiondownby) und [`maxBitrate`](#maxbitrate) auf den berechneten Skalierungsfaktor beziehungsweise die angegebene maximale `bitrate` gesetzt.

Abschließend werden die geänderten Parameter durch einen Aufruf der Methode `setParameters()` des Senders gespeichert.

### Derzeit kompatible Implementierung

Wie oben erwähnt, zeigt das vorherige Beispiel, wie die Funktion vorgesehen ist.
Leider verhindern derzeit Implementierungsprobleme in vielen Browsern, dass sie so funktioniert.
Wenn Ihr Code mit iPhones und anderen Geräten mit Safari sowie mit Firefox kompatibel sein soll, verwenden Sie daher eher eine Variante wie diese:

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

- Wenn `encodings` `null` ist, erstellen wir es, damit wir die Parameter anschließend setzen können, ohne dass ein Fehler auftritt.
- Wenn der Wert von `scaleResolutionDownBy` nach dem Setzen der Parameter immer noch 1 ist, rufen wir die Methode [`applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) des Tracks des Senders auf, um die Höhe des Tracks auf `height` zu begrenzen.
  Damit wird kompensiert, dass `scaleResolutionDownBy` nicht implementiert ist (was zum Zeitpunkt der Erstellung dieses Textes bei Safari der Fall ist).

Wenn der Browser die verwendeten Funktionen vollständig implementiert, verwendet dieser Code ohne Probleme den normalen Weg.

### Keyframes beim Deaktivieren einer Kodierung anfordern

Dieses Beispiel zeigt, wie Sie Keyframes anfordern, wenn Sie das Senden einer von mehreren Kodierungen beenden.
Es geht von einem Videoanruf aus, bei dem der Sender mithilfe von Simulcast mehrere Kodierungen in unterschiedlichen Auflösungen sendet und ein Server jeweils eine davon an jeden Teilnehmer weiterleitet.
Wenn der Code eine Kodierung deaktiviert, stellt der Server die Teilnehmer, die sie empfangen haben, auf eine der anderen Kodierungen um. Diese Teilnehmer können das Video erst anzeigen, wenn sie einen Keyframe erhalten.
Der Code fordert deshalb für jede weiterhin aktive Kodierung einen Keyframe an.

Die Funktion `deactivateEncoding()` ruft die aktuellen Parameter des Senders ab und setzt `active` für die Kodierung an der Position `deactivateIndex` auf `false`.
Anschließend erstellt sie ein Array `encodingOptions` mit einem Objekt für jeden Eintrag in `params.encodings` und setzt `keyFrame` für jede weiterhin aktive Kodierung auf `true`.
Schließlich übergibt sie die geänderten Parameter und die Optionen an `setParameters()`. Dadurch werden die Keyframes angefordert, während die Änderung der Kodierungen angewendet wird.

```js
async function deactivateEncoding(sender, deactivateIndex) {
  const params = sender.getParameters();
  params.encodings[deactivateIndex].active = false;
  const encodingOptions = params.encodings.map((encoding) => ({
    keyFrame: encoding.active,
  }));
  await sender.setParameters(params, { encodingOptions });
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`RTCRtpScriptTransformer.generateKeyFrame()`](/de/docs/Web/API/RTCRtpScriptTransformer/generateKeyFrame)
- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Einen Keyframe auslösen](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms#triggering_a_key_frame) in „WebRTC Encoded Transforms verwenden“
- [Von WebRTC verwendete Codecs](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs)
- [Web-Medientechnologien](/de/docs/Web/Media)
