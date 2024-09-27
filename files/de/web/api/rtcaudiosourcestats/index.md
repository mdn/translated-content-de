---
title: RTCAudioSourceStats
slug: Web/API/RTCAudioSourceStats
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("WebRTC")}}

Das **`RTCAudioSourceStats`** Wörterbuch der [WebRTC API](/de/docs/Web/API/WebRTC_API) stellt Statistikinformationen über eine Audiospur ([`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)) bereit, die an einen oder mehrere Sender ([`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)) angebunden ist.

Diese Statistiken können durch Iterieren des [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) abgerufen werden, das von [`RTCRtpSender.getStats()`](/de/docs/Web/API/RTCRtpSender/getStats) oder [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) zurückgegeben wird, bis Sie einen Bericht mit dem [`type`](#type) `media-source` und einem [`kind`](#kind) `audio` finden.

> [!NOTE]
> Für Audioinformationen über remote bezogene Tracks (die empfangen werden), siehe [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats).

## Instanz-Eigenschaften

- [`audioLevel`](/de/docs/Web/API/RTCAudioSourceStats/audioLevel) {{Experimental_Inline}}{{optional_inline}}
  - : Eine Zahl, die das Audiolevel der Medienquelle darstellt.
- [`totalAudioEnergy`](/de/docs/Web/API/RTCAudioSourceStats/totalAudioEnergy) {{Experimental_Inline}}{{optional_inline}}
  - : Eine Zahl, die die gesamte Audioenergie der Medienquelle über die Lebensdauer des Statistikobjekts darstellt.
- [`totalSamplesDuration`](/de/docs/Web/API/RTCAudioSourceStats/totalSamplesDuration) {{Experimental_Inline}}{{optional_inline}}
  - : Eine Zahl, die die Gesamtdauer aller von der Medienquelle über die Lebensdauer des Statistikobjekts erzeugten Proben darstellt.

### Gemeinsame Eigenschaften von Medienquellen

Die folgenden Eigenschaften sind sowohl in `RTCAudioSourceStats` als auch [`RTCVideoSourceStats`](/de/docs/Web/API/RTCVideoSourceStats) vorhanden: <!-- RTCMediaSourceStats  -->

- [`trackIdentifier`](/de/docs/Web/API/RTCAudioSourceStats/trackIdentifier)
  - : Ein String, der den [`id`](/de/docs/Web/API/MediaStreamTrack/id)-Wert des [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) enthält, der mit der Audioquelle verbunden ist.
- [`kind`](/de/docs/Web/API/RTCAudioSourceStats/kind)
  - : Ein String, der angibt, ob dieses Objekt Statistiken für eine Videoquelle oder eine Medienquelle darstellt. Für `RTCAudioSourceStats` wird dies immer `audio` sein.

### Gemeinsame Instanz-Eigenschaften

Die folgenden Eigenschaften sind allen Statistikobjekten gemeinsam. <!-- RTCStats -->

- [`id`](/de/docs/Web/API/RTCAudioSourceStats/id)
  - : Ein String, der das Objekt, das überwacht wird, um diese Statistikmenge zu erzeugen, eindeutig identifiziert.
- [`timestamp`](/de/docs/Web/API/RTCAudioSourceStats/timestamp)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Objekt, das den Zeitpunkt angibt, zu dem die Probe für dieses Statistikobjekt entnommen wurde.
- [`type`](/de/docs/Web/API/RTCAudioSourceStats/type)
  - : Ein String mit dem Wert `"media-source"`, der angibt, dass das Objekt eine Instanz entweder von `RTCAudioSourceStats` oder [`RTCVideoSourceStats`](/de/docs/Web/API/RTCVideoSourceStats) ist.

## Beschreibung

Das Interface bietet Statistiken über eine Audio-Medienquelle, die an einen oder mehrere Sender angebunden ist. Die Informationen umfassen das aktuelle Audiolevel, gemittelt über eine kurze (Implementierungsabhängige) Dauer.

Die Statistiken beinhalten auch die kumulierte Gesamtenergie und Gesamtprobendauer zu einem bestimmten Zeitpunkt. Die Gesamtsummen können verwendet werden, um das durchschnittliche Audiolevel über die Lebensdauer des Statistikobjekts zu bestimmen. Sie können einen quadratischen Mittelwert (RMS) im gleichen Einheitenbereich wie `audioLevel` mit der folgenden Formel berechnen:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><msqrt><mfrac><mi>totalAudioEnergy</mi><mi>totalSamplesDuration</mi></mfrac></msqrt><annotation encoding="TeX">\sqrt{\frac{totalAudioEnergy}{totalSamplesDuration}}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

Sie können auch die kumulierten Gesamtsummen verwenden, um das durchschnittliche Audiolevel über einen beliebigen Zeitrahmen zu berechnen.

Die gesamte Audioenergie des Statistikobjekts wird akkumuliert, indem die Energie jedes Samples über die Lebensdauer des Statistikobjekts hinzugefügt wird, während die Gesamtdauer durch Addition der Dauer jedes Samples akkumuliert wird. Die Energie jedes Samples wird mit der folgenden Formel bestimmt, wobei `sample_level` das Level des Samples, `max_level` der höchstintensive kodierbare Wert, und `duration` die Dauer des Samples in Sekunden ist:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mi>duration</mi><mo>×</mo><msup><mrow><mo>(</mo><mfrac><mi>sample_level</mi><mi>max_level</mi></mfrac><mo>)</mo></mrow><mn>2</mn></msup></mrow><annotation encoding="TeX">duration \times⁢ \left(\left(\right. \frac{sample{\_}level}{max{\_}level} \left.\right)\right)^{2}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

Der durchschnittliche Audiolevel zwischen zwei verschiedenen `getStats()`-Aufrufen, über eine beliebige Dauer, kann mit der folgenden Gleichung berechnet werden:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><msqrt><mfrac><mrow><msub><mi>totalAudioEnergy</mi><mn>2</mn></msub><mo>-</mo><msub><mi>totalAudioEnergy</mi><mn>1</mn></msub></mrow><mrow><msub><mi>totalSamplesDuration</mi><mn>2</mn></msub><mo>-</mo><msub><mi>totalSamplesDuration</mi><mn>1</mn></msub></mrow></mfrac></msqrt><annotation encoding="TeX">\sqrt{\frac{\left(totalAudioEnergy\right)_{2} - \left(totalAudioEnergy\right)_{1}}{\left(totalSamplesDuration\right)_{2} - \left(totalSamplesDuration\right)_{1}}}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

## Beispiele

Dieses Beispiel zeigt, wie Sie das Statistikobjekt, das von `RTCRtpSender.getStats()` zurückgegeben wird, durchlaufen, um die Audioquellenstatistiken zu erhalten und dann das `audioLevel` extrahieren.

```js
// where sender is an RTCRtpSender
const stats = await sender.getStats();
let audioSourceStats = null;

stats.forEach((report) => {
  if (report.type === "media-source" && report.kind==="audio") {
    audioSourceStats = report;
    break;
  }
});

const audioLevel = audioSourceStats?.audioLevel;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
