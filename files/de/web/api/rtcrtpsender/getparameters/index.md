---
title: "RTCRtpSender: Methode getParameters()"
short-title: getParameters()
slug: Web/API/RTCRtpSender/getParameters
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{APIRef("WebRTC")}}

Die **`getParameters()`** Methode der {{domxref("RTCRtpSender")}} Schnittstelle gibt ein Objekt zurück, das die aktuelle Konfiguration beschreibt, wie die {{domxref("RTCRtpSender.track", "Spur")}} des Senders codiert und an einen entfernten {{domxref("RTCRtpReceiver")}} übertragen wird.

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

  - : Ein Array von Objekten, von denen jedes die Parameter und Einstellungen für einen einzelnen Codec angibt, der zur Codierung der Medien der Spur verwendet werden könnte.
    Die Eigenschaften der Objekte umfassen:

    - `active`

      - : `true` (Standardwert), wenn die Codierung gesendet wird, `false`, wenn sie nicht gesendet oder verwendet wird.

    - `dtx` {{Deprecated_Inline}} {{Non-standard_Inline}}

      - : Wird nur für einen {{domxref("RTCRtpSender")}} verwendet, dessen {{domxref("MediaStreamTrack.kind", "Art")}} `audio` ist. Diese Eigenschaft zeigt an, ob eine unterbrochene Übertragung verwendet wird (eine Funktion, bei der ein Telefon ausgeschaltet oder das Mikrofon automatisch bei Fehlen von Sprachaktivität stummgeschaltet wird).
        Der Wert kann entweder `enabled` oder `disabled` sein.

    - `maxBitrate`

      - : Eine positive Ganzzahl, die die maximale Anzahl von Bits pro Sekunde angibt, die der Benutzeragent für mit dieser Codierung codierte Spuren gewähren darf.
        Andere Parameter können die Bitrate weiter einschränken, wie zum Beispiel der Wert von `maxFramerate` oder die für den Transport oder das physische Netzwerk verfügbare Bandbreite.

        Der Wert wird mithilfe des Standardwertes Transport Independent Application Specific Maximum (TIAS) Bandbreite wie definiert in {{RFC(3890, "", "6.2.2")}} berechnet; dies ist die maximale benötigte Bandbreite ohne Berücksichtigung des Protokoll-Overheads von IP, TCP oder UDP und so weiter.

        Beachten Sie, dass die Bitrate auf verschiedene Arten erreicht werden kann, abhängig von den Medien und der Codierung.
        Zum Beispiel könnte für Video eine niedrige Bitrate erreicht werden, indem Frames fallengelassen werden (eine Bitrate von null könnte es ermöglichen, nur einen Frame zu senden), während für Audio die Spur aufhören könnte zu spielen, wenn die Bitrate zu niedrig ist, um sie zu senden.

    - `maxFramerate`
      - : Ein Wert, der die maximale Anzahl an Frames pro Sekunde angibt, die für diese Codierung zugelassen sind.
    - `priority`
      - : Ein String, der die Priorität des {{domxref("RTCRtpSender")}} angibt, die möglicherweise bestimmt, wie der Benutzeragent die Bandbreite zwischen Sendern zuteilt.
        Erlaubte Werte sind `very-low`, `low` (Standard), `medium`, `high`.
    - `rid`
      - : Ein String, der, falls gesetzt, eine _RTP-Stream-ID_ (_RID_) angibt, die mit der RID-Header-Erweiterung gesendet wird.
        Dieser Parameter kann nicht mit {{domxref("RTCRtpSender.setParameters", "setParameters()")}} geändert werden.
        Sein Wert kann nur beim ersten Erstellen des Transceivers festgelegt werden.
    - `scaleResolutionDownBy`
      - : Wird nur für Sender verwendet, deren Spur {{domxref("MediaStreamTrack.kind", "Art")}} `Video` ist. Dies ist ein Gleitkommawert, der einen Faktor angibt, um den das Video bei der Codierung herunterskaliert werden soll.
        Der Standardwert, 1.0, bedeutet, dass das Video in seiner Originalgröße codiert wird.
        Ein Wert von 2.0 skaliert die Videobilder um einen Faktor von 2 in jeder Dimension herunter, was zu einem Video führt, das 1/4 der Originalgröße hat.
        Der Wert darf nicht kleiner als 1.0 sein (der Versuch, das Video auf eine größere Größe zu skalieren, führt zu einem {{jsxref("RangeError")}}).

