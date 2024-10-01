---
title: "MediaTrackSupportedConstraints: frameRate-Eigenschaft"
short-title: frameRate
slug: Web/API/MediaTrackSupportedConstraints/frameRate
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("Media Capture and Streams")}}

Das **`frameRate`**-Eigenschaft des [`MediaTrackSupportedConstraints`](/de/docs/Web/API/MediaTrackSupportedConstraints)-Dictionaries ist ein schreibgeschützter Boolean-Wert, der in dem Objekt vorhanden ist (und auf `true` gesetzt wird), das von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgegeben wird, wenn und nur wenn der {{Glossary("user_agent", "User-Agent")}} die [`frameRate`](/de/docs/Web/API/MediaTrackConstraints/frameRate)-Einschränkung unterstützt.

Wenn die Einschränkung nicht unterstützt wird, ist sie nicht in der Liste enthalten, sodass dieser Wert niemals `false` sein wird.

Die `frameRate`-Einschränkung kann verwendet werden, um akzeptable obere und untere Grenzen der Bildrate für eine neue Videoaufnahme festzulegen oder um eine genaue Bildrate zu spezifizieren, die erforderlich ist, damit die Anfrage erfolgreich ist.
Durch Überprüfen des Werts dieser Eigenschaft können Sie feststellen, ob der User-Agent die Einschränkung der Videoaufnahmekonfiguration durch die Bildrate erlaubt. Siehe das [Beispiel](#beispiele), um zu sehen, wie dies verwendet werden kann.

## Wert

Diese Eigenschaft ist im Dictionary vorhanden, wenn der User-Agent die `frameRate`-Einschränkung unterstützt.
Wenn die Eigenschaft nicht vorhanden ist, erlaubt der User-Agent nicht, Grenzen für die Bildrate von Videoaufnahmen festzulegen.

> [!NOTE]
> Wenn diese Eigenschaft vorhanden ist, ist ihr Wert immer `true`.

## Beispiele

Dieses einfache Beispiel prüft, ob Ihr Browser die Einschränkung der Bildrate bei der Anforderung von Videoaufnahmen unterstützt.

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

Die Ausgabe, die zeigt, ob Ihr Browser die `frameRate`-Einschränkung unterstützt, ist:

{{ EmbedLiveSample('Examples', 600, 80) }}

Während dieses Beispiel trivial ist, können Sie die einfache Ausgabe von "Unterstützt" vs.
"Nicht unterstützt" durch Code ersetzen, um alternative Methoden zur Präsentation der audiovisuellen Informationen bereitzustellen, die Sie mit dem Benutzer teilen oder anderweitig bearbeiten möchten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints)
- [`MediaTrackSupportedConstraints`](/de/docs/Web/API/MediaTrackSupportedConstraints)
- [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)
