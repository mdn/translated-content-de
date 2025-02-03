---
title: "RTCRtpReceiver: getParameters() Methode"
short-title: getParameters()
slug: Web/API/RTCRtpReceiver/getParameters
l10n:
  sourceCommit: 27bceead8e9b1fe9c92df0fa5e418f81bd5b9fdf
---

{{APIRef("WebRTC API")}}

Die **`getParameters()`** Methode der [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) Schnittstelle gibt ein Objekt zurück, das die aktuelle Konfiguration beschreibt, wie der [`track`](/de/docs/Web/API/RTCRtpReceiver/track) des Empfängers dekodiert wird.

## Syntax

```js-nolint
getParameters()
```

### Parameter

Keine.

### Rückgabewert

Ein Objekt, das die aktuelle Konfiguration des Empfängers angibt.

<!-- Im Standard definiert als RTCRtpReceiveParameters, was nur RTCRtpParameters ist -->

- `codecs`

  - : Ein Array von Objekten, das die [Medien-Codecs](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs) beschreibt, die der Empfänger bereit ist zu nutzen.
    Dies ist der Satz von Codecs, den der Empfänger bevorzugt und den der entfernte Endpunkt bereit ist zu senden.
    Dieser Parameter kann nach anfänglicher Festlegung nicht mehr geändert werden.

    Jedes Codec-Objekt im Array kann die folgenden Eigenschaften haben: <!-- RTCRtpCodecParameters -->

    - `channels` {{optional_inline}}

      - : Eine positive ganze Zahl, die die Anzahl der vom Codec unterstützten Kanäle angibt.
        Zum Beispiel gibt ein Wert von 1 bei Audio-Codecs Mono-Sound an, während 2 Stereo bedeutet.

    - `clockRate`

      - : Eine positive ganze Zahl, die die Abtastrate des Codecs in Hertz (Hz) angibt.
        Die Abtastrate ist die Rate, mit der der RTP-Zeitstempel des Codecs fortschreitet.
        Die meisten Codecs haben spezifische Werte oder Wertebereiche, die sie zulassen.
        Die IANA führt eine [Liste der Codecs und ihrer Parameter](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-1), einschließlich ihrer Abtastraten.

    - `mimeType`

      - : Ein String, der den MIME-Medientyp und Subtyp des Codecs angibt, spezifiziert als ein String der Form `"type/subtype"`.
        Die MIME-Typen, die von RTP verwendet werden, unterscheiden sich von denen, die anderswo benutzt werden.
        Die IANA führt ein [Verzeichnis gültiger MIME-Typen](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-2).
        Auch sehen Sie [Codecs verwendet von WebRTC](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs) für Details zu potenziellen Codecs, die hier referenziert sein könnten.

    - `payloadType`

      - : Der [RTP-Payload-Typ](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-1), der verwendet wird, um diesen Codec zu identifizieren.

    - `sdpFmtpLine` {{optional_inline}}
      - : Ein String, der das formatierte spezifische Parameterfeld der `a=fmtp`-Zeile in der {{Glossary("SDP", "SDP")}} angibt, das dem Codec-SDP vom entfernten Peer entspricht, falls das Feld vorhanden ist.
        Wenn kein Parameterfeld vorhanden ist, wird diese Eigenschaft ausgelassen.
        Siehe [Abschnitt 5.8 der IETF-Spezifikation für JSEP](https://datatracker.ietf.org/doc/html/draft-ietf-rtcweb-jsep-24#section-5.8) für weitere Informationen.

- `headerExtensions`
  - : Ein Array von null oder mehr RTP-Header-Erweiterungen, von denen jede eine vom Sender oder Empfänger unterstützte Erweiterung identifiziert.
    Header-Erweiterungen werden in {{RFC(3550, "", "5.3.1")}} beschrieben. Dieser Parameter kann nach anfänglicher Festlegung nicht mehr geändert werden.
- `rtcp`
  - : Ein [`RTCRtcpParameters`](/de/docs/Web/API/RTCRtcpParameters) Objekt, das die Konfigurationsparameter bereitstellt, die für {{Glossary("RTCP", "RTCP")}} auf dem Sender oder Empfänger verwendet werden.
    Dieser Parameter kann nach anfänglicher Festlegung nicht mehr geändert werden.

## Beispiele

Dieses Beispiel erhält den kanonischen Namen (CNAME), der für {{Glossary("RTCP", "RTCP")}} auf einem [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) verwendet wird.

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
