---
title: "RTCRtpReceiver: Methode getParameters()"
short-title: getParameters()
slug: Web/API/RTCRtpReceiver/getParameters
l10n:
  sourceCommit: e82d46feb66ed523ed8f74bd0bd6f4153c87acbb
---

{{APIRef("WebRTC API")}}

Die **`getParameters()`**-Methode des {{domxref("RTCRtpReceiver")}}-Interfaces gibt ein Objekt zurück, das die aktuelle Konfiguration beschreibt, wie der {{domxref("RTCRtpReceiver.track", "Track")}} des Empfängers dekodiert wird.

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

  - : Ein Array von Objekten, die die [Medien-Codecs](/de/docs/Web/Media/Formats/WebRTC_codecs) beschreiben, die der Empfänger verwenden kann.
    Dies ist die Untermenge von Codecs, die der Empfänger bevorzugt und die das entfernte Endgerät zu senden bereit ist.
    Dieser Parameter kann nach der ersten Festlegung nicht mehr geändert werden.

    Jedes Codec-Objekt im Array kann folgende Eigenschaften haben: <!-- RTCRtpCodecParameters -->

    - `channels` {{optional_inline}}

      - : Eine positive ganze Zahl, die die Anzahl der vom Codec unterstützten Kanäle angibt.
        Beispielsweise gibt bei Audio-Codecs ein Wert von 1 Monoklang an, während 2 auf Stereo hinweist.

    - `clockRate`

      - : Eine positive ganze Zahl, die die Taktfrequenz des Codecs in Hertz (Hz) angibt.
        Die Taktfrequenz ist die Geschwindigkeit, mit der der RTP-Zeitstempel des Codecs fortschreitet.
        Die meisten Codecs haben spezifische Werte oder Wertbereiche, die sie zulassen.
        Die IANA führt eine [Liste von Codecs und ihren Parametern](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-1), einschließlich ihrer Taktfrequenzen.

    - `mimeType`

      - : Eine Zeichenfolge, die den MIME-Medientyp und -subtyp des Codecs angibt, in der Form einer Zeichenfolge `"type/subtype"`.
        Die MIME-Typen, die von RTP verwendet werden, unterscheiden sich von denen, die anderswo verwendet werden.
        Die IANA führt ein [Verzeichnis gültiger MIME-Typen](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-2).
        Siehe auch [Codecs, die von WebRTC verwendet werden](/de/docs/Web/Media/Formats/WebRTC_codecs) für Details über mögliche Codecs, die hier referenziert werden könnten.

    - `payloadType`

      - : Der [RTP-Nutzlasttyp](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-1), der verwendet wird, um diesen Codec zu identifizieren.

    - `sdpFmtpLine` {{optional_inline}}
      - : Eine Zeichenfolge, die das format-spezifische Parameterfeld aus der `a=fmtp`-Zeile im {{Glossary("SDP")}} enthält, das dem Codec-{{Glossary("SDP")}} vom entfernten Teilnehmer entspricht, falls das Feld vorhanden ist.
        Wenn kein Parameterfeld vorhanden ist, wird diese Eigenschaft ausgelassen.
        Siehe [Abschnitt 5.8 der IETF-Spezifikation für JSEP](https://datatracker.ietf.org/doc/html/draft-ietf-rtcweb-jsep-24#section-5.8) für weitere Informationen.

- `headerExtensions`
  - : Ein Array von null oder mehr RTP-Header-Erweiterungen, die jeweils eine vom Sender oder Empfänger unterstützte Erweiterung identifizieren.
    Header-Erweiterungen werden in {{RFC(3550, "", "5.3.1")}} beschrieben. Dieser Parameter kann nach der ersten Festlegung nicht mehr geändert werden.
- `rtcp`
  - : Ein {{domxref("RTCRtcpParameters")}}-Objekt, das die Konfigurationsparameter für {{Glossary("RTCP")}} auf dem Sender oder Empfänger bereitstellt.
    Dieser Parameter kann nach der ersten Festlegung nicht mehr geändert werden.

## Beispiele

Dieses Beispiel ermittelt den kanonischen Namen (CNAME), der für {{Glossary("RTCP")}} auf einem {{domxref("RTCRtpReceiver")}} verwendet wird.

```js
function getRtcpCNAME(receiver) {
  let parameters = receiver.getParameters();

  return parameters.rtcp.cname;
}
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}
