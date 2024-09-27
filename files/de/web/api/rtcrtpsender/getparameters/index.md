---
title: "RTCRtpSender: Methode getParameters()"
short-title: getParameters()
slug: Web/API/RTCRtpSender/getParameters
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{APIRef("WebRTC")}}

Die **`getParameters()`** Methode des [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) Interfaces gibt ein Objekt zurück, das die aktuelle Konfiguration beschreibt, wie die [`track`](/de/docs/Web/API/RTCRtpSender/track) des Senders kodiert und an einen entfernten [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) übertragen wird.

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

  - : Ein Array von Objekten, die jeweils die Parameter und Einstellungen für einen einzelnen Codec angeben, der verwendet werden könnte, um die Medien der Spur zu kodieren. Die Eigenschaften der Objekte umfassen:

    - `active`

      - : `true` (der Standardwert), wenn die Kodierung gesendet wird, `false`, wenn sie nicht gesendet oder verwendet wird.

    - `dtx` {{Deprecated_Inline}} {{Non-standard_Inline}}

      - : Wird nur für einen [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) verwendet, dessen [`kind`](/de/docs/Web/API/MediaStreamTrack/kind) `audio` ist. Diese Eigenschaft gibt an, ob diskontinuierliche Übertragung verwendet wird (eine Funktion, bei der ein Telefon automatisch ausgeschaltet oder das Mikrofon stummgeschaltet wird, wenn keine Sprachaktivität vorliegt).
        Der Wert ist entweder `enabled` oder `disabled`.

    - `maxBitrate`

      - : Eine positive Ganzzahl, die die maximale Anzahl von Bits pro Sekunde angibt, die der Benutzer-Agent Spuren gewähren darf, die mit dieser Kodierung kodiert sind.
        Andere Parameter können die Bitrate weiter einschränken, wie zum Beispiel `maxFramerate` oder die für den Transport oder das physische Netzwerk verfügbare Bandbreite.

        Der Wert wird unter Verwendung des standardisierten transportunabhängigen anwendungsspezifischen Maximums (TIAS) der Bandbreite berechnet, wie in {{RFC(3890, "", "6.2.2")}} definiert; dies ist die maximale benötigte Bandbreite ohne Berücksichtigung von Protokollüberkopfkosten von IP, TCP oder UDP und so weiter.

        Beachten Sie, dass die Bitrate auf verschiedene Arten erreicht werden kann, abhängig von den Medien und der Kodierung.
        Zum Beispiel könnte für Video eine niedrige Bitrate erreicht werden, indem Frames weggelassen werden (eine Bitrate von Null könnte erlauben, dass nur ein Frame gesendet wird), während für Audio die Spur möglicherweise aufhören muss zu spielen, wenn die Bitrate zu niedrig ist, um gesendet zu werden.

    - `maxFramerate`
      - : Ein Wert, der die maximale Anzahl von Bildern pro Sekunde angibt, die für diese Kodierung zulässig sind.
    - `priority`
      - : Ein String, der die Priorität des [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) angibt, was bestimmen kann, wie der Benutzer-Agent die Bandbreite zwischen Sendern zuweist.
        Zulässige Werte sind `very-low`, `low` (Standardwert), `medium`, `high`.
    - `rid`
      - : Ein String, der, wenn gesetzt, eine _RTP-Stream-ID_ (_RID_) angibt, die mit der RID-Headererweiterung gesendet werden soll.
        Dieser Parameter kann nicht mit [`setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters) modifiziert werden.
        Sein Wert kann nur festgelegt werden, wenn der Transceiver zuerst erstellt wird.
    - `scaleResolutionDownBy`
      - : Wird nur für Sender verwendet, deren Spur [`kind`](/de/docs/Web/API/MediaStreamTrack/kind) `video` ist. Dies ist ein Gleitkommawert, der einen Faktor angibt, um den das Video während der Kodierung herunterskaliert wird.
        Der Standardwert, 1,0, bedeutet, dass das Video in seiner Originalgröße kodiert wird.
        Ein Wert von 2,0 skaliert die Video-Frames um einen Faktor von 2 in jeder Dimension herunter, was zu einem Video führt, das ein Viertel der Originalgröße beträgt.
        Der Wert darf nicht kleiner als 1,0 sein (der Versuch, das Video zu einer größeren Größe zu skalieren, wirft einen {{jsxref("RangeError")}}).

- `transactionId`
  - : Ein String, der eine eindeutige ID enthält.
    Dieser Wert wird verwendet, um sicherzustellen, dass [`setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters) nur aufgerufen werden kann, um die von einem bestimmten vorherigen Aufruf von `getParameters()` zurückgegebenen Parameter zu ändern.
    Dieser Parameter kann vom Anrufer nicht geändert werden.
    <!-- spec defines following in RTCRtpParameters -->
