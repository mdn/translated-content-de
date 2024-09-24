---
title: "MediaTrackSupportedConstraints: frameRate-Eigenschaft"
short-title: frameRate
slug: Web/API/MediaTrackSupportedConstraints/frameRate
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("Media Capture and Streams")}}

Das **`frameRate`**-Attribut des {{domxref("MediaTrackSupportedConstraints")}}-Wörterbuchs ist ein schreibgeschützter Boolean-Wert, der im Objekt enthalten ist, das von {{domxref("MediaDevices.getSupportedConstraints()")}} zurückgegeben wird, wenn und nur wenn der {{Glossary("user agent")}} das {{domxref("MediaTrackConstraints.frameRate","frameRate")}}-Constraint unterstützt.

Wenn das Constraint nicht unterstützt wird, ist es nicht in der Liste enthalten, daher wird dieser Wert niemals `false` sein.

Das `frameRate`-Constraint kann verwendet werden, um akzeptable obere und untere Grenzen für die Bildrate eines neuen Videotracks festzulegen oder um eine genaue Bildrate zu spezifizieren, die für den Erfolg der Anfrage bereitgestellt werden muss. Durch Überprüfung des Werts dieser Eigenschaft können Sie feststellen, ob der User Agent die Einschränkung der Videotrack-Konfiguration durch die Bildrate zulässt. Sehen Sie sich das [Beispiel](#beispiele) an, um zu sehen, wie dies verwendet werden kann.

## Wert

Diese Eigenschaft ist im Wörterbuch vorhanden, wenn der User Agent das `frameRate`-Constraint unterstützt.
Wenn die Eigenschaft nicht vorhanden ist, erlaubt der User Agent nicht, Grenzen für die Bildrate von Videotracks festzulegen.

> [!NOTE]
> Wenn diese Eigenschaft vorhanden ist, ist ihr Wert immer `true`.

## Beispiele

Dieses einfache Beispiel überprüft, ob Ihr Browser die Einschränkung der Bildrate beim Anfordern von Videotracks unterstützt.

### JavaScript

```js
const result = document.getElementById("result");
const supported = navigator.mediaDevices.getSupportedConstraints().frameRate;
result.textContent = supported ? "Supported!" : "Not supported!";
```

### HTML

```html
<div id="result"></div>
```

### CSS

```css
#result {
  font:
    14px "Arial",
    sans-serif;
}
```

### Ergebnis

Die Ausgabe, die zeigt, ob Ihr Browser das `frameRate`-Constraint unterstützt, ist:

{{ EmbedLiveSample('Examples', 600, 80) }}

Obwohl dieses Beispiel trivial ist, können Sie die einfache Ausgabe von "Supported" im Vergleich zu "Not supported" durch Code ersetzen, um alternative Methoden zur Präsentation der audiovisuellen Informationen, die Sie mit dem Benutzer teilen möchten, bereitzustellen oder anderweitig zu verwenden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- {{domxref("MediaDevices.getSupportedConstraints()")}}
- {{domxref("MediaTrackSupportedConstraints")}}
- {{domxref("MediaStreamTrack")}}
