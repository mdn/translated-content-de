---
title: "MediaTrackSupportedConstraints: frameRate-Eigenschaft"
short-title: frameRate
slug: Web/API/MediaTrackSupportedConstraints/frameRate
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("Media Capture and Streams")}}

Die **`frameRate`**-Eigenschaft des [`MediaTrackSupportedConstraints`](/de/docs/Web/API/MediaTrackSupportedConstraints)-Wörterbuchs ist ein schreibgeschützter Boolean-Wert, der im Objekt, das von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgegeben wird, vorhanden ist (und auf `true` gesetzt ist), wenn und nur wenn der [Benutzeragent](/de/docs/Glossary/user_agent) die [`frameRate`](/de/docs/Web/API/MediaTrackConstraints/frameRate)-Einschränkung unterstützt.

Wenn die Einschränkung nicht unterstützt wird, ist sie nicht in der Liste enthalten, daher wird dieser Wert niemals `false` sein.

Die `frameRate`-Einschränkung kann verwendet werden, um akzeptable obere und untere Grenzen für die Video-Bildrate für eine neue Videospur festzulegen oder um eine genaue Bildrate anzugeben, die bereitgestellt werden muss, damit die Anfrage erfolgreich ist. Durch Überprüfung des Wertes dieser Eigenschaft können Sie feststellen, ob der Benutzeragent das Einschränken der Videospurkonfiguration durch die Bildrate zulässt. Siehe das [Beispiel](#beispiele), um zu sehen, wie dies verwendet werden kann.

## Wert

Diese Eigenschaft ist im Wörterbuch vorhanden, wenn der Benutzeragent die `frameRate`-Einschränkung unterstützt.
Wenn die Eigenschaft nicht vorhanden ist, erlaubt der Benutzeragent nicht, Einschränkungen für die Bildrate für Videospuren festzulegen.

> [!NOTE]
> Wenn diese Eigenschaft vorhanden ist, ist ihr Wert immer `true`.

## Beispiele

Dieses einfache Beispiel prüft, ob Ihr Browser das Einschränken der Bildrate beim Anfordern von Videospuren unterstützt.

### JavaScript

```js
const result = document.getElementById("result");
const supported = navigator.mediaDevices.getSupportedConstraints().frameRate;
result.textContent = supported ? "Supported!" : "Not supported!";
```

### HTML

```html
<div id="result"></div>
```

### CSS

```css
#result {
  font:
    14px "Arial",
    sans-serif;
}
```

### Ergebnis

Die Ausgabe, die zeigt, ob Ihr Browser die `frameRate`-Einschränkung unterstützt, ist:

{{ EmbedLiveSample('Examples', 600, 80) }}

Während dieses Beispiel trivial ist, können Sie die einfache Ausgabe von "Unterstützt" vs.
"Nicht unterstützt" mit Code ersetzen, um alternative Methoden zur Bereitstellung der audiovisuellen Informationen, die Sie mit dem Benutzer teilen möchten, oder anderweitig zu arbeiten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints)
- [`MediaTrackSupportedConstraints`](/de/docs/Web/API/MediaTrackSupportedConstraints)
- [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)
