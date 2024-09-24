---
title: "RTCRtpStreamStats: kind Eigenschaft"
short-title: kind
slug: Web/API/RTCRtpStreamStats/kind
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{APIRef("WebRTC")}}

Die **`kind`**-Eigenschaft des
{{domxref("RTCRtpStreamStats")}}-Wörterbuchs ist ein String, der angibt, ob der
beschriebene {{Glossary("RTP")}}-Stream Audio- oder Videomedien enthält.

Der Wert ist immer entweder `"audio"` oder `"video"`.

Diese Eigenschaft wurde zuvor `mediaType` genannt. Der Name wurde in der
Spezifikation im Februar 2018 geändert. Weitere Informationen dazu, wie sich dies auf die von Ihnen angezielten Browser auswirkt, finden Sie im Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) unten.

## Wert

Ein String, dessen Wert `"audio"` ist, wenn die Spur, deren
Statistiken vom `RTCRtpStreamStats`-Objekt bereitgestellt werden, Audio enthält, oder
`"video"`, wenn die Spur Videomedien enthält.

Dieser String entspricht immer dem, der von der zugehörigen
{{domxref("MediaStreamTrack")}}-Objekt-Eigenschaft {{domxref("MediaStreamTrack.kind", "kind")}}
bereitgestellt wird. Er wird auch mit dem Medientyp der
{{domxref("RTCCodecStats.codec")}}-Eigenschaft des Statistikobjekts übereinstimmen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
