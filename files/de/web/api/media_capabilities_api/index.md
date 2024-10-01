---
title: Media Capabilities API
slug: Web/API/Media_Capabilities_API
l10n:
  sourceCommit: 7b565c5f4610bea19c844f35532853624d87cde3
---

{{DefaultAPISidebar("Media Capabilities API")}}

Die **Media Capabilities API** ermöglicht es Entwicklern, die Dekodierungs- und Kodierungsfähigkeiten des Geräts zu bestimmen und Informationen darüber bereitzustellen, ob Medien unterstützt werden und ob die Wiedergabe flüssig und energieeffizient sein sollte. Sie bietet Echtzeit-Feedback zur Wiedergabe, um adaptives Streaming besser zu ermöglichen, und Zugriff auf Informationen zu Anzeigeeigenschaften.

## Konzepte

Es gibt eine Vielzahl von Video- und Audiocodecs. Unterschiedliche Browser unterstützen unterschiedliche Medientypen, und es werden ständig neue Medientypen entwickelt. Mit der Media Capabilities API können Entwickler sicherstellen, dass jeder Nutzer die optimale Bitrate und Speicherplatzeinsparungen für die Browser-, Geräte- und Betriebssystemfähigkeiten erhält.

Ob ein Gerät Hardware- oder Software-Dekodierung verwendet, wirkt sich darauf aus, wie flüssig und energieeffizient das Video dekodiert wird und wie effizient die Wiedergabe ist. Die Media Capabilities API ermöglicht es, zu bestimmen, welche Codecs unterstützt werden und wie leistungsfähig eine Mediendatei sowohl in Bezug auf Flüssigkeit als auch Energieeffizienz sein wird.

Die Media Capabilities API bietet leistungsstärkere Funktionen als beispielsweise [`MediaRecorder.isTypeSupported()`](/de/docs/Web/API/MediaRecorder/isTypeSupported_static) oder [`HTMLMediaElement.canPlayType()`](/de/docs/Web/API/HTMLMediaElement/canPlayType), die sich lediglich mit der allgemeinen Browserunterstützung und nicht mit der Leistung befassen. Die API bietet zudem die Möglichkeit, auf Informationen zu Anzeigeeigenschaften wie unterstützter Farb{{Glossary("gamut", "gamut")}}, Dynamikbereichsfähigkeiten und Echtzeit-Feedback zur Wiedergabe zuzugreifen.

Um Unterstützung, Flüssigkeit und Energieeffizienz bei der Kodierung und Dekodierung von Video- oder Audioinhalten zu testen, verwenden Sie die Methoden [`encodingInfo()`](/de/docs/Web/API/MediaCapabilities/encodingInfo) und [`decodingInfo()`](/de/docs/Web/API/MediaCapabilities/decodingInfo) der [`MediaCapabilities`](/de/docs/Web/API/MediaCapabilities) Schnittstelle.

Informationen über Medienfähigkeiten ermöglichen es Websites, adaptives Streaming zu aktivieren, um die Qualität von Inhalten basierend auf der tatsächlich vom Nutzer wahrgenommenen Qualität zu ändern und auf eine Erhöhung der CPU/GPU-Auslastung in Echtzeit zu reagieren.

## Schnittstellen

- [`MediaCapabilities`](/de/docs/Web/API/MediaCapabilities)
  - : Bietet Informationen über die Dekodierungsfähigkeiten des Geräts, des Systems und des Browsers basierend auf Codec, Profil, Auflösung und Bitraten. Diese Informationen können genutzt werden, um dem Nutzer optimale Medienströme bereitzustellen und zu bestimmen, ob die Wiedergabe flüssig und energieeffizient sein sollte.

### Erweiterungen zu anderen Schnittstellen

- [`Navigator.mediaCapabilities`](/de/docs/Web/API/Navigator/mediaCapabilities) {{readonlyinline}}
  - : Ein [`MediaCapabilities`](/de/docs/Web/API/MediaCapabilities) Objekt, das Informationen über die Dekodier- und Kodierfähigkeiten für ein bestimmtes Medienformat und Ausgabe-Fähigkeiten bereitstellen kann.
- [`WorkerNavigator.mediaCapabilities`](/de/docs/Web/API/WorkerNavigator/mediaCapabilities) {{readonlyinline}}
  - : Ein [`MediaCapabilities`](/de/docs/Web/API/MediaCapabilities) Objekt, das Informationen über die Dekodier- und Kodierfähigkeiten für ein bestimmtes Medienformat und Ausgabe-Fähigkeiten bereitstellen kann.

## Beispiele

### Unterstützung von Audiodateien und erwartete Leistung erkennen

Dieses Beispiel definiert eine Audiokonfiguration und überprüft dann, ob der Benutzeragent das Dekodieren dieser Medienkonfiguration unterstützt und ob sie in Bezug auf Flüssigkeit und Energieeffizienz gut funktionieren wird.

```js
if ("mediaCapabilities" in navigator) {
  const audioFileConfiguration = {
    type: "file",
    audio: {
      contentType: "audio/mp3",
      channels: 2,
      bitrate: 132700,
      samplerate: 5200,
    },
  };

  navigator.mediaCapabilities
    .decodingInfo(audioFileConfiguration)
    .then((result) => {
      console.log(
        `This configuration is ${result.supported ? "" : "not "}supported,`,
      );
      console.log(`${result.smooth ? "" : "not "}smooth, and`);
      console.log(`${result.powerEfficient ? "" : "not "}power efficient.`);
    })
    .catch(() => {
      console.log(`decodingInfo error: ${contentType}`);
    });
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Methode [canPlayType()](/de/docs/Web/API/HTMLMediaElement/canPlayType) von [HTMLMediaElement](/de/docs/Web/API/HTMLMediaElement)
- Methode [isTypeSupported()](/de/docs/Web/API/MediaSource/isTypeSupported_static) von [MediaSource](/de/docs/Web/API/MediaSource)
- [Anleitung zur Verwendung der Media Capabilities API](/de/docs/Web/API/Media_Capabilities_API/Using_the_Media_Capabilities_API)
