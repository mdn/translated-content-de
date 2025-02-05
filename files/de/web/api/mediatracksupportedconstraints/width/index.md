---
title: "MediaTrackSupportedConstraints: width-Eigenschaft"
short-title: width
slug: Web/API/MediaTrackSupportedConstraints/width
l10n:
  sourceCommit: 5e3c69527de87e8ff9407de62e919db9254f0627
---

{{APIRef("Media Capture and Streams")}}

Die **`width`**-Eigenschaft des [`MediaTrackSupportedConstraints`](/de/docs/Web/API/MediaTrackSupportedConstraints)-Wörterbuchs ist ein schreibgeschützter Boolescher Wert, der in dem Objekt enthalten (und auf `true` gesetzt) ist, das von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgegeben wird, und zwar nur, wenn der {{Glossary("user_agent", "User Agent")}} die `width`-Einschränkung unterstützt. Falls die Einschränkung nicht unterstützt wird, ist sie in der Liste nicht enthalten, sodass dieser Wert niemals `false` sein wird.

Sie können auf das Wörterbuch der unterstützten Einschränkungen zugreifen, indem Sie `navigator.mediaDevices.getSupportedConstraints()` aufrufen.

## Wert

Diese Eigenschaft ist in dem Wörterbuch enthalten (und der Wert ist immer `true`), wenn der User Agent die `width`-Einschränkung unterstützt. Falls die Eigenschaft nicht enthalten ist, fehlt sie im Wörterbuch der unterstützten Einschränkungen, und Sie erhalten {{jsxref("undefined")}}, wenn Sie versuchen, ihren Wert abzufragen.

## Beispiel

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
const supported = navigator.mediaDevices.getSupportedConstraints().width;
result.textContent = supported ? "Supported!" : "Not supported!";
```

### Ergebnis

{{ EmbedLiveSample('Example', 600, 80) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints)
- [`MediaTrackSupportedConstraints`](/de/docs/Web/API/MediaTrackSupportedConstraints)
- [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)
