---
title: RTCVideoSourceStats
slug: Web/API/RTCVideoSourceStats
l10n:
  sourceCommit: b2c48c8b7c097aeab4bc15a388c913f466f40e25
---

{{APIRef("WebRTC")}}

Das **`RTCVideoSourceStats`**-Wörterbuch der [WebRTC API](/de/docs/Web/API/WebRTC_API) liefert Statistikinformationen über eine Video-Spur ([`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)), die einem oder mehreren Sendern ([`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)) zugeordnet ist.

Diese Statistiken können erhalten werden, indem der [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) durchgegangen wird, der von [`RTCRtpSender.getStats()`](/de/docs/Web/API/RTCRtpSender/getStats) oder [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) zurückgegeben wird, bis Sie einen Bericht mit dem [`type`](/de/docs/Web/API/RTCVideoSourceStats/type) von `media-source` und einem [`kind`](/de/docs/Web/API/RTCVideoSourceStats/kind) von `video` finden.

> [!NOTE]
> Für Videoinformationen über aus der Ferne bezogene Spuren (die empfangen werden), siehe [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats).

## Instanz-Eigenschaften

- [`frames`](/de/docs/Web/API/RTCVideoSourceStats/frames) {{optional_inline}}
  - : Eine positive Zahl, die die Gesamtanzahl der von dieser Videoquelle ausgehenden Frames angibt.
- [`framesPerSecond`](/de/docs/Web/API/RTCVideoSourceStats/framesPerSecond) {{optional_inline}}
  - : Eine positive Zahl, die die Anzahl der von dieser Videoquelle in der letzten Sekunde ausgehenden Frames repräsentiert.
    Diese Eigenschaft ist in diesem Statistikobjekt während der ersten Sekunde ihrer Existenz nicht definiert.
- [`height`](/de/docs/Web/API/RTCVideoSourceStats/height) {{optional_inline}}
  - : Eine Zahl, die die Höhe, in Pixeln, des letzten aus dieser Quelle stammenden Frames darstellt.
    Diese Eigenschaft ist in diesem Statistikobjekt nicht definiert, bis nach dem ersten Frame.
- [`width`](/de/docs/Web/API/RTCVideoSourceStats/width) {{optional_inline}}
  - : Eine Zahl, die die Breite, in Pixeln, des neuesten aus dieser Quelle stammenden Frames darstellt.
    Diese Eigenschaft ist in diesem Statistikobjekt nicht definiert, bis nach dem ersten Frame.

### Gemeinsame Eigenschaften von media-source

Die folgenden Eigenschaften sind sowohl in `RTCVideoSourceStats` als auch in [`RTCAudioSourceStats`](/de/docs/Web/API/RTCAudioSourceStats) vorhanden: <!-- RTCMediaSourceStats  -->

- [`trackIdentifier`](/de/docs/Web/API/RTCVideoSourceStats/trackIdentifier)
  - : Ein String, der den [`id`](/de/docs/Web/API/MediaStreamTrack/id)-Wert des mit der Videoquelle assoziierten [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) enthält.
- [`kind`](/de/docs/Web/API/RTCVideoSourceStats/kind)
  - : Ein String, der angibt, ob dieses Objekt Statistiken für eine Videoquelle oder eine Medienquelle repräsentiert. Für ein `RTCVideoSourceStats` wird dies immer `video` sein.

### Gemeinsame Instanz-Eigenschaften

Die folgenden Eigenschaften sind allen Statistikobjekten gemeinsam. <!-- RTCStats -->

- [`id`](/de/docs/Web/API/RTCVideoSourceStats/id)
  - : Ein String, der das Objekt, das überwacht wird, um diesen Satz von Statistiken zu erzeugen, eindeutig identifiziert.
- [`timestamp`](/de/docs/Web/API/RTCVideoSourceStats/timestamp)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Objekt, das die Zeit angibt, zu der die Probe für dieses Statistikobjekt genommen wurde.
- [`type`](/de/docs/Web/API/RTCVideoSourceStats/type)
  - : Ein String mit dem Wert `"media-source"`, das angibt, dass das Objekt eine Instanz von entweder [`RTCAudioSourceStats`](/de/docs/Web/API/RTCAudioSourceStats) oder `RTCVideoSourceStats` ist.

## Beschreibung

Die Schnittstelle bietet Statistiken über eine Video-Medienquelle, die einem oder mehreren Sendern zugeordnet ist.
Die Informationen umfassen einen Identifikator für den zugehörigen `MediaStreamTrack`, zusammen mit der Höhe und Breite des letzten von der Quelle gesendeten Frames, der Anzahl der von der Quelle gesendeten Frames und der Bildrate.

## Beispiele

Dieses Beispiel zeigt, wie man das von `RTCRtpSender.getStats()` zurückgegebene Statistikobjekt durchlaufen kann, um die video-spezifischen media-source-Statistiken zu erhalten.

```js
// where sender is an RTCRtpSender
const stats = await sender.getStats();
let videoSourceStats = null;

for (const report of stats.values()) {
  if (report.type === "media-source" && report.kind === "video") {
    videoSourceStats = report;
    break;
  }
}

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