- `codecs`

  - : Ein Array von Objekten, das die [Media-Codecs](/de/docs/Web/Media/Formats/WebRTC_codecs) beschreibt, die der Sender als aktiviert festgelegt hat und die zu verwenden bereit sind.
    Dieser Parameter kann nach der ersten Einstellung nicht mehr geändert werden.

    Jedes Codec-Objekt im Array kann die folgenden Eigenschaften haben: <!-- RTCRtpCodecParameters -->

    - `channels` {{optional_inline}}

      - : Eine positive Ganzzahl, die angibt, wie viele Kanäle der Codec unterstützt.
        Beispielsweise gibt ein Wert von 1 bei Audio-Codecs Mono-Sound an, während 2 Stereo bedeutet.

    - `clockRate`

      - : Eine positive Ganzzahl, die die Clock-Rate des Codecs in Hertz (Hz) angibt.
        Die Clock-Rate ist die Rate, mit der sich der RTP-Zeitstempel des Codecs fortsetzt.
        Die meisten Codecs haben spezifische Werte oder Bereiche von Werten, die sie zulassen.
        Die IANA führt eine [Liste von Codecs und deren Parameter](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-1), einschließlich ihrer Clock-Raten.

    - `mimeType`

      - : Ein String, der den MIME-Medientyp und -subtyp des Codecs angibt, als String in der Form `"type/subtype"` spezifiziert.
        Die MIME-Typ-Strings, die von RTP verwendet werden, unterscheiden sich von denen, die anderswo verwendet werden.
        Die IANA führt ein [Verzeichnis gültiger MIME-Typen](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-2).
        Siehe auch [Codecs used by WebRTC](/de/docs/Web/Media/Formats/WebRTC_codecs) für Details über mögliche Codecs, die hier referenziert werden könnten.

    - `payloadType`

      - : Der [RTP-Payload-Typ](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-1), der verwendet wird, um diesen Codec zu identifizieren.

    - `sdpFmtpLine` {{optional_inline}}
      - : Ein String, der die angebotspezifischen Parameter liefert, die von der lokalen Beschreibung bereitgestellt werden.

- `headerExtensions`
  - : Ein Array von null oder mehr RTP-Header-Erweiterungen, die jeweils eine vom Sender oder Empfänger unterstützte Erweiterung identifizieren. Header-Erweiterungen werden in {{RFC(3550, "", "5.3.1")}} beschrieben.
    Dieser Parameter kann nach der ersten Einstellung nicht mehr geändert werden.
- `rtcp`
  - : Ein [`RTCRtcpParameters`](/de/docs/Web/API/RTCRtcpParameters) Objekt, das die Konfigurationsparameter für [RTCP](/de/docs/Glossary/RTCP) am Sender oder Empfänger bereitstellt.
    Dieser Parameter kann nach der ersten Einstellung nicht mehr geändert werden.
- `degradationPreference` {{deprecated_inline}} {{optional_inline}} <!-- removed from spec. May have been or be in chrome -->
  - : Gibt die bevorzugte Methode an, wie die WebRTC-Schicht das Optimieren von Bandbreite gegen Qualität in Situationen mit eingeschränkter Bandbreite handhaben soll.
    Die möglichen Werte sind `maintain-framerate`, `maintain-resolution` oder `balanced`.
    Der Standardwert ist `balanced`.

## Beispiele

Dieses Beispiel holt die aktuelle Transaktions-ID des Senders; die Transaktions-ID identifiziert eindeutig den aktuellen Parametersatz, um sicherzustellen, dass Aufrufe von [`setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters) immer in der richtigen Reihenfolge behandelt werden und so das versehentliche Überschreiben von Parametern mit älteren Parametern vermieden wird.

```js
function getSenderTransactionID(sender) {
  let parameters = sender.getParameters();

  return parameters.transactionId;
}
```

Auf die gleiche Weise erhält dieser Code den kanonischen Namen (CNAME), der für [RTCP](/de/docs/Glossary/RTCP) bei einem [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) verwendet wird.

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
