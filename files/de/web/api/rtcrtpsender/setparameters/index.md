---
title: "RTCRtpSender: setParameters()-Methode"
short-title: setParameters()
slug: Web/API/RTCRtpSender/setParameters
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("WebRTC API")}}

Die **`setParameters()`**-Methode der {{domxref("RTCRtpSender")}}-Schnittstelle wendet Änderungen an der Konfiguration des Senders für den {{domxref("RTCRtpSender.track", "track")}} an, welcher die {{domxref("MediaStreamTrack")}} ist, für die der `RTCRtpSender` zuständig ist.

Mit anderen Worten, `setParameters()` aktualisiert die Konfiguration der {{Glossary("RTP")}}-Übertragung sowie die Kodierungskonfiguration für einen bestimmten ausgehenden Mediatrack in der [WebRTC](/de/docs/Web/API/WebRTC_API)-Verbindung.

## Syntax

```js-nolint
setParameters(parameters)
```

### Parameter

- `parameters`

  - : Ein Parameterobjekt, das zuvor durch Aufrufen der gleichen {{domxref("RTCRtpSender.getParameters", "getParameters()")}}-Methode des Senders erhalten wurde, mit den gewünschten Änderungen an den Konfigurationsparametern des Senders.
    Diese Parameter schließen potenzielle Codecs ein, die für die Kodierung des Senders des {{domxref("RTCRtpSender.track", "track")}} verwendet werden könnten.
    Die verfügbaren Parameter sind:

    - `encodings`

      - : Ein Array von Objekten, von denen jedes die Parameter für einen einzelnen Codec angibt, der zum Kodieren der Medien des Tracks verwendet werden könnte.
        Die Eigenschaften der Objekte umfassen:

        - `active`

          - : Setzen Sie diesen Wert auf `true` (Standard), damit diese Kodierung gesendet wird, während `false` das Senden und Verwenden stoppt (entfernt jedoch nicht den SSRC).

        - `dtx` {{Deprecated_Inline}} {{Non-standard_Inline}}

          - : Wird nur für einen {{domxref("RTCRtpSender")}} verwendet, dessen {{domxref("MediaStreamTrack.kind", "kind")}} `audio` ist. Diese Eigenschaft gibt an, ob eine diskontinuierliche Übertragung genutzt werden soll (eine Funktion, bei der ein Telefon automatisch abgeschaltet oder das Mikrofon bei fehlender Sprachaktivität stummgeschaltet wird).
            Der Wert kann entweder `enabled` oder `disabled` sein.

        - `maxBitrate`

          - : Ein positiver Integer, der die maximale Anzahl von Bits pro Sekunde angibt, die der Benutzeragent Tracks gewähren darf, die mit dieser Kodierung kodiert sind.
            Andere Parameter können die Bitrate weiter einschränken, wie der Wert von `maxFramerate` oder die verfügbare Bandbreite für den Transport oder das physische Netzwerk.

            Der Wert wird unter Verwendung des standardisierten Transport Independent Application Specific Maximum (TIAS) Bandbreite berechnet, wie in {{RFC(3890, "", "6.2.2")}} definiert; dies ist die maximal benötigte Bandbreite ohne Berücksichtigung von Protokoll-Overhead von IP, TCP oder UDP und so weiter.

            Beachten Sie, dass die Bitrate auf verschiedene Arten erreicht werden kann, abhängig von den Medien und der Kodierung.
            Zum Beispiel könnte bei Video eine niedrige Bitrate erreicht werden, indem Frames fallen gelassen werden (eine Bitrate von null könnte nur einen Frame erlauben), während bei Audio der Track eventuell aufhören muss, zu spielen, wenn die Bitrate zu niedrig ist, um gesendet zu werden.

        - `maxFramerate`
          - : Ein Wert, der die maximale Anzahl von Frames pro Sekunde festlegt, die für diese Kodierung erlaubt sind.
        - `priority`
          - : Ein String, der die Priorität des {{domxref("RTCRtpSender")}} angibt, was bestimmen kann, wie der Benutzeragent die Bandbreite zwischen Sendern aufteilt.
            Erlaubte Werte sind `very-low`, `low` (Standard), `medium`, `high`.
        - `rid`

          - : Ein String, der, wenn gesetzt, eine _RTP stream ID_ (_RID_) angibt, die mit der RID-Headererweiterung gesendet werden soll.
            Dieser Parameter kann nicht mit `setParameters()` geändert werden.
            Sein Wert kann nur beim ersten Erstellen des Transceivers festgelegt werden.

        - `scaleResolutionDownBy`
          - : Wird nur für Sender verwendet, deren {{domxref("MediaStreamTrack.kind", "kind")}} des Tracks `video` ist, dies ist ein Gleitkommawert, der einen Faktor angibt, um den das Video bei der Kodierung verkleinert werden soll.
            Der Standardwert, 1.0, bedeutet, dass das Video in seiner Originalgröße kodiert wird.
            Ein Wert von 2.0 verkleinert die Videobilder in jeder Dimension um einen Faktor von 2, was zu einem Video führt, das 1/4 der Originalgröße hat.
            Der Wert darf nicht kleiner als 1.0 sein (ein Versuch, das Video zu vergrößern, führt zu einem {{jsxref("RangeError")}}).

    - `transactionId`
      - : Ein String, der eine eindeutige ID enthält.
        Diese ID wird im vorherigen {{domxref("RTCRtpSender.getParameters", "getParameters()")}}-Aufruf gesetzt und stellt sicher, dass die Parameter aus einem vorherigen Aufruf von {{domxref("RTCRtpSender.getParameters", "getParameters()")}} stammen.
    - `codecs`

      - : Ein Array von Objekten, das die [Medien-Codecs](/de/docs/Web/Media/Formats/WebRTC_codecs) beschreibt, aus denen der Sender wählen wird.
        Dieser Parameter kann nach seiner ersten Einstellung nicht mehr geändert werden.

        Jedes Codec-Objekt im Array kann die folgenden Eigenschaften haben:

        - `channels` {{optional_inline}}

          - : Ein positiver Integer, der die Anzahl der vom Codec unterstützten Kanäle angibt.
            Zum Beispiel gibt bei Audiocodecs ein Wert von 1 die Mono-Sound, während 2 Stereo angibt.

        - `clockRate`

          - : Ein positiver Integer, der die Taktfrequenz des Codecs in Hertz (Hz) angibt.
            Die Taktfrequenz ist die Geschwindigkeit, mit der der RTP-Zeitstempel des Codecs fortschreitet.
            Die meisten Codecs haben spezifische Werte oder Wertebereiche, die sie zulassen.
            Die IANA pflegt eine [Liste von Codecs und deren Parametern](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-1), einschließlich ihrer Taktfrequenzen.

        - `mimeType`

          - : Ein String, der den MIME-Medientyp und Subtyp des Codecs angibt, angegeben als String der Form `"type/subtype"`.
            Die MIME-Typ-Strings, die von RTP verwendet werden, unterscheiden sich von denen, die anderswo verwendet werden.
            Die IANA pflegt ein [Register gültiger MIME-Typen](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-2).
            Siehe auch [Codecs verwendet von WebRTC](/de/docs/Web/Media/Formats/WebRTC_codecs) für Details zu potenziellen Codecs, die hier referenziert werden könnten.

        - `payloadType`

          - : Der [RTP-Payload-Typ](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-1), der verwendet wird, um diesen Codec zu identifizieren.

        - `sdpFmtpLine` {{optional_inline}}
          - : Ein String mit den formspezifischen Parametern, die von der lokalen Beschreibung bereitgestellt werden.

    - `headerExtensions`
      - : Ein Array von null oder mehr RTP-Header-Erweiterungen, von denen jede eine vom Sender unterstützte Erweiterung identifiziert.
        Header-Erweiterungen werden in {{RFC(3550, "", "5.3.1")}} beschrieben.
        Dieser Parameter kann nicht geändert werden.
    - `rtcp`
      - : Ein {{domxref("RTCRtcpParameters")}}-Objekt, das die Konfigurationsparameter bereitstellt, die für {{Glossary("RTCP")}} beim Sender verwendet werden.
        Dieser Parameter kann nicht geändert werden.
    - `degradationPreference` {{deprecated_inline}}
      - : Gibt die bevorzugte Methode an, wie die WebRTC-Schicht die Optimierung der Bandbreite im Vergleich zur Qualität in Situationen mit eingeschränkter Bandbreite handhaben soll.
        Die möglichen Werte sind `maintain-framerate`, `maintain-resolution` oder `balanced`.
        Der Standardwert ist `balanced`.

