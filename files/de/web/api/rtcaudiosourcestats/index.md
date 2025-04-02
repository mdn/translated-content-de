---
title: RTCAudioSourceStats
slug: Web/API/RTCAudioSourceStats
l10n:
  sourceCommit: 848771d9efdc57ad84d643081cf91e89355c751b
---

{{APIRef("WebRTC")}}

Das **`RTCAudioSourceStats`**-Wörterbuch der [WebRTC API](/de/docs/Web/API/WebRTC_API) liefert Statistikinformationen über einen Audio-Track ([`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)), der an einen oder mehrere Sender ([`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)) angehängt ist.

Diese Statistiken können erhalten werden, indem der [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) durchlaufen wird, der von [`RTCRtpSender.getStats()`](/de/docs/Web/API/RTCRtpSender/getStats) oder [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) zurückgegeben wird, bis Sie einen Bericht mit dem [`type`](/de/docs/Web/API/RTCAudioSourceStats/type) von `media-source` und einem [`kind`](/de/docs/Web/API/RTCAudioSourceStats/kind) von `audio` finden.

> [!NOTE]
> Für Audio-Informationen über Tracks, die aus der Ferne stammen (die empfangen werden), siehe [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats).

## Instanz-Eigenschaften

- [`audioLevel`](/de/docs/Web/API/RTCAudioSourceStats/audioLevel) {{Experimental_Inline}}{{optional_inline}}
  - : Eine Zahl, die den Audiopegel der Medienquelle darstellt.
- [`totalAudioEnergy`](/de/docs/Web/API/RTCAudioSourceStats/totalAudioEnergy) {{Experimental_Inline}}{{optional_inline}}
  - : Eine Zahl, die die gesamte Audioenergie der Medienquelle über die Lebensdauer des Statistikobjekts darstellt.
- [`totalSamplesDuration`](/de/docs/Web/API/RTCAudioSourceStats/totalSamplesDuration) {{Experimental_Inline}}{{optional_inline}}
  - : Eine Zahl, die die Gesamtdauer aller von der Medienquelle erzeugten Samples über die Lebensdauer des Statistikobjekts darstellt.

### Allgemeine Eigenschaften von Medienquellen

Die folgenden Eigenschaften sind sowohl in `RTCAudioSourceStats` als auch in [`RTCVideoSourceStats`](/de/docs/Web/API/RTCVideoSourceStats) vorhanden: <!-- RTCMediaSourceStats  -->

- [`trackIdentifier`](/de/docs/Web/API/RTCAudioSourceStats/trackIdentifier)
  - : Ein String, der den [`id`](/de/docs/Web/API/MediaStreamTrack/id)-Wert des [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack), der mit der Audioquelle verbunden ist, enthält.
- [`kind`](/de/docs/Web/API/RTCAudioSourceStats/kind)
  - : Ein String, der angibt, ob dieses Objekt die Statistiken für eine Videoquelle oder eine Medienquelle darstellt. Für ein `RTCAudioSourceStats` ist dies immer `audio`.

### Allgemeine Instanz-Eigenschaften

Die folgenden Eigenschaften sind bei allen Statistikobjekten üblich. <!-- RTCStats -->

- [`id`](/de/docs/Web/API/RTCAudioSourceStats/id)
  - : Ein String, der das Objekt, das überwacht wird, um diese Statistikmenge zu erzeugen, eindeutig identifiziert.
- [`timestamp`](/de/docs/Web/API/RTCAudioSourceStats/timestamp)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Objekt, das den Zeitpunkt anzeigt, zu dem die Probe für dieses Statistikobjekt entnommen wurde.
- [`type`](/de/docs/Web/API/RTCAudioSourceStats/type)
  - : Ein String mit dem Wert `"media-source"`, der anzeigt, dass das Objekt eine Instanz von entweder `RTCAudioSourceStats` oder [`RTCVideoSourceStats`](/de/docs/Web/API/RTCVideoSourceStats) ist.

## Beschreibung

Das Interface liefert Statistiken über eine Audio-Medienquelle, die an einen oder mehrere Sender angehängt ist.
Die Informationen umfassen den aktuellen Audiopegel, gemittelt über eine kurze (implementierungsabhängige) Dauer.

Die Statistiken umfassen auch die akkumulierte Gesamtenergie und die Gesamtsample-Dauer zu einem bestimmten Zeitpunkt.
Die Gesamtsummen können verwendet werden, um den durchschnittlichen Audiopegel über die Lebensdauer des Statistikobjekts zu bestimmen.
Sie können einen quadratischen Mittelwert (RMS) im selben Maßeinheit wie `audioLevel` mit der folgenden Formel berechnen:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><msqrt><mfrac><mi>totalAudioEnergy</mi><mi>totalSamplesDuration</mi></mfrac></msqrt><annotation encoding="TeX">\sqrt{\frac{totalAudioEnergy}{totalSamplesDuration}}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

Sie können auch die akkumulierten Gesamtsummen verwenden, um den durchschnittlichen Audiopegel über einen beliebigen Zeitraum zu berechnen.

Die gesamte Audioenergie des Statistikobjekts wird akkumuliert, indem die Energie jedes Samples über die Lebensdauer des Statistikobjekts hinzugefügt wird, während die Gesamtdauer akkumuliert wird, indem die Dauer jedes Samples hinzugefügt wird.
Die Energie jedes Samples wird mit der folgenden Formel bestimmt, wobei `sample_level` der Pegel des Samples, `max_level` der höchstintensive kodierbare Wert und `duration` die Dauer des Samples in Sekunden ist:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mi>duration</mi><mo>×</mo><msup><mrow><mo>(</mo><mfrac><mi>sample_level</mi><mi>max_level</mi></mfrac><mo>)</mo></mrow><mn>2</mn></msup></mrow><annotation encoding="TeX">duration \times⁢ \left(\left(\right. \frac{sample{\_}level}{max{\_}level} \left.\right)\right)^{2}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

Der durchschnittliche Audiopegel zwischen zwei verschiedenen `getStats()`-Aufrufen über einen beliebigen Zeitraum kann mit der folgenden Gleichung berechnet werden:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><msqrt><mfrac><mrow><msub><mi>totalAudioEnergy</mi><mn>2</mn></msub><mo>-</mo><msub><mi>totalAudioEnergy</mi><mn>1</mn></msub></mrow><mrow><msub><mi>totalSamplesDuration</mi><mn>2</mn></msub><mo>-</mo><msub><mi>totalSamplesDuration</mi><mn>1</mn></msub></mrow></mfrac></msqrt><annotation encoding="TeX">\sqrt{\frac{\left(totalAudioEnergy\right)_{2} - \left(totalAudioEnergy\right)_{1}}{\left(totalSamplesDuration\right)_{2} - \left(totalSamplesDuration\right)_{1}}}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

## Beispiele

Dieses Beispiel zeigt, wie Sie das Statistikobjekt, das von `RTCRtpSender.getStats()` zurückgegeben wird, durchlaufen könnten, um die Audiquellenstatistiken zu erhalten und dann den `audioLevel` extrahieren.

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
