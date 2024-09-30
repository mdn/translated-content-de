---
title: MediaStreamTrackEvent
slug: Web/API/MediaStreamTrackEvent
l10n:
  sourceCommit: ac67e6f05d337e52e39f02a978b8c00bc43d583b
---

{{APIRef("Media Capture and Streams")}}

Die **`MediaStreamTrackEvent`**-Schnittstelle der [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) repräsentiert Ereignisse, die anzeigen, dass ein [`MediaStream`](/de/docs/Web/API/MediaStream) durch Aufrufe von Methoden der [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) Tracks zum Stream hinzugefügt oder aus dem Stream entfernt wurden. Diese Ereignisse werden an den Stream gesendet, wenn diese Änderungen auftreten.

{{InheritanceDiagram}}

Die auf dieser Schnittstelle basierenden Ereignisse sind [`addtrack`](/de/docs/Web/API/MediaStream/addtrack_event) und [`removetrack`](/de/docs/Web/API/MediaStream/removetrack_event).

## Konstruktor

- [`MediaStreamTrackEvent()`](/de/docs/Web/API/MediaStreamTrackEvent/MediaStreamTrackEvent)
  - : Erstellt ein neues `MediaStreamTrackEvent` mit der angegebenen Konfiguration.

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seiner Elternschnittstelle, [`Event`](/de/docs/Web/API/Event)._

- [`MediaStreamTrackEvent.track`](/de/docs/Web/API/MediaStreamTrackEvent/track) {{ReadOnlyInline}}
  - : Gibt ein [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekt zurück, das den mit dem Ereignis verbundenen Track repräsentiert.

## Instanz-Methoden

_Erbt auch Methoden von seiner Elternschnittstelle, [`Event`](/de/docs/Web/API/Event)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`MediaStream`](/de/docs/Web/API/MediaStream): [`addtrack`](/de/docs/Web/API/MediaStream/addtrack_event) und [`removetrack`](/de/docs/Web/API/MediaStream/removetrack_event) Ereignisse
- [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
