---
title: "RTCRtpSender: setParameters()-Methode"
short-title: setParameters()
slug: Web/API/RTCRtpSender/setParameters
l10n:
  sourceCommit: 2f53eb3a5787b7270be54265fb5e6c5db97869d2
---

{{APIRef("WebRTC API")}}

Die **`setParameters()`**-Methode der [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)-Schnittstelle wendet Änderungen an der Konfiguration des Senders [`track`](/de/docs/Web/API/RTCRtpSender/track) an, also dem [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack), für den der `RTCRtpSender` verantwortlich ist.

Mit anderen Worten, `setParameters()` aktualisiert die Konfiguration der {{Glossary("RTP", "RTP")}}-Übertragung sowie die Kodierungskonfiguration für einen bestimmten ausgehenden Mediatrack der [WebRTC](/de/docs/Web/API/WebRTC_API)-Verbindung.

## Syntax

```js-nolint
setParameters(parameters)
```

### Parameter

- `parameters`
  - : Ein Parameterobjekt, das zuvor durch Aufruf der [`getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters)-Methode desselben Senders erhalten wurde, mit den gewünschten Änderungen an den Konfigurationsparametern des Senders.
    Diese Parameter umfassen potenzielle Codecs, die zur Kodierung des Senders [`track`](/de/docs/Web/API/RTCRtpSender/track) verwendet werden könnten.
    Die verfügbaren Parameter sind:
    - `encodings`
      - : Ein Array von Objekten, von denen jedes die Parameter für einen einzelnen Codec spezifiziert, der zur Kodierung des Medientracks verwendet werden könnte.
        Zu den Eigenschaften der Objekte gehören:
        - `active`
          - : Wenn dieser Wert auf `true` (Standard) gesetzt wird, wird diese Kodierung gesendet, während `false` bewirkt, dass sie nicht gesendet und verwendet wird (aber nicht zur Entfernung der SSRC führt).

        - `codec` {{optional_inline}}
          - : Wählt den [Media-Codec](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs) aus, der für den RTP-Stream dieser Kodierung verwendet wird.
            Wenn nicht gesetzt, kann der Benutzer-Agent jeden für das Senden ausgehandelten Codec auswählen.
            <!-- RTCRtpCodec -->
            - `channels` {{optional_inline}}
              - : Eine positive Ganzzahl, die die Anzahl der vom Codec unterstützten Kanäle angibt.
                Zum Beispiel spezifiziert ein Wert von 1 für Audiocodecs Mono-Klang, während 2 Stereo angibt.

            - `clockRate`
              - : Eine positive Ganzzahl, die die Taktrate des Codecs in Hertz (Hz) angibt.
                Die Taktrate ist die Rate, mit der sich der RTP-Zeitstempel des Codecs erhöht.
                Die meisten Codecs haben spezifische Werte oder Wertebereiche, die sie erlauben.
                Die IANA führt eine [Liste von Codecs und deren Parametern](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-1), einschließlich ihrer Taktraten.

            - `mimeType`
              - : Ein String, der den MIME-Medientyp und den Subtyp des Codecs angibt, angegeben als ein String der Form `"type/subtype"`.
                Die von RTP verwendeten MIME-Typ-Strings unterscheiden sich von denen, die anderweitig verwendet werden.
                Die IANA führt ein [Register gültiger MIME-Typen](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-2).
                Siehe auch [Codecs used by WebRTC](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs) für Details zu potenziellen Codecs, die hier referenziert werden könnten.

            - `sdpFmtpLine` {{optional_inline}}
              - : Ein String, der die formatspezifischen Parameter angibt, die von der lokalen Beschreibung bereitgestellt werden.

        - `dtx` {{Deprecated_Inline}} {{Non-standard_Inline}}
          - : Wird nur für einen [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) verwendet, dessen [`kind`](/de/docs/Web/API/MediaStreamTrack/kind) `audio` ist. Diese Eigenschaft gibt an, ob diskontinuierliche Übertragung verwendet werden soll (ein Feature, durch das ein Telefon ausgeschaltet wird oder das Mikrofon automatisch stummgeschaltet wird, wenn keine Sprachaktivität vorliegt).
            Der Wert ist entweder `enabled` oder `disabled`.

        - `maxBitrate`
          - : Eine positive Ganzzahl, die die maximale Anzahl von Bits pro Sekunde angibt, die dem Benutzer-Agenten gewährt werden darf, um Tracks mit dieser Kodierung zu kodieren.
            Andere Parameter können die Bitrate weiter einschränken, wie der Wert von `maxFramerate` oder die für den Transport oder das physikalische Netzwerk verfügbare Bandbreite.

            Der Wert wird anhand der Standard-Transportunabhängigen Anwendungsspezifischen Maximalbandbreite (TIAS) berechnet, wie in {{RFC(3890, "", "6.2.2")}} definiert; dies ist die maximale benötigte Bandbreite ohne Berücksichtigung von Protokolloverheads von IP, TCP oder UDP und so weiter.

            Beachten Sie, dass die Bitrate auf verschiedene Weise erreicht werden kann, abhängig vom Medium und der Kodierung.
            Beispielsweise kann für Video eine niedrige Bitrate erreicht werden, indem Frames weggelassen werden (eine Bitrate von null könnte nur einen Frame senden lassen), während für Audio der Track möglicherweise aufhören muss zu spielen, wenn die Bitrate zu gering ist, um gesendet zu werden.

        - `maxFramerate`
          - : Ein Wert, der die maximale Anzahl von Frames pro Sekunde angibt, die für diese Kodierung erlaubt sind.
        - `priority`
          - : Ein String, der die Priorität des [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) angibt, die bestimmen kann, wie der Benutzer-Agent die Bandbreite zwischen Sendern verteilt.
            Erlaubte Werte sind `very-low`, `low` (Standard), `medium`, `high`.
        - `rid`
          - : Ein String, der, falls gesetzt, eine _RTP-Stream-ID_ (_RID_) angibt, die mit der RID-Header-Erweiterung gesendet wird.
            Dieser Parameter kann nicht mit `setParameters()` modifiziert werden.
            Sein Wert kann nur gesetzt werden, wenn der Transceiver zuerst erstellt wird.

        - `scaleResolutionDownBy`
          - : Wird nur für Sender verwendet, deren Track [`kind`](/de/docs/Web/API/MediaStreamTrack/kind) `video` ist. Dies ist ein Gleitkommawert, der einen Faktor angibt, um den das Video während der Kodierung herunterskaliert wird.
            Der Standardwert beträgt 1,0, was bedeutet, dass das Video in seiner ursprünglichen Größe kodiert wird.
            Ein Wert von 2,0 skaliert die Videoframes um einen Faktor von 2 in jeder Dimension herunter, was zu einem Video führt, das ein Viertel der ursprünglichen Größe beträgt.
            Der Wert darf nicht kleiner als 1,0 sein (ein Versuch, das Video auf eine größere Größe zu skalieren, wird einen {{jsxref("RangeError")}} auslösen).

    - `transactionId`
      - : Ein String, der eine eindeutige ID enthält.
        Diese ID wird im vorherigen Aufruf von [`getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters) gesetzt und stellt sicher, dass die Parameter von einem vorherigen Aufruf von [`getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters) stammen.
        <!-- spec defines following in RTCRtpParameters -->
    - `codecs`
      - : Ein Array von Objekten, das die [Media-Codecs](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs) beschreibt, aus denen der Sender auswählen wird.
        Dieser Parameter kann nach der ersten Einstellung nicht mehr geändert werden.

        Jedes Codec-Objekt im Array kann die folgenden Eigenschaften haben: <!-- RTCRtpCodecParameters -->
        - `channels` {{optional_inline}}
          - : Eine positive Ganzzahl, die die Anzahl der vom Codec unterstützten Kanäle angibt.
            Zum Beispiel spezifiziert ein Wert von 1 für Audiocodecs Mono-Klang, während 2 Stereo angibt.

        - `clockRate`
          - : Eine positive Ganzzahl, die die Taktrate des Codecs in Hertz (Hz) angibt.
            Die Taktrate ist die Rate, mit der sich der RTP-Zeitstempel des Codecs erhöht.
            Die meisten Codecs haben spezifische Werte oder Wertebereiche, die sie erlauben.
            Die IANA führt eine [Liste von Codecs und deren Parametern](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-1), einschließlich ihrer Taktraten.

        - `mimeType`
          - : Ein String, der den MIME-Medientyp und den Subtyp des Codecs angibt, spezifiziert als ein String der Form `"type/subtype"`.
            Die von RTP verwendeten MIME-Typ-Strings unterscheiden sich von denen, die anderweitig verwendet werden.
            Die IANA führt ein [Register gültiger MIME-Typen](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-2).
            Siehe auch [Codecs used by WebRTC](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs) für Details zu potenziellen Codecs, die hier referenziert werden könnten.

        - `payloadType`
          - : Der [RTP-Payload-Typ](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-1), der verwendet wird, um diesen Codec zu identifizieren.

        - `sdpFmtpLine` {{optional_inline}}
          - : Ein String, der die formatspezifischen Parameter angibt, die von der lokalen Beschreibung bereitgestellt werden.

    - `headerExtensions`
      - : Ein Array von null oder mehr RTP-Header-Erweiterungen, wobei jede Erweiterung von dem Sender unterstützt wird.
        Header-Erweiterungen werden in {{RFC(3550, "", "5.3.1")}} beschrieben.
        Dieser Parameter kann nicht geändert werden.
    - `rtcp`
      - : Ein Objekt, das die Konfigurationsparameter bereitstellt, die für {{Glossary("RTCP", "RTCP")}} auf dem Sender verwendet werden.
        Dieser Parameter kann nicht geändert werden.

        Das Objekt kann die folgenden Eigenschaften haben: <!-- RTCRtcpParameters -->
        - `cname`
          - : Ein schreibgeschützter String, der den kanonischen Namen (CNAME) angibt, der von RTCP verwendet wird (z. B. in SDES-Nachrichten).
        - `reducedSize`
          - : Ein schreibgeschütztes Boolean, das `True` ist, wenn RTCP in reduzierter Größe konfiguriert ist ({{rfc("5506")}}), und `False`, wenn zusammengesetzte RTCP spezifiziert ist ({{rfc("3550")}}).

    - `degradationPreference` {{optional_inline}}
      - : Gibt an, auf welche Weise die WebRTC-Schicht bevorzugt mit der Leistungsoptimierung in bandwidth-eingeschränkten Situationen umgehen soll. Die möglichen Werte sind:
        - `balanced`
          - : Der Standardwert. Der Browser wird das Gleichgewicht zwischen der Verschlechterung der Framerate und der Auflösung wahren.
        - `maintain-framerate`
          - : Der Browser wird die Auflösung verschlechtern, um die Framerate beizubehalten.
        - `maintain-resolution`
          - : Der Browser wird die Framerate verschlechtern, um die Auflösung beizubehalten.
        - `maintain-framerate-and-resolution`
          - : Der Browser wird die Framerate und die Auflösung beibehalten, unabhängig von der Videoqualität, was dazu führen kann, dass Frames vor dem Kodieren fallen gelassen werden, um nicht Netzwerk- und Encodierungsressourcen zu überbeanspruchen. Diese Einstellung ist nützlich für Anwendungen, die ihren eigenen Mechanismus zur Optimierung der Videoenkodierungsqualität und -leistung umsetzen und nicht möchten, dass die interne Methode des Browsers diese stört.

### Rückgabewert

Ein {{jsxref("Promise")}}, der aufgelöst wird, wenn die [`RTCRtpSender.track`](/de/docs/Web/API/RTCRtpSender/track)-Eigenschaft mit den gegebenen Parametern aktualisiert wird.

### Ausnahmen

Wenn ein Fehler auftritt, wird das zurückgegebene Promise mit der passenden Ausnahme aus der nachstehenden Liste abgelehnt.

- `InvalidModificationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn eines der folgenden Probleme erkannt wird:
    - Die Anzahl der im `parameters`-Objekt angegebenen `encodings`-Einträge stimmt nicht mit der derzeit für den `RTCRtpSender` aufgeführten Anzahl überein.
      Sie können die Anzahl der Kodierungsoptionen nicht ändern, nachdem der Sender erstellt wurde.
    - Die Reihenfolge der angegebenen `encodings` hat sich von der aktuellen Liste geändert.
    - Es wurde versucht, eine Eigenschaft zu ändern, die nach der ersten Erstellung des Senders nicht geändert werden kann.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn der Transceiver, zu dem der `RTCRtpSender` gehört, nicht läuft oder keine zu setzenden Parameter hat.
- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn ein Fehler auftritt, der nicht den hier angegebenen entspricht.
- {{jsxref("RangeError")}}
  - : Wird zurückgegeben, wenn der für die Option `scaleResolutionDownBy` angegebene Wert kleiner als 1,0 ist — was zu einer Vergrößerung anstelle einer Verkleinerung führen würde, was nicht erlaubt ist; oder wenn einer oder mehrere der angegebenen `encodings`-Werte für [`maxFramerate`](#maxframerate) kleiner als 0,0 sind.

Zusätzlich, wenn ein WebRTC-Fehler beim Konfigurieren oder Zugreifen auf das Medium auftritt, wird ein [`RTCError`](/de/docs/Web/API/RTCError) ausgelöst, dessen [`errorDetail`](/de/docs/Web/API/RTCError/errorDetail) auf `hardware-encoder-error` gesetzt ist.

## Beschreibung

Es ist wichtig zu beachten, dass Sie das `parameters`-Objekt nicht selbst erstellen können und erwarten, dass es funktioniert.
Stattdessen _müssen_ Sie zunächst [`getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters) aufrufen, das empfangene Parameterobjekt ändern und dann dieses Objekt in `setParameters()` übergeben.
WebRTC verwendet die `transactionId`-Eigenschaft des Parameterobjekts, um sicherzustellen, dass Ihre Einstellungen auf den neuesten Parametern basieren und nicht auf einer veralteten Konfiguration.

## Beispiele

Ein Anwendungsfall für `setParameters()` ist der Versuch, die Netzbandbreite in eingeschränkten Umgebungen zu verringern, indem die Auflösung und/oder die Bitrate des Mediums, das vom [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) gesendet wird, geändert wird.

Derzeit haben einige Browser Einschränkungen in ihren Implementierungen, die Probleme verursachen können.
Aus diesem Grund werden hier zwei Beispiele gegeben.
Das erste zeigt, wie `setParameters()` verwendet wird, wenn alle Browser die verwendeten Parameter vollständig unterstützen, während das zweite Beispiel Workarounds zeigt, um Einschränkungen in Browsern mit unvollständiger Unterstützung für die Parameter [`maxBitrate`](#maxbitrate) und [`scaleResolutionDownBy`](#scaleresolutiondownby) zu lösen.

### Nach der Spezifikation

Sobald alle Browser die Spezifikation vollständig implementieren, wird diese Implementierung von `setVideoParams()` die Aufgabe erledigen. Dies demonstriert, wie alles _funktionieren sollte_.
Sie sollten wahrscheinlich das zweite Beispiel unten verwenden.
Aber das ist eine klarere Darstellung des grundlegenden Konzepts, zuerst die Parameter zu holen, dann zu ändern und dann zu setzen.

```js
async function setVideoParams(sender, height, bitrate) {
  const scaleRatio = sender.track.getSettings().height / height;
  const params = sender.getParameters();

  params.encodings[0].scaleResolutionDownBy = Math.max(scaleRatio, 1);
  params.encodings[0].maxBitrate = bitrate;
  await sender.setParameters(params);
}
```

Beim Aufruf dieser Funktion spezifizieren Sie einen Sender sowie die Höhe, auf die Sie das Video des Senders skalieren möchten, sowie eine maximale Bitrate, die dem Sender erlaubt ist zu senden.
Ein Skalierungsfaktor für die Größe des Videos, `scaleRatio`, wird berechnet.
Dann werden die aktuellen Parameter des Senders mit [`getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters) geholt.

Die Parameter werden dann geändert, indem die erste `encodings`-Eigenschaft [`scaleResolutionDownBy`](#scaleresolutiondownby) und [`maxBitrate`](#maxbitrate) auf den berechneten Skalierungsfaktor und die angegebene maximale `bitrate` gesetzt werden.

Die geänderten Parameter werden dann durch Aufruf der `setParameters()`-Methode des Senders gespeichert.

### Aktuell kompatible Implementierung

Wie oben erwähnt, zeigt das vorherige Beispiel, wie die Dinge funktionieren sollen.
Leider gibt es derzeit Implementierungsprobleme, die dies in vielen Browsern verhindern.
Aus diesem Grund, wenn Sie auf dem iPhone und anderen Geräten, die Safari und Firefox ausführen, kompatibel sein wollen, verwenden Sie eher diesen Code:

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

- Wenn `encodings` `null` ist, erstellen wir es, um sicherzustellen, dass wir dann die Parameter ohne Absturz erfolgreich setzen können.
- Wenn der Wert von `scaleResolutionDownBy` nach dem Setzen der Parameter immer noch 1 ist, rufen wir die Methode [`applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) des Senders auf, um die Höhe des Tracks auf `height` zu beschränken.
  Dies kompensiert eine nicht implementierte `scaleResolutionDownBy` (wie im Safari zum Zeitpunkt dieses Schreibens der Fall).

Dieser Code wird sauber zurückfallen und auf die normale Weise funktionieren, wenn der Browser die verwendeten Funktionen vollständig implementiert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Codecs used by WebRTC](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs)
- [Webmedientechnologien](/de/docs/Web/Media)
