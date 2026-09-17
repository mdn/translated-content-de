---
title: "RTCRtpReceiver: getParameters()-Methode"
short-title: getParameters()
slug: Web/API/RTCRtpReceiver/getParameters
l10n:
  sourceCommit: a4c63d2855b2f557e7d1ee821dee65011d569a41
---

{{APIRef("WebRTC API")}}

Die Methode **`getParameters()`** des [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver)-Interface gibt ein Objekt zurück, das die aktuelle Konfiguration dafür beschreibt, wie der [`track`](/de/docs/Web/API/RTCRtpReceiver/track) des Receivers dekodiert wird.

## Syntax

```js-nolint
getParameters()
```

### Parameter

Keine.

### Rückgabewert

Ein Objekt, das die aktuelle Konfiguration des Receivers angibt.

<!-- Spec defines as RTCRtpReceiveParameters, which is just a RTCRtpParameters -->

- `codecs`
  - : Ein Array von Objekten, die die [Medien-Codecs](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs) beschreiben, die der Receiver verwenden kann.
    Dies ist die Teilmenge der Codecs, die der Receiver als bevorzugt angegeben hat und zu deren Senden der Remote-Endpunkt bereit ist.
    Dieser Parameter kann nach seiner anfänglichen Festlegung nicht geändert werden.

    Jedes Codec-Objekt im Array kann die folgenden Eigenschaften haben: <!-- RTCRtpCodecParameters -->
    - `channels` {{optional_inline}}
      - : Eine positive ganze Zahl, die die Anzahl der vom Codec unterstützten Kanäle angibt.
        Bei Audio-Codecs gibt beispielsweise ein Wert von 1 monauralen Klang an, während 2 Stereo angibt.

    - `clockRate`
      - : Eine positive ganze Zahl, die die Clock-Rate des Codecs in Hertz (Hz) angibt.
        Die Clock-Rate ist die Rate, mit der der RTP-Zeitstempel des Codecs fortschreitet.
        Die meisten Codecs haben spezifische Werte oder Wertebereiche, die sie zulassen.
        Die IANA verwaltet eine [Liste von Codecs und ihren Parametern](https://www.iana.org/assignments/rtp-parameters#rtp-parameters-1), einschließlich ihrer Clock-Rates.

    - `mimeType`
      - : Ein String, der den MIME-Medientyp und -Untertyp des Codecs angibt, als String im Format `"type/subtype"`.
        Die von RTP verwendeten MIME-Type-Strings unterscheiden sich von den an anderer Stelle verwendeten.
        Die IANA verwaltet ein [Register gültiger MIME-Typen](https://www.iana.org/assignments/rtp-parameters#rtp-parameters-2).
        Siehe auch [Von WebRTC verwendete Codecs](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs) für Details zu möglichen Codecs, auf die hier verwiesen werden könnte.

    - `payloadType`
      - : Der [RTP-Payload-Typ](https://www.iana.org/assignments/rtp-parameters#rtp-parameters-1), der zur Identifizierung dieses Codecs verwendet wird.

    - `sdpFmtpLine` {{optional_inline}}
      - : Ein String, der das Feld für formatspezifische Parameter aus der Zeile `a=fmtp` in der {{Glossary("SDP", "SDP")}} angibt, die der Codec-{{Glossary("SDP", "SDP")}} des Remote-Peers entspricht, sofern das Feld vorhanden ist.
        Wenn kein Parameterfeld vorhanden ist, wird diese Eigenschaft weggelassen.
        Weitere Informationen finden Sie in [Abschnitt 5.8 der IETF-Spezifikation für JSEP](https://datatracker.ietf.org/doc/html/draft-ietf-rtcweb-jsep-24#section-5.8).

- `headerExtensions`
  - : Ein Array aus null oder mehr RTP-Header-Erweiterungen, von denen jede eine vom Sender oder Receiver unterstützte Erweiterung identifiziert.
    Header-Erweiterungen werden in {{RFC(3550, "", "5.3.1")}} beschrieben. Dieser Parameter kann nach seiner anfänglichen Festlegung nicht geändert werden.
- `rtcp`
  - : Ein Objekt, das die Konfigurationsparameter bereitstellt, die für {{Glossary("RTCP", "RTCP")}} auf dem Sender oder Receiver verwendet werden.
    Dieser Parameter kann nach seiner anfänglichen Festlegung nicht geändert werden.

    Das Objekt kann die folgenden Eigenschaften haben: <!-- RTCRtcpParameters -->
    - `cname`
      - : Ein String, der den von RTCP verwendeten kanonischen Namen (CNAME) angibt, beispielsweise in SDES-Nachrichten.
    - `reducedSize`
      - : Ein Boolean, der `true` ist, wenn RTCP mit reduzierter Größe konfiguriert ist ({{rfc("5506")}}), und `false`, wenn zusammengesetztes RTCP angegeben ist ({{rfc("3550")}}).

## Beispiele

Dieses Beispiel ruft den kanonischen Namen (CNAME) ab, der für {{Glossary("RTCP", "RTCP")}} auf einem [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) verwendet wird.

```js
function getRtcpCNAME(receiver) {
  let parameters = receiver.getParameters();

  return parameters.rtcp.cname;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