### Rückgabewert

Ein {{jsxref("Promise")}}, der aufgelöst wird, wenn die {{domxref("RTCRtpSender.track")}}-Eigenschaft mit den angegebenen Parametern aktualisiert wird.

### Ausnahmen

Wenn ein Fehler auftritt, wird das zurückgegebene Promise mit der entsprechenden Ausnahme aus der folgenden Liste abgelehnt.

- `InvalidModificationError` {{domxref("DOMException")}}
  - : Wird zurückgegeben, wenn eines der folgenden Probleme festgestellt wird:
    - Die Anzahl der in der `parameters`-Eigenschaft der `encodings`-Eigenschaft angegebenen Kodierungen stimmt nicht mit der Anzahl der derzeit für den `RTCRtpSender` aufgeführten Kodierungen überein.
      Sie können die Anzahl der Kodierungsoptionen nicht ändern, nachdem der Sender erstellt wurde.
    - Die Reihenfolge der angegebenen `encodings` hat sich von der aktuellen Liste geändert.
    - Es wurde versucht, eine Eigenschaft zu ändern, die nach der ersten Erstellung des Senders nicht geändert werden kann.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird zurückgegeben, wenn der Transceiver, von dem der `RTCRtpSender` ein Teil ist, nicht läuft oder keine zu setzenden Parameter aufweist.
