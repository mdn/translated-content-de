---
title: "RTCRtpSender: getParameters() Methode"
short-title: getParameters()
slug: Web/API/RTCRtpSender/getParameters
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{APIRef("WebRTC")}}

Die **`getParameters()`**-Methode des [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)-Interfaces gibt ein Objekt zurück, das die aktuelle Konfiguration beschreibt, wie der Sender's [`track`](/de/docs/Web/API/RTCRtpSender/track) codiert und an einen entfernten [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) gesendet wird.

## Syntax

```js-nolint
getParameters()
```

### Parameter

Keine.

### Rückgabewert

Ein Objekt, das die aktuelle Konfiguration des Senders angibt. <!-- RTCRtpSendParameters, abgeleitet von RTCRtpParameters -->

<!-- spec definiert folgendes in RTCRtpSendParameters -->

- `encodings`

  - : Ein Array von Objekten, das jeweils die Parameter und Einstellungen für einen einzelnen Codec spezifiert, der zur Codierung der Medien der Spur verwendet werden könnte.
    Die Eigenschaften der Objekte umfassen:

    - `active`

      - : `true` (Standard) wenn die Codierung gesendet wird, `false` wenn sie nicht gesendet oder verwendet wird.

    - `dtx` {{Deprecated_Inline}} {{Non-standard_Inline}}

      - : Wird nur für einen [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) verwendet, dessen [`kind`](/de/docs/Web/API/MediaStreamTrack/kind) `audio` ist, und zeigt an, ob die diskontinuierliche Übertragung verwendet wird (eine Funktion, bei der ein Telefon ausgeschaltet oder das Mikrofon automatisch stummgeschaltet wird, wenn keine Sprachaktivität vorliegt).
        Der Wert ist entweder `enabled` oder `disabled`.

    - `maxBitrate`

      - : Eine positive Ganzzahl, die die maximale Anzahl von Bits pro Sekunde angibt, die dem Benutzeragenten für mit dieser Codierung kodierte Spuren gewährt werden darf.
        Andere Parameter können die Bitrate weiter einschränken, wie z.B. der Wert von `maxFramerate` oder die für den Transport oder das physische Netzwerk verfügbare Bandbreite.

        Der Wert wird mit der Standard Transport Independent Application Specific Maximum (TIAS) Bandbreite berechnet, wie definiert durch {{RFC(3890, "", "6.2.2")}}; dies ist die maximale benötigte Bandbreite, ohne Protokoll-Overheads von IP, TCP oder UDP usw. zu berücksichtigen.

        Beachten Sie, dass die Bitrate auf verschiedene Arten erreicht werden kann, abhängig vom Medium und der Codierung.
        Für Video könnte beispielsweise eine niedrige Bitrate durch das Auslassen von Frames erreicht werden (eine Bitrate von null könnte es erlauben, nur einen Frame zu senden), während für Audio die Spur möglicherweise nicht mehr abgespielt wird, wenn die Bitrate zu niedrig ist, um gesendet zu werden.

    - `maxFramerate`
      - : Ein Wert, der die maximale Anzahl von Bildern pro Sekunde angibt, die für diese Codierung erlaubt sind.
    - `priority`
      - : Ein String, der die Priorität des [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) angibt, was bestimmen kann, wie der Benutzeragent die Bandbreite zwischen Sendern aufteilt.
        Erlaubte Werte sind `very-low`, `low` (Standard), `medium`, `high`.
    - `rid`
      - : Ein String, der, falls gesetzt, eine _RTP stream ID_ (_RID_) angibt, die mit der RID-Header-Erweiterung gesendet wird.
        Dieser Parameter kann nicht mit [`setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters) geändert werden.
        Sein Wert kann nur festgelegt werden, wenn der Transceiver zuerst erstellt wird.
    - `scaleResolutionDownBy`
      - : Wird nur für Sender verwendet, deren Spur's [`kind`](/de/docs/Web/API/MediaStreamTrack/kind) `video` ist, und ist ein Gleitkommawert, der einen Faktor angibt, um den das Video während der Codierung verkleinert wird.
        Der Standardwert 1.0 bedeutet, dass das Video in seiner Originalgröße codiert wird.
        Ein Wert von 2.0 verkleinert die Video-Frames um einen Faktor von 2 in jeder Dimension, was ein Video in der Größe 1/4 des Originals ergibt.
        Der Wert darf nicht kleiner als 1.0 sein (der Versuch, das Video zu vergrößern, führt zu einem {{jsxref("RangeError")}}).

- `transactionId`
  - : Ein String, der eine eindeutige ID enthält.
    Dieser Wert wird verwendet, um sicherzustellen, dass [`setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters) nur aufgerufen werden kann, um die Parameter zu modifizieren, die durch einen bestimmten vorherigen Aufruf von `getParameters()` zurückgegeben wurden.
    Dieser Parameter kann nicht vom Anrufer geändert werden.
    <!-- spec definiert folgendes in RTCRtpParameters -->
