---
title: "RTCRtpSender: getParameters() Methode"
short-title: getParameters()
slug: Web/API/RTCRtpSender/getParameters
l10n:
  sourceCommit: 27bceead8e9b1fe9c92df0fa5e418f81bd5b9fdf
---

{{APIRef("WebRTC")}}

Die **`getParameters()`** Methode der [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) Schnittstelle gibt ein Objekt zurück, das die aktuelle Konfiguration beschreibt, wie die [`track`](/de/docs/Web/API/RTCRtpSender/track) des Senders codiert und zu einem entfernten [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) übertragen wird.

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

  - : Ein Array von Objekten, von denen jedes die Parameter und Einstellungen für einen einzelnen Codec angibt, der verwendet werden könnte, um die Medien der Spur zu codieren.
    Die Eigenschaften der Objekte umfassen:

    - `active`

      - : `true` (der Standardwert), wenn die Codierung gesendet wird, `false`, wenn sie nicht gesendet oder verwendet wird.

    - `dtx` {{Deprecated_Inline}} {{Non-standard_Inline}}

      - : Wird nur für einen [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) verwendet, dessen [`kind`](/de/docs/Web/API/MediaStreamTrack/kind) `audio` ist. Diese Eigenschaft gibt an, ob eine diskontinuierliche Übertragung verwendet wird (eine Funktion, bei der ein Telefon ausgeschaltet oder das Mikrofon automatisch stummgeschaltet wird, wenn keine Sprachaktivität vorhanden ist).
        Der Wert kann entweder `enabled` oder `disabled` sein.

    - `maxBitrate`

      - : Eine positive ganze Zahl, die die maximale Anzahl von Bits pro Sekunde angibt, die dem Benutzeragenten für die mit dieser Codierung kodierten Spuren gewährt werden darf.
        Andere Parameter können die Bitrate weiter einschränken, wie z.B. der Wert von `maxFramerate` oder die für den Transport oder das physische Netzwerk verfügbare Bandbreite.

        Der Wert wird unter Verwendung des standardmäßigen Transport Independent Application Specific Maximum (TIAS) Bandbreite gemäß {{RFC(3890, "", "6.2.2")}} berechnet; dies ist die erforderliche maximale Bandbreite ohne Berücksichtigung von Protokoll-Overheads durch IP, TCP oder UDP usw.

        Beachten Sie, dass die Bitrate auf verschiedene Weise erreicht werden kann, abhängig von den Medien und der Codierung.
        Für ein Video kann beispielsweise eine niedrige Bitrate erreicht werden, indem Frames fallen gelassen werden (eine Bitrate von null könnte es ermöglichen, nur einen Frame zu senden), während für Audio die Spur möglicherweise anhalten muss, wenn die Bitrate zu niedrig ist, um gesendet zu werden.

    - `maxFramerate`
      - : Ein Wert, der die maximale Anzahl von Frames pro Sekunde angibt, die für diese Codierung erlaubt sind.
    - `priority`
      - : Eine Zeichenfolge, die die Priorität des [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) angibt und möglicherweise bestimmt, wie der Benutzeragent die Bandbreite zwischen Sendern zuweist.
        Erlaubte Werte sind `very-low`, `low` (Standard), `medium`, `high`.
    - `rid`
      - : Eine Zeichenfolge, die, falls gesetzt, eine _RTP stream ID_ (_RID_) angibt, die mit der RID-Header-Erweiterung gesendet werden soll.
        Dieser Parameter kann nicht durch [`setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters) geändert werden.
        Sein Wert kann nur gesetzt werden, wenn der Transceiver erstmals erstellt wird.
    - `scaleResolutionDownBy`
      - : Wird nur für Sender verwendet, deren ["kind"](/de/docs/Web/API/MediaStreamTrack/kind) `video` ist; dies ist ein Gleitkommawert, der einen Faktor angibt, um den das Video bei der Codierung herunterskaliert wird.
        Der Standardwert, 1.0, bedeutet, dass das Video in seiner Originalgröße codiert wird.
        Ein Wert von 2.0 skaliert die Videoframes um einen Faktor von 2 in jeder Dimension herunter, was zu einem Video führt, das 1/4 der Größe des Originals beträgt.
        Der Wert darf nicht kleiner als 1.0 sein (der Versuch, das Video auf eine größere Größe zu skalieren, wird einen {{jsxref("RangeError")}} auslösen).

- `transactionId`
  - : Eine Zeichenfolge, die eine eindeutige ID enthält.
    Dieser Wert wird verwendet, um sicherzustellen, dass [`setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters) nur aufgerufen werden kann, um die von einem spezifischen vorherigen Aufruf von `getParameters()` zurückgegebenen Parameter zu ändern.
    Dieser Parameter kann vom Anrufer nicht geändert werden.
    <!-- spec defines following in RTCRtpParameters -->
