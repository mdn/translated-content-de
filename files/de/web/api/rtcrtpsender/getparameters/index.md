---
title: "RTCRtpSender: Methode getParameters()"
short-title: getParameters()
slug: Web/API/RTCRtpSender/getParameters
l10n:
  sourceCommit: a4c63d2855b2f557e7d1ee821dee65011d569a41
---

{{APIRef("WebRTC")}}

Die Methode **`getParameters()`** des Interfaces [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) gibt ein Objekt zurück, das die aktuelle Konfiguration dafür beschreibt, wie der [`track`](/de/docs/Web/API/RTCRtpSender/track) des Senders codiert und an einen entfernten [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) übertragen wird.

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
  - : Ein Array von Objekten, die jeweils die Parameter und Einstellungen für einen einzelnen Codec angeben, der zum Codieren der Medien des Tracks verwendet werden könnte.
    Die Eigenschaften der Objekte umfassen:
    - `active`
      - : `true` (der Standardwert), wenn die Codierung gesendet wird, andernfalls `false`, wenn sie nicht gesendet oder verwendet wird.

    - `codec` {{optional_inline}}
      - : Wählt den [Medien-Codec](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs) aus, der für den RTP-Stream dieser Codierung verwendet wird.
        Wenn nicht gesetzt, kann der User-Agent jeden für das Senden ausgehandelten Codec auswählen.
        <!-- RTCRtpCodec -->
        - `channels` {{optional_inline}}
          - : Eine positive Ganzzahl, die die Anzahl der vom Codec unterstützten Kanäle angibt.
            Bei Audio-Codecs gibt beispielsweise ein Wert von 1 monauralen Klang an, während 2 Stereo angibt.

        - `clockRate`
          - : Eine positive Ganzzahl, die die Clock-Rate des Codecs in Hertz (Hz) angibt.
            Die Clock-Rate ist die Rate, mit der der RTP-Zeitstempel des Codecs fortschreitet.
            Die meisten Codecs haben bestimmte Werte oder Wertebereiche, die sie zulassen.
            Die IANA führt eine [Liste der Codecs und ihrer Parameter](https://www.iana.org/assignments/rtp-parameters#rtp-parameters-1), einschließlich ihrer Clock-Rates.

        - `mimeType`
          - : Ein String, der den MIME-Medientyp und -Subtyp des Codecs angibt, als String der Form `"type/subtype"`.
            Die von RTP verwendeten MIME-Typ-Strings unterscheiden sich von denen, die andernorts verwendet werden.
            Die IANA führt ein [Register gültiger MIME-Typen](https://www.iana.org/assignments/rtp-parameters#rtp-parameters-2).
            Siehe auch [Von WebRTC verwendete Codecs](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs) für Details zu möglichen Codecs, auf die hier verwiesen werden könnte.

        - `sdpFmtpLine` {{optional_inline}}
          - : Ein String mit den formatspezifischen Parametern, die von der lokalen Beschreibung bereitgestellt werden.

    - `dtx` {{Deprecated_Inline}} {{Non-standard_Inline}}
      - : Diese Eigenschaft wird nur für einen [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) verwendet, dessen [`kind`](/de/docs/Web/API/MediaStreamTrack/kind) `audio` ist, und gibt an, ob diskontinuierliche Übertragung verwendet wird oder nicht (eine Funktion, bei der ein Telefon ausgeschaltet oder das Mikrofon bei fehlender Sprachaktivität automatisch stummgeschaltet wird).
        Der Wert ist entweder `enabled` oder `disabled`.

    - `maxBitrate`
      - : Eine positive Ganzzahl, die die maximale Anzahl von Bits pro Sekunde angibt, die der User-Agent Tracks zugestehen darf, die mit dieser Codierung codiert werden.
        Andere Parameter können die Bitrate weiter einschränken, beispielsweise der Wert von `maxFramerate` oder die für den Transport oder das physische Netzwerk verfügbare Bandbreite.

        Der Wert wird mithilfe der Standardbandbreite Transport Independent Application Specific Maximum (TIAS) berechnet, wie in {{RFC(3890, "", "6.2.2")}} definiert; dies ist die maximal benötigte Bandbreite ohne Berücksichtigung von Protokoll-Overhead durch IP, TCP oder UDP usw.

        Beachten Sie, dass die Bitrate je nach Medium und Codierung auf verschiedene Weisen erreicht werden kann.
        Bei Video kann beispielsweise eine niedrige Bitrate durch das Verwerfen von Frames erreicht werden (eine Bitrate von null könnte das Senden von nur einem Frame erlauben), während bei Audio die Wiedergabe des Tracks möglicherweise beendet werden muss, wenn die Bitrate für dessen Übertragung zu niedrig ist.

    - `maxFramerate`
      - : Ein Wert, der die maximale Anzahl von Frames pro Sekunde angibt, die für diese Codierung zulässig ist.
    - `priority`
      - : Ein String, der die Priorität des [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) angibt und bestimmen kann, wie der User-Agent die Bandbreite zwischen Sendern zuweist.
        Zulässige Werte sind `very-low`, `low` (Standard), `medium`, `high`.
    - `rid`
      - : Ein String, der, falls gesetzt, eine _RTP stream ID_ (_RID_) angibt, die mittels der RID-Header-Erweiterung gesendet werden soll.
        Dieser Parameter kann nicht mit [`setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters) geändert werden.
        Sein Wert kann nur gesetzt werden, wenn der Transceiver erstmals erstellt wird.
    - `scaleResolutionDownBy`
      - : Wird nur für Sender verwendet, deren [`kind`](/de/docs/Web/API/MediaStreamTrack/kind) des Tracks `video` ist. Dies ist ein Gleitkommawert, der einen Faktor angibt, um den das Video während der Codierung herunterskaliert wird.
        Der Standardwert 1.0 bedeutet, dass das Video in seiner ursprünglichen Größe codiert wird.
        Ein Wert von 2.0 skaliert die Videoframes in jeder Dimension um den Faktor 2 herunter, wodurch ein Video entsteht, das 1/4 der Größe des Originals hat.
        Der Wert darf nicht kleiner als 1.0 sein (der Versuch, das Video auf eine größere Größe zu skalieren, löst einen {{jsxref("RangeError")}} aus).

- `transactionId`
  - : Ein String, der eine eindeutige ID enthält.
    Dieser Wert wird verwendet, um sicherzustellen, dass [`setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters) nur aufgerufen werden kann, um die Parameter zu ändern, die von einem bestimmten vorherigen Aufruf von `getParameters()` zurückgegeben wurden.
    Dieser Parameter kann vom Aufrufer nicht geändert werden.
    <!-- spec defines following in RTCRtpParameters -->
- `codecs`
  - : Ein Array von Objekten, die die [Medien-Codecs](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs) beschreiben, die der Sender als aktiviert festgelegt hat und zu verwenden bereit ist.
    Dieser Parameter kann nach seiner anfänglichen Festlegung nicht geändert werden.

    Jedes Codec-Objekt im Array kann die folgenden Eigenschaften haben: <!-- RTCRtpCodecParameters -->
    - `channels` {{optional_inline}}
      - : Eine positive Ganzzahl, die die Anzahl der vom Codec unterstützten Kanäle angibt.
        Bei Audio-Codecs gibt beispielsweise ein Wert von 1 monauralen Klang an, während 2 Stereo angibt.

    - `clockRate`
      - : Eine positive Ganzzahl, die die Clock-Rate des Codecs in Hertz (Hz) angibt.
        Die Clock-Rate ist die Rate, mit der der RTP-Zeitstempel des Codecs fortschreitet.
        Die meisten Codecs haben bestimmte Werte oder Wertebereiche, die sie zulassen.
        Die IANA führt eine [Liste der Codecs und ihrer Parameter](https://www.iana.org/assignments/rtp-parameters#rtp-parameters-1), einschließlich ihrer Clock-Rates.

    - `mimeType`
      - : Ein String, der den MIME-Medientyp und -Subtyp des Codecs angibt, als String der Form `"type/subtype"`.
        Die von RTP verwendeten MIME-Typ-Strings unterscheiden sich von denen, die andernorts verwendet werden.
        Die IANA führt ein [Register gültiger MIME-Typen](https://www.iana.org/assignments/rtp-parameters#rtp-parameters-2).
        Siehe auch [Von WebRTC verwendete Codecs](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs) für Details zu möglichen Codecs, auf die hier verwiesen werden könnte.

    - `payloadType`
      - : Der [RTP-Payload-Typ](https://www.iana.org/assignments/rtp-parameters#rtp-parameters-1), der zur Identifizierung dieses Codecs verwendet wird.

    - `sdpFmtpLine` {{optional_inline}}
      - : Ein String mit den formatspezifischen Parametern, die von der lokalen Beschreibung bereitgestellt werden.

- `headerExtensions`
  - : Ein Array aus null oder mehr RTP-Header-Erweiterungen, die jeweils eine vom Sender oder Empfänger unterstützte Erweiterung identifizieren. Header-Erweiterungen werden in {{RFC(3550, "", "5.3.1")}} beschrieben.
    Dieser Parameter kann nach seiner anfänglichen Festlegung nicht geändert werden.
- `rtcp`
  - : Ein Objekt, das die Konfigurationsparameter für {{Glossary("RTCP", "RTCP")}} auf dem Sender bereitstellt.
    Dieser Parameter kann nicht geändert werden.

    Das Objekt kann die folgenden Eigenschaften haben: <!-- RTCRtcpParameters -->
    - `cname`
      - : Ein schreibgeschützter String mit dem von RTCP verwendeten kanonischen Namen (CNAME), beispielsweise in SDES-Nachrichten.
    - `reducedSize`
      - : Ein schreibgeschützter boolescher Wert, der `True` ist, wenn RTCP mit reduzierter Größe konfiguriert ist ({{rfc("5506")}}), und `False`, wenn zusammengesetztes RTCP angegeben ist ({{rfc("3550")}}).

- `degradationPreference`
  - : Gibt die bevorzugte Weise an, wie die WebRTC-Schicht die Leistungsoptimierung in Situationen mit begrenzter Bandbreite handhaben soll. Die möglichen Werte sind:
    - `balanced`
      - : Der Standardwert. Der Browser gleicht die Verschlechterung von Framerate und Auflösung aus.
    - `maintain-framerate`
      - : Der Browser verringert die Auflösung, um die Framerate beizubehalten.
    - `maintain-resolution`
      - : Der Browser verringert die Framerate, um die Auflösung beizubehalten.
    - `maintain-framerate-and-resolution`
      - : Der Browser behält Framerate und Auflösung unabhängig von der Videoqualität bei. Dies kann dazu führen, dass Frames bei Bedarf vor der Codierung verworfen werden, um Netzwerk- und Encoder-Ressourcen nicht übermäßig zu beanspruchen. Diese Einstellung ist für Anwendungen nützlich, die einen eigenen Mechanismus zur Optimierung von Video-Codierungsqualität und -Leistung implementieren und nicht möchten, dass der interne Mechanismus des Browsers damit interferiert.

## Beispiele

Dieses Beispiel ruft die aktuelle Transaktions-ID des Senders ab; die Transaktions-ID identifiziert den aktuellen Parametersatz eindeutig, um sicherzustellen, dass Aufrufe von [`setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters) stets in der richtigen Reihenfolge verarbeitet werden und Parameter nicht versehentlich mit älteren Parametern überschrieben werden.

```js
function getSenderTransactionID(sender) {
  let parameters = sender.getParameters();

  return parameters.transactionId;
}
```

Auf dieselbe Weise ruft dieser Code den kanonischen Namen (CNAME) ab, der für {{Glossary("RTCP", "RTCP")}} auf einem [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) verwendet wird.

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
