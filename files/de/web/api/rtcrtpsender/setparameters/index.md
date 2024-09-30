---
title: "RTCRtpSender: Methode setParameters()"
short-title: setParameters()
slug: Web/API/RTCRtpSender/setParameters
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("WebRTC API")}}

Die **`setParameters()`** Methode der Schnittstelle [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) wendet Änderungen an der Konfiguration des `sender`-[`track`](/de/docs/Web/API/RTCRtpSender/track) an, welches der [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) ist, für den der `RTCRtpSender` verantwortlich ist.

Mit anderen Worten, `setParameters()` aktualisiert die Konfiguration der [RTP](/de/docs/Glossary/RTP)-Übertragung sowie die Codierungskonfiguration für einen bestimmten ausgehenden Medientrack auf der [WebRTC](/de/docs/Web/API/WebRTC_API)-Verbindung.

## Syntax

```js-nolint
setParameters(parameters)
```

### Parameter

- `parameters`

  - : Ein Parameterobjekt, das zuvor durch Aufruf der gleichen `sender`-Methode [`getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters) erhalten wurde, mit den gewünschten Änderungen an den Konfigurationsparametern des Senders.
    Diese Parameter umfassen potenzielle Codecs, die für die Codierung des `sender`-`track`s verwendet werden könnten.
    Die verfügbaren Parameter sind:

    - `encodings`

      - : Ein Array von Objekten, die jeweils die Parameter für einen einzelnen Codec spezifizieren, der zur Codierung der Mediendaten des Tracks verwendet werden könnte.
        Die Eigenschaften der Objekte umfassen:

        - `active`

          - : Wenn dieser Wert auf `true` gesetzt ist (Standard), wird diese Codierung gesendet, während `false` sie davon abhält, gesendet und verwendet zu werden (entfernt jedoch nicht die SSRC).

        - `dtx` {{Deprecated_Inline}} {{Non-standard_Inline}}

          - : Nur für einen [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) verwendet, dessen [`kind`](/de/docs/Web/API/MediaStreamTrack/kind) `audio` ist. Diese Eigenschaft zeigt an, ob eine unterbrochene Übertragung verwendet werden soll (eine Funktion, bei der ein Telefon ausgeschaltet oder das Mikrofon automatisch bei Abwesenheit von Sprachaktivität stummgeschaltet wird).
            Der Wert kann entweder `enabled` oder `disabled` sein.

        - `maxBitrate`

          - : Eine positive Ganzzahl, die die maximale Anzahl von Bits pro Sekunde angibt, die der User Agent für Tracks, die mit dieser Codierung codiert sind, gewähren darf.
            Andere Parameter können die Bitrate weiter einschränken, wie etwa der Wert von `maxFramerate` oder die für den Transport oder das physische Netzwerk verfügbare Bandbreite.

            Der Wert wird unter Verwendung der Standard Transport Independent Application Specific Maximum (TIAS) Bandbreite berechnet, wie sie von {{RFC(3890, "", "6.2.2")}} definiert wird; dies ist die benötigte maximale Bandbreite ohne Berücksichtigung von Protokoll-Overheads von IP, TCP oder UDP und so weiter.

            Beachten Sie, dass die Bitrate auf verschiedene Weise erreicht werden kann, abhängig von den Medien und der Codierung.
            Beispielsweise könnte bei Video eine niedrige Bitrate durch Frame-Drops erreicht werden (eine Bitrate von null könnte erlauben, dass nur ein Frame gesendet wird), während bei Audio der Track möglicherweise aufhören muss zu spielen, wenn die Bitrate zu niedrig ist, um gesendet zu werden.

        - `maxFramerate`
          - : Ein Wert, der die maximale Anzahl von Frames pro Sekunde angibt, die für diese Codierung zulässig ist.
        - `priority`
          - : Ein String, der die Priorität des [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) angibt, der möglicherweise bestimmt, wie der User Agent die Bandbreite zwischen den Sendern zuteilt.
            Erlaubte Werte sind `very-low`, `low` (Standard), `medium`, `high`.
        - `rid`

          - : Ein String, der, wenn gesetzt, eine _RTP stream ID_ (_RID_) angibt, die unter Verwendung der RID Header-Erweiterung gesendet werden soll.
            Dieser Parameter kann nicht mit `setParameters()` geändert werden.
            Sein Wert kann nur beim ersten Erstellen des Transceivers gesetzt werden.

        - `scaleResolutionDownBy`
          - : Nur verwendet für Sender, deren Track-`kind`[`kind`](/de/docs/Web/API/MediaStreamTrack/kind) `video` ist, dies ist ein Gleitkommawert, der einen Faktor angibt, um den das Video während der Codierung verkleinert wird.
            Der Standardwert, 1.0, bedeutet, dass das Video in seiner Originalgröße codiert wird.
            Ein Wert von 2.0 verkleinert die Videobilder um einen Faktor von 2 in jeder Dimension, was zu einem Video führt, das 1/4 der Originalgröße hat.
            Der Wert darf nicht kleiner als 1.0 sein (der Versuch, das Video zu vergrößern, wird einen {{jsxref("RangeError")}} auslösen).

    - `transactionId`
      - : Ein String, der eine eindeutige ID enthält.
        Diese ID wird im vorherigen Aufruf von [`getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters) gesetzt und stellt sicher, dass die Parameter aus einem vorherigen Aufruf von [`getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters) stammen.
    - `codecs`

      - : Ein Array von Objekten, die die [Medien-Codecs](/de/docs/Web/Media/Formats/WebRTC_codecs) beschreiben, aus denen der Sender wählen wird.
        Dieser Parameter kann nicht geändert werden, sobald er initial gesetzt ist.

        Jedes Codec-Objekt im Array kann die folgenden Eigenschaften haben:

        - `channels` {{optional_inline}}

          - : Eine positive Ganzzahl, die die Anzahl der vom Codec unterstützten Kanäle angibt.
            Zum Beispiel spezifiziert ein Wert von 1 für Audio-Codecs Mono-Sound, während 2 Stereo angibt.

        - `clockRate`

          - : Eine positive Ganzzahl, die die Taktfrequenz des Codecs in Hertz (Hz) angibt.
            Die Taktfrequenz ist die Rate, mit der der RTP-Zeitstempel des Codecs vorrückt.
            Die meisten Codecs haben spezifische Werte oder Bereiche von Werten, die sie zulassen.
            Die IANA führt eine [Liste von Codecs und ihren Parametern](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-1), einschließlich ihrer Taktfrequenzen.

        - `mimeType`

          - : Ein String, der den MIME-Mediatyp und den Subtyp des Codecs angibt, spezifiziert als ein String der Form `"type/subtype"`.
            Die MIME-Typ-Strings, die von RTP verwendet werden, unterscheiden sich von denen, die anderswo verwendet werden.
            Die IANA führt ein [Verzeichnis validierter MIME-Typen](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-2).
            Siehe auch [Codecs verwendet von WebRTC](/de/docs/Web/Media/Formats/WebRTC_codecs) für Details über potenzielle Codecs, die hier referenziert werden könnten.

        - `payloadType`

          - : Der [RTP-Payload-Typ](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-1), der verwendet wird, um diesen Codec zu identifizieren.

        - `sdpFmtpLine` {{optional_inline}}
          - : Ein String, der die formatspezifischen Parameter enthält, die von der lokalen Beschreibung bereitgestellt werden.

    - `headerExtensions`
      - : Ein Array von null oder mehr RTP-Header-Erweiterungen, die jeweils eine vom Sender unterstützte Erweiterung identifizieren.
        Header-Erweiterungen werden in {{RFC(3550, "", "5.3.1")}} beschrieben.
        Dieser Parameter kann nicht geändert werden.
    - `rtcp`
      - : Ein Objekt [`RTCRtcpParameters`](/de/docs/Web/API/RTCRtcpParameters), das die verwendeten Konfigurationsparameter für [RTCP](/de/docs/Glossary/RTCP) auf dem Sender bereitstellt.
        Dieser Parameter kann nicht geändert werden.
    - `degradationPreference` {{deprecated_inline}}
      - : Gibt an, wie die WebRTC-Schicht bevorzugt mit der Optimierung von Bandbreite gegen Qualität in Situationen mit eingeschränkter Bandbreite umgehen soll.
        Die möglichen Werte sind `maintain-framerate`, `maintain-resolution` oder `balanced`.
        Der Standardwert ist `balanced`.

### Rückgabewert

Ein {{jsxref("Promise")}}, das aufgelöst wird, wenn die Eigenschaft [`RTCRtpSender.track`](/de/docs/Web/API/RTCRtpSender/track) mit den angegebenen Parametern aktualisiert wird.

### Ausnahmen

Wenn ein Fehler auftritt, wird das zurückgegebene Promise mit der entsprechenden Ausnahme aus der untenstehenden Liste abgelehnt.

- `InvalidModificationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn eines der folgenden Probleme festgestellt wird:
    - Die Anzahl der im `parameters`-Objekt spezifizierten Codierungen in der `encodings`-Eigenschaft entspricht nicht der Anzahl der aktuell für den `RTCRtpSender` aufgelisteten Codierungen.
      Sie können die Anzahl der Codierungsoptionen nicht ändern, nachdem der Sender erstellt wurde.
    - Die Reihenfolge der angegebenen `encodings` hat sich von der Reihenfolge in der aktuellen Liste geändert.
    - Es wurde versucht, eine Eigenschaft zu ändern, die nach dem ersten Erstellen des Senders nicht mehr geändert werden kann.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn der Transceiver, zu dem der `RTCRtpSender` gehört, nicht läuft oder keine zu setzenden Parameter hat.
- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn ein Fehler auftritt, der nicht den hier angegebenen entspricht.
- {{jsxref("RangeError")}}
  - : Wird zurückgegeben, wenn der für die `scaleResolutionDownBy`-Option angegebene Wert weniger als 1,0 ist — was zu einer Hochskalierung statt einer Herunterskalierung führen würde, was nicht erlaubt ist; oder wenn einer oder mehrere der angegebenen `encodings` [`maxFramerate`](#maxframerate)-Werte weniger als 0,0 sind.

Zusätzlich, wenn ein WebRTC-Fehler beim Konfigurieren oder Zugreifen auf die Medien auftritt, wird ein [`RTCError`](/de/docs/Web/API/RTCError) ausgelöst, wobei sein [`errorDetail`](/de/docs/Web/API/RTCError/errorDetail) auf `hardware-encoder-error` gesetzt ist.

## Beschreibung

Es ist wichtig zu bedenken, dass Sie das `parameters`-Objekt nicht selbst erstellen und erwarten können, dass es funktioniert.
Stattdessen _müssen_ Sie zuerst [`getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters) aufrufen, das empfangene Parameterobjekt ändern und dann dieses Objekt an `setParameters()` übergeben.
WebRTC verwendet die `transactionId`-Eigenschaft des Parameterobjekts, um sicherzustellen, dass, wenn Sie Parameter einstellen, Ihre Änderungen auf den neuesten Parametern basieren, anstatt auf einer veralteten Konfiguration.

## Beispiele

Ein Anwendungsfall für `setParameters()` ist der Versuch, die im eingeschränkten Umfeld genutzte Netzwerkanwendung zu reduzieren, indem die Auflösung und/oder Bitrate der vom [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) übertragenen Medien verändert wird.

Derzeit haben einige Browser Einschränkungen in ihren Implementierungen, die Probleme verursachen können.
Aus diesem Grund werden hier zwei Beispiele gegeben.
Das erste zeigt, wie `setParameters()` verwendet wird, wenn alle Browser die verwendeten Parameter vollständig unterstützen.
Das zweite Beispiel zeigt Workarounds zur Lösung von Einschränkungen in Browsern mit unvollständiger Unterstützung für die Parameter [`maxBitrate`](#maxbitrate) und [`scaleResolutionDownBy`](#scaleresolutiondownby).

### Nach der Spezifikation

Sobald alle Browser die Spezifikation vollständig implementieren, wird diese Implementierung von `setVideoParams()` die Aufgabe erledigen. Dies zeigt, wie alles _funktionieren_ sollte.
Sie sollten vorerst wahrscheinlich das zweite Beispiel unten verwenden.
Aber dies ist eine klarere Demonstration des grundlegenden Konzepts des erstmaligen Abrufens der Parameter, dann deren Änderung und schließlich deren Festsetzung.

```js
async function setVideoParams(sender, height, bitrate) {
  const scaleRatio = sender.track.getSettings().height / height;
  const params = sender.getParameters();

  params.encodings[0].scaleResolutionDownBy = Math.max(scaleRatio, 1);
  params.encodings[0].maxBitrate = bitrate;
  await sender.setParameters(params);
}
```

Beim Aufruf dieser Funktion spezifizieren Sie einen Sender sowie die Höhe, auf die Sie das Video des Senders skalieren möchten, und eine maximale Bitrate, die der Sender senden darf.
Ein Skalierungsfaktor für die Größe des Videos, `scaleRatio`, wird berechnet.
Dann werden die aktuellen Parameter des Senders unter Verwendung von [`getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters) abgerufen.

Die Parameter werden dann geändert, indem das erste `encodings`-Objekt [`scaleResolutionDownBy`](#scaleresolutiondownby) und [`maxBitrate`](#maxbitrate) auf den berechneten Skalierungsfaktor und die angegebene maximale `bitrate` geändert werden.

Die geänderten Parameter werden dann gespeichert, indem die Methode `setParameters()` des Senders aufgerufen wird.

### Derzeit kompatible Implementierung

Wie oben erwähnt, zeigt das vorherige Beispiel, wie die Dinge funktionieren sollen.
Leider gibt es derzeit in vielen Browsern Implementierungsprobleme, die dies verhindern.
Aus diesem Grund, wenn Sie mit iPhone und anderen Geräten, die Safari laufen sowie mit Firefox kompatibel sein wollen, nutzen Sie besser einen Code wie diesen:

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

- Wenn `encodings` `null` ist, erstellen wir es, um sicherzustellen, dass wir die Parameter erfolgreich setzen können, ohne abzustürzen.
- Wenn nach dem Einstellen der Parameter der Wert von `scaleResolutionDownBy` immer noch 1 ist, rufen wir die Methode [`applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) des Tracks des Senders auf, um die Höhe des Tracks auf `height` zu beschränken.
  Dies kompensiert für eine nicht implementierte `scaleResolutionDownBy` (wie es bei Safari zum Zeitpunkt dieses Schreibens der Fall ist).

Dieser Code wird sauber auf die normale Art und Weise zurückfallen und arbeiten, wenn der Browser die verwendeten Funktionen vollständig implementiert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Codecs verwendet von WebRTC](/de/docs/Web/Media/Formats/WebRTC_codecs)
- [Web-Medientechnologien](/de/docs/Web/Media)