- `codecs`

  - : Ein Array von Objekten, die die [Mediencodecs](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs) beschreiben, die der Sender als aktiviert festgelegt hat und verwenden kann.
    Dieser Parameter kann nicht geändert werden, nachdem er initial gesetzt wurde.

    Jedes Codec-Objekt im Array kann die folgenden Eigenschaften aufweisen: <!-- RTCRtpCodecParameters -->

    - `channels` {{optional_inline}}

      - : Eine positive ganze Zahl, die die Anzahl der Kanäle angibt, die vom Codec unterstützt werden.
        Zum Beispiel gibt für Audio-Codecs ein Wert von 1 Mono-Sound an, während 2 Stereo bedeutet.

    - `clockRate`

      - : Eine positive ganze Zahl, die die Taktfrequenz des Codecs in Hertz (Hz) angibt.
        Die Taktfrequenz ist die Rate, mit der der RTP-Zeitstempel des Codecs fortschreitet.
        Die meisten Codecs haben bestimmte Werte oder Wertebereiche, die sie erlauben.
        Die IANA pflegt eine [Liste von Codecs und deren Parametern](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-1), einschließlich ihrer Taktfrequenzen.

    - `mimeType`

      - : Eine Zeichenfolge, die den MIME-Medientyp und Subtyp des Codecs angibt, spezifiziert als eine Zeichenfolge der Form `"type/subtype"`.
        Die von RTP verwendeten MIME-Typen unterscheiden sich von denen, die anderswo verwendet werden.
        Die IANA pflegt ein [Verzeichnis gültiger MIME-Typen](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-2).
        Siehe auch [Codecs used by WebRTC](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs) für Details zu möglichen Codecs, die hier referenziert werden könnten.

    - `payloadType`

      - : Der [RTP-Payload-Typ](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-1), der verwendet wird, um diesen Codec zu identifizieren.

    - `sdpFmtpLine` {{optional_inline}}
      - : Eine Zeichenfolge, die die formatspezifischen Parameter angibt, die durch die lokale Beschreibung bereitgestellt werden.

- `headerExtensions`
  - : Ein Array von null oder mehr RTP-Header-Erweiterungen, von denen jede eine vom Sender oder Empfänger unterstützte Erweiterung identifiziert. Header-Erweiterungen sind in {{RFC(3550, "", "5.3.1")}} beschrieben.
    Dieser Parameter kann nicht geändert werden, nachdem er zunächst gesetzt wurde.
- `rtcp`
  - : Ein [`RTCRtcpParameters`](/de/docs/Web/API/RTCRtcpParameters) Objekt, das die Konfigurationsparameter für {{Glossary("RTCP", "RTCP")}} auf dem Sender oder dem Empfänger bereitstellt.
    Dieser Parameter kann nicht geändert werden, nachdem er zunächst gesetzt wurde.
- `degradationPreference` {{deprecated_inline}} {{optional_inline}} <!-- removed from spec. May have been or be in chrome -->
  - : Gibt die bevorzugte Vorgehensweise an, wie die WebRTC-Schicht die Optimierung der Bandbreite gegenüber der Qualität in Situationen mit begrenzter Bandbreite handhaben sollte.
    Die möglichen Werte sind `maintain-framerate`, `maintain-resolution` oder `balanced`.
    Der Standardwert ist `balanced`.

## Beispiele

Dieses Beispiel holt die aktuelle Transaktions-ID des Senders; die Transaktions-ID identifiziert das aktuelle Set von Parametern eindeutig, um sicherzustellen, dass Aufrufe von [`setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters) immer in der richtigen Reihenfolge behandelt werden und das versehentliche Überschreiben von Parametern mit älteren Parametern vermieden wird.

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
