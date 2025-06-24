---
title: "RTCRtpSender: getParameters()-Methode"
short-title: getParameters()
slug: Web/API/RTCRtpSender/getParameters
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebRTC")}}

Die **`getParameters()`**-Methode des [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)-Interfaces gibt ein Objekt zurück, das die aktuelle Konfiguration beschreibt, wie die [`track`](/de/docs/Web/API/RTCRtpSender/track) des Senders kodiert und an einen entfernten [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) übertragen wird.

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

  - : Ein Array von Objekten, die jeweils die Parameter und Einstellungen für einen einzelnen Codec angeben, der zur Kodierung der Medien der Spur verwendet werden könnte. Die Eigenschaften der Objekte umfassen:

    - `active`

      - : `true` (der Standardwert), wenn die Kodierung gesendet wird, `false`, wenn sie nicht gesendet oder verwendet wird.

    - `dtx` {{Deprecated_Inline}} {{Non-standard_Inline}}

      - : Wird nur für einen [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) verwendet, dessen [`kind`](/de/docs/Web/API/MediaStreamTrack/kind) `audio` ist. Diese Eigenschaft gibt an, ob eine diskontinuierliche Übertragung verwendet wird (eine Funktion, bei der das Telefon automatisch ausgeschaltet oder das Mikrofon stummgeschaltet wird, wenn keine Sprachaktivität vorliegt). Der Wert ist entweder `enabled` oder `disabled`.

    - `maxBitrate`

      - : Eine positive ganze Zahl, die die maximale Anzahl von Bits pro Sekunde angibt, die dem Benutzeragenten für mit dieser Kodierung kodierte Spuren gewährt werden darf. Andere Parameter können die Bitrate weiter einschränken, wie der Wert von `maxFramerate` oder die für den Transport oder das physische Netzwerk verfügbare Bandbreite.

        Der Wert wird unter Verwendung der Standard-Transport-Independent Application Specific Maximum (TIAS)-Bandbreite berechnet, wie in {{RFC(3890, "", "6.2.2")}} definiert; dies ist die maximale benötigte Bandbreite ohne Berücksichtigung von Protokollüberköpfen von IP, TCP oder UDP und so weiter.

        Beachten Sie, dass die Bitrate je nach Medium und Kodierung auf verschiedene Weise erreicht werden kann. Zum Beispiel kann für Video eine niedrige Bitrate erreicht werden, indem Frames weggelassen werden (eine Bitrate von Null könnte das Senden eines einzelnen Frames ermöglichen), während für Audio die Spur möglicherweise aufhören muss zu spielen, wenn die Bitrate zu niedrig ist, um sie zu senden.

    - `maxFramerate`
      - : Ein Wert, der die maximale Anzahl von Bildern pro Sekunde angibt, die für diese Kodierung erlaubt sind.
    - `priority`
      - : Ein String, der die Priorität des [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) angibt, die bestimmen kann, wie der Benutzeragent die Bandbreite zwischen Sendern aufteilt. Zulässige Werte sind `very-low`, `low` (Standard), `medium`, `high`.
    - `rid`
      - : Ein String, der, wenn gesetzt, eine _RTP stream ID_ (_RID_) angibt, die mit der RID-Header-Erweiterung gesendet wird. Dieser Parameter kann nicht mit [`setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters) geändert werden. Sein Wert kann nur bei der erstmaligen Erstellung des Transceivers festgelegt werden.
    - `scaleResolutionDownBy`
      - : Wird nur für Sender verwendet, deren `track's` [`kind`](/de/docs/Web/API/MediaStreamTrack/kind) `video` ist. Dies ist ein Gleitkommawert, der einen Faktor angibt, mit dem das Video bei der Kodierung verkleinert wird. Der Standardwert, 1.0, bedeutet, dass das Video in seiner ursprünglichen Größe kodiert wird. Ein Wert von 2.0 skaliert die Video-Frames in jeder Dimension um den Faktor 2, was zu einem Video führt, das 1/4 der Größe des Originals hat. Der Wert darf nicht kleiner als 1.0 sein (der Versuch, das Video auf eine größere Größe zu skalieren, führt zu einem {{jsxref("RangeError")}}).

- `transactionId`
  - : Ein String, der eine eindeutige ID enthält. Dieser Wert wird verwendet, um sicherzustellen, dass [`setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters) nur aufgerufen werden kann, um die Parameter zu ändern, die von einem bestimmten vorherigen Aufruf von `getParameters()` zurückgegeben wurden. Dieser Parameter kann vom Aufrufer nicht geändert werden.
    <!-- spec defines following in RTCRtpParameters -->
- `codecs`

  - : Ein Array von Objekten, die die [Medien-Codecs](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs) beschreiben, die der Sender als aktiviert eingestellt hat und zu verwenden bereit ist. Dieser Parameter kann nicht geändert werden, nachdem er initial gesetzt wurde.

    Jedes Codec-Objekt im Array kann die folgenden Eigenschaften haben: <!-- RTCRtpCodecParameters -->

    - `channels` {{optional_inline}}

      - : Eine positive ganze Zahl, die die Anzahl der vom Codec unterstützten Kanäle angibt. Zum Beispiel gibt für Audiocodecs ein Wert von 1 Mono wieder, während 2 Stereo bedeutet.

    - `clockRate`

      - : Eine positive ganze Zahl, die die Abtastrate des Codecs in Hertz (Hz) angibt. Die Abtastrate ist die Rate, mit der der RTP-Zeitstempel des Codecs fortschreitet. Die meisten Codecs haben spezifische Werte oder Wertebereiche, die sie zulassen. Die IANA führt eine [Liste der Codecs und ihrer Parameter](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-1), einschließlich ihrer Abtastraten.

    - `mimeType`

      - : Ein String, der den MIME-Medientyp und -Untertyp des Codecs angibt, der als String der Form `"type/subtype"` angegeben wird. Die von RTP verwendeten MIME-Typ-Strings unterscheiden sich von denen, die an anderer Stelle verwendet werden. IANA führt ein [Verzeichnis gültiger MIME-Typen](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-2). Siehe auch [Codecs used by WebRTC](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs) für Details zu möglichen Codecs, die hier referenziert werden können.

    - `payloadType`

      - : Der [RTP-Payload-Typ](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-1), der zur Identifizierung dieses Codecs verwendet wird.

    - `sdpFmtpLine` {{optional_inline}}
      - : Ein String, der die format-spezifischen Parameter enthält, die von der lokalen Beschreibung bereitgestellt werden.

- `headerExtensions`
  - : Ein Array von null oder mehr RTP-Header-Erweiterungen, die jeweils eine vom Sender oder Empfänger unterstützte Erweiterung identifizieren. Header-Erweiterungen werden in {{RFC(3550, "", "5.3.1")}} beschrieben. Dieser Parameter kann nicht geändert werden, nachdem er initial gesetzt wurde.
- `rtcp`
  - : Ein [`RTCRtcpParameters`](/de/docs/Web/API/RTCRtcpParameters)-Objekt, das die Konfigurationsparameter bereitstellt, die für {{Glossary("RTCP", "RTCP")}} auf dem Sender oder Empfänger verwendet werden. Dieser Parameter kann nicht geändert werden, nachdem er initial gesetzt wurde.
- `degradationPreference` {{deprecated_inline}} {{optional_inline}} <!-- removed from spec. May have been or be in chrome -->
  - : Gibt an, wie die WebRTC-Schicht bevorzugt Bandbreite gegenüber Qualität in Situationen mit eingeschränkter Bandbreite optimieren sollte. Die möglichen Werte sind `maintain-framerate`, `maintain-resolution` oder `balanced`. Der Standardwert ist `balanced`.

## Beispiele

Dieses Beispiel erhält die aktuelle Transaktions-ID des Senders; die Transaktions-ID identifiziert eindeutig den aktuellen Satz von Parametern, um sicherzustellen, dass Aufrufe von [`setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters) immer in der richtigen Reihenfolge bearbeitet werden, um zu vermeiden, dass Parameter versehentlich mit älteren Parametern überschrieben werden.

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
