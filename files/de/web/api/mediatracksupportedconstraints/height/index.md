---
title: "MediaTrackSupportedConstraints: height-Eigenschaft"
short-title: height
slug: Web/API/MediaTrackSupportedConstraints/height
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}

Die **`height`**-Eigenschaft des [`MediaTrackSupportedConstraints`](/de/docs/Web/API/MediaTrackSupportedConstraints)-Dictionaries ist ein schreibgeschützter Boolean-Wert, der im Objekt vorhanden ist (und auf `true` gesetzt wird), das von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgegeben wird, wenn und nur wenn der {{Glossary("user_agent", "User-Agent")}} die `height`-Einschränkung unterstützt. Wenn die Einschränkung nicht unterstützt wird, ist sie nicht in der Liste enthalten, sodass dieser Wert niemals `false` sein wird.

Sie können auf das Dictionary der unterstützten Einschränkungen zugreifen, indem Sie `navigator.mediaDevices.getSupportedConstraints()` aufrufen.

## Wert

Diese Eigenschaft ist im Dictionary vorhanden (und ihr Wert ist immer `true`), wenn der User-Agent die `height`-Einschränkung unterstützt. Wenn die Eigenschaft nicht vorhanden ist, fehlt diese Eigenschaft im Dictionary der unterstützten Einschränkungen und Sie erhalten {{jsxref("undefined")}}, wenn Sie versuchen, ihren Wert einzusehen.

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
- [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints)
- [`MediaTrackSupportedConstraints`](/de/docs/Web/API/MediaTrackSupportedConstraints)
- [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)
