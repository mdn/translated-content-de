---
title: "RTCRtpSender: getParameters() Methode"
short-title: getParameters()
slug: Web/API/RTCRtpSender/getParameters
l10n:
  sourceCommit: f3da5803a7463dbd22f72611442507b1d7668adf
---

{{APIRef("WebRTC")}}

Die **`getParameters()`** Methode der [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) Schnittstelle gibt ein Objekt zurück, das die aktuelle Konfiguration beschreibt, wie die [`track`](/de/docs/Web/API/RTCRtpSender/track) des Senders kodiert und an einen entfernten [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) übertragen wird.

## Syntax

```js-nolint
getParameters()
```

### Parameter

Keine.

### Rückgabewert

Ein Objekt, das die aktuelle Konfiguration des Senders angibt. <!-- RTCRtpSendParameters, derived from RTCRtpParameters -->

<!-- spec defines following in RTCRtpSendParameters -->

- `encodings`
  - : Ein Array von Objekten, die jeweils die Parameter und Einstellungen für einen einzelnen Codec angeben, der verwendet werden könnte, um die Medien der Spur zu kodieren.
    Die Eigenschaften der Objekte umfassen:
    - `active`
      - : `true` (der Standardwert), wenn die Kodierung gesendet wird, `false`, wenn sie nicht gesendet oder verwendet wird.

    - `codec` {{optional_inline}}
      - : Wählt den [Mediacodec](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs) aus, der für den RTP-Stream dieser Kodierung verwendet wird.
        Wenn nicht gesetzt, kann der Benutzeragent jeden verhandelten Codec zum Senden auswählen.
        <!-- RTCRtpCodec -->
        - `channels` {{optional_inline}}
          - : Eine positive ganze Zahl, die die Anzahl der vom Codec unterstützten Kanäle angibt.
            Zum Beispiel spezifiziert für Audiocodecs ein Wert von 1 monauralen Klang, während 2 Stereo angibt.

        - `clockRate`
          - : Eine positive ganze Zahl, die die Taktfrequenz des Codecs in Hertz (Hz) angibt.
            Die Taktfrequenz ist die Rate, mit der sich der RTP-Zeitstempel des Codecs fortschreitet.
            Die meisten Codecs haben bestimmte Werte oder Wertebereiche, die sie zulassen.
            Die IANA führt eine [Liste der Codecs und ihrer Parameter](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-1), einschließlich ihrer Taktfrequenzen.

        - `mimeType`
          - : Ein String, der den MIME-Medientyp und Subtyp des Codecs angibt, angegeben als ein String der Form `"type/subtype"`.
            Die MIME-Typ-Strings, die von RTP verwendet werden, unterscheiden sich von denen, die anderswo verwendet werden.
            Die IANA führt ein [Register gültiger MIME-Typen](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-2).
            Siehe auch [Codecs verwendet von WebRTC](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs) für Details zu potenziellen Codecs, die hier referenziert werden könnten.

        - `sdpFmtpLine` {{optional_inline}}
          - : Ein String, der die format-spezifischen Parameter angibt, die von der lokalen Beschreibung bereitgestellt werden.

    - `dtx` {{Deprecated_Inline}} {{Non-standard_Inline}}
      - : Wird nur für einen [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) verwendet, dessen [`kind`](/de/docs/Web/API/MediaStreamTrack/kind) `audio` ist, und gibt an, ob diskontinuierliche Übertragung verwendet wird (eine Funktion, bei der ein Telefon ausgeschaltet oder das Mikrofon automatisch stummgeschaltet wird, wenn keine Sprachaktivität stattfindet).
        Der Wert ist entweder `enabled` oder `disabled`.

    - `maxBitrate`
      - : Eine positive ganze Zahl, die die maximale Anzahl von Bits pro Sekunde angibt, die dem Benutzeragenten gewährt werden darf, um Spuren mit dieser Kodierung zu kodieren.
        Andere Parameter können die Bitrate weiter einschränken, wie der Wert von `maxFramerate` oder die verfügbare Bandbreite für den Transport oder das physische Netzwerk.

        Der Wert wird mit der Standard Transport Independent Application Specific Maximum (TIAS) Bandbreite berechnet, wie in {{RFC(3890, "", "6.2.2")}} definiert; dies ist die maximale benötigte Bandbreite, ohne den Protokoll-Overhead von IP, TCP oder UDP etc. zu berücksichtigen.

        Beachten Sie, dass die Bitrate auf verschiedene Weise erreicht werden kann, je nach Medien und Kodierung.
        Zum Beispiel könnte bei Video eine niedrige Bitrate durch das Auslassen von Frames erreicht werden (eine Bitrate von Null könnte nur einen Frame erlauben), während bei Audio die Spur möglicherweise aufhören muss zu spielen, wenn die Bitrate zu niedrig ist, um sie zu senden.

    - `maxFramerate`
      - : Ein Wert, der die maximale Anzahl von Frames pro Sekunde festlegt, die für diese Kodierung erlaubt ist.
    - `priority`
      - : Ein String, der die Priorität des [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) angibt, was bestimmen kann, wie der Benutzeragent die Bandbreite zwischen den Sendern zuweist.
        Erlaubte Werte sind `very-low`, `low` (Standard), `medium`, `high`.
    - `rid`
      - : Ein String, welcher, falls gesetzt, eine _RTP-Stream-ID_ (_RID_) angibt, die unter Verwendung der RID-Header-Erweiterung gesendet werden soll.
        Dieser Parameter kann nicht mit [`setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters) modifiziert werden.
        Sein Wert kann nur gesetzt werden, wenn der Transceiver erstmals erstellt wird.
    - `scaleResolutionDownBy`
      - : Wird nur für Sender verwendet, deren Spur[`kind`](/de/docs/Web/API/MediaStreamTrack/kind) `video` ist, dies ist ein Gleitkommawert, der einen Faktor angibt, um den das Video während der Kodierung verkleinert wird.
        Der Standardwert, 1.0, bedeutet, dass das Video in seiner ursprünglichen Größe kodiert wird.
        Ein Wert von 2.0 verkleinert die Videobilder in jede Dimension um einen Faktor von 2, was ein Video 1/4 der Größe des Originals ergibt.
        Der Wert darf nicht kleiner als 1.0 sein (der Versuch, das Video auf eine größere Größe zu skalieren, wird einen {{jsxref("RangeError")}} auslösen).

- `transactionId`
  - : Ein String, der eine eindeutige ID enthält.
    Dieser Wert wird verwendet, um sicherzustellen, dass [`setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters) nur dazu aufgerufen werden kann, die von einem bestimmten vorhergehenden Aufruf von `getParameters()` zurückgegebenen Parameter zu ändern.
    Dieser Parameter kann nicht durch den Anrufer geändert werden.
    <!-- spec defines following in RTCRtpParameters -->
