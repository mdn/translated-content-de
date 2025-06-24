---
title: "RTCRtpReceiver: getParameters()-Methode"
short-title: getParameters()
slug: Web/API/RTCRtpReceiver/getParameters
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebRTC API")}}

Die **`getParameters()`**-Methode des [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver)-Interfaces gibt ein Objekt zurück, das die aktuelle Konfiguration für die Dekodierung der [`track`](/de/docs/Web/API/RTCRtpReceiver/track) des Empfängers beschreibt.

## Syntax

```js-nolint
getParameters()
```

### Parameter

Keine.

### Rückgabewert

Ein Objekt, das die aktuelle Konfiguration des Empfängers angibt.

<!-- Spec defines as RTCRtpReceiveParameters, which is just a RTCRtpParameters -->

- `codecs`

  - : Ein Array von Objekten, das die [Mediakodecs](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs) beschreibt, die der Empfänger verwenden kann.
    Dies ist die Teilmenge von Codecs, die der Empfänger bevorzugt und die der entfernte Endpunkt bereit ist zu senden.
    Dieser Parameter kann nach der ersten Einstellung nicht geändert werden.

    Jedes Codec-Objekt im Array kann die folgenden Eigenschaften aufweisen: <!-- RTCRtpCodecParameters -->

    - `channels` {{optional_inline}}

      - : Eine positive ganze Zahl, die die Anzahl der Kanäle angibt, die vom Codec unterstützt werden.
        Beispielsweise gibt für Audiocodecs ein Wert von 1 monauralen Ton an, während 2 Stereo bedeutet.

    - `clockRate`

      - : Eine positive ganze Zahl, die die Clockrate des Codecs in Hertz (Hz) spezifiziert.
        Die Clockrate ist die Geschwindigkeit, mit der der RTP-Zeitstempel des Codecs voranschreitet.
        Die meisten Codecs haben spezifische Werte oder Wertbereiche, die sie zulassen.
        Die IANA führt eine [Liste von Codecs und deren Parametern](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-1), einschließlich ihrer Clockraten.

    - `mimeType`

      - : Ein String, der den MIME-Medientyp und Subtypen des Codecs angibt, spezifiziert als ein String der Form `"type/subtype"`.
        Die von RTP verwendeten MIME-Type-Strings unterscheiden sich von denen, die anderswo verwendet werden.
        IANA hält ein [Register der gültigen MIME-Typen](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-2).
        Auch siehe [Codec's, die von WebRTC verwendet werden](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs) für Details zu möglichen Codecs, die hier referenziert werden könnten.

    - `payloadType`

      - : Der [RTP-Payloadtyp](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-1), der verwendet wird, um diesen Codec zu identifizieren.

    - `sdpFmtpLine` {{optional_inline}}
      - : Ein String, der das Format-spezifische Parameterfeld aus der `a=fmtp`-Zeile in der {{Glossary("SDP", "SDP")}} angibt, das dem Codec mit der {{Glossary("SDP", "SDP")}} vom remote Peer entspricht, falls das Feld vorhanden ist.
        Wenn kein Parameterfeld vorhanden ist, bleibt diese Eigenschaft weggelassen.
        Siehe [Abschnitt 5.8 der IETF-Spezifikation für JSEP](https://datatracker.ietf.org/doc/html/draft-ietf-rtcweb-jsep-24#section-5.8) für weitere Informationen.

- `headerExtensions`
  - : Ein Array von null oder mehr RTP-Header-Erweiterungen, die jeweils eine vom Sender oder Empfänger unterstützte Erweiterung identifizieren.
    Header-Erweiterungen werden in {{RFC(3550, "", "5.3.1")}} beschrieben. Dieser Parameter kann nach der ersten Einstellung nicht geändert werden.
- `rtcp`
  - : Ein [`RTCRtcpParameters`](/de/docs/Web/API/RTCRtcpParameters)-Objekt, das die Konfigurationsparameter für {{Glossary("RTCP", "RTCP")}} auf dem Sender oder Empfänger bereitstellt.
    Dieser Parameter kann nach der ersten Einstellung nicht geändert werden.

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
