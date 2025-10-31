---
title: RTCVideoSourceStats
slug: Web/API/RTCVideoSourceStats
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("WebRTC")}}

Das **`RTCVideoSourceStats`** Wörterbuch der [WebRTC API](/de/docs/Web/API/WebRTC_API) liefert Statistikinformationen über eine Videospur ([`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)), die mit einem oder mehreren Sendern ([`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)) verbunden ist.

Diese Statistiken können durch Iteration über den [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) erhalten werden, der durch [`RTCRtpSender.getStats()`](/de/docs/Web/API/RTCRtpSender/getStats) oder [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) zurückgegeben wird, bis Sie einen Bericht mit dem [`type`](/de/docs/Web/API/RTCVideoSourceStats/type) von `media-source` und einem [`kind`](/de/docs/Web/API/RTCVideoSourceStats/kind) von `video` finden.

> [!NOTE]
> Für Informationen über Videospuren, die aus der Ferne bezogen werden (d.h. empfangen werden), siehe [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats).

## Instanz-Eigenschaften

- [`frames`](/de/docs/Web/API/RTCVideoSourceStats/frames) {{optional_inline}}
  - : Eine positive Zahl, die die Gesamtanzahl der von dieser Videoquelle stammenden Frames angibt.
- [`framesPerSecond`](/de/docs/Web/API/RTCVideoSourceStats/framesPerSecond) {{optional_inline}}
  - : Eine positive Zahl, die die Anzahl der in der letzten Sekunde von dieser Videoquelle stammenden Frames darstellt.
    Diese Eigenschaft ist auf diesem Statistikobjekt für die erste Sekunde seines Bestehens nicht definiert.
- [`height`](/de/docs/Web/API/RTCVideoSourceStats/height) {{optional_inline}}
  - : Eine Zahl, die die Höhe in Pixeln des letzten von dieser Quelle stammenden Frames darstellt.
    Diese Eigenschaft ist auf diesem Statistikobjekt erst definiert, nachdem der erste Frame produziert wurde.
- [`width`](/de/docs/Web/API/RTCVideoSourceStats/width) {{optional_inline}}
  - : Eine Zahl, die die Breite in Pixeln des letzten von dieser Quelle stammenden Frames darstellt.
    Diese Eigenschaft ist auf diesem Statistikobjekt erst definiert, nachdem der erste Frame produziert wurde.

### Allgemeine Eigenschaften von Medienquellen

Die folgenden Eigenschaften sind sowohl in `RTCVideoSourceStats` als auch in [`RTCAudioSourceStats`](/de/docs/Web/API/RTCAudioSourceStats) vorhanden: <!-- RTCMediaSourceStats  -->

- [`trackIdentifier`](/de/docs/Web/API/RTCVideoSourceStats/trackIdentifier)
  - : Ein String, der den [`id`](/de/docs/Web/API/MediaStreamTrack/id) Wert des [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) enthält, der mit der Videoquelle verknüpft ist.
- [`kind`](/de/docs/Web/API/RTCVideoSourceStats/kind)
  - : Ein String, der angibt, ob dieses Objekt Statistiken für eine Videoquelle oder eine Medienquelle darstellt. Für ein `RTCVideoSourceStats` ist dies immer `video`.

### Allgemeine Instanz-Eigenschaften

Die folgenden Eigenschaften sind allen Statistikobjekten gemeinsam. <!-- RTCStats -->

- [`id`](/de/docs/Web/API/RTCVideoSourceStats/id)
  - : Ein String, der das Objekt, das überwacht wird, um diese Statistiksammlung zu erzeugen, eindeutig identifiziert.
- [`timestamp`](/de/docs/Web/API/RTCVideoSourceStats/timestamp)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) Objekt, das den Zeitpunkt angibt, zu dem die Probe für dieses Statistikobjekt genommen wurde.
- [`type`](/de/docs/Web/API/RTCVideoSourceStats/type)
  - : Ein String mit dem Wert `"media-source"`, der angibt, dass das Objekt eine Instanz entweder von [`RTCAudioSourceStats`](/de/docs/Web/API/RTCAudioSourceStats) oder `RTCVideoSourceStats` ist.

## Beschreibung

Die Schnittstelle liefert Statistiken über eine Video-Medienquelle, die mit einem oder mehreren Sendern verbunden ist.
Die Informationen umfassen einen Bezeichner für das zugehörige `MediaStreamTrack`, die Höhe und Breite des letzten vom Quellgerät gesendeten Frames, die Anzahl der gesendeten Frames und die Bildrate.

## Beispiele

Dieses Beispiel zeigt, wie Sie das von `RTCRtpSender.getStats()` zurückgegebene Statistikobjekt durchlaufen können, um die videospezifischen Medienquellenstatistiken zu erhalten.

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
