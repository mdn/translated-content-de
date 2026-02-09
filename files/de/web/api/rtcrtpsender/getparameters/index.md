---
title: "RTCRtpSender: getParameters() Methode"
short-title: getParameters()
slug: Web/API/RTCRtpSender/getParameters
l10n:
  sourceCommit: 2f53eb3a5787b7270be54265fb5e6c5db97869d2
---

{{APIRef("WebRTC")}}

Die **`getParameters()`** Methode des [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) Schnittstelle gibt ein Objekt zurück, das die aktuelle Konfiguration dafür beschreibt, wie die [`track`](/de/docs/Web/API/RTCRtpSender/track) des Senders kodiert und an einen entfernten [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) übertragen wird.

## Syntax

```js-nolint
getParameters()
```

### Parameter

Keine.

### Rückgabewert

Ein Objekt, das die aktuelle Konfiguration des Senders anzeigt. <!-- RTCRtpSendParameters, derived from RTCRtpParameters -->

<!-- spec defines following in RTCRtpSendParameters -->

- `encodings`
  - : Ein Array von Objekten, von denen jedes die Parameter und Einstellungen für einen einzelnen Codec spezifiziert, der zur Kodierung des Medieninhalts der Spur verwendet werden könnte.
    Zu den Eigenschaften der Objekte gehören:
    - `active`
      - : `true` (der Standard) wenn die Kodierung gesendet wird, `false` wenn sie nicht gesendet oder verwendet wird.

    - `codec` {{optional_inline}}
      - : Wählt den [Mediacodec](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs) aus, der für diesen Kodierungs-RTP-Stream verwendet wird.
        Wenn nicht festgelegt, kann der Benutzeragent jeden für das Senden ausgehandelten Codec auswählen.
        <!-- RTCRtpCodec -->
        - `channels` {{optional_inline}}
          - : Eine positive ganze Zahl, die die Anzahl der vom Codec unterstützten Kanäle angibt.
            Zum Beispiel gibt bei Audiocodecs ein Wert von 1 monauralen Klang an, während 2 Stereo bedeutet.

        - `clockRate`
          - : Eine positive ganze Zahl, die die Abtastrate des Codecs in Hertz (Hz) angibt.
            Die Abtastrate ist die Geschwindigkeit, mit der der RTP-Zeitstempel des Codecs fortschreitet.
            Die meisten Codecs haben spezifische Werte oder Wertebereiche, die sie zulassen.
            Die IANA führt eine [Liste der Codecs und ihrer Parameter](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-1), einschließlich ihrer Abtastraten.

        - `mimeType`
          - : Ein String, der den MIME-Medientyp und Subtyp des Codecs angibt, der als String in der Form `"type/subtype"` spezifiziert ist.
            Die MIME-Typ-Strings, die von RTP verwendet werden, unterscheiden sich von denen, die anderswo verwendet werden.
            Die IANA führt ein [Register gültiger MIME-Typen](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-2).
            Siehe auch [Codecs verwendet von WebRTC](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs) für Details zu potenziellen Codecs, die hier referenziert werden könnten.

        - `sdpFmtpLine` {{optional_inline}}
          - : Ein String, der die formatspezifischen Parameter angibt, die von der lokalen Beschreibung bereitgestellt werden.

    - `dtx` {{Deprecated_Inline}} {{Non-standard_Inline}}
      - : Wird nur für ein [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) verwendet, dessen [`kind`](/de/docs/Web/API/MediaStreamTrack/kind) `audio` ist. Diese Eigenschaft gibt an, ob die unterbrochene Übertragung verwendet wird (eine Funktion, bei der ein Telefon ausgeschaltet oder das Mikrofon automatisch stummgeschaltet wird, wenn keine Sprachaktivität vorliegt).
        Der Wert ist entweder `enabled` oder `disabled`.

    - `maxBitrate`
      - : Eine positive ganze Zahl, die die maximale Anzahl von Bits pro Sekunde angibt, die der Benutzeragent Spuren, die mit dieser Kodierung kodiert werden, zugewähren darf.
        Andere Parameter können die Bitrate weiter einschränken, wie der Wert von `maxFramerate` oder die für den Transport oder das physische Netzwerk verfügbare Bandbreite.

        Der Wert wird mithilfe des standardmäßigen Transportunabhängigen Anwendungspezifischen Maximums (TIAS) Bandbreite berechnet, wie definiert in {{RFC(3890, "", "6.2.2")}}; dies ist die maximale benötigte Bandbreite, ohne die Protokollüberköpfe von IP, TCP oder UDP und so weiter zu berücksichtigen.

        Beachten Sie, dass die Bitrate auf verschiedene Arten erreicht werden kann, abhängig von den Medien und der Kodierung.
        Zum Beispiel könnte für Video eine niedrige Bitrate erreicht werden, indem Frames ausgelassen werden (eine Bitrate von null könnte erlauben, nur einen Frame zu senden), während für Audio die Spur möglicherweise aufhören muss zu spielen, wenn die Bitrate zu niedrig ist, um gesendet zu werden.

    - `maxFramerate`
      - : Ein Wert, der die maximale Anzahl von Frames pro Sekunde angibt, die für diese Kodierung erlaubt sind.
    - `priority`
      - : Ein String, der die Priorität des [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) angibt, die möglicherweise bestimmt, wie der Benutzeragent die Bandbreite zwischen Sendern aufteilt.
        Erlaubte Werte sind `very-low`, `low` (Standard), `medium`, `high`.
    - `rid`
      - : Ein String, der, falls gesetzt, eine _RTP Stream ID_ (_RID_) angibt, die unter Verwendung der RID-Header-Erweiterung gesendet werden soll.
        Dieser Parameter kann nicht mit [`setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters) geändert werden.
        Sein Wert kann nur festgelegt werden, wenn der Transceiver zuerst erstellt wird.
    - `scaleResolutionDownBy`
      - : Wird nur für Sender verwendet, deren Spur's [`kind`](/de/docs/Web/API/MediaStreamTrack/kind) `video` ist, dies ist ein Gleitkommawert, der einen Faktor angibt, um den das Video während der Kodierung verkleinert werden soll.
        Der Standardwert, 1.0, bedeutet, dass das Video in seiner Originalgröße kodiert wird.
        Ein Wert von 2.0 verkleinert die Video-Frames um den Faktor 2 in jeder Dimension, was zu einem Video führt, das 1/4 der ursprünglichen Größe hat.
        Der Wert darf nicht kleiner als 1.0 sein (der Versuch, das Video auf eine größere Größe zu skalieren, führt zu einem {{jsxref("RangeError")}}).

- `transactionId`
  - : Ein String, der eine eindeutige ID enthält.
    Dieser Wert wird verwendet, um sicherzustellen, dass [`setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters) nur aufgerufen werden kann, um die Parameter zu ändern, die durch einen bestimmten vorherigen Aufruf von `getParameters()` zurückgegeben wurden.
    Dieser Parameter kann nicht vom Aufrufer geändert werden.
    <!-- spec defines following in RTCRtpParameters -->
