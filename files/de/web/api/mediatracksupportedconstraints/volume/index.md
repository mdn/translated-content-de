---
title: "MediaTrackSupportedConstraints: volume-Eigenschaft"
short-title: volume
slug: Web/API/MediaTrackSupportedConstraints/volume
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die **`volume`**-Eigenschaft des [`MediaTrackSupportedConstraints`](/de/docs/Web/API/MediaTrackSupportedConstraints)-Wörterbuchs ist ein schreibgeschützter boolescher Wert, der im Objekt enthalten ist (und auf `true` gesetzt ist), das von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgegeben wird, wenn und nur wenn der {{Glossary("user_agent", "User-Agent")}} die `volume`-Beschränkung unterstützt. Wenn die Beschränkung nicht unterstützt wird, ist sie nicht in der Liste enthalten, sodass dieser Wert niemals `false` sein wird.

Sie können auf das Wörterbuch der unterstützten Einschränkungen zugreifen, indem Sie `navigator.mediaDevices.getSupportedConstraints()` aufrufen.

## Wert

Diese Eigenschaft ist im Wörterbuch vorhanden (und ihr Wert ist immer `true`), wenn der User-Agent die `volume`-Beschränkung unterstützt. Ist die Eigenschaft nicht vorhanden, fehlt diese Eigenschaft im Wörterbuch der unterstützten Einschränkungen und Sie erhalten {{jsxref("undefined")}}, wenn Sie versuchen, ihren Wert abzurufen.

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
const supported = navigator.mediaDevices.getSupportedConstraints().volume;
result.textContent = supported ? "Supported!" : "Not supported!";
```

### Ergebnis

{{EmbedLiveSample('Examples', 600, 80)}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints)
- [`MediaTrackSupportedConstraints`](/de/docs/Web/API/MediaTrackSupportedConstraints)
- [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)
