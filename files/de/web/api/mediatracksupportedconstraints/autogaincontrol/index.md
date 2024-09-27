---
title: "MediaTrackSupportedConstraints: autoGainControl-Eigenschaft"
short-title: autoGainControl
slug: Web/API/MediaTrackSupportedConstraints/autoGainControl
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}

Das **`autoGainControl`**-Attribut des [`MediaTrackSupportedConstraints`](/de/docs/Web/API/MediaTrackSupportedConstraints)-Wörterbuchs ist ein schreibgeschützter Boolean-Wert, der in dem Objekt vorhanden ist (und auf `true` gesetzt wird), das von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgegeben wird, wenn und nur wenn der [user agent](/de/docs/Glossary/user_agent) die **`autoGainControl`**-Einschränkung unterstützt.
Wenn die Einschränkung nicht unterstützt wird, wird sie nicht in die Liste aufgenommen, daher wird dieser Wert niemals `false` sein.

Sie können auf das Wörterbuch der unterstützten Einschränkungen zugreifen, indem Sie `navigator.mediaDevices.getSupportedConstraints()` aufrufen.

Die `autoGainControl`-Einschränkung gibt an, ob der Browser die Fähigkeit bietet, den Gain (Lautstärke) auf Medientracks automatisch zu steuern; dies hängt natürlich davon ab, ob das jeweilige Gerät ebenfalls automatische Verstärkungsregelung unterstützt; es ist typischerweise eine Funktion, die von Mikrofonen bereitgestellt wird.

## Wert

Diese Eigenschaft ist im Wörterbuch vorhanden (und ihr Wert ist immer `true`), wenn der user agent die `autoGainControl`-Einschränkung unterstützt.
Wenn die Eigenschaft nicht vorhanden ist, fehlt diese Eigenschaft im unterstützten Einschränkungswörterbuch, und Sie erhalten {{jsxref("undefined")}}, wenn Sie versuchen, ihren Wert abzurufen.

## Beispiele

Dieses Beispiel zeigt, ob Ihr Browser die `autoGainControl`-Einschränkung unterstützt oder nicht.

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
  navigator.mediaDevices.getSupportedConstraints().autoGainControl;
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
