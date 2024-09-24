---
title: MediaStreamTrackEvent
slug: Web/API/MediaStreamTrackEvent
l10n:
  sourceCommit: ac67e6f05d337e52e39f02a978b8c00bc43d583b
---

{{APIRef("Media Capture and Streams")}}

Die **`MediaStreamTrackEvent`**-Schnittstelle der {{domxref("Media Capture and Streams API", "", "", "nocode")}} repräsentiert Ereignisse, die anzeigen, dass einem {{domxref("MediaStream")}} über Methodenaufrufe der [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) Spuren hinzugefügt oder aus dem Stream entfernt wurden. Diese Ereignisse werden an den Stream gesendet, wenn diese Änderungen auftreten.

{{InheritanceDiagram}}

Die auf dieser Schnittstelle basierenden Ereignisse sind {{domxref("MediaStream/addtrack_event", "addtrack")}} und {{domxref("MediaStream/removetrack_event", "removetrack")}}.

## Konstruktor

- {{domxref("MediaStreamTrackEvent.MediaStreamTrackEvent", "MediaStreamTrackEvent()")}}
  - : Erstellt ein neues `MediaStreamTrackEvent` mit der angegebenen Konfiguration.

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von ihrer Elternschnittstelle, {{domxref("Event")}}._

- {{domxref("MediaStreamTrackEvent.track")}} {{ReadOnlyInline}}
  - : Gibt ein {{domxref("MediaStreamTrack")}}-Objekt zurück, das die mit dem Ereignis verknüpfte Spur darstellt.

## Instanz-Methoden

_Erbt auch Methoden von ihrer Elternschnittstelle, {{domxref("Event")}}._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("MediaStream")}}: Ereignisse {{domxref("MediaStream/addtrack_event", "addtrack")}} und {{domxref("MediaStream/removetrack_event", "removetrack")}}
- {{domxref("MediaStreamTrack")}}
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
