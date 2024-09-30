---
title: "MediaTrackSupportedConstraints: facingMode-Eigenschaft"
short-title: facingMode
slug: Web/API/MediaTrackSupportedConstraints/facingMode
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}

Die **`facingMode`**-Eigenschaft des [`MediaTrackSupportedConstraints`](/de/docs/Web/API/MediaTrackSupportedConstraints)-Wörterbuchs ist ein schreibgeschützter Boolean-Wert, der im Objekt, das von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgegeben wird, vorhanden ist (und auf `true` gesetzt wird), wenn und nur wenn der [User Agent](/de/docs/Glossary/user_agent) die `facingMode`-Einschränkung unterstützt. Wenn die Einschränkung nicht unterstützt wird, ist sie nicht in der Liste enthalten, sodass dieser Wert niemals `false` sein wird.

Sie können auf das Wörterbuch der unterstützten Einschränkungen zugreifen, indem Sie `navigator.mediaDevices.getSupportedConstraints()` aufrufen.

## Wert

Diese Eigenschaft ist im Wörterbuch vorhanden (und ihr Wert ist immer `true`), wenn der User Agent die `facingMode`-Einschränkung unterstützt. Wenn die Eigenschaft nicht vorhanden ist, fehlt diese Eigenschaft im Wörterbuch der unterstützten Einschränkungen, und Sie erhalten {{jsxref("undefined")}}, wenn Sie versuchen, ihren Wert zu überprüfen.

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
const supported = navigator.mediaDevices.getSupportedConstraints().facingMode;
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
