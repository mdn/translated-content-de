---
title: TextTrackCue
slug: Web/API/TextTrackCue
l10n:
  sourceCommit: 3975bcf6caa09c9c5f7fddf2eef2be6c021d00f6
---

{{APIRef("WebVTT")}}

Das **`TextTrackCue`** Interface der [WebVTT API](/de/docs/Web/API/WebVTT_API) ist die abstrakte Basisklasse für die verschiedenen abgeleiteten Cue-Typen, wie z.B. [`VTTCue`](/de/docs/Web/API/VTTCue); Sie werden mit diesen abgeleiteten Typen arbeiten und nicht mit der Basisklasse.

Diese Cues repräsentieren Textstränge, die für eine bestimmte Dauer während der Wiedergabe eines [`TextTrack`](/de/docs/Web/API/TextTrack) präsentiert werden. Der Cue enthält die Startzeit (die Zeit, zu der der Text angezeigt wird) und die Endzeit (die Zeit, zu der er von der Anzeige entfernt wird) sowie andere Informationen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Dieses Interface erbt auch Eigenschaften von [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`TextTrackCue.track`](/de/docs/Web/API/TextTrackCue/track) {{ReadOnlyInline}}
  -: Der [`TextTrack`](/de/docs/Web/API/TextTrack), zu dem dieser Cue gehört, oder `null`, wenn er zu keinem gehört.
- [`TextTrackCue.id`](/de/docs/Web/API/TextTrackCue/id)
  -: Ein String, der den Cue identifiziert.
- [`TextTrackCue.startTime`](/de/docs/Web/API/TextTrackCue/startTime)
  -: Ein `double`, das die Videozeit repräsentiert, zu der der Cue angezeigt wird, in Sekunden.
- [`TextTrackCue.endTime`](/de/docs/Web/API/TextTrackCue/endTime)
  -: Ein `double`, das die Videozeit repräsentiert, zu der der Cue nicht mehr angezeigt wird, in Sekunden.
- [`TextTrackCue.pauseOnExit`](/de/docs/Web/API/TextTrackCue/pauseOnExit)
  -: Ein `boolean`, der angibt, ob das Video pausiert, wenn dieser Cue nicht mehr angezeigt wird.

## Ereignisse

- [`enter`](/de/docs/Web/API/TextTrackCue/enter_event)
  -: Wird ausgelöst, wenn ein Cue aktiv wird.
- [`exit`](/de/docs/Web/API/TextTrackCue/exit_event)
  -: Wird ausgelöst, wenn der Cue nicht mehr aktiv ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
