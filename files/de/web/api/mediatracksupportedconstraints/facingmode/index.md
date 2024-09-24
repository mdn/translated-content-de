---
title: "MediaTrackSupportedConstraints: facingMode-Eigenschaft"
short-title: facingMode
slug: Web/API/MediaTrackSupportedConstraints/facingMode
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}

Das **`facingMode`**-Attribut des {{domxref("MediaTrackSupportedConstraints")}}-Wörterbuchs ist ein schreibgeschützter Boolean-Wert, der nur dann im von {{domxref("MediaDevices.getSupportedConstraints()")}} zurückgegebenen Objekt vorhanden ist (und auf `true` gesetzt ist), wenn der {{Glossary("user agent")}} die `facingMode`-Einschränkung unterstützt. Wenn die Einschränkung nicht unterstützt wird, wird sie nicht in die Liste aufgenommen, sodass dieser Wert niemals `false` sein wird.

Sie können auf das unterstützte Einschränkungswörterbuch zugreifen, indem Sie `navigator.mediaDevices.getSupportedConstraints()` aufrufen.

## Wert

Dieses Attribut ist im Wörterbuch vorhanden (und sein Wert ist immer `true`), wenn der User-Agent die `facingMode`-Einschränkung unterstützt. Wenn das Attribut nicht vorhanden ist, fehlt dieses Attribut im unterstützten Einschränkungswörterbuch, und Sie erhalten {{jsxref("undefined")}}, wenn Sie versuchen, auf seinen Wert zuzugreifen.

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
- {{domxref("MediaDevices.getSupportedConstraints()")}}
- {{domxref("MediaTrackSupportedConstraints")}}
- {{domxref("MediaStreamTrack")}}
