---
title: "MediaTrackSupportedConstraints: autoGainControl-Eigenschaft"
short-title: autoGainControl
slug: Web/API/MediaTrackSupportedConstraints/autoGainControl
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}

Das **`autoGainControl`**-Attribut des {{domxref("MediaTrackSupportedConstraints")}}-Wörterbuchs ist ein schreibgeschützter Boolean-Wert, der in dem Objekt vorhanden ist (und auf `true` gesetzt ist), welches von {{domxref("MediaDevices.getSupportedConstraints()")}} zurückgegeben wird, wenn und nur wenn der {{Glossary("user agent")}} die **`autoGainControl`**-Einschränkung unterstützt. Wenn die Einschränkung nicht unterstützt wird, ist sie nicht in der Liste enthalten, daher wird dieser Wert niemals `false` sein.

Sie können auf das Wörterbuch der unterstützten Einschränkungen zugreifen, indem Sie `navigator.mediaDevices.getSupportedConstraints()` aufrufen.

Die `autoGainControl`-Einschränkung zeigt an, ob der Browser die Fähigkeit bietet, automatisch die Verstärkung (Lautstärke) auf Medientracks zu steuern; dies hängt offensichtlich davon ab, ob das jeweilige Gerät auch die automatische Verstärkungsregelung unterstützt; typischerweise ist es eine Funktion, die von Mikrofonen bereitgestellt wird.

## Wert

Diese Eigenschaft ist im Wörterbuch vorhanden (und ihr Wert ist immer `true`), wenn der User Agent die `autoGainControl`-Einschränkung unterstützt. Wenn die Eigenschaft nicht vorhanden ist, fehlt diese Eigenschaft im Wörterbuch der unterstützten Einschränkungen, und Sie erhalten {{jsxref("undefined")}}, wenn Sie versuchen, ihren Wert abzurufen.

## Beispiele

Dieses Beispiel zeigt an, ob Ihr Browser die `autoGainControl`-Einschränkung unterstützt.

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
- {{domxref("MediaDevices.getSupportedConstraints()")}}
- {{domxref("MediaTrackSupportedConstraints")}}
- {{domxref("MediaStreamTrack")}}
