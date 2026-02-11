---
title: TextTrackCue
slug: Web/API/TextTrackCue
l10n:
  sourceCommit: fb241f60d2c42614b106f3b4647cc6a4eb2e1bc8
---

{{APIRef("WebVTT")}}

Das **`TextTrackCue`**-Interface der [WebVTT-API](/de/docs/Web/API/WebVTT_API) ist die abstrakte Basisklasse für die verschiedenen abgeleiteten Cue-Typen wie [`VTTCue`](/de/docs/Web/API/VTTCue) und [`DataCue`](/de/docs/Web/API/DataCue); Sie werden mit diesen abgeleiteten Typen und nicht mit der Basisklasse arbeiten.

Diese Cues repräsentieren Textzeilen, die für eine bestimmte Dauer während der Wiedergabe eines [`TextTrack`](/de/docs/Web/API/TextTrack) angezeigt werden. Der Cue enthält die Startzeit (die Zeit, zu der der Text angezeigt wird) und die Endzeit (die Zeit, zu der er von der Anzeige entfernt wird), sowie weitere Informationen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Dieses Interface erbt auch Eigenschaften von [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`TextTrackCue.track`](/de/docs/Web/API/TextTrackCue/track) {{ReadOnlyInline}}
  - : Das [`TextTrack`](/de/docs/Web/API/TextTrack), zu dem dieser Cue gehört, oder `null`, wenn er zu keinem gehört.
- [`TextTrackCue.id`](/de/docs/Web/API/TextTrackCue/id)
  - : Ein String, der den Cue identifiziert.
- [`TextTrackCue.startTime`](/de/docs/Web/API/TextTrackCue/startTime)
  - : Ein `double`, das die Videozeit angibt, zu der der Cue angezeigt wird, in Sekunden.
- [`TextTrackCue.endTime`](/de/docs/Web/API/TextTrackCue/endTime)
  - : Ein `double`, das die Videozeit angibt, zu der der Cue nicht mehr angezeigt wird, in Sekunden.
- [`TextTrackCue.pauseOnExit`](/de/docs/Web/API/TextTrackCue/pauseOnExit)
  - : Ein `boolean`, der angibt, ob das Video pausiert, wenn dieser Cue nicht mehr angezeigt wird.

## Ereignisse

- [`enter`](/de/docs/Web/API/TextTrackCue/enter_event)
  - : Wird ausgelöst, wenn ein Cue aktiv wird.
- [`exit`](/de/docs/Web/API/TextTrackCue/exit_event)
  - : Wird ausgelöst, wenn der Cue nicht mehr aktiv ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
