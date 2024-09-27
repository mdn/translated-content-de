---
title: RTCVideoSourceStats
slug: Web/API/RTCVideoSourceStats
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("WebRTC")}}

Das **`RTCVideoSourceStats`**-Wörterbuch der [WebRTC API](/de/docs/Web/API/WebRTC_API) bietet Statistikinformationen über einen Videospur ([`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)), die einem oder mehreren Sendern ([`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)) zugeordnet ist.

Diese Statistiken können durch Iteration des [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport), das von [`RTCRtpSender.getStats()`](/de/docs/Web/API/RTCRtpSender/getStats) oder [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) zurückgegeben wird, abgerufen werden, bis Sie einen Bericht mit dem [`type`](#type) von `media-source` und einem [`kind`](#kind) von `video` finden.

> [!NOTE]
> Für Videoinformationen über aus der Ferne bezogene Spuren (die empfangen werden), siehe [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats).

## Instanzeigenschaften

- [`frames`](/de/docs/Web/API/RTCVideoSourceStats/frames) {{optional_inline}}
  - : Eine positive Zahl, die die Gesamtanzahl der Frames angibt, die von dieser Videoquelle stammen.
- [`framesPerSecond`](/de/docs/Web/API/RTCVideoSourceStats/framesPerSecond) {{optional_inline}}
  - : Eine positive Zahl, die die Anzahl der Frames angibt, die in der letzten Sekunde von dieser Videoquelle stammen.
    Diese Eigenschaft ist in diesem Statistikobjekt für die erste Sekunde seiner Existenz nicht definiert.
- [`height`](/de/docs/Web/API/RTCVideoSourceStats/height) {{optional_inline}}
  - : Eine Zahl, die die Höhe, in Pixel, des letzten Frames darstellt, der von dieser Quelle stammt.
    Diese Eigenschaft ist in diesem Statistikobjekt erst nach Produktion des ersten Frames definiert.
- [`width`](/de/docs/Web/API/RTCVideoSourceStats/width) {{optional_inline}}
  - : Eine Zahl, die die Breite, in Pixel, des aktuellsten Frames darstellt, der von dieser Quelle stammt.
    Diese Eigenschaft ist in diesem Statistikobjekt erst nach Produktion des ersten Frames definiert.

### Gemeinsame Eigenschaften von Medienquellen

Die folgenden Eigenschaften sind sowohl in `RTCVideoSourceStats` als auch in [`RTCAudioSourceStats`](/de/docs/Web/API/RTCAudioSourceStats) vorhanden: <!-- RTCMediaSourceStats  -->

- [`trackIdentifier`](/de/docs/Web/API/RTCVideoSourceStats/trackIdentifier)
  - : Ein String, der den [`id`](/de/docs/Web/API/MediaStreamTrack/id)-Wert des [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) enthält, der mit der Videoquelle verknüpft ist.
- [`kind`](/de/docs/Web/API/RTCVideoSourceStats/kind)
  - : Ein String, der anzeigt, ob dieses Objekt Statistiken für eine Videoquelle oder eine Medienquelle darstellt. Für ein `RTCVideoSourceStats` ist dies immer `video`.

### Gemeinsame Instanzeigenschaften

Die folgenden Eigenschaften sind allen Statistikobjekten gemeinsam. <!-- RTCStats -->

- [`id`](/de/docs/Web/API/RTCVideoSourceStats/id)
  - : Ein String, der das Objekt, das überwacht wird, um diesen Satz von Statistiken zu erstellen, eindeutig identifiziert.
- [`timestamp`](/de/docs/Web/API/RTCVideoSourceStats/timestamp)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Objekt, das den Zeitpunkt angibt, zu dem die Stichprobe für dieses Statistikobjekt genommen wurde.
- [`type`](/de/docs/Web/API/RTCVideoSourceStats/type)
  - : Ein String mit dem Wert `"media-source"`, was darauf hinweist, dass das Objekt eine Instanz entweder von [`RTCAudioSourceStats`](/de/docs/Web/API/RTCAudioSourceStats) oder `RTCVideoSourceStats` ist.

## Beschreibung

Die Schnittstelle bietet Statistiken über eine Video-Medienquelle, die an einen oder mehrere Sender angehängt ist.
Die Informationen umfassen einen Identifikator für die zugeordnete `MediaStreamTrack`, zusammen mit der Höhe und Breite des letzten von der Quelle gesendeten Frames, der Anzahl der von der Quelle gesendeten Frames und der Bildrate.

## Beispiele

Dieses Beispiel zeigt, wie Sie das von `RTCRtpSender.getStats()` zurückgegebene Statistikobjekt durchlaufen, um die videospezifischen Medienquellenstatistiken zu erhalten.

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
