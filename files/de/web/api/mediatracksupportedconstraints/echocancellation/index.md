---
title: "MediaTrackSupportedConstraints: echoCancellation-Eigenschaft"
short-title: echoCancellation
slug: Web/API/MediaTrackSupportedConstraints/echoCancellation
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}

Das Wörterbuch [`MediaTrackSupportedConstraints`](/de/docs/Web/API/MediaTrackSupportedConstraints)
enthält die schreibgeschützte Boolean-Eigenschaft **`echoCancellation`**, die im Objekt enthalten ist (und auf `true` gesetzt wird), das von
[`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgegeben wird, wenn und nur wenn der
{{Glossary("user_agent", "User-Agent")}} das `echoCancellation`-Constraint unterstützt. Wenn das
Constraint nicht unterstützt wird, wird es nicht in die Liste aufgenommen, sodass dieser Wert niemals
`false` sein wird.

Sie können auf das Wörterbuch der unterstützten Constraints zugreifen, indem Sie
`navigator.mediaDevices.getSupportedConstraints()` aufrufen.

## Wert

Diese Eigenschaft ist im Wörterbuch vorhanden (und ihr Wert ist immer `true`),
wenn der User-Agent das `echoCancellation`-Constraint unterstützt. Wenn die Eigenschaft
nicht vorhanden ist, fehlt diese Eigenschaft im Wörterbuch der unterstützten Constraints, und
Sie erhalten {{jsxref("undefined")}}, wenn Sie versuchen, ihren Wert abzurufen.

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
  navigator.mediaDevices.getSupportedConstraints().echoCancellation;
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
