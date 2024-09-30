---
title: TextTrackCue
slug: Web/API/TextTrackCue
l10n:
  sourceCommit: 3975bcf6caa09c9c5f7fddf2eef2be6c021d00f6
---

{{APIRef("WebVTT")}}

Die **`TextTrackCue`**-Schnittstelle der [WebVTT API](/de/docs/Web/API/WebVTT_API) ist die abstrakte Basisklasse für die verschiedenen abgeleiteten Cue-Typen, wie z.B. [`VTTCue`](/de/docs/Web/API/VTTCue); Sie werden mit diesen abgeleiteten Typen arbeiten statt mit der Basisklasse.

Diese Cues repräsentieren Textstrings, die während der Leistung eines [`TextTrack`](/de/docs/Web/API/TextTrack) für eine bestimmte Dauer angezeigt werden. Der Cue enthält die Startzeit (die Zeit, zu der der Text angezeigt wird) und die Endzeit (die Zeit, zu der er von der Anzeige entfernt wird), sowie weitere Informationen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`TextTrackCue.track`](/de/docs/Web/API/TextTrackCue/track) {{ReadOnlyInline}}
  - : Der [`TextTrack`](/de/docs/Web/API/TextTrack), zu dem dieser Cue gehört, oder `null`, wenn er zu keinem gehört.
- [`TextTrackCue.id`](/de/docs/Web/API/TextTrackCue/id)
  - : Ein String, der den Cue identifiziert.
- [`TextTrackCue.startTime`](/de/docs/Web/API/TextTrackCue/startTime)
  - : Ein `double`, das die Videozeit in Sekunden darstellt, zu der der Cue angezeigt werden soll.
- [`TextTrackCue.endTime`](/de/docs/Web/API/TextTrackCue/endTime)
  - : Ein `double`, das die Videozeit in Sekunden darstellt, zu der der Cue nicht mehr angezeigt wird.
- [`TextTrackCue.pauseOnExit`](/de/docs/Web/API/TextTrackCue/pauseOnExit)
  - : Ein `boolean`, der angibt, ob das Video angehalten wird, wenn dieser Cue nicht mehr angezeigt wird.

## Ereignisse

- [`enter`](/de/docs/Web/API/TextTrackCue/enter_event)
  - : Wird ausgelöst, wenn ein Cue aktiv wird.
- [`exit`](/de/docs/Web/API/TextTrackCue/exit_event)
  - : Wird ausgelöst, wenn der Cue nicht mehr aktiv ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
