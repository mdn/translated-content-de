---
title: RTCVideoSourceStats
slug: Web/API/RTCVideoSourceStats
l10n:
  sourceCommit: 848771d9efdc57ad84d643081cf91e89355c751b
---

{{APIRef("WebRTC")}}

Das **`RTCVideoSourceStats`**-Wörterbuch der [WebRTC-API](/de/docs/Web/API/WebRTC_API) bietet statistische Informationen über eine Videospur ([`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)), die an einen oder mehrere Sender ([`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)) angehängt ist.

Diese Statistiken können durch Iteration über den [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) erhalten werden, der von [`RTCRtpSender.getStats()`](/de/docs/Web/API/RTCRtpSender/getStats) oder [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) zurückgegeben wird, bis Sie einen Bericht mit dem [`type`](/de/docs/Web/API/RTCVideoSourceStats/type) `media-source` und einem [`kind`](/de/docs/Web/API/RTCVideoSourceStats/kind) `video` finden.

> [!NOTE]
> Für Videoinformationen über remote bezogene Spuren (die empfangen werden), siehe [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats).

## Instanzvariablen

- [`frames`](/de/docs/Web/API/RTCVideoSourceStats/frames) {{optional_inline}}
  - : Eine positive Zahl, die die Gesamtzahl der Frames angibt, die von dieser Videoquelle stammen.
- [`framesPerSecond`](/de/docs/Web/API/RTCVideoSourceStats/framesPerSecond) {{optional_inline}}
  - : Eine positive Zahl, die die Anzahl der Frames angibt, die in der letzten Sekunde von dieser Videoquelle stammen.
    Diese Eigenschaft ist in diesem Statistikobjekt während der ersten Sekunde seiner Existenz nicht definiert.
- [`height`](/de/docs/Web/API/RTCVideoSourceStats/height) {{optional_inline}}
  - : Eine Zahl, die die Höhe, in Pixel, des letzten Frames angibt, der von dieser Quelle stammt.
    Diese Eigenschaft ist in diesem Statistikobjekt erst nach der Erzeugung des ersten Frames definiert.
- [`width`](/de/docs/Web/API/RTCVideoSourceStats/width) {{optional_inline}}
  - : Eine Zahl, die die Breite, in Pixel, des aktuellsten Frames angibt, der von dieser Quelle stammt.
    Diese Eigenschaft ist in diesem Statistikobjekt erst nach der Erzeugung des ersten Frames definiert.

### Gemeinsame Eigenschaften der Medienquelle

Die folgenden Eigenschaften sind sowohl in `RTCVideoSourceStats` als auch in [`RTCAudioSourceStats`](/de/docs/Web/API/RTCAudioSourceStats) vorhanden: <!-- RTCMediaSourceStats  -->

- [`trackIdentifier`](/de/docs/Web/API/RTCVideoSourceStats/trackIdentifier)
  - : Ein String, der den [`id`](/de/docs/Web/API/MediaStreamTrack/id) Wert des mit der Videoquelle verbundenen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) enthält.
- [`kind`](/de/docs/Web/API/RTCVideoSourceStats/kind)
  - : Ein String, der angibt, ob dieses Objekt Statistiken für eine Videoquelle oder eine Medienquelle repräsentiert. Für ein `RTCVideoSourceStats` ist dies immer `video`.

### Gemeinsame Instanzvariablen

Die folgenden Eigenschaften sind für alle Statistikobjekte gemeinsam. <!-- RTCStats -->

- [`id`](/de/docs/Web/API/RTCVideoSourceStats/id)
  - : Ein String, der das Objekt, das überwacht wird, um diesen Satz von Statistiken zu erzeugen, eindeutig identifiziert.
- [`timestamp`](/de/docs/Web/API/RTCVideoSourceStats/timestamp)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Objekt, das den Zeitpunkt angibt, zu dem die Probe für dieses Statistikobjekt entnommen wurde.
- [`type`](/de/docs/Web/API/RTCVideoSourceStats/type)
  - : Ein String mit dem Wert `"media-source"`, der angibt, dass es sich bei dem Objekt entweder um eine Instanz von [`RTCAudioSourceStats`](/de/docs/Web/API/RTCAudioSourceStats) oder `RTCVideoSourceStats` handelt.

## Beschreibung

Die Schnittstelle liefert Statistiken über eine Videomedienquelle, die an einen oder mehrere Sender angeschlossen ist.
Die Informationen umfassen eine Kennung für das zugehörige `MediaStreamTrack`, zusammen mit der Höhe und Breite des letzten von der Quelle gesendeten Frames, der Anzahl der von der Quelle gesendeten Frames und der Bildrate.

## Beispiele

Dieses Beispiel zeigt, wie Sie das Stats-Objekt, das von `RTCRtpSender.getStats()` zurückgegeben wird, iterieren könnten, um die medienquellenspezifischen Videostatistiken zu erhalten.

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
