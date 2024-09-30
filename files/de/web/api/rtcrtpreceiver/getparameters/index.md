---
title: "RTCRtpReceiver: getParameters() Methode"
short-title: getParameters()
slug: Web/API/RTCRtpReceiver/getParameters
l10n:
  sourceCommit: e82d46feb66ed523ed8f74bd0bd6f4153c87acbb
---

{{APIRef("WebRTC API")}}

Die **`getParameters()`** Methode der [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) Schnittstelle gibt ein Objekt zurück, das die aktuelle Konfiguration beschreibt, wie die [`track`](/de/docs/Web/API/RTCRtpReceiver/track) des Empfängers dekodiert wird.

## Syntax

```js-nolint
getParameters()
```

### Parameter

Keine.

### Rückgabewert

Ein Objekt, das die aktuelle Konfiguration des Empfängers anzeigt.

<!-- Spec defines as RTCRtpReceiveParameters, which is just a RTCRtpParameters -->

- `codecs`

  - : Ein Array von Objekten, das die [Medien-Codecs](/de/docs/Web/Media/Formats/WebRTC_codecs) beschreibt, die der Empfänger verwenden kann.
    Dies ist die Untermenge der Codecs, die der Empfänger bevorzugt und die der entfernte Endpunkt senden kann.
    Dieser Parameter kann, einmal gesetzt, nicht mehr geändert werden.

    Jedes Codec-Objekt im Array kann die folgenden Eigenschaften haben: <!-- RTCRtpCodecParameters -->

    - `channels` {{optional_inline}}

      - : Eine positive ganze Zahl, die die Anzahl der vom Codec unterstützten Kanäle angibt.
        Zum Beispiel gibt ein Wert von 1 für Audiocodecs Monosound an, während 2 Stereo anzeigt.

    - `clockRate`

      - : Eine positive ganze Zahl, die die Taktfrequenz des Codecs in Hertz (Hz) angibt.
        Die Taktfrequenz ist die Rate, mit der der RTP-Zeitstempel des Codecs fortschreitet.
        Die meisten Codecs haben spezifische Werte oder Wertbereiche, die sie zulassen.
        Die IANA führt eine [Liste von Codecs und deren Parametern](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-1), einschließlich ihrer Taktfrequenzen.

    - `mimeType`

      - : Ein String, der den MIME-Medientyp und -Untertyp des Codecs angibt, als String der Form `"type/subtype"` spezifiziert.
        Die MIME-Typ-Strings, die von RTP verwendet werden, unterscheiden sich von denen, die anderswo verwendet werden.
        IANA führt ein [Register gültiger MIME-Typen](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-2).
        Siehe auch [Codecs, die von WebRTC verwendet werden](/de/docs/Web/Media/Formats/WebRTC_codecs) für Details zu potenziellen Codecs, die hier referenziert werden könnten.

    - `payloadType`

      - : Der [RTP-Nutzlasttyp](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-1), der zur Identifizierung dieses Codecs verwendet wird.

    - `sdpFmtpLine` {{optional_inline}}
      - : Ein String, der die formatspezifischen Parameter aus der `a=fmtp`-Zeile in der [SDP](/de/docs/Glossary/SDP) angibt, die dem Codec [SDP](/de/docs/Glossary/SDP) des entfernten Peers entspricht, falls das Feld vorhanden ist.
        Wenn kein Parameterfeld vorhanden ist, wird diese Eigenschaft weggelassen.
        Siehe [Abschnitt 5.8 der IETF-Spezifikation für JSEP](https://datatracker.ietf.org/doc/html/draft-ietf-rtcweb-jsep-24#section-5.8) für weitere Informationen.

- `headerExtensions`
  - : Ein Array mit null oder mehr RTP-Headererweiterungen, die jeweils eine vom Sender oder Empfänger unterstützte Erweiterung identifizieren.
    Header-Erweiterungen werden in {{RFC(3550, "", "5.3.1")}} beschrieben. Dieser Parameter kann, einmal gesetzt, nicht mehr geändert werden.
- `rtcp`
  - : Ein [`RTCRtcpParameters`](/de/docs/Web/API/RTCRtcpParameters) Objekt, das die Konfigurationsparameter für [RTCP](/de/docs/Glossary/RTCP) auf dem Sender oder Empfänger bereitstellt.
    Dieser Parameter kann, einmal gesetzt, nicht mehr geändert werden.

## Beispiele

Dieses Beispiel erhält den kanonischen Namen (CNAME), der für [RTCP](/de/docs/Glossary/RTCP) auf einem [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) verwendet wird.

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
