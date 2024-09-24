---
title: "MediaTrackSupportedConstraints: noiseSuppression-Eigenschaft"
short-title: noiseSuppression
slug: Web/API/MediaTrackSupportedConstraints/noiseSuppression
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}

Die **`noiseSuppression`**-Eigenschaft des {{domxref("MediaTrackSupportedConstraints")}}-Wörterbuchs ist ein schreibgeschützter Boolescher Wert, der (und nur dann) im Objekt enthalten ist, das durch {{domxref("MediaDevices.getSupportedConstraints()")}} zurückgegeben wird, wenn der {{Glossary("user agent")}} die **`noiseSuppression`**-Einschränkung unterstützt. Wenn die Einschränkung nicht unterstützt wird, ist sie nicht in der Liste enthalten, sodass dieser Wert niemals `false` sein wird.

Sie können auf das Wörterbuch der unterstützten Einschränkungen zugreifen, indem Sie `navigator.mediaDevices.getSupportedConstraints()` aufrufen.

Die `noiseSuppression`-Einschränkung gibt an, ob der Browser die Möglichkeit bietet, den Pegel (die Lautstärke) auf Medienspuren automatisch zu steuern; dies hängt natürlich auch davon ab, ob das jeweilige Gerät die automatische Pegelsteuerung unterstützt.

## Wert

Diese Eigenschaft ist im Wörterbuch vorhanden (und ihr Wert ist immer `true`), wenn der User Agent die `noiseSuppression`-Einschränkung unterstützt (und somit Rauschunterdrückung auf Audiospuren unterstützt). Wenn die Eigenschaft nicht vorhanden ist, fehlt diese Eigenschaft im Wörterbuch der unterstützten Einschränkungen, und Sie erhalten {{jsxref("undefined")}}, wenn Sie versuchen, ihren Wert anzusehen.

## Beispiele

Dieses Beispiel zeigt an, ob Ihr Browser die `noiseSuppression`-Einschränkung unterstützt.

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
  navigator.mediaDevices.getSupportedConstraints().noiseSuppression;
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
