---
title: "MediaTrackSupportedConstraints: height-Eigenschaft"
short-title: height
slug: Web/API/MediaTrackSupportedConstraints/height
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}

Das **`height`**-Attribut des {{domxref("MediaTrackSupportedConstraints")}}-Wörterbuchs ist ein schreibgeschützter boolescher Wert, der im Objekt, das von {{domxref("MediaDevices.getSupportedConstraints()")}} zurückgegeben wird, vorhanden ist (und auf `true` gesetzt), wenn und nur wenn der {{Glossary("user agent")}} die `height`-Beschränkung unterstützt. Wenn die Beschränkung nicht unterstützt wird, wird sie nicht in die Liste aufgenommen, sodass dieser Wert niemals `false` sein wird.

Sie können das Wörterbuch der unterstützten Beschränkungen abrufen, indem Sie `navigator.mediaDevices.getSupportedConstraints()` aufrufen.

## Wert

Diese Eigenschaft ist im Wörterbuch vorhanden (und ihr Wert ist immer `true`), wenn der User-Agent die `height`-Beschränkung unterstützt. Wenn die Eigenschaft nicht vorhanden ist, fehlt diese Eigenschaft im Wörterbuch der unterstützten Beschränkungen, und Sie erhalten {{jsxref("undefined")}}, wenn Sie versuchen, ihren Wert abzurufen.

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
const supported = navigator.mediaDevices.getSupportedConstraints().height;
result.textContent = supported ? "Supported!" : "Not supported!";
```

### Ergebnis

{{ EmbedLiveSample('Examples', 600, 80) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- {{domxref("MediaDevices.getSupportedConstraints()")}}
- {{domxref("MediaTrackSupportedConstraints")}}
- {{domxref("MediaStreamTrack")}}
