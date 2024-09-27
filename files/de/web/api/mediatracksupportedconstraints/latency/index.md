---
title: "MediaTrackSupportedConstraints: Latency-Eigenschaft"
short-title: latency
slug: Web/API/MediaTrackSupportedConstraints/latency
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}

Die **`latency`**-Eigenschaft des Dictionaries [`MediaTrackSupportedConstraints`](/de/docs/Web/API/MediaTrackSupportedConstraints) ist ein schreibgeschützter Boolean-Wert, der in dem von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgegebenen Objekt vorhanden ist (und auf `true` gesetzt), wenn und nur wenn der [user agent](/de/docs/Glossary/user_agent) die `latency`-Einschränkung unterstützt. Wenn die Einschränkung nicht unterstützt wird, ist sie nicht in der Liste enthalten, daher wird dieser Wert niemals `false` sein.

Sie können auf das unterstützte Einschränkungen-Dictionary zugreifen, indem Sie `navigator.mediaDevices.getSupportedConstraints()` aufrufen.

## Wert

Diese Eigenschaft ist im Dictionary vorhanden (und ihr Wert ist immer `true`), wenn der User Agent die `latency`-Einschränkung unterstützt. Wenn die Eigenschaft nicht vorhanden ist, fehlt diese Eigenschaft im unterstützten Einschränkungen-Dictionary, und Sie erhalten {{jsxref("undefined")}}, wenn Sie versuchen, ihren Wert anzusehen.

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
