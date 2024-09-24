---
title: RTCAudioSourceStats
slug: Web/API/RTCAudioSourceStats
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("WebRTC")}}

Das **`RTCAudioSourceStats`**-Wörterbuch der [WebRTC-API](/de/docs/Web/API/WebRTC_API) bietet Statistikinformationen zu einem Audiotrack ({{domxref("MediaStreamTrack")}}), der an einen oder mehrere Sender ({{domxref("RTCRtpSender")}}) angeschlossen ist.

Diese Statistiken können durch Iteration des {{domxref("RTCStatsReport")}}, das von {{domxref("RTCRtpSender.getStats()")}} oder {{domxref("RTCPeerConnection.getStats()")}} zurückgegeben wird, abgerufen werden, bis Sie einen Bericht mit dem [`type`](#type) `media-source` und einem [`kind`](#kind) `audio` finden.

> [!NOTE]
> Für Audioinformationen über entfernt bezogene Tracks (die empfangen werden), siehe {{domxref("RTCInboundRtpStreamStats")}}.

## Instanzeigenschaften

- {{domxref("RTCAudioSourceStats.audioLevel", "audioLevel")}} {{Experimental_Inline}}{{optional_inline}}
  - : Eine Zahl, die den Audiopegel der Medienquelle darstellt.
- {{domxref("RTCAudioSourceStats.totalAudioEnergy", "totalAudioEnergy")}} {{Experimental_Inline}}{{optional_inline}}
  - : Eine Zahl, die die gesamte Audioenergie der Medienquelle über die Lebensdauer des Statistikobjekts darstellt.
- {{domxref("RTCAudioSourceStats.totalSamplesDuration", "totalSamplesDuration")}} {{Experimental_Inline}}{{optional_inline}}
  - : Eine Zahl, die die Gesamtdauer aller von der Medienquelle erzeugten Samples über die Lebensdauer des Statistikobjekts darstellt.

### Allgemeine Eigenschaften von Medienquellen

Die folgenden Eigenschaften sind sowohl in `RTCAudioSourceStats` als auch in {{domxref("RTCVideoSourceStats")}} vorhanden:

- {{domxref("RTCAudioSourceStats.trackIdentifier", "trackIdentifier")}}
  - : Ein String, der den [`id`](/de/docs/Web/API/MediaStreamTrack/id)-Wert des mit der Audioquelle verknüpften [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) enthält.
- {{domxref("RTCAudioSourceStats.kind", "kind")}}
  - : Ein String, der angibt, ob dieses Objekt Statistiken für eine Videoquelle oder eine Medienquelle darstellt. Für ein `RTCAudioSourceStats` wird dies immer `audio` sein.

### Gemeinsame Instanzeigenschaften

Die folgenden Eigenschaften sind allen Statistikobjekten gemeinsam.

- {{domxref("RTCAudioSourceStats.id", "id")}}
  - : Ein String, der das Objekt, das überwacht wird, eindeutig identifiziert, um diesen Satz von Statistiken zu erzeugen.
- {{domxref("RTCAudioSourceStats.timestamp", "timestamp")}}
  - : Ein {{domxref("DOMHighResTimeStamp")}}-Objekt, das die Zeit angibt, zu der die Probe für dieses Statistikobjekt entnommen wurde.
- {{domxref("RTCAudioSourceStats.type", "type")}}
  - : Ein String mit dem Wert `"media-source"`, der angibt, dass das Objekt eine Instanz von entweder `RTCAudioSourceStats` oder {{domxref("RTCVideoSourceStats")}} ist.

## Beschreibung

Die Schnittstelle bietet Statistiken über eine an einen oder mehrere Sender angeschlossene Audiomedienquelle.
Die Informationen umfassen den aktuellen Audiopegel, gemittelt über eine kurze (implementierungsabhängige) Dauer.

Die Statistiken umfassen auch die akkumulierte Gesamtenergie und Gesamtdauer der Samples zu einem bestimmten Zeitpunkt.
Die Summen können verwendet werden, um den durchschnittlichen Audiopegel über die Lebensdauer des Statistikobjekts zu bestimmen.
Sie können einen quadratischen Mittelwert (RMS) im gleichen Maßeinheit wie `audioLevel` mit der folgenden Formel berechnen:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><msqrt><mfrac><mi>totalAudioEnergy</mi><mi>totalSamplesDuration</mi></mfrac></msqrt><annotation encoding="TeX">\sqrt{\frac{totalAudioEnergy}{totalSamplesDuration}}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

Sie können die akkumulierten Summen auch verwenden, um den durchschnittlichen Audiopegel über einen beliebigen Zeitraum zu berechnen.

Die Gesamtenergie des Statistikobjekts wird durch Hinzufügen der Energie jedes Samples über die Lebensdauer des Statistikobjekts akkumuliert, während die Gesamtdauer durch Hinzufügen der Dauer jedes Samples akkumuliert wird.
Die Energie jedes Samples wird mit der folgenden Formel bestimmt, wobei `sample_level` der Pegel des Samples, `max_level` der höchstintensive kodierbare Wert und `duration` die Dauer des Samples in Sekunden ist:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mi>duration</mi><mo>×</mo><msup><mrow><mo>(</mo><mfrac><mi>sample_level</mi><mi>max_level</mi></mfrac><mo>)</mo></mrow><mn>2</mn></msup></mrow><annotation encoding="TeX">duration \times⁢ \left(\left(\right. \frac{sample{\_}level}{max{\_}level} \left.\right)\right)^{2}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

Der durchschnittliche Audiopegel zwischen zwei verschiedenen `getStats()`-Aufrufen, über jede Dauer, kann mit der folgenden Gleichung berechnet werden:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><msqrt><mfrac><mrow><msub><mi>totalAudioEnergy</mi><mn>2</mn></msub><mo>-</mo><msub><mi>totalAudioEnergy</mi><mn>1</mn></msub></mrow><mrow><msub><mi>totalSamplesDuration</mi><mn>2</mn></msub><mo>-</mo><msub><mi>totalSamplesDuration</mi><mn>1</mn></msub></mrow></mfrac></msqrt><annotation encoding="TeX">\sqrt{\frac{\left(totalAudioEnergy\right)_{2} - \left(totalAudioEnergy\right)_{1}}{\left(totalSamplesDuration\right)_{2} - \left(totalSamplesDuration\right)_{1}}}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

## Beispiele

Dieses Beispiel zeigt, wie Sie das Statistikobjekt durchlaufen, das von `RTCRtpSender.getStats()` zurückgegeben wird, um die Audioquellen-Statistiken zu erhalten und dann den `audioLevel` extrahieren.

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

## Browserkompatibilität

{{Compat}}