- `OperationError` {{domxref("DOMException")}}
  - : Wird zurückgegeben, wenn ein Fehler auftritt, der nicht mit den hier angegebenen übereinstimmt.
- {{jsxref("RangeError")}}
  - : Wird zurückgegeben, wenn der für die `scaleResolutionDownBy`-Option angegebene Wert kleiner als 1.0 ist — was zu einer Vergrößerung statt einer Verkleinerung führen würde, was nicht erlaubt ist; oder wenn einer oder mehrere der angegebenen `encodings`-Werte [`maxFramerate`](#maxframerate) kleiner als 0.0 sind.

Zusätzlich, wenn ein WebRTC-Fehler auftritt, während die Medien konfiguriert oder darauf zugegriffen wird, wird ein {{domxref("RTCError")}} geworfen mit dem {{domxref("RTCError.errorDetail", "errorDetail")}} auf `hardware-encoder-error` gesetzt.

## Beschreibung

Es ist wichtig zu beachten, dass Sie das `parameters`-Objekt nicht selbst erstellen und erwarten können, dass es funktioniert.
Stattdessen _müssen_ Sie zuerst {{domxref("RTCRtpSender.getParameters", "getParameters()")}} aufrufen, das empfangene Parameterobjekt ändern und dann dieses Objekt an `setParameters()` übergeben.
WebRTC verwendet die `transactionId`-Eigenschaft des Parameterobjekts, um sicherzustellen, dass, wenn Sie Parameter setzen, Ihre Änderungen auf den aktuellsten Parametern basieren und nicht auf einer veralteten Konfiguration.

## Beispiele

Ein Anwendungsfall für `setParameters()` ist, zu versuchen, die im Netzwerk verwendete Bandbreite in eingeschränkten Umgebungen zu reduzieren, indem die Auflösung und/oder die Bitrate der von {{domxref("RTCRtpSender")}} übertragenen Medien geändert wird.

Derzeit haben einige Browser Einschränkungen in ihren Implementierungen, die Probleme verursachen können.
Aus diesem Grund werden hier zwei Beispiele gegeben.
Das erste zeigt, wie `setParameters()` verwendet wird, wenn alle Browser die verwendeten Parameter vollständig unterstützen, während das zweite Beispiel Workarounds zeigt, um Probleme in Browsern mit unvollständiger Unterstützung für die [`maxBitrate`](#maxbitrate) und [`scaleResolutionDownBy`](#scaleresolutiondownby)-Parameter zu lösen.

### Gemäß der Spezifikation

Sobald alle Browser die Spezifikation vollständig implementieren, wird diese Implementierung von `setVideoParams()` die Aufgabe erledigen. Dies demonstriert, wie alles _sollte_ funktionieren.
Sie sollten vorerst wahrscheinlich das zweite Beispiel unten verwenden.
Aber dies ist eine klarere Demonstration des Grundkonzepts, zuerst die Parameter abzurufen, sie dann zu ändern und dann zu setzen.

```js
async function setVideoParams(sender, height, bitrate) {
  const scaleRatio = sender.track.getSettings().height / height;
  const params = sender.getParameters();

  params.encodings[0].scaleResolutionDownBy = Math.max(scaleRatio, 1);
  params.encodings[0].maxBitrate = bitrate;
  await sender.setParameters(params);
}
```

Bei dem Aufruf dieser Funktion geben Sie einen Sender sowie die Höhe an, auf die das Video des Senders skaliert werden soll, sowie eine maximale Bitrate, die der Sender für die Übertragung zulassen soll.
Ein Skalierungsfaktor für die Größe des Videos, `scaleRatio`, wird berechnet.
Dann werden die aktuellen Parameter des Senders mithilfe von {{domxref("RTCRtpSender.getParameters", "getParameters()")}} abgerufen.

Die Parameter werden dann geändert, indem das erste Objekt der `encodings`-Eigenschaft [`scaleResolutionDownBy`](#scaleresolutiondownby) und [`maxBitrate`](#maxbitrate) auf den berechneten Skalierungsfaktor und die angegebene maximale `Bitrate` geändert wird.

Die geänderten Parameter werden dann mit der `setParameters()`-Methode des Senders gespeichert.

### Derzeit kompatible Implementierung

Wie oben erwähnt, zeigt das vorherige Beispiel, wie es funktionieren soll.
Leider gibt es derzeit Implementierungsprobleme, die dies in vielen Browsern verhindern.
Aus diesem Grund sollten Sie, wenn Sie mit dem iPhone und anderen Geräten, die Safari ausführen, sowie mit Firefox kompatibel sein möchten, einen Code wie diesen verwenden:

```js
async function setVideoParams(sender, height, bitrate) {
  const scaleRatio = sender.track.getSettings().height / height;
  const params = sender.getParameters();

  // Wenn encodings null ist, erstellen Sie es

  if (!params.encodings) {
    params.encodings = [{}];
  }

  params.encodings[0].scaleResolutionDownBy = Math.max(scaleRatio, 1);
  params.encodings[0].maxBitrate = bitrate;
  await sender.setParameters(params);

  // Wenn der neu geänderte Wert von scaleResolutionDownBy 1 ist,
  // verwenden Sie applyConstraints(), um sicherzustellen, dass die Höhe beschränkt ist,
  // da scaleResolutionDownBy möglicherweise nicht implementiert ist

  if (sender.getParameters().encodings[0].scaleResolutionDownBy === 1) {
    await sender.track.applyConstraints({ height });
  }
}
```

Die Unterschiede hier:

- Wenn `encodings` `null` ist, erstellen wir es, um sicherzustellen, dass wir dann die Parameter erfolgreich setzen können, ohne dass es zu einem Absturz kommt.
- Wenn der Wert von `scaleResolutionDownBy` nach dem Setzen der Parameter immer noch 1 ist, rufen wir die {{domxref("MediaStreamTrack.applyConstraints", "applyConstraints()")}}-Methode des Tracks des Senders auf, um die Höhe des Tracks auf `height` zu beschränken.
  Dies kompensiert ein nicht implementiertes `scaleResolutionDownBy` (wie es derzeit in Safari der Fall ist).

Dieser Code wird sauber zurückfallen und die normale Methode verwenden, wenn der Browser die verwendeten Funktionen vollständig implementiert.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Codecs verwendet von WebRTC](/de/docs/Web/Media/Formats/WebRTC_codecs)
- [Web-Medientechnologien](/de/docs/Web/Media)