- `codecs`
  - : Ein Array von Objekten, die die [Mediacodecs](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs) beschreiben, die der Sender als aktiviert festgelegt hat und zu verwenden bereit ist.
    Dieser Parameter kann nicht mehr geändert werden, sobald er ursprünglich gesetzt wurde.

    Jedes Codec-Objekt im Array kann die folgenden Eigenschaften haben: <!-- RTCRtpCodecParameters -->
    - `channels` {{optional_inline}}
      - : Eine positive ganze Zahl, die die Anzahl der vom Codec unterstützten Kanäle angibt.
        Zum Beispiel spezifiziert für Audiocodecs ein Wert von 1 monauralen Klang, während 2 Stereo angibt.

    - `clockRate`
      - : Eine positive ganze Zahl, die die Taktfrequenz des Codecs in Hertz (Hz) angibt.
        Die Taktfrequenz ist die Rate, mit der sich der RTP-Zeitstempel des Codecs fortschreitet.
        Die meisten Codecs haben bestimmte Werte oder Wertebereiche, die sie zulassen.
        Die IANA führt eine [Liste der Codecs und ihrer Parameter](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-1), einschließlich ihrer Taktfrequenzen.

    - `mimeType`
      - : Ein String, der den MIME-Medientyp und Subtyp des Codecs angibt, angegeben als ein String der Form `"type/subtype"`.
        Die MIME-Typ-Strings, die von RTP verwendet werden, unterscheiden sich von denen, die anderswo verwendet werden.
        Die IANA führt ein [Register gültiger MIME-Typen](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-2).
        Siehe auch [Codecs verwendet von WebRTC](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs) für Details zu potenziellen Codecs, die hier referenziert werden könnten.

    - `payloadType`
      - : Der [RTP-Payload-Typ](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-1), der verwendet wird, um diesen Codec zu identifizieren.

    - `sdpFmtpLine` {{optional_inline}}
      - : Ein String, der die format-spezifischen Parameter angibt, die von der lokalen Beschreibung bereitgestellt werden.

- `headerExtensions`
  - : Ein Array von null oder mehr RTP-Header-Erweiterungen, die jeweils eine vom Sender oder Empfänger unterstützte Erweiterung identifizieren. Header-Erweiterungen werden in {{RFC(3550, "", "5.3.1")}} beschrieben.
    Dieser Parameter kann nicht mehr geändert werden, sobald er ursprünglich gesetzt wurde.
- `rtcp`
  - : Ein Objekt, das die Konfigurationsparameter bereitstellt, die für {{Glossary("RTCP", "RTCP")}} auf dem Sender verwendet werden.
    Dieser Parameter kann nicht geändert werden.

    Das Objekt kann die folgenden Eigenschaften haben: <!-- RTCRtcpParameters -->
    - `cname`
      - : Ein schreibgeschützter String, der den kanonischen Namen (CNAME) angibt, der von RTCP verwendet wird (z. B. in SDES-Nachrichten).
    - `reducedSize`
      - : Ein schreibgeschütztes boolesches Element, das `True` ist, wenn reduzierte Größe RTCP konfiguriert ist ({{rfc("5506")}}), und `False`, wenn zusammengesetztes RTCP festgelegt ist ({{rfc("3550")}}).

- `degradationPreference` {{deprecated_inline}} {{optional_inline}} <!-- removed from spec. May have been or be in chrome -->
  - : Gibt an, auf welche Weise die WebRTC-Schicht die Optimierung der Bandbreite gegenüber der Qualität in Situationen mit begrenzter Bandbreite bevorzugen sollte.
    Die möglichen Werte sind `maintain-framerate`, `maintain-resolution` oder `balanced`.
    Der Standardwert ist `balanced`.

## Beispiele

Dieses Beispiel erhält die aktuelle Transaktions-ID des Senders; die Transaktions-ID identifiziert eindeutig den aktuellen Parametersatz, um sicherzustellen, dass Aufrufe von [`setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters) immer in der richtigen Reihenfolge behandelt werden, um ein versehentliches Überschreiben von Parametern mit älteren Parametern zu vermeiden.

```js
function getSenderTransactionID(sender) {
  let parameters = sender.getParameters();

  return parameters.transactionId;
}
```

Auf die gleiche Weise erhält dieser Code den kanonischen Namen (CNAME), der für {{Glossary("RTCP", "RTCP")}} auf einem [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) verwendet wird.

```js
function getRtpCNAME(sender) {
  let parameters = sender.getParameters();

  return parameters.rtcp.cname;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`RTCRtpSender.setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters)
- [`RTCRtpReceiver.getParameters()`](/de/docs/Web/API/RTCRtpReceiver/getParameters)
