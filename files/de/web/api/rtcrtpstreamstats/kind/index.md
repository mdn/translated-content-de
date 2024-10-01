---
title: "RTCRtpStreamStats: kind-Eigenschaft"
short-title: kind
slug: Web/API/RTCRtpStreamStats/kind
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{APIRef("WebRTC")}}

Die **`kind`**-Eigenschaft des
[`RTCRtpStreamStats`](/de/docs/Web/API/RTCRtpStreamStats)-Wörterbuchs ist ein String, der angibt, ob der
beschriebene {{Glossary("RTP", "RTP")}}-Stream Audio- oder Videomedien enthält.

Sein Wert ist immer entweder `"audio"` oder `"video"`.

Diese Eigenschaft wurde zuvor `mediaType` genannt. Der Name wurde in der
Spezifikation im Februar 2018 geändert. Siehe [Browser-Kompatibilität](#browser-kompatibilität) unten, um zu
bestimmen, wie sich dies auf die von Ihnen anvisierten Browser auswirkt.

## Wert

Ein String, dessen Wert `"audio"` ist, wenn der Track, dessen Statistiken durch das `RTCRtpStreamStats`-Objekt bereitgestellt werden, Audio enthält, oder `"video"`, wenn der Track Videomedien enthält.

Dieser String wird immer derselbe sein wie der, der von der zugehörigen
[`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekt-`kind`-Eigenschaft bereitgestellt wird. Er wird auch mit dem Medientyp der
`RTCCodecStats.codec`-Eigenschaft des Statistikobjekts übereinstimmen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
