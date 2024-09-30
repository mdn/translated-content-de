---
title: "MediaTrackSupportedConstraints: sampleRate-Eigenschaft"
short-title: sampleRate
slug: Web/API/MediaTrackSupportedConstraints/sampleRate
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}

Das **`sampleRate`**-Eigentum des [`MediaTrackSupportedConstraints`](/de/docs/Web/API/MediaTrackSupportedConstraints)-Wörterbuchs ist ein schreibgeschützter boolescher Wert, der in dem Objekt, das von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgegeben wird, vorhanden ist (und auf `true` gesetzt ist), wenn und nur wenn der [User-Agent](/de/docs/Glossary/user_agent) die `sampleRate`-Einschränkung unterstützt. Wenn die Einschränkung nicht unterstützt wird, ist sie nicht in der Liste enthalten, sodass dieser Wert niemals `false` sein wird.

Sie können auf das unterstützte Einschränkungswörterbuch zugreifen, indem Sie `navigator.mediaDevices.getSupportedConstraints()` aufrufen.

## Wert

Diese Eigenschaft ist im Wörterbuch vorhanden (und ihr Wert ist immer `true`), wenn der User-Agent die `sampleRate`-Einschränkung unterstützt. Wenn die Eigenschaft nicht vorhanden ist, fehlt diese Eigenschaft im unterstützten Einschränkungswörterbuch, und Sie erhalten {{jsxref("undefined")}}, wenn Sie versuchen, ihren Wert zu betrachten.

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
const supported = navigator.mediaDevices.getSupportedConstraints().sampleRate;
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
- [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints)
- [`MediaTrackSupportedConstraints`](/de/docs/Web/API/MediaTrackSupportedConstraints)
- [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)
