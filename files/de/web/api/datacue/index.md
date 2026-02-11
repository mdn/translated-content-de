---
title: DataCue
slug: Web/API/DataCue
l10n:
  sourceCommit: fb241f60d2c42614b106f3b4647cc6a4eb2e1bc8
---

{{APIRef("WebVTT")}}{{SeeCompatTable}}

Die **`DataCue`**-Schnittstelle repräsentiert ein Cue, das willkürlich getimte Daten mit einer Audio- oder Videomediendatei verknüpft oder getimte Daten von einer Medienressource auf Webseiten zugänglich macht. Sie erweitert die [`TextTrackCue`](/de/docs/Web/API/TextTrackCue)-Schnittstelle um eine [`value`](/de/docs/Web/API/DataCue/value)-Eigenschaft, die jeden Datentyp enthalten kann, und eine [`type`](/de/docs/Web/API/DataCue/type)-Eigenschaft, die die Art der Daten identifiziert.

Im Gegensatz zu [`VTTCue`](/de/docs/Web/API/VTTCue), das für die Anzeige von Untertiteln und Bildbeschriftungen entwickelt wurde, ist `DataCue` für nicht angezeigte, getimte Metadaten vorgesehen. Anwendungsfälle umfassen dynamischen Inhaltsersatz, Werbeeinblendungen, Präsentationen von ergänzendem Inhalt neben Audio oder Video oder allgemein das Auslösen von Applikationslogik an bestimmten Punkten in der Medien-Zeitleiste.

Einige Benutzeragenten können auch automatisch `DataCue`-Objekte für eingebettete, getimte Metadaten generieren, die innerhalb von Medienströmen übertragen werden, wie ID3-Tags in [HTTP Live Streaming (HLS)](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Setting_up_adaptive_streaming_media_sources#hls_encoding).

{{InheritanceDiagram}}

## Konstruktor

- [`DataCue()`](/de/docs/Web/API/DataCue/DataCue) {{experimental_inline}}
  - : Erstellt ein neues `DataCue`-Objekt.

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von [`TextTrackCue`](/de/docs/Web/API/TextTrackCue)._

- [`DataCue.type`](/de/docs/Web/API/DataCue/type) {{ReadOnlyInline}} {{experimental_inline}}
  - : Ein Zeichenfolgenwert, der den Typ des [`value`](/de/docs/Web/API/DataCue/value) des Cues identifiziert, typischerweise mit der Notation im umgekehrten Domänen-Format (z.B. `"org.mp4ra"`, `"org.id3"`).
- [`DataCue.value`](/de/docs/Web/API/DataCue/value) {{experimental_inline}}
  - : Die mit dem Cue verbundene Datenlast. Kann jeden Typ haben.

## Instanz-Methoden

_Diese Schnittstelle hat keine eigenen Methoden, erbt jedoch Methoden von [`TextTrackCue`](/de/docs/Web/API/TextTrackCue)._

## Beispiele

### Assoziieren von zeitlich abgestimmten Metadaten mit einem Video

Das folgende Beispiel erstellt ein Metadaten-[`TextTrack`](/de/docs/Web/API/TextTrack) in einem Videoelement und fügt `DataCue`-Objekte mit Geolokationskoordinaten hinzu. Wenn jedes Cue während der Wiedergabe aktiv wird, wird dessen [`enter`](/de/docs/Web/API/TextTrackCue/enter_event)-Ereignis ausgelöst, sodass die Seite reagieren kann — zum Beispiel durch das Aktualisieren einer Kartenansicht.

```html
<video controls src="video.mp4"></video>
```

```js
const video = document.querySelector("video");
const track = video.addTextTrack("metadata", "Geo Track");
track.mode = "hidden";

const points = [
  { start: 0, end: 10, data: { latitude: 51.5043, longitude: -0.0762 } },
  { start: 10, end: 20, data: { latitude: 48.8566, longitude: 2.3522 } },
  { start: 20, end: 30, data: { latitude: 40.4168, longitude: -3.7038 } },
];

for (const point of points) {
  const cue = new DataCue(
    point.start,
    point.end,
    point.data,
    "org.example.geo",
  );
  cue.addEventListener("enter", (e) => {
    const { latitude, longitude } = e.target.value;
    console.log(`Map pan to: ${latitude}, ${longitude}`);
  });
  track.addCue(cue);
}

// At 0s: "Map pan to: 51.5043, -0.0762"
// At 10s: "Map pan to: 48.8566, 2.3522"
// At 20s: "Map pan to: 40.4168, -3.7038"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`TextTrackCue`](/de/docs/Web/API/TextTrackCue)
- [`VTTCue`](/de/docs/Web/API/VTTCue)
- [`TextTrack`](/de/docs/Web/API/TextTrack)
- [`enter`](/de/docs/Web/API/TextTrackCue/enter_event)-Ereignis
- [`exit`](/de/docs/Web/API/TextTrackCue/exit_event)-Ereignis
