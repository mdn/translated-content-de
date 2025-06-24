---
title: "RTCRtpSender: Methode setParameters()"
short-title: setParameters()
slug: Web/API/RTCRtpSender/setParameters
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebRTC API")}}

Die **`setParameters()`** Methode der Schnittstelle [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) übernimmt Änderungen an der Konfiguration des Senders [`track`](/de/docs/Web/API/RTCRtpSender/track), welches der [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) ist, für den der `RTCRtpSender` verantwortlich ist.

Mit anderen Worten, `setParameters()` aktualisiert die Konfiguration der {{Glossary("RTP", "RTP")}}-Übertragung sowie die Kodierungskonfiguration für eine bestimmte ausgehende Medienspur auf der [WebRTC](/de/docs/Web/API/WebRTC_API) Verbindung.

## Syntax

```js-nolint
setParameters(parameters)
```

### Parameter

- `parameters`

  - : Ein Parameterobjekt, das zuvor durch Aufruf der gleichen Methode [`getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters) des Senders erhalten wurde, mit den gewünschten Änderungen an den Konfigurationsparametern des Senders.
    Diese Parameter umfassen potenzielle Codecs, die zur Kodierung der [`track`](/de/docs/Web/API/RTCRtpSender/track) des Senders verwendet werden könnten.
    Die verfügbaren Parameter sind:

    - `encodings`

      - : Ein Array von Objekten, von denen jedes die Parameter für einen einzelnen Codec spezifiziert, der zur Kodierung der Medienspuren verwendet werden könnte.
        Die Eigenschaften der Objekte umfassen:

        - `active`

          - : Wenn dieser Wert auf `true` (Standard) gesetzt ist, wird diese Kodierung gesendet, während `false` sie davon abhält, gesendet und verwendet zu werden (aber nicht dazu führt, dass die SSRC entfernt wird).

        - `dtx` {{Deprecated_Inline}} {{Non-standard_Inline}}

          - : Nur verwendet für einen [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender), dessen [`kind`](/de/docs/Web/API/MediaStreamTrack/kind) `audio` ist. Diese Eigenschaft gibt an, ob diskontinuierliche Übertragung genutzt werden soll (eine Funktion, bei der ein Telefon ausgeschaltet oder das Mikrofon automatisch stummgeschaltet wird, wenn keine Sprachaktivität vorhanden ist).
            Der Wert ist entweder `enabled` oder `disabled`.

        - `maxBitrate`

          - : Eine positive Ganzzahl, die die maximale Anzahl von Bits pro Sekunde angibt, die der Benutzeragent Tracks gewähren darf, die mit dieser Kodierung kodiert sind.
            Andere Parameter können die Bitrate weiter einschränken, wie der Wert von `maxFramerate` oder die für den Transport oder das physische Netzwerk verfügbare Bandbreite.

            Der Wert wird unter Verwendung des standardmäßigen Transport Independent Application Specific Maximum (TIAS) Bandbreite berechnet, wie von {{RFC(3890, "", "6.2.2")}} definiert; das ist die maximale benötigte Bandbreite, ohne Protokollüberkopfkosten von IP, TCP oder UDP, usw.

            Beachten Sie, dass die Bitrate je nach Medium und Kodierung auf verschiedene Weise erreicht werden kann.
            Zum Beispiel könnte für Video eine niedrige Bitrate erreicht werden, indem Frames fallengelassen werden (eine Bitrate von null könnte es erlauben, dass nur ein Frame gesendet wird), während für Audio der Track möglicherweise anhalten muss, wenn die Bitrate zu niedrig ist, um gesendet zu werden.

        - `maxFramerate`
          - : Ein Wert, der die maximale Anzahl von Frames pro Sekunde angibt, die für diese Kodierung erlaubt sind.
        - `priority`
          - : Ein Zeichenfolgenwert, der die Priorität des [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) angibt, was möglicherweise bestimmt, wie der Benutzeragent die Bandbreite zwischen Sendern zuteilt.
            Erlaubte Werte sind `very-low`, `low` (Standard), `medium`, `high`.
        - `rid`

          - : Ein String, der, falls gesetzt, eine _RTP Stream ID_ (_RID_) angibt, die unter Nutzung der RID-Header-Erweiterung gesendet werden soll.
            Dieser Parameter kann nicht mit `setParameters()` geändert werden.
            Sein Wert kann nur gesetzt werden, wenn der Transceiver erstmals erstellt wird.

        - `scaleResolutionDownBy`
          - : Nur verwendet für Sender, deren Spur [`kind`](/de/docs/Web/API/MediaStreamTrack/kind) `video` ist, ist dies ein Gleitkommawert, der einen Faktor angibt, um den das Video bei der Kodierung verkleinert wird.
            Der Standardwert, 1.0, bedeutet, dass das Video in seiner Originalgröße kodiert wird.
            Ein Wert von 2.0 skaliert die Videoframes um einen Faktor von 2 in jeder Dimension herunter, was ein Video ergibt, das 1/4 der Originalgröße hat.
            Der Wert darf nicht kleiner als 1.0 sein (der Versuch, das Video auf eine größere Größe zu skalieren, löst einen {{jsxref("RangeError")}} aus).

    - `transactionId`
      - : Eine Zeichenfolge, die eine eindeutige ID enthält.
        Diese ID wird bei einem vorhergehenden Aufruf von [`getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters) gesetzt und stellt sicher, dass die Parameter aus einem vorherigen Aufruf von [`getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters) stammen.
        <!-- spec defines following in RTCRtpParameters -->
    - `codecs`

      - : Ein Array von Objekten, die die [Medien-Codecs](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs) beschreiben, aus denen der Sender wählen wird.
        Dieser Parameter kann nach der ersten Festlegung nicht mehr geändert werden.

        Jedes Codecs-Objekt im Array kann die folgenden Eigenschaften haben: <!-- RTCRtpCodecParameters -->

        - `channels` {{optional_inline}}

          - : Eine positive Ganzzahl, die die Anzahl der durch den Codec unterstützten Kanäle angibt.
            Beispielsweise gibt bei Audiocodecs ein Wert von 1 Monoklang an, während 2 Stereo bedeutet.

        - `clockRate`

          - : Eine positive Ganzzahl, die die Taktfrequenz des Codecs in Hertz (Hz) angibt.
            Die Taktfrequenz ist die Geschwindigkeit, mit der der RTP-Zeitstempel des Codecs fortschreitet.
            Die meisten Codecs haben spezifische Werte oder Wertebereiche, die sie erlauben.
            Die IANA pflegt eine [Liste von Codecs und deren Parametern](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-1), einschließlich ihrer Taktfrequenzen.

        - `mimeType`

          - : Eine Zeichenfolge, die den MIME-Medientyp und -Subtyp des Codecs angibt, angegeben als eine Zeichenfolge der Form `"type/subtype"`.
            Die von RTP verwendeten MIME-Typzeilen unterscheiden sich von denen, die anderswo verwendet werden.
            Die IANA pflegt ein [Register gültiger MIME-Typen](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-2).
            Sehen Sie sich auch [Codecs verwendet durch WebRTC](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs) für Details über potentielle Codecs an, die hier referenziert werden könnten.

        - `payloadType`

          - : Der [RTP-Payloadtyp](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-1), der verwendet wird, um diesen Codec zu identifizieren.

        - `sdpFmtpLine` {{optional_inline}}
          - : Eine Zeichenfolge, die die format-spezifischen Parameter bereitstellt, die in der lokalen Beschreibung vorhanden sind.

    - `headerExtensions`
      - : Ein Array von null oder mehr RTP-Headererweiterungen, von denen jede eine vom Absender unterstützte Erweiterung identifiziert.
        Header-Erweiterungen werden in {{RFC(3550, "", "5.3.1")}} beschrieben.
        Dieser Parameter kann nicht geändert werden.
    - `rtcp`
      - : Ein [`RTCRtcpParameters`](/de/docs/Web/API/RTCRtcpParameters)-Objekt, das die Konfigurationsparameter bereitstellt, die für {{Glossary("RTCP", "RTCP")}} beim Sender verwendet werden.
        Dieser Parameter kann nicht geändert werden.
    - `degradationPreference` {{deprecated_inline}}
      - : Gibt an, wie die WebRTC-Schicht bevorzugt mit der Optimierung von Bandbreite und Qualität in Situationen mit eingeschränkter Bandbreite umgehen sollte.
        Die möglichen Werte sind `maintain-framerate`, `maintain-resolution` oder `balanced`.
        Der Standardwert ist `balanced`.

### Rückgabewert

Ein {{jsxref("Promise")}}, das aufgelöst wird, wenn die [`RTCRtpSender.track`](/de/docs/Web/API/RTCRtpSender/track) Eigenschaft mit den angegebenen Parametern aktualisiert wurde.

### Ausnahmen

Wenn ein Fehler auftritt, wird das zurückgegebene Promise mit der entsprechenden Ausnahme aus der folgenden Liste abgelehnt.

- `InvalidModificationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn eines der folgenden Probleme festgestellt wird:
    - Die Anzahl der im `parameters`-Objekt angegebenen Kodierungen in der `encodings`-Eigenschaft entspricht nicht der Anzahl der derzeit für den `RTCRtpSender` gelisteten Kodierungen.
      Sie können die Anzahl der Kodierungsoptionen nicht ändern, nachdem der Sender erstellt wurde.
    - Die Reihenfolge der angegebenen `encodings` hat sich im Vergleich zur aktuellen Liste geändert.
    - Es wurde versucht, eine Eigenschaft zu ändern, die nach der ersten Erstellung des Senders nicht mehr geändert werden kann.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn der Transceiver, zu dem der `RTCRtpSender` gehört, nicht aktiv ist oder keine zu setzenden Parameter hat.
- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn ein Fehler auftritt, der nicht denen entspricht, die hier angegeben sind.
- {{jsxref("RangeError")}}
  - : Wird zurückgegeben, wenn der für die Option `scaleResolutionDownBy` angegebene Wert kleiner als 1.0 ist — was zu einer Skalierung nach oben anstelle von unten führen würde, was nicht erlaubt ist; oder wenn der eine oder mehrere der angegebenen `encodings` [`maxFramerate`](#maxframerate)-Werte kleiner als 0.0 sind.

Zusätzlich wird, wenn ein WebRTC-Fehler beim Konfigurieren oder Zugriff auf die Medien auftritt, ein [`RTCError`](/de/docs/Web/API/RTCError) ausgelöst, mit `errorDetail` auf `hardware-encoder-error` gesetzt.

## Beschreibung

Es ist wichtig zu beachten, dass Sie das `parameters`-Objekt nicht selbst erstellen und erwarten können, dass es funktioniert.
Stattdessen _müssen_ Sie zuerst [`getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters) aufrufen, das empfangene Parameterobjekt ändern und dieses Objekt dann in `setParameters()` übergeben.
WebRTC verwendet die `transactionId` Eigenschaft des Parameterobjekts, um sicherzustellen, dass, wenn Sie Parameter festlegen, Ihre Änderungen auf den aktuellsten Parametern basieren und nicht auf einer veralteten Konfiguration.

## Beispiele

Ein Anwendungsfall für `setParameters()` ist der Versuch, die genutzte Netzwerkbandbreite in eingeschränkten Umgebungen zu reduzieren, indem die Auflösung und/oder Bitrate des von [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) übertragenen Mediums geändert wird.

Derzeit haben einige Browser Einschränkungen in deren Implementierungen, die Probleme verursachen können.
Aus diesem Grund werden hier zwei Beispiele gegeben.
Das erste zeigt, wie man `setParameters()` verwendet, wenn alle Browser die verwendeten Parameter vollständig unterstützen, während das zweite Beispiel Workarounds demonstriert, um Probleme in Browsern mit unvollständigem Support für die Parameter [`maxBitrate`](#maxbitrate) und [`scaleResolutionDownBy`](#scaleresolutiondownby) zu beheben.

### Nach der Spezifikation

Sobald alle Browser die Spezifikation vollständig implementieren, wird diese Implementierung von `setVideoParams()` die Aufgabe erledigen. Dies zeigt, wie alles _sollte_ funktionieren.
Sie sollten wahrscheinlich das zweite Beispiel unten verwenden.
Aber dies ist eine klarere Darstellung des grundlegenden Konzepts, zuerst die Parameter abzurufen, sie dann zu ändern und sie schließlich festzulegen.

```js
async function setVideoParams(sender, height, bitrate) {
  const scaleRatio = sender.track.getSettings().height / height;
  const params = sender.getParameters();

  params.encodings[0].scaleResolutionDownBy = Math.max(scaleRatio, 1);
  params.encodings[0].maxBitrate = bitrate;
  await sender.setParameters(params);
}
```

Beim Aufruf dieser Funktion geben Sie einen Sender an sowie die Höhe, auf die Sie das Video des Senders skalieren möchten, sowie eine maximale Bitrate, die der Sender senden darf.
Ein Skalierungsfaktor für die Größe des Videos, `scaleRatio`, wird berechnet.
Dann werden die aktuellen Parameter des Senders mit [`getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters) abgerufen.

Die Parameter werden dann geändert, indem die erste `encodings`-Eigenschaft [`scaleResolutionDownBy`](#scaleresolutiondownby) und [`maxBitrate`](#maxbitrate) auf den berechneten Skalierungsfaktor und die angegebene maximale `bitrate` gesetzt werden.

Die geänderten Parameter werden dann durch Aufruf der Methode `setParameters()` des Senders gespeichert.

### Aktuell kompatible Implementierung

Wie oben erwähnt, zeigt das vorherige Beispiel, wie die Dinge funktionieren sollen.
Leider gibt es momentan Implementierungsprobleme, die dies in vielen Browsern verhindern.
Aus diesem Grund sollten Sie, um mit iPhone und anderen Geräten, die Safari ausführen, sowie mit Firefox kompatibel zu sein, eher so wie folgt vorgehen:

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

- Wenn `encodings` `null` ist, erstellen wir es, um sicherzustellen, dass wir dann die Parameter erfolgreich ohne Absturz setzen können.
- Wenn nach dem Festlegen der Parameter der Wert von `scaleResolutionDownBy` immer noch 1 ist, rufen wir die Methode [`applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) des Senders auf, um die Höhe des Tracks auf `height` zu beschränken.
  Dies kompensiert für eine nicht implementierte `scaleResolutionDownBy` (wie es derzeit in Safari der Fall ist).

Dieser Code führt problemlos einen Fallback aus und funktioniert auf die normale Weise, wenn der Browser die verwendeten Funktionen vollständig implementiert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Codecs verwendet von WebRTC](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs)
- [Web-Medientechnologien](/de/docs/Web/Media)
