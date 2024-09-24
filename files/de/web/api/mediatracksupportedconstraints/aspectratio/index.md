---
title: "MediaTrackSupportedConstraints: Eigenschaft aspectRatio"
short-title: aspectRatio
slug: Web/API/MediaTrackSupportedConstraints/aspectRatio
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}

Das **`aspectRatio`**-Eigenschafts des {{domxref("MediaTrackSupportedConstraints")}}-Wörterbuchs ist ein schreibgeschützter boolescher Wert, der in dem von {{domxref("MediaDevices.getSupportedConstraints()")}} zurückgegebenen Objekt vorhanden ist (und auf `true` gesetzt ist), wenn und nur wenn der {{Glossary("user agent")}} die `aspectRatio`-Einschränkung unterstützt. Wenn die Einschränkung nicht unterstützt wird, ist sie nicht in der Liste enthalten, sodass dieser Wert niemals `false` sein wird.

Sie können auf das Unterstützungs-Wörterbuch für Einschränkungen zugreifen, indem Sie `navigator.mediaDevices.getSupportedConstraints()` aufrufen.

## Wert

Diese Eigenschaft ist im Wörterbuch präsent (und ihr Wert ist immer `true`), wenn der User-Agent die `aspectRatio`-Einschränkung unterstützt. Wenn die Eigenschaft nicht vorhanden ist, fehlt diese Eigenschaft im Unterstützungs-Wörterbuch für Einschränkungen, und Sie erhalten {{jsxref("undefined")}}, wenn Sie versuchen, ihren Wert zu betrachten.

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
const supported = navigator.mediaDevices.getSupportedConstraints().aspectRatio;
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
