---
title: "RTCRtpStreamStats: kind-Eigenschaft"
short-title: kind
slug: Web/API/RTCRtpStreamStats/kind
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{APIRef("WebRTC")}}

Die **`kind`**-Eigenschaft des
[`RTCRtpStreamStats`](/de/docs/Web/API/RTCRtpStreamStats)-Wörterbuchs ist ein String, der angibt, ob der beschriebene [RTP](/de/docs/Glossary/RTP)-Stream Audio- oder Video-Medien enthält.

Der Wert ist immer entweder `"audio"` oder `"video"`.

Diese Eigenschaft wurde zuvor `mediaType` genannt. Der Name wurde in der Spezifikation im Februar 2018 geändert. Siehe [Browser-Kompatibilität](#browser-kompatibilität) unten, um zu bestimmen, wie sich dies auf die von Ihnen anvisierten Browser auswirkt.

## Wert

Ein String, dessen Wert `"audio"` ist, wenn der Track, dessen
Statistiken durch das `RTCRtpStreamStats`-Objekt angegeben werden, Audio enthält, oder
`"video"`, wenn der Track Video-Medien enthält.

Dieser String wird immer derselbe sein wie der, der von der zugehörigen
[`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekts [`kind`](/de/docs/Web/API/MediaStreamTrack/kind)-Eigenschaft bereitgestellt wird. Er wird auch mit dem Media-Typ der [`RTCCodecStats.codec`](/de/docs/Web/API/RTCCodecStats/codec)-Eigenschaft des Statistik-Objekts übereinstimmen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
