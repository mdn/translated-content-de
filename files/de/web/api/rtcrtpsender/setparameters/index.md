---
title: "RTCRtpSender: Methode setParameters()"
short-title: setParameters()
slug: Web/API/RTCRtpSender/setParameters
l10n:
  sourceCommit: f2dc3d5367203c860cf1a71ce0e972f018523849
---

{{APIRef("WebRTC API")}}

Die **`setParameters()`**-Methode des [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)-Interfaces übernimmt Änderungen an der Konfiguration des Senders [`track`](/de/docs/Web/API/RTCRtpSender/track), welches der [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) ist, für den der `RTCRtpSender` zuständig ist.

Mit anderen Worten, `setParameters()` aktualisiert die Konfiguration der {{Glossary("RTP", "RTP")}}-Übertragung sowie die Codierungskonfiguration für einen bestimmten ausgehenden Medientrack auf der [WebRTC](/de/docs/Web/API/WebRTC_API)-Verbindung.

## Syntax

```js-nolint
setParameters(parameters)
```

### Parameter

- `parameters`

  - : Ein Parameterobjekt, das zuvor durch Aufruf der Methode [`getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters) desselben Senders erhalten wurde, mit den gewünschten Änderungen an den Konfigurationsparametern des Senders.
    Diese Parameter umfassen potenzielle Codecs, die zur Kodierung des Senders [`track`](/de/docs/Web/API/RTCRtpSender/track) verwendet werden könnten.
    Die verfügbaren Parameter sind:

    - `encodings`

      - : Ein Array von Objekten, die jeweils die Parameter für einen einzelnen Codec angeben, der verwendet werden könnte, um die Medien des Tracks zu kodieren.
        Die Eigenschaften der Objekte beinhalten:

        - `active`

          - : Wenn dieser Wert auf `true` (Standard) gesetzt ist, wird diese Kodierung gesendet, während `false` sie stoppt (aber nicht dazu führt, dass die SSRC entfernt wird).

        - `dtx` {{Deprecated_Inline}} {{Non-standard_Inline}}

          - : Wird nur für einen [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) verwendet, dessen [`kind`](/de/docs/Web/API/MediaStreamTrack/kind) `audio` ist. Diese Eigenschaft zeigt an, ob eine unterbrochene Übertragung verwendet werden soll (eine Funktion, durch die ein Telefon ausgeschaltet oder das Mikrofon automatisch stummgeschaltet wird, wenn keine Sprachaktivität vorliegt).
            Der Wert ist entweder `enabled` oder `disabled`.

        - `maxBitrate`

          - : Eine positive Ganzzahl, die die maximale Anzahl von Bits pro Sekunde angibt, die der Benutzeragent Tracks gewähren darf, die mit dieser Kodierung kodiert werden.
            Andere Parameter können die Bitrate weiter begrenzen, wie der Wert von `maxFramerate` oder die für den Transport oder das physische Netzwerk verfügbare Bandbreite.

            Der Wert wird unter Verwendung der Transport Independent Application Specific Maximum (TIAS)-Bandbreite berechnet, wie sie von {{RFC(3890, "", "6.2.2")}} definiert wird; dies ist die maximale benötigte Bandbreite ohne Berücksichtigung von Protokoll-Overheads durch IP, TCP oder UDP usw.

            Beachten Sie, dass die Bitrate auf verschiedene Weise erreicht werden kann, abhängig von den Medien und der Kodierung.
            Zum Beispiel könnte bei Video eine niedrige Bitrate erreicht werden, indem Frames ausgelassen werden (eine Bitrate von null könnte erlauben, dass nur ein Frame gesendet wird), während bei Audio der Track möglicherweise aufhören muss zu spielen, wenn die Bitrate zu niedrig ist, um sie zu senden.

        - `maxFramerate`
          - : Ein Wert, der die maximale Anzahl von Frames pro Sekunde angibt, die für diese Kodierung erlaubt sind.
        - `priority`
          - : Ein String, der die Priorität des [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) angibt, die möglicherweise bestimmt, wie der Benutzeragent die Bandbreite zwischen Sendern zuteilt.
            Erlaubte Werte sind `very-low`, `low` (Standard), `medium`, `high`.
        - `rid`

          - : Ein String, der, falls gesetzt, eine _RTP stream ID_ (_RID_) spezifiziert, die mittels der RID-Headererweiterung gesendet wird.
            Dieser Parameter kann nicht mit `setParameters()` geändert werden.
            Sein Wert kann nur bei erster Erstellung des Transceivers festgelegt werden.

        - `scaleResolutionDownBy`
          - : Wird nur für Sender verwendet, deren Track's [`kind`](/de/docs/Web/API/MediaStreamTrack/kind) `video` ist. Dies ist ein Gleitkommawert, der einen Faktor angibt, um den das Video während der Codierung herunterskaliert werden soll.
            Der Standardwert 1.0 bedeutet, dass das Video in seiner ursprünglichen Größe kodiert wird.
            Ein Wert von 2.0 skaliert die Videoframes um einen Faktor von 2 in jeder Dimension, was zu einem Video führt, das 1/4 der ursprünglichen Größe ist.
            Der Wert darf nicht kleiner als 1.0 sein (der Versuch, das Video auf eine größere Größe zu skalieren, führt zu einem {{jsxref("RangeError")}}).

    - `transactionId`
      - : Ein String, der eine eindeutige ID enthält.
        Diese ID wird im vorherigen Aufruf von [`getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters) festgelegt und stellt sicher, dass die Parameter aus einem vorherigen Aufruf von [`getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters) stammen.
    - `codecs`

      - : Ein Array von Objekten, die die [Mediencodecs](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs) beschreiben, aus denen der Sender auswählen wird.
        Dieser Parameter kann nach der Initialisierung nicht geändert werden.

        Jedes Codec-Objekt im Array kann die folgenden Eigenschaften haben:

        - `channels` {{optional_inline}}

          - : Eine positive Ganzzahl, die die Anzahl der vom Codec unterstützten Kanäle angibt.
            Zum Beispiel spezifiziert für Audio-Codecs ein Wert von 1 Mono-Sound, während 2 Stereo angibt.

        - `clockRate`

          - : Eine positive Ganzzahl, die die Abtastrate des Codecs in Hertz (Hz) angibt.
            Die Abtastrate ist die Rate, mit der der RTP-Zeitstempel des Codecs fortschreitet.
            Die meisten Codecs haben spezifische Werte oder Wertebereiche, die sie zulassen.
            Die IANA führt eine [Liste von Codecs und ihren Parametern](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-1), einschließlich ihrer Abtastraten.

        - `mimeType`

          - : Ein String, der den MIME-Medientyp und -Untertyp des Codecs angibt, angegeben als ein String der Form `"type/subtype"`.
            Die MIME-Type-Strings, die von RTP verwendet werden, unterscheiden sich von denen, die anderswo verwendet werden.
            Die IANA führt ein [Verzeichnis gültiger MIME-Typen](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-2).
            Siehe auch [Codecs, die von WebRTC verwendet werden](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs) für Details über potenziell hier referenzierte Codecs.

        - `payloadType`

          - : Der [RTP-Payload-Typ](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-1), der zur Identifikation dieses Codecs verwendet wird.

        - `sdpFmtpLine` {{optional_inline}}
          - : Ein String, der die format-spezifischen Parameter angibt, die von der lokalen Beschreibung bereitgestellt werden.

    - `headerExtensions`
      - : Ein Array von null oder mehr RTP-Header-Erweiterungen, die jeweils eine vom Sender unterstützte Erweiterung identifizieren.
        Header-Erweiterungen sind beschrieben in {{RFC(3550, "", "5.3.1")}}.
        Dieser Parameter kann nicht geändert werden.
    - `rtcp`
      - : Ein [`RTCRtcpParameters`](/de/docs/Web/API/RTCRtcpParameters)-Objekt, das die Konfigurationsparameter für {{Glossary("RTCP", "RTCP")}} beim Sender bereitstellt.
        Dieser Parameter kann nicht geändert werden.
    - `degradationPreference` {{deprecated_inline}}
      - : Gibt die bevorzugte Methode an, wie die WebRTC-Schicht die Optimierung der Bandbreite gegenüber der Qualität in Situationen mit eingeschränkter Bandbreite behandeln sollte.
        Die möglichen Werte sind `maintain-framerate`, `maintain-resolution` oder `balanced`.
        Der Standardwert ist `balanced`.

### Rückgabewert

Ein {{jsxref("Promise")}}, das aufgelöst wird, wenn die Eigenschaft [`RTCRtpSender.track`](/de/docs/Web/API/RTCRtpSender/track) mit den angegebenen Parametern aktualisiert wird.

### Ausnahmen

Wenn ein Fehler auftritt, wird das zurückgegebene Promise mit der entsprechenden Ausnahme aus der folgenden Liste abgelehnt.

- `InvalidModificationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn eines der folgenden Probleme erkannt wird:
    - Die Anzahl der in der `parameters`-Eigenschaft `encodings` angegebenen Kodierungen stimmt nicht mit der Anzahl der Kodierungen überein, die derzeit für den `RTCRtpSender` aufgeführt sind.
      Sie können die Anzahl der Kodierungsoptionen nicht ändern, nachdem der Sender erstellt wurde.
    - Die Reihenfolge der angegebenen `encodings` hat sich gegenüber der aktuellen Liste geändert.
    - Es wurde versucht, eine Eigenschaft zu ändern, die nach der ersten Erstellung des Senders nicht geändert werden kann.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn der Transceiver, zu dem der `RTCRtpSender` gehört, nicht läuft oder keine zu setzenden Parameter hat.
- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn ein Fehler auftritt, der nicht mit denen übereinstimmt, die hier angegeben sind.
- {{jsxref("RangeError")}}
  - : Wird zurückgegeben, wenn der für die Option `scaleResolutionDownBy` angegebene Wert kleiner als 1.0 ist — dies würde zu einem Hochskalieren führen, was nicht erlaubt ist; oder wenn einer oder mehrere der angegebenen `encodings` [`maxFramerate`](#maxframerate)-Werte kleiner als 0.0 sind.

Darüber hinaus, wenn ein WebRTC-Fehler beim Konfigurieren oder Zugreifen auf die Medien auftritt, wird ein [`RTCError`](/de/docs/Web/API/RTCError) ausgelöst, dessen [`errorDetail`](/de/docs/Web/API/RTCError/errorDetail) auf `hardware-encoder-error` gesetzt ist.

## Beschreibung

Es ist wichtig zu beachten, dass Sie das `parameters`-Objekt nicht selbst erstellen und erwarten können, dass es funktioniert.
Stattdessen _müssen_ Sie zuerst [`getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters) aufrufen, die erhaltenen Parameter ändern und dann dieses Objekt in `setParameters()` übergeben.
WebRTC verwendet die `transactionId`-Eigenschaft des Parameterobjekts, um sicherzustellen, dass, wenn Sie Parameter setzen, Ihre Änderungen auf den neuesten Parametern basieren und nicht auf einer veralteten Konfiguration.

## Beispiele

Ein Anwendungsfall für `setParameters()` ist der Versuch, die Netzwerkbandbreite in eingeschränkten Umgebungen zu reduzieren, indem die Auflösung und/oder die Bitrate der vom [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) übertragenen Medien geändert wird.

Derzeit gibt es in einigen Browsern Einschränkungen bei ihrer Implementierung, die Probleme verursachen können.
Aus diesem Grund werden hier zwei Beispiele gegeben.
Das erste zeigt, wie `setParameters()` verwendet wird, wenn alle Browser die verwendeten Parameter vollständig unterstützen, während das zweite Beispiel Umgehungen zeigt, um Probleme in Browsern mit unvollständiger Unterstützung für die Parameter [`maxBitrate`](#maxbitrate) und [`scaleResolutionDownBy`](#scaleresolutiondownby) zu lösen.

### Nach der Spezifikation

Sobald alle Browser die Spezifikation vollständig implementieren, wird diese Implementierung von `setVideoParams()` die Aufgabe erfüllen. Dies demonstriert, wie alles _sollte_ funktionieren.
Sie sollten derzeit wahrscheinlich das zweite Beispiel unten verwenden.
Aber das ist eine klarere Demonstration des grundlegenden Konzepts, zuerst die Parameter abzurufen, sie dann zu ändern und sie dann festzulegen.

```js
async function setVideoParams(sender, height, bitrate) {
  const scaleRatio = sender.track.getSettings().height / height;
  const params = sender.getParameters();

  params.encodings[0].scaleResolutionDownBy = Math.max(scaleRatio, 1);
  params.encodings[0].maxBitrate = bitrate;
  await sender.setParameters(params);
}
```

Bei diesem Funktionsaufruf geben Sie einen Sender an, sowie die Höhe, auf die Sie das Video des Senders skalieren möchten, und eine maximale Bitrate, die der Sender senden darf.
Ein Skalierungsfaktor für die Größe des Videos, `scaleRatio`, wird berechnet.
Dann werden die aktuellen Parameter des Senders mit [`getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters) abgerufen.

Die Parameter werden dann geändert, indem das erste `encodings`-Objekt [`scaleResolutionDownBy`](#scaleresolutiondownby) und [`maxBitrate`](#maxbitrate) auf den berechneten Skalierungsfaktor und die angegebene maximale `bitrate` gesetzt wird.

Die geänderten Parameter werden dann durch Aufruf der `setParameters()`-Methode des Senders gespeichert.

### Derzeit kompatible Implementierung

Wie oben erwähnt, zeigt das vorherige Beispiel, wie die Dinge funktionieren sollen.
Leider gibt es derzeit Implementierungsprobleme, die dies in vielen Browsern verhindern.
Aus diesem Grund, wenn Sie kompatibel mit iPhone und anderen Geräten sein möchten, die Safari ausführen, und mit Firefox, verwenden Sie Code, der mehr so aussieht:

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

- Wenn `encodings` `null` ist, erstellen wir es, um sicherzustellen, dass wir die Parameter erfolgreich setzen können, ohne abzustürzen.
- Wenn der Wert von `scaleResolutionDownBy` nach dem Setzen der Parameter immer noch 1 ist, rufen wir die Methode [`applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) des Tracks des Senders auf, um die Höhe des Tracks auf `height` zu beschränken.
  Dies kompensiert ein nicht implementiertes `scaleResolutionDownBy` (wie es in Safari zum Zeitpunkt dieses Schreibens der Fall ist).

Dieser Code fällt sauber zurück und funktioniert auf die normale Weise, wenn der Browser die verwendeten Funktionen vollständig implementiert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Codecs, die von WebRTC verwendet werden](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs)
- [Web Medientechnologien](/de/docs/Web/Media)