- `transactionId`
  - : Ein String, der eine eindeutige ID enthält.
    Dieser Wert wird verwendet, um sicherzustellen, dass {{domxref("RTCRtpSender.setParameters", "setParameters()")}} nur aufgerufen werden kann, um die durch einen bestimmten vorherigen Aufruf von `getParameters()` zurückgegebenen Parameter zu ändern.
    Dieser Parameter kann vom Anrufer nicht geändert werden.
    <!-- spec defines following in RTCRtpParameters -->
- `codecs`

  - : Ein Array von Objekten, die die [Medien-Codecs](/de/docs/Web/Media/Formats/WebRTC_codecs) beschreiben, die der Sender als aktiviert festgelegt hat und die er bereit ist zu verwenden.
    Dieser Parameter kann nicht geändert werden, sobald er initial festgelegt ist.

    Jedes Codec-Objekt im Array kann die folgenden Eigenschaften haben: <!-- RTCRtpCodecParameters -->

    - `channels` {{optional_inline}}

      - : Eine positive Ganzzahl, die die Anzahl der vom Codec unterstützten Kanäle angibt.
        Zum Beispiel spezifiziert bei Audio-Codecs ein Wert von 1 monoauralen Klang, während 2 Stereo angibt.

    - `clockRate`

      - : Eine positive Ganzzahl, die die Taktfrequenz des Codecs in Hertz (Hz) angibt.
        Die Taktfrequenz ist die Rate, mit der der RTP-Zeitstempel des Codecs fortgeschrieben wird.
        Die meisten Codecs haben spezifische Werte oder Wertebereiche, die sie zulassen.
        Die IANA führt eine [Liste von Codecs und deren Parameter](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-1), einschließlich ihrer Taktfrequenzen.

    - `mimeType`

      - : Ein String, der den MIME-Medientyp und Subtyp des Codecs angibt, spezifiziert als ein String der Form `"typ/subtyp"`.
        Die MIME-Typen, die von RTP verwendet werden, unterscheiden sich von denen, die anderswo verwendet werden.
        Die IANA führt ein [Register der gültigen MIME-Typen](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-2).
        Siehe auch [Codecs, die von WebRTC verwendet werden](/de/docs/Web/Media/Formats/WebRTC_codecs) für Details zu möglichen Codecs, die hier referenziert werden könnten.

    - `payloadType`

      - : Der [RTP-Payload-Typ](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-1), der zur Identifizierung dieses Codecs verwendet wird.

    - `sdpFmtpLine` {{optional_inline}}
      - : Ein String, der die formatspezifischen Parameter angibt, die von der lokalen Beschreibung bereitgestellt werden.

- `headerExtensions`
  - : Ein Array von null oder mehr RTP-Header-Erweiterungen, die jeweils eine vom Sender oder Empfänger unterstützte Erweiterung identifizieren. Header-Erweiterungen sind in {{RFC(3550, "", "5.3.1")}} beschrieben.
    Dieser Parameter kann nicht geändert werden, sobald er initial festgelegt ist.
- `rtcp`
  - : Ein {{domxref("RTCRtcpParameters")}} Objekt, das die Konfigurationsparameter bereitstellt, die für {{Glossary("RTCP")}} beim Sender oder Empfänger verwendet werden.
    Dieser Parameter kann nicht geändert werden, sobald er initial festgelegt ist.
- `degradationPreference` {{deprecated_inline}} {{optional_inline}} <!-- removed from spec. May have been or be in chrome -->
  - : Gibt die bevorzugte Weise an, wie die WebRTC-Schicht die Optimierung zwischen Bandbreite und Qualität in Situationen mit eingeschränkter Bandbreite handhaben soll.
    Die möglichen Werte sind `maintain-framerate`, `maintain-resolution` oder `balanced`.
    Der Standardwert ist `balanced`.

## Beispiele

Dieses Beispiel erhält die aktuelle Transaktions-ID des Senders; die Transaktions-ID identifiziert die aktuelle Parametergruppe eindeutig, um sicherzustellen, dass Aufrufe von {{domxref("RTCRtpSender.setParameters", "setParameters()")}} immer in der richtigen Reihenfolge behandelt werden, wodurch das versehentliche Überschreiben von Parametern mit älteren Parametern vermieden wird.

```js
function getSenderTransactionID(sender) {
  let parameters = sender.getParameters();

  return parameters.transactionId;
}
```

In gleicher Weise erhält dieser Code den kanonischen Namen (CNAME), der für {{Glossary("RTCP")}} auf einem {{domxref("RTCRtpSender")}} verwendet wird.

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

- {{domxref("RTCRtpSender.setParameters()")}}
- {{domxref("RTCRtpReceiver.getParameters()")}}
