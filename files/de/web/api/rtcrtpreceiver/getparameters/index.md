---
title: "RTCRtpReceiver: getParameters() Methode"
short-title: getParameters()
slug: Web/API/RTCRtpReceiver/getParameters
l10n:
  sourceCommit: 9c3005fef31dbcfad889a57cd6f46014e6c498da
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

Ein Objekt, das die aktuelle Konfiguration des Empfängers beschreibt.

<!-- Spec defines as RTCRtpReceiveParameters, which is just a RTCRtpParameters -->

- `codecs`
  - : Ein Array von Objekten, die die [Media Codecs](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs) beschreiben, die der Empfänger verwenden kann.
    Dies ist der Teil der Codecs, den der Empfänger bevorzugt und den die Gegenstelle senden kann.
    Dieser Parameter kann nach der ersten Festlegung nicht mehr geändert werden.

    Jedes Codec-Objekt im Array kann die folgenden Eigenschaften haben: <!-- RTCRtpCodecParameters -->
    - `channels` {{optional_inline}}
      - : Eine positive ganze Zahl, die die Anzahl der vom Codec unterstützten Kanäle angibt.
        Beispielsweise gibt ein Wert von 1 bei Audiocodecs Mono-Sound an, während 2 Stereo angibt.

    - `clockRate`
      - : Eine positive ganze Zahl, die die Taktfrequenz des Codecs in Hertz (Hz) angibt.
        Die Taktfrequenz ist die Rate, mit der der RTP-Zeitstempel des Codecs voranschreitet.
        Die meisten Codecs haben spezifische Werte oder Wertbereiche, die sie zulassen.
        Die IANA führt eine [Liste von Codecs und ihren Parametern](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-1), einschließlich ihrer Taktfrequenzen.

    - `mimeType`
      - : Ein String, der den MIME Medientyp und Subtyp des Codecs angibt, als String in der Form `"type/subtype"`.
        Die von RTP verwendeten MIME-Typen unterscheiden sich von denen, die anderswo verwendet werden.
        Die IANA führt ein [Register gültiger MIME-Typen](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-2).
        Weitere Informationen zu potenziell hier referenzierten Codecs finden Sie unter [Codecs verwendet von WebRTC](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs).

    - `payloadType`
      - : Der [RTP Nutzlasttyp](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-1), der verwendet wird, um diesen Codec zu identifizieren.

    - `sdpFmtpLine` {{optional_inline}}
      - : Ein String, der das feldspezifische Parameterfeld von der `a=fmtp`-Zeile im {{Glossary("SDP", "SDP")}} angibt, das dem Codec {{Glossary("SDP", "SDP")}} von der entfernten Gegenstelle entspricht, falls das Feld vorhanden ist.
        Wenn kein Parameterfeld vorhanden ist, wird diese Eigenschaft weggelassen.
        Siehe [Abschnitt 5.8 der IETF-Spezifikation für JSEP](https://datatracker.ietf.org/doc/html/draft-ietf-rtcweb-jsep-24#section-5.8) für mehr Informationen.

- `headerExtensions`
  - : Ein Array von null oder mehr RTP-Header-Erweiterungen, die jeweils eine vom Sender oder Empfänger unterstützte Erweiterung identifizieren.
    Header-Erweiterungen sind in {{RFC(3550, "", "5.3.1")}} beschrieben. Dieser Parameter kann nach der ersten Festlegung nicht mehr geändert werden.
- `rtcp`
  - : Ein Objekt, das die Konfigurationsparameter für {{Glossary("RTCP", "RTCP")}} auf dem Sender oder Empfänger bereitstellt.
    Dieser Parameter kann nach der ersten Festlegung nicht mehr geändert werden.

    Das Objekt kann die folgenden Eigenschaften haben: <!-- RTCRtcpParameters -->
    - `cname`
      - : Ein String, der den kanonischen Namen (CNAME) angibt, der von RTCP (z. B. in SDES-Nachrichten) verwendet wird.
    - `reducedSize`
      - : Ein Boolean, der `true` ist, wenn die reduzierte Größe von RTCP konfiguriert ist ({{rfc("5506")}}), und `false`, wenn zusammengesetztes RTCP angegeben ist ({{rfc("3550")}}).

## Beispiele

Dieses Beispiel ermittelt den kanonischen Namen (CNAME), der für {{Glossary("RTCP", "RTCP")}} auf einem [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) verwendet wird.

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