- `codecs`
  - : Ein Array von Objekten, das die [Mediacodecs](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs) beschreibt, die der Sender als aktiviert festgelegt hat und die bereit sind, verwendet zu werden.
    Dieser Parameter kann nicht geändert werden, sobald er initial festgelegt wurde.

    Jedes Codec-Objekt im Array kann die folgenden Eigenschaften haben: <!-- RTCRtpCodecParameters -->
    - `channels` {{optional_inline}}
      - : Eine positive ganze Zahl, die die Anzahl der vom Codec unterstützten Kanäle angibt.
        Zum Beispiel gibt bei Audiocodecs ein Wert von 1 monauralen Klang an, während 2 Stereo bedeutet.

    - `clockRate`
      - : Eine positive ganze Zahl, die die Abtastrate des Codecs in Hertz (Hz) angibt.
        Die Abtastrate ist die Geschwindigkeit, mit der der RTP-Zeitstempel des Codecs fortschreitet.
        Die meisten Codecs haben spezifische Werte oder Wertebereiche, die sie zulassen.
        Die IANA führt eine [Liste der Codecs und ihrer Parameter](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-1), einschließlich ihrer Abtastraten.

    - `mimeType`
      - : Ein String, der den MIME-Medientyp und Subtyp des Codecs angibt, der als String in der Form `"type/subtype"` spezifiziert ist.
        Die MIME-Typ-Strings, die von RTP verwendet werden, unterscheiden sich von denen, die anderswo verwendet werden.
        Die IANA führt ein [Register gültiger MIME-Typen](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-2).
        Siehe auch [Codecs verwendet von WebRTC](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs) für Details zu potenziellen Codecs, die hier referenziert werden könnten.

    - `payloadType`
      - : Der [RTP Nutzlasttyp](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-1), der zur Identifizierung dieses Codecs verwendet wird.

    - `sdpFmtpLine` {{optional_inline}}
      - : Ein String, der die formatspezifischen Parameter angibt, die von der lokalen Beschreibung bereitgestellt werden.

