---
title: "MediaTrackSupportedConstraints: Eigenschaft restrictOwnAudio"
short-title: restrictOwnAudio
slug: Web/API/MediaTrackSupportedConstraints/restrictOwnAudio
l10n:
  sourceCommit: bb55d1b729e6d8fd2eea3f1f9b402f6788a6d1d9
---

{{APIRef("Media Capture and Streams")}}{{SeeCompatTable}}

Die **`restrictOwnAudio`**-Eigenschaft des [`MediaTrackSupportedConstraints`](/de/docs/Web/API/MediaTrackSupportedConstraints)-Verzeichnisses ist ein schreibgeschützter boolescher Wert, der nur dann in dem von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgegebenen Objekt vorhanden ist (und auf `true` gesetzt wird), wenn der {{Glossary("user_agent", "User Agent")}} die `restrictOwnAudio`-Einschränkung unterstützt. Wenn die Einschränkung nicht unterstützt wird, ist sie nicht in der Liste enthalten, daher wird dieser Wert niemals `false` sein.

Sie können auf das Verzeichnis der unterstützten Einschränkungen zugreifen, indem Sie [`navigator.mediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) aufrufen.

## Wert

Diese Eigenschaft ist im Verzeichnis vorhanden (und ihr Wert ist immer `true`), wenn der User Agent die `restrictOwnAudio`-Einschränkung unterstützt. Wenn die Eigenschaft nicht vorhanden ist, fehlt diese Eigenschaft im Verzeichnis der unterstützten Einschränkungen, und Sie erhalten {{jsxref("undefined")}}, wenn Sie versuchen, auf ihren Wert zuzugreifen.

## Beispiele

```html hidden
<div id="result"></div>
```

```css hidden
#result {
  font:
    14px "Arial",
    sans-serif;
}
```

```js
const result = document.getElementById("result");
const supported =
  navigator.mediaDevices.getSupportedConstraints().restrictOwnAudio;
result.textContent = supported ? "Supported!" : "Not supported!";
```

### Ergebnis

{{EmbedLiveSample('Examples', 600, 80)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints)
- [`MediaTrackSupportedConstraints`](/de/docs/Web/API/MediaTrackSupportedConstraints)
- [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)
