---
title: "MediaTrackSupportedConstraints: Eigenschaft noiseSuppression"
short-title: noiseSuppression
slug: Web/API/MediaTrackSupportedConstraints/noiseSuppression
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}

Das **`noiseSuppression`**-Attribut des [`MediaTrackSupportedConstraints`](/de/docs/Web/API/MediaTrackSupportedConstraints) Wörterbuchs ist ein schreibgeschützter Boolean-Wert, der nur dann vorhanden ist (und auf `true` gesetzt wird) in dem Objekt, das von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgegeben wird, wenn und nur wenn der [User-Agent](/de/docs/Glossary/user_agent) die **`noiseSuppression`**-Einschränkung unterstützt. Wenn die Einschränkung nicht unterstützt wird, ist sie nicht in der Liste enthalten, sodass dieser Wert niemals `false` sein wird.

Sie können auf das Wörterbuch der unterstützten Einschränkungen zugreifen, indem Sie `navigator.mediaDevices.getSupportedConstraints()` aufrufen.

Die `noiseSuppression`-Einschränkung gibt an, ob der Browser die Fähigkeit bietet, die Verstärkung (Lautstärke) auf Medienspuren automatisch zu steuern; dies hängt natürlich auch davon ab, ob das einzelne Gerät die automatische Verstärkungsregelung unterstützt.

## Wert

Diese Eigenschaft ist im Wörterbuch vorhanden (und der Wert ist immer `true`), wenn der User-Agent die `noiseSuppression`-Einschränkung unterstützt (und damit Rauschunterdrückung auf Audio-Tracks). Wenn die Eigenschaft nicht vorhanden ist, fehlt sie im Wörterbuch der unterstützten Einschränkungen, und Sie erhalten {{jsxref("undefined")}}, wenn Sie versuchen, ihren Wert zu betrachten.

## Beispiele

Dieses Beispiel zeigt, ob Ihr Browser die `noiseSuppression`-Einschränkung unterstützt oder nicht.

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
- [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints)
- [`MediaTrackSupportedConstraints`](/de/docs/Web/API/MediaTrackSupportedConstraints)
- [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)
