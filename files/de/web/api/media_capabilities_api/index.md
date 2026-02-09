---
title: Media Capabilities API
slug: Web/API/Media_Capabilities_API
l10n:
  sourceCommit: 962e1a50a206497b6fa012db88cf7c192136bc70
---

{{DefaultAPISidebar("Media Capabilities API")}}{{AvailableInWorkers}}

Die **Media Capabilities API** ermöglicht es Entwicklern, die Dekodierungs- und Kodierungsfähigkeiten eines Geräts zu bestimmen. Sie gibt Informationen darüber, ob Medien unterstützt werden und ob die Wiedergabe flüssig und energieeffizient sein sollte.

## Konzepte

Es gibt eine Vielzahl von Video- und Audio-Codecs. Verschiedene Browser unterstützen unterschiedliche Medientypen, und es werden ständig neue Medientypen entwickelt. Mit der Media Capabilities API können Entwickler sicherstellen, dass jeder Benutzer die beste Bitrate und Speicherplatzeinsparung für seinen Browser, sein Gerät und seine Betriebssystemfähigkeiten erhält.

Ob ein Gerät Hardware- oder Software-Dekodierung verwendet, beeinflusst, wie flüssig und energieeffizient die Videodekodierung ist und wie effizient die Wiedergabe sein wird. Die Media Capabilities API ermöglicht es Entwicklern festzustellen, welche Codecs unterstützt werden und wie leistungsfähig eine Mediendatei sowohl in Bezug auf Flüssigkeit als auch Energieeffizienz sein wird.

Die Media Capabilities API bietet leistungsfähigere Funktionen als andere APIs wie [`MediaRecorder.isTypeSupported()`](/de/docs/Web/API/MediaRecorder/isTypeSupported_static) oder [`HTMLMediaElement.canPlayType()`](/de/docs/Web/API/HTMLMediaElement/canPlayType), die nur die allgemeine Unterstützung durch den Browser adressieren, nicht aber die Leistung.

Um Unterstützung, Flüssigkeit und Energieeffizienz für das Kodieren und Dekodieren von Video- oder Audioinhalten zu testen, verwenden Sie die Methoden [`encodingInfo()`](/de/docs/Web/API/MediaCapabilities/encodingInfo) und [`decodingInfo()`](/de/docs/Web/API/MediaCapabilities/decodingInfo) der Schnittstelle [`MediaCapabilities`](/de/docs/Web/API/MediaCapabilities).

## Schnittstellen

- [`MediaCapabilities`](/de/docs/Web/API/MediaCapabilities)
  - : Bietet Informationen über die Dekodierungsfähigkeiten des Geräts, des Systems und des Browsers basierend auf Codecs, Profil, Auflösung und Bitraten. Die Informationen können verwendet werden, um dem Benutzer optimale Medienstreams bereitzustellen und zu bestimmen, ob die Wiedergabe flüssig und energieeffizient sein sollte.

### Erweiterungen zu anderen Schnittstellen

- [`Navigator.mediaCapabilities`](/de/docs/Web/API/Navigator/mediaCapabilities) {{readonlyinline}}
  - : Ein [`MediaCapabilities`](/de/docs/Web/API/MediaCapabilities)-Objekt, das Informationen über die Dekodierungs- und Kodierungsfähigkeiten für ein gegebenes Medienformat und Ausgangsfähigkeiten bereitstellen kann.
- [`WorkerNavigator.mediaCapabilities`](/de/docs/Web/API/WorkerNavigator/mediaCapabilities) {{readonlyinline}}
  - : Ein [`MediaCapabilities`](/de/docs/Web/API/MediaCapabilities)-Objekt, das Informationen über die Dekodierungs- und Kodierungsfähigkeiten für ein gegebenes Medienformat und Ausgangsfähigkeiten bereitstellen kann.

## Beispiele

### Unterstützung und erwartete Leistung für Audiodateien erkennen

Dieses Beispiel definiert eine Audiokonfiguration und prüft dann, ob der Benutzeragent die Dekodierung dieser Medienkonfiguration unterstützt und ob sie in Bezug auf Flüssigkeit und Energieeffizienz gut performen wird.

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

- Die Methode [canPlayType()](/de/docs/Web/API/HTMLMediaElement/canPlayType) von [HTMLMediaElement](/de/docs/Web/API/HTMLMediaElement)
- Die Methode [isTypeSupported()](/de/docs/Web/API/MediaSource/isTypeSupported_static) von [MediaSource](/de/docs/Web/API/MediaSource)
- [Verwendung der Media Capabilities API](/de/docs/Web/API/Media_Capabilities_API/Using_the_Media_Capabilities_API)
