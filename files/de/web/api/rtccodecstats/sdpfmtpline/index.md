---
title: "RTCCodecStats: Eigenschaft sdpFmtpLine"
short-title: sdpFmtpLine
slug: Web/API/RTCCodecStats/sdpFmtpLine
l10n:
  sourceCommit: 5f5d8299c2889f9e93d2aa7bd572eb883ee91f62
---

{{APIRef("WebRTC")}}

Die **`sdpFmtpLine`**-Eigenschaft des [`RTCCodecStats`](/de/docs/Web/API/RTCCodecStats)-Wörterbuchs ist ein Zeichenkette, die die format-spezifischen Parameter des Codecs enthält.

Diese sind die Werte in der `"a=fmtp"`-Zeile im [SDP](/de/docs/Glossary/SDP) des Codecs (falls vorhanden) nach der Nutzlasttypenummer (siehe [Abschnitt 5.8 der IETF-Spezifikation für JSEP](https://datatracker.ietf.org/doc/html/draft-ietf-rtcweb-jsep-24#section-5.8)).

## Werte

Eine Zeichenkette, die die format-spezifischen Parameter des Codecs enthält.

## Beschreibung

Die `"a=fmtp"`-Zeile in der [SDP](/de/docs/Glossary/SDP)-Zeile des Codecs hat das folgende Format, wobei der Nutzlasttyp (siehe [`RTCCodecStats.payloadType`](/de/docs/Web/API/RTCCodecStats/payloadType)) und die Parameter codec-abhängig sind:

```plain
a=fmtp:<payload_type_number> param1=value1; ...; paramN=valueN
```

Zum Beispiel würde die folgende Zeile darauf hinweisen, dass der "opus"-Codec, der einen `payloadType` von 99 hat, die format-spezifischen Parameter `maxplaybackrate` und `stereo` besitzt:

```plain
a=fmtp:99 maxplaybackrate=16000; stereo=1;
```

Für diesen Codec wäre der Wert in `sdpFmtpLine` `maxplaybackrate=16000; stereo=1;`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- `codecs.sdpFmtpLine`-Option im Parameter, der an [`RTCRtpTransceiver.setCodecPreferences()`](/de/docs/Web/API/RTCRtpTransceiver/setCodecPreferences#sdpfmtpline) und [`RTCRtpSender.setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters#sdpfmtpline) übergeben wird.
- `codecs.sdpFmtpLine` im Objekt, das von [`RTCRtpSender.getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters#sdpfmtpline) und [`RTCRtpReceiver.getParameters()`](/de/docs/Web/API/RTCRtpReceiver/getParameters#sdpfmtpline) zurückgegeben wird.
