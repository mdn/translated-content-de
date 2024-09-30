---
title: RTCVideoSourceStats
slug: Web/API/RTCVideoSourceStats
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("WebRTC")}}

Das **`RTCVideoSourceStats`**-Wörterbuch der [WebRTC API](/de/docs/Web/API/WebRTC_API) bietet statistische Informationen über einen Videotrack ([`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)), der an einen oder mehrere Sender ([`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)) angehängt ist.

Diese Statistiken können durch Iteration des [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport), das von [`RTCRtpSender.getStats()`](/de/docs/Web/API/RTCRtpSender/getStats) oder [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) zurückgegeben wird, erhalten werden, bis Sie einen Bericht mit dem [`type`](#type) von `media-source` und einem [`kind`](#kind) von `video` finden.

> [!NOTE]
> Für Videoinformationen über Tracks mit entferntem Ursprung (die empfangen werden), siehe [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats).

## Instanzeigenschaften

- [`frames`](/de/docs/Web/API/RTCVideoSourceStats/frames) {{optional_inline}}
  - : Eine positive Zahl, die die Gesamtzahl der Frames angibt, die von dieser Videoquelle stammen.
- [`framesPerSecond`](/de/docs/Web/API/RTCVideoSourceStats/framesPerSecond) {{optional_inline}}
  - : Eine positive Zahl, die die Anzahl der Frames angibt, die in der letzten Sekunde von dieser Videoquelle stammen.
    Diese Eigenschaft ist in diesem Statistikobjekt für die erste Sekunde seiner Existenz nicht definiert.
- [`height`](/de/docs/Web/API/RTCVideoSourceStats/height) {{optional_inline}}
  - : Eine Zahl, die die Höhe in Pixeln des letzten von dieser Quelle stammenden Frames darstellt.
    Diese Eigenschaft ist in diesem Statistikobjekt erst nach der Produktion des ersten Frames definiert.
- [`width`](/de/docs/Web/API/RTCVideoSourceStats/width) {{optional_inline}}
  - : Eine Zahl, die die Breite in Pixeln des neuesten von dieser Quelle stammenden Frames darstellt.
    Diese Eigenschaft ist in diesem Statistikobjekt erst nach der Produktion des ersten Frames definiert.

### Allgemeine Eigenschaften von media-source

Die folgenden Eigenschaften sind sowohl in `RTCVideoSourceStats` als auch in [`RTCAudioSourceStats`](/de/docs/Web/API/RTCAudioSourceStats) vorhanden: <!-- RTCMediaSourceStats -->

- [`trackIdentifier`](/de/docs/Web/API/RTCVideoSourceStats/trackIdentifier)
  - : Ein String, der den [`id`](/de/docs/Web/API/MediaStreamTrack/id)-Wert des [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) enthält, der mit der Videoquelle verknüpft ist.
- [`kind`](/de/docs/Web/API/RTCVideoSourceStats/kind)
  - : Ein String, der angibt, ob dieses Objekt Statistiken für eine Videoquelle oder eine Medienquelle darstellt. Bei einem `RTCVideoSourceStats` ist dies immer `video`.

### Allgemeine Instanzeigenschaften

Die folgenden Eigenschaften sind allen Statistikobjekten gemeinsam. <!-- RTCStats -->

- [`id`](/de/docs/Web/API/RTCVideoSourceStats/id)
  - : Ein String, der das Objekt, das überwacht wird, um diese Statistik zu erzeugen, eindeutig identifiziert.
- [`timestamp`](/de/docs/Web/API/RTCVideoSourceStats/timestamp)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Objekt, das den Zeitpunkt angibt, zu dem das Muster für dieses Statistikobjekt aufgenommen wurde.
- [`type`](/de/docs/Web/API/RTCVideoSourceStats/type)
  - : Ein String mit dem Wert `"media-source"`, was darauf hinweist, dass das Objekt eine Instanz von entweder [`RTCAudioSourceStats`](/de/docs/Web/API/RTCAudioSourceStats) oder `RTCVideoSourceStats` ist.

## Beschreibung

Das Interface bietet Statistiken über eine Video-Medienquelle, die an einen oder mehrere Sender angehängt ist. Die Informationen beinhalten einen Bezeichner für den zugehörigen `MediaStreamTrack`, zusammen mit der Höhe und Breite des letzten von der Quelle gesendeten Frames, der Anzahl der von der Quelle gesendeten Frames und der Bildrate.

## Beispiele

Dieses Beispiel zeigt, wie Sie das stats-Objekt, das von `RTCRtpSender.getStats()` zurückgegeben wird, durchlaufen können, um die spezifischen media-source-Statistiken für Video zu erhalten.

```js
// where sender is an RTCRtpSender
const stats = await sender.getStats();
let videoSourceStats = null;

stats.forEach((report) => {
  if (report.type === "media-source" && report.kind==="video") {
    videoSourceStats = report;
    break;
  }
});

// videoSourceStats will be null if the report did not include video source stats
const frames = videoSourceStats?.frames;
const fps = videoSourceStats?.framesPerSecond;
const width = videoSourceStats?.width;
const height = videoSourceStats?.height;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