- `headerExtensions`
  - : Ein Array von Null oder mehr RTP-Header-Erweiterungen, von denen jede eine Erweiterung identifiziert, die vom Sender oder Empfänger unterstützt wird. Header-Erweiterungen werden in {{RFC(3550, "", "5.3.1")}} beschrieben.
    Dieser Parameter kann nicht geändert werden, sobald er initial festgelegt wurde.
- `rtcp`
  - : Ein Objekt, das die Konfigurationsparameter bereitstellt, die für {{Glossary("RTCP", "RTCP")}} auf dem Sender verwendet werden.
    Dieser Parameter kann nicht geändert werden.

    Das Objekt kann die folgenden Eigenschaften haben: <!-- RTCRtcpParameters -->
    - `cname`
      - : Ein schreibgeschützter String, der den kanonischen Namen (CNAME) angibt, der von RTCP verwendet wird (z. B. in SDES-Nachrichten).
    - `reducedSize`
      - : Ein schreibgeschütztes Boolean, das `True` ist, wenn reduziertes Größe-RTCP konfiguriert ist ({{rfc("5506")}}), und `False`, wenn zusammengesetztes RTCP spezifiziert ist ({{rfc("3550")}}).

- `degradationPreference`
  - : Gibt die bevorzugte Weise an, wie die WebRTC-Schicht die Leistung in Situationen mit eingeschränkter Bandbreite optimieren soll. Die möglichen Werte sind:
    - `balanced`
      - : Der Standardwert. Der Browser wird die Verschlechterung von Framerate und Auflösung ausgleichen.
    - `maintain-framerate`
      - : Der Browser wird die Auflösung herabsetzen, um die Framerate aufrechtzuerhalten.
    - `maintain-resolution`
      - : Der Browser wird die Framerate herabsetzen, um die Auflösung aufrechtzuerhalten.
    - `maintain-framerate-and-resolution`
      - : Der Browser wird Framerate und Auflösung unabhängig von der Videoqualität aufrechterhalten, was dazu führen kann, dass Frames vor der Kodierung verworfen werden, wenn nötig, um Netzwerk- und Ressourcen des Kodierers nicht zu überlasten. Diese Einstellung ist nützlich für Anwendungen, die ihren eigenen Mechanismus zur Optimierung der Video-Kodierungsqualität und -leistung implementieren und nicht möchten, dass der interne Mechanismus des Browsers dieses beeinträchtigt.

## Beispiele

Dieses Beispiel erhält die aktuelle Transaktions-ID des Senders; die Transaktions-ID identifiziert die aktuelle Menge der Parameter eindeutig, um sicherzustellen, dass Aufrufe an [`setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters) immer in der richtigen Reihenfolge behandelt werden, um zu vermeiden, dass Parameter versehentlich mit älteren Parametern überschrieben werden.

```js
function getSenderTransactionID(sender) {
  let parameters = sender.getParameters();

  return parameters.transactionId;
}
```

Auf dieselbe Weise erhält dieser Code den kanonischen Namen (CNAME), der für {{Glossary("RTCP", "RTCP")}} auf einem [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) verwendet wird.

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
