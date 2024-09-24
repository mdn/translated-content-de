---
title: RTCVideoSourceStats
slug: Web/API/RTCVideoSourceStats
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("WebRTC")}}

Das **`RTCVideoSourceStats`** Wörterbuch der [WebRTC API](/de/docs/Web/API/WebRTC_API) liefert Statistikdaten über eine Video-Spur ({{domxref("MediaStreamTrack")}}), die mit einem oder mehreren Sendern ({{domxref("RTCRtpSender")}}) verbunden ist.

Diese Statistiken können durch Durchlaufen des {{domxref("RTCStatsReport")}}, das von {{domxref("RTCRtpSender.getStats()")}} oder {{domxref("RTCPeerConnection.getStats()")}} zurückgegeben wird, gewonnen werden, bis Sie einen Bericht mit dem [`type`](#type) von `media-source` und einem [`kind`](#kind) von `video` finden.

> [!NOTE]
> Für Video-Informationen über fernbezogene Spuren (die empfangen werden), siehe {{domxref("RTCInboundRtpStreamStats")}}.

## Instanz-Eigenschaften

- {{domxref("RTCVideoSourceStats.frames", "frames")}} {{optional_inline}}
  - : Eine positive Zahl, die die Gesamtzahl der von dieser Videoquelle stammenden Frames angibt.
- {{domxref("RTCVideoSourceStats.framesPerSecond", "framesPerSecond")}} {{optional_inline}}
  - : Eine positive Zahl, die die Anzahl der in der letzten Sekunde von dieser Videoquelle stammenden Frames darstellt.
    Diese Eigenschaft ist in diesem Statistik-Objekt für die erste Sekunde ihrer Existenz nicht definiert.
- {{domxref("RTCVideoSourceStats.height", "height")}} {{optional_inline}}
  - : Eine Zahl, die die Höhe, in Pixeln, des letzten von dieser Quelle stammenden Frames darstellt.
    Diese Eigenschaft ist in diesem Statistik-Objekt nicht definiert, bis der erste Frame produziert wurde.
- {{domxref("RTCVideoSourceStats.width", "width")}} {{optional_inline}}
  - : Eine Zahl, die die Breite, in Pixeln, des zuletzt von dieser Quelle stammenden Frames darstellt.
    Diese Eigenschaft ist in diesem Statistik-Objekt nicht definiert, bis der erste Frame produziert wurde.

### Allgemeine Eigenschaften der Medienquelle

Die folgenden Eigenschaften sind sowohl in `RTCVideoSourceStats` als auch in {{domxref("RTCAudioSourceStats")}} vorhanden: <!-- RTCMediaSourceStats  -->

- {{domxref("RTCVideoSourceStats.trackIdentifier", "trackIdentifier")}}
  - : Ein String, der den [`id`](/de/docs/Web/API/MediaStreamTrack/id) Wert der mit der Videoquelle verbundenen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) enthält.
- {{domxref("RTCVideoSourceStats.kind", "kind")}}
  - : Ein String, der angibt, ob dieses Objekt Statistiken für eine Videoquelle oder eine Medienquelle darstellt. Bei einem `RTCVideoSourceStats` wird dies immer `video` sein.

### Allgemeine Instanz-Eigenschaften

Die folgenden Eigenschaften sind allen Statistik-Objekten gemeinsam. <!-- RTCStats -->

- {{domxref("RTCVideoSourceStats.id", "id")}}
  - : Ein String, der das Objekt, das überwacht wird, um diesen Satz von Statistiken zu erzeugen, eindeutig identifiziert.
- {{domxref("RTCVideoSourceStats.timestamp", "timestamp")}}
  - : Ein {{domxref("DOMHighResTimeStamp")}} Objekt, das den Zeitpunkt angibt, zu dem die Probe für dieses Statistik-Objekt entnommen wurde.
- {{domxref("RTCVideoSourceStats.type", "type")}}
  - : Ein String mit dem Wert `"media-source"`, der angibt, dass das Objekt eine Instanz von entweder {{domxref("RTCAudioSourceStats")}} oder `RTCVideoSourceStats` ist.

## Beschreibung

Die Schnittstelle stellt Statistiken über eine Video-Medienquelle zur Verfügung, die an einen oder mehrere Sender angeschlossen ist. Die Informationen umfassen eine Kennung für den zugehörigen `MediaStreamTrack`, zusammen mit der Höhe und Breite des letzten von der Quelle gesendeten Frames, der Anzahl der von der Quelle gesendeten Frames und der Bildrate.

## Beispiele

Dieses Beispiel zeigt, wie Sie das von `RTCRtpSender.getStats()` zurückgegebene Statistik-Objekt durchlaufen können, um die mediaquellenspezifischen Video-Statistiken zu erhalten.

```js
// wobei sender ein RTCRtpSender ist
const stats = await sender.getStats();
let videoSourceStats = null;

stats.forEach((report) => {
  if (report.type === "media-source" && report.kind==="video") {
    videoSourceStats = report;
    break;
  }
});

// videoSourceStats ist null, wenn der Bericht Videoquellenstatistiken nicht enthalten hat
const frames = videoSourceStats?.frames;
const fps = videoSourceStats?.framesPerSecond;
const width = videoSourceStats?.width;
const height = videoSourceStats?.height;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