- `codecs`

  - : Ein Array von Objekten, das die [Medien-Codecs](/de/docs/Web/Media/Formats/WebRTC_codecs) beschreibt, die der Sender als aktiviert festgelegt hat und zu verwenden bereit ist.
    Dieser Parameter kann nicht geändert werden, nachdem er initial eingestellt wurde.

    Jedes Codec-Objekt im Array kann folgende Eigenschaften haben: <!-- RTCRtpCodecParameters -->

    - `channels` {{optional_inline}}

      - : Eine positive Ganzzahl, die die Anzahl der vom Codec unterstützten Kanäle angibt.
        Zum Beispiel gibt bei Audio-Codecs ein Wert von 1 Mono-Sound an, während 2 Stereo bedeutet.

    - `clockRate`

      - : Eine positive Ganzzahl, die die Taktfrequenz des Codecs in Hertz (Hz) angibt.
        Die Taktfrequenz ist die Rate, mit der der RTP-Zeitstempel des Codecs fortschreitet.
        Die meisten Codecs haben spezifische Werte oder Wertebereiche, die sie zulassen.
        Die IANA pflegt eine [Liste von Codecs und deren Parameter](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-1), einschließlich ihrer Taktfrequenzen.

    - `mimeType`

      - : Ein String, der den MIME-Mediatyp und -Untertyp des Codecs angibt, angegeben als String der Form `"type/subtype"`.
        Die von RTP verwendeten MIME-Typen unterscheiden sich von denen, die anderswo verwendet werden.
        Die IANA führt ein [Register gültiger MIME-Typen](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-2).
        Siehe auch [Codecs, die von WebRTC verwendet werden](/de/docs/Web/Media/Formats/WebRTC_codecs) für Details über potenzielle Codecs, die hier referenziert werden könnten.

    - `payloadType`

      - : Der [RTP-Payload-Typ](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-1), der verwendet wird, um diesen Codec zu identifizieren.

    - `sdpFmtpLine` {{optional_inline}}
      - : Ein String, der die formatspezifischen Parameter angibt, die in der lokalen Beschreibung bereitgestellt werden.

- `headerExtensions`
  - : Ein Array von null oder mehr RTP-Header-Erweiterungen, die jeweils eine vom Sender oder Empfänger unterstützte Erweiterung identifizieren. Header-Erweiterungen sind in {{RFC(3550, "", "5.3.1")}} beschrieben.
    Dieser Parameter kann nicht geändert werden, nachdem er initial eingestellt wurde.
- `rtcp`
  - : Ein [`RTCRtcpParameters`](/de/docs/Web/API/RTCRtcpParameters)-Objekt, das die Konfigurationsparameter bereitstellt, die für {{Glossary("RTCP", "RTCP")}} auf dem Sender oder Empfänger verwendet werden.
    Dieser Parameter kann nicht geändert werden, nachdem er initial eingestellt wurde.
- `degradationPreference` {{deprecated_inline}} {{optional_inline}} <!-- aus der Spezifikation entfernt. Könnte in Chrome gewesen sein oder sein -->
  - : Gibt die bevorzugte Vorgehensweise an, wie die WebRTC-Schicht die Bandbreitenoptimierung gegenüber der Qualität in Situationen mit eingeschränkter Bandbreite handhaben sollte.
    Die möglichen Werte sind `maintain-framerate`, `maintain-resolution` oder `balanced`.
    Der Standardwert ist `balanced`.

## Beispiele

Dieses Beispiel holt die aktuelle Transaktions-ID des Senders; die Transaktions-ID identifiziert den aktuellen Parametersatz eindeutig, um sicherzustellen, dass Aufrufe von [`setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters) immer in der richtigen Reihenfolge bearbeitet werden und das unbeabsichtigte Überschreiben von Parametern mit älteren Parametern vermieden wird.

```js
function getSenderTransactionID(sender) {
  let parameters = sender.getParameters();

  return parameters.transactionId;
}
```

Ähnlich dazu holt dieser Code den kanonischen Namen (CNAME), der für {{Glossary("RTCP", "RTCP")}} auf einem [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) verwendet wird.

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
