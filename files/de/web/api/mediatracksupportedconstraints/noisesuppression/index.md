---
title: "MediaTrackSupportedConstraints: noiseSuppression-Eigenschaft"
short-title: noiseSuppression
slug: Web/API/MediaTrackSupportedConstraints/noiseSuppression
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}

Das [`MediaTrackSupportedConstraints`](/de/docs/Web/API/MediaTrackSupportedConstraints)-Wörterbuch enthält die schreibgeschützte Boolesche Eigenschaft **`noiseSuppression`**, die im Objekt, das von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgegeben wird, vorhanden ist (und auf `true` gesetzt ist), wenn und nur wenn der [Benutzeragent](/de/docs/Glossary/user_agent) die **`noiseSuppression`**-Einschränkung unterstützt. Falls die Einschränkung nicht unterstützt wird, ist sie nicht in der Liste enthalten, was bedeutet, dass dieser Wert niemals `false` sein wird.

Sie können auf das unterstützte Einschränkungs-Wörterbuch zugreifen, indem Sie `navigator.mediaDevices.getSupportedConstraints()` aufrufen.

Die `noiseSuppression`-Einschränkung gibt an, ob der Browser die Fähigkeit bietet, den Pegel (die Lautstärke) von Medienspuren automatisch zu steuern; dies hängt natürlich davon ab, ob das einzelne Gerät eine automatische Pegelsteuerung unterstützt.

## Wert

Diese Eigenschaft ist im Wörterbuch (und ihr Wert ist immer `true`) vorhanden, wenn der Benutzeragent die `noiseSuppression`-Einschränkung unterstützt (und somit die Geräuschunterdrückung auf Audiospuren unterstützt). Wenn die Eigenschaft nicht vorhanden ist, fehlt diese Eigenschaft im unterstützten Einschränkungs-Wörterbuch, und Sie erhalten {{jsxref("undefined")}}, wenn Sie versuchen, ihren Wert anzusehen.

## Beispiele

Dieses Beispiel zeigt, ob Ihr Browser die `noiseSuppression`-Einschränkung unterstützt.

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
