---
title: "MediaTrackSupportedConstraints: latency-Eigenschaft"
short-title: latency
slug: Web/API/MediaTrackSupportedConstraints/latency
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}

Das **`latency`**-Attribut des [`MediaTrackSupportedConstraints`](/de/docs/Web/API/MediaTrackSupportedConstraints)-Wörterbuchs ist ein schreibgeschützter Boolescher Wert, der in dem von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgegebenen Objekt enthalten ist (und auf `true` gesetzt wird), wenn und nur wenn der [Benutzeragent](/de/docs/Glossary/user_agent) die `latency`-Einschränkung unterstützt. Wenn die Einschränkung nicht unterstützt wird, ist sie nicht in der Liste enthalten, daher wird dieser Wert niemals `false` sein.

Sie können auf das Wörterbuch der unterstützten Einschränkungen zugreifen, indem Sie `navigator.mediaDevices.getSupportedConstraints()` aufrufen.

## Wert

Dieses Eigenschaft befindet sich im Wörterbuch (und ihr Wert ist immer `true`), wenn der Benutzeragent die `latency`-Einschränkung unterstützt. Wenn die Eigenschaft nicht vorhanden ist, fehlt diese Eigenschaft im Wörterbuch der unterstützten Einschränkungen, und Sie erhalten {{jsxref("undefined")}}, wenn Sie versuchen, ihren Wert zu betrachten.

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
const supported = navigator.mediaDevices.getSupportedConstraints().latency;
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
