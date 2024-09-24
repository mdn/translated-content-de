---
title: "MediaTrackSupportedConstraints: groupId-Eigenschaft"
short-title: groupId
slug: Web/API/MediaTrackSupportedConstraints/groupId
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}

Das **`groupId`**-Eigenschaft des {{domxref("MediaTrackSupportedConstraints")}}-Wörterbuchs ist ein schreibgeschützter Boolean-Wert, der im Objekt enthalten ist (und auf `true` gesetzt ist), das von {{domxref("MediaDevices.getSupportedConstraints()")}} zurückgegeben wird, wenn und nur wenn der {{Glossary("user agent")}} die `groupId`-Einschränkung unterstützt. Wenn die Einschränkung nicht unterstützt wird, ist sie nicht in der Liste enthalten, daher wird dieser Wert niemals `false` sein.

Sie können das Wörterbuch der unterstützten Einschränkungen aufrufen, indem Sie `navigator.mediaDevices.getSupportedConstraints()` verwenden.

## Wert

Diese Eigenschaft ist im Wörterbuch vorhanden (und ihr Wert ist immer `true`), wenn der User Agent die `groupId`-Einschränkung unterstützt. Wenn die Eigenschaft nicht vorhanden ist, fehlt diese Eigenschaft im Wörterbuch der unterstützten Einschränkungen, und Sie erhalten {{jsxref("undefined")}}, wenn Sie versuchen, ihren Wert abzurufen.

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
const supported = navigator.mediaDevices.getSupportedConstraints().groupId;
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
