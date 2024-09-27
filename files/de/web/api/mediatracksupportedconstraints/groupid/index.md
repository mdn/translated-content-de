---
title: "MediaTrackSupportedConstraints: groupId-Eigenschaft"
short-title: groupId
slug: Web/API/MediaTrackSupportedConstraints/groupId
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}

Das **`groupId`**-Attribut des [`MediaTrackSupportedConstraints`](/de/docs/Web/API/MediaTrackSupportedConstraints)-Dictionaries ist ein schreibgeschützter Boolean-Wert, der in dem von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgegebenen Objekt vorhanden ist (und auf `true` gesetzt), wenn und nur wenn der [User-Agent](/de/docs/Glossary/user_agent) die `groupId`-Einschränkung unterstützt. Wenn die Einschränkung nicht unterstützt wird, wird sie nicht in die Liste aufgenommen, sodass dieser Wert niemals `false` sein wird.

Sie können auf das Wörterbuch der unterstützten Einschränkungen zugreifen, indem Sie `navigator.mediaDevices.getSupportedConstraints()` aufrufen.

## Wert

Diese Eigenschaft ist im Dictionary vorhanden (und ihr Wert ist immer `true`), wenn der User-Agent die `groupId`-Einschränkung unterstützt. Falls die Eigenschaft nicht vorhanden ist, fehlt diese Eigenschaft im Wörterbuch der unterstützten Einschränkungen, und Sie erhalten {{jsxref("undefined")}}, wenn Sie versuchen, ihren Wert abzurufen.

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
- [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints)
- [`MediaTrackSupportedConstraints`](/de/docs/Web/API/MediaTrackSupportedConstraints)
- [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)
