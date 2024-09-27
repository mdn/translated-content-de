---
title: "RTCRtpReceiver: getParameters()-Methode"
short-title: getParameters()
slug: Web/API/RTCRtpReceiver/getParameters
l10n:
  sourceCommit: e82d46feb66ed523ed8f74bd0bd6f4153c87acbb
---

{{APIRef("WebRTC API")}}

Die **`getParameters()`**-Methode des [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver)-Interfaces gibt ein Objekt zurück, das die aktuelle Konfiguration beschreibt, wie der [`track`](/de/docs/Web/API/RTCRtpReceiver/track) des Empfängers dekodiert wird.

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

  - : Ein Array von Objekten, die die [Media-Codecs](/de/docs/Web/Media/Formats/WebRTC_codecs) beschreiben, die der Empfänger bereit ist zu verwenden.
    Dies ist der Teil der Codecs, den der Empfänger bevorzugt und den der entfernte Endpunkt bereit ist zu senden.
    Dieser Parameter kann nach der ersten Einstellung nicht mehr geändert werden.

    Jedes Codec-Objekt im Array kann die folgenden Eigenschaften haben: <!-- RTCRtpCodecParameters -->

    - `channels` {{optional_inline}}

      - : Eine positive Ganzzahl, die die Anzahl der vom Codec unterstützten Kanäle angibt.
        Zum Beispiel gibt ein Wert von 1 für Audiocodecs Mono-Ton an, während 2 Stereo bedeutet.

    - `clockRate`

      - : Eine positive Ganzzahl, die die Taktfrequenz des Codecs in Hertz (Hz) angibt.
        Die Taktfrequenz ist die Rate, mit der der RTP-Zeitstempel des Codecs fortschreitet.
        Die meisten Codecs haben spezifische Werte oder Wertebereiche, die sie zulassen.
        Die IANA hält eine [Liste von Codecs und ihren Parametern](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-1), einschließlich ihrer Taktfrequenzen, bereit.

    - `mimeType`

      - : Ein String, der den MIME-Mediantyp und Subtyp des Codecs angibt, spezifiziert als String der Form `"typ/subtyp"`.
        Die MIME-Typen von RTP unterscheiden sich von denen, die anderswo verwendet werden.
        IANA pflegt ein [Register gültiger MIME-Typen](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-2).
        Siehe auch [Codecs verwendet von WebRTC](/de/docs/Web/Media/Formats/WebRTC_codecs) für Details zu möglichen hier referenzierten Codecs.

    - `payloadType`

      - : Der [RTP Payload-Typ](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-1), der verwendet wird, um diesen Codec zu identifizieren.

    - `sdpFmtpLine` {{optional_inline}}
      - : Ein String, der das formatbezogene Parameterfeld von der `a=fmtp`-Zeile im [SDP](/de/docs/Glossary/SDP) angibt, die dem Codec [SDP](/de/docs/Glossary/SDP) des entfernten Peers entspricht, falls das Feld vorhanden ist.
        Falls kein Parameterfeld vorhanden ist, wird diese Eigenschaft weggelassen.
        Siehe [Abschnitt 5.8 der IETF-Spezifikation für JSEP](https://datatracker.ietf.org/doc/html/draft-ietf-rtcweb-jsep-24#section-5.8) für weitere Informationen.

- `headerExtensions`
  - : Ein Array von null oder mehr RTP-Headererweiterungen, die jeweils eine vom Sender oder Empfänger unterstützte Erweiterung identifizieren.
    Headererweiterungen werden in {{RFC(3550, "", "5.3.1")}} beschrieben. Dieser Parameter kann nach der ersten Einstellung nicht mehr geändert werden.
- `rtcp`
  - : Ein [`RTCRtcpParameters`](/de/docs/Web/API/RTCRtcpParameters)-Objekt, das die Konfigurationsparameter für [RTCP](/de/docs/Glossary/RTCP) beim Sender oder Empfänger bereitstellt.
    Dieser Parameter kann nach der ersten Einstellung nicht mehr geändert werden.

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
