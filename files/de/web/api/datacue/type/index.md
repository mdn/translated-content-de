---
title: "DataCue: type-Eigenschaft"
short-title: type
slug: Web/API/DataCue/type
l10n:
  sourceCommit: fb241f60d2c42614b106f3b4647cc6a4eb2e1bc8
---

{{APIRef("WebVTT")}}{{SeeCompatTable}}

Die schreibgeschützte **`type`**-Eigenschaft der [`DataCue`](/de/docs/Web/API/DataCue)-Schnittstelle gibt einen String zurück, der den Typ oder das Schema der in der `value`-Eigenschaft des Cue gespeicherten Daten identifiziert. Dies ist typischerweise ein String in umgekehrter Domänennotation (z. B. `"org.id3"`, `"com.apple.itunes"`), der es Anwendungen ermöglicht, die Datenlast des Cue korrekt zu interpretieren.

Wenn ein Benutzeragent `DataCue`-Objekte für Inband-Metadaten (zum Beispiel aus einer HTTP-Live-Streaming-Quelle) automatisch generiert, setzt er diese Eigenschaft, um das Format der Metadaten anzuzeigen. Wenn Anwendungs-Code ein `DataCue` mithilfe des [`DataCue()`](/de/docs/Web/API/DataCue/DataCue)-Konstruktors erstellt, wird der `type` aus dem optionalen vierten Argument gesetzt und standardmäßig auf einen leeren String gesetzt, wenn er weggelassen wird.

## Wert

Ein String. Übliche von Benutzeragenten für Inband-Metadaten gesetzte Werte sind:

- `"org.id3"` — ID3-Metadaten.
- `"org.mp4ra"` — MPEG-4-Metadaten.
- `"com.apple.quicktime.udta"` — QuickTime User Data.
- `"com.apple.quicktime.mdta"` — QuickTime Metadaten.
- `"com.apple.itunes"` — iTunes-Metadaten.

Anwendungsdefinierte Cues können beliebige Strings verwenden, jedoch wird eine umgekehrte Domänennotation empfohlen, um Kollisionen zu vermeiden.

## Beispiele

### Lesen des Typs eines DataCue

```html
<video controls src="video.mp4"></video>
```

```js
const video = document.querySelector("video");
const track = video.addTextTrack("metadata", "Events");
track.mode = "hidden";

const cue = new DataCue(
  0,
  10,
  { latitude: 51.5043, longitude: -0.0762 },
  "org.example.geo",
);
track.addCue(cue);

console.log(cue.type);
// "org.example.geo"
```

### Verarbeiten des Typs für Inband-Metadaten

Wenn ein Benutzeragent `DataCue`-Objekte aus Inband getakteten Metadaten generiert, kann die `type`-Eigenschaft verwendet werden, um zu bestimmen, wie mit jedem Cue umzugehen ist.

```js
track.addEventListener("cuechange", () => {
  for (const cue of track.activeCues) {
    switch (cue.type) {
      case "org.id3":
        handleID3Metadata(cue.value);
        break;
      case "org.mp4ra":
        handleMP4Metadata(cue.value);
        break;
      default:
        console.log(`Unknown cue type: ${cue.type}`);
    }
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DataCue`](/de/docs/Web/API/DataCue)
- [`DataCue.value`](/de/docs/Web/API/DataCue/value)
- [`DataCue()`](/de/docs/Web/API/DataCue/DataCue)-Konstruktor
- [`TextTrackCue`](/de/docs/Web/API/TextTrackCue)
